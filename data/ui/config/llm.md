---
title:   LLM Form
layout: home
nav_order: 2
description: "About FlightPath Data Config's AI LLM Form"
parent:   Config Forms
permalink: /data/ui/config/llm.html
---

#   The LLM Form
{: .no_toc }




## FlightPath Data's AI Config
![](/assets/app_images/llm_config_form.png)
<div>The AI configuration form</div>
{: .caption }
1. <b>Model</b>. This field holds the model identifier.
1. <b>Base</b>. Some models require an API base. For example, if you run a local Ollama server you would need to provide the address. For Claude, Gemini, and GPT, the base is not required.
1. <b>Key</b>. Your key identifies you to your API provider. If you are running local models you may not need a key.
1. <b>Use for all projects</b>. Checking this box pre-populates all projects with the model, base, and key configured in the current project.
1. <b>LLM config file</b>. The config file is an `.ini` similar to the main `config.ini`, but smaller and only containing LLM setup. The field that you may want to change is the turns limit. The `turns_limit` value sets the maximum number of conversational turns between FlightPath and the LLM API. For the three preferred models, Claude, Gemini, and GPT, each call and response has a cost. In most cases the cost is only fractions of a cent to a few pennies. Moreover, it is rare for the fronter models to go over seven turns in answering a FlightPath request, due to the way activity is batched. Nevertheless, this control helps make sure you are not surprised by a large charge.
1. <b>Metadata directory</b>. The metadata directory captures your LLM requests in raw form and holds the templates that act as the LLM's CsvPath Framework knowledge base. You should not need the contents of the folder in the usual case, and modifying the templates is unlikely to meaningfully improve output, except possibly in very specific cases, and could easily degrade performance


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


