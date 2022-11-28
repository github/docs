---
title: 在 GitHub Codespaces 中使用 Visual Studio Code 命令面板
intro: '你可以使用 {% data variables.product.prodname_vscode %} 的命令面板功能来访问 {% data variables.product.prodname_github_codespaces %} 中的许多命令。'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
  - Visual Studio Code
shortTitle: VS Code Command Palette
allowTitleToDifferFromFilename: true
redirect_from:
  - /codespaces/codespaces-reference/using-the-command-palette-in-codespaces
ms.openlocfilehash: acd462dd1c0b60dced529d7471b9c8638e2f6e91
ms.sourcegitcommit: 3ff64a8c8cf70e868c10105aa6bbf6cd4f78e4d3
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180809'
---
## 关于 {% data variables.product.prodname_vscode_command_palette %}

{% data variables.product.prodname_vscode_command_palette_shortname %} 是 {% data variables.product.prodname_vscode %} 的主要功能之一，可供你在 {% data variables.product.prodname_github_codespaces %} 中使用。 通过命令面板可以访问 {% data variables.product.prodname_github_codespaces %} 和 {% data variables.product.prodname_vscode_shortname %} 的许多命令。 有关使用 {% data variables.product.prodname_vscode_command_palette_shortname %} 的详细信息，请参阅 {% data variables.product.prodname_vscode_shortname %} 文档中的“[用户界面](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette)”。

## 访问 {% data variables.product.prodname_vscode_command_palette_shortname %}

可以通过多种方式访问 {% data variables.product.prodname_vscode_command_palette_shortname %}。

- <kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd> (Mac)/<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux)。

  请注意，此命令是 Firefox 中保留的键盘快捷键。
- F1
- 从“应用程序”菜单，单击“查看”>“命令面板...”。

  ![应用程序菜单](/assets/images/help/codespaces/codespaces-view-menu.png)

## {% data variables.product.prodname_codespaces %} 的命令

要查看与 {% data variables.product.prodname_github_codespaces %} 相关的所有命令，请[访问 {% data variables.product.prodname_vscode_command_palette_shortname %}](#accessing-the-command-palette)，然后开始键入“Codespaces”。

![与 {% data variables.product.prodname_github_codespaces %} 相关的所有命令的列表](/assets/images/help/codespaces/codespaces-command-palette.png)

### 挂起或停止代码空间

如果添加新密钥或更换机器类型，则必须停止并重新启动代码空间才能应用更改。 

要暂停或停止 codespace 的容器，请[访问 {% data variables.product.prodname_vscode_command_palette_shortname %}](#accessing-the-command-palette)，然后开始键入“stop”。 选择“Codespaces: 停止当前 Codespace”。

![停止代码空间的命令](/assets/images/help/codespaces/codespaces-stop.png)

### 添加预定义的开发容器配置

要添加预定义的开发容器配置，请[访问 {% data variables.product.prodname_vscode_command_palette_shortname %}](#accessing-the-command-palette)，然后开始键入“dev container”。 选择“Codespaces: 添加开发容器配置文件...”。

![添加开发容器的命令](/assets/images/help/codespaces/add-prebuilt-container-command.png)

### 重建代码空间

如果添加开发容器或编辑任何配置文件（`devcontainer.json` 和 `Dockerfile`），则必须重新生成 codespace 才能应用所做的更改。 

若要重新生成容器，请[访问 {% data variables.product.prodname_vscode_command_palette_shortname %}](#accessing-the-command-palette)，然后开始键入“rebuild”。 选择“代码空间: 重生成容器”。

![重建代码空间的命令](/assets/images/help/codespaces/codespaces-rebuild.png)

{% data reusables.codespaces.full-rebuild-tip %}

### Codespaces 日志

可使用 {% data variables.product.prodname_vscode_command_palette_shortname %} 访问 codespace 创建日志，也可使用它导出所有日志。 

要检索 {% data variables.product.prodname_github_codespaces %} 的日志，请[访问 {% data variables.product.prodname_vscode_command_palette_shortname %}](#accessing-the-command-palette)，然后开始键入“log”。 选择“Codespaces: 导出日志”以导出与 {% data variables.product.prodname_github_codespaces %} 相关的所有日志，或选择“Codespaces: 查看创建日志”以查看与设置相关的日志 。

![访问日志的命令](/assets/images/help/codespaces/codespaces-logs.png)

## 延伸阅读

- [使用 {% data variables.product.prodname_vscode %} 中的 {% data variables.product.prodname_github_codespaces %}](/codespaces/developing-in-codespaces/using-github-codespaces-in-visual-studio-code)
