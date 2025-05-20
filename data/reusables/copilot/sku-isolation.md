## About {% data variables.product.prodname_copilot_sku_isolation %}

As an {% ifversion ghec %}enterprise or {% endif %}organization owner, you can use your network firewall to explicitly allow access to {% data variables.product.prodname_copilot_for_business %}{% ifversion ghec %} or {% data variables.product.prodname_copilot_enterprise %}, or both{% endif %}, and/or block access to {% data variables.product.prodname_copilot_pro %} or {% data variables.product.prodname_copilot_free %}. This allows you to control which {% data variables.product.prodname_copilot %} plans your members can use within your network.

Configuring {% data variables.product.prodname_copilot_sku_isolation %} will affect the following {% data variables.product.prodname_copilot_short %} features:

* Code completions in {% data variables.product.prodname_vscode %}, {% data variables.product.prodname_vs %}, JetBrains IDEs, and Vim/NeoVim
* {% data variables.product.prodname_copilot_chat_short %} in {% data variables.product.prodname_vscode %}, {% data variables.product.prodname_vs %}, and JetBrains IDEs
* {% data variables.product.prodname_copilot_chat_short %} on {% data variables.product.github %}
* {% data variables.product.prodname_mobile %} Apps
* {% data variables.product.prodname_copilot_cli_short %}

{% data variables.product.prodname_copilot_sku_isolation %} is enabled for all users. This ensures that users access {% data variables.product.prodname_copilot_short %} through an endpoint that is specific to their {% data variables.product.prodname_copilot_short %} plan. Only {% data variables.product.prodname_copilot_business_short %} users will be able to connect to the {% data variables.product.prodname_copilot_business_short %} endpoint and only {% data variables.product.prodname_copilot_enterprise_short %} users will be able to connect to the {% data variables.product.prodname_copilot_enterprise_short %} endpoint.

## Important steps to ensure continued access to {% data variables.product.prodname_copilot_short %}

You should ensure that your firewall allows access to all of the hostnames listed in [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/configuring-your-proxy-server-or-firewall-for-copilot).

## Configuring {% data variables.product.prodname_copilot_sku_isolation %} for your {% ifversion ghec %}enterprise or {% endif %}organization

{% ifversion ghec %}Enterprise or organization {% else %}Organization {% endif %}owners can add the endpoints for {% data variables.product.prodname_copilot_business_short %} or {% data variables.product.prodname_copilot_enterprise_short %}{% ifversion ghec %}, or both,{% endif %} to their allow-list. This will ensure that members can only access {% data variables.product.prodname_copilot_short %} through the allowed endpoint.

{% ifversion ghec %}
> [!NOTE] If your enterprise account includes both {% data variables.product.prodname_copilot_business_short %} and {% data variables.product.prodname_copilot_enterprise_short %} plans, make sure both endpoints are added to your allow-list.{% endif %}

1. Ensure your members have updated to at least the minimum version of their {% data variables.product.prodname_copilot_short %} client listed below.
    * For {% data variables.product.prodname_vscode %}, use {% data variables.product.prodname_copilot_chat_short %} version 0.17 or later.
    * For JetBrains IDEs, use {% data variables.product.prodname_copilot_short %} version 1.5.6.5692 or later.
    * For {% data variables.product.prodname_vs %}, use version VS 2022 17.11 or later.

1. Update your corporate network firewall to include one, or both, of these paths in your allowlist:
    * For a {% data variables.product.prodname_copilot_business_short %} plan, add `*.business.githubcopilot.com`
    * For a {% data variables.product.prodname_copilot_enterprise_short %} plan, add `*.enterprise.githubcopilot.com`

    > [!NOTE] The `*` indicates a wildcard character. A wildcard is necessary as there are multiple subdomains required for {% data variables.product.prodname_copilot_short %} to function correctly.

1. Update your corporate network firewall to include `*.individual.githubcopilot.com` in your blocklist.
