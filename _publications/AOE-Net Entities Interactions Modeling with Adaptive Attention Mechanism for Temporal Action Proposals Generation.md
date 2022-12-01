---
title: "AOE-Net: Entities Interactions Modeling with Adaptive Attention Mechanism for Temporal Action Proposals Generation"
image: "/images/pubpic/khoa_ijcv22.png"
link: https://link.springer.com/article/10.1007/s11263-022-01702-9
github: https://github.com/UARK-AICV/AOE-Net
authors: "K. Vo, S. Truong*, <b>K. Yamazaki</b>*, B. Raj, MT. Tran, N. Le"
collection: publications
permalink: /publication/aoe_net_entities_interactions_modeling_with_adaptive_attention_mechanism_for_temporal_action_proposals_generation
type: "journal paper"
publication: "International Journal of Computer Vision (IJCV)"
year: "2022"
date: 2022-10-03
---
<button class="btn btn-round btn-sm btn-ghost-blue" onclick="location.href='https://arxiv.org/abs/2210.02578'">arXiv</button>

## Abstract
Temporal action proposal generation (TAPG) is a challenging task, which requires localizing action intervals in an untrimmed video. Intuitively, we as humans, perceive an action through the interactions between actors, relevant objects, and the surrounding environment. Despite the significant progress of TAPG, a vast majority of existing methods ignore the aforementioned principle of the human perceiving process by applying a backbone network into a given video as a black-box. In this paper, we propose to model these interactions with a multi-modal representation network, namely, Actors-Objects-Environment Interaction Network (AOE-Net). Our AOE-Net consists of two modules, i.e., perception-based multi-modal representation (PMR) and boundary-matching module (BMM). Additionally, we introduce adaptive attention mechanism (AAM) in PMR to focus only on main actors (or relevant objects) and model the relationships among them. PMR module represents each video snippet by a visual-linguistic feature, in which main actors and surrounding environment are represented by visual information, whereas relevant objects are depicted by linguistic features through an image-text model. BMM module processes the sequence of visual-linguistic features as its input and generates action proposals. Comprehensive experiments and extensive ablation studies on ActivityNet-1.3 and THUMOS-14 datasets show that our proposed AOE-Net outperforms previous state-of-the-art methods with remarkable performance and generalization for both TAPG and temporal action detection. To prove the robustness and effectiveness of AOE-Net, we further conduct an ablation study on egocentric videos, i.e. EPIC-KITCHENS 100 dataset. Source code is available upon acceptance. 

## Citation
```bibtex
@ARTICLE{2022arXiv221002578V,
       author = {Vo, Khoa and Truong, Sang and Yamazaki, Kashu and Raj, Bhiksha and Tran, Minh-Triet and Le, Ngan},
        title = "{AOE-Net: Entities Interactions Modeling with Adaptive Attention Mechanism for Temporal Action Proposals Generation}",
      journal = {arXiv e-prints},
     keywords = {Computer Science - Computer Vision and Pattern Recognition},
         year = 2022,
        month = oct,
          eid = {arXiv:2210.02578},
        pages = {arXiv:2210.02578},
archivePrefix = {arXiv},
       eprint = {2210.02578},
 primaryClass = {cs.CV},
       adsurl = {https://ui.adsabs.harvard.edu/abs/2022arXiv221002578V},
      adsnote = {Provided by the SAO/NASA Astrophysics Data System}
}
```
