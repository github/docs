---
title: 限制在组织中创建仓库
intro: 为保护组织的数据，您可以配置在组织中创建仓库的权限。
redirect_from:
  - /articles/restricting-repository-creation-in-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

您可以选择成员是否可以在组织中创建仓库。 如果允许成员创建仓库，您可以选择允许创建哪些类型的仓库。{% if currentVersion == "free-pro-team@latest" %} 若只允许成员创建私有仓库，您的组织必须使用 {% data variables.product.prodname_ghe_cloud %}。{% endif %}更多信息请参阅“[关于仓库可见性](/github/creating-cloning-and-archiving-repositories/about-repository-visibility)”。

组织所有者始终可以创建任何类型的仓库。

{% if currentVersion == "free-pro-team@latest" %}企业所有者{% else %}网站管理员{% endif %} 可以限制用于组织仓库创建策略的选项。 更多信息请参阅{% if currentVersion == "free-pro-team@latest" %}“[在企业帐户中实施仓库管理策略](/github/setting-up-and-managing-your-enterprise-account/enforcing-repository-management-policies-in-your-enterprise-account)”。{% else %}“[限制实例中的仓库创建](/enterprise/admin/user-management/restricting-repository-creation-in-your-instance)”。{% endif %}

{% warning %}

**Warning**: This setting only restricts the visibility options available when repositories are created and does not restrict the ability to change repository visibility at a later time. For more information about restricting changes to existing repositories' visibilities, see "[Restricting repository visibility changes in your organization](/github/setting-up-and-managing-organizations-and-teams/restricting-repository-visibility-changes-in-your-organization)."

{% endwarning %}

{% data reusables.organizations.internal-repos-enterprise %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.member-privileges %}
5. 在“Repository creation（仓库创建）”下，选择{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}一个或多个选项{% else %}设置{% endif %}。 ![仓库创建选项](/assets/images/help/organizations/repo-creation-perms-radio-buttons.png)
6. 单击 **Save（保存）**。
