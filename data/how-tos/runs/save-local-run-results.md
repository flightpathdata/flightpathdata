---
title:   Save Local Run Results
parent:   Runs
layout: home
nav_order: 5
description: "Saving the results of a local dev run."
permalink: /data/howto/runs/save-run-results.html
---

#   How To Save The Results Of a Local Run

{: .new }
**Learn about CsvPath Framework:** Find lots more information and how-tos about CsvPath Framework automating data preboarding at [https://www.csvpath.org](https://www.csvpath.org/).

FlightPath generates run data in tabs at the bottom of the center of the app. This tab bar is called the Help and Feedback area. You can save the contents of Help and Feedback tabs to a file by right-clicking the tab.

The tabs you can save include:
* Run results
* AI request results
* Help files

## How to do it

* Open the current project's `examples` directory. Then open the `schemas` directory.
* Click the `schemas.csvpaths` file
* Click in the top csvpath statement. You can click on the comment or the schema below.
* Right-click and select run (or type control-r)
* The Help and Feedback area should show your run results tabs
<figure><img src="/assets/app_images/run-results.png" alt="" width="820"><figcaption></figcaption></figure>
* At the bottom of the screen, right-click on `Printouts [default]`
* A small context menu appears with one option `Save as`. Select it.
* A dialog opens asking for the same you want to save the file as
<figure><img src="/assets/app_images/save-result-tab.png" alt="" width="460"><figcaption></figcaption></figure>


{: .note }
Above we saved the output of the default `Printer` object. FlightPath only shows the default printer, but programmatic use of CsvPath Framework allows for any number of printers. Another printer could send output to a web page, SFTP file, or some other destination. Note that `Printer` objects are not the same as printstreams. A `print()` or `error()` function can direct its output to a printstream to separate it from other `print()` or `error()` output. All the printstreams for the `default` printer are shown in the results' print tab. The different printstreams are concatenated and labeled for easy reading or programmatic use.




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


