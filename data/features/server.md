---
title: ✨ FlightPath Server
layout: home
nav_order: 6
parent: ✨ FlightPath Data Features
description: "FlightPath Data gives you visual tools to manage FlightPath Server projects, so you have control and access without chaos."
permalink: /data/server.html
---

# ✨ Using FlightPath Server

## Create Server Projects

You can create a new FlightPath Server quite easily. The steps are:
* Run FlightPath Server
* Open the Config panel and switch to the `server` tab
* Enter the server address (by default `http://localhost:8000`)
* Create a first key
* Click `Save and reload` so you don't lose your work

To create your first project right-click in the `Projects for key` box and select `New project`

<figure><img src="../assets/app_images/new-server-project.png" alt="" width="450"><figcaption></figcaption></figure>

## Manage Config

When it's time to push a local project to the server you can upload the project config in one go. But more often there are differences between the development project and the server project. The config sync dialog lets you copy from one project to the other or edit individual settings on the server.

<figure><img src="../assets/app_images/sync-config.png" alt="" width="450"><figcaption></figcaption></figure>

## Manage Env Vars

Integrations like OpenTelemetry and backends like Azure and AWS require environment variables. FlightPath Data manages the combination of OS env vars and FlightPath's own supplimental env vars. When it's time to push variables to FlightPath Server the env sync dialog makes it easy to copy up what you need and edit any variables that need to change.

<figure><img src="../assets/app_images/sync-env.png" alt="" width="450"><figcaption></figcaption></figure>



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



