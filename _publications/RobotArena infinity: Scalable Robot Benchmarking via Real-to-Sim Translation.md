---
title: "RobotArena ∞: Scalable Robot Benchmarking via Real-to-Sim Translation"
image: "/images/pubpic/robotarena.png"
link: https://arxiv.org/abs/2510.23571
github: https://robotarenainf.github.io/
authors: "Y. Jangir, Y. Zhang, <b>K. Yamazaki</b>, C. Zhang, K. Tu, T. Ke, L. Ke, Y. Bisk, K. Fragkiadaki"
collection: publication
permalink: /publication/robotarena_infty_scalable_robot_benchmarking_via_real_to_sim_translation
type: "preprint"
publication: ""
year: "2025"
date: 2025-10-28
---
<button class="btn btn-round btn-sm btn-ghost-blue" onclick="location.href='https://arxiv.org/abs/2012.02073'">arXiv</button>

## Abstract
The pursuit of robot generalists - instructable agents capable of performing diverse tasks across diverse environments - demands rigorous and scalable evaluation. Yet real-world testing of robot policies remains fundamentally constrained: it is labor-intensive, slow, unsafe at scale, and difficult to reproduce. Existing simulation benchmarks are similarly limited, as they train and test policies within the same synthetic domains and cannot assess models trained from real-world demonstrations or alternative simulation environments. As policies expand in scope and complexity, these barriers only intensify, since defining "success" in robotics often hinges on nuanced human judgments of execution quality. In this paper, we introduce a new benchmarking framework that overcomes these challenges by shifting VLA evaluation into large-scale simulated environments augmented with online human feedback. Leveraging advances in vision-language models, 2D-to-3D generative modeling, and differentiable rendering, our approach automatically converts video demonstrations from widely used robot datasets into simulated counterparts. Within these digital twins, we assess VLA policies using both automated VLM-guided scoring and scalable human preference judgments collected from crowdworkers, transforming human involvement from tedious scene setup, resetting, and safety supervision into lightweight preference comparisons. To measure robustness, we systematically perturb simulated environments along multiple axes, such as textures and object placements, stress-testing policy generalization under controlled variation. The result is a continuously evolving, reproducible, and scalable benchmark for real-world trained robot manipulation policies, addressing a critical missing capability in today's robotics landscape. 

## Citation
Y. Jangir, Y. Zhang, K. Yamazaki, C. Zhang, K. Tu, T. Ke, L. Ke, Y. Bisk, K. Fragkiadaki “RobotArena $\infty$: Scalable Robot Benchmarking via Real-to-Sim Translation”, <i>arXiv e-prints</i>, 2025.
