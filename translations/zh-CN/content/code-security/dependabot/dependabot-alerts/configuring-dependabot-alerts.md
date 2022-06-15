---
title: 配置 Dependabot 警报
intro: '启用 {% data variables.product.prodname_dependabot_alerts %}，以便在其中一个依赖项中发现新漏洞时收到通知。'
shortTitle: 配置 Dependabot 警报
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Dependabot
  - Security updates
  - Alerts
  - Dependencies
  - Pull requests
  - Repositories
---

## 关于有漏洞依赖项的 {% data variables.product.prodname_dependabot_alerts %}

{% data reusables.repositories.a-vulnerability-is %}

Dependabot 执行扫描以检测有漏洞的依赖项，并在将新漏洞添加到 GitHub Advisory 数据库或存储库更改的依赖关系图时发送 Dependabot 警报。 更多信息请参阅“[关于 {% data variables.product.prodname_dependabot_alerts %} 警报](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)”。

您可以对以下项启用或禁用 {% data variables.product.prodname_dependabot_alerts %}：
* 您的个人帐户
* 您的存储库
* 您的组织

## 管理个人帐户的 {% data variables.product.prodname_dependabot_alerts %}

{% ifversion fpt or ghec %}

您可以为您的个人帐户所拥有的所有仓库启用或禁用 {% data variables.product.prodname_dependabot_alerts %}。

### 启用或禁用现有存储库的 {% data variables.product.prodname_dependabot_alerts %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.security-analysis %}
3. 在“Code security and analysis（代码安全性和分析）”下，单击 {% data variables.product.prodname_dependabot_alerts %} 右侧的 **Disable all（禁用所有）**或 **Enable all（启用所有）**。 ![强调显示"启用所有"或"禁用所有"按钮的"配置安全性和分析"功能屏幕截图](/assets/images/help/dependabot/dependabot-alerts-disable-or-enable-all.png)
4. （可选）默认情况下为您创建的新存储库启用 {% data variables.product.prodname_dependabot_alerts %}。 ![强调显示"默认情况下为新的私有存储库启用"复选框的"启用 Dependabot 警报"屏幕截图](/assets/images/help/dependabot/dependabot-alerts-enable-by-default.png)
5. 单击**禁用 {% data variables.product.prodname_dependabot_alerts %}** 或**启用 {% data variables.product.prodname_dependabot_alerts %}** ，为拥有的所有存储库禁用或启用 {% data variables.product.prodname_dependabot_alerts %}。 ![强调显示"启用 Dependabot 警报"的"启用 Dependabot 警报"屏幕截图](/assets/images/help/dependabot/dependabot-alerts-enable-dependabot-alerts.png)

当您为现有存储库启用 {% data variables.product.prodname_dependabot_alerts %} 时，您将在几分钟内看到 GitHub 上显示的任何结果。

### 启用或禁用新存储库的 {% data variables.product.prodname_dependabot_alerts %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.security-analysis %}
3. 在“Code security and analysis（代码安全性和分析）”下 {% data variables.product.prodname_dependabot_alerts %} 的右侧，默认为您创建的新存储库启用或禁用 {% data variables.product.prodname_dependabot_alerts %}。 ![强调显示"为所有新私有存储库启用"复选框的"配置安全性和分析"屏幕截图](/assets/images/help/dependabot/dependabot-alerts-enable-for-all-new-repositories.png)

{% else %}
企业所有者可以启用或禁用存储库的 {% data variables.product.prodname_dependabot_alerts %}。 更多信息请参阅“[为企业启用 Dependabot](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)”。

{% endif %}

## 管理仓库的 {% data variables.product.prodname_dependabot_alerts %}

{% ifversion fpt or ghec %}您可以管理公共、私有或内部存储库的 {% data variables.product.prodname_dependabot_alerts %}。

默认情况下，我们会向受影响仓库中具有管理员权限的人员通知有关新的 {% data variables.product.prodname_dependabot_alerts %}。 {% data variables.product.product_name %} 从不公开披露在任何仓库中发现的漏洞。 您也可以将 {% data variables.product.prodname_dependabot_alerts %} 设为对操作您拥有或具有管理员权限的仓库的其他人或团队可见。

{% data reusables.security.security-and-analysis-features-enable-read-only %}

### 为存储库启用或禁用 {% data variables.product.prodname_dependabot_alerts %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. 在“Code security and analysis（代码安全和分析）”下，在 {% data variables.product.prodname_dependabot_alerts %} 的右侧，单击 **Enable（启用）**以启用警报，或单击 **Disable（禁用）**禁用警报。 !["代码安全性和分析" “部分的屏幕截图，其中包含用于启用 {% data variables.product.prodname_dependabot_security_updates %}按钮](/assets/images/help/repository/security-and-analysis-disable-or-enable-fpt-private.png)
{% endif %}{% ifversion ghes or ghae %}

您的企业所有者可以启用或禁用存储库的 {% data variables.product.prodname_dependabot_alerts %}。 更多信息请参阅“[为企业启用 Dependabot](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)”。
{% endif %}

## 管理组织的 {% data variables.product.prodname_dependabot_alerts %}
{% ifversion fpt or ghec %}您可以为组织拥有的所有仓库启用或禁用 {% data variables.product.prodname_dependabot_alerts %}。 您的更改会影响所有存储库。

### 启用或禁用所有现有存储库的 {% data variables.product.prodname_dependabot_alerts %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security-and-analysis %}
2. 在“Code security and analysis（代码安全性和分析）”下，单击 {% data variables.product.prodname_dependabot_alerts %} 右侧的 **Disable all（禁用所有）**或 **Enable all（启用所有）**。
   {% ifversion fpt or ghec %}
   ![强调显示"启用所有"或"禁用所有"按钮的"配置安全性和分析"功能屏幕截图](/assets/images/help/dependabot/dependabot-alerts-disable-or-enable-fpt.png)
   {% endif %}
   {% ifversion ghae %}
   !["Configure security and analysis（配置安全性和分析）"功能的"Enable all（全部启用）"或"Disable all（全部禁用）"按钮](/assets/images/enterprise/github-ae/organizations/security-and-analysis-disable-or-enable-all-ghae.png)
   {% endif %}
   {% ifversion fpt or ghec %}
3. （可选）默认为您的组织中新的仓库启用 {% data variables.product.prodname_dependabot_alerts %}。
   {% ifversion fpt or ghec %}
   ![新仓库的"Enable by default（默认启用）"选项屏幕截图](/assets/images/help/dependabot/dependabot-alerts-enable-by-default-organizations.png)
   {% endif %}

   {% endif %}
   {% ifversion fpt or ghec %}
4. 单击**禁用 {% data variables.product.prodname_dependabot_alerts %}** 或**启用 {% data variables.product.prodname_dependabot_alerts %}** ，为组织中的所有存储库禁用或启用 {% data variables.product.prodname_dependabot_alerts %}。
   {% ifversion fpt or ghec %}
   ![强调显示禁用或启用功能按钮的"启用 Dependabot 警报"模式屏幕截图](/assets/images/help/dependabot/dependabot-alerts-enable-dependabot-alerts-organizations.png)
   {% endif %}{% endif %}{% endif %}{% ifversion ghes or ghae %}
企业所有者可以启用或禁用组织的 {% data variables.product.prodname_dependabot_alerts %}。 更多信息请参阅“[关于 GitHub Enterprise Server 的 Dependabot](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)”。
{% endif %}
