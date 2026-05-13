---
title: ✨ Validation and Upgrading
layout: home
nav_order: 4
parent: ✨ Features
description: "FlightPath Data is a powerful environment for building CSV, JSONL, and Excel validation and data upgrading scripts. "
permalink: /data/features/validation.html
---

# ✨ Features



### One-off CsvPath Runs

Each time you iterate on a validation or data upgrading script you will need to run it to check your results. Running a CsvPath Language file is easy. Just right click and select `Run`. Alternatively hit `ctrl-r`.&#x20;

<figure><img src="/assets/app_images/run_from_the_context_menu.png" alt="" width="465"><figcaption></figcaption></figure>

Every one-off run opens the Help and feedback tray with several results tabs:&#x20;

* Printouts
* Logs and errors
* Matching lines
* An example of how to automate the run
* And the `What Am I Seeing?` tab giving details of the run

<figure><img src="/assets/app_images/one_off_run_feedback.png" alt="" width="600"><figcaption></figcaption></figure>

`What Am I Seeing?` tab explains all the configuration options for the run and how they impacted the results. As well as helping you interpret your results, this is a great place to learn about CsvPath Framework.

<figure><img src="/assets/app_images/what_am_i_seeing.png" alt="" width="650"><figcaption></figcaption></figure>


## Load Named-paths Groups

Validation and upgrading happens by applying one or more csvpath statements that are grouped together as a unit.

### Loading Options

When you're ready to load your named-paths into CsvPath Framework you just right-click on a file or folder to open the load dialog. There are three options.

First, if you created a JSON definition, you can just select that file.

<figure><img src="/assets/app_images/load_named_paths_by_json.png" alt="" width="690"><figcaption></figcaption></figure>

&#x20;Alternatively, if all your csvpaths are in the same folder you can select to load that folder. When you use a folder you can create one named-paths group with csvpaths from all files included, or you can create one named-paths group for each file in the directory.

<figure><img src="/assets/app_images/load_named_paths_dir.png" alt="" width="620"><figcaption></figcaption></figure>

Or,  if all your csvpaths are in the same file, or you want to add one or more csvpaths from a file into an existing group, you can just select the file.

<figure><img src="/assets/app_images/load_named_paths_by_file.png" alt="" width="620"><figcaption></figcaption></figure>

With any of these options you can add a template to organize your results tree to follow a file naming convention or separate runs for any reason.

## Run Named-paths Groups

Running named-files through named-paths groups is how validation, data upgrading, and archiving happen. In production runs are automated, but during development FlightPath lets you kick off runs anytime.&#x20;

<figure><img src="/assets/app_images/run_dialog.png" alt="" width="650"><figcaption></figcaption></figure>

FlightPath's run-data and find-data dialogs make it easy to create very specific runs targeting just the data versions or csvpaths you want to exercise.&#x20;

## Find and Explore Results

CsvPath Framework stores well-identified data in immutable form with versioning in the data staging area and in the results archive. The result is a clear and explicable source of trustable data. In order to find what you are looking for, you need to be able to navigate. The `Find files by reference dialog` helps you do that.

<figure><img src="/assets/app_images/find_files_by_reference.png" alt="" width="600"><figcaption></figcaption></figure>

&#x20;The dialog has two purposes:

* Finding data and metadata
* Creating references to specific data to be used in new runs

CsvPath References are a simple query language for finding versioned files by arrival time, path, csvpath origin, run date, or fingerprint. The Dialog helps you build references with a form structure and syntax help. Once you have your reference you can copy it into the run dialog to do a rerun.

<figure><img src="/assets/app_images/find_files_by_reference_dialog_2 (1).png" alt="" width="600"><figcaption></figcaption></figure>

## Replay Runs

FlightPath makes anomaly investigation and triage easier by providing tools to access the identification and traceability metadata CsvPath Framework generates. Once you have identified the cause of an issue you may want to redo a run. To save processing time, you might decide to start the new run in the middle using specific data to address only that part of the past run that was imperfect.&#x20;

<figure><img src="/assets/app_images/repeat_run_context_menu_in_archive.png" alt="" width="425"><figcaption></figcaption></figure>

The Archive window context menu gives you the option to easily repeat a run using a named-file version and a specific csvpath within the run's named-paths group. You can run the complete group or you can start and stop on any of the csvpaths in the group.&#x20;

<figure><img src="/assets/app_images/repeat_run.png" alt="" width="600"><figcaption></figcaption></figure>

And, of course, for future reference CsvPath Framework shows the references of the rerun in the metadata it collects about the new run.

<figure><img src="/assets/app_images/rerun_metadata.png" alt="" width="625"><figcaption></figcaption></figure>



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



