---
title:   Integrations Form
layout: home
nav_order: 2
description: "About FlightPath Data Config's Integrations Form"
parent:   Config Forms
permalink: /data/ui/config/integrations.html
---

#   The Integration Form
{: .no_toc }



## Configuring external tool integrations
![](/assets/app_images/integrations_form_annotated.png)
<div>The integration form</div>
{: .caption }
1. <b>Active listener groups</b>. Integrations, along with some internal CsvPath Framework functionality, operate through listeners that can be turned on and off. This setting is a comma separated list of listener groups that are active.
1. <b>Clickable listener group names</b>. Clicking these names adds them to the active listener groups
1. <b>Integration configuration forms</b>. Most, but not all, integrations have configuration forms for additional variables. Azure, S3, and GCS, in particular, are examples of integrations that require configuration, but which rely only on env vars, not these forms.

As you can see, the SFTP integration requires a host, port, username, and password. (Any of which can be in ALL CAPS to use variable substitution). See [csvpath.org](https://www.csvpath.org) for details about the integrations and examples of how to use them:
<ul style='margin-left:40px'>
    <li/> CKAN
    <li/> OpenLineage
    <li/> OpenTelemetry
    <li/> Scripts
    <li/> SFTP
    <li/> Slack
    <li/> SQL databases and Sqlite files
    <li/> Webhooks
</ul>


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


