---
title:   Webhooks
layout: home
nav_order: 7
description: "Introduces The Webhooks Dialog"
parent:   Dialogs
permalink: /data/ui/dialogs/webhooks.html
---

#   The Webhooks Dialog

![](/assets/app_images/webhooks_dialog_annotated.png)
<div>The Webhooks Dialog can be opened by right-clicking on a named-paths group name</div>
{: .caption }
1. <b>Four states</b>. There can be up to four webhook calls triggered by each run. These vertical tabs let you configure calls to webhooks on every run, those runs with errors, runs that resulted in the valid flag, and runs marked invalid.
2. <b>Endpoint</b>. The full URL to the webhook.
3. <b>JSON body params</b>. Webhooks are called using POST and passing a JSON body. The JSON is created as a dictionary of static parameter names pointing to static or dynamic values. Parameter values can come from csvpath metadata or csvpath variables using the form `name|meta` and `name|var`.
4. <b>Request headers</b>. This list creates the headers for the webhook request.




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


