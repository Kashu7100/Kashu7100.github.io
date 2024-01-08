---
title: "Artificial Intelligence and Computer Vision Lab"
collection: research
type: "Research Assistant"
topic: "robotics, computer vision"
permalink: /research/AICV
image: "/images/uark_logo.jpg"
venue: "University of Arkansas, Computer Science and Computer Engineering"
date: 2020-01-01
location: "Fayetteville, AR"
---


## Vision and Language Grounding for Robotics

coming soon...

## Explainable Representation Learning for Video Understanding

Extracting contextual visual representation from untrimmed videos is challenging due to their long and complex temporal structure. While existing approaches typically rely on pre-trained backbone networks to extract visual representation, we take a different approach, focusing on extracting the most contextual information in an explainable manner.

### Application in Action Proposal
<!-- <a href="url"><img src="/images/aicvpic/tapg.png" height="auto" width="400" style="border-radius:5%; float: right; margin:0 10px 10px 0"></a> -->
![image](/images/aicvpic/tapg.png){: style="float: right; margin:0 10px 10px 0" width="400" }

Temporal action proposal generation (TAPG) is a challenging task, which requires localizing action intervals in an untrimmed video. Given an untrimmed video $\mathcal{V}$, our goal is to generate a set of temporal segments $a_i = (s_i, e_i) \|_{i=1}^{M}$ which inclusively and tightly contain actions of interest. Where an action segment comprised of a starting timestamp ($s_i$) and an ending timestamp ($e_i$).

Comprehensive experiments and extensive ablation studies on ActivityNet−1.3 and THUMOS-14 datasets show that our proposed [AOE-Net](https://link.springer.com/article/10.1007/s11263-022-01702-9) outperforms previous state-of-the-art methods with remarkable performance and generalization for both TAPG and temporal action detection.

### Application in Captioning
<center>
<img src="/images/aicvpic/vltint_vpc_demo1.gif" height="auto" width="500" style="border-radius:10px; float: center; margin:0 10px 10px 0">
<center>


</center> -->

![image](/images/aicvpic/vltint_vpc_demo1.gif){: style="float: right; margin:10px 10px 10px 10px" width="38c0" }

<!-- <div class="slideshow-container">

  <div class="mySlides fade">
    <div class="numbertext">1 / 3</div>
    
  </div>

  <div class="mySlides fade">
    <div class="numbertext">2 / 3</div>
    <img src="/images/aicvpic/vltint_vpc_demo2.gif" style="border-radius:10px;">
  </div>

  <div class="mySlides fade">
    <div class="numbertext">3 / 3</div>
    <img src="/images/aicvpic/vltint_vpc_demo3.gif" style="border-radius:10px;">
  </div>

  <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
  <a class="next" onclick="plusSlides(1)">&#10095;</a>
</div>
<div style="text-align:center">
  <span class="dot" onclick="currentSlide(1)"></span>
  <span class="dot" onclick="currentSlide(2)"></span>
  <span class="dot" onclick="currentSlide(3)"></span>
</div>
</center>  -->

Video paragraph captioning aims to generate a multi-sentence description of an untrimmed video in coherent storytelling given the event boundaries. Given an untrimmed video $\mathcal{V}$ and event boundaries $a_i = (s_i, e_i) \|_{i=1}^{M}$, our goal is to generate a coherent paragraph $\mathcal{P}$ with $M$ sentences that describes the whole video $\mathcal{V}$.

We proposed an autoregressive Transformer-in-Transformer (TinT) to simultaneously capture the semantic coherence of intra- and inter-event contents within a video.
Comprehensive experiments and extensive ablation studies on ActivityNet Captions and YouCookII datasets show that the proposed Visual-Linguistic Transformer-in-Transform ([VLTinT](https://uark-aicv.github.io/VLTinT/)) outperforms prior state-of-the-art methods on both accuracy and diversity.

## Open Vocabulary Models for Semantic Understanding

Open vocabulary recognition has recently attracted a lot of attention in computer vision as it allows to perform language-conditioned unbounded understanding.

<center>
<a href="/images/openvoc1.png"><img src="/images/openvoc1.png" height="auto" width="230" style="border-radius:10px; float: center; margin:0 10px 10px 0"></a>
<a href="/images/openvoc2.png"><img src="/images/openvoc2.png" height="auto" width="230" style="border-radius:10px; float: center; margin:0 10px 10px 0"></a>
<a href="/images/openvoc3.png"><img src="/images/openvoc3.png" height="auto" width="230" style="border-radius:10px; float: center; margin:0 10px 10px 0"></a>
</center>


## Learning High-Agility Locomotion for Quadrupeds

While quadrupeds can open the operational domains of robots thanks to their dynamic locomotion capabilities, conventional controllers for legged locomotion constraint their applications to relatively simple environments that can be taken over by wheeled robots. We utilize a reinforcement learning and representation learning to acquire the high-agility locomotion skills for quadrupeds.

### Massively Parallel Reinforcement Learning

<center>
<img src="/images/aicvpic/go1_isaac_gym.gif" height="auto" width="500" style="border-radius:10px; float: center; margin:0 10px 10px 0">
</center>

Here we use massively parallel RL to train a quadruped to walk on various terrains. In the simulation, a quadruped learns to walk across challenging terrain, including uneven surfaces, slopes, stairs, and obstacles, while following linear- and angular- velocity commands.
We evaluate our learnt policies on a real Unitree Go1 robot. We find that our policies trained entirely in simulation are able to transfer to the real world zero-shot.

<center>
<img src="/images/projpic/go1_real.gif" height="auto" width="230" style="border-radius:10px; margin:0 10px 10px 0">
<a href="/images/llm_voice.mp4"><img src="/images/llm_voice.gif" height="auto" width="290" style="border-radius:10px; margin:0 10px 10px 0"></a>
</center>

<!-- ## Utilizing LLMs for Robotics

Large language models (LLMs)  -->

## Memory Efficient Model for Medical Imaging
![image](/images/aicvpic/rev_brain_tumor.png){: style="float: right; margin:0 10px 10px 0" width="320"}
In medical imaging, we frequently work with volumetric data, which can be challenging to process computationally. To tackle this issue, we have developed a fully invertible residual network that utilizes bijective operations to reduce the memory footprint during training. Our volume-preserving approach has proven to be highly effective in reducing memory demands during training. By implementing this technique, we have successfully reduced memory requirements by approximately 50% compared to the baseline model, without compromising the performance.


<script>
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
</script>