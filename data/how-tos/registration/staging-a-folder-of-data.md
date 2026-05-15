---
title:   Stage a Folder Of Data
parent:   Registration
layout: home
nav_order: 4
description: "How to stage all the data files in a directory."
permalink: /data/howto/registration/stage-all-files-in-dir.html
---

#   How To Stage All the Data Files In a Directory

FlightPath allows you to manually stage data file-by-file or as a batch based on a folder. When you stage a folder, all the data files it holds are registered with named-files. Any files that don't map to a named-file will create a new one.

The staging process has a few options:
* Stage file-by-file
* Stage all data files in a directory by registering all of them under one named-file, based on the directory name
* Stage all data files by registering each as a named-file, based on each file name

In the latter two cases the order of registrations is not deterministic.

There are a few secondary options:
* Find data files recursively, or stop at the top directory
* Register using a template, or not
* If a template is provided, use it as a default for future registrations to the same named-file(s), or not

{: .note }
Templates are used to register files at a specific path within a named-file. This allows the structure of the named-file to follow the path structure of the arriving files and/or be laid out to match another system. You can learn more about templates on [https://www.csvpath.org](https://www.csvpath.org).

## How to do it

* Navigate to your project's `examples/schemas` folder
* Right-click the directory in the project files tree on the left
* Select `Stage data`
* The Stage Data Dialog opens
* Uncheck `Separate named-files` and add the name `schemas` to the `Named-file name` field
<figure><img src="/assets/app_images/stage-data-dialog-staging-dir.png" alt="" width="820"><figcaption></figcaption></figure>

* Click `Stage`
* Look in the registered files window at the top right. Notice there is a `schemas` named-file.
* Open the `schemas` named-file and you see a folder called `people.csv` and another called `shipping.csv`
* Within the `people.csv` and `shipping.csv` directories confirm that each has a single CSV file with a SHA256 hash for a name

<figure><img src="/assets/app_images/staged-named-file-with-two-registrations.png" alt="" width="300"><figcaption></figcaption></figure>


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


