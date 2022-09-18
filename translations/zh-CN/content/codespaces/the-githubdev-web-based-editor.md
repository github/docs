---
title: github.dev 基于 web 的编辑器
intro: '使用存储库或拉取请求中的 github.dev {% data variables.product.prodname_serverless %} 来创建和提交更改。'
versions:
  feature: githubdev-editor
type: how_to
miniTocMaxHeadingLevel: 3
topics:
  - Codespaces
  - Visual Studio Code
  - Developer
shortTitle: Web-based editor
redirect_from:
  - /codespaces/developing-in-codespaces/web-based-editor
ms.openlocfilehash: 3fce192c2b0e890b2213dfd8f5f18dad1dc7fa05
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147431854'
---
{% note %}

注意：github.dev {% data variables.product.prodname_serverless %} 目前为测试预览版。 你可以在[我们的讨论中](https://github.com/community/community/discussions/categories/general)提供反馈。

{% endnote %}

## 关于 {% data variables.product.prodname_serverless %}

{% data variables.product.prodname_serverless %} 引入了完全在浏览器中运行的轻量级编辑体验。 使用 {% data variables.product.prodname_serverless %}，您可以从 {% data variables.product.prodname_dotcom %}中导航文件和源代码存储库，并创建和提交代码更改。 您可以在编辑器中打开任何存储库、复刻或拉取请求。

{% data variables.product.prodname_serverless %} 在 {% data variables.product.prodname_dotcom_the_website %} 上免费供所有人使用。

{% data variables.product.prodname_serverless %} 具有 {% data variables.product.prodname_vscode %} 的诸多优点，如搜索、语法突出显示和源控制视图。 还可以使用 Settings Sync 与编辑器共享自己的 {% data variables.product.prodname_vscode_shortname %} 设置。 有关详细信息，请参阅 {% data variables.product.prodname_vscode_shortname %} 文档中的“[设置同步](https://code.visualstudio.com/docs/editor/settings-sync)”。

{% data variables.product.prodname_serverless %} 完全在浏览器的沙盒中运行。 编辑器不会克隆存储库，而是使用 [GitHub 存储库扩展](https://code.visualstudio.com/docs/editor/github#_github-repositories-extension)来执行你将要使用的大部分功能。 您的工作将保存在浏览器的本地存储中，直到您提交为止。 您应定期提交更改，以确保它们始终可访问。

## 打开 {% data variables.product.prodname_serverless %}

您可以通过以下任一方式打开 {% data variables.product.prodname_serverless %} 中的任何 {% data variables.product.prodname_dotcom %} 存储库：

- 若要在同一浏览器标签页中打开存储库，请在浏览任何存储库时按 `.` 或在 {% data variables.product.prodname_dotcom %} 上拉取请求。
 
   若要在新浏览器标签页中打开存储库，请按住 Shift 键的同时按 `.`。

- 将 URL 从“github.com”更改为“github.dev”。
- 查看文件时，请使用 {% octicon "pencil" aria-label="The edit icon" %} 旁边的下拉菜单，然后选择“在 github.dev 中打开”。

  ![“编辑文件”按钮下拉菜单](/assets/images/help/repository/edit-file-edit-dropdown.png)

## {% data variables.product.prodname_codespaces %} 和 {% data variables.product.prodname_serverless %}

{% data variables.product.prodname_serverless %} 和 {% data variables.product.prodname_github_codespaces %} 都允许你直接从存储库中编辑代码。 但两者的优点略有不同，具体取决于您的使用情况。

|| {% data variables.product.prodname_serverless %} | {% data variables.product.prodname_codespaces %}|
|-|----------------|---------|
| **成本** | 可用。      | 计算和存储成本。 有关定价的信息，请参阅 [Codespaces 定价](/en/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces#codespaces-pricing)。|
| **可用性** | 可供 GitHub.com 上的所有人使用。 | 可供使用 GitHub Team 或 GitHub Enterprise Cloud 的组织使用。 |
| **启动** | {% data variables.product.prodname_serverless %} 在按下按键时可立即打开，您可以立即开始使用它，而无需等待其他配置或安装。 | 创建或恢复 codespace 时，将为该 codespace 分配一个 VM，并根据 `devcontainer.json` 文件的内容配置容器。 此设置可能需要几分钟才能创建环境。 有关详细信息，请参阅[创建 Codespace](/codespaces/developing-in-codespaces/creating-a-codespace)。 |
| **计算**  | 没有关联的计算，因此您将无法创建和运行代码或使用集成终端。 | 借助 {%  data   variables.product.prodname_codespaces %}，您可以获得专用 VM 的强大功能，在该 VM 上可以运行和调试应用程序。|
| **终端访问** | 无。 | 默认情况下，{% data variables.product.prodname_codespaces %} 提供一组通用工具，这意味着您可以像在本地环境中一样使用终端。|
| **扩展**  | 只有可以在 Web 中运行的扩展子集才会显示在扩展视图中，并且可以安装。 有关详细信息，请参阅[使用扩展](#using-extensions)。| 通过 Codespaces，可以使用来自 {% data variables.product.prodname_vscode_marketplace %} 的大部分扩展。|

### 继续使用 {%  data   variables.product.prodname_codespaces %}

你可以在 {% data variables.product.prodname_serverless %} 中启动工作流并继续使用 codespace，前提是你[可以访问 {% data variables.product.prodname_codespaces %}](/codespaces/developing-in-codespaces/creating-a-codespace#access-to-codespaces)。 如果尝试访问运行和调试视图或终端，系统将通知您它们在 {% data variables.product.prodname_serverless %} 中不可用。

要在 codespace 中继续工作，请单击“继续处理...” 然后选择“新建 Codespace”，在当前分支上创建 codespace。 在选择此选项之前，必须提交任何更改。

![显示 UI 中的“继续工作”按钮的屏幕截图](/assets/images/help/codespaces/codespaces-continue-working.png)

## 使用源控制

使用 {% data variables.product.prodname_serverless %} 时，所有操作都通过源控制视图进行管理，该视图位于左侧的活动栏中。 有关源代码管理视图的详细信息，请参阅 {% data variables.product.prodname_vscode_shortname %} 文档中的“[版本控制](https://code.visualstudio.com/docs/editor/versioncontrol)”。

由于基于 Web 的编辑器使用 GitHub 存储库扩展来增强其功能，因此您可以切换分支而无需隐藏更改。 有关详细信息，请参阅 {% data variables.product.prodname_vscode_shortname %} 文档中的“[GitHub 存储库](https://code.visualstudio.com/docs/editor/github#_github-repositories-extension)”。

### 创建新分支

{% data reusables.codespaces.create-or-switch-branch %} 你在旧分支中所做的任何未提交的更改都将在新分支上可用。

### 提交更改

{% data reusables.codespaces.source-control-commit-changes %} 
5. 更改在提交后将自动推送到 {% data variables.product.prodname_dotcom %} 上的分支。
### 创建拉取请求

{% data reusables.codespaces.source-control-pull-request %}

### 使用现有的拉取请求

您可以使用 {% data variables.product.prodname_serverless %} 来处理现有的拉取请求。

1. 浏览到要在 {% data variables.product.prodname_serverless %} 中打开的拉取请求。
2. 按 `.` 以在 {% data variables.product.prodname_serverless %} 中打开拉取请求。
3. 进行任何更改后，请使用[提交更改](#commit-your-changes)中的步骤提交更改。 您的更改将直接提交到分支，无需推送更改。

## 使用扩展

{% data variables.product.prodname_serverless %} 支持专门创建或更新以在 Web 中运行的 {% data variables.product.prodname_vscode_shortname %} 扩展。 这些扩展称为“Web 扩展”。 要了解如何创建 Web 扩展或更新现有扩展以适用于 Web，请参阅 {% data variables.product.prodname_vscode_shortname %} 文档中的“[Web 扩展](https://code.visualstudio.com/api/extension-guides/web-extensions)”。

可以在 {% data variables.product.prodname_serverless %} 中运行的扩展将显示在扩展视图中，并且可以安装。 如果使用“设置同步”，则所有兼容的扩展也会自动安装。 有关信息，请参阅 {% data variables.product.prodname_vscode_shortname %} 文档中的“[设置同步](https://code.visualstudio.com/docs/editor/settings-sync)”。


## 故障排除

如果您在打开 {% data variables.product.prodname_serverless %} 时遇到问题，请尝试以下操作：

- 确保您已登录到 {% data variables.product.prodname_dotcom %}。
- 禁用任何广告拦截器。
- 在浏览器中使用非隐身窗口打开 {% data variables.product.prodname_serverless %}。

### 已知的限制

- {% data variables.product.prodname_serverless %} 目前在 Chrome（以及其他各种基于 Chromium 的浏览器）、Edge、Firefox 和 Safari 中受支持。 我们建议您使用这些浏览器的最新版本。
- 某些按键绑定可能不起作用，具体取决于您使用的浏览器。 这些键绑定限制记录在 {% data variables.product.prodname_vscode_shortname %} 文档的“[已知限制和改编](https://code.visualstudio.com/docs/remote/codespaces#_known-limitations-and-adaptations)”部分中。
- 根据本地键盘布局，`.` 可能无法打开 {% data variables.product.prodname_serverless %}。 在这种情况下，你可以通过将 URL 从 `github.com` 更改为 `github.dev` 来打开 {% data variables.product.prodname_serverless %} 中的任何 {% data variables.product.prodname_dotcom %} 存储库。
