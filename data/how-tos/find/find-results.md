---
title: 🎨 Find Results
parent: 🎨 Find
layout: home
nav_order: 4
description: "Finding named-results"
permalink: /data/howto/runs/find-run-results.html
---

# How To Find Results

You can find one or more run results by path or arrival date using the Find Data Dialog. The Dialog helps you build references and use them to access results. References are also used in rewind and replay runs.

A reference starts with a `$` and looks like `$schemas.results.2026-05-12_00-:after`. The parts of a results reference are:
<figure><img src="/assets/app_images/results-references-parts.png" alt="" width="500"><figcaption></figcaption></figure>

{: .new }
**Learn about CsvPath Framework references**. References are a useful capability for starting runs, finding data, accessing results, and other purposes. Learn more at [https://www.csvpath.org](https://www.csvpath.org/).



## How to do it

* Open FlightPath Data and [do a run as outlined here](/data/howto/groups/start-prod-like-run.html)
* In the results window on the lower right, right-click the `math` runs and click `Find data`.
<figure><img src="/assets/app_images/results-window-context-menu.png" alt="" width="300"><figcaption></figcaption></figure>

* In the Find Data Dialog's drop-down select `results`
<figure><img src="/assets/app_images/find-data-dialog-files-or-results-dropdown.png" alt="" width="700"><figcaption></figcaption></figure>

* After the form changes to create results references, select `math`
<figure><img src="/assets/app_images/find-data-dialog-results-select.png" alt="" width="700"><figcaption></figcaption></figure>


* The text entry box starts out with token `:all` that finds all the runs.
* Enter `2026-05-12:after:first` to indicate the first run after May 12th. Notice that the reference box at the bottom of the Dialog shows `$math.results.2026-05-12:after:first` as the complete reference.
<figure><img src="/assets/app_images/find-data-dialog-one-result.png" alt="" width="660"><figcaption></figcaption></figure>


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


