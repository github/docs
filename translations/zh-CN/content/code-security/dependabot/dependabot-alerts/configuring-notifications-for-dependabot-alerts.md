---
title: 配置 Dependabot 警报的通知
shortTitle: 配置通知
intro: '优化接收 {% data variables.product.prodname_dependabot_alerts %} 相关通知的方式。'
redirect_from:
  - /github/managing-security-vulnerabilities/configuring-notifications-for-vulnerable-dependencies
  - /code-security/supply-chain-security/configuring-notifications-for-vulnerable-dependencies
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/configuring-notifications-for-vulnerable-dependencies
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Dependabot
  - Alerts
  - Notifications
  - Vulnerabilities
  - Dependencies
  - Repositories
---

## 关于 {% data variables.product.prodname_dependabot_alerts %} 的通知

当 {% data variables.product.prodname_dependabot %} 在您的仓库中检测到有漏洞依赖项{% ifversion GH-advisory-db-supports-malware %}或恶意软件{% endif %}时，我们将生成 {% data variables.product.prodname_dependabot %} 警报，并将其显示在仓库的“Security（安全）”选项卡中。 {% data variables.product.product_name %} 根据通知首选项将新警报通知受影响仓库的维护员。{% ifversion fpt or ghec %} {% data variables.product.prodname_dependabot %} 在所有公共仓库上默认启用。 对于 {% data variables.product.prodname_dependabot_alerts %}，默认情况下，您将通过电子邮件收到按特定漏洞分组的 {% data variables.product.prodname_dependabot_alerts %}。
{% endif %}

{% ifversion fpt or ghec %}如果您是组织所有者，您可以对组织中的所有仓库一键启用或禁用 {% data variables.product.prodname_dependabot_alerts %}。 您也可以设置是否对新建的仓库启用或禁用 {% data variables.product.prodname_dependabot_alerts %}。 更多信息请参阅“[管理组织的安全和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization#enabling-or-disabling-a-feature-for-all-new-repositories-when-they-are-added)”。
{% endif %}

{% ifversion ghes or ghae %}
默认情况下，如果您的企业所有者已配置电子邮件以获取有关企业的通知，您将收到 {% data variables.product.prodname_dependabot_alerts %} 电子邮件。

企业所有者也可以在没有通知的情况下启用 {% data variables.product.prodname_dependabot_alerts %}。 更多信息请参阅“[为企业启用 {% data variables.product.prodname_dependabot %}](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)”。
{% endif %}

## 配置 {% data variables.product.prodname_dependabot_alerts %} 的通知

{% ifversion fpt or ghes or ghec %}
当检测到新的 {% data variables.product.prodname_dependabot %} 警报时，{% data variables.product.product_name %} 根据通知偏好通知所有能够访问仓库的 {% data variables.product.prodname_dependabot_alerts %} 的用户。 如果您正在关注该仓库、已对仓库上的安全警报或所有活动启用通知，并且没有忽略该仓库，您将收到警报。 更多信息请参阅“[配置通知](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#configuring-your-watch-settings-for-an-individual-repository)”。
{% endif %}

您可以从每个页面顶部显示的管理通知下拉菜单 {% octicon "bell" aria-label="The notifications bell" %} 为您自己或您的组织配置通知设置。 更多信息请参阅“[配置通知](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#choosing-your-notification-settings)”。

{% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization2 %}
{% data reusables.notifications.vulnerable-dependency-notification-options %}

  ![{% data variables.product.prodname_dependabot_alerts %} 选项](/assets/images/help/notifications-v2/dependabot-alerts-options.png)

{% note %}

**注意：**您可以在 {% data variables.product.company_short %} 上过滤通知以显示  {% data variables.product.prodname_dependabot_alerts %}。 更多信息请参阅“[从收件箱管理通知](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#dependabot-custom-filters)”。

{% endnote %}

{% data reusables.repositories.security-alerts-x-github-severity %} 更多信息请参阅“[配置通知](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#filtering-email-notifications)”。

## 如何减少 {% data variables.product.prodname_dependabot_alerts %} 通知的噪音

如果您想要收到太多 {% data variables.product.prodname_dependabot_alerts %} 的通知，我们建议您选择加入每周的电子邮件摘要，或者在保持 {% data variables.product.prodname_dependabot_alerts %} 启用时关闭通知。 您仍可导航到仓库的 Security（安全性）选项卡查看 {% data variables.product.prodname_dependabot_alerts %}。 更多信息请参阅“[查看和更新 {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)”。

## 延伸阅读

- "[配置通知](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications)"
- “[从收件箱管理通知](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#supported-is-queries)”。
