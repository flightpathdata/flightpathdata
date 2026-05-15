---
title:   Register Data
layout: home
nav_order: 1
description: "Introduces Stage Data Dialog"
parent:   Dialogs
permalink: /data/ui/dialogs/register.html
---

#   The Stage Data Dialog

The Stage Data Dialog enables you to register files manually. A data file is registered under a named-file, an abstract and predictable entity. The named-file entity represents the most recent file it registered. Earlier files and versions of files are available using more specific references and by browsing.

![](/assets/app_images/register_file_dialog_annotated.png)
<div>The Stage Data Dialog can be opened from a data file or any folder in the project files tree on the left</div>
{: .caption }
1. <b>Registered file name</b>. A named-file is an abstract identifier for a series of file versions that take that identity in sequence as they arrive.
2. <b>Source data file path</b>. This is the location where the physical file we are registering is found.
3. <b>Stored data path template</b>. A template modifies how the physical file is stored within the abstract named-file folder tree. A physical file's location may provide semantic indicators, e.g. a year or customer name, and it sets up ways different versions can be found using references. Clicking on the source file location path elements adds tokens to the template that determine dynamically where this file is stored.
4. <b>Stored data path</b>. The path the physical file will be located at within the named-file's directory structure


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


