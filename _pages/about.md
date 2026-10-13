---
permalink: /
title: "Liang Qin"
excerpt: "Research in robot learning and manipulation at the University of Osaka."
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

{% include base_path %}

<div class="academic-home">
<section id="about-me" class="home-section home-intro" aria-labelledby="about-heading">
  <p class="home-eyebrow">Robot learning &amp; manipulation</p>
  <h2 id="about-heading">About me</h2>
  <p class="home-lead">I study how robots can learn to grasp, plan, and manipulate objects.</p>
  <p>I am a Ph.D. candidate in <a href="https://www.roboticmanipulation.org/">Harada Lab</a> at the University of Osaka, supervised by <a href="https://wanweiwei07.github.io/">Prof. Weiwei Wan</a>. Previously, I was a Ph.D. student in the Robot Learning Group at <a href="http://www.rlg.sys.es.osaka-u.ac.jp/">Nagai Lab</a>, supervised by Prof. Takayuki Nagai.</p>
  <p>I received my master's degree from Huazhong University of Science and Technology (HUST), where I worked with Prof. Wenyu Yang at the <a href="https://dmet.hust.edu.cn/index.htm">State Key Laboratory of Intelligent Manufacturing Equipment and Technology</a>. I received my bachelor's degree from Xidian University in 2018.</p>
  <div class="home-actions">
    <a class="home-button" href="{{ base_path }}/#publications">View publications</a>
    <a class="home-button home-button--secondary" href="mailto:{{ site.author.email }}">Contact me</a>
  </div>
</section>

<section id="research" class="home-section" aria-labelledby="research-heading">
  <h2 id="research-heading">Research interests</h2>
  <div class="research-grid">
    <article class="research-card"><div class="research-thumbnail"><img src="{{ '/images/research/gripper-original.webp' | relative_url }}" alt="Original illustration of an adaptive robotic gripper holding a rounded object." loading="lazy" decoding="async"></div><span class="research-number" aria-hidden="true">01</span><h3>Gripper design</h3><p>Robot grippers and adaptive mechanisms for object manipulation.</p></article>
    <article class="research-card"><div class="research-thumbnail"><img src="{{ '/images/research/motion-planning-original.webp' | relative_url }}" alt="Original illustration of a robot arm planning a curved grasp trajectory around an obstacle." loading="lazy" decoding="async"></div><span class="research-number" aria-hidden="true">02</span><h3>Grasp &amp; motion planning</h3><p>Grasp pose generation and robot motion generation.</p></article>
    <article class="research-card"><div class="research-thumbnail"><img src="{{ '/images/research/robot-learning-original.webp' | relative_url }}" alt="Original illustration of a robot learning to manipulate objects, with a neural network motif." loading="lazy" decoding="async"></div><span class="research-number" aria-hidden="true">03</span><h3>Robot learning</h3><p>Learning-based approaches to robotic manipulation.</p></article>
  </div>
</section>

<section id="publications" class="home-section" aria-labelledby="publications-heading">
  <span id="recent-publications" class="home-anchor" aria-hidden="true"></span>
  <h2 id="publications-heading">Publications</h2>
  {% include featured-publications.html %}
</section>

<section id="education" class="home-section" aria-labelledby="education-heading">
  <h2 id="education-heading">Education</h2>
  <ul class="home-timeline">
    <li><p class="timeline-date">2026 (expected)</p><div><h3>Ph.D. in Innovation Systems of Science and Engineering</h3><p>The University of Osaka</p></div></li>
    <li><p class="timeline-date">2021</p><div><h3>M.S. in Mechanical Science &amp; Engineering</h3><p>Huazhong University of Science and Technology</p></div></li>
    <li><p class="timeline-date">2018</p><div><h3>B.S. in Mechano-Electronic Engineering</h3><p>Xidian University</p></div></li>
  </ul>
</section>

<section id="experience" class="home-section" aria-labelledby="experience-heading">
  <span id="research-experience" class="home-anchor" aria-hidden="true"></span>
  <h2 id="experience-heading">Research experience</h2>
  <ul class="home-timeline">
    <li><p class="timeline-date">Aug. 2024 — present</p><div><h3>Research Assistant · Harada Lab</h3><p>Supervised by Prof. Weiwei Wan</p></div></li>
    <li><p class="timeline-date">Jan. 2023 — Mar. 2024</p><div><h3>Research Assistant · Nagai Lab</h3><p>Supervised by Prof. Takayuki Nagai</p></div></li>
  </ul>
</section>

<section id="work-experience" class="home-section" aria-labelledby="work-heading">
  <h2 id="work-heading">Industry experience</h2>
  <ul class="home-timeline">
    <li><p class="timeline-date">Jul. 2021 — Jul. 2022</p><div><h3>R&amp;D Engineer · Huawei</h3><p>2012 Labs · Shanghai</p><p>Mechanical design of high-precision and test equipment, motion control algorithms for production equipment, and process parameter optimization.</p></div></li>
    <li><p class="timeline-date">Jun. 2019 — Sep. 2019</p><div><h3>Intern · Cobot Technology</h3><p>Wuhan</p><p>Active impedance control, passive adaptive gripper design for peg-in-hole tasks, and inverse kinematic modeling of UR5 and MH5F robots.</p></div></li>
  </ul>
</section>
</div>
