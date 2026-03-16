// ============================================
// Navigation
// ============================================
const nav = document.querySelector('.nav');
const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
  if (backToTop) backToTop.classList.toggle('visible', window.scrollY > 400);
});

// Mobile menu
const hamburger = document.querySelector('.nav__hamburger');
const navLinks = document.querySelector('.nav__links');
if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(link =>
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    })
  );
}

// Active nav highlight
const sections = document.querySelectorAll('section[id]');
if (sections.length) {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const link = document.querySelector(`.nav__links a[href="#${entry.target.id}"]`);
      if (link) link.classList.toggle('active', entry.isIntersecting);
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach(s => obs.observe(s));
}

// ============================================
// Carousel
// ============================================
(function initCarousel() {
  const track = document.querySelector('.carousel__track');
  const prevBtn = document.querySelector('.carousel__btn--prev');
  const nextBtn = document.querySelector('.carousel__btn--next');
  const dotsContainer = document.getElementById('carouselDots');
  if (!track || !prevBtn || !nextBtn) return;

  const slides = Array.from(track.children);
  let currentPage = 0;

  function getPerPage() {
    const w = window.innerWidth;
    if (w <= 480) return 1;
    if (w <= 768) return 2;
    return 3;
  }

  function getTotalPages() {
    return Math.max(1, Math.ceil(slides.length / getPerPage()));
  }

  function buildDots() {
    if (!dotsContainer) return;
    dotsContainer.innerHTML = '';
    const total = getTotalPages();
    for (let i = 0; i < total; i++) {
      const dot = document.createElement('button');
      dot.className = 'carousel__dot' + (i === currentPage ? ' active' : '');
      dot.setAttribute('aria-label', `Page ${i + 1}`);
      dot.addEventListener('click', () => goTo(i));
      dotsContainer.appendChild(dot);
    }
  }

  function getSlideWidth() {
    const perPage = getPerPage();
    const containerWidth = track.parentElement.offsetWidth;
    const gap = perPage <= 1 ? 0 : 19.2; // 1.2rem ≈ 19.2px
    return (containerWidth - gap * (perPage - 1)) / perPage;
  }

  function goTo(page) {
    const total = getTotalPages();
    currentPage = Math.max(0, Math.min(page, total - 1));

    const perPage = getPerPage();
    const gap = perPage <= 1 ? 0 : 19.2;
    const slideW = getSlideWidth();
    const offset = currentPage * perPage * (slideW + gap);
    track.style.transform = `translateX(-${offset}px)`;

    prevBtn.disabled = currentPage === 0;
    nextBtn.disabled = currentPage >= total - 1;

    if (dotsContainer) {
      dotsContainer.querySelectorAll('.carousel__dot').forEach((d, i) =>
        d.classList.toggle('active', i === currentPage)
      );
    }
  }

  prevBtn.addEventListener('click', () => goTo(currentPage - 1));
  nextBtn.addEventListener('click', () => goTo(currentPage + 1));

  // Rebuild on resize
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (currentPage >= getTotalPages()) currentPage = getTotalPages() - 1;
      buildDots();
      goTo(currentPage);
    }, 150);
  });

  buildDots();
  goTo(0);
})();

// ============================================
// Publications — Semantic Scholar API
// ============================================
const S2_AUTHOR_ID = '1556433845';
const S2_FIELDS = 'title,authors,year,venue,publicationDate,externalIds,openAccessPdf,citationCount,url,citationStyles';

// Optional: map paper titles (lowercase) to code repos
const CODE_LINKS = {
  'vltint: visual-linguistic transformer-in-transformer for coherent video paragraph captioning': 'https://github.com/UARK-AICV/VLTinT',
  'vlcap: vision-language with contrastive learning for coherent video paragraph captioning': 'https://github.com/UARK-AICV/VLCAP',
  'open-fusion: real-time open-vocabulary 3d mapping and queryable scene representation': 'https://github.com/UARK-AICV/OpenFusion',
  'aisformer: amodal instance segmentation with transformer': 'https://github.com/UARK-AICV/AISFormer',
  'aoe-net: entities interactions modeling with adaptive attention mechanism for temporal action proposals generation': 'https://github.com/UARK-AICV/AOE-Net',
  'aei: actors-environment interaction with adaptive attention for temporal action proposals generation': 'https://github.com/UARK-AICV/TAPG-AgentEnvInteration',
  'aerialformer: multi-resolution transformer for aerial image segmentation': 'https://github.com/UARK-AICV/AerialFormer',
  'clip-tsa: clip-assisted temporal self-attention for weakly-supervised video anomaly detection': 'https://github.com/joos2010kj/CLIP-TSA',
  'genesis: a generative and universal physics engine for robotics and beyond': 'https://github.com/Genesis-Embodied-AI/Genesis',
  'r2-bench: benchmarking the robustness of referring perception models under perturbations': 'https://github.com/lxa9867/r2bench',
};

// Optional: map paper titles (lowercase) to project pages
const PROJECT_LINKS = {
  'learning to assist: physics-grounded human-human control via multi-agent reinforcement learning': 'https://yutoshibata07.github.io/AssistMimic-projectpage/',
  'extremcontrol: low-latency humanoid teleoperation with direct extremity control': 'https://owenowl.github.io/extremcontrol/',
  'robotarena ∞: scalable robot benchmarking via real-to-sim translation': 'https://robotarenainf.github.io/',
  'genesis: a generative and universal physics engine for robotics and beyond': 'https://genesis-embodied-ai.github.io/',
  'open-fusion: real-time open-vocabulary 3d mapping and queryable scene representation': 'https://uark-aicv.github.io/OpenFusion/',
  'vltint: visual-linguistic transformer-in-transformer for coherent video paragraph captioning': 'https://uark-aicv.github.io/VLTinT/',
};

(async function loadPublications() {
  const container = document.getElementById('pub-container');
  const loading = document.getElementById('pub-loading');
  if (!container) return;

  try {
    const res = await fetch(
      `https://api.semanticscholar.org/graph/v1/author/${S2_AUTHOR_ID}/papers?fields=${S2_FIELDS}&limit=500`
    );
    if (!res.ok) throw new Error(`API ${res.status}`);
    const data = await res.json();

    const papers = (data.data || [])
      .filter(p => p.title && p.year)
      .sort((a, b) => {
        if (b.year !== a.year) return b.year - a.year;
        return (b.publicationDate || '').localeCompare(a.publicationDate || '');
      });

    // Group by year
    const byYear = {};
    papers.forEach(p => {
      if (!byYear[p.year]) byYear[p.year] = [];
      byYear[p.year].push(p);
    });

    const years = Object.keys(byYear).sort((a, b) => b - a);
    let html = '';

    for (const year of years) {
      html += `<div class="pub-year-heading">${year}</div>`;
      for (const p of byYear[year]) {
        const authors = (p.authors || []).map(a => {
          if (a.authorId === S2_AUTHOR_ID) return `<strong>${escHtml(a.name)}</strong>`;
          return escHtml(a.name);
        }).join(', ');

        const venue = p.venue || '';
        const pdfUrl = getPdfUrl(p);
        const codeUrl = CODE_LINKS[p.title.toLowerCase()] || '';
        const projectUrl = PROJECT_LINKS[p.title.toLowerCase()] || '';
        const bibtex = p.citationStyles?.bibtex || '';
        const s2url = p.url || '';

        html += `<div class="pub-card--dynamic">
          <div class="pub-card__title"><a href="${s2url}" target="_blank">${escHtml(p.title)}</a></div>
          <div class="pub-card__authors">${authors}</div>
          ${venue ? `<div class="pub-card__venue">${escHtml(venue)}</div>` : ''}
          <div class="pub-card__links" style="margin-top:.35rem;">
            ${projectUrl ? `<a href="${projectUrl}" target="_blank">Project</a>` : ''}
            ${pdfUrl ? `<a href="${pdfUrl}" target="_blank">PDF</a>` : ''}
            ${codeUrl ? `<a href="${codeUrl}" target="_blank">Code</a>` : ''}
            ${bibtex ? `<button onclick="showBibtex(this)" data-bib="${escAttr(bibtex)}">BibTeX</button>` : ''}
          </div>
        </div>`;
      }
    }

    if (loading) loading.style.display = 'none';
    container.innerHTML = html;
  } catch (err) {
    console.error('Semantic Scholar fetch failed:', err);
    if (loading) loading.innerHTML = `<p>Could not load publications. Visit <a href="https://scholar.google.com/citations?hl=en&user=TF2LRvMAAAAJ" target="_blank">Google Scholar</a> for the full list.</p>`;
  }
})();

function getPdfUrl(paper) {
  if (paper.openAccessPdf?.url) return paper.openAccessPdf.url;
  const arxivId = paper.externalIds?.ArXiv;
  if (arxivId) return `https://arxiv.org/pdf/${arxivId}.pdf`;
  const doi = paper.externalIds?.DOI;
  if (doi) return `https://doi.org/${doi}`;
  return '';
}

function escHtml(s) {
  const d = document.createElement('div');
  d.textContent = s;
  return d.innerHTML;
}

function escAttr(s) {
  return s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// ============================================
// BibTeX Modal
// ============================================

// Create modal once
const overlay = document.createElement('div');
overlay.className = 'bibtex-overlay';
overlay.innerHTML = `
  <div class="bibtex-modal">
    <div class="bibtex-modal__header">
      <h3>BibTeX Citation</h3>
      <button class="bibtex-modal__close" aria-label="Close">&times;</button>
    </div>
    <pre id="bibtexContent"></pre>
    <button class="bibtex-modal__copy" id="bibtexCopy">Copy to clipboard</button>
  </div>
`;
document.body.appendChild(overlay);

const bibtexPre = document.getElementById('bibtexContent');
const bibtexCopyBtn = document.getElementById('bibtexCopy');

overlay.querySelector('.bibtex-modal__close').addEventListener('click', closeBibtex);
overlay.addEventListener('click', (e) => { if (e.target === overlay) closeBibtex(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeBibtex(); });

bibtexCopyBtn.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(bibtexPre.textContent);
    bibtexCopyBtn.textContent = 'Copied!';
    bibtexCopyBtn.classList.add('copied');
    setTimeout(() => {
      bibtexCopyBtn.textContent = 'Copy to clipboard';
      bibtexCopyBtn.classList.remove('copied');
    }, 2000);
  } catch {
    // Fallback
    const range = document.createRange();
    range.selectNodeContents(bibtexPre);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    document.execCommand('copy');
    bibtexCopyBtn.textContent = 'Copied!';
    bibtexCopyBtn.classList.add('copied');
    setTimeout(() => {
      bibtexCopyBtn.textContent = 'Copy to clipboard';
      bibtexCopyBtn.classList.remove('copied');
    }, 2000);
  }
});

function showBibtex(btn) {
  const bib = btn.dataset.bib;
  bibtexPre.textContent = bib;
  overlay.classList.add('open');
}

function closeBibtex() {
  overlay.classList.remove('open');
}

// ============================================
// Publication filter (on publications.html)
// ============================================
const filterBtns = document.querySelectorAll('.pub-filter button');
if (filterBtns.length) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      document.querySelectorAll('.pub-year-group').forEach(group => {
        let hasVisible = false;
        group.querySelectorAll('.pub-card').forEach(card => {
          if (filter === 'all' || card.dataset.type === filter) {
            card.style.display = '';
            hasVisible = true;
          } else {
            card.style.display = 'none';
          }
        });
        const heading = group.querySelector('.pub-year-heading');
        if (heading) heading.style.display = hasVisible ? '' : 'none';
      });
    });
  });
}
