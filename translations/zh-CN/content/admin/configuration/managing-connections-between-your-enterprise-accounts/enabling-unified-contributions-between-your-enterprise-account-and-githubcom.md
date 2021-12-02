---
title: Enabling unified contributions between your enterprise account and GitHub.com
shortTitle: 启用统一贡献
intro: '启用 {% data variables.product.prodname_github_connect %} 后，您可以允许 {% data variables.product.prodname_ghe_cloud %} 成员向其 {% data variables.product.prodname_dotcom_the_website %} 个人资料发送贡献计数，以突出显示他们在 {% data variables.product.product_name %} 上的工作。'
redirect_from:
  - /enterprise/admin/guides/developer-workflow/enabling-unified-contributions-between-github-enterprise-and-github-com/
  - /enterprise/admin/guides/developer-workflow/enabling-unified-contributions-between-github-enterprise-server-and-github-com/
  - /enterprise/admin/developer-workflow/enabling-unified-contributions-between-github-enterprise-server-and-githubcom/
  - /enterprise/admin/installation/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
  - /enterprise/admin/configuration/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
  - /admin/configuration/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
  - /admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
permissions: 'Enterprise owners who are also owners of the connected {% data variables.product.prodname_ghe_cloud %} organization or enterprise account can enable unified contributions between {% data variables.product.product_location %} and {% data variables.product.prodname_dotcom_the_website %}.'
versions:
  ghes: '*'
  ghae: next
type: how_to
topics:
  - Enterprise
  - GitHub Connect
---

{% data reusables.github-connect.beta %}

As an enterprise owner, you can allow end users to send anonymized contribution counts for their work from {% data variables.product.product_location %} to their {% data variables.product.prodname_dotcom_the_website %} contribution graph.

After you enable {% data variables.product.prodname_github_connect %} and enable {% data variables.product.prodname_unified_contributions %} in both environments, end users on your enterprise account can connect to their {% data variables.product.prodname_dotcom_the_website %} accounts and send contribution counts from {% data variables.product.product_name %} to {% data variables.product.prodname_dotcom_the_website %}. {% data reusables.github-connect.sync-frequency %} For more information, see "[Sending enterprise contributions to your {% data variables.product.prodname_dotcom_the_website %} profile](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/sending-enterprise-contributions-to-your-githubcom-profile)."

If the enterprise owner disables the functionality or developers opt out of the connection, the {% data variables.product.product_name %} contribution counts will be deleted on {% data variables.product.prodname_dotcom_the_website %}. 如果开发者在禁用它们后重新连接其个人资料，则会恢复过去 90 天的贡献计数。

{% data variables.product.product_name %} **仅**为已连接的用户发送贡献计数和来源 ({% data variables.product.product_name %})。 它不会发送有关贡献或做出该贡献的方式的任何信息。

在 {% data variables.product.product_location %} 上启用 {% data variables.product.prodname_unified_contributions %} 前，必须将 {% data variables.product.product_location %} 连接到 {% data variables.product.prodname_dotcom_the_website %}。 For more information, see "[Connecting your enterprise account to {% data variables.product.prodname_dotcom_the_website %}](/admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud)."

{% ifversion ghes %}
{% data reusables.github-connect.access-dotcom-and-enterprise %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% ifversion ghes < 3.1 %}{% data reusables.enterprise-accounts.settings-tab %}{% endif %}{% data reusables.enterprise-accounts.github-connect-tab %}{% else %}
1. 登录到 {% data variables.product.product_location %} 和 {% data variables.product.prodname_dotcom_the_website %}。
{% data reusables.enterprise-accounts.access-enterprise %}{% data reusables.enterprise-accounts.github-connect-tab %}{% endif %}
1. 在“Users can share contribution counts to {% data variables.product.prodname_dotcom_the_website %}”下，单击 **Request access**。 ![Request access to unified contributions option](/assets/images/enterprise/site-admin-settings/dotcom-ghe-connection-request-access.png){% ifversion ghes %}
2. [登录](https://enterprise.github.com/login) {% data variables.product.prodname_ghe_server %} 站点以接收其他说明。

When you request access, we may redirect you to the {% data variables.product.prodname_ghe_server %} site to check your current terms of service.
{% endif %}
