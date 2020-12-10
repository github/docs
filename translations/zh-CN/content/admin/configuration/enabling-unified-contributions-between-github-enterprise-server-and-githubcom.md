---
title: 在 GitHub Enterprise Server 与 GitHub.com 之间启用统一贡献
intro: '启用 {% data variables.product.prodname_github_connect %} 后，您可以允许 {% data variables.product.prodname_ghe_cloud %} 成员向其 {% data variables.product.prodname_dotcom_the_website %} 个人资料发送贡献计数，以突出显示他们在 {% data variables.product.prodname_ghe_server %} 上的工作。'
redirect_from:
  - /enterprise/admin/guides/developer-workflow/enabling-unified-contributions-between-github-enterprise-and-github-com/
  - /enterprise/admin/guides/developer-workflow/enabling-unified-contributions-between-github-enterprise-server-and-github-com/
  - /enterprise/admin/developer-workflow/enabling-unified-contributions-between-github-enterprise-server-and-githubcom/
  - /enterprise/admin/installation/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
  - /enterprise/admin/configuration/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
permissions: '{% data variables.product.prodname_ghe_server %} 的站点管理员（同时也是已连接 {% data variables.product.prodname_ghe_cloud %} 组织或企业帐户的所有者）可以在 {% data variables.product.prodname_ghe_server %} 与 {% data variables.product.prodname_dotcom_the_website %} 之间启用统一贡献。'
versions:
  enterprise-server: '*'
---

作为站点管理员，您可以允许最终用户将进行过匿名处理的工作贡献计数从 {% data variables.product.prodname_ghe_server %} 发送到其 {% data variables.product.prodname_dotcom_the_website %} 贡献图。

启用 {% data variables.product.prodname_github_connect %} 并在两个环境中启用 {% data variables.product.prodname_unified_contributions %} 后，实例上的最终用户可以连接到其 {% data variables.product.prodname_dotcom_the_website %} 帐户并将贡献计数从 {% data variables.product.prodname_ghe_server %} 发送至 {% data variables.product.prodname_dotcom_the_website %}。 {% data reusables.github-connect.sync-frequency %} 更多信息请参阅“[将 {% data variables.product.prodname_ghe_server %} 贡献发送至 {% data variables.product.prodname_dotcom_the_website %} 个人资料](/articles/sending-your-github-enterprise-server-contributions-to-your-github-com-profile/)”。

如果站点管理员禁用功能或开发者选择退出连接，{% data variables.product.prodname_ghe_server %} 贡献计数将从 {% data variables.product.prodname_dotcom_the_website %} 上删除。 如果开发者在禁用它们后重新连接其个人资料，则会恢复过去 90 天的贡献计数。

{% data variables.product.prodname_ghe_server %} **仅会**发送已连接用户的贡献计数和来源 ({% data variables.product.prodname_ghe_server %})， 它不会发送有关贡献或做出该贡献的方式的任何信息。

在 {% data variables.product.product_location_enterprise %} 上启用 {% data variables.product.prodname_unified_contributions %} 前，必须将 {% data variables.product.product_location_enterprise %} 连接到 {% data variables.product.prodname_dotcom_the_website %}。 更多信息请参阅“[将 {% data variables.product.prodname_ghe_server %} 连接到 {% data variables.product.prodname_dotcom_the_website %}](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/connecting-github-enterprise-server-to-github-com)”。

{% data reusables.github-connect.access-dotcom-and-enterprise %}
{% data reusables.enterprise_site_admin_settings.access-settings %}{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.github-connect-tab %}
4. 在“Users can share contribution counts to {% data variables.product.prodname_dotcom_the_website %}”下，单击 **Request access**。 ![请求访问统一贡献选项](/assets/images/enterprise/site-admin-settings/dotcom-ghe-connection-request-access.png)
5. [登录](https://enterprise.github.com/login) {% data variables.product.prodname_ghe_server %} 站点以接收其他说明。

请求访问时，我们会将您重定向到 {% data variables.product.prodname_ghe_server %} 站点，以查看当前服务条款。 如果 {% data variables.product.product_location_enterprise %} 使用标准服务条款，请求会自动将您重定向到关于启用 {% data variables.product.prodname_unified_contributions %} 的说明。 如果您要使用自定义服务条款，我们会记录您的请求并联系您来设置访问权限。
