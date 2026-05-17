---
title:   Load a Folder Of Csvpaths
parent:   Groups
layout: home
nav_order: 4
description: "How to create a named-paths group from csvpath files in a directory."
permalink: /data/howto/groups/load-all-files-in-dir.html
---

#   How To Create a Group From the Files In a Directory

FlightPath manages csvpath statements in files and groups. Multiple csvpath statements can live in a file. All of the statements in the file will be a part of the same group. A named-paths group can be created from multiple files. The easiest way to do that is to load all the files in a directory as one group.

{: .note }
Templates are used to register files at a specific path within a named-file. This allows the structure of the named-file to follow the path structure of the arriving files and/or be laid out to match another system. You can learn more about templates on [https://www.csvpath.org](https://www.csvpath.org).

## How to do it

* Navigate to your project's `examples/schemas` folder
* Right-click the directory in the project files tree on the left
* Select `Load csvpaths`
<figure><img src="/assets/app_images/load-named-paths-group-by-dir.png" alt="" width="300"><figcaption></figcaption></figure>

* The Load Csvpaths Dialog opens
* Enter the name `schemas` to the `Named-paths name` field
<figure><img src="/assets/app_images/load-named-paths-group-from-dir-dialog.png" alt="" width="630"><figcaption></figcaption></figure>

* Click `Create` or `Overwrite`. The button text will change depending on if the name of the group is new.
* Look in the named-paths groups window at the middle right. Notice there is now a `schemas` group.
* Open the `schemas` named-paths group and you see a `group.csvpaths` file that contains all the csvpath statements in the group

<figure><img src="/assets/app_images/group-csvpaths-file.png" alt="" width="540"><figcaption></figcaption></figure>


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


