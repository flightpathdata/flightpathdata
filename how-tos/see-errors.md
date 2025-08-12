---
parent: 🎨 Examples
title: Errors in the last run
description: "How to find the errors found in the last run."
layout: home
nav_order: 9
---

# What where the errors in the most recent run?

## How to do it

* Use the `Find data` button to open the `Find files by reference` dialog
* Select `results` and your named results.
* Add `:last` to the textbox. Add a partial path or date, if needed.
* Right-click the last item shown in the results list. Select `Show run`.
* Click to open the run manifest.json

<figure><img src="/assets/app_images/error_count.png" alt="" width="563"><figcaption></figcaption></figure>

* Look at the `error_count` key to see the total errors in the run.
* Click on the directory containing the results of an of the csvpaths in the run. Inside you will see the `errors.json` file containing all errors from the run. Within `errors.json` each item in the list of errors, if any, has a `message` key with the built-in or user-defined error message.

<figure><img src="/assets/app_images/errors_json.png" alt=""><figcaption></figcaption></figure>

* Depending on how the csvpath was written, there may be useful error-related info in the printouts, if any. If a `printouts.txt` file was generated, click on it to check.

<figure><img src="/assets/app_images/printouts_with_errors.png" alt=""><figcaption></figcaption></figure>

## What you need

You need read-only access to the archive in whichever backend it is configured for.&#x20;

You may need to add a username and password to your configuration for SFTP or environmental variables for the cloud provider backends.

Click the `Open config` button at the bottom left to open the config panel where you can enter your environment variables and/or integration configuration credentials.







