---
title: 🎨 Copy In Data View
parent: 🎨 Editors
layout: home
nav_order: 4
description: "Options for copying data in the Data View."
permalink: /data/howto/editors/copy-in-data-view.html
---

# How To Use Copy Options In Data View

There are several useful options for copying data in the Data View. These include:
* **Irregular copy**: Selecting various non-contagious cells to copy as a group
* **Copy to file**: copying cells that are written to a new file
* **Line and header copies**: copying whole sets of cells by header or line
* **Copy raw**: copying the characters underlying a CSV

## How to do it

* Open FlightPath
* Navigate to your project's `examples/schemas` folder
* Open `shipping.csv`

### Irregular copy
* Holding the control key, click any pattern of cells. (Use the command key on MacOS)
* Hit `ctrl-c` to copy
* Hit `ctrl-v` to paste
<figure><img src="/assets/app_images/irregular-copy.png" alt="" width="430"><figcaption></figcaption></figure>

### Copy to new file
<figure><img src="/assets/app_images/copy-to-new-file.png" alt="" width="300"><figcaption></figcaption></figure>
* Select some set of cells
* Right-click and select `Copy to new file`
* Give the new file a name in the dialog that opens

### Line and header copies
<figure><img src="/assets/app_images/line-and-header-copy.png" alt="" width="490"><figcaption></figcaption></figure>
* Select the Y-axis header name or X-axis line number or both
* Move to a target cell
* Hit `ctrl-v` to paste

### Copy raw
* Click the `Toggle raw` button in the Data Toolbar
<figure><img src="/assets/app_images/toggle-raw.png" alt="" width="430"><figcaption></figcaption></figure>
* Copy and paste data using `ctrl-c` and `ctrl-v`
<figure><img src="/assets/app_images/copy-in-raw.png" alt="" width="490"><figcaption></figcaption></figure>



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


