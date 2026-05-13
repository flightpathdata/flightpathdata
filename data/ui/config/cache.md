---
title: 🔰 Cache Form
layout: home
nav_order: 2
description: "Config form for caching"
parent: 🔰 Config Forms
permalink: /data/ui/config/cache.html
---

# 🔰 The Cache Form
{: .no_toc }



## Cache config

![](/assets/app_images/cache_form_annotated.png)
<div>The cache form</div>
{: .caption }
1. <b>Use cache</b>. This is the on/off switch for local caching of line counts and headers. Generally, for local files, caching should be left on to boost performance. A caching thread runs in the background to collect information on files to help open them quickly.
1. <b>Cache directory</b>. The cache files directory can be any location within the project. By default it is `<projecti>/cache`.



<script>
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".nav-list-link").forEach(function (link) {
      if (link.textContent.trim() === "FlightPath Data") {
        link.closest(".nav-list-item").classList.add("active");
      }
    });
    document.querySelectorAll(".nav-list-link").forEach(function (link) {
      if (link.textContent.trim() === "FlightPath Server") {
        link.closest(".nav-list-item").classList.add("active");
      }
    });
  });
</script>


