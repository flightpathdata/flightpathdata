---
title: 🎨 Set a Named-file Template
parent: 🎨 Registration
layout: home
nav_order: 4
description: "How to assign a default template to a named-file."
permalink: /data/howto/registration/set-named-file-template.html
---

# How To Assign a Default Template To a Named-file

FlightPath gives you the ability to register files within a named-file following a certain path layout. This allows you to position files based on where they came from or to mirror the layout of another system.

{: .note }
Templates are used to register files at a specific path within a named-file. They can be provided at registration time, or set as a default for all registrations under the same name. You can learn more about templates on [https://www.csvpath.org](https://www.csvpath.org).

## How to do it

* Navigate to your project's `examples/schemas` folder
* Right-click the directory in the project files tree on the left
* Select `Stage data`
* The Stage Data Dialog opens
* Uncheck `Separate named-files` and add the name `schemas` to the `Named-file name` field
<figure><img src="/assets/app_images/stage-data-dialog-staging-dir.png" alt="" width="720"><figcaption></figcaption></figure>
* After hitting the `Stage` button you will see the `schema` named-file in the top right-hand window
* Right-click the `schema` named-file in the top right window. Select `Set template`.
* In the dialog enter a template like `:1/test/:filename`, or whatever you like.
<figure><img src="/assets/app_images/set-named-file-template-dialog.png" alt="" width="470"><figcaption></figcaption></figure>



* Click the `Set` button and then check the `definition.json` file to see where the template was saved

<figure><img src="/assets/app_images/template-saved-in-named-file-definition.png" alt="" width="500"><figcaption></figcaption></figure>



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


