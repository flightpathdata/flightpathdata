---
title:   SFTP Configs
layout: home
nav_order: 7
description: "Introduces FlightPath Data's SFTP config dialog"
parent:   Dialogs
permalink: /data/ui/dialogs/server-configs.html
---

#   The SFTP Configs Dialog


<figure><img src="/assets/app_images/server-configs-dialog.png" alt="" width="700"><figcaption class='caption'>The SFTP Configs dialog lets you associate SFTP servers with specific named-files and named-paths.</figcaption></figure>

1. <b>Server names</b>. SFTP servers are scoped to the named-file or named-paths they are defined on and named for convenience.
2. <b>Match on address and port</b>. FlightPath recognizes servers by their name or IP and the port they listen on. If an `sftp://` address doesn't match the project's backend configuration, FlightPath will look at the servers in scope for a match.
3. <b>Env vars capable </b>. The four main fields can be used with project or OS environment variables. When values are ALL CAPS, FlightPath will check for a matching env var. Interpolation strings, using {}, are also available. 
4. <b>Test Connection</b>. The test button enables a quick check to make sure your configuration is correct.


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


