---
title: Using the Visual Studio Code Command Palette in Codespaces
intro: '您可以使用 {% data variables.product.prodname_vscode %} 的命令调色板功能访问代码空间中的许多命令。'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
  - Visual Studio Code
product: '{% data reusables.gated-features.codespaces %}'
shortTitle: VS Code Command Palette
allowTitleToDifferFromFilename: true
redirect_from:
  - /codespaces/codespaces-reference/using-the-command-palette-in-codespaces
---

## About the {% data variables.product.prodname_vscode %} Command Palette

命令调色板是 {% data variables.product.prodname_vscode %} 的重点功能之一，可用于代码空间。 The {% data variables.product.prodname_vscode_command_palette %} allows you to access many commands for {% data variables.product.prodname_codespaces %} and {% data variables.product.prodname_vscode %}. For more information on using the {% data variables.product.prodname_vscode_command_palette %}, see "[User Interface](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette)" in the Visual Studio Code documentation.

## Accessing the {% data variables.product.prodname_vscode_command_palette %}

You can access the {% data variables.product.prodname_vscode_command_palette %} in a number of ways.

- <kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd> (Mac) / <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux).

  请注意，此命令是 Firefox 中保留的键盘快捷键。
- <kbd>F1</kbd>
- 从应用程序菜单点击 **View > Command Palette…（查看命令调色板…）**。

  ![应用程序菜单](/assets/images/help/codespaces/codespaces-view-menu.png)

## {% data variables.product.prodname_github_codespaces %} 命令

To see all commands related to {% data variables.product.prodname_github_codespaces %}, [access the {% data variables.product.prodname_vscode_command_palette %}](#accessing-the-command-palette), then start typing "Codespaces".

![与代码空间相关的所有命令列表](/assets/images/help/codespaces/codespaces-command-palette.png)

### 挂起或停止代码空间

If you add a new secret or change the machine type, you'll have to stop and restart the codespace for it to apply your changes.

To suspend or stop your codespace's container, [access the {% data variables.product.prodname_vscode_command_palette %}](#accessing-the-command-palette), then start typing "stop". 选择 **Codespaces: Stop Current Codespace（Codespace：停止当前 Codespace）**。

![停止代码空间的命令](/assets/images/help/codespaces/codespaces-stop.png)

### 从模板添加开发容器

To add a dev container from a template, [access the {% data variables.product.prodname_vscode_command_palette %}](#accessing-the-command-palette), then start typing "dev container". 选择 **Codespaces: Add Development Container Configuration Files...（Codespaces：添加开发容器配置文件...）**

![添加开发容器的命令](/assets/images/help/codespaces/add-prebuilt-container-command.png)

### 重建代码空间

如果您添加 dev 容器或编辑任何配置文件（`devcontainer.json` 和 `Dockerfile`），则需要重建代码空间才可应用更改。

To rebuild your container, [access the {% data variables.product.prodname_vscode_command_palette %}](#accessing-the-command-palette), then start typing "rebuild". 选择 **Codespaces: Rebuild Container（代码空间：重建容器）**。

![重建代码空间的命令](/assets/images/help/codespaces/codespaces-rebuild.png)

### Codespaces 日志

You can use the {% data variables.product.prodname_vscode_command_palette %} to access the codespace creation logs, or you can use it export all logs.

To retrieve the logs for Codespaces, [access the {% data variables.product.prodname_vscode_command_palette %}](#accessing-the-command-palette), then start typing "log". 选择 **Codespaces: Export Logs（Codespaces：导出日志）**以导出所有与 Codespaces 相关的日志，或选择 **Codespaces: View Creation Logs（Codespaces：查看创建日志）**以查看与设置相关的日志。

![访问日志的命令](/assets/images/help/codespaces/codespaces-logs.png)
