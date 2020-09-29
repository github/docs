---
title: 管理组织中漏洞依赖项的警报
intro: '当我们检测到组织仓库中有漏洞的依赖项时，组织所有者和仓库管理员会收到 {% data variables.product.prodname_dependabot_alerts %}。 您可以指定其他具有写入权限的组织成员或团队也接收漏洞依赖项的警报。'
redirect_from:
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organization-s-repositories/
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organizations-repositories/
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organization
versions:
  free-pro-team: '*'
---

{% if currentVersion == "free-pro-team@latest" %}
{% data reusables.repositories.you-can-manage-access-to-security-alerts %}
{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. 在左侧边栏中，单击 **Dependabot alerts（Dependabot 警报）**。 ![设置侧边栏中的 Dependabot 警报选项卡](/assets/images/help/settings/settings-sidebar-dependabot-alerts.png)
4. 输入您希望在 {% data variables.product.product_name %} 检测到漏洞依赖项时接收 {% data variables.product.prodname_dependabot_alerts %}的个人或团队名称，然后单击其用户名或团队名称以选中。
5. 在选择您希望接收 {% data variables.product.prodname_dependabot_alerts %}的所有人员或团队后，单击 **Save changes（保存更改）**。

### 延伸阅读

- “[关于有易受攻击依赖项的警报](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)”
- "[查看和更新仓库中的漏洞依赖项](/articles/viewing-and-updating-vulnerable-dependencies-in-your-repository)"
- “[管理组织的安全性和分析设置](/github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization)”
