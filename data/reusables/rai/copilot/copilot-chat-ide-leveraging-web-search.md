### Leveraging a web search to answer a question

> [!NOTE]
> * Bing search integration in {% data variables.product.prodname_copilot_chat_short %} is currently in beta and is subject to change.
> * The `@github` chat participant in {% data variables.product.prodname_vscode_shortname %} and {% data variables.product.prodname_vs %} is currently in preview and is subject to change. For more information, see "[Supplemental Terms of Use for Microsoft Azure Previews](https://azure.microsoft.com/en-us/support/legal/preview-supplemental-terms)."

When you use the `@github` chat participant, {% data variables.product.prodname_copilot_chat %} can use a Bing search to help answer your question if this has been enabled by your administrator.

Your {% data variables.product.prodname_enterprise %} administrator can enable Bing for your whole enterprise, or can delegate this decision to the organizational administrator. For more information, see "[AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-copilot-in-your-enterprise)."

When leveraging Bing, {% data variables.product.prodname_copilot_short %} will use the content of your prompt, as well as additional available context, to generate a Bing search query on your behalf that is sent to the Bing Search API. {% data variables.product.prodname_copilot_short %} will provide a link to the search results with its response. The search query sent to Bing is governed by [Microsoft's Privacy Statement](https://privacy.microsoft.com/en-us/privacystatement).
