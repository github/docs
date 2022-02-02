---
title: 限制在组织中创建仓库
intro: 为保护组织的数据，您可以配置在组织中创建仓库的权限。
redirect_from:
  - /articles/restricting-repository-creation-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/restricting-repository-creation-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: 限制仓库创建
---

您可以选择成员是否可以在组织中创建仓库。 If you allow members to create repositories, you can choose which types of repositories members can create.{% ifversion fpt or ghec %} To allow members to create private repositories only, your organization must use {% data variables.product.prodname_ghe_cloud %}.{% endif %}{% ifversion fpt %} For more information, see "[About repositories](/enterprise-cloud@latest/repositories/creating-and-managing-repositories/about-repositories)" in the {% data variables.product.prodname_ghe_cloud %} documentation{% endif %}.

组织所有者始终可以创建任何类型的仓库。
{% ifversion ghec or ghae or ghes %}
{% ifversion ghec or ghae %}Enterprise owners{% elsif ghes %}Site administrators{% endif %} can restrict the options you have available for your organization's repository creation policy.{% ifversion ghec or ghes or ghae %} For more information, see "[Restricting repository creation in your enterprise](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#setting-a-policy-for-repository-creation)."{% endif %}{% endif %}

{% warning %}

**警告**：此设置仅限制在仓库创建时可用的可见性选项，而不会限制以后更改仓库可见性的能力。 For more information about restricting changes to existing repositories' visibilities, see "[Restricting repository visibility changes in your organization](/organizations/managing-organization-settings/restricting-repository-visibility-changes-in-your-organization)."

{% endwarning %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}
5. Under "Repository creation", select one or more options.

   {%- ifversion ghes or ghec or ghae %}
   ![仓库创建选项](/assets/images/help/organizations/repo-creation-perms-radio-buttons.png)
   {%- elsif fpt %}
   ![仓库创建选项](/assets/images/help/organizations/repo-creation-perms-radio-buttons-fpt.png)
   {%- endif %}
6. 单击 **Save（保存）**。
