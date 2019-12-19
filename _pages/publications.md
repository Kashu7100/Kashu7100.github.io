---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% include base_path %}

<p> Filter by type:
  <select class="pubtype-select" data-filter-group="pubtype" id="mySelect" onchange="select_func.call(this)">    
    <option value=".pubtype-0" selected>All</option>
    <option value=".pubtype-1">Conference paper</option>
    <option value=".pubtype-2">Journal paper</option>
    <option value=".pubtype-3">Report</option>
    <option value=".pubtype-4">Book section</option>
  </select>
</p>

<script>
function select_func() {
  var x = document.getElementById("mySelect").value;
  if(x == ".pubtype-0"){
  	{% for post in site.publications reversed %}
      {% include archive-single.html %}
    {% endfor %}
  }
  if(x == ".pubtype-1"){
  	document.getElementById("demo").innerHTML = "All.";
  }
  if(x == ".pubtype-2"){
  }
  if(x == ".pubtype-3"){
  }
  if(x == ".pubtype-4"){
  }
}
</script>


