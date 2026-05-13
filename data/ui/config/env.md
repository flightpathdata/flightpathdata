---
title: 🔰 Env Form
layout: home
nav_order: 2
description: "Walks-through FlightPath Data's Env form"
parent: 🔰 Config Forms
permalink: /data/ui/config/env.html
---

# 🔰 The FlightPath Data UI: The Env Form
{: .no_toc }


## Env

![](/assets/app_images/env_form_annotated.png)
<div>The env form</div>
{: .caption }
1. <b>Filter</b>. This filter allows you to see only env vars that match a string.
1. <b>List of OS env vars</b>. This list shows all OS env vars for the currently logged in user. It includes env vars specifically added using this form for use in FlightPath Data.
1. <b>Add env var</b>. Adds an OS env var. OS env vars set during an app session do not persist after the app is shutdown. For this reason, FlightPath Data adds the app not only to the OS env, but also to `.flightpath` in the user's home directory. When FlightPath Data starts it adds all the env vars it knows about to the OS env vars so that the set of variables is consistent for each use of the app.




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


