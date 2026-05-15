---
title:   Project Dev and Test
parent:  How-tos
layout: home
nav_order: 20
description: "How to progress projects through development stages"
permalink: /data/howto/server/project-progression.html
---



#  How To Setup Create, Test, and Deploy

{: .note }
**More CsvPath Framework suggestions:** Find lots more ideas and techniques for developing and automating data preboarding at [https://www.csvpath.org](https://www.csvpath.org/).

The development lifecycle for csvpath validation and upgrading usually has multiple steps and involves multiple backends.

Most often you want to progress from:
* Ad hoc local runs, to
* Local prod-like runs, to
* Server prod-like runs, to
* Running in prod

This cycle is quick, easy to setup, and gives high confidence that all will be well in prod. At a high level it may look like:
<figure><img src="/assets/app_images/projects-progression.png" alt="" width="700"><figcaption></figcaption></figure>

Oftentimes, there are also changes in what backends are used. Ad hoc and the first round of prod-like tests are typically on a local backend. Then the prod-like tests on the server may be backed by a test storage area in the prod environment. This may split storage and compute and add latency. The production environment would normally co-locate storage and compute as closely as possible to minimize latency.

In a company using AWS, this backend progression might look like:
<figure><img src="/assets/app_images/storage-progression.png" alt="" width="700"><figcaption></figcaption></figure>

There may also be a progression in how validations and upgrading requirements are laid out in csvpaths. The first stage of development is exploratory and may be scattered or over condensed. Smaller csvpaths working together is always recommended, but at first the grain may not be clear.

In addition, FlightPath can generate validations for you from requirements. The requirements may be as complex as you like. FlightPath will often split the implementation over several csvpaths. You will always need to review and tailor the generated output. In some cases, you may want to split it up even more or change the run order.

It is likely that your ad hoc csvpaths will all run independently. That is the easiest way to run at first. As you progress towards grouping csvpaths you might want to append them to a group one by one, as they are worked out.

When you run in a prod-like configuration, you often have many csvpaths, always in a named-paths group. At this point, if you continue to make changes you may want to use `run-mode:` directives to disable certain paths as you work on others. Alternatively you can disable logic simply using variables and when/do operators and/or `skips()`.

As you tweak performance, you may also take steps like:
* Consolidating and minimizing print() statements
* Changing to breadth-first execution order
* Adding precalculating steps to tighten loops and lookups
* Using `stop()` and exception handling to fail-fast, or alternatively using `skip()` to never fail
* Separating data partners or document types into their own projects and/or environments

At a high level, the progression of your csvpath scripts implementing validation requirements may look like this:

<figure><img src="/assets/app_images/csvpaths-dev-progression.png" alt="" width="700"><figcaption></figcaption></figure>


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


