---
title: 🔰 Dialogs
layout: home
nav_order: 1
description: "Introduces FlightPath Data's dialogs"
parent: 🔰 UI
permalink: /data/ui/dialogs.html
---

# 🔰 The FlightPath Data UI: The Dialogs
{: .no_toc }

### A small number of dialogs deliver big preboarding features
{: .no_toc }


- TOC
{:toc}


## Register files dialog

![](/assets/app_images/register_file_dialog_annotated.png)
<div>The find data dialog helps you find registered files and run results</div>
{: .caption }
1. <b>Registered file name</b>. A named-file is an abstract identifier for a series of file versions that take that identity in sequence as they arrive.
2. <b>Source data file path</b>. This is the location where the physical file we are registering is found.
3. <b>Stored data path template</b>. A template modifies how the physical file is stored within the abstract named-file folder tree. A physical file's location may provide semantic indicators, e.g. a year or customer name, and it sets up ways different versions can be found using references. Clicking on the source file location path elements adds tokens to the template that determine dynamically where this file is stored.
4. <b>Stored data path</b>. The path the physical file will be located at within the named-file's directory structure

## Load validation scripts dialog

![](/assets/app_images/load_named_paths_dialog_annotated.png)
<div>The find data dialog helps you find registered files and run results</div>
{: .caption }
1. <b>Csvpath scripts group name</b>. A named-paths group is a group of csvpaths that validate and/or upgrade data files. Each group has a name and each csvpath within the group has its own name, sometimes called its identity.
2. <b>Csvpath scripts file or JSON pointers file</b>. Named-paths group can be created from a file with one or more csvpaths or from a simple JSON dict, `definition.json`, that maps a name to a list of csvpath files. When the csvpaths are added to the named-paths group they are bundled into one `group.csvpaths` file.
3. <b>Results path template</b>. A template determines the location of a run's home directory, sometimes called its run_dir. The template can have dynamic path segments, :1, :2, etc., that map to the location of the physical source data file's original location. This way if a file arrives in a directory called `/data/acme inc/2025` you can use `2025` in the results path dynamically.

## Run dialog

![](/assets/app_images/run_dialog_annotated.png)
<div>The find data dialog helps you find registered files and run results</div>
{: .caption }
1. <b>Registered file name</b>. The named-file name or a more specific dynamic reference picking out one or more registered files within a named-file. If the plain named-file name is used the last file registered will be run.
2. <b>Csvpath scripts name</b>. The named-paths group name or a more specific reference to one or more csvpath statements in the named-paths group. If a reference is provided, only those csvpaths specifically indicated are used in the run.
3. <b>Results path template</b>. This is the same capability to define a dynamic location for the results within the abstract named-paths group name the live under. If a template was added to the named-paths group definition this field would override it. A dynamic template can position results in a way that makes them easy to browse or query using references, or to match a downstream consumer's requirements.
4. <b>Type of run</b>. There are four types of runs. Two are serial, where csvpaths in the named-paths group are run one after another. Two are breadth-first, where each line of data passes through every csvpath in the group before the next line is processed. These options are covered in more depth on [csvpath.org](https://www.csvpath.org).

## Find data dialog

![](/assets/app_images/find_data_dialog_annotated.png)
<div>The find data dialog helps you find registered files and run results</div>
{: .caption }
1. <b>Reference builder</b>. This row in the dialog helps you build registered file and/or run references.
<ul style='margin-left:40px'>
    <li/> The first part scopes the reference to a named-file name or named-paths group name, the latter indicating results from that group.
    <li/> Second, the drop-down scopes the reference to registered files or results
    <li/> Third, is the dynamic query. This can be based on combinations of path, arrival date, range, ordinal, file fingerprint and/or individual csvpath identity. Input help is available on right-click.
</ul>
1. <b>Copy reference</b>. This button copies the complete reference to the clipboard so you can easily use it elsewhere in FlightPath Data.
1. <b>Context menu access to files</b>. Right-clicking files let's you:
<ul style='margin-left:40px'>
    <li/> Open metadata about the named-file or run clicked
    <li/> Open the physical file or result file clicked
    <li/> Copy the full file system path or remote URL to the item
</ul>
1. <b>Reference and items found count</b>. Shows you the reference you created and the count of files it finds.




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


