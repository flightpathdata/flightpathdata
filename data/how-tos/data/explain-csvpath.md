---
title:   Explain Csvpath
parent:   Runs
layout: home
nav_order: 4
description: "How to get a plain English explaination of a csvpath"
permalink: /data/how-tos/data/explain-csvpath.html
---

#   How To Explain a Csvpath

When you develop against complex requirements, you will have more complicated csvpath statements. There are a number of things you can do to make it easier to understand and run your rules, but ultimately complex things are complicated. At that point getting a plain English summary of your validations is helpful.

{: .note}
In this example, we didn't only ask what a csvpath does, we asked for an explanation in the context of sample data and our own run results. As you can see from the results, the AI ran our csvpath to get its own results, and analysed the functions and structure to explain the output we and it both see.

## How to do it

* Open FlightPath and [check that your AI config is correct like this](/data/how-tos/config/setup-ai.html).
* Open `examples/schemas/intersection.csvpaths`
* Click on the AI tab at the top of the right-hand column
* Select the `Explain` activity, give your request a name, and enter:
```
This csvpath is running but it gives errors, even though it matches lines successfully. Can you explain?
```
<figure><img src="/assets/app_images/explain-csvpath-request.png" alt="" width="350"><figcaption></figcaption></figure>
* Click submit and see the request appear in the list below with a yellow dot signifying the work is active
* As the request processes, see the Help and Feedback area for tabs giving ongoing status information. These tabs can be closed or ignored. Click the request name to reopen them.
* Click on the `Tracking` tab to see metrics for each interaction the AI makes with FlightPath as it works to fully understand your csvpath statement(s)
<figure><img src="/assets/app_images/explain-csvpath-tracking-tab.png" alt="" width="400"><figcaption></figcaption></figure>
* When the reply is available, the status dot by the request's name goes green.
<figure><img src="/assets/app_images/explain-csvpath-request-in-list.png" alt="" width="350"><figcaption></figcaption></figure>
* Click the name to open the results in the Help and Feedback tabs. Click on the `Results` tab to see the explanation.
<figure><img src="/assets/app_images/explain-schema-results.png" alt="" width="650"><figcaption></figcaption></figure>




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


