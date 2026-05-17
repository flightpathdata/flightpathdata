---
title:   Actual Value Tables
layout: home
nav_order: 2
description: "How the Actual Value tables work"
parent:   Config Forms
permalink: /data/ui/config/actual-values.html
---

#   Actual Value Tables
{: .no_toc }

Most of the config forms have a table at the bottom called the Actual Value Table. The Table gives you a view of the values that FlightPath sees after variable substitution and interpolation.

## Variable substitution

* Open the Config Panel using the `Open config` button at the lower left
* Switch to the `env` form
* Set an env var `CACHE_DIR` with the value `my_cache_dir`
![](/assets/app_images/env_var.png)
* Switch to the `cache` form
* In the `Cache directory` field enter `CACHE_DIR`
* Click `Save and reload` at the top. Then close the Config Panel and reopen it.
* Click into the `cache` form and see that the Actual Value Table at the bottom shows a row with name `path` and actual value `my_cache_dir`
![](/assets/app_images/var_sub.png)
* Change the `Cache directory` field to `{CACHE_DIR}/internal`
* Click `Save and reload` at the top
* See that the Actual Value Table shows a row with name `path` and actual value `my_cache_dir/internal`
![](/assets/app_images/var_interpol.png)


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


