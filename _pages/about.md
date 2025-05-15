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

I am a researcher focusing on robot learning and manipulation at Osaka University. My research interests include...
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
