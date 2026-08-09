---
title:  CsvPath Validation Language
layout: home
nav_order: 8
parent:  Features
description: "FlightPath Data helps you use CsvPath Validation Language to validate CSV, Excel, JSONL, and data frames. "
permalink: /data/features/csvpath.html
---

#  CsvPath Validation Language


FlightPath Data is built on CsvPath Framework. The Framework stands on two stilts: data preboarding and data validation. FlightPath Data puts these two capabilities together to make an Edge Data Governance gateway. And FlightPath Data makes the validation language more accessible than ever.

CsvPath Validation Language supports both correctness checking and transformation. Transformation, also called data upgrading, is a lightweight way of conforming data to the expectations of downstream systems. In depth documentation is available on the [CsvPath GitHub repo](https://github.com/csvpath/csvpath) and [csvpath.org](https://www.csvpath.org).

There has never been such a high-powered validation capability for tabular data files. CsvPath Validation Language is a grammatically simple, declarative, and functions-based DSL for validation and upgrading tabular data, such as CSV, Excel, and JSONL. There are over 230 functions for testing data and canonicalizing or reformatting it. The large number of functions is supported by the Help tab at the right-hand side of the app that provides a breakdown by category, as well as by the AI assistance, also on the right.

This page gives a high-level summary of some of the categories and functions available. It is just a subset to whet your appetite to dig into the full documentation within FlightPath Data or the GitHub site. There you can learn more about each function, as well as using variable, qualifiers, modes, and all the other rich capabilities.

All functions work with CSV (including TSV and other delimited variants), Excel, JSONL, and data frames. The counts next to the category headers are approximate. Not all functions are shown.

## Existance Tests - 5
#### all()
#### any()
#### exists()
#### empty()
#### none()

## Counting - 12
#### count()
#### count_bytes()
#### count_headers()
#### count_scans()
#### count_lines()
#### count_dups()
#### counter()
#### every()
#### increment()
#### tally()
#### track()
#### total_lines()

## Dates - 8
#### format_date()
#### now()
#### year(), month(), day()
#### roll()
#### date()
#### datetime()

## Transforming Structure and Values - 6
#### append()
#### collect()
#### insert()
#### remove()
#### rename()
#### replace()

## Working With Headers - 7
#### header_name(), header_index()
#### header_names_mismatch(), header_names_match()
#### blank()
#### wildcard()
#### reset_headers()

## Strings - 16
#### regex()
#### exact()
#### concat()
#### contains()
#### format()
#### interpolate
#### lower(), upper(), caps()
#### starts_with(), ends_with()
#### alter()
#### substring()
#### strip()
#### string()
#### metaphone()

## Printing - 10
#### print()
#### jinja()
#### error()
#### headers_table(), row_table(), var_table(), run_table()
#### log()
#### print_line()
#### print_queue()

## Structural Schema Types - 14
#### boolean()
#### blank(), unspecified(), wildcard()
#### integer()
#### decimal()
#### date(), datetime()
#### none()
#### email(), url()
#### uuid()
#### string()
#### datatype()

## Types Of Schema Definitions - 2
#### line()
#### parquet()

## Math and Statistics - 30
#### add(), tally(), subtotal(), sum()
#### subtract(), minus()
#### multiply()
#### divide()
#### equals(), matches()
#### percent_matching()
#### percent_dups()
#### stdev(), pstdev()
#### odd(), even()
#### round()
#### lt(), gt(), between()
#### int(), float()
#### mod()
#### shuffle(), random()
#### median(), average()
#### max(), min()
#### percent()

## Duplicate Checking - 11
#### has_matches()
#### tally()
#### count_dups()
#### percent_dups()
#### dup_lines()
#### percent_unique(), percent_matching()
#### push_distinct()
#### fingerprint(), line_fingerprint(), file_fingerprint()


## And More Than 120 Additional Functions Not Shown Here

Most things are possible today with CsvPath Validation Language's existing functions. But if you don't find exactly what you need for your particular requirements, creating new custom functions is a snap. Custom functions load on the fly, can overload built-in functions, and are specific to individual projects.


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



