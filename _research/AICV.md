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


## Robotics
<!-- **How can we develop robust policies for quadruped robots, similar to those found in animals?** -->

### Low level control with RL

![image](/images/projpic/go1_real.gif){: style="float: right; margin:0 10px 10px 0" width="200"}
![image](/images/aicvpic/go1_isaac_gym.gif){: style="float: right; margin:0 10px 10px 0" width="250"}
While quadrupeds can open the operational domains of robots thanks to their dynamic locomotion capabilities, conventional controllers for legged locomotion constraint their applications to relatively simple environments that can be taken over by wheeled robots. Here we use reinforcement learning to train a quadruped to walk on various terrains. In the simulation, a quadruped robot (Unitree Go1) learns to walk across challenging terrain, including uneven surfaces, slopes, stairs, and obstacles, while following linear- and angular- velocity commands.


### High level control with VLN
coming soon...

## Video Understanding

### Action Proposal
![image](/images/aicvpic/tapg.png){: style="float: right; margin:0 10px 10px 0" width="400"}
Temporal action proposal generation (TAPG) is a challenging task, which requires localizing action intervals in an untrimmed video. Intuitively, we as humans, perceive an action through the interactions between actors, relevant objects, and the surrounding environment. Despite the significant progress of TAPG, a vast majority of existing methods ignore the aforementioned principle of the human perceiving process by applying a backbone network into a given video as a black-box.
We propose to model these interactions with a multi-modal representation network, namely, Actors-Objects-Environment Interaction Network

### Captioning

![image](/images/aicvpic/vltint_vpc_demo1.gif){: style="float: right; margin:0 10px 10px 0" width="400"}
Video paragraph captioning aims to generate a multi-sentence description of an untrimmed video with several temporal event locations in coherent storytelling. Following the human perception process, where the scene is effectively understood by decomposing it into visual and non-visual components under the mutual influence of vision and language, we first propose a visual-linguistic (VL) feature.　In the proposed VL feature, the scene is modeled by three modalities including (i) a global visual environment; (ii) local visual main agents; (iii) linguistic scene elements. We then introduce an autoregressive Transformer-in-Transformer (TinT) to simultaneously capture the semantic coherence of intra- and inter-event contents within a video. 

## Image Understanding
### Open Vocabulary Segmentation

coming soon...

## Medical Imaging
### Tumor Segmentation
![image](/images/aicvpic/rev_brain_tumor.png){: style="float: right; margin:0 10px 10px 0" width="350"}
In medical imaging, we often need to deal with volumetric data, which can be computationally demanding. To reduce the memory footprint during training, we proposed a fully invertible residual network consisting of bijective operations. This volume-preserving network successfully reduced memory demands by about half of the baseline model while maintaining performance.


<!-- ## Spiking Neural Networks

Spiking neural networks aim to bridge the gap between neuroscience and machine learning, using biologically realistic models of neurons to carry out the computation. Due to their functional similarity to the biological neural network, spiking neural networks can embrace the sparsity found in biology and
are highly compatible with temporal code.  -->