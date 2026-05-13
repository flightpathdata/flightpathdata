---
title: 🎨 Load a Group Definition file
parent: 🎨 Groups
layout: home
nav_order: 4
description: "How to create a named-paths group from a group definition file."
permalink: /data/howto/groups/load-group-definition-file.html
---

# How To Create a Group From a JSON Definition File

FlightPath manages csvpath statements in files and groups. Multiple csvpath statements can live in a file. All of the statements in the file will be a part of the same group. A named-paths group can be created from a JSON definition that points to multiple files. The definition file also holds other configuration items, such as templates and webhooks.

{: .note }
Templates are used to register files at a specific path within a named-file. This allows the structure of the named-file to follow the path structure of the arriving files and/or be laid out to match another system. You can learn more about templates on [https://www.csvpath.org](https://www.csvpath.org).

## How to do it

* Navigate to your project's `examples/named-paths groups` folder
* Open `my_named_paths.json`
* See that `my_named_paths.json` defines two named-paths groups: `another_test_named_paths_group` and `test_named_paths_group`, each of which identify csvpath statement files. The contents of these csvpath statement files will be the groups.
<figure><img src="/assets/app_images/group-definition-file.png" alt="" width="650"><figcaption></figcaption></figure>

* Right-click `my_named_paths.json`. The Load Csvpaths Dialog opens. When loading from a JSON file the form has only two buttons. Click `Create or overwrite`.
<figure><img src="/assets/app_images/load_named_paths_by_json.png" alt="" width="700"><figcaption></figcaption></figure>

* Look in the named-paths groups window at the middle right. Notice there are now two new groups, as named in the JSON definition.

<figure><img src="/assets/app_images/named-paths-groups-after-json-load.png" alt="" width="300"><figcaption></figcaption></figure>


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


