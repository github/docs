{% ifversion ghae %}

You must ensure that the self-hosted runner has appropriate network access to communicate with your {% data variables.product.prodname_ghe_managed %} URL and its subdomains. Por exemplo, se o o nome da sua instância for `octoghae`, você deverá permitir que o executor auto-hospedado acesse `octoghae.githubenterprise.com`, `api.octoghae.githubenterprise.com` e `codeload.octoghae.githubenterprise.com`.

If you use an IP address allow list for your organization or enterprise account on {% data variables.product.prodname_dotcom %}, you must add your self-hosted runner's IP address to the allow list. Para obter mais informações, consulte "[Gerenciar endereços IP permitidos para a sua organização](/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization#using-github-actions-with-an-ip-allow-list)".

{% endif %}
