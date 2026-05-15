---
title:   Terminology
layout: home
nav_order: 6
description: "Terms we use to talk about FlightPath Data and FlightPath Server"
permalink: terminology.html
---


#   Terminology
{: .no_toc }

FlightPath Data, FlightPath Server and CsvPath Framework are closely tied and share much common language. This page will serve as an evergreen list of definitions that help clarify how the tools work.

- TOC
{:toc}

{: .highlight }
_in these definitions, brackets denote sections in config.ini files. API endpoints are written like: /find/get_file._

## Admin
FlightPath Server is an administration-lite environment. The first API key you create has a small number of admin powers that regular keys do not have. Those are: shutting the server down, seeing all active runs across projects, and creating admin keys. FlightPath Server's over-riding goal is to be lightweight and easy to use. The limited admin key powers reflect that goal.

An admin key can promote any other key to have admin powers using an API call. This function is not available in FlightPath Data.

## AI API
FlightPath Data uses LLM APIs to make data preboarding development and ops more intuitive and less burdensome. The APIs are configured in the Config Panel's `llm` form. This form uses a model name, and optionally a URI and API key, to hook up any of dozens of publicly available AI models.

Of all the AIs we have tried, we recommend using just three: Claude, Gemini, and OpenAI GPT. Our test results rank them in that order -- at least today, tomorrow that may change. All three of these leading "frontier" models work very well within FlightPath.

FlightPath provides tools, context, and programmatic guardrails, and other integration to make already smart APIs brilliant edge data governance operatives. Because CsvPath Language and the CsvPath Framework provide the kind of strong prescriptive structure that helps focus and control AIs, FlightPath AI can truly be a partner in your data preboarding work.

## API key
To use Server you must have an API key. API keys unlock sets of one or more projects. They have no other function than limiting access to projects. FlightPath Server does not have the concept of a user at this time, only shared keys.

An API key has three pieces of information: a name, an owner name, and an owner contact details field. At this time, these open fields are not used much; however, they can help track down a person who knows what the key's purpose was when it was created.

Keys are held in a file called `keys.json`. `keys.json` lives in the server's config directory, along with its `app_config.ini` file. The config directory for Server is in its home `FlightPathServer` directory. This server home directory is always in the installing OS user's home directory, i.e. `~/FlightPathServer`.

Be mindful of the OS sandbox your FlightPath Server runs in if you install from an app store. OS sandboxes may make the actual server home directory, `FlightPathServer`, appear to be in the users home directory, but actually be in a protected container. Practically speaking, this shouldn't have much operational effect.

## BizOps

BizOps, i.e. Business Operations, is the team of people who use technology to effectuate back office business processes. In the case of data preboarding, they are the people who receive data files and have to assure that they are correct, most recent, complete, handled and accounted for correctly, and progressed through the receiving workflow into ideal form for loading into business systems. It's a big job facing serious time pressures, financial impact, and operational risks.

Frequently, some or all of the BizOps team are true SMEs, or Subject Matter Experts. When SMEs are heavily involved in flat file intake, the cost structure of data partnership can change dramatically for the worse. A big part of CsvPath Framework's role is to remove human judgement and manual processing from the workflow, particularly by SMEs.

## Config file
There are four main config files in the FlightPath family:
* `config/config.ini`: the CsvPath Framework project config
* `~/.flightpath`: the FlightPath Data config file
* `config/app_config.ini`: the FlightPath Server config
* `config/generator.ini`: the FlightPath AI config

These config files are non-overlapping. In prinicple the `.ini` files can be consolidated into one.

All settings have sensible defaults that should work for many non-production purposes. The CsvPath Framework config.ini is described on [csvpath.org](https://www.csvpath.org). FlightPath Data's `.flightpath` file is human editable, but not intended for manual file changes.

For FlightPath Server, the most important settings to be aware of are:

### [security]
{: .no_toc }
* localhost_files_allowed=True

    This setting determines if Server can load files from its own machine. If it is allowed to, API callers can load any file on the machine they have access to and then access that file through CsvPath Framework or another means. This problem can be circumvented by tightly constraining the user account the server runs as, but in practice it is generally better to not allow local loads. If this value is set to False (or `no`) only the SFTP, S3, Azure Blob, and Google Cloud Storage backends can be used to pull files into FlightPath Server.

* key_file_path

    The path to keys.json should typically be left blank. The default is `~FlightPathServer/config/keys.json`.

* ssl_keyfile
* ssl_certfile
* ssl_keyfile-password
* ssl_version

    These four SSL settings are passed to Uvicorn, the underlying HTTP server that hosts FlightPathServer. They are what they look like and details can be easily found in the public Uvicorn documentation.

### [server]
{: .no_toc }
* host=localhost
* port=8000
* workers=1
* max_file_size_kb=1024

    largest file that can be uploaded by API. this limitation does not affect the CsvPath backends, only posting files to the API.

## Data preboarding

The process of receiving data files from data partners that collects data versions to immutable storage, identifies, validates, upgrades, captures metadata, and publishes clean data immutably for downstream consumers.

## Env file

Each FlightPath Server project has a set of OS env variable substitutes in a `env.json` file that lives in its config directory.

In FlightPath Data projects exist on the same machine, so in many cases, the OS env vars can be used in configuration fields in the project's `config.ini`. In Server, however, different API keys may have different expectations of the values of OS env vars. Moreover, OS env vars must not be manipulatable within Server. And FlightPath Server's goal of being admin-lite and low-friction for developers and ops team members makes it imperative that it offer an alternative to env vars.

Just as in using CsvPath Framework directly, you can refer to an env var in `config.ini` by making the value of the key ALL CAPS. Any all caps key becomes a look up in `env.json`. `env.json` is a simple dict with keys named by in all caps.

When you create a Server project or upload a new version of a config file, Server will update the `allow_var_sub` key to be `false` (or `no`). Technically, a person with access to the machine FlightPath Server runs on can reset your CsvPath Framework config to look at OS env vars. In practice you should not do that, and, in any case, there would be no advantage to doing it.

## Named-file

A named-file is an abstract name indicating a class or type of data. For example, a named-file `Orders` would contain tabular files with orders data. A named-file can contain a directory structure within it, governed by a template. The template determines the path where an arriving data file will live within the named-file. In the absence of a template, every new data file will be stored directly under the named-file name.

Named-files capture versions of files. Say two files arrive within a few hours both named `my_orders.csv` The named-file `orders` will store them at `orders/my_orders.csv/23fa5cfd23...csv` and `orders/my_orders.csv/e93aa5b2f38...csv` where `...` represents part of an SHA256 fingerprint of the contents of the file. Requesting the `orders` file right after the first `my_orders.csv` arrived will return the file with the hash starting `23fa...`. After the second `my_orders.csv` arrived the same request for `orders` would return the file with the hash starting `e93a...`.

## Named-paths group

Named-paths groups (a.k.a. group or a group of csvpaths) are sets of csvpath statements that are run as a unit. A group allows you to decompose your validation rules into small units that are easy to test, while still allowing you to run the group as a single action. When a group is run its csvpaths are evaluated in serial or breadth-first. The output of each csvpath is distinct and comes as a full set of matched data, unmatched data, errors, printouts, variables, metadata, and a manifest. It becomes straightforward to evaluate the run in terms of the whole group or any csvpath member of the group, depending on the level of analysis you need.

When you have one file and three validation rules, named-groups may seem like a lot -- though using them adds very little friction. However, when your validation specification has 200 rules and you receive thousands of files, the greater flexibility and manageability of named-paths becomes clear. Most of us live in between these poles and find named-paths to be useful and not burdensome, even if we don't tap all the advanced features.

## Named-results

Results are named identically to the named-paths group that created them. Within the name each run from that named-paths group has a datestamped directory, its run dir. Below the run dir are directories with run output files for each of the csvpaths in the named-paths group.

Generally we just call named-results, results, even though actual run output is lower down the tree.

## Project

FlightPath Data and FlightPath Server both have projects. CsvPath Framework doesn't use the word project, but its config file is the bedrock of a project.

A FlightPath Server project is essentially the same as a FlightPath Data project. The main differences are:
* Server projects are in a multi-user environment
* A project in the server is namespaced apart from other projects by its API key. In this respect the API key is analogous to the developers local machine. All the projects you see in FlightPath Data are in your `~/FlightPath` directory; whereas, all the projects you see on Server are 'in' your API key.
* Server projects cannot pull in data from HTTP URLs. They may also not be able to pull in data from the local filesystem, depending on the server's configuration.

Of course, you have more limited access to files when you are using Server. For this reason we can assume you are doing your development work in FlightPath Data and, when it is done and tested, deploying your local project to a FlightPath Server operating as production.

## Server project

FlightPath Server projects are CsvPath Framework projects. In that way, they are virtually the same as FlightPath Data projects. In fact, you can think of a FlightPath Server project being basically just a `config.ini` file, plus an `env.json` file, living in a `config` directory within a folder named for the project. That is almost exactly the same as a local FlightPath Data project.

A server project lives in Server's projects dir, within a directory named for a SHA265 hash representing an API that owns the project.

## Register

Arriving file registration is a term of art in ingestion preboarding. It is whatever you do to store and identify a file that you receive. As you know, in CsvPath Framework registration means a particular way of storing, versioning, identifying, staging, augmenting with metadata, and retrieving files that is unique to the framework. At the highest level, registration is centered on the `CsvPaths.FileManager.add_named_file()` method.

In FlightPath Server we use the word 'registration' as part of the API; whereas, in CsvPath Framework we often talk about registration but there is no central 'register' method. Nevertheless, we're talking about the same thing.

## Run

Similarly to the word 'register', CsvPath Framework doesn't have a method named 'run'. When we execute a set of csvpaths to evaluate and/or modify a data file we use one of these `CsvPaths` object methods:
* `collect_paths`
* `fast_forward_paths`
* `next_paths`
* `collect_by_line`
* `fast_forward_by_line`
* `next_by_line`

Calling any of these is doing a 'run'. For simplicity, FlightPath Server uses the word 'run' in its endpoints. Like FlightPath Data, Server supports:
* `collect_paths`
* `fast_forward_paths`
* `collect_by_line`
* `fast_forward_by_line`

The two iterative 'next' methods are left to people programming directly against the CsvPath Framework Python API. That is easy to do and useful, but out of scope for FlightPath.

## Run dir

The run dir (sometimes `run_dir` or run directory) is the datestamp directory name of a run within a named-result. A named-result is simply the name of the named-paths group that generated it.

The named-results name plus the run dir make a unique identity for results. In the unlikely event of a naming conflict, run dirs are disambiguated by a number appended to the datestamp. The result metadata also assigns a UUID as the run identifier.

## Run path

The run path is the fully qualified path to the run directory. The path can be on any of the five available backends.

## Upgrading

When we talk about validation and upgrading the "upgrading" part means changing the file to meet a standard. By contrast, "validation" simply means checking against a standard, typically for an up or down answer.

Upgrading includes three possible activities:
* Canonicalizing values
* Filling in missing values
* Changing the overall shape of the data

Unlike validation, upgrading can be handled in an ETL tool. However, it is well known that the earlier you can find and fix problems the less expensive and risky those problems and the fixes are. Keeping modest upgrading in the preboarding context, rather than handling data prep later downstream keeps validation and upgrading as a single unitary activity happening as close to the entry point as possible for the lowest cost and risk profile possible.

To be clear, CsvPath Framework and FlightPath are intended to validate that data looks like good data according to format, completeness, and business requirements for data acceptance. They are not intended to be the last word on if the arriving data, once accepted, is ready for the silver or the gold layer of the data lake or ready to be imported into any application.

We would not advise teams to handle all data preparation in FlightPath. Data mastering, joining, checking relational integrity, pushing data into data systems and applications, among other things, are all activities you should continue to rely on your ETL or iPaaS for. FlightPath excels at providing trustworthy data to that next step in the overall workflow.

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


