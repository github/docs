{% ifversion dependabot-arc-support %}

> [!WARNING] Private networking is currently unsupported with an Azure Virtual Network (VNET) for {% data variables.product.prodname_dependabot %} on {% data variables.product.prodname_actions %}. By using VNET, you do so at your own risk, and {% data variables.product.github %} cannot currently support you if problems arise. Private networking is supported for the {% data variables.product.prodname_actions_runner_controller %}. See [AUTOTITLE](/code-security/dependabot/working-with-dependabot/setting-dependabot-to-run-on-self-hosted-runners-using-arc).

{% else %}

> [!WARNING] Private networking is currently unsupported with either an Azure Virtual Network (VNET) or the Actions Runner Controller (ARC) for {% data variables.product.prodname_dependabot %} on {% data variables.product.prodname_actions %}. By using VNET or ARC, you do so at your own risk, and {% data variables.product.github %} cannot currently support you if problems arise.

{% endif %}
