---
title: "Offset Curves Loss for Imbalanced Problem in Medical Segmentation"
image: "/images/pubpic/le_icpr20b.png"
link: https://ieeexplore.ieee.org/iel7/9411940/9411911/09411921.pdf
github: 
authors: "N. Le, T. Le, <b>K. Yamazaki</b>, B. Toan, K. Luu "
collection: publications
permalink: /publication/offset_curves_loss_for_imbalanced_problem_in_medical_segmentation
type: "conference paper"
publication: "International Conference on Pattern Recognition (ICPR)"
year: "2020"
date: 2020-12-04
---
<button class="btn btn-round btn-sm btn-ghost-blue" onclick="location.href='https://arxiv.org/abs/2012.02463'">arXiv</button>

## Abstract
Medical image segmentation has played an important role in medical analysis and widely developed for many clinical applications. Deep learning-based approaches have achieved high performance in semantic segmentation but they are limited to pixel-wise setting and imbalanced classes data problem. In this paper, we tackle those limitations by developing a new deep learning-based model which takes into account both higher feature level i.e. region inside contour, intermediate feature level i.e. offset curves around the contour and lower feature level i.e. contour. Our proposed Offset Curves (OsC) loss consists of three main fitting terms. The first fitting term focuses on pixel-wise level segmentation whereas the second fitting term acts as attention model which pays attention to the area around the boundaries (offset curves). The third terms plays a role as regularization term which takes the length of boundaries into account. We evaluate our proposed OsC loss on both 2D network and 3D network. Two common medical datasets, i.e. retina DRIVE and brain tumor BRATS 2018 datasets are used to benchmark our proposed loss performance. The experiments have shown that our proposed OsC loss function outperforms other mainstream loss functions such as Cross-Entropy, Dice, Focal on the most common segmentation networks Unet, FCN. 

## Citation
Le, N., Le, T., Yamazaki, K., Bui, T. D., Luu, K., and Savides, M., “Offset Curves Loss for Imbalanced Problem in Medical Segmentation”, <i>arXiv e-prints</i>, 2020.
