---
title: 🎨 Data Sampling
parent: 🎨 Data
layout: home
nav_order: 10
description: "Creating data samples from existing data"
permalink: /data/howto/data/data-sampling.html
---

# How To Create Sample Data Sets

{: .new }
**Learn about CsvPath Framework:** Find lots more information and how-tos about CsvPath Framework automating data preboarding at [https://www.csvpath.org](https://www.csvpath.org/).

As a CsvPath Framework development and operations tool, FlightPath thrives on data samples. FlightPath can help you create sample date in several ways:

* Ask AI to create representative data based on a validation script and/or data sample
* Use `Copy to new file` to select lines, headers, irregular cells or blocks of data into a new file
* From the Data Toolbar, create a sample from a larger file using randomly selected lines
* Create a csvpath statement that collects a sample from a larger file; right-click the matches to save as a sample

## How to do it

### AI generated data
* Open a data file
* In the right-hand column switch to the `AI` tab
* Fill in your data request details, give it a name, and click `Submit`
<figure><img src="/assets/app_images/ai-generate-data-form.png" alt="" width="320"><figcaption></figcaption></figure>

### Copy to new file
* Open a data file
* Select cells to be your sample
* Right-click and pick `Copy to new file`
<figure><img src="/assets/app_images/copy-to-new-file.png" alt="" width="300"><figcaption></figcaption></figure>

### Using the Data Toolbar
* Open a data file
* In the Data Toolbar configure the parameters of your sample
    * Number of lines
    * Line selection
* Click `Save sample as`
<figure><img src="/assets/app_images/sample-random-from-zero.png" alt="" width="500"><figcaption></figcaption></figure>


{: .note }
A random sample from zero means you select lines randomly as you iterate through the lines from zero until you fill the sample or run out of lines. Random from all iterates picking lines from all lines until the sample is full.  When you select a random sample from zero, it is possible that a file with more lines than you are sampling may not fill the sample completely. For example, if you have a file with 300 lines and you request a random sample starting from zero of 250 lines you will run out of lines before you fill the sample.




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


