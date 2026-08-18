---
title:  Features
layout: home
nav_order: 7
parent: FlightPath Data
description: "FlightPath Data features enable you to manage external tabular datasets, automate using CsvPath Framework, and run your DataOps infrastructure. "
permalink: /data/features.html
---

#   FlightPath Data Features
FlightPath Data is organized around the full lifecycle of data preboarding — from the moment a file arrives to the moment known-good data is published downstream. Its features serve three teams: developers building validation workflows, BizOps teams managing day-to-day data operations, and IT teams running the infrastructure.

{: .new}
New in 1.1.88 — AI-assisted authoring, agentic workflows, Parquet output, JSON Query and SQL support, config variable interpolation, and more. [See what's new →](data/new.html)

## Project Management
FlightPath organizes work into projects. The recommended pattern is one per data partnership or feed type. Each project is self-contained, with its own storage backend configurations, integrations, archive, and logs. Projects can share backends, offering an easy way to segment related work.

Creating a new project takes seconds; managing many projects in parallel is straightforward.

Projects are also the unit of deployment to FlightPath Server, which means keeping them focused keeps your production environment clean and your compute usage efficient.

## Editors
FlightPath includes purpose-built editors for every file type in a preboarding project:

<span style='color:#4466ee'>▶</span> A grid editor for CSV, XLSX, NDJSON, and JSONL data files <br/>
<span style='color:#4466ee'>▶</span> A JSON editor for metadata files <br/>
<span style='color:#4466ee'>▶</span> A grid-structured JSON editor for configuration and operations data <br/>
<span style='color:#4466ee'>▶</span> A syntax-highlighted CsvPath Language editor with functions lookup and one-off test runs, and <br/>
<span style='color:#4466ee'>▶</span> A Markdown editor for documentation.

Each editor is tailored to its file type rather than being a generic text editor with syntax coloring bolted on.

## Profiling and Sampling
Before you write a single validation rule, you need to understand what your data actually looks like. FlightPath's profiling and sampling tools let you inspect incoming files, understand their structure and distribution, and identify the edge cases your validations need to handle — all without leaving the app.

## Data Staging
Incoming files are registered under a named-file. A named-file is a durable identity that persists across versions and runs. Every staged file is immutable and versioned, giving you a permanent record of data as it arrived. During development you can stage files manually; in production, staging is automated. Either way, the result is the same: a traceable, repeatable foundation for everything downstream.

## Validation and Upgrading
Validation and upgrading workflows are built from CsvPath Language scripts, grouped into named-paths groups, and run against staged data.

FlightPath makes the full development cycle fast: write a script, run it, inspect results, iterate. When you're ready for production, loading a named-paths group to CsvPath Framework is a right-click. Run results are stored with full lineage metadata, and any run can be replayed or partially re-executed for forensics or triage.

## Project Configuration
FlightPath's configuration forms cover storage backends, integrations, environment variables, and runtime settings — everything CsvPath Framework needs to run in your environment. Config variable interpolation, new in 1.1.88, lets you separate secrets from runtime configuration cleanly, with layered resolution against OS or project-specific environment variables.

## Help and Documentation
FlightPath's in-context help is available throughout the app. At every point in the editors, in run results, dialogs, and toolbars there are help icons that open a dedicated documentation window covering the app, CsvPath Language functions and Framework behavior, and the available workflows.

The AI sidebar assistant, new in 1.1.88, extends this further by generating validations, explaining scripts, and creating test data on request.

## FlightPath Server
FlightPath Server is the production runtime for FlightPath Data projects — a multi-user, multi-project JSON API that connects your preboarding workflows to managed file transfer systems, data lakes, and downstream consumers. Configure it from FlightPath Data, deploy your projects to it, and monitor it from the same environment you use to build.






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



