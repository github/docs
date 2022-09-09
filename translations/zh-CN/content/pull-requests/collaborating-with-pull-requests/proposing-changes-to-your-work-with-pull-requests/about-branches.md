---
title: 关于分支
intro: 使用分支隔离开发工作而不影响仓库中的其他分支。 每个仓库都有一个默认分支，也可有多个其他分支。 您可以使用拉取请求将一个分支合并到另一个分支。
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches
  - /articles/working-with-protected-branches
  - /articles/about-branches
  - /github/collaborating-with-issues-and-pull-requests/about-branches
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: 0262a7a8fb0bb8556c3f6062e3fc8512eb9fa1c6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145130106'
---
## 关于分支

分支允许您在仓库的包含区域中开发功能、修复错误或安全地试验新的想法。

始终可以从现有分支创建分支。 通常，您可能会从仓库的默认分支创建新的分支。 然后，您可以单独处理这个新分支，不受其他人对仓库所做更改的影响。 为构建功能而创建的分支通常称为功能分支或主题分支。 有关详细信息，请参阅“[在存储库中创建和删除分支](/articles/creating-and-deleting-branches-within-your-repository/)”。

也可以使用分支发布 {% data variables.product.prodname_pages %} 网站。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_pages %}](/articles/what-is-github-pages)”。

必须对仓库有写入权限才可在拉取请求中创建分支、打开拉取请求或者删除和恢复分支。 有关详细信息，请参阅“[对 {% data variables.product.prodname_dotcom %} 的访问权限](/github/getting-started-with-github/access-permissions-on-github)”。

## 关于默认分支

{% data reusables.branches.new-repo-default-branch %} 默认分支是任何人访问您的仓库时 {% data variables.product.prodname_dotcom %} 显示的分支。 默认分支也是初始分支，当有人克隆存储库时，Git 会在本地检出该分支。 {% data reusables.branches.default-branch-automatically-base-branch %}

默认情况下，{% data variables.product.product_name %} 将任何新存储库中的默认分支命名为 `main`。

{% data reusables.branches.change-default-branch %}

{% data reusables.branches.set-default-branch %}

## 使用分支

你对你的工作感到满意后，可以提交拉取请求以将当前分支（头部分支）的更改合并到另一分支（基础分支） 。 有关详细信息，请参阅“[关于拉取请求](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)”。

在拉取请求合并或关闭后，可以删除头分支，因为不再需要。 您必须对仓库具有写入权限才能删除分支。 无法删除与打开的拉取请求直接关联的分支。 有关详细信息，请参阅“[删除和还原拉取请求中的分支](/github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request)”

{% data reusables.pull_requests.retargeted-on-branch-deletion %} 下图说明了这一点。

 在这里，有人从 `main` 分支创建了一个名为 `feature1` 的分支，而你已经从 `feature1` 创建了一个名为 `feature2` 的分支。 两个分支都有打开的拉取请求。 箭头指示每个拉取请求的当前基础分支。 此时，`feature1` 是 `feature2` 的基础分支。 如果现在合并 `feature2` 的拉取请求，则 `feature2` 分支将合并到 `feature1` 中。

 ![merge-pull-request-button](/assets/images/help/branches/pr-retargeting-diagram1.png)

在下一个关系图中，有人已将 `feature1` 的拉取请求合并到 `main` 分支中，并删除了 `feature1` 分支。 因此，{% data variables.product.prodname_dotcom %} 自动重新定位了 `feature2` 的拉取请求，使其基础分支现在变成了 `main`。

 ![merge-pull-request-button](/assets/images/help/branches/pr-retargeting-diagram2.png)

现在，当你合并 `feature2` 拉取请求时，该请求将合并到 `main` 分支中。

## 使用受保护分支

仓库管理员可对分支启用保护。 如果您处理的是受保护分支，将无法删除或强制推送到该分支。 在分支可以合并之前，仓库管理员可以另外启用几项其他受保护分支设置来实施不同的工作流程。

{% note %}

**注意：** 如果你是存储库管理员，则即使拉取请求不符合要求，也可在启用了分支保护的分支上合并拉取请求，除非分支保护设置为“包括管理员”。

{% endnote %}

若要查看是否可以合并拉取请求，可在拉取请求的“对话”选项卡底部的合并框中查看。有关详细信息，请参阅“[关于受保护的分支](/articles/about-protected-branches)”。

当分支受保护时：

- 您无法删除或强制推送到该分支。
- 如果对分支启用了必需状态检查，则在所有必需 CI 测试通过之前，无法将更改合并到分支。 有关详细信息，请参阅“[关于状态检查](/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks)”。
- 如果对分支启用了必需拉取请求审查，则在满足拉取请求审查策略中的所有要求之前，无法将更改合并到分支。 有关详细信息，请参阅“[合并拉取请求](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)”。
- 如果对分支启用了代码所有者的必需审查，并且拉取请求修改具有所有者的代码，则代码所有者必须批准拉取请求后才可合并。 有关详细信息，请参阅“[关于代码所有者](/articles/about-code-owners)”。
- 如果对分支启用了必需提交签名，则无法将任何提交推送到未签名和验证的分支。 有关详细信息，请参阅“[关于提交签名验证](/articles/about-commit-signature-verification)”和“[关于受保护的分支](/github/administering-a-repository/about-protected-branches#require-signed-commits)”。
- 如果您使用 {% data variables.product.prodname_dotcom %} 的冲突编辑器来解决从受保护分支创建拉取请求的冲突，{% data variables.product.prodname_dotcom %} 可帮助您为拉取请求创建一个备用分支，以解决合并冲突。 有关详细信息，请参阅“[解决 {% data variables.product.prodname_dotcom %} 上的合并冲突](/github/collaborating-with-issues-and-pull-requests/resolving-a-merge-conflict-on-github)”。

## 延伸阅读

- “[关于拉取请求](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)”
- {% data variables.product.prodname_dotcom %} 术语表中的“[分支](/articles/github-glossary/#branch)”
- Git 文档中的“[果壳中的分支](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell)”
