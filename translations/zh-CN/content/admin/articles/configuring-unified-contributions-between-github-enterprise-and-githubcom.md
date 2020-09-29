---
title: 在 GitHub Enterprise 和 GitHub.com 之间配置统一贡献
intro: '作为站点管理员，如果您启用了 {% data variables.product.prodname_github_connect %}，则可以允许最终用户在他们的 {% data variables.product.prodname_dotcom_the_website %} 贡献图上查看 {% data variables.product.prodname_enterprise %} 工作的匿名贡献计数。'
hidden: true
redirect_from:
  - /enterprise/admin/articles/configuring-unified-contributions-between-github-enterprise-and-github-com
  - /enterprise/admin/articles/configuring-unified-contributions-between-github-enterprise-and-githubcom
versions:
  enterprise-server: '*'
---


在两个环境中启用 {% data variables.product.prodname_github_connect %} 和 {% data variables.product.prodname_unified_contributions %} 后，实例上的最终用户可以连接到他们的 {% data variables.product.prodname_dotcom_the_website %} 帐户，并将贡献计数从 {% data variables.product.prodname_enterprise %} 发送到 {% data variables.product.prodname_dotcom_the_website %}。 更多信息请参阅“[在 {% data variables.product.prodname_enterprise %} 和 {% data variables.product.prodname_dotcom_the_website %} 之间启用 {% data variables.product.prodname_unified_contributions %}](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/enabling-unified-contributions-between-github-enterprise-server-and-github-com)”和“[将您的 {% data variables.product.prodname_ghe_server %} 贡献发送到您的 {% data variables.product.prodname_dotcom_the_website %} 个人资料](/articles/sending-your-github-enterprise-server-contributions-to-your-github-com-profile/)”。

如果站点管理员禁用了该功能或开发者决定退出连接，则将删除 {% data variables.product.prodname_dotcom_the_website %} 上的 {% data variables.product.prodname_enterprise %} 贡献计数。 如果开发者在禁用它们后重新连接其个人资料，则会恢复过去 90 天的贡献计数。

1.  在管理 shell 中，启用 {% data variables.product.product_location_enterprise %} 上的 {% data variables.product.prodname_unified_contributions %} 配置：
  ```shell
  $ ghe-config 'app.github.dotcom-contributions-configurable' 'true'
  $ ghe-config-apply
  ```
2. 返回到 {% data variables.product.prodname_enterprise %}。
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.business-settings %}
{% data reusables.enterprise-accounts.github-connect-tab %}
7. 在“Users can share contribution counts to {% data variables.product.prodname_dotcom_the_website %}（用户可将贡献计数分享到 {% data variables.product.prodname_dotcom_the_website %}）”下，使用下拉菜单并单击 **Enabled（已启用）**。
8. 重定向到 {% data variables.product.prodname_dotcom_the_website %} 之后，要将 {% data variables.product.prodname_enterprise %} 贡献帐户写入所连接的用户帐户，您必须升级 {% data variables.product.prodname_github_app %}。 {% data variables.product.prodname_dotcom_the_website %} 组织的组织管理员必须批准使用 `external_contributions` 权限来升级 {% data variables.product.prodname_github_app %}。

