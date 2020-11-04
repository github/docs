---
title: 启用 GitHub Insights 与 GitHub Enterprise 之间的链接
intro: '您可以启用一个允许用户从 {% data variables.product.prodname_ghe_server %} 导航到 {{  site.data.variables.product.prodname_insights }} 的链接。'
product: '{% data reusables.gated-features.github-insights %}'
permissions: '{% data variables.product.prodname_ghe_server %} 的站点管理员可启用 {% data variables.product.prodname_ghe_server %} 与 {% data variables.product.prodname_insights %} 之间的链接。'
redirect_from:
  - /github/installing-and-configuring-github-insights/navigating-between-github-insights-and-github-enterprise
  - /github/installing-and-configuring-github-insights/enabling-a-link-between-github-insights-and-github-enterprise
versions:
  enterprise-server: '*'
---

在您启用该链接后，每个用户都可以直接从 {% data variables.product.prodname_ghe_server %} 导航到 {% data variables.product.prodname_insights %}。 更多信息请参阅“[在 {% data variables.product.prodname_enterprise %} 与 {% data variables.product.prodname_insights %} 之间导航](/insights/exploring-your-usage-of-github-enterprise/navigating-between-github-enterprise-and-github-insights)”。

1. 连接到 {% data variables.product.prodname_ghe_server %} 的管理 shell。 更多信息请参阅“[访问管理 shell (SSH)](/enterprise/{{ currentVersion }}/admin/guides/installation/accessing-the-administrative-shell-ssh/)”。
2. 运行以下命令。
  ```
  ghe-config 'app.github.insights-available' 'true' && ghe-config-apply
  ```
3. 返回到
{% data variables.product.prodname_ghe_server %}.
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
7. 在
{% octicon "gear" aria-label="The Settings gear" %} **Settings（设置）**下，单击 **{% data variables.product.prodname_insights %}**。
  {% note %}

  **注：**运行配置命令后，此选项需要几分钟才会出现在 {% data variables.product.prodname_enterprise %} 中。 如果您没有看到 **{% data variables.product.prodname_insights %}**，请稍候，或者重新启动 {% data variables.product.prodname_enterprise %}。

  {% endnote %}

  ![{% data variables.product.prodname_insights %} 选项卡](/assets/images/help/business-accounts/github-insights-tab.png)
3. 在“{% data variables.product.prodname_insights %} 实例 URL”下，输入您公司用于 {% data variables.product.prodname_insights %} 的服务器 URL。 ![{% data variables.product.prodname_insights %} 实例 URL](/assets/images/help/business-accounts/insights-instance-url.png)
4. 单击 **Save（保存）**。
