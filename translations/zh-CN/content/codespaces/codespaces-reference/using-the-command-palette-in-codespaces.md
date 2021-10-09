---
title: 在代码空间中使用命令调色板
intro: '您可以使用 {% data variables.product.prodname_vscode %} 的命令调色板功能访问代码空间中的许多命令。'
versions:
  fpt: '*'
type: reference
topics:
  - Codespaces
  - Visual Studio Code
product: '{% data reusables.gated-features.codespaces %}'
shortTitle: 命令面板
---

## 关于命令调色板

命令调色板是 {% data variables.product.prodname_vscode %} 的重点功能之一，可用于代码空间。 命令调色板允许您访问 {% data variables.product.prodname_codespaces %} 和 {% data variables.product.prodname_vscode %} 的许多命令。 有关使用命令调色板的更多信息，请参阅 Visual Studio Code 文档中的“[用户界面](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette)”。

## 访问命令调色板

您可以通过多种方式访问命令调色板。

- `Shift + Command + P` (Mac) / `Ctrl + Shift + P` (Windows)。

  请注意，此命令是 Firefox 中保留的键盘快捷键。
- `F1`
- 从应用程序菜单点击 **View > Command Palette…（查看命令调色板…）**。

  ![应用程序菜单](/assets/images/help/codespaces/codespaces-view-menu.png)

## {% data variables.product.prodname_github_codespaces %} 命令

要查看所有与 {% data variables.product.prodname_github_codespaces %} 相关的命令，请访问命令调色板，然后开始输入"Codespaces"。

![与代码空间相关的所有命令列表](/assets/images/help/codespaces/codespaces-command-palette.png)

### 挂起或停止代码空间

If you add a new secret or change the machine type, you'll have to stop and restart the codespace for it to apply your changes.

要挂起或停止代码空间的容器，请访问命令调色板，然后开始输入 "stop"。 选择 **Codespaces: Stop Current Codespace（Codespace：停止当前 Codespace）**。

![停止代码空间的命令](/assets/images/help/codespaces/codespaces-stop.png)

### 从模板添加开发容器

要从模板添加开发容器，请访问命令调色板，然后开始输入 "dev container"。 选择 **Codespaces: Add Development Container Configuration Files...（Codespaces：添加开发容器配置文件...）**

![添加开发容器的命令](/assets/images/help/codespaces/add-prebuilt-container-command.png)

### 重建代码空间

如果您添加 dev 容器或编辑任何配置文件（`devcontainer.json` 和 `Dockerfile`），则需要重建代码空间才可应用更改。

要重建容器，请访问命令面板，然后开始键入 "rebuild"。 选择 **Codespaces: Rebuild Container（代码空间：重建容器）**。

![重建代码空间的命令](/assets/images/help/codespaces/codespaces-rebuild.png)

### Codespaces 日志

您可以使用命令调色板访问代码空间创建日志，也可以使用它导出所有日志。

要检索代码空间的日志，请访问命令调色板，然后开始输入 "log"。 选择 **Codespaces: Export Logs（Codespaces：导出日志）**以导出所有与 Codespaces 相关的日志，或选择 **Codespaces: View Creation Logs（Codespaces：查看创建日志）**以查看与设置相关的日志。

![访问日志的命令](/assets/images/help/codespaces/codespaces-logs.png)
