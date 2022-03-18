{% ifversion ghae %}

You must ensure that the self-hosted runner has appropriate network access to communicate with your {% data variables.product.prodname_ghe_managed %} URL and its subdomains. 例如，如果实例名称是s `octoghae`，则需要允许自托管运行器访问 `octoghae.githubenterprise.com`、`api.octoghae.githubenterprise.com` 和 `codeload.octoghae.githubenterprise.com`。

If you use an IP address allow list for your organization or enterprise account on {% data variables.product.prodname_dotcom %}, you must add your self-hosted runner's IP address to the allow list. 更多信息请参阅“[管理组织允许的 IP 地址](/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization#using-github-actions-with-an-ip-allow-list)”。

{% endif %}
