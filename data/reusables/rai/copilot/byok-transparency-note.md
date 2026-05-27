# Using Bring Your Own Key (BYOK) with {% data variables.product.prodname_copilot %}

When you use Bring Your Own Key with {% data variables.copilot.copilot_chat %}, you can connect the chat experience to large language models from supported providers beyond the default {% data variables.product.prodname_copilot_short %} model. Examples of supported providers include Anthropic, AWS Bedrock, Google AI Studio, Microsoft Foundry, OpenAI, OpenAI-compatible providers, and xAI. You add your API key for the chosen provider directly in your {% data variables.product.prodname_copilot_short %} settings.

When BYOK is active:

* **Feature scope**: Your chosen model is used within {% data variables.copilot.copilot_chat %}. In Agent mode, BYOK powers the main conversation, but certain actions such as code application or other tool calls may still use {% data variables.product.github %}-hosted models optimized for those tasks. These built-in models do not run through your BYOK provider.
* **Safety processes**: Regardless of which provider is active, responses still pass through {% data variables.product.github %}'s safety systems, including content filtering, before results are shown to you.
* **Quality considerations**: Suggestions may vary depending on the strengths and training coverage of your chosen provider.
* **Data handling**: When using BYOK, your prompts and responses are transmitted to your selected provider and may be subject to that provider's data retention and privacy policies. {% data variables.product.github %} temporarily processes this data for safety filtering but does not retain BYOK conversation content beyond session duration.
* **Your responsibilities**: You are responsible for the following:
  * Provider API key security
  * Usage costs or quotas
  * Output validation
  * Evaluating whether your chosen model meets your safety and quality requirements
  * Compliance with your selected provider's terms
  * Determining whether your chosen model complies with applicable laws
  * Ensuring that a human reviews any output before using it to make decisions that affect people
* **Export restrictions**: Certain AI models may be subject to export controls. Verify your selected provider and model are authorized for use in your jurisdiction.

BYOK empowers your organization to choose the language model that best fits your needs while benefiting from {% data variables.product.github %}'s safety infrastructure. Note that model performance and safety characteristics are provider-dependent.




