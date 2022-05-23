---
title: 配置标记保护规则
shortTitle: 标记保护规则
intro: 您可以为存储库配置标记保护规则，以防止参与者创建或删除标记。
product: '{% data reusables.gated-features.tag-protection-rules %}'
versions:
  fpt: '*'
  ghae: issue-6337
  ghec: '*'
  ghes: '>3.4'
---

{% note %}

**注意：**标记保护规则目前处于测试阶段，可能会有所变化。

{% endnote %}

添加标记保护规则时，与提供的模式匹配的所有标记都将受到保护。 只有具有存储库中管理员或维护权限的用户才能创建受保护的标记，并且只有具有存储库管理员权限的用户才能删除受保护的标记。 更多信息请参阅“[组织的仓库角色](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization#permissions-for-each-role)”。 {% data variables.product.prodname_github_apps %} 需要`存储库管理：写入`权限才能修改受保护的标记。

{% if custom-repository-roles %}
此外，您还可以创建自定义存储库角色，以允许其他用户组创建或删除与标记保护规则匹配的标记。 更多信息请参阅“[管理组织的自定义仓库角色](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)”。{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. 在边栏的“Code and automation（代码和自动化）”部分中，单击 **{% octicon "tag" aria-label="The tag icon" %} 标记**。
1. 单击 **New rule（新规则）**。 ![新标记保护规则](/assets/images/help/repository/new-tag-protection-rule.png)
1. 在“Tag name pattern（标记名称模式）”下，键入要保护的标记的模式。 在此示例中，键入“\*”可保护所有标记。 ![设置标记保护模式](/assets/images/help/repository/set-tag-protection-pattern.png)
1. 单击 **Add rule（添加规则）**。 ![添加标记保护规则](/assets/images/help/repository/add-tag-protection-rule.png)
