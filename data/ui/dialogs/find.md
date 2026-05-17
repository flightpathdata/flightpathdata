---
title:   Find Data
layout: home
nav_order: 5
description: "Introduces the Find Data Dialog"
parent:   Dialogs
permalink: /data/ui/dialogs/find.html
---

#   The Find Data Dialog

The Find Data Dialog helps you find registered files and run results. It is a great way to search for data, and once you found the data you need it also provides easy access to metadata and physical file information.

![](/assets/app_images/find_data_dialog_annotated.png)
<div>The Find Data Dialog can be opened from a named-file, from results, or from the Welcome screen</div>
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


