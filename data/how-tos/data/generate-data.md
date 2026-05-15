---
title:   Generate Data
parent:   Data
layout: home
nav_order: 4
description: "How to generate test data based on a csvpath statement"
permalink: /data/how-tos/data/generate-data.html
---

#   How To Generate Test Data

Good csvpath development practice is to create tests for each statement. Creating even small test data sets can be time consuming. FlightPath can help create representative data quickly.


## How to do it

* Open FlightPath and [check that your AI config is correct like this](/data/how-tos/config/setup-ai.html).
* Open `examples/schemas/schemas.csvpaths`
* Click on the AI tab at the top of the right-hand column
* Select the `Data` activity
<figure><img src="/assets/app_images/generate-data-activity.png" alt="" width="350"><figcaption></figcaption></figure>
* Enter a name and instructions: `Create a test data that includes people from states west of the Mississippi.`
* Click submit and see the request appear in the list below with a yellow dot signifying the work is active
<figure><img src="/assets/app_images/generate-data-request-instructions.png" alt="" width="350"><figcaption></figcaption></figure>
* As the request processes, see the Help and Feedback area for tabs giving ongoing status information. These tabs can be closed or ignored. Click the request name to reopen them.
<figure><img src="/assets/app_images/generate-data-processing-feedback.png" alt="" width="550"><figcaption></figcaption></figure>
* When the reply is available, the status dot by the request's name goes green.
<figure><img src="/assets/app_images/generate-data-status-icon-green.png" alt="" width="350"><figcaption></figcaption></figure>
* Click the name to open the results in the Help and Feedback tabs. Right-click on the `Results` tab and select `Save as`.
<figure><img src="/assets/app_images/generate-data-response.png" alt="" width="650"><figcaption></figcaption></figure>
* In the save name dialog be sure to change the file extension to `.csv` from `.txt`
<figure><img src="/assets/app_images/generate-data-save-as-name.png" alt="" width="400"><figcaption></figcaption></figure>
* Switch back to the csvpath in `examples/schemas/schemas.csvpaths` and change the `test-data:` directive in the leading comment of the first csvpath to the relative path to your new test data file. Right-click on the file and select `Copy relative path`, if needed.
<figure><img src="/assets/app_images/copy-relative-path-on-context-menu.png" alt="" width="290"><figcaption></figcaption></figure>
* With your cursor in the csvpath statement, hit `ctrl-r` to run the csvpath. See that the new data validates successfully.




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


