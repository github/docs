{% ifversion ghae %}

You must ensure that the self-hosted runner has appropriate network access to communicate with your {% data variables.product.prodname_ghe_managed %} URL and its subdomains. Pro ejemplo, si el nombre de tu instancia es `octoghae`, entonces necesitarás permitir que el ejecutor auto-hospedado acceda a `octoghae.githubenterprise.com`, `api.octoghae.githubenterprise.com` y `codeload.octoghae.githubenterprise.com`.

If you use an IP address allow list for your organization or enterprise account on {% data variables.product.prodname_dotcom %}, you must add your self-hosted runner's IP address to the allow list. Para obtener más información, consulta "[Administrar las direcciones IP permitidas en tu organización](/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization#using-github-actions-with-an-ip-allow-list)".

{% endif %}
