---
title: GitHub Codespaces 日志
intro: '{% data variables.product.prodname_github_codespaces %} 使用的日志概述。'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
  - Logging
shortTitle: Codespaces logs
redirect_from:
  - /codespaces/troubleshooting/codespaces-logs
ms.openlocfilehash: f5cd482888f58f85a051bb9b6e2c5d7c026ed9a9
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159485'
---
{% jetbrains %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains %}

有关 {% data variables.product.prodname_github_codespaces %} 的信息将输出到各种日志：

{% webui %}

- 代码空间日志
- 创建日志
- 浏览器控制台日志（用于 {% data variables.product.prodname_vscode_shortname %} Web 客户端）

如果要在 {% data variables.product.prodname_vscode_shortname %} 中使用 {% data variables.product.prodname_github_codespaces %}，则可以使用扩展日志。 单击上面的“{% data variables.product.prodname_vscode %}”选项卡，了解详细信息。

{% endwebui %}

{% vscode %}

- 代码空间日志
- 创建日志
- 扩展日志（用于 {% data variables.product.prodname_vscode_shortname %} 桌面应用程序） 

如果要在浏览器中使用 {% data variables.product.prodname_github_codespaces %}，则可以使用浏览器日志。 单击上面的“Web 浏览器”选项卡，了解详细信息。

{% endvscode %}

{% cli %}

- 代码空间日志
- 创建日志

如果要在 {% data variables.product.prodname_vscode_shortname %} 或 Web 浏览器中使用 {% data variables.product.prodname_github_codespaces %}，则可以使用其他日志。 单击上面的选项卡以了解详细信息。

{% endcli %}

{% jetbrains %}

- 创建日志

如果要在 {% data variables.product.prodname_vscode_shortname %} 或 Web 浏览器中使用 {% data variables.product.prodname_github_codespaces %}，则可以使用其他日志。 单击上面的选项卡以了解详细信息。

{% endjetbrains %}

{% webui %}

{% data reusables.codespaces.codespace-logs %}

1. 如果要在浏览器中使用 {% data variables.product.prodname_github_codespaces %}，请确保已连接到要调试的 codespace。
1. 打开 {% data variables.product.prodname_vscode_command_palette_shortname %} (<kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd> (Mac)/<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux))，然后键入“导出日志”。 从列表中选择“Codespaces: 导出日志”以下载日志。
1. 定义保存日志 zip 存档的位置，然后单击“保存”（桌面），或单击“确定”(Web) 。
1. 如果要在浏览器中使用 {% data variables.product.prodname_github_codespaces %}，请右键单击“资源管理器”视图中日志的 zip 存档，然后选择“下载…” 将其下载到本地计算机。

{% endwebui %}

{% vscode %}

{% data reusables.codespaces.codespace-logs %}

1. 打开 {% data variables.product.prodname_vscode_command_palette_shortname %} (<kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd> (Mac)/<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux))，然后键入“导出日志”。 从列表中选择“Codespaces: 导出日志”以下载日志。
1. 定义保存日志 zip 存档的位置，然后单击“保存”（桌面），或单击“确定”(Web) 。

{% endvscode %}

{% cli %}

{% data reusables.codespaces.codespace-logs %}

目前，您无法使用 {% data variables.product.prodname_cli %} 来访问这些日志。 要访问它们，请在 {% data variables.product.prodname_vscode_shortname %} 或浏览器中打开 codespace。

{% endcli %}

## 创建日志

这些日志包含有关容器、开发容器及其配置的信息。 它们对于调试配置和设置问题非常有用。

{% webui %}

1. 连接到要调试的代码空间。
2. 打开 {% data variables.product.prodname_vscode_command_palette_shortname %} (<kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd> (Mac)/<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux))，然后键入“创建日志”。 从列表中选择“Codespaces: 查看创建日志”以打开 `creation.log` 文件。

如果要与支持人员共享日志，可以将创建日志中的文本复制到文本编辑器中，并将文件保存在本地。

{% endwebui %}

{% vscode %}

打开 {% data variables.product.prodname_vscode_command_palette_shortname %} (<kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd> (Mac)/<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux))，然后键入“创建日志”。 从列表中选择“Codespaces: 查看创建日志”以打开 `creation.log` 文件。

如果要与支持人员共享日志，可以将创建日志中的文本复制到文本编辑器中，并将文件保存在本地。

{% endvscode %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

若要查看创建日志，请使用 `gh codespace logs` 子命令。 输入命令后，从显示的代码空间列表中进行选择。

```shell
gh codespace logs
```

有关此命令的详细信息，请参阅 [{% data variables.product.prodname_cli %} 手册](https://cli.github.com/manual/gh_codespace_logs)。

如果要与支持人员共享日志，可以将输出保存到一个文件中：

```shell
gh codespace logs -c <CODESPACE-NAME> > /path/to/logs.txt
```

{% endcli %}

{% vscode %}

## 扩展日志

这些日志仅适用于 {% data variables.product.prodname_vscode_shortname %} 桌面用户。 如果看起来 {% data variables.product.prodname_github_codespaces %} 扩展或 {% data variables.product.prodname_vscode_shortname %} 编辑器遇到阻止创建或连接的问题，则它们很有用。

1. 在 {% data variables.product.prodname_vscode_shortname %} 中，打开命令面板。
1. 键入“日志”，然后从列表中选择“开发人员: 打开扩展日志文件夹”，以便在系统的文件资源管理器中打开扩展日志文件夹 。

在此视图中，可以访问由在 {% data variables.product.prodname_vscode_shortname %} 中使用的各种扩展生成的日志。 除了已启用的任何其他扩展外，还将看到 {% data variables.product.prodname_github_codespaces %}、{% data variables.product.prodname_dotcom %} 身份验证和 Git 的日志。

{% endvscode %}

{% webui %}

## 浏览器控制台日志

仅当想要调试在浏览器中使用 {% data variables.product.prodname_github_codespaces %} 的问题时，这些日志才有用。 对于调试创建和连接到 {% data variables.product.prodname_github_codespaces %} 的问题，它们非常有用。

1. 在要调试的代码空间的浏览器窗口中，打开开发人员工具窗口。
1. 显示“控制”选项卡，然后单击左侧边栏中的“错误”以仅显示错误。
1. 在右侧的日志区域中，右键单击并选择“另存为”将错误的副本保存到本地计算机。
  ![保存错误](/assets/images/help/codespaces/browser-console-log-save.png)

{% endwebui %}

{% jetbrains %}

{% data reusables.codespaces.jetbrains-open-codespace-plugin %}
1. 在 {% data variables.product.prodname_github_codespaces %} 工具窗口中，单击日志图标。

   ![“日志”按钮的屏幕截图](/assets/images/help/codespaces/jetbrains-plugin-icon-log.png)

## JetBrains 日志

通过转到 JetBrains 客户端应用程序中的“帮助”菜单并单击“收集主机和客户端日志”，来下载远程 JetBrains IDE 和本地客户端应用程序的日志 。

{% endjetbrains %}

## 延伸阅读

- “[查看 {% data variables.product.prodname_github_codespaces %} 的组织审核日志](/codespaces/managing-codespaces-for-your-organization/reviewing-your-organizations-audit-logs-for-github-codespaces)”
- “[查看 {% data variables.product.prodname_github_codespaces %} 的安全日志](/codespaces/managing-your-codespaces/reviewing-your-security-logs-for-github-codespaces)”
