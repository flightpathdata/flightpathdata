---
title: 🎨 Find Files
parent: 🎨 Find
layout: home
nav_order: 4
description: "Finding named-files"
permalink: /data/howto/runs/find-named-file-versions.html
---

# How To Find Named-files

You can find one or more named files by path or arrival date using the Find Data Dialog. The Dialog helps you build references and use them to access named-files and results.

A reference starts with a `$` and looks like `$schemas.files.2026-05-12_00-:after`. The parts of a reference are:
<figure><img src="/assets/app_images/reference-parts.png" alt="" width="500"><figcaption></figcaption></figure>

{: .new }
**Learn about CsvPath Framework references**. References are a useful capability for starting runs, finding data, accessing results, and other purposes. Learn more at [https://www.csvpath.org](https://www.csvpath.org/).



## How to do it

* Open FlightPath Data
* Register some named-files. Register multiple versions of the `examples/schemas/people.csv` file as the named-file `schemas`. You will need to make a one or more character change for each registration.
* Right-click the `schema` named-file and click `Find data`
 ![](/assets/app_images/named-file-find-data-context-menu.png)
<div>The Find Data item on the context menu</div>
{: .caption }

* In the Find Data Dialog's drop-down select `files`
<figure><img src="/assets/app_images/find-data-dialog-files-or-results-dropdown.png" alt="" width="700"><figcaption></figcaption></figure>

* After the form changes to create file references, select `schemas`
<figure><img src="/assets/app_images/find-data-dialog-files-select.png" alt="" width="700"><figcaption></figcaption></figure>


* In the text entry box enter the right-most part of a reference pointing at your `schemas` data: `2026-05-12_00-:after`. You should see a row for every registration you did.
![](/assets/app_images/find-data-dialog-four-registrations.png)
<div>All of your registrations should be displayed, since they are after 2026-05-12</div>
{: .caption }


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


