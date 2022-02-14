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

您可以选择成员是否可以在组织中创建仓库。 {% ifversion ghec or ghes or ghae %}If you allow members to create repositories, you can choose which types of repositories members can create.{% elsif fpt %}If you allow members to create repositories, you can choose whether members can create both public and private repositories or public repositories only.{% endif %} Organization owners can always create any type of repository.

{% ifversion fpt %}
Organizations using {% data variables.product.prodname_ghe_cloud %} can also restrict members to creating private repositories only. For more information, see [the {% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/organizations/managing-organization-settings/restricting-repository-creation-in-your-organization).
{% endif %}

{% ifversion ghec or ghae or ghes %}
Enterprise owners can restrict the options you have available for your organization's repository creation policy. 更多信息请参阅“[在企业中实施仓库管理策略](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-repository-creation)”。
{% endif %}

{% warning %}

**警告**：此设置仅限制在仓库创建时可用的可见性选项，而不会限制以后更改仓库可见性的能力。 有关限制更改现有仓库可见性的更多信息，请参阅“[限制组织的仓库可见性更改](/organizations/managing-organization-settings/restricting-repository-visibility-changes-in-your-organization)”。

{% endwarning %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}
5. 在“Repository creation（仓库创建）”下，选择一个或多个选项。

   {%- ifversion ghes or ghec or ghae %}
   ![仓库创建选项](/assets/images/help/organizations/repo-creation-perms-radio-buttons.png)
   {%- elsif fpt %}
   ![仓库创建选项](/assets/images/help/organizations/repo-creation-perms-radio-buttons-fpt.png)

   {% note %}

   **Note:** To restrict members to creating private repositories only, your organization must use {% data variables.product.prodname_ghe_cloud %}.

   {% endnote %}
   {%- endif %}

6. 单击 **Save（保存）**。
