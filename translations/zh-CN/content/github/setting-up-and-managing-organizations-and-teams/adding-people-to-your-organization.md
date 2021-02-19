---
title: 将人员添加到您的组织
intro: '您可以使用任何人的 {% data variables.product.product_name %} 用户名或电子邮件地址使其成为组织的成员。'
redirect_from:
  - /articles/adding-people-to-your-organization
versions:
  enterprise-server: '*'
  github-ae: '*'
permissions: '组织所有者可以向组织添加人员。'
---

{% if currentVersion != "github-ae@latest" %}
如果您的组织[要求成员使用双重身份验证](/articles/requiring-two-factor-authentication-in-your-organization)，则用户必须[启用双重身份验证](/articles/securing-your-account-with-two-factor-authentication-2fa)，然后您才可将他们添加到组织。
{% endif %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.people %}
{% data reusables.organizations.invite_member_from_people_tab %}
{% data reusables.organizations.invite_to_org %}
{% data reusables.organizations.choose-to-restore-privileges %}
{% data reusables.organizations.choose-user-role %}
{% data reusables.organizations.choose-user-license %}
{% data reusables.organizations.add-user-to-teams %}
{% data reusables.organizations.send-invitation %}

### 延伸阅读
- "[向团队添加组织成员](/articles/adding-organization-members-to-a-team)"
