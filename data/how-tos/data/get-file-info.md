---
title:   Data Profiling
parent:   Data
layout: home
nav_order: 9
description: "Generating a data profiling report"
permalink: /data/howto/data/get-file-info.html
---

#   How To Generate a Data Profile Report

{: .new }
**Learn about CsvPath Framework:** Find lots more information and how-tos about CsvPath Framework automating data preboarding at [https://www.csvpath.org](https://www.csvpath.org/).

FlightPath generates data profiling reports for any CSV, XLSX, or JSONL file. Behind the scenes it is generating a csvpath statement and running it to collect metrics.

The profile report is called File Info. It contains:
* Scan instructions to tell you what sample was used to collect information
* Basic file metrics such as number of headers, number of lines, blank lines count, duplicate lines count, etc.
* A list of all headers by index and name
* Types found and identified (e.g. decimals, dates, booleans, etc.) -- allowing multiple per header
* Duplicate count
* Distinctness and None checks
* Max and min, if numeric

Many more profiling measures are possible using bespoke csvpath statements, of course. These are just the most commonly requested values.

![](/assets/app_images/file-info-report.png)
<div>The file info report opens in the Help and Feedback area</div>
{: .caption }


## How to do it

* Open the current project's `examples/debugging` directory
* Click the `World_Port_Index_sample.csv` file
<figure><img src="/assets/app_images/world-ports-data.png" alt="" width="620"><figcaption></figcaption></figure>

* In the Data Toolbar click on `File info`
* Look in the Help and Feedback area for the `File Info` tab

{: .note }
You can save the profile report by right-clicking the tab and clicking `Save to PDF`.




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


