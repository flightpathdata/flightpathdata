---
title: 🎨 Find Run Location and Metadata
parent: 🎨 Find
layout: home
nav_order: 4
description: "Finding the location of a run directory and its metadata"
permalink: /data/howto/runs/find-run-location.html
---

# How To Find the Location Of Run Results

If you have many runs navigating to one may be easier using the Find Data Dialog than it would be by browsing.

## How to do it

* Open FlightPath Data and [do a run as outlined here](/data/howto/groups/start-prod-like-run.html)
* In the results window on the lower right, right-click the `math` runs and click `Find data`.
<figure><img src="/assets/app_images/results-window-context-menu.png" alt="" width="300"><figcaption></figcaption></figure>

* In the Find Data Dialog's drop-down select `results`
<figure><img src="/assets/app_images/find-data-dialog-files-or-results-dropdown.png" alt="" width="700"><figcaption></figcaption></figure>

* After the form changes to create results references, select `math`
<figure><img src="/assets/app_images/find-data-dialog-results-select.png" alt="" width="700"><figcaption></figcaption></figure>


* The text entry box starts out with token `:all` that finds all the runs. You may have only one.
* Right-click on the top run results and select `Show run`
* See that the archive window at lower right opens to the run you clicked on
<figure><img src="/assets/app_images/find-data-dialog-open-results.png" alt="" width="700"><figcaption></figcaption></figure>
* Again in the Find Data Dialog, right click on the top item and select `Show metadata`
* See that the `manifest.json` for the run opens
<figure><img src="/assets/app_images/find-data-dialog-show-run-metadata.png" alt="" width="700"><figcaption></figcaption></figure>


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


