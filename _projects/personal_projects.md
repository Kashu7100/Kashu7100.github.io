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
<!-- ![image](/images/projpic/lailaps_model.png){: style="float: right; margin:0 10px 10px 0" width="250"} -->
A 3D printed low-cost quadrupedal robot designed and programed from scratch. The use of Bezier curves for gait generation allows for intuitive and smooth movement of the robot, and the ability to manipulate the robot's full 6-axis body pose gives it a high degree of flexibility and agility. I also developed my own Gym environment in PyBullet for Reinforcement Learning and Behavior Cloning tasks.

![](/images/projpic/lailaps_walk.gif){: style="border-radius:10px" height="100"}
![](/images/projpic/lailaps2.jpg){: style="border-radius:10px" width="210"}
![](/images/projpic/lailaps_real.gif){: style="border-radius:10px" width="100"}
![](/images/projpic/lailaps_model.png){: width="250"}

## PneuNets Actuator (2019)
![image](/images/projpic/pneunet.gif){: style="border-radius:10px; float: right; margin:0 10px 10px 0" width="125"}
PneuNets, also known as pneumatic networks, are a type of soft actuator composed of a series of channels and chambers embedded within an elastomer. When pressurized, these channels inflate, resulting in motion. The specific motion generated is determined by various design parameters, such as wall thickness and the elastic properties of the material used. To optimize the design of PneuNets, we utilize Finite Element Method (FEM) simulations, which allow us to model the behavior of the actuator and analyze the effects of altering design parameters, such as material stiffness or chamber dimensions, without the need for costly and time-consuming refabrication. With this approach, we can achieve highly efficient and customized PneuNet designs for a wide range of applications.

## Qualia (2018)
<center>
<a href="https://github.com/Kashu7100/Qualia2.0"><img src="/images/projpic/qualia.png" height="auto" width="500" style="border-radius:10px; float: center; margin:0 10px 10px 0"></a>
</center>

<!-- ![image](/images/projpic/qualia.png){: style="float: center; margin:0 10px 10px 0" width="500"} -->

Qualia is a deep learning framework developed from scratch using NumPy (and CuPy for CUDA support), with a PyTorch-like "define-by-run" architecture. The project began with implementing an automatic differentiation algorithm, followed by the implementation of layers commonly found in modern deep learning libraries. I also included several gradient decent algorithms for network training. While Qualia is slower in terms of computational speed compared to PyTorch, it still meets the requirements for modern deep learning frameworks.

*Some samples using Qualia:*

![](/images/projpic/baseball.gif){: width="250"}
![](/images/projpic/roboschool_walker2d_td3.gif){: width="250"}
![](/images/projpic/gan_mnist.gif){: width="250"}