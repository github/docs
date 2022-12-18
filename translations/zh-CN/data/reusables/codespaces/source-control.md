---
ms.openlocfilehash: c760b3f26f89437d485cc222de4fbc54fa907735
ms.sourcegitcommit: f464cc9bfc41132f315ea172c591bfd145a06736
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/15/2022
ms.locfileid: "148165458"
---
## 发布从模板创建的 Codespace

通过模板存储库或“你的 Codespace”页上的模板创建 Codespace 时，所做的工作不会存储在 {% data variables.product.prodname_dotcom %} 上的存储库中，直到你发布 Codespace。 有关详细信息，请参阅“[从模板创建 Codespace](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template#publishing-to-a-repository-on-github)”。

{% data reusables.codespaces.publishing-template-codespaces %}

## 创建或切换分支

{% data reusables.codespaces.create-or-switch-branch %}

{% tip %}

提示：如果有人最近在远程存储库上更改了文件，则在你切换到的分支中，只有将更改拉取到 codespace 中之后，你才能看到这些更改。 

{% endtip %}

## 提交更改 

{% data reusables.codespaces.source-control-commit-changes %} 

## 从远程仓库拉取更改

您可以随时将远程仓库的更改拉取到您的代码空间。 

{% data reusables.codespaces.source-control-display-dark %}
1. 在侧栏顶部，单击省略号 (…)。![查看和更多操作的省略号按钮](/assets/images/help/codespaces/source-control-ellipsis-button.png)
1. 在下拉菜单中，单击“拉取”。

如果自创建代码空间以来开发容器配置已更改，则可以通过为代码空间重建容器来应用更改。 有关详细信息，请参阅“[开发容器简介](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project#applying-changes-to-your-configuration)”。

## 设置代码空间以自动获取新更改 

您可以设置代码空间，以自动获取对远程仓库所做的任何新提交的详细信息。 这允许您查看仓库的本地副本是否过时，如果是，您可以选择拉取新的更改。 

如果获取操作检测到远程仓库上的新更改，您将在状态栏中看到新提交的数量。 然后，您可以将更改拉取到本地副本。

1. 单击活动栏底部的“管理”按钮。
![“管理”按钮](/assets/images/help/codespaces/manage-button.png)
1. 在菜单中，单击“设置”。
1. 在设置页上，搜索：`autofetch`。
![搜索自动获取](/assets/images/help/codespaces/autofetch-search.png)
1. 若要获取为当前存储库注册的所有远程更新的详细信息，请将 Git: Autofetch 设置为 `all`。
![启用 Git 自动获取](/assets/images/help/codespaces/autofetch-all.png)
1. 如果要更改自动获取的间隔秒数，请编辑 Git: Autofetch Period 的值。

## 提出拉取请求

{% data reusables.codespaces.source-control-pull-request %} 

## 将更改推送到远程仓库

可以推送保存并提交的更改。 这将应用这些更改到远程仓库上的上游分支。 如果您尚未准备好创建拉取请求，或者希望在 {% data variables.product.prodname_dotcom %} 上创建拉取请求，则可能需要这样做。

1. 在侧栏顶部，单击省略号 (…)。![查看和更多操作的省略号按钮](/assets/images/help/codespaces/source-control-ellipsis-button-nochanges.png)
1. 在下拉菜单中，单击“推送”。
