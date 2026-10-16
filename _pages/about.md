---
layout: robotics
permalink: /
title: "Liang Qin"
excerpt: "Research in robot learning and manipulation at the University of Osaka."
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

{% include base_path %}

<div class="academic-home">
<section id="about-me" class="home-section home-intro" aria-labelledby="about-heading">
  <div class="hero-copy">
    <p class="home-eyebrow">Robot learning &amp; manipulation</p>
    <h1 id="about-heading">Liang Qin</h1>
    <p class="hero-role">Ph.D. candidate · {% include organization.html key="osaka" %}</p>
    <p class="home-lead">I study how robots can learn to grasp, plan, and manipulate objects.</p>
    <p>I am a Ph.D. candidate in <a href="https://www.roboticmanipulation.org/">Harada Lab</a> at the University of Osaka, supervised by <a href="https://wanweiwei07.github.io/">Prof. Weiwei Wan</a>. Previously, I was a Ph.D. student in the Robot Learning Group at <a href="http://www.rlg.sys.es.osaka-u.ac.jp/">Nagai Lab</a>, supervised by Prof. Takayuki Nagai.</p>
    <p>I received my master's degree from Huazhong University of Science and Technology (HUST), where I worked with Prof. Wenyu Yang at the <a href="https://dmet.hust.edu.cn/index.htm">State Key Laboratory of Intelligent Manufacturing Equipment and Technology</a>. I received my bachelor's degree from Xidian University in 2018.</p>
    <div class="home-actions">
      <a class="home-button" href="{{ '/#publications' | relative_url }}">Publications <span aria-hidden="true">↗</span></a>
      <a href="mailto:{{ site.author.email }}">Email</a>
      <a href="{{ site.author.orcid }}">ORCID</a>
      <a href="https://github.com/{{ site.author.github }}">GitHub</a>
      <a href="{{ '/cv/' | relative_url }}">CV</a>
    </div>
  </div>
  <figure class="hero-portrait">
    <img src="{{ '/images/profile.jpg' | relative_url }}" alt="Liang Qin" width="360" height="420" decoding="async">
    <figcaption>Osaka, Japan</figcaption>
  </figure>
</section>

<section id="research" class="home-section" aria-labelledby="research-heading">
  <h2 id="research-heading">Research interests</h2>
  <div class="research-grid research-grid--projects">
    <article class="research-card research-card--gripper" aria-labelledby="gripper-heading">
      <span class="research-number" aria-hidden="true">01</span><h3 id="gripper-heading">Gripper design</h3>
      <div class="gripper-projects">
        <section class="gripper-project" aria-labelledby="tweezers-heading">
          <h4 id="tweezers-heading">Tweezers gripper</h4>
          <p>A motor-driven tweezers gripper with interchangeable, 3D-printed adapters for small-object manipulation.</p>
          <figure class="gripper-demo">
            <video controls muted playsinline preload="none" poster="{{ '/images/research/tweezers-demo-poster.jpg' | relative_url }}" aria-label="Silent demonstration of the tweezers gripper manipulating a small metal part" width="568" height="320">
              <source src="{{ '/files/tweezers-gripper-demo.mp4' | relative_url }}" type="video/mp4">
              Your browser does not support embedded video. <a href="{{ '/files/tweezers-gripper-demo.mp4' | relative_url }}">Download the demonstration</a>.
            </video>
            <figcaption>Gripper demonstration · <a href="{{ '/files/tweezers-gripper-demo.mp4' | relative_url }}">Open video</a></figcaption>
          </figure>
          <div class="gripper-figures">
            <figure><a href="{{ '/images/research/tweezers-task.webp' | relative_url }}" aria-label="View full small-part measurement task diagram"><img src="{{ '/images/research/tweezers-task.webp' | relative_url }}" alt="Small metal switch parts and a robot reorientation setup for measurement from multiple views." loading="lazy" decoding="async" width="2400" height="1098"></a><figcaption>Small-part measurement task <span aria-hidden="true">↗</span></figcaption></figure>
            <figure><a href="{{ '/images/research/tweezers-design.webp' | relative_url }}" aria-label="View full tweezers gripper design diagram"><img src="{{ '/images/research/tweezers-design.webp' | relative_url }}" alt="Motor, drive gears, tweezers adapters and parallel pressing mechanism of the gripper." loading="lazy" decoding="async" width="2400" height="1199"></a><figcaption>Mechanism &amp; design <span aria-hidden="true">↗</span></figcaption></figure>
          </div>
        </section>
        <section class="gripper-project" aria-labelledby="multi-finger-heading">
          <h4 id="multi-finger-heading">Multi-finger gripper</h4>
          <p>A gripper prototype and a sequence showing the fingers closing around a cylindrical object.</p>
          <figure class="gripper-prototype">
            <a href="{{ '/images/research/multi-finger-prototype.png' | relative_url }}" aria-label="View full multi-finger gripper prototype photo"><img src="{{ '/images/research/multi-finger-prototype.png' | relative_url }}" alt="Gripper prototype with its motors, wiring and articulated fingers." loading="lazy" decoding="async"></a>
            <figcaption>Gripper prototype <span aria-hidden="true">↗</span></figcaption>
          </figure>
          <figure class="gripper-sequence">
            <a href="{{ '/images/research/multi-finger-grasp-sequence.jpg' | relative_url }}" aria-label="View full multi-finger grasping sequence"><img src="{{ '/images/research/multi-finger-grasp-sequence.jpg' | relative_url }}" alt="Five successive views of the articulated gripper closing around a cylindrical object." loading="lazy" decoding="async" width="765" height="206"></a>
            <figcaption>Grasping sequence <span aria-hidden="true">↗</span></figcaption>
          </figure>
        </section>
      </div>
    </article>
    <article class="research-card"><div class="research-thumbnail"><img src="{{ '/images/research/motion-planning-screen.webp' | relative_url }}" alt="MoveIt RViz motion-planning interface with Panda robot poses." loading="lazy" decoding="async"></div><span class="research-number" aria-hidden="true">02</span><h3>Grasp &amp; motion planning</h3><p>Grasp pose generation and robot motion generation.</p><p class="research-credit">Screenshot: <a href="https://moveit.ai/">MoveIt</a></p></article>
    <article class="research-card"><div class="research-thumbnail"><img src="{{ '/images/research/robot-learning-demo.webp' | relative_url }}" alt="Real robot manipulating a mug in the Diffusion Policy demonstration." loading="lazy" decoding="async"></div><span class="research-number" aria-hidden="true">03</span><h3>Robot learning</h3><p>Learning-based approaches to robotic manipulation.</p><p class="research-credit">Demo: <a href="https://diffusion-policy.cs.columbia.edu/">Diffusion Policy</a></p></article>
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
    <li><p class="timeline-date">2026 (expected)</p><div><h3>Ph.D. in Innovation Systems of Science and Engineering</h3><p>{% include organization.html key="osaka" %}</p></div></li>
    <li><p class="timeline-date">2021</p><div><h3>M.S. in Mechanical Science &amp; Engineering</h3><p>{% include organization.html key="hust" %}</p></div></li>
    <li><p class="timeline-date">2018</p><div><h3>B.S. in Mechano-Electronic Engineering</h3><p>{% include organization.html key="xidian" %}</p></div></li>
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
    <li><p class="timeline-date">Jul. 2021 — Jul. 2022</p><div><h3>R&amp;D Engineer · {% include organization.html key="huawei" %}</h3><p>2012 Labs · Shanghai</p><p>Mechanical design of high-precision and test equipment, motion control algorithms for production equipment, and process parameter optimization.</p></div></li>
    <li><p class="timeline-date">Jun. 2019 — Sep. 2019</p><div><h3>Intern · {% include organization.html key="cobot" %}</h3><p>Wuhan</p><p>Active impedance control, passive adaptive gripper design for peg-in-hole tasks, and inverse kinematic modeling of UR5 and MH5F robots.</p></div></li>
  </ul>
</section>
</div>
