---
title: FlightPath Server
layout: home
nav_order: 3
description: "FlightPath Server is a no-code/low-code data ingestion infrastructure that lands inbound tabular datasets with confidence, efficiency, and quality, before they can corrupt downstream systems"
permalink: /server.html
nav_fold: false
---

<div class="headline-logo" style='margin:10px 0 70px 0'>
    <img src="assets/logos/flightpath-server-logo-4-1024.png"/>
    <h1>The production runtime for FlightPath Data projects.
</h1>
    <h3 class='fs-5 move-up'>

    </h3>
    <p style='position:relative;bottom:0px; margin-top:40px;font-size:20px;font-weight400;'>
FlightPath Server is bundled with FlightPath Data. Download
 <img alt="Static Badge" src="https://img.shields.io/badge/Version-1.1.88-lightblue" style="position: relative;bottom: -5px;"> native binaries.
    </p>
            <p class="label label-blue store-label mx-auto"><a href='https://apps.apple.com/us/app/flightpath-data/id6745823097?mt=12'><i class="fab fa-apple"></i> Apple MacOS Store</a></p>
            <p class="label label-blue store-label mx-auto"><a href='https://apps.microsoft.com/detail/9P9PBPKZ4JDF'><i class="fab fa-windows"></i> Microsoft Store</a></p>
</div>







<!--div style='text-align:center;'>
<img src='/assets/logos/flightpath-server-logo-4-1024.png' style='width:350px; margin:20px auto 20px auto;'/>
</div>
FlightPath Server is open, free, and cross-platform. It is bundled with FlightPath Data. When you install FlightPath Data the server is also installed. Download <img alt="Static Badge" src="https://img.shields.io/badge/Version-1.1.88-lightblue" style="position: relative;bottom: -5px;"> from the Apple MacOS Store or the Microsoft Store.

<div style='width:100%; text-align:center;margin-bottom:50px'>
        <p class="label label-blue store-label mx-auto"><a href='https://apps.apple.com/us/app/flightpath-data/id6745823097?mt=12'><i class="fab fa-apple"></i> Apple MacOS Store</a></p>
        <p class="label label-blue store-label mx-auto"><a href='https://apps.microsoft.com/detail/9P9PBPKZ4JDF'><i class="fab fa-windows"></i> Microsoft Store</a></p>
</div-->





## What Is FlightPath Server?
FlightPath Server is a REST API that enables you to automate inbound CSV, JSONL/NDJSON, and Excel file data preboarding. It applies quality and governance controls, and stages them for downstream consumers. FlightPath Server runs the preboarding workflows you build in FlightPath Data in a multi-user, multi-project production environment, without manual intervention.

With FlightPath Server you can:

<span style='color:#4466ee'>▶</span> **Automate data arrival**: Activations trigger runs when files land, with no scheduling or polling required <br/>
<span style='color:#4466ee'>▶</span> **Apply schemas and rules at scale**: Minimize manual processing and eliminate ad-hoc data checking <br/>
<span style='color:#4466ee'>▶</span> **Connect MFT**: Creates a no-code path from MFT (managed file transfer) to data lakes and applications via a trusted, known-good data publisher <br/>
<span style='color:#4466ee'>▶</span> **Notify downstream automatically**: Trigger webhooks on run outcomes, among other no-code integration options. <br/>
<span style='color:#4466ee'>▶</span> **Trace problems and clarify data flows**: Every run generates lineage and ops metadata that can be shared via OpenTelemetry or OpenLineage. <br/>
<span style='color:#4466ee'>▶</span> **Stage versioned, upgraded, well-identified data**: The organization's edge has never been so well governed.

Combined with FlightPath Data, onboarding a new data partner goes from weeks to days. Projects deploy to Server in minutes from the same environment you used to build them.

## Bundled with FlightPath Data

There is no separate install. FlightPath Server is a lightweight binary that is easy to deploy.
It is designed to be running before you've finished your coffee:

## Move Fast, Achieve Stuff
Simple REST JSON API that fits most upstream and downstream tools without custom adapters
Projects deploy from FlightPath Data in minutes — the same config you tested locally runs in production unchanged
Config variable interpolation keeps secrets cleanly separated from runtime configuration, making multi-environment deployments straightforward

## Infrastructure and Integrations
FlightPath Server runs as a native binary on MacOS and Windows 11, as a Windows service, or on any platform from the GitHub repo as a Python server. Its supported storage backends are:

<span style='color:#4466ee'>▶</span> AWS S3 <br/>
<span style='color:#4466ee'>▶</span> Azure Blob Storage <br/>
<span style='color:#4466ee'>▶</span> Google Cloud Storage <br/>
<span style='color:#4466ee'>▶</span> SFTP servers <br/>
<span style='color:#4466ee'>▶</span> Locally mounted file systems

FlightPath Data makes it easy to configure CsvPath Framework integrations including Slack, OpenTelemetry, OpenLineage, webhooks, and more.


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


