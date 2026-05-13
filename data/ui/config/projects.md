---
title: 🔰 Project Form
layout: home
nav_order: 2
description: "About FlightPath Data Config's Projects Form"
parent: 🔰 Config Forms
permalink: /data/ui/config/projects-form.html
---

# 🔰 The Project Form
{: .no_toc }



## Setting the projects directory
![](/assets/app_images/projects_form_annotated.png)
<div>The projects form</div>
{: .caption }
1. <b>Projects directory name</b>. The default is `FlightPath`. There is little reason to change it. You cannot change the project directory used by FlightPath server, which is `FlightPathServer`.
1. <b>Open projects directory</b>. Simply opens the directory used for projects. This is useful when you want to edit config.ini files by hand or drag in lots of files.



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


