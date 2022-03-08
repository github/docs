{% ifversion ghae %}

You must ensure that the self-hosted runner has appropriate network access to communicate with your {% data variables.product.prodname_ghe_managed %} URL and its subdomains.
For example, if your instance name is `octoghae`, then you will need to allow the self-hosted runner to access `octoghae.githubenterprise.com`, `api.octoghae.githubenterprise.com`, and `codeload.octoghae.githubenterprise.com`.

If you use an IP address allow list for your organization or enterprise account on {% data variables.product.prodname_dotcom %}, you must add your self-hosted runner's IP address to the allow list. For more information, see "[Managing allowed IP addresses for your organization](/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization#using-github-actions-with-an-ip-allow-list)."

{% endif %}
