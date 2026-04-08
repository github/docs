---
title: Using your own LLM models in GitHub Copilot CLI
shortTitle: Use your own model provider
intro: 'Use a model from an external provider of your choice in {% data variables.product.prodname_copilot_short %} by supplying your own API key.'
allowTitleToDifferFromFilename: true
versions:
  feature: copilot
contentType: how-tos
category:
  - Configure Copilot
  - Configure Copilot CLI
---

You can configure {% data variables.copilot.copilot_cli_short %} to use your own LLM provider, also called BYOK (Bring Your Own Key), instead of {% data variables.product.github %}-hosted models. This lets you connect to OpenAI-compatible endpoints, Azure OpenAI, or Anthropic, including locally running models such as Ollama.

## Prerequisites

* {% data variables.copilot.copilot_cli_short %} is installed. See [AUTOTITLE](/copilot/how-tos/copilot-cli/set-up-copilot-cli/install-copilot-cli).
* You have an API key from a supported LLM provider, or you have a local model running (such as Ollama).

## Supported providers

{% data variables.copilot.copilot_cli_short %} supports three provider types:

| Provider type | Compatible services |
|---|---|
| `openai` | OpenAI, Ollama, vLLM, Foundry Local, and any other OpenAI Chat Completions API-compatible endpoint. This is the default provider type. |
| `azure` | Azure OpenAI Service. |
| `anthropic` | Anthropic (Claude models). |

For additional examples, run `copilot help providers` in your terminal.

## Model requirements

Models must support **tool calling** (also called function calling) and **streaming**. If a model does not support either capability, {% data variables.copilot.copilot_cli_short %} returns an error. For best results, use a model with a context window of at least 128k tokens.

## Configuring your provider

You configure your model provider by setting environment variables before starting {% data variables.copilot.copilot_cli_short %}.

| Environment variable | Required | Description |
|---|---|---|
| `COPILOT_PROVIDER_BASE_URL` | Yes | The base URL of your model provider's API endpoint. |
| `COPILOT_PROVIDER_TYPE` | No | The provider type: `openai` (default), `azure`, or `anthropic`. |
| `COPILOT_PROVIDER_API_KEY` | No | Your API key for the provider. Not required for providers that do not use authentication, such as a local Ollama instance. |
| `COPILOT_MODEL` | Yes | The model identifier to use. You can also set this with the `--model` command-line flag. |

## Connecting to an OpenAI-compatible endpoint

Use the following steps if you are connecting to OpenAI, Ollama, vLLM, Foundry Local, or any other endpoint that is compatible with the OpenAI Chat Completions API.

1. Set environment variables for your provider. For example, for a local Ollama instance:

   ```shell
   export COPILOT_PROVIDER_BASE_URL=http://localhost:11434
   export COPILOT_MODEL=YOUR-MODEL-NAME
   ```

   Replace `YOUR-MODEL-NAME` with the name of the model you have pulled in Ollama (for example, `llama3.2`).

1. For a remote OpenAI endpoint, also set your API key.

   ```shell
   export COPILOT_PROVIDER_BASE_URL=https://api.openai.com
   export COPILOT_PROVIDER_API_KEY=YOUR-OPENAI-API-KEY
   export COPILOT_MODEL=YOUR-MODEL-NAME
   ```

   Replace `YOUR-OPENAI-API-KEY` with your OpenAI API key and `YOUR-MODEL-NAME` with the model you want to use (for example, `gpt-4o`).

{% data reusables.copilot.copilot-cli.start-cli %}

## Connecting to Azure OpenAI

1. Set the environment variables for Azure OpenAI.

   ```shell
   export COPILOT_PROVIDER_BASE_URL=https://YOUR-RESOURCE-NAME.openai.azure.com/openai/deployments/YOUR-DEPLOYMENT-NAME
   export COPILOT_PROVIDER_TYPE=azure
   export COPILOT_PROVIDER_API_KEY=YOUR-AZURE-API-KEY
   export COPILOT_MODEL=YOUR-DEPLOYMENT-NAME
   ```
   
   Replace the following placeholders:

     * `YOUR-RESOURCE-NAME`: your Azure OpenAI resource name
     * `YOUR-DEPLOYMENT-NAME`: the name of your model deployment
     * `YOUR-AZURE-API-KEY`: your Azure OpenAI API key

{% data reusables.copilot.copilot-cli.start-cli %}

## Connecting to Anthropic

1. Set the environment variables for Anthropic:

   ```shell
   export COPILOT_PROVIDER_TYPE=anthropic
   export COPILOT_PROVIDER_API_KEY=YOUR-ANTHROPIC-API-KEY
   export COPILOT_MODEL=YOUR-MODEL-NAME
   ```

   Replace `YOUR-ANTHROPIC-API-KEY` with your Anthropic API key and YOUR-MODEL-NAME with the Claude model you want to use (for example, `claude-opus-4-5`).

{% data reusables.copilot.copilot-cli.start-cli %}

## Running in offline mode

You can run {% data variables.copilot.copilot_cli_short %} in offline mode to prevent it from contacting {% data variables.product.github %}'s servers. This is designed for isolated environments where the CLI should communicate only with your local or on-premises model provider.

> [!IMPORTANT] 
> Offline mode only guarantees full network isolation if your provider is also local or within the same isolated environment. If `COPILOT_PROVIDER_BASE_URL` points to a remote endpoint, your prompts and code context are still sent over the network to that provider.

1. Configure your provider environment variables as described in Configuring your provider.

1. Set the offline mode environment variable:

   ```shell
   export COPILOT_OFFLINE=true
   ```

{% data reusables.copilot.copilot-cli.start-cli %}
