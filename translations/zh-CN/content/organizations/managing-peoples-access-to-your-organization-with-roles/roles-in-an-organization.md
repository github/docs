---
title: 组织中的角色
intro: 组织所有者可以将角色分配给个人和团队，从而在组织中为他们提供不同的权限集。
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
ms.openlocfilehash: f9e5d411c7a7a16e22abcc660f2761f1bfd6cf7d
ms.sourcegitcommit: c562c85cc75ffe1eb4e9595d8adc09ec71697ab1
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180075'
---
## 关于角色
{% data reusables.organizations.about-roles %}

存储库级别角色为组织成员、外部协作者和团队提供不同级别的存储库访问权限。 有关详细信息，请参阅“[组织的存储库角色](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)”。

团队级别角色是授予管理团队的权限的角色。 您可以为团队的任何单个成员授予团队维护者角色，授予该成员对团队的诸多管理权限。 有关详细信息，请参阅“[将团队维护员角色分配给团队成员](/organizations/organizing-members-into-teams/assigning-the-team-maintainer-role-to-a-team-member)”。

组织级角色是可分配给个人或团队以管理组织及组织的存储库、团队和设置的权限集。 有关组织级可用的所有角色的详细信息，请参阅“[关于组织角色](#about-organization-roles)”。

## 关于组织角色

您可以将个人或团队分配到各种组织级角色，以控制成员对组织及其资源的访问权限。 若要详细了解每个角色中包含的各个权限，请参阅“[组织角色的权限](#permissions-for-organization-roles)”。

{% ifversion enterprise-owner-join-org %} 如果组织归企业帐户所有，则企业所有者可选择以任何角色加入组织。 有关详细信息，请参阅“[管理企业拥有的组织中的角色](/admin/user-management/managing-organizations-in-your-enterprise/managing-your-role-in-an-organization-owned-by-your-enterprise)”。
{% endif %}

### 组织所有者
组织所有者对组织具有完全管理权限。 此角色应限于组织中的少数几个人，但不少于两人。 有关详细信息，请参阅“[保持组织的所有权连续性](/organizations/managing-peoples-access-to-your-organization-with-roles/maintaining-ownership-continuity-for-your-organization)”。

### 组织成员
组织中人员的默认非管理角色是组织成员。 默认情况下，组织成员具有许多权限，包括能够创建存储库和项目板。

{% ifversion fpt or ghec %}
### 组织审核员
审核员是组织成员，除了其作为成员的权限外，他们还可阻止和取消阻止非成员贡献者、设置交互限制，并可在组织拥有的公共存储库中隐藏评论。 有关详细信息，请参阅“[管理组织中的审核员](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-moderators-in-your-organization)”。

### 帐单管理员
帐单管理员是可以管理组织的帐单设置（如付款信息）的用户。 如果组织成员通常无权访问计费资源，则这是一个有用的选项。 有关详细信息，请参阅“[为组织添加账单管理员](/organizations/managing-peoples-access-to-your-organization-with-roles/adding-a-billing-manager-to-your-organization)”。

{% endif %}

{% ifversion security-managers %}
### 安全管理员

{% data reusables.organizations.security-manager-beta-note %}

{% data reusables.organizations.about-security-managers %}

如果您的组织具有安全团队，则可以使用安全管理员角色为团队成员提供他们对组织所需的最少访问权限。 有关详细信息，请参阅“[管理组织中的安全管理员](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)”。
{% endif %}
### {% data variables.product.prodname_github_app %} 管理员
默认情况下，只有组织所有者才可管理组织拥有的 {% data variables.product.prodname_github_apps %} 的设置。 要允许其他用户管理组织拥有的 {% data variables.product.prodname_github_apps %}，所有者可向他们授予 {% data variables.product.prodname_github_app %} 管理员权限。

指定用户为组织中 {% data variables.product.prodname_github_app %} 的管理员时，您可以授予他们对组织拥有的部分或全部 {% data variables.product.prodname_github_apps %} 的设置进行管理的权限。 有关详细信息，请参阅：

- [为组织添加 GitHub 应用程序管理员](/articles/adding-github-app-managers-in-your-organization)
- [从组织中删除 GitHub 应用程序管理员](/articles/removing-github-app-managers-from-your-organization)

### 外部协作者
在授予存储库访问权限时，为确保组织数据的安全，可添加外部协作者。 {% data reusables.organizations.outside_collaborators_description %}

## 组织角色的权限

{% ifversion fpt %} 下面列出的一些功能仅限于使用 {% data variables.product.prodname_ghe_cloud %} 的组织。 {% data reusables.enterprise.link-to-ghec-trial %} {% endif %}

{% ifversion fpt or ghec %}
<!-- Free/Pro/Team and GHEC versions have extra columns for Moderators and Billing managers-->

| 组织权限 | 所有者 | 成员 | 审核员 | 帐单管理员 | 安全管理员 |
|:------------------------|:------:|:-------:|:----------:|:----------------:|:-----------------:|
| 创建存储库（请参阅“[限制在组织中创建存储库](/articles/restricting-repository-creation-in-your-organization)”） | **X** | **X** | **X** |  | **X**  |
| 查看和编辑帐单信息 | **X** |  |  | **X** |  |
| 邀请人员加入组织 | **X** |  |  |  |  |
| 编辑和取消邀请加入组织 | **X** |  |  |  |  |
| 从组织删除成员 | **X** |  |  |  |  |
| 恢复组织的前成员 | **X** |  |  |  |  |
| 添加和删除所有团队的人员 | **X** |  |  |  |  |
| 将组织成员升级为团队维护员 | **X** |  |  |  |  |
| 配置代码评审分配（请参阅“[管理团队的代码评审分配](/organizations/organizing-members-into-teams/managing-code-review-assignment-for-your-team)”） | **X** |  |  |  |  |
| 设置预定提醒（请参阅“[管理拉取请求的预定提醒](/github/setting-up-and-managing-organizations-and-teams/managing-scheduled-reminders-for-pull-requests)”） | **X** |  |  |  |  |
| 将协作者添加到所有存储库 | **X** |  |  |  |  |
| 访问组织审核日志 | **X** |  |  |  |  |
| 编辑组织的资料页（请参阅“[关于组织的资料](/github/setting-up-and-managing-your-github-profile/customizing-your-profile/about-your-organizations-profile)”） | **X** |  |  |  |  |{% ifversion ghec %}
| 验证组织的域（请参阅“[验证组织的域](/articles/verifying-your-organization-s-domain)”） | **X** |  |  |  |  |
| 将电子邮件通知限制为经验证或批准的域（请参阅“[限制组织的电子邮件通知](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)”） | **X** |  |  |  |  |{% endif %}
| 删除所有团队 | **X** |  |  |  |  |
| 删除组织帐户，包括所有仓库 | **X** |  |  |  |  |
| 创建团队（请参阅“[设置组织中的团队创建权限](/articles/setting-team-creation-permissions-in-your-organization)”） | **X** | **X** | **X** |  | **X**  |
| [在组织的层次结构中移动团队](/articles/moving-a-team-in-your-organization-s-hierarchy) | **X** |  |  |  |  |
| 创建项目板（请参阅“[组织的项目板权限](/articles/project-board-permissions-for-an-organization)”） | **X** | **X** | **X** |  | **X**  |
| 查看所有组织成员和团队 | **X** | **X** | **X** |  | **X**  |
| 使用 @mention 提及任何可见团队 | **X** | **X** | **X** |  | **X**  |
| 可设为团队维护员 | **X** | **X** | **X** |  | **X** |{% ifversion ghec %}
| 查看组织见解（请参阅“[查看组织的见解](/articles/viewing-insights-for-your-organization)”） | **X** | **X** | **X** |  | **X**  |{% endif %}
| 查看公共团队讨论并将其发布给所有团队（请参阅“[关于团队讨论](/organizations/collaborating-with-your-team/about-team-discussions)”） | **X** | **X** | **X** |  | **X**  |
| 查看专用团队讨论并将其发布给所有团队（请参阅“[关于团队讨论](/organizations/collaborating-with-your-team/about-team-discussions)”） | **X** |  |  |  |  |
| 编辑和删除所有团队中的团队讨论（请参阅“[管理破坏性评论](/communities/moderating-comments-and-conversations/managing-disruptive-comments)”） | **X** |  |  |  |  |
| 对组织禁用团队讨论（请参阅“[对组织禁用团队讨论](/articles/disabling-team-discussions-for-your-organization)”） | **X** |  |  |  |  |
| 隐藏对可编写的提交、拉取请求和问题的评论（请参阅“[管理破坏性评论](/communities/moderating-comments-and-conversations/managing-disruptive-comments/#hiding-a-comment)”） | **X** | **X** | **X** |  | **X** |
| 隐藏对所有提交、拉取请求和问题的评论（请参阅“[管理破坏性评论](/communities/moderating-comments-and-conversations/managing-disruptive-comments/#hiding-a-comment)”） | **X** |  | **X** |  | **X** |
| 阻止和取消阻止非成员贡献者（请参阅“[阻止用户访问组织](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization)”） | **X** |  | **X** |  |  |
| 限制公共存储库中某些用户的交互（请参阅“[限制组织中的交互](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization)”） | **X** |  | **X** |  |  |{% ifversion ghec %}
| 管理组织依赖项见解的显示（请参阅“[更改组织的依赖项见解的可见性](/articles/changing-the-visibility-of-your-organizations-dependency-insights)”） | **X** |  |  |  |  |{% endif %}
| 设置所有团队的团队头像（请参阅“[设置团队的头像](/articles/setting-your-team-s-profile-picture)”） | **X** |  |  |  |  |
| 赞助帐户和管理组织的赞助（请参阅“[赞助开源贡献者](/sponsors/sponsoring-open-source-contributors)”） | **X** |  |  | **X** | **X**  |
| 管理赞助帐户的电子邮件更新（请参阅“[管理组织赞助者的帐户更新](/organizations/managing-organization-settings/managing-updates-from-accounts-your-organization-sponsors)”） | **X** |  |  |  |  |
| 将赞助归因于另一个组织（有关详细信息，请参阅“[将赞助归因于组织](/sponsors/sponsoring-open-source-contributors/attributing-sponsorships-to-your-organization)”） | **X** |  |  |  |  |
| 管理组织存储库中的 {% data variables.product.prodname_pages %} 站点发布（请参阅“[管理组织的 {% data variables.product.prodname_pages %} 站点发布](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)”） | **X** |  |  |  |  |
| 管理安全和分析设置（请参阅“[管理组织的安全和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”） | **X** |  |  |  | **X** |
| 查看组织的安全概述（请参阅“[关于安全概述](/code-security/security-overview/about-the-security-overview)”） | **X** |  |  |  | **X** |{% ifversion ghec %}
| 启用和强制 [SAML 单一登录](/articles/about-identity-and-access-management-with-saml-single-sign-on) | **X** |  |  |  |  |
| [管理用户对组织的 SAML 访问](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization) | **X** |  |  |  |  |
| 管理组织的 SSH 证书颁发机构（请参阅“[管理组织的 SSH 证书颁发机构](/articles/managing-your-organizations-ssh-certificate-authorities)”） | **X** |  |  |  |  |{% endif %}
| 转让仓库 | **X** |  |  |   |  |
| 购买、安装、管理其帐单以及取消 {% data variables.product.prodname_marketplace %} 应用程序 | **X** |  |  |  |  |
| 列出 {% data variables.product.prodname_marketplace %} 中的应用程序 | **X** |  |  |  |  |
| 接收组织所有存储库[关于不安全的依赖项的 {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts) | **X** |  |  |  | **X** |
| 管理 {% data variables.product.prodname_dependabot_security_updates %}（请参阅“[关于 {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)”） | **X** |  |  |  | **X** |
| [管理分叉策略](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization) | **X** |  |  |  |  |
| [限制组织中公共存储库的活动](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization) | **X** |  |  |  |  |
| 拉取（读取）组织中所有存储库 | **X** |  |  |  | **X** |
| 推送（写入）和克隆（复制）组织中所有存储库 | **X** |  |  |  |  |
| 将组织成员转换为[外部协作者](#outside-collaborators) | **X** |  |  |  |  |
| [查看对组织存储库具有访问权限的人员](/articles/viewing-people-with-access-to-your-repository) | **X** |  |  |  |  |{% ifversion ghec %}
| [导出对组织存储库具有访问权限的人员列表](/articles/viewing-people-with-access-to-your-repository/#exporting-a-list-of-people-with-access-to-your-repository) | **X** |  |  |  |  |{% endif %}
| 管理默认分支名称（请参阅“[管理组织中存储库的默认分支名称](/organizations/managing-organization-settings/managing-the-default-branch-name-for-repositories-in-your-organization)”） | **X** |  |  |  |  |
| 管理默认标签（请参阅“[管理组织中存储库的默认标签](/articles/managing-default-labels-for-repositories-in-your-organization)”） | **X** |  |  |  |  |{% ifversion ghec %}
| 启用团队同步（请参阅“[管理组织的团队同步](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)”） | **X** |  |  |  |  |{% endif %}
| 管理组织中的拉取请求审查（请参阅“[管理组织中的拉取请求审查](/organizations/managing-organization-settings/managing-pull-request-reviews-in-your-organization)”） | **X** |  |  |  |  |

{% elsif ghes or ghae %}
<!-- GHES 3.3+ and eventual GHAE release don't have the extra columns for Moderators and Billing managers. -->

| 组织操作 | 所有者 | 成员 | 安全管理员 |
|:--------------------|:------:|:-------:|:-------:|
| 邀请人员加入组织 | **X** |  |  |
| 编辑和取消邀请加入组织 | **X** |  |  |
| 从组织删除成员 | **X** | | |  |
| 恢复组织的前成员 | **X** | | |  |
| 添加和删除所有团队的人员 | **X** |  |  |
| 将组织成员升级为团队维护员 | **X** |  |  |
| 配置代码评审分配（请参阅“[管理团队的代码评审分配](/organizations/organizing-members-into-teams/managing-code-review-assignment-for-your-team)”） | **X** |  |  |
| 将协作者添加到所有存储库 | **X** |  |  |
| 访问组织审核日志 | **X** |  |  |
| 编辑组织的资料页（请参阅“[关于组织的资料](/github/setting-up-and-managing-your-github-profile/customizing-your-profile/about-your-organizations-profile)”） | **X** |  |  |{% ifversion ghes %}
| 验证组织的域（请参阅“[验证组织的域](/articles/verifying-your-organization-s-domain)”） | **X** |  |  |
| 将电子邮件通知限制为经验证或批准的域（请参阅“[限制组织的电子邮件通知](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)”） | **X** |  |  |{% endif %}
| 删除所有团队 | **X** |  |  |
| 删除组织帐户，包括所有仓库 | **X** |  |  |
| 创建团队（请参阅“[设置组织中的团队创建权限](/articles/setting-team-creation-permissions-in-your-organization)”） | **X** | **X** | **X**  |
| 查看所有组织成员和团队 | **X** | **X** | **X**  |
| 使用 @mention 提及任何可见团队 | **X** | **X** | **X**  |
| 可设为团队维护员 | **X** | **X** | **X**  |
| 转让仓库 | **X** | |  |
| 管理安全和分析设置（请参阅“[管理组织的安全和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”） | **X** | | **X** |{% ifversion ghes %}
| 查看组织的安全概述（请参阅“[关于安全概述](/code-security/security-overview/about-the-security-overview)”） | **X** | | **X** |{% endif %}{% ifversion ghes %}
| 管理 {% data variables.product.prodname_dependabot_security_updates %}（请参阅“[关于 {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)”） | **X** | | **X** |{% endif %}
| 管理组织的 SSH 证书颁发机构（请参阅“[管理组织的 SSH 证书颁发机构](/articles/managing-your-organizations-ssh-certificate-authorities)”） | **X** |  |  |
| 创建项目板（请参阅“[组织的项目板权限](/articles/project-board-permissions-for-an-organization)”） | **X** | **X** | **X** |
| 查看公共团队讨论并将其发布给所有团队（请参阅“[关于团队讨论](/organizations/collaborating-with-your-team/about-team-discussions)”） | **X** | **X** | **X**  |
| 查看专用团队讨论并将其发布给所有团队（请参阅“[关于团队讨论](/organizations/collaborating-with-your-team/about-team-discussions)”） | **X** |  |  |
| 编辑和删除所有团队中的团队讨论（有关详细信息，请参阅“[管理破坏性评论](/communities/moderating-comments-and-conversations/managing-disruptive-comments)”） | **X** |  |  |  |
| 隐藏对提交、拉取请求和问题的评论（请参阅“[管理破坏性评论](/communities/moderating-comments-and-conversations/managing-disruptive-comments/#hiding-a-comment)”） | **X** | **X** | **X**  |
| 对组织禁用团队讨论（请参阅“[对组织禁用团队讨论](/articles/disabling-team-discussions-for-your-organization)”） | **X** |  |  |
| 设置所有团队的团队头像（请参阅“[设置团队的头像](/articles/setting-your-team-s-profile-picture)”） | **X** |  |  |{% ifversion ghes %}
| 管理组织存储库中的 {% data variables.product.prodname_pages %} 站点发布（请参阅“[管理组织的 {% data variables.product.prodname_pages %} 站点发布](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)”） | **X** | |  |{% endif %}
| [在组织的层次结构中移动团队](/articles/moving-a-team-in-your-organization-s-hierarchy) | **X** | | |
| 拉取（读取）组织中所有存储库 | **X** | | **X** |
| 推送（写入）和克隆（复制）组织中所有存储库 | **X** | |  |
| 将组织成员转换为[外部协作者](#outside-collaborators) | **X** | |  |
| [查看对组织存储库具有访问权限的人员](/articles/viewing-people-with-access-to-your-repository) | **X** | |  |
| [导出对组织存储库具有访问权限的人员列表](/articles/viewing-people-with-access-to-your-repository/#exporting-a-list-of-people-with-access-to-your-repository) | **X** | |  |
| 管理默认标签（请参阅“[管理组织中存储库的默认标签](/articles/managing-default-labels-for-repositories-in-your-organization)”） | **X** | |  |{% ifversion pull-request-approval-limit %}
| 管理组织中的拉取请求审查（请参阅“[管理组织中的拉取请求审查](/organizations/managing-organization-settings/managing-pull-request-reviews-in-your-organization)”） | **X** |  | |  |{% endif %}
{% ifversion ghae %}| 管理 IP 允许列表（请参阅“[使用 IP 允许列表限制到企业的网络流量](/admin/configuration/configuring-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list)”） | **X** | |  |{% endif %}

{% else %}
<!-- GHES and GHAE older versions don't have columns for Moderators, Billing managers or Security managers. -->

| 组织操作 | 所有者 | 成员 |
|:--------------------|:------:|:-------:|
| 邀请人员加入组织 | **X** |  |
| 编辑和取消邀请加入组织 | **X** |  |
| 从组织删除成员 | **X** | | |
| 恢复组织的前成员 | **X** | | |
| 添加和删除所有团队的人员 | **X** |  |  
| 将组织成员升级为团队维护员 | **X** |  |
| 配置代码评审分配（请参阅“[管理团队的代码评审设置](/organizations/organizing-members-into-teams/managing-code-review-settings-for-your-team)”） | **X** |  |
| 将协作者添加到所有存储库 | **X** |  |
| 访问组织审核日志 | **X** |  |
| 编辑组织的资料页（请参阅“[关于组织的资料](/github/setting-up-and-managing-your-github-profile/customizing-your-profile/about-your-organizations-profile)”） | **X** |  |  |{% ifversion ghes %}
| 验证组织的域（请参阅“[验证组织的域](/articles/verifying-your-organization-s-domain)”） | **X** |  |
| 将电子邮件通知限制为经验证或批准的域（请参阅“[限制组织的电子邮件通知](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)”） | **X** |  |{% endif %}
| 删除所有团队 | **X** |  |
| 删除组织帐户，包括所有仓库 | **X** |  |
| 创建团队（请参阅“[设置组织中的团队创建权限](/articles/setting-team-creation-permissions-in-your-organization)”） | **X** | **X** |
| 查看所有组织成员和团队 | **X** | **X** |
| 使用 @mention 提及任何可见团队 | **X** | **X** |
| 可设为团队维护员 | **X** | **X** |
| 转让仓库 | **X** | |
| 管理组织的 SSH 证书颁发机构（请参阅“[管理组织的 SSH 证书颁发机构](/articles/managing-your-organizations-ssh-certificate-authorities)”） | **X** |  |
| 创建项目板（请参阅“[组织的项目板权限](/articles/project-board-permissions-for-an-organization)”） | **X** | **X** | |
| 查看公共团队讨论并将其发布给所有团队（请参阅“[关于团队讨论](/organizations/collaborating-with-your-team/about-team-discussions)”） | **X** | **X** |  |
| 查看专用团队讨论并将其发布给所有团队（请参阅“[关于团队讨论](/organizations/collaborating-with-your-team/about-team-discussions)”） | **X** |  |  |
| 编辑和删除所有团队中的团队讨论（有关详细信息，请参阅“[管理破坏性评论](/communities/moderating-comments-and-conversations/managing-disruptive-comments)”） | **X** |  |  |
| 隐藏对提交、拉取请求和问题的评论（请参阅“[管理破坏性评论](/communities/moderating-comments-and-conversations/managing-disruptive-comments/#hiding-a-comment)”） | **X** | **X** | **X** |
| 对组织禁用团队讨论（请参阅“[对组织禁用团队讨论](/articles/disabling-team-discussions-for-your-organization)”） | **X** |  |  |
| 设置所有团队的团队头像（请参阅“[设置团队的头像](/articles/setting-your-team-s-profile-picture)”） | **X** |  |  |{% ifversion ghes %}
| 管理组织存储库中的 {% data variables.product.prodname_pages %} 站点发布（请参阅“[管理组织的 {% data variables.product.prodname_pages %} 站点发布](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)”） | **X** | |{% endif %}
| [在组织的层次结构中移动团队](/articles/moving-a-team-in-your-organization-s-hierarchy) | **X** | | |
| 拉取（读取）、推送（写入）和克隆（复制）组织中所有存储库 | **X** | |
| 将组织成员转换为[外部协作者](#outside-collaborators) | **X** | |
| [查看对组织存储库具有访问权限的人员](/articles/viewing-people-with-access-to-your-repository) | **X** | |
| [导出对组织存储库具有访问权限的人员列表](/articles/viewing-people-with-access-to-your-repository/#exporting-a-list-of-people-with-access-to-your-repository) | **X** | |
| 管理默认标签（请参阅“[管理组织中存储库的默认标签](/articles/managing-default-labels-for-repositories-in-your-organization)”） | **X** | |
{% ifversion ghae %}| 管理 IP 允许列表（请参阅“[使用 IP 允许列表限制到企业的网络流量](/admin/configuration/configuring-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list)”） | **X** | |{% endif %}

{% endif %}

## 延伸阅读

- [组织的存储库角色](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)
- [组织的项目板权限](/organizations/managing-access-to-your-organizations-project-boards/project-board-permissions-for-an-organization)
