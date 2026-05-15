---
title:   Changing Delimiters
parent:   Data
layout: home
nav_order: 3
description: "How to change the delimiter of a CSV file"
permalink: /data/howto/data/change-delimiters.html
---

#   How To Change Delimiters

CSV files have counterparts that use other delimiters. For example, `.tsv` files use tabs, instead of commas. Likewise `.psv` use the `|` character. FlightPath lets you set the delimiter for a file and switch delimiter when you save a file.

## How to do it

* Open a `.csv` file. You can use the `Examples` files.
* In the Grid View, look to the top of the screen for the Data Toolbar
<figure><img src="/assets/app_images/csv_toolbar.png" alt="" width="830"><figcaption></figcaption></figure>
* The Data Tool bar has drop-downs for delimiters and quote chars. The delimiter should have defaulted to `Comma`.
* Click shift-control-s to save-as the file (or select `Save-as` on the context menu)
<figure><img src="/assets/app_images/save-as-dialog.png" alt="" width="530"><figcaption></figcaption></figure>
* In the Save-as dialog select a new delimiter. Try `Pipe`. When you select `Pipe` FlightPath adds a `.psv` to the end of the file path.
* Close the file by clicking the [x] in the files tab
* Reopen the file by clicking its name in the project files tree on the left
* Your file will open with a single column. It will look wrong.
<figure><img src="/assets/app_images/incorrect_psv.png" alt="" width="530"><figcaption></figcaption></figure>
* In the Data Toolbar, select the pipe delimiter.
* Your file should open up to its correct form because the delimiter is now correct


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


