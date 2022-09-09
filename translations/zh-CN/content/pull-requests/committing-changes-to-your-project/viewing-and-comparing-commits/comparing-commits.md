---
title: 比较提交
intro: 您可以在分支、标记、提交、复刻和日期之间比较仓库的状态。
redirect_from:
  - /articles/comparing-commits-across-time
  - /github/committing-changes-to-your-project/comparing-commits-across-time
  - /github/committing-changes-to-your-project/comparing-commits
  - /github/committing-changes-to-your-project/viewing-and-comparing-commits/comparing-commits
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 2ebf1a3cc83463e97d9a4d60401277bb844135b1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145129444'
---
若要比较不同版本的存储库，请追加 `/compare` 到存储库的路径。

我们将通过查看 [Linguist 存储库的分支](https://github.com/octocat/linguist)的比较页面来演示比较视图的强大功能，该分支位于 [https://github.com/octocat/linguist/compare/master...octocat:master](https://github.com/octocat/linguist/compare/master...octocat:master)。

每个存储库的“比较”视图都包含两个下拉菜单：`base` 和 `compare`。

`base` 应被视为比较的起点，而 `compare` 是终结点。 在比较期间，始终可以通过单击“编辑”来更改 `base` 和 `compare` 点。

## 比较分支

最常用的比较是比较分支，例如在启动新的拉取请求时。 启动 [新的拉取请求](/articles/creating-a-pull-request)时，始终会进入分支比较视图。

若要比较分支，可以从页面顶部的 `compare` 下拉菜单中选择分支名称。

下面是[两个分支之间的比较](https://github.com/octocat/linguist/compare/master...octocat:an-example-comparison-for-docs)示例。

## 比较标记

比较发行版标记将显示自上次发布以来您对仓库的更改。 有关详细信息，请参阅“[比较版本](/github/administering-a-repository/comparing-releases)”。

若要比较标记，可以从页面顶部的 `compare` 下拉菜单中选择标记名称。

下面是[两个标记之间的比较](https://github.com/octocat/linguist/compare/v2.2.0...octocat:v2.3.3)示例。

## 比较提交

您还可以在 {% data variables.product.prodname_dotcom %} 上通过两点差异比较来比较仓库或其复刻中的任意两个提交。

要在 {% data variables.product.prodname_dotcom %} 上通过两点差异比较来快速比较两个提交或直接比较 Git 对象 ID (OID)，请编辑仓库“Comparing changes（比较更改）”页面的 URL。

{% data reusables.repositories.two-dot-diff-comparison-example-urls %}

若要了解有关其他比较选项的详细信息，请参阅“[三点和两点差异比较](/articles/about-comparing-branches-in-pull-requests#three-dot-and-two-dot-git-diff-comparisons)”。

## 跨复刻比较

您可以比较基础仓库与任何复刻的仓库。 这是用户对项目执行拉取请求时显示的视图。

要比较不同仓库上的分支，请在分支名称前加上用户名。 例如，通过为 `base` 指定 `octocat:main`，为 `compare` 指定 `octo-org:main`，可以比较分别由 `octocat` 和 `octo-org` 拥有的存储库上的 `main` 分支。

下面是[两个存储库之间的比较](https://github.com/github/linguist/compare/master...octocat:master)示例。

## 跨提交比较

作为一种快捷方法，Git 使用 `^` 表示法表示“前一次提交”。

您可以使用此表示法对某个提交或分支的现状与前身进行比较。 例如， `96d29b7^^^^^` 指示 `96d29b7` 之前的五个提交，因为有五个 `^` 标记。 在 `base` 分支中键入 `96d29b7^^^^^`，并在 `compare` 分支中键入 `96d29b7`，可将 `96d29b7` 之前提交的五个提交与 `96d29b7` 提交进行比较。

下面是 [使用 `^` 表示法进行比较](https://github.com/octocat/linguist/compare/octocat:96d29b7%5E%5E%5E%5E%5E...octocat:96d29b7)的示例。

## 延伸阅读

- [更改拉取请求的基础分支](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-base-branch-of-a-pull-request)
