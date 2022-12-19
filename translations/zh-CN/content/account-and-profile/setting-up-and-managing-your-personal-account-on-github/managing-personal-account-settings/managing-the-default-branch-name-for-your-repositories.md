---
title: 管理仓库的默认分支名称
intro: '您可以为在 {% data variables.product.product_location %} 上创建的新资料库设置默认分支名称。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
redirect_from:
  - /github/setting-up-and-managing-your-github-user-account/managing-the-default-branch-name-for-your-repositories
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-the-default-branch-name-for-your-repositories
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-the-default-branch-name-for-your-repositories
shortTitle: Manage default branch name
ms.openlocfilehash: a3943f32860f55becaa840f7ca40c13ba87b5ce2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145193760'
---
## About the default branch name

当您在 {% data variables.product.product_location %} 上创建一个新仓库时，仓库将包含一个分支，它就是默认分支。 您可以更改 {% data variables.product.product_name %} 用于您新建仓库中默认分支的名称。 有关默认分支的详细信息，请参阅“[关于分支](/github/collaborating-with-issues-and-pull-requests/about-branches#about-the-default-branch)”。

{% data reusables.branches.change-default-branch %}

## 设置默认分支名称

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.repo-tab %}
3. 在“存储库默认分支”下，单击“立即更改默认分支名称”。
    ![“替代”按钮](/assets/images/help/settings/repo-default-name-button.png)
4. 键入要用于新分支的默认名称。
    ![用于输入默认名称的文本框](/assets/images/help/settings/repo-default-name-text.png)
5. 单击“更新”。
    ![“更新”按钮](/assets/images/help/settings/repo-default-name-update.png)

## 延伸阅读

- “[管理组织中存储库的默认分支名称](/organizations/managing-organization-settings/managing-the-default-branch-name-for-repositories-in-your-organization)”
