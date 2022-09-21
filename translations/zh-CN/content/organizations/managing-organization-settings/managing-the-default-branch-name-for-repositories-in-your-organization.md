---
title: 管理组织中仓库的默认分支名称
intro: '可以为成员在 {% data variables.product.product_location %} 上的组织中创建的存储库设置默认分支名称。'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-the-default-branch-name-for-repositories-in-your-organization
permissions: Organization owners can manage the default branch name for new repositories in the organization.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage default branch name
ms.openlocfilehash: 38bd35506728f4437c9a1644235fe748c6a8a58a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145099719'
---
## About the default branch name

当组织成员在组织中创建一个新仓库时，该仓库将包含一个分支，它就是默认分支。 可以更改 {% data variables.product.product_name %} 用于组织成员创建的新存储库中的默认分支的名称。 有关默认分支的详细信息，请参阅“[关于分支](/github/collaborating-with-issues-and-pull-requests/about-branches#about-the-default-branch)”。

{% data reusables.branches.change-default-branch %}

如果企业所有者为您的企业强制实施了默认分支名称策略，您将无法为组织设置默认分支名称。 但是，您可以更改单个仓库的默认分支。 有关详细信息，请参阅 {% ifversion fpt %}“[在企业中强制实施存储库管理策略](/enterprise-cloud@latest/admin/policies/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-the-default-branch-name)”{% else %}“[在企业中强制实施存储库管理策略](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-the-default-branch-name)”{% endif %}和“[更改默认分支](/github/administering-a-repository/changing-the-default-branch)”。

## 设置默认分支名称

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.repository-defaults %}
3. 在“存储库默认分支”下，单击“立即更改默认分支名称”。
    ![“替代”按钮](/assets/images/help/organizations/repo-default-name-button.png)
4. 键入要用于新分支的默认名称。
    ![用于输入默认名称的文本框](/assets/images/help/organizations/repo-default-name-text.png)
5. 单击“更新”。
    ![“更新”按钮](/assets/images/help/organizations/repo-default-name-update.png)

## 延伸阅读

- “[管理存储库的默认分支名称](/github/setting-up-and-managing-your-github-user-account/managing-the-default-branch-name-for-your-repositories)”
