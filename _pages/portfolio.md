---
layout: archive
title: "Portfolio"
permalink: /portfolio/
author_profile: true
---

{% include base_path %}

<p align="center">
  <img src="/images/qualia.png" />
</p>


{% for post in site.portfolio %}
  {% include archive-single.html %}
{% endfor %}