>[!NOTE]
>{% data reusables.copilot.byok-preview-note %}

You can add custom models to your enterprise or organization by providing your own API keys. This enables teams to use your preferred large language model (LLM) providers with {% data variables.copilot.copilot_byok_supported_features %}.

API keys from the following providers are supported:

* Anthropic
* AWS Bedrock
* Google AI Studio
* Microsoft Foundry
* OpenAI
* OpenAI-compatible providers
* xAI

Fine-tuned models are also supported, but functionality and quality of results can vary depending on the fine-tuning setup. You should test your model and review its outputs carefully before using it in production.

>[!NOTE] A separate feature allows users to configure their own LLM keys locally in various clients. See [AUTOTITLE](/copilot/concepts/models/bring-your-own-key).
