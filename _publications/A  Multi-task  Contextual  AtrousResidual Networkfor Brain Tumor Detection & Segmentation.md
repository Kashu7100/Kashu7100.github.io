---
title: "A Multi-task Contextual Atrous Residual Networkfor Brain Tumor Detection & Segmentation"
image: "/images/pubpic/le_icpr20a.png"
link: https://arxiv.org/abs/2012.02073
github: 
authors: "N. Le, <b>K. Yamazaki</b>, K. Quach, D. Truong, and M. Savvides"
collection: publications
permalink: /publication/a_multi_task_contextual_atrous_residual_networkfor_brain_tumor_detection_and_segmentation
type: "conference paper"
publication: "International Conference on Pattern Recognition (ICPR)"
year: "2020"
date: 2020-12-03
---
<button class="btn btn-round btn-sm btn-ghost-blue" onclick="location.href='https://arxiv.org/abs/2012.02073'">arXiv</button>

## Abstract
In recent years, deep neural networks have achieved state-of-the-art performance in a variety of recognition and segmentation tasks in medical imaging including brain tumor segmentation. We investigate that segmenting a brain tumor is facing to the imbalanced data problem where the number of pixels belonging to the background class (non tumor pixel) is much larger than the number of pixels belonging to the foreground class (tumor pixel). To address this problem, we propose a multi-task network which is formed as a cascaded structure. Our model consists of two targets, i.e., (i) effectively differentiate the brain tumor regions and (ii) estimate the brain tumor mask. The first objective is performed by our proposed contextual brain tumor detection network, which plays a role of an attention gate and focuses on the region around brain tumor only while ignoring the far neighbor background which is less correlated to the tumor. The second objective is built upon a 3D atrous residual network and under an encode-decode network in order to effectively segment both large and small objects (brain tumor). Our 3D atrous residual network is designed with a skip connection to enables the gradient from the deep layers to be directly propagated to shallow layers, thus, features of different depths are preserved and used for refining each other. In order to incorporate larger contextual information from volume MRI data, our network utilizes the 3D atrous convolution with various kernel sizes, which enlarges the receptive field of filters. Our proposed network has been evaluated on various datasets including BRATS2015, BRATS2017 and BRATS2018 datasets with both validation set and testing set. Our performance has been benchmarked by both region-based metrics and surface-based metrics. We also have conducted comparisons against state-of-the-art approaches. 

## Citation
Le, N., Yamazaki, K., Truong, D., Gia Quach, K., and Savvides, M., “A Multi-task Contextual Atrous Residual Network for Brain Tumor Detection & Segmentation”, <i>arXiv e-prints</i>, 2020.
