{% ifversion dependabot-vnet-support or dependabot-arc-support %}

>[!NOTE]
> Private networking is supported with either an Azure Virtual Network (VNET) or the Actions Runner Controller (ARC) for {% data variables.product.prodname_dependabot %} on {% data variables.product.prodname_actions %}. See [AUTOTITLE](/code-security/dependabot/working-with-dependabot/setting-dependabot-to-run-on-self-hosted-runners-using-arc) and [AUTOTITLE](/code-security/dependabot/working-with-dependabot/setting-dependabot-to-run-on-github-hosted-runners-using-vnet).

{% else %}

> [!WARNING] Private networking is currently unsupported with either an Azure Virtual Network (VNET) or the Actions Runner Controller (ARC) for {% data variables.product.prodname_dependabot %} on {% data variables.product.prodname_actions %}. By using VNET or ARC, you do so at your own risk, and {% data variables.product.github %} cannot currently support you if problems arise.

{% endif %}
