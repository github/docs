> [!NOTE] {% data variables.product.prodname_copilot_sku_isolation %} is currently in limited public beta and subject to change. <!-- expires 2024-10-31 -->This feature will be enabled for all users on October 31, 2024.<!-- end expires 2024-10-31 -->

## About {% data variables.product.prodname_copilot_sku_isolation %}

As an {% ifversion ghec %}enterprise or {% endif %}organization owner, you can use your network firewall to explicitly allow access to {% data variables.product.prodname_copilot_for_business %}{% ifversion ghec %} or {% data variables.product.prodname_copilot_enterprise %}{% endif %}, and/or block access to {% data variables.product.prodname_copilot_for_individuals %}. This allows you to control which {% data variables.product.prodname_copilot %} plans your members can use within your network.

Configuring {% data variables.product.prodname_copilot_sku_isolation %} will affect the following {% data variables.product.prodname_copilot %} features:

* Code completions in {% data variables.product.prodname_vscode %}, {% data variables.product.prodname_vs %}, JetBrains IDEs, and Vim/NeoVim
* {% data variables.product.prodname_copilot_chat_short %} in {% data variables.product.prodname_vscode %}, {% data variables.product.prodname_vs %}, and JetBrains IDEs
* {% data variables.product.prodname_mobile %} Apps
* {% data variables.product.prodname_copilot_cli_short %}

<!-- expires 2024-10-31 -->
On October 31, 2024, we will enable {% data variables.product.prodname_copilot_sku_isolation %} for all users. This will ensure that users are accessing {% data variables.product.prodname_copilot %} through an endpoint that is specific to their {% data variables.product.prodname_copilot_short %} subscription. Only {% data variables.product.prodname_copilot_business_short %} users will be able to connect to the {% data variables.product.prodname_copilot_business_short %} endpoint and only {% data variables.product.prodname_copilot_enterprise_short %} users will be able to connect to the {% data variables.product.prodname_copilot_enterprise_short %} endpoint.

Optionally, if you are a customer with a {% data variables.product.prodname_dotcom %} account representative and you want to block access to {% data variables.product.prodname_copilot_individuals_short %} on your network before October 31, ask your representative about enabling {% data variables.product.prodname_copilot_sku_isolation %} ahead of this date.

## Important steps to ensure continued access to {% data variables.product.prodname_copilot %}

Between now and October 31, you should ensure that your firewall allows access to all of the hostnames listed in "[AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/configuring-your-proxy-server-or-firewall-for-copilot)."
<!-- end expires 2024-10-31 -->

## Configuring {% data variables.product.prodname_copilot_sku_isolation %} for your enterprise

<!-- expires 2024-10-31 -->
Before October 31, 2024, you should perform the following steps to ensure users can continue to access {% data variables.product.prodname_copilot %}.
<!-- end expires 2024-10-31 -->

1. Ensure your members have updated to at least the minimum version of their {% data variables.product.prodname_copilot_short %} client listed below.
    * For {% data variables.product.prodname_vscode %}, use Copilot Chat version 0.17 or later.
    * For JetBrains IDEs, use Copilot version 1.5.6.5692 or later.
    * For {% data variables.product.prodname_vs %}, use version VS 2022 17.11 or later.

1. Update your corporate network firewall to include one of these paths in your allow-list:
    * For a {% data variables.product.prodname_copilot_business_short %} subscription, add `*.business.githubcopilot.com`
    * For a {% data variables.product.prodname_copilot_enterprise_short %} subscription, add `*.enterprise.githubcopilot.com`

    > [!NOTE] The `*` indicates a wildcard character. A wildcard is necessary as there are multiple subdomains required for {% data variables.product.prodname_copilot %} to function correctly.

1. Update your corporate network firewall to include `*.individual.githubcopilot.com` in your block-list.
