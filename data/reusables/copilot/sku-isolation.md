    > [!NOTE] {% data reusables.copilot.sku-isolation-beta-note %}

## About {% data variables.product.prodname_copilot_sku_isolation %}

As an {% ifversion ghec %}enterprise or {% endif %}organization owner, you can use your network firewall to explicitly allow access to {% data variables.product.prodname_copilot_for_business %}{% ifversion ghec %} or {% data variables.product.prodname_copilot_enterprise %}{% endif %}, and/or block access to {% data variables.product.prodname_copilot_for_individuals %}. This allows you to control which {% data variables.product.prodname_copilot %} plans your members can use within your network.

Configuring {% data variables.product.prodname_copilot_sku_isolation %} will affect the following {% data variables.product.prodname_copilot %} features:

* Code completions in {% data variables.product.prodname_vscode %}, {% data variables.product.prodname_vs %}, JetBrains IDEs, and Vim/NeoVim
* {% data variables.product.prodname_copilot_chat_short %} in {% data variables.product.prodname_vscode %}, {% data variables.product.prodname_vs %}, and JetBrains IDEs
* {% data variables.product.prodname_mobile %} Apps
* {% data variables.product.prodname_copilot_cli_short %}
<!-- expires 2024-10-31 -->
Before October 31, 2024, organization members using earlier versions of {% data variables.product.prodname_copilot %} clients will still be able to bypass firewall settings to access {% data variables.product.prodname_copilot_individuals_short %} through your corporate network.

From October 31, 2024, all organization members must use at least the minimum version of their {% data variables.product.prodname_copilot %} client listed below to access your corporate network if you have configured {% data variables.product.prodname_copilot_sku_isolation %} to block access to {% data variables.product.prodname_copilot_individuals_short %}.
<!-- end expires 2024-10-31 -->
## Configuring {% data variables.product.prodname_copilot_sku_isolation %} for your enterprise

1. Ensure your members have updated to at least the minimum version of their {% data variables.product.prodname_copilot_short %} client listed below.
    * For {% data variables.product.prodname_vscode %}, use Copilot Chat version 0.17 or later.
    * For JetBrains IDEs, use Copilot version 1.5.6.5692 or later.
    * For {% data variables.product.prodname_vs %}, use version VS 2022 17.11 or later.

1. Update your corporate network firewall to include one of these paths in your allow-list:
    * For a {% data variables.product.prodname_copilot_business_short %} subscription, add `*.business.githubcopilot.com`
    * For a {% data variables.product.prodname_copilot_enterprise_short %} subscription, add `*.enterprise.githubcopilot.com`

    > [!NOTE] The `*` indicates a wildcard character. A wildcard is necessary as there are multiple subdomains required for {% data variables.product.prodname_copilot %} to function correctly.

1. Update your corporate network firewall to include `*.individual.githubcopilot.com` in your block-list.
