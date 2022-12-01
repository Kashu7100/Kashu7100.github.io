---
title: "AISFormer: Amodal Instance Segmentation with Transformer"
image: "/images/pubpic/minh_bmvc22.png"
link: https://arxiv.org/abs/2210.06323
github: https://github.com/UARK-AICV/AISFormer
authors: "M. Tran, K. Vo, <b>K. Yamazaki</b>, A. Fernandes, M. Kidd, N. Le"
collection: publications
permalink: /publication/aisformer_amodal_instance_segmentation_with_transformer
type: "conference paper"
publication: "The British Machine Vision Conference (BMVC)"
year: "2022"
date: 2022-10-03
---
<button class="btn btn-round btn-sm btn-ghost-blue" onclick="location.href='https://arxiv.org/abs/2210.06323'">arXiv</button> <button class="btn btn-round btn-sm btn-ghost-blue" onclick="location.href='https://github.com/UARK-AICV/AISFormer'">code</button>

## Abstract
Amodal Instance Segmentation (AIS) aims to segment the region of both visible and possible occluded parts of an object instance. While Mask R-CNN-based AIS approaches have shown promising results, they are unable to model high-level features coherence due to the limited receptive field. The most recent transformer-based models show impressive performance on vision tasks, even better than Convolution Neural Networks (CNN). In this work, we present AISFormer, an AIS framework, with a Transformer-based mask head. AISFormer explicitly models the complex coherence between occluder, visible, amodal, and invisible masks within an object's regions of interest by treating them as learnable queries. Specifically, AISFormer contains four modules: (i) feature encoding: extract ROI and learn both short-range and long-range visual features. (ii) mask transformer decoding: generate the occluder, visible, and amodal mask query embeddings by a transformer decoder (iii) invisible mask embedding: model the coherence between the amodal and visible masks, and (iv) mask predicting: estimate output masks including occluder, visible, amodal and invisible. We conduct extensive experiments and ablation studies on three challenging benchmarks i.e. KINS, D2SA, and COCOA-cls to evaluate the effectiveness of AISFormer. 
## Citation
```bibtex
@ARTICLE{2022arXiv221006323T,
       author = {Tran, Minh and Vo, Khoa and Yamazaki, Kashu and Fernandes, Arthur and Kidd, Michael and Le, Ngan},
        title = "{AISFormer: Amodal Instance Segmentation with Transformer}",
      journal = {arXiv e-prints},
     keywords = {Computer Science - Computer Vision and Pattern Recognition},
         year = 2022,
        month = oct,
          eid = {arXiv:2210.06323},
        pages = {arXiv:2210.06323},
archivePrefix = {arXiv},
       eprint = {2210.06323},
 primaryClass = {cs.CV},
       adsurl = {https://ui.adsabs.harvard.edu/abs/2022arXiv221006323T},
      adsnote = {Provided by the SAO/NASA Astrophysics Data System}
}

```
