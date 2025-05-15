---
permalink: /
title: "Liang Qin"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<div id="about-me">
<h2>About Me</h2>

Currently, I am a Ph.D student of The University of Osaka supervised by Professor Weiwei Wan and Professor Harada. 

<h3>Education</h3>
<ul>
  <li>Ph.D in Innovation system of Science and Engerinning, The University of Osaka, 2026 (expected)</li>
  <li>M.S. in School of Mechanical Science & Engineering, Huazhong University of Science and Technology, 2021</li>
  <li>B.S. in School of Mechano-Electronic Engineering, XiDian University, 2018</li>
</ul>

<h3>Research Interests</h3>
<ul>
  <li>Robot Learning</li>
  <li>Robot Manipulation</li>
  <li>Machine Learning</li>
</ul>

<h3>Skills</h3>
<ul>
  <li>Programming Languages: Python, C++</li>
  <li>Machine Learning Tools: PyTorch, TensorFlow</li>
  <li>Robotic Frameworks: ROS</li>
</ul>

<p class="text-right">
  <a href="{{ site.baseurl }}/cv/" class="btn btn--primary">Full CV</a>
</p>
</div>

<div id="recent-publications">
<h2>Recent Publications</h2>

{% if site.author.googlescholar %}
  <div class="publications-section">
    You can also find my articles on <a href="{{site.author.googlescholar}}">my Google Scholar profile</a>.
  </div>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
</div>

<!-- <div id="talks-and-presentations">
<h2>Talks and Presentations</h2>

{% for post in site.talks reversed %}
  {% include archive-single-talk.html %}
{% endfor %}
</div> -->

<!-- <div id="teaching">
<h2>Teaching</h2>

{% for post in site.teaching reversed %}
  {% include archive-single.html %}
{% endfor %}
</div> -->

<div id="portfolio">
<h2>Portfolio</h2>

{% for post in site.portfolio %}
  {% include archive-single.html type="grid" %}
{% endfor %}
</div>
