---
title: GitHub Codespaces 日志
intro: '{% data variables.product.prodname_github_codespaces %} 使用的日志记录位置概述。'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
  - Logging
shortTitle: Codespaces 日志
redirect_from:
  - /codespaces/troubleshooting/codespaces-logs
---


有关 {% data variables.product.prodname_github_codespaces %} 的信息将输出到三个不同的日志：

- 代码空间日志
- 创建日志
- 扩展日志（{% data variables.product.prodname_vscode %} 桌面）或浏览器控制台日志（Web 中的 {% data variables.product.prodname_vscode %} ）

## 代码空间日志

这些日志包含有关代码空间、容器、会话和 {% data variables.product.prodname_vscode %} 环境的详细信息。 它们对于诊断连接问题和其他意外行为非常有用。 例如，代码空间冻结，但“Reload Windows（重新加载 Windows）”选项可将其解冻几分钟，或者您随机断开与代码空间的连接，但能够立即重新连接。

{% webui %}

1. 如果在浏览器中使用 {% data variables.product.prodname_codespaces %} ，请确保已连接到要调试的代码空间。
1. Open the {% data variables.product.prodname_vscode_command_palette_shortname %} (<kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd> (Mac) / <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux)) and type **Export logs**. 从列表中选择 **odespaces: Export Logs（代码空间：导出日志）**以下载日志。
1. 定义保存日志 zip 存档的位置，然后单击 **Save（保存）**（桌面），或单击 **OK（确定）** (web)。
1. 如果在浏览器中使用 {% data variables.product.prodname_codespaces %} ，请右键单击资源管理器视图中日志的 zip 存档，然后选择 **Download…（下载…）**将其下载到本地计算机。

{% endwebui %}

{% vscode %}

1. Open the {% data variables.product.prodname_vscode_command_palette_shortname %} (<kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd> (Mac) / <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux)) and type **Export logs**. 从列表中选择 **odespaces: Export Logs（代码空间：导出日志）**以下载日志。
1. 定义保存日志 zip 存档的位置，然后单击 **Save（保存）**（桌面），或单击 **OK（确定）** (web)。

{% endvscode %}

{% cli %}

目前，您无法使用 {% data variables.product.prodname_cli %} 来访问这些日志。 要访问它们，请在 {% data variables.product.prodname_vscode %} 或浏览器中打开代码空间。

{% endcli %}

## 创建日志

这些日志包含有关容器、开发容器及其配置的信息。 它们对于调试配置和设置问题非常有用。


{% webui %}

1. 连接到要调试的代码空间。
2. Open the {% data variables.product.prodname_vscode_command_palette_shortname %} (<kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd> (Mac) / <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux)) and type **Creation logs**. 从列表中选择 **Codespaces: View Creation Log（代码空间：查看创建日志）**以打开 `creation.log` 文件。

如果要与支持人员共享日志，可以将创建日志中的文本复制到文本编辑器中，并将文件保存在本地。

{% endwebui %}

{% vscode %}

Open the {% data variables.product.prodname_vscode_command_palette_shortname %} (<kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd> (Mac) / <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux)) and type **Creation logs**. 从列表中选择 **Codespaces: View Creation Log（代码空间：查看创建日志）**以打开 `creation.log` 文件。

如果要与支持人员共享日志，可以将创建日志中的文本复制到文本编辑器中，并将文件保存在本地。

{% endvscode %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

要查看创建日志，请使用 `gh codespace logs` 子命令。 输入命令后，从显示的代码空间列表中进行选择。

```shell
gh codespace logs
```

有关此命令的详细信息，请参阅 [ {% data variables.product.prodname_cli %} 手册](https://cli.github.com/manual/gh_codespace_logs)。

如果要与支持人员共享日志，可以将输出保存到一个文件中：

```shell
gh codespace logs -c <CODESPACE-NAME> > /path/to/logs.txt
```

{% endcli %}

## 扩展日志

这些日志仅适用于 {% data variables.product.prodname_vscode %} 桌面用户。 如果看起来 {% data variables.product.prodname_codespaces %} 扩展名或 {% data variables.product.prodname_vscode %} 编辑器遇到阻止创建或连接的问题，则它们很有用。

1. 在 {% data variables.product.prodname_vscode %} 中，打开命令面板。
1. 键入 **Logs** ，然后从列表中选择 **Developer: Open Extension Logs Folder（开发人员：打开扩展日志文件夹）**，以在系统的文件资源管理器中打开扩展日志文件夹。

在此视图中，您可以访问由在 {% data variables.product.prodname_vscode %} 中使用的各种扩展生成的日志。 除了已启用的任何其他扩展之外，你还将看到 GitHub Codespaces、GitHub Authentication 和 Git 的日志。

## 浏览器控制台日志

仅当您要调试在浏览器中使用 {% data variables.product.prodname_codespaces %} 的问题时，这些日志才有用。 它们对于调试创建和连接到 {% data variables.product.prodname_codespaces %} 的问题非常有用。

1. 在要调试的代码空间的浏览器窗口中，打开开发人员工具窗口。
1. 显示“Console（控制台）”选项卡，然后单击左侧栏中的 **errors（错误）**以仅显示错误。
1. 在右侧的日志区域中，右键单击并选择 **Save as（另存为）**将错误的副本保存到本地计算机。 ![保存错误](/assets/images/help/codespaces/browser-console-log-save.png)
