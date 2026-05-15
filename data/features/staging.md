---
title:  File Staging
layout: home
nav_order: 2
parent:  Features
description: "FlightPath Data stages CSV, JSONL, and Excel data in an immutable, versioned staging area, registered under a durable identity. "
permalink: /data/features/staging.html
---

#  Data Staging Features

FlightPath gives you tools for staging inbound CSV, JSONL, and Excel files. Your raw files are registered under a name that indicates a type of data, a source, a business process, or any concept you use to organize your data. This is a named-file.

Named-files are a versioned collection of similar files. For example, you might have a named-file `orders` to collect all the order files as they arrive. Your pipelines can query for particular versions within a named-file or you can simply use the most recent version.


## Stage Data

CsvPath Framework is all about automating the process of receiving data. But during development you may need to stage data manually. FlightPath makes it easy. Add your data files using the `Copy data in` button on center of the home screen, or open the project directory and drag your data files in. &#x20;

<figure><img src="/assets/app_images/stage_data_in_context_menu.png" alt="" width="320"><figcaption></figcaption></figure>

Then you can simply right-click any file to stage it in your choice of storage backend by selecting `Stage data`.

<figure><img src="/assets/app_images/stage_data_dialog.png" alt="" width="660"><figcaption></figcaption></figure>

Give the new named-file a simple, memorable name. Optionally, add a template if you want to recreate a particular file system path. You can include elements of the original file path in the template.

<figure><img src="/assets/app_images/stage-directory.png" alt="" width="660"><figcaption></figcaption></figure>

If you right-clicked a directory and selected `Stage data` the helps you import all the data files from that directory. FlightPath registers the files each as a named-file using the physical file's name or it stages all the files under a single named-file that you indicate. You can find files to register recursively and templates remains an option.

## The Named-files Window

Staged data is visible in the named-files window at the top of the right-hand operations column.

<figure><img src="/assets/app_images/staged_data_window.png" alt="" width="300"><figcaption></figcaption></figure>

Your staged data from this point on is immutable and durably identified at the version level. If your data partner restates a file, you can stage it with confidence that your runs remain repeatable and you will know exactly how the results were generated.

<figure><img src="/assets/app_images/staged-data.png" alt="" width="850"><figcaption></figcaption></figure>

In this view you can see that there are two versions of the `accounts` named-file in the `may` folder. The identity of each physical source file and the fingerprint of its immutable bytes will be carried through each processing step so that the lineage is clear, the operational details are apparent, and the runs are repeatable.


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



