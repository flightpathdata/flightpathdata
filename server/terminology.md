---
title: ✏️  Terminology
layout: home
nav_order: 6
parent: FlightPath Server
description: "Terms we use to talk about FlightPath Server"
permalink: /server/terminology.html
---


# ✏️  Terminology
{: .no_toc }

FlightPath Server is a simple environment that is closely tied to FlightPath Data and CsvPath Framework. There are few terms that are specific to Server or have a slightly different meaning in that context.

- TOC
{:toc}

{: .highlight }
_in these definitions, brackets denote sections in config.ini files. API endpoints are written like: /find/get_file._

## Admin
FlightPath Server is an administration-lite environment. The first API key you create has a small number of admin powers that regular keys do not have. Those are: shutting the server down, seeing all active runs across projects, and creating admin keys. FlightPath Server's over-riding goal is to be lightweight and easy to use. The limited admin key powers reflect that goal.

An admin key can promote any other key to have admin powers using an API call. This function is not available in FlightPath Data.

## API key
To use Server you must have an API key. API keys unlock sets of one or more projects. They have no other function than limiting access to projects. FlightPath Server does not have the concept of a user at this time, only shared keys.

An API key has three pieces of information: a name, an owner name, and an owner contact details field. At this time, these open fields are not used much; however, they can help track down a person who knows what the key's purpose was when it was created.

Keys are held in a file called `keys.json`. `keys.json` lives in the server's config directory, along with its `app_config.ini` file. The config directory for Server is in its home `FlightPathServer` directory. This server home directory is always in the installing OS user's home directory, i.e. `~/FlightPathServer`.

Be mindful of the OS sandbox your FlightPath Server runs in if you install from an app store. OS sandboxes may make the actual server home directory, `FlightPathServer`, appear to be in the users home directory, but actually be in a protected container. Practically speaking, this shouldn't have much operational effect.

## Config file
Like CsvPath Framework and FlightPath Data, FlightPath Server has a config file. A server's config INI file is in `~FlightPathServer/config/app_config.ini`.

The config.ini file contains a few settings. All have sensible defaults that should work for many non-production purposes. Most importantly:

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

## Env file

Each FlightPath Server project has a set of OS env variable substitutes in a `env.json` file that lives in its config directory.

In FlightPath Data projects exist on the same machine, so in many cases, the OS env vars can be used in configuration fields in the project's `config.ini`. In Server, however, different API keys may have different expectations of the values of OS env vars. Moreover, OS env vars must not be manipulatable within Server. And FlightPath Server's goal of being admin-lite and low-friction for developers and ops team members makes it imperative that it offer an alternative to env vars.

Just as in using CsvPath Framework directly, you can refer to an env var in `config.ini` by making the value of the key ALL CAPS. Any all caps key becomes a look up in `env.json`. `env.json` is a simple dict with keys named by in all caps.

When you create a Server project or upload a new version of a config file, Server will update the `allow_var_sub` key to be `false` (or `no`). Technically, a person with access to the machine FlightPath Server runs on can reset your CsvPath Framework config to look at OS env vars. In practice you should not do that, and, in any case, there would be no advantage to doing it.

## Project
A FlightPath Server project is essentially the same as a FlightPath Data project. The main differences are:
* Server projects are in a multi-user environment
* A project in the server is namespaced apart from other projects by its API key. In this respect the API key is analogous to the developers local machine. All the projects you see in FlightPath Data are in your `~/FlightPath` directory; whereas, all the projects you see on Server are 'in' your API key.
* Server projects cannot pull in data from HTTP URLs. They may also not be able to pull in data from the local filesystem, depending on the server's configuration.

Of course, you have more limited access to files when you are using Server. For this reason we can assume you are doing your development work in FlightPath Data and, when it is done and tested, deploying your local project to a FlightPath Server operating as production.

## Project config

FlightPath Server projects are CsvPath Framework projects. In that way, they are virtually the same as FlightPath Data projects. In fact, you can think of a FlightPath Server project being basically just a `config.ini` file, plus an `env.json` file, living in a `config` directory within a folder named for the project. That is almost exactly the same as a local FlightPath Data project.

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

## Run path

The run path is the fully qualified path to the run directory. The path can be on any of the five available backends.


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


