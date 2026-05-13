---
title: 🔰 Errors Form
layout: home
nav_order: 2
description: "About FlightPath Data Config's Errors Form"
parent: 🔰 Config Forms
permalink: /data/ui/config/errors.html
---

# 🔰 The Errors Form
{: .no_toc }

## Validation errors handling
![](/assets/app_images/errors_form_annotated.png)
<div>The errors form</div>
{: .caption }
1. <b>Error pattern</b>. The error pattern determines what is shown when validation errors occur during a run. This does not change the log line output, only the user-presented validation errors. For example, a csvpath like `$[*][add("five", 3)]` will generate two errors, one because the add function does not take strings, and one because adding `"five"` to `3` is inherently invalid. These are both user-presented errors that may show in the run printouts and errors.json. The error pattern controls what the printout would look like.
1. <b>Error format</b>. If set to `full`, the default, errors will be presented using the error pattern. If set to `bare` errors will be presented in the minimal form of a brief narrative message. The former looks like `2025-10-27 19h14m27s-448672:projects_with_reset.csv:1::reset headers:add[0]:  could not convert string to float: 'five'`; whereas, the latter like: `could not convert string to float: 'five'`
1. <b>CsvPath Errors</b> and <b>CsvPaths Errors</b>. These settings reference the `CsvPath` and `CsvPaths` classes in the CsvPath Framework. `CsvPath` runs individual csvpath statements; for example, a test run in FlightPath Data during development. `CsvPaths` runs sets of csvpath statements in full, automated runs, such as happen in FlightPath Server. The checkboxes determine how errors are handled:
<ul style='margin-left:40px'>
    <li/><b>Raise</b>: Raising errors means raising an exception that would stop a run cold. You may want to leave this box unchecked in product environments in order to not stop processing on the first validation error.
    <li/><b>Print</b>: Outputs validation errors to the printout stream(s). Leaving print checked is typical.
    <li/><b>Stop</b>: Stops processing on the first error, but without raising an exception; thereby allowing results and run wrap up to be handled normally.
    <li/><b>Fail</b>: Marks a csvpath as invalid, but does not stop the run.
    <li/><b>Collect</b>: Collects the error with contextual information to errors.json.
</ul>



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


