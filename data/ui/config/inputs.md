---
title: 🔰 Inputs Form
layout: home
nav_order: 2
description: "About FlightPath Data Config's Inputs Form"
parent: 🔰 Config Forms
permalink: /data/ui/config/inputs.html
---

# 🔰 The Inputs Form
{: .no_toc }



## Setting where files and validation scripts live
![](/assets/app_images/inputs_form_annotated.png)
<div>The inputs form</div>
{: .caption }
1. <b>Files</b>. Determines where named-files are kept.
1. <b>Csvpaths</b>. The location of named-paths groups.

These settings can use any of the five storage backends FlightPath Data supports:
<ul style='margin-left:40px'>
    <li/> Local POSIX or Windows file system
    <li/> SFTP <i>(sftp://...)</i>
    <li/> AWS S3 <i>(s3://...)</i>
    <li/> Azure Blob Storage <i>(azure://...)</i>
    <li/> Google Cloud Storage <i>(gs://...)</i>
</ul>



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


