---
title: 管理组织
intro: '您可以管理指标中包含的 {% data variables.product.prodname_enterprise %} 组织。'
product: '{% data reusables.gated-features.github-insights %}'
redirect_from:
  - /github/installing-and-configuring-github-insights/managing-organizations
permissions: 'People with admin permissions in {% data variables.product.prodname_insights %} can manage organizations.'
versions:
  enterprise-server: '*'
---

### 关于组织管理

将组织添加到 {% data variables.product.prodname_insights %} 后，该组织拥有的仓库将包含在指标中。 您可以选择添加所有仓库或选择要添加的特定仓库。

如果您是 {% data variables.product.prodname_enterprise %} 中组织的所有者，您可以将该组织添加到 {% data variables.product.prodname_insights %}。 如果您不是组织的所有者，您可以向所有者发送请求，请求将该组织添加到 {% data variables.product.prodname_insights %}。

### 将组织添加到 {% data variables.product.prodname_insights %}

将组织添加到 {% data variables.product.prodname_insights %} 时，会在该组织中安装用于 {% data variables.product.prodname_insights %} 的 {% data variables.product.prodname_github_app %}。 有关 {% data variables.product.prodname_github_app %} 的更多信息，请参阅“[安装 {% data variables.product.prodname_insights %}](/github/installing-and-configuring-github-insights/installing-github-insights)”。

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.repositories-tab %}
{% data reusables.github-insights.add-organizations %}
4. 单击要添加到 {% data variables.product.prodname_insights %} 的组织。
5. 选择添加所有仓库或指定要包含的仓库。 ![添加所有仓库或选择仓库的复选框](/assets/images/help/insights/all-or-select-repos.png)
6. 如果您选择在所选仓库上安装 {% data variables.product.product_name %}，请使用下拉菜单选择要包含的仓库。 ![选择仓库的下拉菜单](/assets/images/help/insights/select-repos.png)
5. 单击 **Install（安装）**或 **Request（请求）**。

### 从 {% data variables.product.prodname_insights %} 删除组织

从 {% data variables.product.prodname_insights %} 删除组织时，会从该组织卸载用于 {% data variables.product.prodname_insights %} 的 {% data variables.product.prodname_github_app %}。 有关 {% data variables.product.prodname_github_app %} 的更多信息，请参阅“[安装 {% data variables.product.prodname_insights %}](/github/installing-and-configuring-github-insights/installing-github-insights)”。

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.repositories-tab %}
{% data reusables.github-insights.add-organizations %}
4. 单击要从 {% data variables.product.prodname_insights %} 删除的组织。
4. 在“卸载 {% data variables.product.prodname_insights %}”下，单击 **Uninstall（卸载）**。 ![卸载按钮](/assets/images/help/insights/uninstall-button.png)
5. 单击 **OK（确定）**。
