---
title:   Set an Arrival Activation
parent:   Registration
layout: home
nav_order: 4
description: "How to trigger a run when data arrives."
permalink: /data/how-tos/registration/set-arrival-activation.html
---
#   How To Trigger a Run When a File Arrives

{: .new }
**Learn about CsvPath Framework:** Find lots more information and how-tos about CsvPath Framework automating data preboarding at [https://www.csvpath.org](https://www.csvpath.org/).

FlightPath enables you to easily set up an arrival activation on a named-file. An arrival activation is a trigger that runs its named-file against a named-paths group whenever new data arrives.

## How to do it

* Navigate to your project's `examples/schemas` folder
* Right-click the directory in the project files tree on the left
* Select `Stage data`
* The Stage Data Dialog opens
* Uncheck `Separate named-files` and add the name `schemas` to the `Named-file name` field
<figure><img src="/assets/app_images/stage-data-dialog-staging-dir.png" alt="" width="720"><figcaption></figcaption></figure>
* After hitting the `Stage` button you will see the `schema` named-file in the top right-hand window
* Right-click the `schema` named-file in the top right window. Select `Arrival activation`.
<figure><img src="/assets/app_images/arrival-activation-on-context-menu.png" alt="" width="250"><figcaption></figcaption></figure>


* In the dialog there are two required settings:
    * A named-paths group holding the csvpath statements you want to run when data arrives
    * The run method that determines how your run is processed
<figure><img src="/assets/app_images/arrival_activation_dialog.png" alt="" width="600"><figcaption></figcaption></figure>

{: .important }
> CsvPath Framework offers six run methods. FlightPath Data and FlightPath Server support four of them; the other two are for programmatic use only. The four are:
> * collect_paths
> * fast_forward_paths
> * collect_by_line
> * fast_forward_by_line
>
> The fast forward run methods do not collect matching lines. The collect run methods do. The paths run methods apply every csvpath serially. The by_line run methods pass every line to all csvpaths in the group before starting the next line.



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


