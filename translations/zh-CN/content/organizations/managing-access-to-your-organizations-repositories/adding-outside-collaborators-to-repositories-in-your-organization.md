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

组织所有者可以限制邀请协作者的能力。 更多信息请参阅“[设置添加外部协作者的权限](/articles/setting-permissions-for-adding-outside-collaborators)”。.

{% ifversion ghes %}
要将某人添加为仓库的外部协作者，此人必须在 {% data variables.product.product_location %} 上拥有用户帐户。 如果您的企业使用外部身份验证系统（如 SAML 或 LDAP），则要添加的人员必须通过该系统登录才能创建帐户。 如果此人无权访问身份验证系统，并且为您的企业启用了内置身份验证，则站点管理员可以为该人员创建用户帐户。 更多信息请参阅“[使用内置身份验证](/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance/using-built-in-authentication#inviting-users)”。
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
{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
{% data reusables.repositories.click-collaborators-teams %}
{% data reusables.organizations.invite-teams-or-people %}
5. 在搜索字段中，开始键入您想邀请的人员的姓名，然后单击匹配列表中的姓名。 ![搜索字段以键入要邀请加入仓库的人员姓名](/assets/images/help/repository/manage-access-invite-search-field.png)
6. 在“Choose a role（选择角色）”下，选择要授予此人的权限，然后单击 **Add NAME to REPOSITORY（将姓名添加到仓库）**。 ![为此人选择权限](/assets/images/help/repository/manage-access-invite-choose-role-add.png)
{% else %}
5. 在左侧边栏中，单击 **Collaborators & teams（协作者和团队）**。 ![突出显示协作者和团队的仓库设置侧边栏](/assets/images/help/repository/org-repo-settings-collaborators-and-teams.png)
6. 在 "Collaborators"（协作者）下，输入您要授权其访问仓库的人员的名称，然后单击 **Add collaborator（添加协作者）**。 ![在搜索字段中输入了 Octocat 用户名的协作者部分](/assets/images/help/repository/org-repo-collaborators-find-name.png)
7. 在新协作者名称旁边，选择适当的权限级别：*写入*、*读取*或*管理员*。 ![仓库权限选择器](/assets/images/help/repository/org-repo-collaborators-choose-permissions.png)
{% endif %}
