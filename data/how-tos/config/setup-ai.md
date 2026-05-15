---
title:   Setup an AI API
parent:   Config
layout: home
nav_order: 4
description: "How to set up an AI API"
permalink: /data/how-tos/config/setup-ai.html
---

#   How To Setup an AI API



## How to do it

* Open FlightPath.
* Click the `Open config` button at the bottom left
* In the Config Panel, using the vertical tabs, switch to the `llm` form
* Enter your chosen model in the `AI model` field and your key in the `API key` field
<figure><img src="/assets/app_images/setting-ai-credentials.png" alt="" width="700"><figcaption></figcaption></figure>

* If you want to use the same model and key in all projects, click the `Use for all projects` checkbox
* Click `Save and reload` at the top of the panel


{: .note }
Not all AI APIs require an API base address or a key. If you are using a local model server you won't need a key. If you are using one of the well-known and recommended models, Claude, Gemini, and GPT, you won't need an API base.

{: .important }
FlightPath is tested on a small number of well-known models, primarily Claude, Gemini, and OpenAI's GPT. Tests on several other models, including local models on Ollama, are done; however, the results have generally been inferior to the three primary models.

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


