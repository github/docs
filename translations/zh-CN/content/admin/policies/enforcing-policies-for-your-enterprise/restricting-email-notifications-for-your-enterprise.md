---
title: 限制企业的电子邮件通知
intro: 您可以通过限制成员可以接收有关企业所属组织活动的电子邮件通知的域，防止企业信息泄漏到个人电子邮件帐户。
product: '{% data reusables.gated-features.restrict-email-domain %}'
versions:
  ghec: '*'
  ghes: '*'
permissions: Enterprise owners can restrict email notifications for an enterprise.
type: how_to
topics:
  - Enterprise
  - Notifications
  - Organizations
  - Policies
redirect_from:
  - /admin/policies/restricting-email-notifications-for-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/restricting-email-notifications-for-your-enterprise-account-to-approved-domains
  - /github/setting-up-and-managing-your-enterprise/restricting-email-notifications-for-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/restricting-email-notifications-for-your-enterprise-account
shortTitle: 限制电子邮件通知
---

## 关于企业的电子邮件限制

当您限制电子邮件通知时，企业成员只能使用已验证或已批准域中的电子邮件地址来接收有关企业所拥有组织中活动的电子邮件通知。

{% data reusables.enterprise-accounts.approved-domains-beta-note %}

可以从企业继承域，也可以为特定组织配置域。 更多信息请参阅“[验证或批准企业的域](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)”和“[限制组织的电子邮件通知](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)”。

{% data reusables.notifications.email-restrictions-verification %}

如果对企业启用了电子邮件限制，则组织所有者无法禁用该企业拥有的任何组织的电子邮件限制。 如果发生更改导致某个组织没有已验证或已批准的域（从拥有该组织的企业继承的域或特定组织的域），则该组织的电子邮件限制将被禁用。

## 限制企业的电子邮件通知

在限制企业的电子邮件通知之前，必须至少验证或批准企业的一个域。 {% ifversion ghec %} 更多信息请参阅“[验证或批准企业的域](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)”。{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.verified-domains-tab %}
{% data reusables.organizations.restrict-email-notifications %}
1. 单击 **Save（保存）**。
