---
title: 配置有漏洞依赖项的通知
shortTitle: 配置通知
intro: '优化您如何接收有关 {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot %}{% else %}安全{% endif %}警报的通知。'
versions:
  enterprise-server: '>=2.21 <=2.22'
topics:
  - 安全
---

### 关于有漏洞依赖项的通知

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}当 {% data variables.product.prodname_dependabot %} 在您的仓库中检测到有漏洞依赖项时，我们将生成 {% data variables.product.prodname_dependabot %} 警报，并将其显示在仓库的“Security（安全）”选项卡中。 {% data variables.product.product_name %} 根据通知首选项将新警报通知受影响仓库的维护员。{% else %}When {% data variables.product.product_name %} 在仓库中检测到有漏洞依赖项时，它将发送安全警报。{% endif %}{% if currentVersion == "free-pro-team@latest" %} {% data variables.product.prodname_dependabot %} 在所有公共仓库中默认启用。 对于 {% data variables.product.prodname_dependabot_alerts %}，默认情况下，您将通过电子邮件收到按特定漏洞分组的 {% data variables.product.prodname_dependabot_alerts %}。
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}如果您是组织所有者，您可以对组织中的所有仓库一键启用或禁用 {% data variables.product.prodname_dependabot_alerts %}。 您也可以设置是否对新建的仓库启用或禁用有漏洞依赖项检测。 For more information, see "[Managing security and analysis settings for your organization](/organizations/collaborating-with-groups-in-organizations/managing-security-and-analysis-settings-for-your-organization#enabling-or-disabling-a-feature-for-all-new-repositories-when-they-are-added)."
{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion == "enterprise-server@2.21" %}
您的站点管理员需要对
{% data variables.product.product_location %} 启用有漏洞依赖项安全警报，您才能使用该功能。 更多信息请参阅“[为 {% data variables.product.prodname_ghe_server %} 上的有漏洞依赖项启用安全警报](/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server)”。{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.20" %}
默认情况下，如果站点管理员配置了使用电子邮件接收企业通知，您将
通过电子邮件收到{% if currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_alerts %}{% else %}安全警报{% endif %}。{% endif %}

{% if currentVersion ver_gt "enterprise-server@2.21" %}站点管理员还可以启用无通知 {% data variables.product.prodname_dependabot_alerts %}。 更多信息请参阅“[为 {% data variables.product.prodname_ghe_server %} 上的有漏洞依赖项启用 {% data variables.product.prodname_dependabot_alerts %}](/enterprise/{{ currentVersion }}/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server)”。{% endif %}

{% if currentVersion ver_lt "enterprise-server@2.22" %}站点管理员还可以启用无通知安全警报。 更多信息请参阅“[为 {% data variables.product.prodname_ghe_server %} 上易受攻击的依赖项启用安全警报](/enterprise/{{ currentVersion }}/admin/installation/enabling-security-alerts-for-vulnerable-dependencies-on-github-enterprise-server)”。

### 为 {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_alerts %}{% else %}安全警报{% endif %}配置通知

您可以从每个页面顶部显示的管理通知下拉菜单 {% octicon "bell" aria-label="The notifications bell" %} 为您自己或您的组织配置通知设置。 更多信息请参阅“[配置通知](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#choosing-your-notification-settings)”。

{% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization %}
{% data reusables.notifications.vulnerable-dependency-notification-options %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
  ![{% data variables.product.prodname_dependabot_alerts %} 选项](/assets/images/help/notifications-v2/dependabot-alerts-options.png)
{% else %}
  ![安全警报选项](/assets/images/help/notifications-v2/security-alerts-options.png)
{% endif %}

{% note %}

**注：** 您可以过滤 {% data variables.product.company_short %} 上的通知以显示{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot %}{% else %} 安全{% endif %}警报。 更多信息请参阅“[从收件箱管理通知](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#dependabot-custom-filters)”。

{% endnote %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" % %}{% data reusables.repositories.security-alerts-x-github-severity %} 更多信息请参阅{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}“[配置通知](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#filtering-email-notifications){% else %}“[关于电子邮件通知](/github/receiving-notifications-about-activity-on-github/about-email-notifications){% endif %}”。{% endif %}

### 如何减少有漏洞依赖项通知的干扰

如果您担心会收到太多 {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_alerts %}{% else %}安全警报{% endif %}通知，我们建议您在保持启用{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_alerts %}{% else %}安全警报{% endif %}的情况下，选择接收每周电子邮件摘要或关闭通知。 您仍然可以导航到仓库的“Security（安全）”选项卡以查看 {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_alerts %}{% else %}安全警报{% endif %}。{% if currentVersion == "free-pro-team@latest" %} 更多信息请参阅“[查看和更新仓库中的有漏洞依赖项](/github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository)”。{% endif %}

### 延伸阅读

- "[配置通知](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications)"
- “[从收件箱管理通知](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#supported-is-queries)”。
