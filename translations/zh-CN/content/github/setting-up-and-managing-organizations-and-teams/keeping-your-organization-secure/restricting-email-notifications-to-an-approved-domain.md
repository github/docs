---
title: 将电子邮件通知限于已批准的域
intro: 为防止将组织信息泄露到个人帐户，组织所有者可以将关于组织活动的电子邮件通知限于经过验证的域。
product: '{% data reusables.gated-features.restrict-email-domain %}'
redirect_from:
  - /articles/restricting-email-notifications-about-organization-activity-to-an-approved-email-domain/
  - /articles/restricting-email-notifications-to-an-approved-domain
  - /github/setting-up-and-managing-organizations-and-teams/restricting-email-notifications-to-an-approved-domain
versions:
  free-pro-team: '*'
topics:
  - 组织
  - 团队
---
### 关于电子邮件限制

当组织中启用了受限电子邮件通知时，成员只能使用与组织的已验证域相关联的电子邮件地址来接收有关组织活动的电子邮件通知。 更多信息请参阅“[验证组织的域](/articles/verifying-your-organization-s-domain)”。

外部协作者不受限于已验证域的电子邮件通知。 有关外部协作者的更多信息，请参阅“[组织的权限级别](/github/setting-up-and-managing-organizations-and-teams/permission-levels-for-an-organization#outside-collaborators)”。

如果您的组织由企业帐户拥有，则组织成员除了能够接收来自组织的任何已验证域的通知之外，还能够接收来自企业帐户的任何已验证域的通知。 更多信息请参阅“[验证企业帐户的域](/github/setting-up-and-managing-your-enterprise/verifying-your-enterprise-accounts-domain)”。

### 将电子邮件通知限于已批准的域

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.verified-domains %}
{% data reusables.organizations.restrict-email-notifications %}
6. 单击 **Save（保存）**。
