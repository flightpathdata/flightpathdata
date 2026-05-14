---
title: 🎨 Ask For Help
parent: 🎨 Csvpaths
layout: home
nav_order: 4
description: "How to ask for help with csvpath validations"
permalink: /data/how-tos/data/ask-how.html
---

# How To Ask FlightPath For Help

FlightPath Data, through its AI, can help with ad hoc csvpath questions. Have a question that's more in the weeds than simply creating data or a schema? Just ask.


## How to do it

* Open FlightPath and [check that your AI config is correct like this](/data/how-tos/config/setup-ai.html).
* Create a new file called fib.csvpath
* Click on the AI tab at the top of the right-hand column
* Select the `How` activity
* Enter a name and instructions:
```
Is there a way to do the fibonacci sequence using csvpath statement variables?
```
* Click submit and see the request appear in the list below with a yellow dot signifying the work is active
* As the request processes, see the Help and Feedback area for tabs giving ongoing status information. These tabs can be closed or ignored. Click the request name to reopen them.
* When the reply is available, the status dot by the request's name goes green.
<figure><img src="/assets/app_images/ask-how-green-dot.png" alt="" width="350"><figcaption></figcaption></figure>
* Click the name to open the results in the Help and Feedback tabs. Right-click on the `Results` tab and select `Save as`.
* In the save name dialog be sure to change the file extension to `.csvpath` from `.txt`
* Open the new csvpath and run it against any CSV or XLSX data. You can add the `test-data:` directive in the leading comment of csvpaths before hitting `ctrl-r` to run; otherwise, you will be prompted to choose a data file and the directive will be added for you.
<figure><img src="/assets/app_images/ask-how-do-i-do-csvpath.png" alt="" width="760"><figcaption></figcaption></figure>


{: .note}
CsvPath Language is not intended to be a general purpose programming language, so the Fibonacci sequence is definitely off the beaten path. FlightPath's AI will generally not warn you when you are coloring way outside the lines unless you ask it to.


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


