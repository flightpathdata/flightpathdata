---
title: 🎨 Start a Group Run
parent: 🎨 Runs
layout: home
nav_order: 4
description: "How to start a production-like group run against a named-file."
permalink: /data/howto/groups/start-prod-like-run.html
---

# How To Start a Group Run

Production-like runs in FlightPath Data are part of development and can demonstrate that your production deployment is ready. A production-like run is manually triggered. It can apply a named-path group from any set of groups to data staged in any source location.


## How to do it

* Navigate to your project's `examples/math` folder
* Right-click the data file `Automobiles_Annual_Imports_and_Exports_Port_Authority_of_NY.csv` and click `Stage data`
* In the Stage Data Dialog enter `autos` as the named-file name and click `Stage`. Your new named-file appears in the top right window with the file registered in it.
<figure><img src="/assets/app_images/registering-a-file-to-a-named-file.png" alt="" width="700"><figcaption></figcaption></figure>

* Next right-click the directory and select `Load csvpaths`
* In the Load Dialog enter the name `math` and click the `Create or overwrite` button
<figure><img src="/assets/app_images/loading-a-dir-as-a-named-group.png" alt="" width="550"><figcaption></figcaption></figure>

* You will see the `headers` named-paths group in the middle right-hand window. Right-click its directory and select `New run`.
* In the Run Dialog, select the named-file `autos` and the named-paths group `math` and click `Run`
<figure><img src="/assets/app_images/a-new-prod-like-run.png" alt="" width="740"><figcaption></figcaption></figure>

* Your new run appears in the `Runs` tab in the results window at the bottom right.
<figure><img src="/assets/app_images/a-run-in-runs-tab.png" alt="" width="300"><figcaption></figcaption></figure>

Your run should complete successfully in less than a second. You will know when it is done when the yellow dot at the right of the run label turns green, which it should do essentially immediately.

To jump to the run directory, just click the name of the run. The name will be `math results for autos`. You can see the full path to the results directory below the run's name. The run directory itself will be a datestamp, disambiguated with a trailing number, if needed.
<figure><img src="/assets/app_images/jumping-to-the-run-results-from-the-run-tab.png" alt="" width="300"><figcaption></figcaption></figure>

To see basic stats for the run click the green dot. The `Run Information` dialog opens. The main purpose of this dialog is to give you information about long-running jobs as they are happening. You can see progress and, if needed, stop any csvpath in the run.
<figure><img src="/assets/app_images/run-information-dialog.png" alt="" width="700"><figcaption></figcaption></figure>



{: .important }
Named-paths group templates must end in the token `:run_dir`. `:run_dir` is the placeholder for the datestamp directory name containing the run.

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


