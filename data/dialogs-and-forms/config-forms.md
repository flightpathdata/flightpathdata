---
title: 🔰 The Config Forms
layout: home
nav_order: 2
description: "Walks-through FlightPath Data's config forms"
parent: 🔰 The App UI
permalink: /data/forms.html
---

# 🔰 The FlightPath Data UI: The Config Forms
{: .no_toc }

### FlightPath Data's config panel helps you develop and automate local and server projects productively
{: .no_toc }


- TOC
{:toc}


## Cache

![](../assets/app_images/cache_form_annotated.png)
<div>The cache form</div>
{: .caption }
1. <b>Use cache</b>. This is the on/off switch for local caching of line counts and headers. Generally, for local files, caching should be left on to boost performance.
1. <b>Cache directory</b>. The cache files directory can be any location within the project. By default it is `<projecti>/cache`.


## Config

![](../assets/app_images/config_form_annotated.png)
<div>The config form</div>
{: .caption }
1. <b>Config file path</b>. The config file you are editing through these forms is located at this path. By default it is `<project>/config/config.ini`. With FlightPath Data there is usually no advantage to using another location.When you use CsvPath Framework programmatically there are times when moving the config file is useful.
1. <b>Allow variable substitution</b>. Variable substitution allows you to configure a setting in ALL CAPS and have that value become the value of an OS env var with the same name. I.e. `password=MY_PASSWORD` would set `password` to the value of the OS env var `MY_PASSWORD`.
1. <b>Variable substitution source</b>. By default, when the field is `env` or blank, variable substitution uses OS env vars. However, if you add a path to a JSON file with a dictionary structure the key-value pairs in the dictionary are used for lookups instead. FlightPath Server does not allow the use of OS env vars because it is a multi-project, multi-user system. On the server a JSON file is the only option.

## Env

![](../assets/app_images/env_form_annotated.png)
<div>The env form</div>
{: .caption }
1. <b>Filter</b>. This filter allows you to see only env vars that match a string.
1. <b>List of OS env vars</b>. This list shows all OS env vars for the currently logged in user. It includes env vars specifically added using this form for use in FlightPath Data.
1. <b>Add env var</b>. Adds an OS env var. OS env vars set during an app session do not persist after the app is shutdown. For this reason, FlightPath Data adds the app not only to the OS env, but also to `.flightpath` in the user's home directory. When FlightPath Data starts it adds all the env vars it knows about to the OS env vars so that the set of variables is consistent for each use of the app.


## Errors
![](../assets/app_images/errors_form_annotated.png)
<div>The errors form</div>
{: .caption }
1. <b>Error pattern</b>. The error pattern determines what is shown when validation errors occur during a run. This does not change the log line output, only the user-presented validation errors. For example, a csvpath like `$[*][add("five", 3)]` will generate two errors, one because the add function does not take strings, and one because adding `"five"` to `3` is inherently invalid. These are both user-presented errors that may show in the run printouts and errors.json. The error pattern controls what the printout would look like.
1. <b>Error format</b>. If set to `full`, the default, errors will be presented using the error pattern. If set to `bare` errors will be presented in the minimal form of a brief narrative message. The former looks like `2025-10-27 19h14m27s-448672:projects_with_reset.csv:1::reset headers:add[0]:  could not convert string to float: 'five'`; whereas, the latter like: `could not convert string to float: 'five'`
1. <b>CsvPath Errors</b> and <b>CsvPaths Errors</b>. These settings reference the `CsvPath` and `CsvPaths` classes in the CsvPath Framework. `CsvPath` runs individual csvpath statements; for example, a test run in FlightPath Data during development. `CsvPaths` runs sets of csvpath statements in full, automated runs, such as happen in FlightPath Server. The checkboxes determine how errors are handled:
<ul style='margin-left:40px'>
    <li/><b>Raise</b>: Raising errors means raising an exception that would stop a run cold. You may want to leave this box unchecked in product environments in order to not stop processing on the first validation error.
    <li/><b>Print</b>: Outputs validation errors to the printout stream(s). Leaving print checked is typical.
    <li/><b>Stop</b>: Stops processing on the first error, but without raising an exception; thereby allowing results and run wrap up to be handled normally.
    <li/><b>Fail</b>: Marks a csvpath as invalid, but does not stop the run.
    <li/><b>Collect</b>: Collects the error with contextual information to errors.json.
</ul>



## Extensions
![](../assets/app_images/extensions_form_annotated.png)
<div>The extensions form</div>
{: .caption }
1. <b>Data file extensions</b>. These file extensions enable FlightPath and CsvPath Framework to focus on only data files that can and/or should be processed. `.csv` and `.xlsx` are typical.
1. <b>Csvpath file extensions</b>. This setting indicates what files contain csvpath statements. Usually the defaults, `.csvpath` and `.csvpaths`, don't need to be changed.


## Inputs
![](../assets/app_images/inputs_form_annotated.png)
<div>The inputs form</div>
{: .caption }
1. <b>Files</b>. Determines where named-files are kept.
1. <b>Csvpaths</b>. The location of named-paths groups.

These settings can use any of the five storage backends FlightPath Data supports:
<ul style='margin-left:40px'>
    <li/> Local POSIX or Windows file system
    <li/> SFTP <i>(sftp://...)</i>
    <li/> AWS S3 <i>(s3://...)</i>
    <li/> Azure Blob Storage <i>(azure://...)</i>
    <li/> Google Cloud Storage <i>(gs://...)</i>
</ul>


## Integrations
![](../assets/app_images/integrations_form_annotated.png)
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


## Logging
![](../assets/app_images/logging_form_annotated.png)
<div>The logging form</div>
{: .caption }
1. <b>Handler type</b>. Either `rotating` or plain `file`.
1. <b>Log file path</b>. By default, `logs/csvpath.log`. There is little advantage to changing the location and FlightPath Server only allows the default.
1. <b>Number of log files to keep</b>. Logs can get very large if you run on `debug`, so pick a number appropriate to the volume you expect.
1. <b>Max log file size</b>. The default is modestly large. You may want to lower it, depending on your use case.
1. <b>CsvPath log level</b> and <b>CsvPaths log level</b>. Again, these refer to the CsvPath Framework classes. The former is used for one-off csvpath runs and the latter is used for full, automated, multi-csvpath runs. You can set the logging level independently in order to focus your efforts. For example, if you have a validation concern you may only run `CsvPath` at an elevated log level, rather than both. Likewise, if your concern is integrations or storage management problems you would more likely run `CsvPaths` at an elevated level.


## Projects
![](../assets/app_images/projects_form_annotated.png)
<div>The projects form</div>
{: .caption }
1. <b>Projects directory name</b>. The default is `FlightPath`. There is little reason to change it. You cannot change the project directory used by FlightPath server, which is `FlightPathServer`.
1. <b>Open projects directory</b>. Simply opens the directory used for projects. This is useful when you want to edit config.ini files by hand or drag in lots of files.


## Results
![](../assets/app_images/results_form_annotated.png)
<div>The results form</div>
{: .caption }
1. <b>Archive</b>. The archive is the location you store results in. You can name the archive directory anything you like. An archive is as much a namespacing construct as it is a file location. Two projects can share an archive. Or two archives can have a common parent but different names. CsvPath Framework encourages more, smaller projects for simplicity, minimizing blast radius, and enabling horizontal scaling. That makes archive naming potentially very useful. An archive can live in any of the five storage backends.
1. <b>Transfer directory</b>. The transfer directory supports `transfer-mode`, a way of copying result files to a secondary location, as well as the archive, as soon as they are written. Transfer mode is just one of several ways of distributing results, above and beyond publishing them in the archive. The default transfer directory created with new projects can also just be a useful place to copy files to. For more about transfer mode, see [csvpath.org](https://www.csvpath.org).


## Server
![](../assets/app_images/server_form_annotated.png)
<div>The server form</div>
{: .caption }
1. <b>Host with port</b>. The location of the FlightPath Server you want to use with this project. Each FlightPath Data project can use a different FlightPath Server.
1. <b>API key</b>. FlightPath Server requires each API request have an access_token header containing an API key. Keys are associated with projects, not users. Any user can create a new project associate with a key they hold. As is obvious, FlightPath Server relies on parameter security for its protection. It only uses keys for information control between project teams.
1. <b>Create new API key</b>. The first API key created is marked as an admin key a very small set of additional powers. Any user with a valid key can create a another API key that will control a different set of projects.
1. <b>Shutdown FlightPath Server</b>. When a FlightPath Server is available, and the API Key is an admin key, this button allows you to shut the server down. Shutdown is immediate.
1. <b>Server projects list</b>. This list shows all the projects available to the given key. Right-clicking on a project name brings up a context menu with:
<ul style='margin-left:40px'>
    <li/> <b>Refresh</b>: reacquires the projects list. If another user has changed the projects of the given key the list will update.
    <li/> <b>Download config</b>: downloads the config.ini of the project. You will be prompted to open the locally saved file. You will not see the file in your project, typically, because `.ini` is not usually in your extensions list, and is not one of the default visible extensions, .md, .json, .txt, and .html. You can open the downloaded server project config file by opening the project directory in Finder or File Explorer.
    <li/> <b>Download env</b>: similar to the config download, but for the variable substitution file.
    <li/> <b>Download log</b>: after you do at least one run you can download the log file anytime.
    <li/> <b>Upload config</b>: uploading config means sending the current FlightPath Data project's config to be the FlightPath Server config. There are a few fields, primarily local file system paths, that are not settable by uploading the local config to the server. These are reserved in order to fully separate server projects from one another.
    <li/> <b>Upload env</b>: opens a form providing a click-to-add means of creating an env.json from the OS env vars available locally to this FlightPath Data project. The env.json file is uploaded to the server to stand in for OS env vars for the sole use of that server project.
    <li/> <b>Create new project</b>: Creates a new project associated with the current API key. Any holder of a valid API key can create a new project.
    <li/> <b>Delete project</b>: prompts to confirm before irrecoverably deleting the server project.

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


