### Prerequisites

You must have:
* A Windows PC
* An NVIDIA GPU (AMD is not supported)
* Minimum available combined RAM per model:

  * **{% data variables.copilot.mai_code_1_1_flash %}:**&nbsp; 96 GB
  * **{% data variables.copilot.flint_nvfp4_gguf %}:**&nbsp; 48 GB

* Minimum available storage per model:

  * **{% data variables.copilot.mai_code_1_1_flash %}:**&nbsp; 60 GB
  * **{% data variables.copilot.flint_nvfp4_gguf %}:**&nbsp; 23 GB

* llama.cpp v0.7.0 or later installed and `LLAMACPP_SERVER_PATH` set to its path. Required build version:

  * **{% data variables.copilot.mai_code_1_1_flash %}:**&nbsp; [b11669](https://github.com/ggml-org/llama.cpp/releases/tag/b11669?utm_source=local-model-prereq-mai-code&utm_medium=docs&utm_campaign=universe-2026) or later
  * **{% data variables.copilot.flint_nvfp4_gguf %}:**&nbsp; [b11803](https://github.com/ggml-org/llama.cpp/releases?q=flint&expanded=true&utm_source=local-model-prerequisite-flint&utm_medium=docs&utm_campaign=universe-2026#release-b11803) or later

  See [Installing llama.cpp for Windows](#installing-llamacpp-for-windows).
