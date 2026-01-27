---
title: ✨ FlightPath Editors
layout: home
nav_order: 1
parent: ✨ FlightPath Data Features
description: "FlightPath Data features enable you to manage external tabular datasets, automate using CsvPath Framework, and run your DataOps infrastructure. "
permalink: /data/editors.html
---

# ✨ Editors and Editing Features

## JSONL and CSV Power

FlightPath Data has a powerful grid view editor for JSONL and CSV. You can toggle to view the raw text anytime.

<figure><img src="../assets/app_images/grid-editor.png" alt="" width="650"><figcaption></figcaption></figure>

## JSON Simplicity

A simple, productive JSON editor makes it easy to setup config files. In addition, the JSON view can be used to edit JSONL in a text view.

<figure><img src="../assets/app_images/json-view.png" alt="" width="525"><figcaption></figcaption></figure>

## Edit as JSON

Right-click on a JSONL file to edit it in the text view, rather than the grid editor.

<figure><img src="../assets/app_images/edit-as-json.png" alt="" width="360"><figcaption></figcaption></figure>

## Pretty-printing JSON and JSONL

Pretty printing means something different in JSON and JSONL. FlightPath Data knows how to format both.

<figure><img src="../assets/app_images/pretty-printing.png" alt="" width="525"><figcaption></figcaption></figure>



## Write CsvPath Language Validations

Before you can load preboarding steps into CsvPath Framework you have to write them. FlightPath makes CsvPath Language more accessible by giving you a syntax highlighted editor with the ability to look up functions and features, create multi-csvpath files, and do one-off runs to iterate on your scripts.

<figure><img src="../assets/app_images/csvpath_editor.png" alt="" width="663"><figcaption></figcaption></figure>

## Edit Markdown Files

DataOps project organization is not enough. For smooth operations, you also need to have documentation. FlightPath lets you add Markdown files for documentation, notes, and instructions.&#x20;

<figure><img src="../assets/app_images/markdown.png" alt="" width="600"><figcaption></figcaption></figure>

You can edit Markdown files in rendered form, or use the context menu or `ctrl-t` to toggle into raw text for easy formatting.





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



