---
title: 将企业帐户的电子邮件通知限制为已批准的域
intro: 通过将有关企业帐户所拥有组织中活动的电子邮件通知限制为经过验证的域，可以防止企业的信息泄漏到个人帐户。
product: '{% data reusables.gated-features.enterprise-accounts %}'
versions:
  free-pro-team: '*'
permissions: 企业所有者可以限制企业帐户的电子邮件通知。
topics:
  - 企业
---

### 关于企业帐户的电子邮件限制

当您将电子邮件通知限制为已验证域时，企业成员只能使用与已验证域关联的电子邮件地址来接收有关企业帐户所拥有组织中活动的电子邮件通知。 可以从企业帐户继承域，也可以为特定组织配置域。 有关组织电子邮件限制的更多信息，请参阅“[将电子邮件通知限制为已批准的域](/organizations/keeping-your-organization-secure/restricting-email-notifications-to-an-approved-domain)”。

如果对企业帐户启用了电子邮件限制，则组织所有者无法禁用该企业帐户拥有的任何组织的电子邮件限制。 如果发生更改导致某个组织没有已验证的域（从拥有该组织的企业帐户继承的域或特定组织的域），则该组织的电子邮件限制将被禁用。

### 限制企业帐户的电子邮件通知

在限制企业帐户的电子邮件通知之前，必须至少验证企业帐户的一个域。 更多信息请参阅“[验证企业帐户的域](/github/setting-up-and-managing-your-enterprise/verifying-your-enterprise-accounts-domain)”。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.verified-domains-tab %}
{% data reusables.organizations.restrict-email-notifications %}
1. 单击 **Save（保存）**。
