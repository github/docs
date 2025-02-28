### Leveraging a web search to answer a question

When you use the `@github` chat participant, {% data variables.product.prodname_copilot_chat %} can use a Bing search to help answer your question if this has been enabled by your administrator.

Your {% data variables.product.prodname_enterprise %} administrator can enable Bing for your whole enterprise, or can delegate this decision to the organizational administrator. For more information, see [AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-copilot-in-your-enterprise).

When leveraging Bing, {% data variables.product.prodname_copilot_short %} will use the content of your prompt, as well as additional available context, to generate a Bing search query on your behalf that is sent to the Bing Search API. {% data variables.product.prodname_copilot_short %} will provide a link to the search results with its response. The search query sent to Bing is governed by [Microsoft's Privacy Statement](https://privacy.microsoft.com/en-us/privacystatement).
