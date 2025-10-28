---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

title: ✈️ FlightPath 50,000-foot Overview
layout: home
nav_order: 1
description: "FlightPath and CsvPath Framework are a complete architecture for data file feed management and ingestion. "
permalink: /overview.html
---

# ✈️  50,000-foot FlightPath Overview
{: .no_toc }

### The Architecture For Data File Feed Ingestion and Management
{: .fs-5 .move-up .no_toc }


- TOC
{:toc}

## Preboarding Within The Data Lifecycle
Preboarding is an integral part of the flow of data files from untrusted producers to data product end users. FlightPath Data and FlightPath Server are the purpose-built, drop-in implementation of effective data preboarding.

![](../assets/images/preboarding-data-flow.png)




## Purpose-built components, state of the art integrations

FlightPath Data, FlightPath Server, and the CsvPath Framework together form a complete data preboarding architecture that takes your data file feed ingestion operations to the next level. The solution is developer-friendly, opinionated, and flexible to keep your system design effort low. Not only do the three core components build on one anther, but they also support leading clouds, observability, data management, and notification tools.


### Architecture Components
{: .no_toc }
FlightPath augments CsvPath Framework to create a complete low-code, high-function preboarding system for ingesting data file feeds. The architecture has two layers: core components and enabling integrations.

#### CsvPath Framework
{: .no_toc }
* Data and metadata management for file feeds
* CsvPath Validation Language for validation and upgrading
* CsvPath Reference language for querying staged data or accessing specific files
* Event-driven integration

#### FlightPath Data
{: .no_toc }
* A project-based IDE for CsvPath Validation Language
* A CsvPath Framework production management console
* A project configuration and syncing tool

#### FlightPath Server
{: .no_toc }
* A multi-project/multi-user runtime for FlightPath Data projects
* An arms-length integration target for managed file transfer systems
* A trusted publisher serving known-good data to downstream consumers

![](../assets/images/3-core-components.png)

#### Enabling Integrations
{: .no_toc }

Preboarding is just one stop on data's journey from source to consumer. FlightPath and CsvPath Framework integrate with data file sources and destinations, observability platforms, and metadata-layer collaborators.

* Five supported MFT and data lake storage backends: AWS, Azure, GCP, SFTP, and file system
* Metadata capture to any mainstream relational database
* Arms-length integrations using webhooks and APIs
* Support for sending data processing events to OpenTelemetry and OpenLineage platforms

![](../assets/images/integrated-components.png)

## Goals
FlightPath and CsvPath are on a mission to increase quality and lower the cost and risk of managing data file feeds. Every aspect of their design is based on meeting specific goals.

### Lower Manual Effort
* Move manual data checking into automated CsvPath Validation Language rules and schemas
* Move manual arrival and process monitoring into OpenTelemetry and OpenLineage events or webhook notifications
* Remove the architectural design effort required to create a data ingestion preboarding solution
* Reduce project setup effort to enable small, agile projects with lower risks and faster turnaround

### Higher Data Quality
* Turn raw untrustworthy data into "ideal-form" raw data in a known-good or known-bad state
* Assess "ideal" and "known" using formal well-formedness checks, validity, canonicalization, and business rule acceptance criteria
* Bring semi-structured CSV and Excel data to the same level of conformance testing as relational, XML, and EDI data
* Shift quality control left to catch data-quality issues as close to the data producer as possible

### Improved Data Access
* Put all inbound data file feeds into a consistent storage structure for easy access
* Provide a permanent record of data at intake and data published internally
* Provide a simple query language to find data based on file location and data lifecycle criteria
* Provide a process-locally-monitor-centrally capability allowing many small disconnected data partner projects to feed data, metadata, and monitoring events into coherent centralized systems

### Data Explainability
* Identify data immediately with a durable identity that is traceable: a social security number, birth certificate, street address, and family tree
* Structure data changes consistently and provide indicators and documentation as to lifecycle stages
* Capture data evaluation outputs multi-dimensionally with discrete easily inspectable outputs, including matched and unmatched lines, rule-driven printouts, run logs, lineage and quality events, error state events, variables captured, and runtime metrics
* Make tracing changes through process steps simple and repeatable


## Principles
FlightPath is built according to principles derived from observing what has worked in practice for companies that have robust data file feed handling. While every data file feed has unique aspects, knowing what works enables you to assess where to be flexible vs. where to hold the line for more correct approach.

### Immutability
Immutable data means never changing a data set in place, but rather creating a copy of the data when it is modified. The benefit of immutable data is:
* The state of the data set is never in doubt
* Replaying a change or rewinding a process to try something different is easy
* Processing results are deterministic and explainable

There are, of course, costs. Primarily there is the cost of the data storage and the overhead of managing more data sets. CsvPath Framework substantially limits the latter by automating a consistent pre-built process of data staging and processing. The cost of storage is still an issue, but storage costs are low and falling. Moreover, data can be aged from hot to warm to cool storage automatically and relatively transparently in cloud data stores. In short, handled well, the payoff in quality and person-hour efficiency far outweighs the cost of immutability.

### Idempotence
Idempotent data processing means that processing runs have the exact same output every time you run them on any given data input. Fast forensics requires that processing steps can be understood easily. When processing the same data doesn't lead to the same result understanding why bad data happened becomes dramatically harder. Idempotent processing plus immutable data result in deterministic outcomes that are easy to assess, explain, and evolve.

### Keep It Simple

#### Declarative processing
{: .no_toc }
In general, there are two types of data processing tools, those that are procedural and those that are declarative. A procedural process changes data through a set of logical commands such as `for every line in dataset increase line_count by 1`. Declarative processes instead simply state an outcome and allow the processing environment to act accordingly behind the scenes. SQL, a declarative language, would write the same logic as `select count(*) from dataset`. The benefit of declarative processing is simplicity and a lower chance for error. FlightPath encourages declarative processing using CsvPath Validation Language and CsvPath Reference Language.

#### Linear focus
{: .no_toc }
Data preboarding is the leading edge of data ingestion. Its purpose is the critical and limited goals of capture, identification, validation and upgrading, and metadata publishing. Anything else is out of scope. Unlike ETL/ELT or big data batch or stream processing, preboarding moves data in a linear way through a simple lifecycle that results in untrustable raw data turning into known-good raw data. Other processes may require joins, splits, calculations, mastering, summation, augmentation, restructuring, etc. But preboarding is exclusively about predictably and cheaply building data trust before any of that happens.


#### Small contexts
{: .no_toc }
Small projects with limited scope and infrequent changes are lower risk. The more frequent the changes, the smaller the scope should be.

CsvPath Framework provides the consistency and tooling that allows you to run small projects in a distributed fashion efficiently and with centralized awareness and control. FlightPath gives you the ability to spin up a CsvPath Framework project and deploy it to production in minutes. FlightPath and the Framework namespace and version assets and data at every step so that projects can live complete disconnected or mix, match, and overlay each other without adding confusion and risk.

That separation plus consistency lets you scope projects down to a single data partner, or even individual data feeds per partner. You can support any number of backend storage systems, heterogeneous file types, or event-based integrations, while at the same time, capturing data to a single data lake, a single observability system, and/or using a single naming, metadata, and file location convention. Truly the best of both worlds.

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


