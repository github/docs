---
title: 添加外部协作者到组织的仓库
intro: 您可以允许不属于您组织成员的人员访问您的组织拥有的仓库。
redirect_from:
  - /articles/adding-outside-collaborators-to-repositories-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/adding-outside-collaborators-to-repositories-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: 添加外部协作者
permissions: People with admin access to a repository can add an outside collaborator to the repository.
---

## 关于外部协作者

外部协作者是指不是您组织的成员，但有权访问您组织的一个或多个仓库的人员。 您可以选择要为每个外部协作者授予的访问权限级别。 {% data reusables.organizations.outside_collaborator_forks %}

{% data reusables.organizations.outside-collaborators-use-seats %}

{% ifversion fpt %}
使用 {% data variables.product.prodname_ghe_cloud %} 的组织可以限制邀请协作者的能力。 更多信息请参阅 {% data variables.product.prodname_ghe_cloud %} 文档中的“[设置添加外部协作者的权限](/enterprise-cloud@latest/organizations/managing-organization-settings/setting-permissions-for-adding-outside-collaborators)”。
{% else %}
组织所有者可以限制邀请协作者的能力。 更多信息请参阅“[设置添加外部协作者的权限](/organizations/managing-organization-settings/setting-permissions-for-adding-outside-collaborators)”。.
{% endif %}

{% ifversion ghes %}
要将某人添加为仓库的外部协作者，此人必须在 {% data variables.product.product_location %} 上拥有个人帐户。 如果您的企业使用外部身份验证系统（如 SAML 或 LDAP），则要添加的人员必须通过该系统登录才能创建帐户。 If the person does not have access to the authentication system and built-in authentication is enabled for your enterprise, a site administrator can create an account for the person. For more information, see "[Configuring built-in authentication](/admin/identity-and-access-management/using-built-in-authentication/configuring-built-in-authentication)."
{% endif %}

{% ifversion not ghae %}
如果您的组织需要双重身份验证，则在接受您的邀请以在仓库上进行协作之前，所有外部协作者都必须启用双重身份验证。 更多信息请参阅“[您的组织中需要双重身份验证](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization)”。
{% endif %}

## 添加外部协作者到仓库

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %}
您可以在仓库设置中授予外部协作者访问仓库的权限。 更多信息请参阅“[管理有权访问仓库的团队和人员](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository#inviting-a-team-or-person)”。
{% else %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
5. 在左侧边栏中，单击 **Collaborators & teams（协作者和团队）**。 ![突出显示协作者和团队的仓库设置侧边栏](/assets/images/help/repository/org-repo-settings-collaborators-and-teams.png)
6. 在 "Collaborators"（协作者）下，输入您要授权其访问仓库的人员的名称，然后单击 **Add collaborator（添加协作者）**。 ![在搜索字段中输入了 Octocat 用户名的协作者部分](/assets/images/help/repository/org-repo-collaborators-find-name.png)
7. 在新协作者的姓名旁边，使用下拉菜单并选择适当的访问权限级别。 ![仓库权限选择器](/assets/images/help/repository/org-repo-collaborators-choose-permissions.png)
{% endif %}
