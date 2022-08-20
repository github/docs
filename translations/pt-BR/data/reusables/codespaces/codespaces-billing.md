{% data variables.product.prodname_codespaces %} are billed in US dollars (USD) according to their compute and storage usage.

### Calculating compute usage
Compute usage is defined as the total number of uptime minutes for which a {% data variables.product.prodname_github_codespaces %} instance is active. Compute usage is calculated by summing the actual number of minutes used by all codespaces. These totals are reported to the billing service daily, and are billed monthly.

Uptime is controlled by stopping your codespace, which can be done manually or automatically after a developer specified period of inactivity. For more information, see "[Closing or stopping your codespace](/codespaces/getting-started/deep-dive#closing-or-stopping-your-codespace)".

### Calculating storage usage
For {% data variables.product.prodname_github_codespaces %} billing purposes, this includes all storage used by all codespaces in your account. This includes any files used by the codespaces, such as cloned repositories, configuration files, and extensions, among others. These totals are reported to the billing service daily, and are billed monthly. No final do mês, {% data variables.product.prodname_dotcom %} arredonda seu armazenamento para o MB mais próximo. 
