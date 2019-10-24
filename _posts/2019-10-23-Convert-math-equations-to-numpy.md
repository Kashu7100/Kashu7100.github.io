---
title: 'Convert math equations to numpy'
date: 2019-10-23
permalink: /posts/2019/10/Convert-math-equations-to-numpy/
tags:
  - python
  - math
---

# Convert math equations to numpy
## Hadamard product
<p align="center">
  <img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/d5261f096f4d64b8bef5b1ac3563155c90771a90"/>
</p>

```python
A*B
```

## Matrix multiplication
<p align="center">
  <img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/ba8325b6314b3520051ae287bdf8fdda1a724bfa"/>
</p>
<p align="center">
  <img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/2880b4c66856aa0f4938d8be070f129fabdf4b89"/>
</p>

```python 
np.dot(A, B)
np.matmul(A, B)
A @ B
```

## Outer product
<p align="center">
  <img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/84b90f9c4f1f4f2173377cfbda368d1ff1141342"/>
</p>
<p align="center">
  <img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/366d8e69cc092685cbd13d3c350e180c77df267e"/>
</p>

```python
np.outer(A, B)
```

## Kronecker product
<p align="center">
  <img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/0fce3f5ef7357abd7110d1d33490cb6f517b5f4e"/>
</p>

```python
np.kron(A, B)
```
if `a` and `b` are vectors, the Kronecker product is a form of vectorization (or flattening) of the outer product of `a` and `b`. 
```python
np.kron(a, b) == np.outer(a, b).reshape(-1)
```
