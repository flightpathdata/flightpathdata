---
title:   Run Info
layout: home
nav_order: 4
description: "Introduces the Run Info Dialog"
parent:   Dialogs
permalink: /data/ui/dialogs/run_info.html
---

#   The Run Info Dialog

The Run Info Dialog is available when you manually trigger a run. While the run is active, it provides:
* Run status
* The index and identity of the csvpath that is active
* The line that is being processed and the total number of lines

![](/assets/app_images/run_info_dialog.png)
<div>The Run Info Dialog gives you status information about a run, as well as offering early termination</div>
{: .caption }
1. <b>Current line</b>. This indicator shows the current line being processed. Click `Refresh` to update.
2. <b>Total lines in data file</b>. Gives the total number of lines in the file.
3. <b>Name and index of current csvpath</b>. Names the current csvpath according to its identity and/or index within the group.
4. <b>Stop and skip ahead</b>. Clicking this button immediately sends a stop signal to the currently running csvpath. To stop the run entirely you must click to stop each csvpath.
5. <b>Link to dialog</b>. Click the status link -- yellow while running, green when complete, red in error -- to open the Run Info Dialog.




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


