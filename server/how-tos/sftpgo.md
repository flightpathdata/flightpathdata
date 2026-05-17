---
title:   MFT Arrivals
layout: home
nav_order: 1
parent:   How-tos
description: "Using FlightPath Server with SFTPGo"
permalink: /server/sftpgo.html
---


#   MFT Arrivals
{: .no_toc }

## Receiving files from an MFT server
{: .no_toc }
Managed file transfer servers (MFT) are the transit point for file feeds from external data partners. SFTPGo is an open source MFT. It is broadly representative of a number of other good MFT servers. Like most of its peers, SFTPGo can be configured to perform actions when files arrive. FlightPath Server endpoints can receive alert events from SFTPGo and use them to stage data and perform runs.

In particular, you can have SFTPGo call these methods:
* `/csvpath/register`
* `/csvpath/register_and_run`
The first endpoint receives the notification and pulls the file into the named-files staging area.

The second endpoint goes further in that after registering the data it starts a run immediately, resulting in new assets going to the archive.

## Steps
{: .no_toc }

- TOC
{:toc}

### Install SFTPGo
Follow the instructions on [docs.sftpgo.com](https://docs.sftpgo.com/2.6/installation/)

### Open the SFTPGo [admin webapp](http://localhost:8080/web/admin)

### Create a SFTPGo user
Ours is named "Fred".
![](../assets/app_images/sftpgo-add-user'.png)
<div>Be sure to open the admin portal, not the end user's webapp</div>
{: .caption }

### Create an SFTPGo action
Click Event Manager > Actions > Add Action and create an action that calls the `/csvpath/register_and_run` endpoint when a new file arrives for Fred, passing the API key in the `access_token` header and JSON in the body:
![](../assets/app_images/sftpgo-action-top.png)
<div>Create the action before the event handling rule because the action is referenced in the rule</div>
{: .caption }
```json
                {
                  "project_name": "my project",
                  "file_location": "{{.VirtualTargetDirPath}}",
                  "file_name": "invoices",
                  "csvpaths_group_name": "invoices",
                  "method": "collect_paths"
                }
```
![](../assets/app_images/sftpgo-action-body.png)
<div>Notice the placeholders. SFTPGo's docs explain how they work.</div>
{: .caption }

See the replacement vars descriptions here: https://docs.sftpgo.com/2.6/custom-actions/

`invoices` is our new named-file. When the Fred account receives files they are registered as versions of `invoices` and are available by date, order, path, or identity. Then the file will be validated using a set of one or more csvpath scripts also called `invoices`. The run will use the `collect_paths` method. Collect paths gathers valid lines into a result file.

### Create an SFTPGo rule
Click Event Manager > Rules > Add Rule to fire when a file arrives for Fred. Make sure to choose the action you just created as the result of the rule firing.
![](../assets/app_images/sftpgo_create_rule.png)
<div>Once you have an action you can create a rule to fire it</div>
{: .caption }

### Use FlightPath Data to create a FlightPath Server project
Open the config panel and switch to the server form. Right-click in the projects list and select new project. Ours is called "my project"
![](../assets/app_images/sftpgo-new-project.png)
<div>If you are starting from scratch you need to create a first admin key; however, you don't need an admin key to create a project, any key will do.</div>
{: .caption }

### Configure the SFTP server address and credentials
In the Integrations tab > SFTP tab add server name or IP address, port, username, and password.
![](../assets/app_images/sftpgo-server-config.png)
<div>sftp://... URLs are matched to credentials in the [sftp] block of your config.ini file.</div>
{: .caption }

### Save your config
Click the `Save and reload` button at the top of the Config panel. The configuration of your FlightPath Data project will become the configuration of your FlightPath Server project as well in the next step
![](../assets/app_images/save-and-reload-config.png)
<div>You are configuring the FlightPath Data project in order to upload it to the FlightPath Server project, so if there are already SFTP files in your SFTP server you will see them</div>
{: .caption }

### Upload the project config to FlightPath Server
In the server tab of the Config panel, right-click on your project name and select `Upload config`. FlightPath will warn you that you will be overwriting the existing project config.
![](../assets/app_images/sftpgo-upload-config.png)
<div>Your local config is pushed to FlightPath Server, with a few modifications to fit the server environment</div>
{: .caption }

### Create a csvpaths script
In the left-hand file manager sidebar right-click and create a csvpaths file
![](../assets/app_images/sftpgo-new-csvpaths-file-1.png)
<div>If you like you can use an existing csvpath file</div>
{: .caption }

Use a `.csvpath` or `.csvpaths` extension, to match the extensions configured for CsvPath Validation Language files.
![](../assets/app_images/sftpgo-new-csvpaths-file-2.png)
<div>Your file extension must match one of the extensions assigned to csvpath files in your config, but you typically don't change those.</div>
{: .caption }

You need at least one csvpath in the file. Your csvpath can be as simple as `$[*][yes()]`.
![](../assets/app_images/sftpgo-example-csvpath.png)
<div>$[*][yes()] is a noop statement that matches all lines. You can use an existing example instead, if you like.</div>
{: .caption }

Pretty soon you will want to go beyond that. As you begin learning CsvPath validation remember the right-hand Help tab.
![](../assets/app_images/sftpgo-help-tab.png)
<div>FlightPath has comprehensive CsvPath Validation Language and CsvPath Framework configuration documentation in the right-hand column</div>
{: .caption }

### Load the csvpaths script
Right-click your csvpath file in the file navigator and select `Load csvpaths`.
![](../assets/app_images/sftpgo-load-csvpath.png)
<div>You can load your csvpaths to a named-paths group stored locally or on a remote backend. For most purposes the local file system is fine.</div>
{: .caption }


In the load csvpaths dialog use the same named-paths group name we used earlier with the `csvpaths_group_name` in our register_and_run request.
![](../assets/app_images/sftpgo-load-named-paths-dialog.png)
<div>Loading a csvpath file into an existing named-paths group either appends the csvpaths in the file to the csvpaths already in the group or it creates a new version of the group from just that one file</div>
{: .caption }

### Wait for a file to arrive
You are done. When a file arrives in the Fred SFTPGo account, SFTPGo will notify FlightPath Server using the `/csvpath/register_and_run` endpoint.

FlightPath Server will in turn load the file into the project's raw files staging area as the most recent version of a named-file called `invoices`. Then FlightPath Server will run the new invoice through our named-paths group of validation statements, also called `invoices`. The resulting data and metadata will be available in the archive.

The OpenAPI docs for these endpoints is [here](/swagger/dist/#/).

The response will include a reference to the specific version of the named file that you just registered. It will look like this:
```json
    {"reference":"$projects.files.a711df7d2846e8ba46125d3f7adb7aea0ede50eb20a6550fca2358628a05425b"}
```
However, since the register and run is completely automated we would pick from several next steps.
* Search to find the file when needed
* Configure a notification to tell us a file arrived
* Watch for manifest updates or metadata database updates
* Watch the project's log file, and/or
* Set alerts in an OpenTelemetry or OpenLineage system
In short, there are many options for following up the automated register and run we just configured, but those options are covered elsewhere.


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


