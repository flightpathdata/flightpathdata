---
parent: 🎨 Examples
title: Script for last run
description: How to find the script(s) used in the last run.
layout: home
nav_order: 8
---

# What script(s) were used in the last run?

## How to do it

* Use the `Find data` button to open the `Find files by reference` dialog. Select `results` and the name of your results.&#x20;
* In the text box replace `:all` with `:last`  or just right click on the last item

<figure><img src="/assets/app_images/named_paths_uuid.png" alt=""><figcaption></figcaption></figure>

* With the run time and named\_paths\_uuid open the named-paths. (The name will always be the same as its results).&#x20;
* Open the named-paths manifest.json and find the entry for the time period with the same UUID.

<figure><img src="/assets/app_images/captured_time_and_uuid.png" alt="" width="563"><figcaption></figcaption></figure>

* Look at the named\_paths key to see the exact CsvPath Language statements used in the run.

<figure><img src="/assets/app_images/captured_named_paths.png" alt="" width="563"><figcaption></figcaption></figure>

## What you need

You need read-only access to the archive and named-paths areas in whichever backend(s) they are configure for.&#x20;

You may need to add a username and password to your configuration for SFTP or environmental variables for the cloud provider backends.

Click the `Open config` button at the bottom left to open the config panel.

<figure><img src="/assets/app_images/open_config_button.png" alt="" width="563"><figcaption></figcaption></figure>

For example, for SFTP click the `listeners` vertical tab and then `sftp` in the horizontal tabs in the integrations form. Enter your username and password. In this case, because you are using the SFTP backend for the archive, rather than sending results files to an SFTP server, you don't need to enter a server and port.

<figure><img src="/assets/app_images/listeners_sftp_form.png" alt=""><figcaption></figcaption></figure>


