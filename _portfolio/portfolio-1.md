---
title: "Qualia2.0"
excerpt: "Dynamic deep learning framework built from scratch"
image: "/images/qualia.png" 
github: "https://github.com/Kashu7100/Qualia2.0"
docs: "https://kashu7100.github.io/Qualia2.0/index.html"
pdf: "None"
collection: portfolio
---

<button class="btn btn-round btn-sm btn-ghost-blue" onclick="location.href='https://github.com/Kashu7100/Qualia2.0'">github</button>
<button class="btn btn-round btn-sm btn-ghost-blue" onclick="location.href='https://kashu7100.github.io/Qualia2.0/index.html'">docs</button>

### Introduction

David J. Chalmers, an Australian philosopher and cognitive scientist, onece argued that if a system reproduces the functional organization of the brain, it will also reproduce the qualia associated with the brain in the paper "Absent Qualia, Fading Qualia, Dancing Qualia." This library "Qualia" named after the series of arguments in philosophy of mind associated with the qualia, hoping for the creation of a system with subjective consciousness.

Qualia is a deep learning framework deeply integrated with automatic differentiation and dynamic graphing with CUDA acceleration. Thanks to the define-by-run API, the code written with Qualia enjoys high modularity.

## Requirements

* [NVIDIA CUDA GPU](https://developer.nvidia.com/cuda-gpus): Compute Capability of the GPU must be at least 3.0.
* [CUDA Toolkit](https://developer.nvidia.com/cuda-zone): Supported Versions: 8.0, 9.0, 9.1, 9.2, 10.0, and 10.1. 
* [Python 3.6 +](https://www.python.org/)

>   *Note: Qualia is also available for CPU use*

## Installation
For detailed instructions on installing Qualia, see the [installation guide](https://kashu7100.github.io/Qualia2.0/install.html).

Depending on the CUDA version you have installed on your host, choose the best option from following.
```bash
$ git clone https://github.com/Kashu7100/Qualia2.0.git
$ cd Qualia2.0
(For CUDA 8.0)
$ python setup.py install --cuda 80
(For CUDA 9.0)
$ python setup.py install --cuda 90
(For CUDA 9.1)
$ python setup.py install --cuda 91
(For CUDA 9.2)
$ python setup.py install --cuda 92
(For CUDA 10.0)
$ python setup.py install --cuda 100
(For CUDA 10.1)
% python setup.py install --cuda 101
(For without CUDA)
$ python setup.py install
```

### Examples

<table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
  <tbody>
    <tr>
      <td>
        <p align="center"><img src="/images/baseball.gif" width="200"/></p>
      </td>
      <td>
        <p align="center"><img src="/images/openpose_hand.gif" width="200"/></p>
      </td>
      <td>
        <p align="center"><img src="/images/women_pose.png" width="200"/></p>
      </td>
    </tr>
    <tr>
      <td>
        <p align="center"><img src="/images/lorenz_compare.png" width="200"/></p>
      </td>
      <td>
        <p align="center"><img src="/images/mnist_map_colored.png" width="200"/></p>
      </td>
      <td>
        <p align="center"><img src="/images/gan_mnist.gif" width="200"/></p>
      </td>
    </tr>
    <tr>
      <td>
        <p align="center"><img src="/images/cartpole_dqn.gif" width="200"/></p>
      </td>
      <td>
        <p align="center"><img src="/images/mountaincar_duelingnet.gif" width="200"/></p>
      </td>
      <td>
        <p align="center"><img src="/images/lunar_lander_cont_td3.gif" width="200"/></p>
      </td>
    </tr>
    <tr>
      <td>
        <p align="center"><img src="/images/bipedal_walker_td3.gif" width="200"/></p>
      </td>
      <td>
        <p align="center"><img src="/images/roboschool_walker2d_td3.gif" width="200"/></p>
      </td>
    </tr>
  </tbody>
</table>
