---
title: 将电子邮件通知限于已批准的域
intro: 为防止将组织信息泄露到个人帐户，组织所有者可以将关于组织活动的电子邮件通知限于经过验证的域。
product: '{% data reusables.gated-features.restrict-email-domain %}'
redirect_from:
  - /articles/restricting-email-notifications-about-organization-activity-to-an-approved-email-domain/
  - /articles/restricting-email-notifications-to-an-approved-domain
versions:
  free-pro-team: '*'
---

在组织中启用受限制的电子邮件通知后，成员只能在与组织经验证域关联的电子邮件地址接收有关组织活动的电子邮件通知。 更多信息请参阅“[验证组织的域](/articles/verifying-your-organization-s-domain)”。

外部协作者不受限于已验证域的电子邮件通知。 有关外部协作者的更多信息，请参阅“[组织的权限级别](/github/setting-up-and-managing-organizations-and-teams/permission-levels-for-an-organization#outside-collaborators)”。

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.verified-domains %}
5. 在“Enforcement preferences（强制执行首选项）”下，选择 **Restrict email notifications to domain email（将电子邮件通知限制为域电子邮件）**。 ![将电子邮件通知限制为经验证域电子邮件的复选框](/assets/images/help/organizations/restrict-email-notifications-to-domain.png)
6. 单击 **Save（保存）**。
