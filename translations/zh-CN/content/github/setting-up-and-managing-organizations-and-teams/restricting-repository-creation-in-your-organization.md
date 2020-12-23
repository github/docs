---
title: 限制在组织中创建仓库
intro: '为保护组织的数据，您可以配置在组织中创建仓库的权限。'
redirect_from:
  - /articles/restricting-repository-creation-in-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

您可以选择成员是否可以在组织中创建仓库。 If you allow members to create repositories, you can choose which types of repositories members can create.{% if currentVersion == "free-pro-team@latest" %} To allow members to create private repositories only, your organization must use {% data variables.product.prodname_ghe_cloud %}.{% endif %} For more information, see "[About repository visibility](/github/creating-cloning-and-archiving-repositories/about-repository-visibility)."

组织所有者始终可以创建任何类型的仓库。

{% if currentVersion == "free-pro-team@latest" %}Enterprise owners{% else %}Site administrators{% endif %} can restrict the options you have available for your organization's repository creation policy. For more information, see {% if currentVersion == "free-pro-team@latest" %}"[Enforcing repository management policies in your enterprise account](/github/setting-up-and-managing-your-enterprise/enforcing-repository-management-policies-in-your-enterprise-account)."{% else %}"[Restricting repository creation in your enterprise](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#setting-a-policy-for-repository-creation)."{% endif %}

{% warning %}

**警告**：此设置仅限制在仓库创建时可用的可见性选项，而不会限制以后更改仓库可见性的能力。 有关限制更改现有仓库可见性的更多信息，请参阅“[限制组织的仓库可见性更改](/github/setting-up-and-managing-organizations-and-teams/restricting-repository-visibility-changes-in-your-organization)”。

{% endwarning %}

{% data reusables.organizations.internal-repos-enterprise %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.member-privileges %}
5. Under "Repository creation", select one or more options. ![仓库创建选项](/assets/images/help/organizations/repo-creation-perms-radio-buttons.png)
6. 单击 **Save（保存）**。
