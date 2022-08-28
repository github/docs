---
title: 配置有漏洞依赖项的通知
shortTitle: 配置通知
intro: '优化您如何接收有关 {% ifversion ghes %}{% data variables.product.prodname_dependabot %}{% else %}安全{% endif %}警报的通知。'
versions:
  ghes: '* <=2.22'
topics:
  - Security
redirect_from:
  - /github/managing-security-vulnerabilities/configuring-notifications-for-vulnerable-dependencies
---

<!--See /content/code-security/supply-chain-security/configuring-notifications-for-vulnerable-dependencies for the current version of this article -->

## 关于有漏洞依赖项的通知

{% ifversion ghes %}当 {% data variables.product.prodname_dependabot %} 在您的仓库中检测到有漏洞依赖项时，我们将生成 {% data variables.product.prodname_dependabot %} 警报，并将其显示在仓库的“Security（安全）”选项卡中。 {% data variables.product.product_name %} 根据通知首选项将新警报通知受影响仓库的维护员。{% else %}当 {% data variables.product.product_name %} 在仓库中检测到有漏洞的依赖项时，它将发送安全警报。{% endif %}

{% ifversion ghes %}
默认情况下，如果站点管理员已在您的企业上配置电子邮件通知，您将会通过电子邮件收到 {% ifversion ghes %}{% data variables.product.prodname_dependabot_alerts %}{% else %}安全警报{% endif %}。{% endif %}

{% ifversion ghes %}站点管理员还可以启用无通知 {% data variables.product.prodname_dependabot_alerts %}。 更多信息请参阅“[为 {% data variables.product.prodname_ghe_server %} 上的有漏洞依赖项启用 {% data variables.product.prodname_dependabot_alerts %}](/enterprise/{{ currentVersion }}/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server)”。{% endif %}

## 配置{% ifversion ghes %}{% data variables.product.prodname_dependabot_alerts %}{% else %}安全警报{% endif %}通知

您可以从每个页面顶部显示的管理通知下拉菜单 {% octicon "bell" aria-label="The notifications bell" %} 为您自己或您的组织配置通知设置。 更多信息请参阅“[配置通知](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#choosing-your-notification-settings)”。

{% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization %}
{% data reusables.notifications.vulnerable-dependency-notification-options %}

{% ifversion ghes %}
  ![{% data variables.product.prodname_dependabot_alerts %} 选项](/assets/images/help/notifications-v2/dependabot-alerts-options.png)
{% else %}
  ![安全警报选项](/assets/images/help/notifications-v2/security-alerts-options.png)
{% endif %}

{% note %}

**注：** 您可以过滤 {% data variables.product.company_short %} 上的通知以显示{% ifversion fpt or ghes %}{% data variables.product.prodname_dependabot %}{% else %} 安全{% endif %}警报。 更多信息请参阅“[从收件箱管理通知](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#dependabot-custom-filters)”。

{% endnote %}

{% data reusables.repositories.security-alerts-x-github-severity %} 更多信息请参阅“[配置通知](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#filtering-email-notifications)”。

## 如何减少有漏洞依赖项通知的干扰

如果您担心会收到太多 {% ifversion ghes %}{% data variables.product.prodname_dependabot_alerts %}{% else %}安全警报{% endif %}通知，我们建议您在保持启用{% ifversion ghes %}{% data variables.product.prodname_dependabot_alerts %}{% else %}安全警报{% endif %}的情况下，选择接收每周电子邮件摘要或关闭通知。 您仍可导航到仓库的 Security（安全性）选项卡查看 {% ifversion ghes %}{% data variables.product.prodname_dependabot_alerts %}{% else %}安全警报{% endif %}。

## 延伸阅读

- "[配置通知](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications)"
- “[从收件箱管理通知](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#supported-is-queries)”。
