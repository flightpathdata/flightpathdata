---
title: FlightPath Server
layout: home
nav_order: 3
description: "FlightPath Server is data ingestion infrastructure that preboards tabular datasets to give you confidence, efficiency, and quality. "
permalink: /server.html
nav_fold: false
---


<div class="headline-logo">
    <img src="assets/logos/flightpath-server-logo-4-1024.png" style='width:450px;'/>
    <h1>Automated data preboarding made simple.</h1>
    <h3 class='fs-5 move-up'>Shift-left for higher agility, quality, and efficiency</h3>
    <br/>
    <p>
        FlightPath Server is open, free, and cross-platform. Find it on the
        <a href='https://apps.apple.com/us/app/flightpath-data/id6745823097?mt=12'>Apple MacOS Store</a>,
        the <a href='https://apps.microsoft.com/detail/9P9PBPKZ4JDF'>Microsoft Store</a>,
        or on <a href='https://github.com/dk107dk/flightpath/tree/main'>GitHub</a>.
    </p>
    <div style='width:100%; text-align:center;'>
        <div>
            <p class="label label-blue store-label mx-auto"><a href='https://apps.apple.com/us/app/flightpath-data/id6745823097?mt=12'><i class="fab fa-apple"></i> Apple MacOS Store</a></p>
            <p class="label label-blue store-label mx-auto"><a href='https://apps.microsoft.com/detail/9P9PBPKZ4JDF'><i class="fab fa-windows"></i> Microsoft Store</a></p>
        </div>
    </div>
</div>










## What Is FlightPath Server?

FlightPath Server is a REST API to land arriving CSV and Excel data files, apply quality and governance controls, and stage them for downstream consumers. With FlightPath Server you can:

* Apply schemas and rules to minimize manual processing
* Connect managed file transfer to data lakes and applications as a trusted data publisher
* Provide access to metadata that helps trace problems and clarify data flows
* Capture versioned, upgraded, and well-identified source data at the organization's edge

FlightPath Server enables DataOps teams to shift-left their data file feed quality management, while scaling down manual processing and gaining efficiency through project consistency. Combined with the FlightPath Data frontend app, onboarding new data partners becomes rapid and predictable.


<!--table style='margin-top:10px;'>
    <tr>
        <td>
            <img src='../../assets/images/high-level-data-flow.png'/>
        </td>
    </tr>
</table>
<div style='text-align:center'>
  <caption>FlightPath Server is a quality-first channel from MFT to downstream data consumers</caption>
</div-->

## Roll-out Rapidly

FlightPath Server sets up quickly and gives you a pre-built framework for ingestion preboarding. Fast-start features include:

* FlightPath Server is bundled with FlightPath Data. It installs in seconds.
* The REST JSON API is simple and fits most upstream and downstream tools
* FlightPath Data and CsvPath Framework projects migrate to FlightPath Server in minutes
* Configuration and access made easy by the FlightPath Data frontend app

## Infrastructure and Integrations

FlightPath Server runs as a native binary on MacOS and Windows 11. It runs on any platform from the Git repo as a Python server. FlightPath Server supports all the same infrastructure backends that CsvPath Framework does. Its storage backends are:

* AWS S3
* Azure Blob Storage
* Google Cloud Storage
* SFTP servers
* Locally mounted file systems

The FlightPath Data frontend app makes it easy to configure CsvPath Framework integrations, including Slack, OpenTelemetry, OpenLineage, webhooks, and more.

## Get Started!
* ✨ [FlightPath Server Features](server-features.html)
* 🛠️ [FlightPath Server How-tos](server-howtos.html)
* 💡 [Preboarding For Success](preboarding.html)

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


