---
title:   Logging Form
layout: home
nav_order: 2
description: "About FlightPath Data Config's Logging Form"
parent:   Config Forms
permalink: /data/ui/config/logging.html
---

#   The Logging Form
{: .no_toc }

## Setting up logging
![](/assets/app_images/logging_form_annotated.png)
<div>The logging form</div>
{: .caption }
1. <b>Handler type</b>. Either `rotating` or plain `file`.
1. <b>Log file path</b>. By default, `logs/csvpath.log`. There is little advantage to changing the location and FlightPath Server only allows the default.
1. <b>Number of log files to keep</b>. Logs can get very large if you run on `debug`, so pick a number appropriate to the volume you expect.
1. <b>Max log file size</b>. The default is modestly large. You may want to lower it, depending on your use case.
1. <b>CsvPath log level</b> and <b>CsvPaths log level</b>. Again, these refer to the CsvPath Framework classes. The former is used for one-off csvpath runs and the latter is used for full, automated, multi-csvpath runs. You can set the logging level independently in order to focus your efforts. For example, if you have a validation concern you may only run `CsvPath` at an elevated log level, rather than both. Likewise, if your concern is integrations or storage management problems you would more likely run `CsvPaths` at an elevated level.


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


