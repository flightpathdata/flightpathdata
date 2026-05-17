---
title:   A Local Test Run
parent:   Runs
layout: home
nav_order: 4
description: "Doing a local dev run."
permalink: /data/howto/runs/dev-run.html
---

#   How To Do a Local Dev Run

We refer to a run that doesn't involve a named-paths group or a named-file as a "local run". Local runs are simply pointing a single csvpath at a data file in the project directory and clicking ctrl-r or right-clicking and selecting `Run`. All the run outputs are generated, but the run specifically tests just the one csvpath.

Local runs happen all in the left-hand project files and the center editing area. The ops windows on the right are not involved.

A local run simpler than deploying a group and registering a file, but only a bit. Because it's a faster way to iterate and specific to a single csvpath statement, you will do much of your development and testing using local runs.

{: .new }
**Learn about CsvPath Framework:** Find lots more information and how-tos about CsvPath Framework development and testing at [https://www.csvpath.org](https://www.csvpath.org/).



## How to do it

* Open FlightPath Data - if you just installed you will be in the `Default` project
* Click the `Copy data in` button

 ![](/assets/app_images/copy_data_in.png)
<div>The Copy data in button is in the center of the home view</div>
{: .caption }

* Select your CSV or Excel file and click Ok - your file should be copied into your project and be visible in the project files window
* Right-click in the file explorer window on the left and select `New file`. Call your file `test.csvpath`.

![](/assets/app_images/new_file_dialog.png)
<div>Create a new csvpath file called test.csvpath</div>
{: .caption }

* Click on the new file to open it.
* At the top, between the `~` characters (a comment) add `test-data:`
* Right-click on your data file and select `Copy relative path`.
* Paste (_ctrl-v_ or _cmd-v_ on macOS) the relative path into your csvpath file next to `test-data:` so that you have something like `test-data: test.csv`.

![](/assets/app_images/copy_relative_path.png)
<div>Use the relative path of your test file to tell FlightPath what file to use for test runs. Otherwise you would have to select the file for each run as you develop your csvpath statement.</div>
{: .caption }

* Make your csvpath look something like `$[*][last() -> print("hello world")]`. This csvpath prints `hello world` when it sees the last line.
* With your cursor anywhere in the csvpath or its comment, click _ctrl-r_ (_cmd-r_ on macOS) to run.
* You should see the Help and feedback window open below your csvpath with several tabs of results of the run.

![](/assets/app_images/hello_world.png)
<div>Your csvpath should print "hello world" when it reaches the last line in the file</div>
{: .caption }


And that's it, your first simple csvpath.

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


