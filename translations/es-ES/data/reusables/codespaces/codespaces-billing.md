{% data variables.product.prodname_codespaces %} are billed in US dollars (USD) according to their compute and storage usage.

### Calculating compute usage
The total number of uptime minutes for which the {% data variables.product.prodname_codespaces %} instances are active. Compute usage is calculated by the actual number of minutes used by all codespaces. These totals are reported to the billing service daily, and are billed monthly.

Uptime is controlled by stopping your codespace which can be done manually or based on period of inactivity. For more information, see "[Closing or stopping your codespace](/codespaces/getting-started/deep-dive#closing-or-stopping-your-codespace)".

### Calculating storage usage
For {% data variables.product.prodname_codespaces %} billing purposes, this includes all storage used by all codespaces in your account. This includes any files used by the codespaces, such as cloned repositories, configuration files, and extensions, among others. These totals are reported to the billing service daily, and are billed monthly. Al final del mes, {% data variables.product.prodname_dotcom %} redondea tu almacenamiento al número de MB más cercano. 
