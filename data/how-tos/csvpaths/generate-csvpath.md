---
title: 🎨 Generate Csvpath
parent: 🎨 Csvpaths
layout: home
nav_order: 4
description: "How to generate one or more validation csvpaths based on example data and instructions"
permalink: /data/how-tos/data/generate-csvpaths.html
---

# How To Generate Csvpaths

FlightPath Data can generate csvpath validation and/or upgrading statements based on sample data and any instructions. It is possible to provide a business context and/or business rules and receive back a working set of one or more statements.

In practice, while the validation FlightPath provides will execute correctly, it typically takes more engagement to create the ideal validation or upgrading for your use case. It is also possible that you may want to adjust the grain of the statements. In many cases, though not all, including only one rule per csvpath can simplify development and testing.


## How to do it

* Open FlightPath and [check that your AI config is correct like this](/data/how-tos/config/setup-ai.html).
* Open `examples/duplicates/Alzheimers_Disease_and_Healthy_Aging_Data_sample.csv`
* Click on the AI tab at the top of the right-hand column
* Select the `Create` activity
* Enter a name and instructions:
```
    Create validation rules that fit this sample. Also include these three rules, on top of those you identify for yourself.
        - LocationAbbr and LocationDesc can only be states, Puerto Rico, or the District of Colombia unless there is a value in Data_Value_Footnote or LocationID is greater than 99
        - Data_Value_Unit and Data_Value_Type must make sense together
        - StratificationID1 and Stratification1 must make sense together
```
<figure><img src="/assets/app_images/create-csvpath-based-on-data.png" alt="" width="350"><figcaption></figcaption></figure>
* Click submit and see the request appear in the list below with a yellow dot signifying the work is active
* As the request processes, see the Help and Feedback area for tabs giving ongoing status information. These tabs can be closed or ignored. Click the request name to reopen them.
* When the reply is available, the status dot by the request's name goes green.
<figure><img src="/assets/app_images/create-csvpath-based-on-data-process-complete.png" alt="" width="350"><figcaption></figcaption></figure>
* Click the name to open the results in the Help and Feedback tabs. Right-click on the `Results` tab and select `Save as`.
<figure><img src="/assets/app_images/create-csvpath-result-tab.png" alt="" width="650"><figcaption></figcaption></figure>
* In the save name dialog be sure to change the file extension to `.csvpath` from `.txt`
<figure><img src="/assets/app_images/create-csvpath-response-save-as.png" alt="" width="400"><figcaption></figcaption></figure>
* Open the new csvpath and run it against the data in `Alzheimers_Disease_and_Healthy_Aging_Data_sample.csv`. You can add the `test-data:` directive in the leading comment of csvpaths before hitting `ctrl-r` to run; otherwise, you will be prompted to choose a data file and the directive will be added for you.

{: .note}
Since you may receive a sizable number of small csvpaths in response to your request, you may want to ask for comments to be included. Alternatively, you can request a breakdown or build-up explanation using the Explain activity.


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


