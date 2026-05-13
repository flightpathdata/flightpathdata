---
title: 🎨 Creating a New FlightPath Server Project
parent: 🎨 Server
layout: home
nav_order: 20
description: "How to create a new FlightPath Server project."
permalink: /data/howto/server/new-server-project.html
---

# How To Create a New FlightPath Server Project

{: .new }
**Learn about CsvPath Framework:** Find lots more information and how-tos about CsvPath Framework automating data preboarding at [https://www.csvpath.org](https://www.csvpath.org/).

## What you need

* A FlightPath Server install
* A FlightPath Data install


## How to do it

* [Start an instance of FlightPath Server as described here](server/getting-setup.html)
* Open FlightPath Data
* Click the Config button at the bottom-left
<figure><img src="/assets/app_images/config_button.png" alt="" width="280"><figcaption></figcaption></figure>

* In the Config panel select `server` in the left hand vertical tabs
* In the server form add the server URL and port
<figure><img src="/assets/app_images/server_config_form.png" alt="" width="780"><figcaption></figcaption></figure>

* [Create a new admin key as described here](). It will look like: `a117322a-5b2d-408a-aeac-46fdc515d047`. You will only see it once.
* Enter the new key in the API Key field and click `Save and reload`
* Right click on the `Projects for key` area and select `New project`
<figure><img src="/assets/app_images/create_server_project.png" alt="" width="580"><figcaption></figcaption></figure>

* Give the project a name and submit
* Right-click on the project's name and select `Sync config` to setup the new project's config based on the current local config. [Syncing a local project with a server project is described here]().


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


