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

Currently, I am a Ph.D student of The University of Osaka supervised by Professor Weiwei Wan and Professor Harada. 

Education
======
* Ph.D in Innovation system of Science and Engerinning, The University of Osaka, 2026 (expected)
* M.S. in School of Mechanical Science & Engineering, Huazhong University of Science and Technology, 2021.
* B.S. in School of Mechano-Electronic Engineering, XiDian University, 2018.

Work experience
======
* Spring 2024: Academic Pages Collaborator
  * GitHub University
  * Duties includes: Updates and improvements to template
  * Supervisor: The Users

* Fall 2015: Research Assistant
  * GitHub University
  * Duties included: Merging pull requests
  * Supervisor: Professor Hub

* Summer 2015: Research Assistant
  * GitHub University
  * Duties included: Tagging issues
  * Supervisor: Professor Git
  
Skills
======
* Skill 1
* Skill 2
  * Sub-skill 2.1
  * Sub-skill 2.2
  * Sub-skill 2.3
* Skill 3

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>
  
Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Service and leadership
======
* Currently signed in to 43 different slack teams

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

<div id="talks-and-presentations">
<h2>Talks and Presentations</h2>

{% for post in site.talks reversed %}
  {% include archive-single-talk.html %}
{% endfor %}
</div>

<div id="teaching">
<h2>Teaching</h2>

{% for post in site.teaching reversed %}
  {% include archive-single.html %}
{% endfor %}
</div>

<div id="portfolio">
<h2>Portfolio</h2>

{% for post in site.portfolio %}
  {% include archive-single.html type="grid" %}
{% endfor %}
</div>
