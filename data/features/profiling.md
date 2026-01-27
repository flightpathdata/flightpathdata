---
title: ✨ FlightPath Profiling and Sampling
layout: home
nav_order: 2
parent: ✨ FlightPath Data Features
description: "FlightPath Data helps you know your data, capture cuts for specific tasks, and iterate development quickly using focused datasets"
permalink: /data/profiling.html
---

# ✨ Data Profiling and Sampling

## Profiling report

FlightPath Data's profiler inspects CSV, JSONL, or Excel files to give you a better understanding of your data. Click the `File info` button on the data view's toolbar.

<figure><img src="../assets/app_images/file-info.png" alt="" width="450"><figcaption></figcaption></figure>

The feedback window will open below to give you file information and data statistics about the file.

<figure><img src="../assets/app_images/profile.png" alt="" width="750"><figcaption></figcaption></figure>

## Sampling

Agile development demands sampled data for quick iterations. Likewise, robust quality control requires crafting known-good/known-bad test sets. The data toolbar gives you sampling tools to quickly take a cut of your data.

<figure><img src="../assets/app_images/sampling.png" alt="" width="425"><figcaption></figcaption></figure>

Also don't forget that you have the option to specify what lines CsvPath Framework will scan in any file using scanning instructions. For example, this csvpath includes scanning instructions that say to evalutate lines 1 to 1250 plus all lines from line 5000 to the end of the file.

<figure><img src="../assets/app_images/scanning-instructions.png" alt="" width="625"><figcaption></figcaption></figure>

## Copy-to

Quickly copy data of any shape from a source file to a new sample file.

<figure><img src="../assets/app_images/copy-to.png" alt="" width="675"><figcaption></figcaption></figure>


## Save results as a sample

After a test run, right-click on the `Matches` tab to save the results as a sample file for further iteration.

<figure><img src="../assets/app_images/save-run-as.png" alt="" width="750"><figcaption></figcaption></figure>



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



