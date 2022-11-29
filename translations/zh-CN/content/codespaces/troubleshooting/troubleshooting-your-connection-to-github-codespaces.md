---
title: GitHub Codespaces 连接疑难解答
intro: '有关连接到 {% data variables.product.prodname_github_codespaces %} 的疑难解答帮助。'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Connection
redirect_from:
  - /codespaces/troubleshooting/troubleshooting-your-connection-to-codespaces
ms.openlocfilehash: 75632e73b689ed7fe1df95027f6e5170136c7935
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159477'
---
## 503 代码空间服务不可用

Codespaces 设置为在无任何活动 30 分钟后停止。 如果你在 codespace 停止后尝试与其交互，你可能会看到 `503 service unavailable` 错误。 

- 如果 {% data variables.product.prodname_vscode %} 或浏览器窗口中显示“开始”按钮，请单击“开始”以重新连接到 codespace 。
- 通过重新加载窗口来重置代码空间。 从 {% data variables.product.prodname_vscode %} 中的[命令面板](/codespaces/codespaces-reference/using-the-command-palette-in-codespaces#accessing-the-command-palette)，单击“开发人员: 重新加载窗口”。

## 浏览器无法连接

有时，您可能无法从浏览器访问代码空间。 如果发生这种情况，请转到 https://github.com/codespaces 并尝试从该页面连接到 codespace。

  - 如果该页面上未列出代码空间，请检查您是尝试连接到的代码空间的所有者。 您只能打开自己创建的代码空间。 代码空间的 URL 始终包含 {% data variables.product.company_short %} 句柄。
  - 如果列出了代码空间，但您无法从该页面进行连接，请检查是否可以使用其他浏览器进行连接。

您的公司网络可能阻止连接。 如果可能，请检查设备上是否有任何被拒绝的连接的日志记录。

如果仍然无法连接，{% data reusables.codespaces.contact-support %}

## 无法连接到 JupyterLab 中的 codespace

若要在 JupyterLab 中使用 codespace，必须确保 codespace 已安装 JupyterLab。 {% data variables.product.prodname_github_codespaces %} 使用的默认容器映像包括 JupyterLab，但如果已自定义开发容器配置，则必须手动安装 JupyterLab。

如果 codespace 使用基于 Debian 的映像，则可以将 `python` 功能添加到 `devcontainer.json` 文件，并将 `installJupyterlab` 选项设置为 `true`，从而在开发容器中安装 JupyterLab。 否则，请直接将其安装在 Dockerfile 中。 有关安装说明，请参阅 JupyterLab 文档中的“[安装](https://jupyterlab.readthedocs.io/en/stable/getting_started/installation.html)”。

有关 `python` 功能的详细信息，请参阅[`devcontainers/features` 存储库](https://github.com/devcontainers/features/tree/main/src/python)中的自述文件页。 有关 `devcontainer.json` 文件以及 Dockerfile 的详细信息，请参阅“[开发容器简介](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#devcontainerjson)”。

如果仍然无法连接，{% data reusables.codespaces.contact-support %}

## {% data variables.product.prodname_vscode %} 的 {% data variables.product.prodname_github_codespaces %} 扩展无法连接

如果无法从 {% data variables.product.prodname_vscode %} 桌面连接到代码空间，请使用以下故障排除步骤。

1. 检查您是否安装了最新版本的 {% data variables.product.prodname_github_codespaces %} 扩展。 该扩展是预览版，并且频繁发布更新。
   1. 在 {% data variables.product.prodname_vscode %} 中，显示“Extensions（扩展）”选项卡。
   2. 选择 {% data variables.product.prodname_github_codespaces %} 扩展以显示扩展的概述页面。
   3. 如果有可用更新，则会显示一个按钮，单击“更新到 X.X.X”以升级到最新版本。
2. 检查你使用的是 {% data variables.product.prodname_vscode %} 稳定版本还是 [{% data variables.product.prodname_vscode %} 预览体验成员](https://code.visualstudio.com/insiders/)版本（每晚更新）。 如果使用的是预览体验成员版本，请尝试安装[稳定版本](https://code.visualstudio.com/)。
3. 您的公司网络可能阻止连接。 如果可能，请检查设备上是否有任何被拒绝的连接的日志记录。

如果仍然无法连接，{% data reusables.codespaces.contact-support %}

### 代码空间存在延迟问题

如果代码空间看起来特别慢或存在延迟问题，则可能是在远离您的区域中创建的。 要解决此问题，可以[手动设置 {% data variables.product.prodname_github_codespaces %} 区域](/codespaces/managing-your-codespaces/setting-your-default-region-for-codespaces)。
