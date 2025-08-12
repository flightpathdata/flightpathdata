---
title: 💡 Data Preboarding Success
layout: home
nav_order: 2
description: "Data preboarding is a DataOps process for bringing external tabular datasets into the enterprise and publishing them internally in a reliable way. "
permalink: /preboarding.html
---

# 💡 Data Preboarding For DataOps Success

### FlightPath was built to make data preboarding easy. But what is preboarding?
{: .fs-5 .move-up }

{: .highlight }
For more background, ideas, and pep-talks on data preboarding head over to <a href='https://www.csvpath.org'>https://www.csvpath.org <i class="fa fa-external-link" aria-hidden="true" style='vertical-align: super; font-size:13px'></i></a>


## What is data preboarding?

Millions of companies around the world exchange regular tabular datasets every day. Sadly, when new data arrives it is too often dumped into the data lake, applications, or analytics systems without a methodical process. The result is that downstream data consumers cannot trust or explain the data they depend on.

Imagine if a retailer pulled boxes off a distributor's truck and dragged them directly to the front shop for people to buy. It would be mess — and it would never happen! Instead the retailer receives a shipment, unpacks it, inspects it for quantity, quality, and correctness, moves the new stock to the stock-keeping shelves and enters it in inventory, prices the goods, and only then moves some of them to the storefront for people to buy.

Careful handling during the receipt of new data should be like this retail analogy. That's preboarding. The methodical process of durable data identification, registration in an immutable staging area, idempotent validation and data upgrading, and publishing data + metadata to an immutable archive is key to bringing valuable information into the enterprise with low risk, high confidence, and greater efficiency.


## Preboarding rules FTW

Everyone who receives data does preboarding in some form. Too often the process is inconsistent, unexplainable, error prone, and too costly. In data management, shortcuts generally end up being expensive. There are a few simple rules for doing preboarding well. [FlightPath](index.html) and the <a href='https://www.csvpath.org'>CsvPath Framework <i class="fa fa-external-link" aria-hidden="true" style='vertical-align: super; font-size:13px'></i></a>  can help you follow these guidelines and build a better process.

## Do it the same way every time

If your company has more than one data partner, or expects to, the goal should be to create a drag-and-drop simple process that you can replicate for each new data set or data partner, without reinventing anything. Consistency in the early stages will pay off with efficiency as your data operation grows. Even small companies often have dozens of regular data exchanges. One-off custom coding doesn't cut it even at that scale. At the scale of hundreds or thousands of regular data exchanges ad hoc solutions are unsustainable.

## Capture metadata at every step

Data used in applications, data products, or analytics is vetted by subject matter experts who are often far downstream from where the data was acquired. When data doesn't look right to a data consumer, tracing its lineage can be challenging, unless metadata shows a clear chain of custody and evolution from system to system.

## Identify data durably and traceably

Transactional tabular data is infamous for being restated, resubmitted, rerun, or manually changed. Each time a data set is modified without indication or replaced in-place the trustability and explainability of the information derived from the data set goes down. Instead, data should be registered into an immutable staging area. Data deserves a birth certificate and social security number as it starts its lifecycle. That way the source and current state is always clear.

## Be immutable from start to finish

Immutability and idempotence are important keys to getting DataOps right. An immutable system that handles evolving data takes a copy-on-write approach to change. Each time a data file is written it is a new file with clear metadata linking it to its ancestors. Files are never changed, instead they are copied. The cost of disk space is far lower than the cost of confusion. A system that works with immutable data can have idempotent processing. Each run of an idempotent process delivers exactly the same predictable output when given the same input. Again, more consistency, less confusion.

## Be as declarative and function-specific as possible

The world of data processing is awash in tools that solve for a huge range of use cases. Programming languages themselves are usually general purpose. The problem with general purpose tools and languages is that they have few guardrails and no opinionated tooling for data preboarding. There are two obvious problems. First, since preboarding happens no matter what you call it or how you do it, if your tools don't specifically support the preboarding activity you have to build it yourself. Second, and more importantly, with no guardrails and opinionated guidance, ad hoc solutions with high variability and risk happen almost as night follows day. If you have one data partner, that works fine. When you get to 20, 50 or 100 data exchanges, the risk and expense of ad hoc solutions tends to go hyperbolic, while agility goes through the floor. A declarative preboarding tool like CsvPath Framework comes closest to letting you just describe what you want, rather than you having to procedurally code how it will happen.

## Take the time to do it right

These few high-level guidelines are key to success. The other most important thing is taking the time to build the right process for the business you are supporting. Throwing bodies or handy tools built for other purposes at a preboarding problem may get you through the day, but in the long run, in data, expediencies tend to cause problems.

For many companies, receiving a partner's data starts as a small effort to bring a limited amount of regular transactional data into the enterprise. But in a growing company, the small challenge of high-quality data intake sooner or later becomes becomes a bigger, knottier, and sometimes existential problem. A purpose-built data preboarding infrastructure like CsvPath Framework, coupled with [FlightPath](index.html), can make the difference between lurching from data crisis to data crisis and sleeping well at night.


