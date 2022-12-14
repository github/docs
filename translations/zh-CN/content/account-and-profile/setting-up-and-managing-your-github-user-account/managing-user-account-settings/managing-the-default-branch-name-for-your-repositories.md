---
title: 管理仓库的默认分支名称
intro: You can set the default branch name for new repositories that you create on {% data variables.product.product_location %}.
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
shortTitle: Manage default branch name
ms.openlocfilehash: 5bf934f246a2d0e447a99d0f63888b5b87ecc033
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 05/17/2022
ms.locfileid: "145084763"
---
## <a name="about-management-of-the-default-branch-name"></a>About the default branch name

当您在 {% data variables.product.product_location %} 上创建一个新仓库时，仓库将包含一个分支，它就是默认分支。 您可以更改 {% data variables.product.product_name %} 用于您新建仓库中默认分支的名称。 有关默认分支的详细信息，请参阅“[关于分支](/github/collaborating-with-issues-and-pull-requests/about-branches#about-the-default-branch)”。

{% data reusables.branches.change-default-branch %}

## <a name="setting-the-default-branch-name"></a>设置默认分支名称

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.repo-tab %}
3. 在“存储库默认分支”下，单击“立即更改默认分支名称”。
    ![“替代”按钮](/assets/images/help/settings/repo-default-name-button.png)
4. 键入要用于新分支的默认名称。
    ![用于输入默认名称的文本框](/assets/images/help/settings/repo-default-name-text.png)
5. 单击“更新”。
    ![“更新”按钮](/assets/images/help/settings/repo-default-name-update.png)

## <a name="further-reading"></a>延伸阅读

- “[管理组织中存储库的默认分支名称](/organizations/managing-organization-settings/managing-the-default-branch-name-for-repositories-in-your-organization)”
