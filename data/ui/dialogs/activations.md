---
title:   Activations
layout: home
nav_order: 6
description: "Introduces FlightPath Data's dialogs"
parent:   Dialogs
permalink: /data/ui/dialogs/activations.html
---

#   The Activation Dialog


<figure><img src="/assets/app_images/arrival-activation-dialog.png" alt="" width="700"><figcaption class='caption'>The Activation Dialog automatically triggers runs when new data arrives. This dialog is opened by right-clicking a named-file.</figcaption></figure>

1. <b>Named-paths group</b>. The named-paths group name. This group will be applied to the incoming file.
2. <b>Run method</b>. The run method determines which of four run profiles is used for the run:
    * Collect: runs the new data through the csvpaths in the group serially, collecting matched lines for each
    * Fast-forward: runs the new data through the group serially, but does not collect matching lines
    * Collect by line: Runs each line of the new data through each csvpath of the group, breadth-first, before continuing to the next line
    * Fast-forward by line: Runs the data through the group breadth-first, but does not collect any matching lines


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


