---
title:   Load Csvpaths
layout: home
nav_order: 2
description: "Introduces the Load Dialog"
parent:   Dialogs
permalink: /data/ui/dialogs/load.html
---

#   The Csvpaths Group Load Dialog

The Load Dialog is how you assemble a group of csvpaths that can be run as a unit. It can load csvpaths by directory, from a file, or from a JSON description. You can append csvpaths to your group after first create it, if needed.

![](/assets/app_images/load_named_paths_dialog_annotated.png)
<div>The Load Dialog is available when you right-click a csvpath file or a folder in the projects file tree on the left</div>
{: .caption }
1. <b>Csvpath scripts group name</b>. A named-paths group is a group of csvpaths that validate and/or upgrade data files. Each group has a name and each csvpath within the group has its own name, sometimes called its identity.
2. <b>Csvpath scripts file or JSON pointers file</b>. Named-paths group can be created from a file with one or more csvpaths or from a simple JSON dict, `definition.json`, that maps a name to a list of csvpath files. When the csvpaths are added to the named-paths group they are bundled into one `group.csvpaths` file.
3. <b>Results path template</b>. A template determines the location of a run's home directory, sometimes called its run_dir. The template can have dynamic path segments, :1, :2, etc., that map to the location of the physical source data file's original location. This way if a file arrives in a directory called `/data/acme inc/2025` you can use `2025` in the results path dynamically.





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


