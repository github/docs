---
title: 将电子邮件通知限于已批准的域
intro: '为防止将组织信息泄露到个人帐户，组织所有者可以将关于组织活动的电子邮件通知限于经过验证的域。'
product: '{% data reusables.gated-features.restrict-email-domain %}'
redirect_from:
  - /articles/restricting-email-notifications-about-organization-activity-to-an-approved-email-domain/
  - /articles/restricting-email-notifications-to-an-approved-domain
versions:
  free-pro-team: '*'
---

### About email restrictions

When restricted email notifications are enabled in an organization, members can only use an email address associated with the organization's verified domains to receive email notifications about organization activity. 更多信息请参阅“[验证组织的域](/articles/verifying-your-organization-s-domain)”。

外部协作者不受限于已验证域的电子邮件通知。 有关外部协作者的更多信息，请参阅“[组织的权限级别](/github/setting-up-and-managing-organizations-and-teams/permission-levels-for-an-organization#outside-collaborators)”。

If your organization is owned by an enterprise account, organization members will be able to receive notifications from any domains verified for the enterprise account, in addition to any domains verified for the organization. For more information, see "[Verifying your enterprise account's domain](/github/setting-up-and-managing-your-enterprise/verifying-your-enterprise-accounts-domain)."

### 将电子邮件通知限于已批准的域

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.verified-domains %}
{% data reusables.organizations.restrict-email-notifications %}
6. 单击 **Save（保存）**。
