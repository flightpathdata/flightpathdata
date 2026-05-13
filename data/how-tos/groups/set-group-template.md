---
title: 🎨 Set a Group Template
parent: 🎨 Groups
layout: home
nav_order: 4
description: "How to assign a default template to a named-file."
permalink: /data/howto/groups/set-named-paths-template.html
---

# How To Assign a Default Template To a Group

FlightPath gives you the ability to give results a certain path layout. This allows you to position files based on the original location of the data file or to mirror the layout of another system.

{: .note }
Templates are used to structure results. Using templates to organize results is very similar to how they are used to organize staged data. When used to organize results, the template is held by the named-paths group, in its `definition.json` file. You can learn more about templates on [https://www.csvpath.org](https://www.csvpath.org).

## How to do it

* Navigate to your project's `examples/headers` folder
* Right-click the directory in the project files tree on the left
* Select `Load csvpaths`
* The Load Dialog opens
* Add the name `headers` to the name field
<figure><img src="/assets/app_images/load-csvpaths-from-directory-headers.png" alt="" width="550"><figcaption></figcaption></figure>
* After hitting the `Create` button you will see the `headers` named-paths group in the middle right-hand window
* Right-click the `headers` group and select `Set template`
* In the dialog enter a template like `:1/test/:run_dir`, or whatever you like
<figure><img src="/assets/app_images/add-named-paths-group-template.png" alt="" width="580"><figcaption></figcaption></figure>
* Click the `Set` button and then check the group's `definition.json` file to see where the template was saved
<figure><img src="/assets/app_images/template-in-group-definition.png" alt="" width="630"><figcaption></figcaption></figure>

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


