---
title: 添加外部协作者到组织的仓库
intro: '*外部协作者*并未明确是组织的成员，但对组织中的一个或多个仓库具有、读取、写入或管理员权限。'
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

{% data reusables.organizations.outside-collaborators-use-seats %}

An organization owner can restrict the ability to invite collaborators. 更多信息请参阅“[设置添加外部协作者的权限](/articles/setting-permissions-for-adding-outside-collaborators)”。.

{% ifversion ghes %}
Before you can add someone as an outside collaborator on a repository, the person must have a user account on {% data variables.product.product_location %}. If your enterprise uses an external authentication system such as SAML or LDAP, the person you want to add must sign in through that system to create an account. If the person does not have access to the authentication system and built-in authentication is enabled for your enterprise, a site admin can create a user account for the person. 更多信息请参阅“[使用内置身份验证](/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance/using-built-in-authentication#inviting-users)”。
{% endif %}

{% ifversion not ghae %}
如果您的组织[要求成员和外部协作者使用双重身份验证](/articles/requiring-two-factor-authentication-in-your-organization)，则他们必须启用双重身份验证后才可接受您的邀请，协作处理组织仓库。
{% endif %}

{% data reusables.organizations.outside_collaborator_forks %}

{% ifversion fpt %}
为了进一步支持团队的协作能力，您可以升级到 {% data variables.product.prodname_ghe_cloud %}，其中包括受保护的分支机构和私有仓库的代码所有者等功能。 {% data reusables.enterprise.link-to-ghec-trial %}
{% endif %}

## 添加外部协作者到仓库

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% ifversion fpt or ghec %}
{% data reusables.repositories.navigate-to-manage-access %}
{% data reusables.organizations.invite-teams-or-people %}
5. 在搜索字段中，开始键入您想邀请的人员的姓名，然后单击匹配列表中的姓名。 ![搜索字段以键入要邀请加入仓库的人员姓名](/assets/images/help/repository/manage-access-invite-search-field.png)
6. 在“Choose a role（选择角色）”下，选择要授予此人的权限，然后单击 **Add NAME to REPOSITORY（将姓名添加到仓库）**。 ![为此人选择权限](/assets/images/help/repository/manage-access-invite-choose-role-add.png)
{% else %}
5. 在左侧边栏中，单击 **Collaborators & teams（协作者和团队）**。 ![突出显示协作者和团队的仓库设置侧边栏](/assets/images/help/repository/org-repo-settings-collaborators-and-teams.png)
6. 在 "Collaborators"（协作者）下，输入您要授权其访问仓库的人员的名称，然后单击 **Add collaborator（添加协作者）**。 ![在搜索字段中输入了 Octocat 用户名的协作者部分](/assets/images/help/repository/org-repo-collaborators-find-name.png)
7. 在新协作者名称旁边，选择适当的权限级别：*写入*、*读取*或*管理员*。 ![仓库权限选择器](/assets/images/help/repository/org-repo-collaborators-choose-permissions.png)
{% endif %}
