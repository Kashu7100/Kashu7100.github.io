---
title: "AEI: Actors-Environment Interaction with Adaptive Attention for Temporal Action Proposals Generation"
image: "/images/pubpic/khoa_bmvc21.png"
link: https://www.bmvc2021-virtualconference.com/conference/papers/paper_1095.html
github: https://github.com/UARK-AICV/TAPG-AgentEnvInteration
authors: "K. Vo, H. Joo, <b>K. Yamazaki</b>,  S. Truong, K. Kitani,, M.-T. Tran, N. Le"
collection: publications
permalink: /publication/aei_actors_anvironment_interaction_with_adaptive_attention_for_temporal_action_proposals_generation
type: "conference paper"
publication: "The British Machine Vision Conference (BMVC) - (<b>Oral Presentation-3.33%</b>)"
year: "2021"
date: 2021-10-16
---
<button class="btn btn-round btn-sm btn-ghost-blue" onclick="location.href='https://www.bmvc2021-virtualconference.com/conference/papers/paper_1095.html'">BMVC2021</button>

BMVC '21 statistics: 40 (3.33%) oral / 437 (36.23%) accept / 1206 submissions 

## Abstract
Humans typically perceive the establishment of an action in a video through the interaction between an actor and the surrounding environment. Despite the great progress in temporal action proposal generation, most existing works ignore the above fact and leave their model learning to propose actions as a black-box. In this paper, we make an attempt to simulate that ability of human by proposing Actor Environment Interaction (AEI) network to learn video visual representation for temporal action proposals generation. AEI contains two modules i.e. perception-based visual representation (PVR) and boundary matching module (BMM). PVR represents each video snippet by taking human-human relations and humans-environment relations into consideration using the proposed adaptive attention mechanism. Then, the video representation is taken by BMM to generate action proposals. AEI is comprehensively evaluated in ActivityNet-1.3 and THUMOS-14 datasets, on temporal action proposal and detection tasks, with two boundary matching architectures (i.e. CNN-based and GCN-based) and two classifiers (i.e. Unet and P-GCN). Our AEI shows significant improvement when regarding human logical thinking to extract spatio-temporal visual representation. Our AEI robustly outperforms SOTA methods with remarkable performance and generalization for both temporal action proposal generation and temporal action detection.

