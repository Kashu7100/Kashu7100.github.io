---
layout: archive
title: "Portfolio"
permalink: /portfolio/
author_profile: true
---

{% include base_path %}

<p align="center">
  <img src="https://github.com/Kashu7100/Kashu7100.github.io/blob/master/images/qualia.png" />
</p>


{% for post in site.portfolio %}
  {% include archive-single.html %}
{% endfor %}
