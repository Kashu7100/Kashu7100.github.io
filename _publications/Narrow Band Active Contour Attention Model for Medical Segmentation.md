---
title: "Narrow Band Active Contour Attention Model for Medical Segmentation"
image: "/images/pubpic/le_mdpi21.png"
link: https://www.mdpi.com/2075-4418/11/8/1393/htm
github: 
authors: "N. Le, T. Bui, K. Vo-Ho, <b>K. Yamazaki</b>, K. Luu"
collection: publications
permalink: /publication/narrow_band_active_contour_attention_model_for_medical_segmentation
type: "journal paper"
publication: "Diagnostics"
year: "2021"
date: 2021-07-31
---
<button class="btn btn-round btn-sm btn-ghost-blue" onclick="location.href='https://www.mdpi.com/2075-4418/11/8/1393/htm'">link</button>

## Abstract
Medical image segmentation is one of the most challenging tasks in medical image analysis and widely developed for many clinical applications. While deep learning-based approaches have achieved impressive performance in semantic segmentation, they are limited to pixel-wise settings with imbalanced-class data problems and weak boundary object segmentation in medical images. In this paper, we tackle those limitations by developing a new two-branch deep network architecture which takes both higher level features and lower level features into account. The first branch extracts higher level feature as region information by a common encoder-decoder network structure such as Unet and FCN, whereas the second branch focuses on lower level features as support information around the boundary and processes in parallel to the first branch. Our key contribution is the second branch named Narrow Band Active Contour (NB-AC) attention model which treats the object contour as a hyperplane and all data inside a narrow band as support information that influences the position and orientation of the hyperplane. Our proposed NB-AC attention model incorporates the contour length with the region energy involving a fixed-width band around the curve or surface. The proposed network loss contains two fitting terms: (i) a high level feature (i.e., region) fitting term from the first branch; (ii) a lower level feature (i.e., contour) fitting term from the second branch including the (ii1) length of the object contour and (ii2) regional energy functional formed by the homogeneity criterion of both the inner band and outer band neighboring the evolving curve or surface. The proposed NB-AC loss can be incorporated into both 2D and 3D deep network architectures. The proposed network has been evaluated on different challenging medical image datasets, including DRIVE, iSeg17, MRBrainS18 and Brats18. The experimental results have shown that the proposed NB-AC loss outperforms other mainstream loss functions: Cross Entropy, Dice, Focal on two common segmentation frameworks Unet and FCN. Our 3D network which is built upon the proposed NB-AC loss and 3DUnet framework achieved state-of-the-art results on multiple volumetric datasets. 

## Citation
Le, N.; Bui, T.; Vo-Ho, V.-K.; Yamazaki, K.; Luu, K. Narrow Band Active Contour Attention Model for Medical Segmentation. Diagnostics 2021, 11, 1393. https://doi.org/10.3390/diagnostics11081393 
