---
title: "Personal Projects"
collection: projects
type: "Personal Projects"
topic: "robotics, computer vision"
permalink: /research/personal_projects
image: ""
venue: ""
date: 2020-01-01
location: 
---

## Lailaps (2019)
![image](/images/projpic/lailaps_model.png){: style="float: right; margin:0 10px 10px 0" width="250"}
A 3D printed low-cost quadrupedal robot designed and programed from scratch. The use of Bezier curves for gait generation allows for intuitive and smooth movement of the robot, and the ability to manipulate the robot's full 6-axis body pose gives it a high degree of flexibility and agility. I also developed my own Gym environment in PyBullet for Reinforcement Learning and Behavior Cloning tasks.

![](/images/projpic/lailaps_walk.gif){: height="100"}
![](/images/projpic/lailaps2.jpg){: width="210"}
![](/images/projpic/lailaps_real.gif){: width="100"}


## Qualia (2018)
![image](/images/projpic/qualia.png){: style="float: right; margin:0 10px 10px 0" width="250"}
A PyTorch-like (define-by-run) deep learning framework built from scratch using NumPy. The project began with implementing an automatic differentiation algorithm, followed by the implementation of layers commonly found in modern deep learning libraries. I also included several gradient decent algorithms for network training. While Qualia may be slower in terms of computational speed compared to PyTorch, it still meets the requirements for modern deep learning frameworks.

*Some samples using Qualia:*

![](/images/projpic/baseball.gif){: width="250"}
![](/images/projpic/bipedal_walker_td3.gif){: width="250"}
![](/images/projpic/gan_mnist.gif){: width="250"}