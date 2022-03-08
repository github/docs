---
title: Roles in an organization
intro: Organization owners can assign roles to individuals and teams giving them different sets of permissions in the organization.
redirect_from:
  - /articles/permission-levels-for-an-organization-early-access-program
  - /articles/permission-levels-for-an-organization
  - /github/setting-up-and-managing-organizations-and-teams/permission-levels-for-an-organization
  - /organizations/managing-peoples-access-to-your-organization-with-roles/permission-levels-for-an-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Roles in an organization
---

## About roles
{% data reusables.organizations.about-roles %}

Repository-level roles give organization members, outside collaborators and teams of people varying levels of access to repositories. 更多信息请参阅“[组织的仓库角色](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)”。

Team-level roles are roles that give permissions to manage a team. You can give any individual member of a team the team maintainer role, which gives the member a number of administrative permissions over a team. For more information, see "[Assigning the team maintainer role to a team member](/organizations/organizing-members-into-teams/assigning-the-team-maintainer-role-to-a-team-member)."

Organization-level roles are sets of permissions that can be assigned to individuals or teams to manage an organization and the organization's repositories, teams, and settings. For more information about all the roles available at the organization level, see "[About organization roles](#about-organization-roles)."

## About organization roles

You can assign individuals or teams to a variety of organization-level roles to control your members' access to your organization and its resources. For more details about the individual permissions included in each role, see "[Permissions for organization roles](#permissions-for-organization-roles)."

{% if enterprise-owner-join-org %}
If your organization is owned by an enterprise account, enterprise owners can choose to join your organization with any role. For more information, see "[Managing your role in an organization owned by your enterprise](/admin/user-management/managing-organizations-in-your-enterprise/managing-your-role-in-an-organization-owned-by-your-enterprise)."
{% endif %}

### Organization owners
Organization owners have complete administrative access to your organization. 此角色应限于组织中的少数几个人，但不少于两人。 更多信息请参阅“[管理组织的所有权连续性](/organizations/managing-peoples-access-to-your-organization-with-roles/maintaining-ownership-continuity-for-your-organization)”。

### 组织成员
The default, non-administrative role for people in an organization is the organization member. By default, organization members have a number of permissions, including the ability to create repositories and project boards.

{% ifversion fpt or ghec %}
### 帐单管理员
Billing managers are users who can manage the billing settings for your organization, such as payment information. This is a useful option if members of your organization don't usually have access to billing resources. For more information, see "[Adding a billing manager to your organization](/organizations/managing-peoples-access-to-your-organization-with-roles/adding-a-billing-manager-to-your-organization)."

{% endif %}

{% if security-managers %}
### Security managers

{% data reusables.organizations.security-manager-beta-note %}

{% data reusables.organizations.about-security-managers %}

If your organization has a security team, you can use the security manager role to give members of the team the least access they need to the organization. For more information, see "[Managing security managers in your organization](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."
{% endif %}
### {% data variables.product.prodname_github_app %} 管理员
默认情况下，只有组织所有者才可管理组织拥有的 {% data variables.product.prodname_github_apps %} 的设置。 要允许其他用户管理组织拥有的 {% data variables.product.prodname_github_apps %}，所有者可向他们授予 {% data variables.product.prodname_github_app %} 管理员权限。

指定用户为组织中 {% data variables.product.prodname_github_app %} 的管理员时，您可以授予他们对组织拥有的部分或全部 {% data variables.product.prodname_github_apps %} 的设置进行管理的权限。 更多信息请参阅：

- "[为组织添加 GitHub 应用程序管理员](/articles/adding-github-app-managers-in-your-organization)"
- "[从组织删除 GitHub 应用程序管理员](/articles/removing-github-app-managers-from-your-organization)"

### 外部协作者
在允许访问仓库时，为确保组织数据的安全，您可以添加*外部协作者*。 {% data reusables.organizations.outside_collaborators_description %}

## Permissions for organization roles

{% ifversion fpt %}
下面列出的一些功能仅限于使用 {% data variables.product.prodname_ghe_cloud %} 的组织。 {% data reusables.enterprise.link-to-ghec-trial %}
{% endif %}

{% ifversion fpt or ghec %}
<!--Dotcom and cloud version has extra column for Billing managers-->

| Organization permission                                                                                                                                                                                                                             |  所有者  |  成员   | 帐单管理员 |      Security managers      |
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:-----:|:-----:|:-----:|:---------------------------:|
| 创建仓库（详细信息请参阅“[限制在组织中创建仓库](/articles/restricting-repository-creation-in-your-organization)”）                                                                                                                                                         | **X** | **X** |       |            **X**            |
| 查看和编辑帐单信息                                                                                                                                                                                                                                           | **X** |       | **X** |                             |
| 邀请人员加入组织                                                                                                                                                                                                                                            | **X** |       |       |                             |
| 编辑和取消邀请加入组织                                                                                                                                                                                                                                         | **X** |       |       |                             |
| 从组织删除成员                                                                                                                                                                                                                                             | **X** |       |       |                             |
| 恢复组织的前成员                                                                                                                                                                                                                                            | **X** |       |       |                             |
| 添加和删除**所有团队**的人员                                                                                                                                                                                                                                    | **X** |       |       |                             |
| 将组织成员升级为*团队维护员*                                                                                                                                                                                                                                     | **X** |       |       |                             |
| 配置代码审查分配（请参阅“[管理团队的代码审查分配](/organizations/organizing-members-into-teams/managing-code-review-assignment-for-your-team)”）                                                                                                                            | **X** |       |       |                             |
| 设置预定提醒（请参阅“[管理拉取请求的预定提醒](/github/setting-up-and-managing-organizations-and-teams/managing-scheduled-reminders-for-pull-requests)”）                                                                                                                  | **X** |       |       |                             |
| 添加协作者到**所有仓库**                                                                                                                                                                                                                                      | **X** |       |       |                             |
| 访问组织审核日志                                                                                                                                                                                                                                            | **X** |       |       |                             |
| 编辑组织的资料页面（详细信息请参阅“[关于组织的资料](/github/setting-up-and-managing-your-github-profile/customizing-your-profile/about-your-organizations-profile)”）                                                                                                        | **X** |       |       |                             |
| 验证组织的域（详细信息请参阅“[验证组织的域](/articles/verifying-your-organization-s-domain)”）                                                                                                                                                                           | **X** |       |       |                             |
| 将电子邮件通知限于已经验证或批准的域名（有关详细信息，请参阅“[限制组织的电子邮件通知](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)”）                                                                                               | **X** |       |       |                             |
| 删除**所有团队**                                                                                                                                                                                                                                          | **X** |       |       |                             |
| 删除组织帐户，包括所有仓库                                                                                                                                                                                                                                       | **X** |       |       |                             |
| 创建团队（详细信息请参阅“[在组织中设置团队创建权限](/articles/setting-team-creation-permissions-in-your-organization)”）                                                                                                                                                     | **X** | **X** |       |            **X**            |
| [在组织的层次结构中移动团队](/articles/moving-a-team-in-your-organization-s-hierarchy)                                                                                                                                                                           | **X** |       |       |                             |
| 创建项目板（详细信息请参阅“[组织的项目板权限](/articles/project-board-permissions-for-an-organization)”）                                                                                                                                                                 | **X** | **X** |       |            **X**            |
| 查看所有组织成员和团队                                                                                                                                                                                                                                         | **X** | **X** |       |            **X**            |
| @提及任何可见团队                                                                                                                                                                                                                                           | **X** | **X** |       |            **X**            |
| 可成为*团队维护员*                                                                                                                                                                                                                                          | **X** | **X** |       |            **X**            |
| 查看组织洞见（详细信息请参阅“[查看用于组织的洞见](/articles/viewing-insights-for-your-organization)”）                                                                                                                                                                      | **X** | **X** |       |            **X**            |
| 查看并发布公共团队讨论到**所有团队**（详细信息请参阅“[关于团队讨论](/organizations/collaborating-with-your-team/about-team-discussions)”）                                                                                                                                         | **X** | **X** |       |            **X**            |
| 查看并发布私有团队讨论到**所有团队**（详细信息请参阅“[关于团队讨论](/organizations/collaborating-with-your-team/about-team-discussions)”）                                                                                                                                         | **X** |       |       |                             |
| 编辑和删除**所有团队**的团队讨论（详细信息请参阅“[管理破坏性评论](/communities/moderating-comments-and-conversations/managing-disruptive-comments)”）                                                                                                                             | **X** |       |       |                             |
| 隐藏对提交、拉取请求和议题的评论（详细信息请参阅“[管理破坏性评论](/communities/moderating-comments-and-conversations/managing-disruptive-comments/#hiding-a-comment)”）                                                                                                             | **X** | **X** |       |            **X**            |
| 对组织禁用团队讨论（详细信息请参阅“[对组织禁用团队讨论](/articles/disabling-team-discussions-for-your-organization)”）                                                                                                                                                         | **X** |       |       |                             |
| 管理组织依赖项洞见的显示（详细信息请参阅“[更改组织依赖项洞见的可见性](/articles/changing-the-visibility-of-your-organizations-dependency-insights)”）                                                                                                                                 | **X** |       |       |                             |
| 设置**所有团队**的团队头像（详细信息请参阅“[设置团队的头像](/articles/setting-your-team-s-profile-picture)”）                                                                                                                                                                  | **X** |       |       |                             |
| 赞助帐户和管理组织的赞助（更多信息请参阅“[赞助开源贡献者](/sponsors/sponsoring-open-source-contributors)”）                                                                                                                                                                     | **X** |       | **X** |            **X**            |
| 管理赞助帐户的电子邮件更新（更多信息请参阅“[管理组织赞助帐户的更新](/organizations/managing-organization-settings/managing-updates-from-accounts-your-organization-sponsors)”）                                                                                                      | **X** |       |       |                             |
| 将您的赞助归因于另一个组织（更多信息请参阅“[将赞助归因于组织](/sponsors/sponsoring-open-source-contributors/attributing-sponsorships-to-your-organization)”）                                                                                                                     | **X** |       |       |                             |
| 管理从组织中的仓库发布 {% data variables.product.prodname_pages %} 站点（请参阅“[管理组织的 {% data variables.product.prodname_pages %} 站点发布](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)”了解详细信息） | **X** |       |       |                             |
| 管理安全性和分析设置（详情请参阅“[管理组织的安全性和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”）                                                                                                   | **X** |       |       |            **X**            |
| View the security overview for the organization (see "[About the security overview](/code-security/security-overview/about-the-security-overview)" for details)                                                                                     | **X** |       |       | **X** |{% ifversion ghec %}
| 启用并实施 [SAML 单点登录](/articles/about-identity-and-access-management-with-saml-single-sign-on)                                                                                                                                                          | **X** |       |       |                             |
| [管理用户对组织的 SAML 访问](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization)                                                                                    | **X** |       |       |                             |
| 管理组织的 SSH 认证中心（详细信息请参阅“[管理组织的 SSH 认证中心](/articles/managing-your-organizations-ssh-certificate-authorities)”）                                                                                                                                        | **X** |       |       |        
{% endif %}
| 转让仓库                                                                                                                                                                                                                                                | **X** |       |       |                             |
| 购买、安装、管理其帐单以及取消 {% data variables.product.prodname_marketplace %} 应用程序                                                                                                                                                                              | **X** |       |       |                             |
| 列出 {% data variables.product.prodname_marketplace %} 中的应用程序                                                                                                                                                                                         | **X** |       |       |                             |
| 接收所有组织仓库[关于易受攻击的依赖项的 {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)                                                                                 | **X** |       |       |            **X**            |
| 管理 {% data variables.product.prodname_dependabot_security_updates %}（请参阅“[关于 {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)”）                  | **X** |       |       |            **X**            |
| [管理复刻策略](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization)                                                                                                                                           | **X** |       |       |                             |
| [限制组织中公共仓库的活动](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization)                                                                                                                                       | **X** |       |       |                             |
| Pull (read) *all repositories* in the organization                                                                                                                                                                                                  | **X** |       |       |            **X**            |
| Push (write) and clone (copy) *all repositories* in the organization                                                                                                                                                                                | **X** |       |       |                             |
| 将组织成员转换为[外部协作者](#outside-collaborators)                                                                                                                                                                                                             | **X** |       |       |                             |
| [查看对组织仓库具有访问权限的人员](/articles/viewing-people-with-access-to-your-repository)                                                                                                                                                                         | **X** |       |       |                             |
| [导出具有组织仓库访问权限人员的列表](/articles/viewing-people-with-access-to-your-repository/#exporting-a-list-of-people-with-access-to-your-repository)                                                                                                             | **X** |       |       |                             |
| 管理默认分支名称（请参阅“[管理组织中仓库的默认标签](/organizations/managing-organization-settings/managing-the-default-branch-name-for-repositories-in-your-organization)”）                                                                                                 | **X** |       |       |                             |
| 管理默认标签（请参阅“[管理组织中仓库的默认标签](/articles/managing-default-labels-for-repositories-in-your-organization)”）                                                                                                                                                | **X** |       |       |    |{% ifversion ghec %}
| 启用团队同步（详情请参阅“[管理组织的团队同步](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)”）                                                                                                   | **X** |       |       |        
{% endif %}
| Manage pull request reviews in the organization (see "[Managing pull request reviews in your organization](/organizations/managing-organization-settings/managing-pull-request-reviews-in-your-organization)")                                      | **X** |       |       |                             |

{% elsif ghes > 3.2 or ghae-issue-4999 %}
<!--GHES 3.3+ and eventual GHAE release don't have the extra column for Billing managers, but have security managers-->

| 组织操作                                                                                                                                                                                                                                                |  所有者  |  成员   |              Security managers               |
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:-----:|:-----:|:--------------------------------------------:|
| 邀请人员加入组织                                                                                                                                                                                                                                            | **X** |       |                                              |
| 编辑和取消邀请加入组织                                                                                                                                                                                                                                         | **X** |       |                                              |
| 从组织删除成员                                                                                                                                                                                                                                             | **X** |       |                      |                       |
| 恢复组织的前成员                                                                                                                                                                                                                                            | **X** |       |                      |                       |
| 添加和删除**所有团队**的人员                                                                                                                                                                                                                                    | **X** |       |                                              |
| 将组织成员升级为*团队维护员*                                                                                                                                                                                                                                     | **X** |       |                                              |
| 配置代码审查分配（请参阅“[管理团队的代码审查分配](/organizations/organizing-members-into-teams/managing-code-review-assignment-for-your-team)”）                                                                                                                            | **X** |       |                                              |
| 添加协作者到**所有仓库**                                                                                                                                                                                                                                      | **X** |       |                                              |
| 访问组织审核日志                                                                                                                                                                                                                                            | **X** |       |                                              |
| 编辑组织的资料页面（详细信息请参阅“[关于组织的资料](/github/setting-up-and-managing-your-github-profile/customizing-your-profile/about-your-organizations-profile)”）                                                                                                        | **X** |       |         |{% ifversion ghes > 3.1 %}
| 验证组织的域（详细信息请参阅“[验证组织的域](/articles/verifying-your-organization-s-domain)”）                                                                                                                                                                           | **X** |       |                                              |
| 将电子邮件通知限于已经验证或批准的域名（有关详细信息，请参阅“[限制组织的电子邮件通知](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)”）                                                                                               | **X** |       |                 
{% endif %}
| 删除**所有团队**                                                                                                                                                                                                                                          | **X** |       |                                              |
| 删除组织帐户，包括所有仓库                                                                                                                                                                                                                                       | **X** |       |                                              |
| 创建团队（详细信息请参阅“[在组织中设置团队创建权限](/articles/setting-team-creation-permissions-in-your-organization)”）                                                                                                                                                     | **X** | **X** |                    **X**                     |
| 查看所有组织成员和团队                                                                                                                                                                                                                                         | **X** | **X** |                    **X**                     |
| @提及任何可见团队                                                                                                                                                                                                                                           | **X** | **X** |                    **X**                     |
| 可成为*团队维护员*                                                                                                                                                                                                                                          | **X** | **X** |                    **X**                     |
| 转让仓库                                                                                                                                                                                                                                                | **X** |       |                                              |
| 管理安全性和分析设置（详情请参阅“[管理组织的安全性和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”）                                                                                                   | **X** |       |      **X** |{% ifversion ghes > 3.1 %}
| View the security overview for the organization (see "[About the security overview](/code-security/security-overview/about-the-security-overview)" for details)                                                                                     | **X** |       | **X** |{% endif %}{% ifversion ghes > 3.2 %}
| 管理 {% data variables.product.prodname_dependabot_security_updates %}（请参阅“[关于 {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)”）                  | **X** |       |              **X** 
{% endif %}
| 管理组织的 SSH 认证中心（详细信息请参阅“[管理组织的 SSH 认证中心](/articles/managing-your-organizations-ssh-certificate-authorities)”）                                                                                                                                        | **X** |       |                                              |
| 创建项目板（详细信息请参阅“[组织的项目板权限](/articles/project-board-permissions-for-an-organization)”）                                                                                                                                                                 | **X** | **X** |                    **X**                     |
| 查看并发布公共团队讨论到**所有团队**（详细信息请参阅“[关于团队讨论](/organizations/collaborating-with-your-team/about-team-discussions)”）                                                                                                                                         | **X** | **X** |                    **X**                     |
| 查看并发布私有团队讨论到**所有团队**（详细信息请参阅“[关于团队讨论](/organizations/collaborating-with-your-team/about-team-discussions)”）                                                                                                                                         | **X** |       |                                              |
| 编辑和删除**所有团队**中的团队讨论（更多信息请参阅“[管理破坏性评论](/communities/moderating-comments-and-conversations/managing-disruptive-comments)”）                                                                                                                            | **X** |       |                      |                       |
| 隐藏对提交、拉取请求和议题的评论（详细信息请参阅“[管理破坏性评论](/communities/moderating-comments-and-conversations/managing-disruptive-comments/#hiding-a-comment)”）                                                                                                             | **X** | **X** |                    **X**                     |
| 对组织禁用团队讨论（详细信息请参阅“[对组织禁用团队讨论](/articles/disabling-team-discussions-for-your-organization)”）                                                                                                                                                         | **X** |       |                                              |
| 设置**所有团队**的团队头像（详细信息请参阅“[设置团队的头像](/articles/setting-your-team-s-profile-picture)”）                                                                                                                                                                  | **X** |       |         |{% ifversion ghes > 3.0 %}
| 管理从组织中的仓库发布 {% data variables.product.prodname_pages %} 站点（请参阅“[管理组织的 {% data variables.product.prodname_pages %} 站点发布](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)”了解详细信息） | **X** |       |                 
{% endif %}
| [在组织的层次结构中移动团队](/articles/moving-a-team-in-your-organization-s-hierarchy)                                                                                                                                                                           | **X** |       |                                              |
| Pull (read) *all repositories* in the organization                                                                                                                                                                                                  | **X** |       |                    **X**                     |
| Push (write) and clone (copy) *all repositories* in the organization                                                                                                                                                                                | **X** |       |                                              |
| 将组织成员转换为[外部协作者](#outside-collaborators)                                                                                                                                                                                                             | **X** |       |                                              |
| [查看对组织仓库具有访问权限的人员](/articles/viewing-people-with-access-to-your-repository)                                                                                                                                                                         | **X** |       |                                              |
| [导出具有组织仓库访问权限人员的列表](/articles/viewing-people-with-access-to-your-repository/#exporting-a-list-of-people-with-access-to-your-repository)                                                                                                             | **X** |       |                                              |
| 管理默认标签（请参阅“[管理组织中仓库的默认标签](/articles/managing-default-labels-for-repositories-in-your-organization)”）                                                                                                                                                | **X** |       |    |{% if pull-request-approval-limit %}
| Manage pull request reviews in the organization (see "[Managing pull request reviews in your organization](/organizations/managing-organization-settings/managing-pull-request-reviews-in-your-organization)")                                      | **X** |       |               |  
{% endif %}
{% ifversion ghae %}| Manage IP allow lists (see "[Restricting network traffic to your enterprise](/admin/configuration/restricting-network-traffic-to-your-enterprise)") | **X** | |  |{% endif %}


{% else %}
<!--GHES and GHAE older versions don't have the extra column for Billing managers or Security managers-->

| 组织操作                                                                                                                                                                                                                                                |  所有者  |               成员               |
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:-----:|:------------------------------:|
| 邀请人员加入组织                                                                                                                                                                                                                                            | **X** |                                |
| 编辑和取消邀请加入组织                                                                                                                                                                                                                                         | **X** |                                |
| 从组织删除成员                                                                                                                                                                                                                                             | **X** |               |                |
| 恢复组织的前成员                                                                                                                                                                                                                                            | **X** |               |                |
| 添加和删除**所有团队**的人员                                                                                                                                                                                                                                    | **X** |                                |
| 将组织成员升级为*团队维护员*                                                                                                                                                                                                                                     | **X** |                                |
| Configure code review assignments (see "[Managing code review settings for your team](/organizations/organizing-members-into-teams/managing-code-review-settings-for-your-team)"))                                                                  | **X** |                                |
| 添加协作者到**所有仓库**                                                                                                                                                                                                                                      | **X** |                                |
| 访问组织审核日志                                                                                                                                                                                                                                            | **X** |                                |
| 编辑组织的资料页面（详细信息请参阅“[关于组织的资料](/github/setting-up-and-managing-your-github-profile/customizing-your-profile/about-your-organizations-profile)”）                                                                                                        | **X** | |  |{% ifversion ghes > 3.1 %}
| 验证组织的域（详细信息请参阅“[验证组织的域](/articles/verifying-your-organization-s-domain)”）                                                                                                                                                                           | **X** |                                |
| 将电子邮件通知限于已经验证或批准的域名（有关详细信息，请参阅“[限制组织的电子邮件通知](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)”）                                                                                               | **X** |          
{% endif %}
| 删除**所有团队**                                                                                                                                                                                                                                          | **X** |                                |
| 删除组织帐户，包括所有仓库                                                                                                                                                                                                                                       | **X** |                                |
| 创建团队（详细信息请参阅“[在组织中设置团队创建权限](/articles/setting-team-creation-permissions-in-your-organization)”）                                                                                                                                                     | **X** |             **X**              |
| 查看所有组织成员和团队                                                                                                                                                                                                                                         | **X** |             **X**              |
| @提及任何可见团队                                                                                                                                                                                                                                           | **X** |             **X**              |
| 可成为*团队维护员*                                                                                                                                                                                                                                          | **X** |             **X**              |
| 转让仓库                                                                                                                                                                                                                                                | **X** |                                |
| 管理组织的 SSH 认证中心（详细信息请参阅“[管理组织的 SSH 认证中心](/articles/managing-your-organizations-ssh-certificate-authorities)”）                                                                                                                                        | **X** |                                |
| 创建项目板（详细信息请参阅“[组织的项目板权限](/articles/project-board-permissions-for-an-organization)”）                                                                                                                                                                 | **X** |            **X** |             |
| 查看并发布公共团队讨论到**所有团队**（详细信息请参阅“[关于团队讨论](/organizations/collaborating-with-your-team/about-team-discussions)”）                                                                                                                                         | **X** |            **X** |             |
| 查看并发布私有团队讨论到**所有团队**（详细信息请参阅“[关于团队讨论](/organizations/collaborating-with-your-team/about-team-discussions)”）                                                                                                                                         | **X** |               |                |
| 编辑和删除**所有团队**中的团队讨论（更多信息请参阅“[管理破坏性评论](/communities/moderating-comments-and-conversations/managing-disruptive-comments)”）                                                                                                                            | **X** |               |                |
| 隐藏对提交、拉取请求和议题的评论（详细信息请参阅“[管理破坏性评论](/communities/moderating-comments-and-conversations/managing-disruptive-comments/#hiding-a-comment)”）                                                                                                             | **X** |         **X** | **X**          |
| 对组织禁用团队讨论（详细信息请参阅“[对组织禁用团队讨论](/articles/disabling-team-discussions-for-your-organization)”）                                                                                                                                                         | **X** |               |                |
| 设置**所有团队**的团队头像（详细信息请参阅“[设置团队的头像](/articles/setting-your-team-s-profile-picture)”）                                                                                                                                                                  | **X** | |  |{% ifversion ghes > 3.0 %}
| 管理从组织中的仓库发布 {% data variables.product.prodname_pages %} 站点（请参阅“[管理组织的 {% data variables.product.prodname_pages %} 站点发布](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)”了解详细信息） | **X** |          
{% endif %}
| [在组织的层次结构中移动团队](/articles/moving-a-team-in-your-organization-s-hierarchy)                                                                                                                                                                           | **X** |               |                |
| 拉取（读取）、推送（写入）和克隆（复制）组织中的*所有仓库*                                                                                                                                                                                                                      | **X** |                                |
| 将组织成员转换为[外部协作者](#outside-collaborators)                                                                                                                                                                                                             | **X** |                                |
| [查看对组织仓库具有访问权限的人员](/articles/viewing-people-with-access-to-your-repository)                                                                                                                                                                         | **X** |                                |
| [导出具有组织仓库访问权限人员的列表](/articles/viewing-people-with-access-to-your-repository/#exporting-a-list-of-people-with-access-to-your-repository)                                                                                                             | **X** |                                |
| 管理默认标签（请参阅“[管理组织中仓库的默认标签](/articles/managing-default-labels-for-repositories-in-your-organization)”）                                                                                                                                                | **X** |                                |
{% ifversion ghae %}| 管理 IP 允许列表（请参阅“[限制到企业的网络流量](/admin/configuration/restricting-network-traffic-to-your-enterprise)”）| **X** |{% endif %}

{% endif %}

## 延伸阅读

- "[组织的仓库角色](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)"
- "[组织的项目板权限](/organizations/managing-access-to-your-organizations-project-boards/project-board-permissions-for-an-organization)"
