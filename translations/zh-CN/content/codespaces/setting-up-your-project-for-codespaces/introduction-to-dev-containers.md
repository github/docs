---
title: 开发容器简介
intro: 在代码空间中工作时，将使用虚拟机上托管的开发容器或开发容器创建您使用的环境。
permissions: People with write permissions to a repository can create or edit the codespace configuration.
redirect_from:
  - /github/developing-online-with-github-codespaces/configuring-github-codespaces-for-your-project
  - /codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project
  - /github/developing-online-with-codespaces/configuring-codespaces-for-your-project
  - /codespaces/customizing-your-codespace/configuring-codespaces-for-your-project
  - /codespaces/setting-up-your-project-for-codespaces/configuring-codespaces-for-your-project
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
  - Fundamentals
product: '{% data reusables.gated-features.codespaces %}'
---

## 关于开发容器

开发容器或开发容器是专门配置为提供功能齐全的开发环境的 Docker 容器。 每当在代码空间中工作时，都会在虚拟机上使用开发容器。

您可以为存储库配置开发容器，以便为该存储库创建的代码空间为您提供量身定制的开发环境，其中包含处理特定项目所需的所有工具和运行时。 如果未在存储库中定义配置，则 {% data variables.product.prodname_github_codespaces %} 使用默认配置，其中包含团队在项目开发时可能需要的许多常用工具。 更多信息请参阅“[使用默认开发容器配置](#using-the-default-dev-container-configuration)”。

开发容器的配置文件包含在存储库中的 `.devcontainer` 目录中。 您可以使用 {% data variables.product.prodname_vscode %} 为您添加配置文件。 您可以从各种项目类型的预定义配置中进行选择。 您可以使用它们而无需进一步配置，也可以编辑配置以优化它们生成的开发环境。 更多信息请参阅“[使用预定义的开发容器配置](#using-a-predefined-dev-container-configuration)”。

或者，您可以添加自己的自定义配置文件。 更多信息请参阅“[创建自定义开发容器配置](#creating-a-custom-dev-container-configuration)”。

可以为存储库定义单个开发容器配置，为不同分支定义不同的配置，或为多个配置定义多个配置。 当有多个配置可用时，用户可以在创建代码空间时选择其首选配置。 这对于包含不同编程语言源代码的大型存储库或不同的项目特别有用。 您可以创建一系列配置，允许不同的团队在为他们正在执行的工作而适当设置的代码空间中工作。

### devcontainer.json

开发容器配置中的主文件是 `devcontainer.json` 文件。 您可以使用此文件来确定为存储库创建的代码空间的环境。 此文件的内容定义一个开发容器，其中可以包含框架、工具、扩展和端口转发。 `devcontainer.json` 文件通常包含对 Dockerfile 的引用，Dockerfile 通常位于 `devcontainer.json` 文件旁边。

如果您没有将 `devcontainer.json` 文件添加到您的仓库。 使用默认的开发容器配置。 更多信息请参阅“[使用默认开发容器配置](#using-the-default-dev-container-configuration)”。

`devcontainer.json` 文件通常位于存储库的 `.devcontainer` 目录中。 或者，您可以直接在存储库的根目录中找到它，在这种情况下，文件名必须以点开头：`.devcontainer.json`。

如果要在存储库中选择开发容器配置，则  `.devcontainer/devcontainer.json`（或 `.devcontainer.json`）文件的任何替代项都必须位于其自己的子目录中，路径为 `.devcontainer/SUBDIRECTORY/devcontainer.json`。 例如，您可以选择两种配置：
* `.devcontainer/database-dev/devcontainer.json`
* `.devcontainer/gui-dev/devcontainer.json`

当您的存储库中有多个 `devcontainer.json` 文件时，每个代码空间仅从其中一个配置创建。 无法在 `devcontainer.json` 文件之间导入或继承设置。 如果自定义子目录中的 `devcontainer.json` 文件具有依赖文件，例如 Dockerfile 或由 `devcontainer.json` 文件中的命令运行的脚本，则建议您在同一子目录中共同定位这些文件。

有关如何在创建代码空间时选择首选开发容器配置的信息，请参阅“[创建代码空间](/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace)”。

{% data reusables.codespaces.more-info-devcontainer %}

#### 如何使用 devcontainer.json

将 `devcontainer.json` 文件视为提供“自定义”而不是“个性化”是很有用的。 您应该只将每个在代码库上工作的人都需要的东西作为开发环境的标准元素，而不是个人偏好的东西。 像语法检查这样的东西非常适合标准化，并且要求每个人都已安装，因此最好将它们包含在您的 `devcontainer.json` 文件中。 像用户界面装饰器或主题这样的东西是个人选择，不应该放在 `devcontainer.json` 文件中。

您可以使用 dotfiles 和 Settings Sync 对代码空间进行个性化设置。 更多信息请参阅“[为您的帐户个性化代码空间](/codespaces/customizing-your-codespace/personalizing-codespaces-for-your-account)”。

### Dockerfile

可以将 Dockerfile 添加为开发容器配置的一部分。

Dockerfile 是一个文本文件，其中包含创建 Docker 容器映像所需的说明。 每次有人使用引用此 Dockerfile 的 `devcontainer.json` 文件创建代码空间时，此映像都用于生成开发容器。 Docker 文件中的说明通常首先引用将在其上创建新映像的父映像。 接下来是在映像创建过程中运行的命令，例如安装软件包。

开发容器的 Dockerfile 通常位于 `.devcontainer` 文件夹中，旁边是引用它的 `devcontainer.json`。

{% note %}

**注意**：作为使用 Dockerfile 的替代方法，您可以使用 `devcontainer.json` 文件中的 `image` 属性来直接引用要使用的现有映像。 如果既找不到 Dockerfile，也找不到映像，则使用默认容器映像。 更多信息请参阅“[使用默认开发容器配置](#using-the-default-dev-container-configuration)”。

{% endnote %}

#### 简单 Dockerfile 示例

以下示例使用四条指令：

`ARG` 定义了一个构建时变量。

`from` 指定生成的 Docker 映像将基于的父映像。

`COPY` 复制文件并将其添加到文件系统中。

`RUN` 更新包列表并运行脚本。 您还可以使用 `RUN` 指令来安装软件，如注释掉的说明所示。 若要运行多个命令，请使用 `&&` 将这些命令合并到一个 `RUN` 语句中。

```Dockerfile{:copy}
ARG VARIANT="16-buster"
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}

# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

# [Optional] Uncomment if you want to install more global node modules
# RUN su node -c "npm install -g <your-package-list-here>"

COPY library-scripts/github-debian.sh /tmp/library-scripts/
RUN apt-get update && bash /tmp/library-scripts/github-debian.sh
```

有关 Dockerfile 指令的更多信息，请参阅 Docker 文档中的“[Dockerfile 参考](https://docs.docker.com/engine/reference/builder)”。

#### 使用 Dockerfile

要将 Dockerfile 用作开发容器配置的一部分，请使用 `dockerfile` 属性在 `devcontainer.json` 文件中引用它。

```json{:copy}
{
  ...
  "build": { "dockerfile": "Dockerfile" },
  ...
}
```

有关在开发容器配置中使用 Dockerfile 的详细信息，请参阅 {% data variables.product.prodname_vscode_shortname %} 文档“[创建开发容器](https://code.visualstudio.com/docs/remote/create-dev-container#_dockerfile)”。

## 使用默认开发容器配置

如果未在存储库中定义配置，{% data variables.product.prodname_dotcom %} 使用默认 Linux 映像创建代码空间。 此 Linux 映像包括许多流行语言的运行时版本，如 Python、Node、PHP、Java、Go、C++、Ruby 和 .NET Core/C#。 使用这些语言的最新版本或 LTS 版本。 还有一些工具可以支持数据科学和机器学习，例如 JupyterLab 和 Conda。 该映像还包括其他开发人员工具和实用程序，如 Git、GitHub CLI、yarn、openssh 和 vim。 要查看包含的所有语言、运行时和工具，请在代码空间终端内使用 `devcontainer-info content-url` 命令，然后遵循命令输出的 URL。

或者，要详细了解默认 Linux 映像中包含的所有内容，请参阅 [`microsoft/vscode-dev-containers`](https://github.com/microsoft/vscode-dev-containers/tree/main/containers/codespaces-linux) 仓库中的最新文件。

如果您要处理使用 {% data variables.product.prodname_github_codespaces %} 提供的语言和工具的小型项目，默认配置是个不错的选择。

## 使用预定义的开发容器配置

可以从预定义配置列表中进行选择，以便为存储库创建开发容器配置。 这些配置为特定项目类型提供了常见设置，并可以帮助您快速开始使用已具有相应容器选项、{% data variables.product.prodname_vscode_shortname %} 设置和应安装的 {% data variables.product.prodname_vscode_shortname %} 扩展的配置。

如果您需要一些额外的扩展性，使用预先定义的配置是一个好主意。 您也可以从预定义的配置开始，然后根据项目的需要对其进行修改。

可以在代码空间中工作时或在本地处理存储库时添加预定义的开发容器配置。

{% data reusables.codespaces.command-palette-container %}
1. 单击要使用的定义。

   ![预定义容器定义列表](/assets/images/help/codespaces/predefined-container-definitions-list.png)

1. 按照提示自定义您的定义。 有关自定义定义的选项的详细信息，请参阅“[向 `devcontainer.json` 文件添加其他功能](#adding-additional-features-to-your-devcontainerjson-file)”。
1. 单击 **OK（确定）**。

   ![确定按钮](/assets/images/help/codespaces/prebuilt-container-ok-button.png)

1. 如果在代码空间中工作，请应用更改，方法是单击窗口右下角消息中的**立即重新构建**。 有关重建容器的更多信息，请参阅“[应用对配置的更改](#applying-configuration-changes-to-a-codespace)”。

   ![{% data variables.product.prodname_vscode_command_palette %} 中的"Codespaces：重新构建容器"](/assets/images/help/codespaces/rebuild-prompt.png)

### 向 `devcontainer.json `文件添加其他功能

{% note %}

**注意：**此功能处于测试阶段，可能会有所变化。

{% endnote %}

可以向预定义的容器配置添加功能，以自定义可用的工具并扩展工作区的功能，而无需从头开始创建自定义开发容器配置。 例如，您可以使用预定义的容器配置并添加 {% data variables.product.prodname_cli %}。 在设置容器配置时，可以通过将这些功能添加到 `devcontainer.json` 文件，使这些附加功能可用于项目。

您可以通过在配置预定义容器时选择一些最常用的功能来添加这些功能。 有关可用功能的详细信息，请参阅 `vscode-dev-containers` 存储库中的[脚本库](https://github.com/microsoft/vscode-dev-containers/tree/main/script-library#scripts) 。


1. 访问命令面板 (`Shift + Command + P` / `Ctrl + Shift + P`)，然后开始键入 "configure"。 选择 **Codespaces: Configure Devcontainer Features（代码空间：配置开发容器功能）**。

   ![命令面板中的 Configure Devcontainer Features 命令](/assets/images/help/codespaces/codespaces-configure-features.png)

1. 更新您的功能选择，然后单击**确定**。

   ![容器配置期间的选择其他功能菜单。](/assets/images/help/codespaces/select-additional-features.png)

1. 要应用更改，请在屏幕右下角单击 **Rebuild now（立即重建）**。 有关重建容器的更多信息，请参阅“[应用对配置的更改](#applying-configuration-changes-to-a-codespace)”。

   ![命令面板中的"Codespaces：重建容器"](/assets/images/help/codespaces/rebuild-prompt.png)

## 创建自定义开发容器配置

如果预定义的配置都不能满足您的需求，则可以通过编写自己的 `devcontainer.json` 文件来创建自定义配置。

* 如果要添加供从存储库创建代码空间的每个人使用的单个 `devcontainer.json` 文件，请在存储库根目录下的 `.devcontainer` 目录中创建该文件。
* 如果要为用户提供配置选择，可以创建多个自定义 `devcontainer.json` 文件，每个文件都位于 `.devcontainer` 目录的单独子目录中。

   {% note %}

   **注意**：您无法在 `.devcontainer` 下超过一级的目录中找到您的 `devcontainer.json` 文件。 例如，`.devcontainer/teamA/devcontainer.json` 上的文件将会运行，但 `.devcontainer/teamA/testing/devcontainer.json` 不会。

   {% endnote %}

   如果在存储库中找到多个 `devcontainer.json` 文件，则会在代码空间创建选项页中列出这些文件。 更多信息请参阅“[创建代码空间](/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace)”。

   ![配置文件的选择](/assets/images/help/codespaces/configuration-file-choice.png)

### 代码空间创建期间的默认配置选择

如果存在 `.devcontainer/devcontainer.json` 或 `.devcontainer.json`，则在创建代码空间时，它将是可用配置文件列表中的默认选择。 如果这两个文件都不存在，则默认情况下将选择默认的开发容器配置。

![选定的默认配置选项](/assets/images/help/codespaces/configuration-file-choice-default.png)

### 编辑 devcontainer.json 文件

您可以在 `devcontainer.json` 文件中添加和编辑支持的配置键，以指定代码空间环境的各个方面，例如将安装哪些 {% data variables.product.prodname_vscode_shortname %} 扩展。 {% data reusables.codespaces.more-info-devcontainer %}

`devcontainer.json` 文件是使用 JSONC 格式编写的。 这允许您在配置文件中包含注释。 更多信息请参阅 {% data variables.product.prodname_vscode_shortname %} 文档中的“[使用 {% data variables.product.prodname_vscode_shortname %} 编辑 JSON](https://code.visualstudio.com/docs/languages/json#_json-with-comments)”。

{% note %}

**注意**：如果您使用语法检查验证 `devcontainer.json` 文件，请确保将其设置为 JSONC 而不是 JSON，否则注释将被报告为错误。

{% endnote %}

### {% data variables.product.prodname_vscode_shortname %}的编辑器设置

{% data reusables.codespaces.vscode-settings-order %}

您可以在两个地方定义 {% data variables.product.prodname_vscode_shortname %} 的默认编辑器设置。

* 在存储库的 `.vscode/settings.json` 文件中定义的编辑器设置将作为代码空间中_工作区_范围的设置进行应用。
* `devcontainer.json` 文件的 `settings` 键中定义的编辑器设置在代码空间中用作 _Remote [Codespaces]_ 范围的设置。

## 将配置更改应用于代码空间

{% data reusables.codespaces.apply-devcontainer-changes %}

{% data reusables.codespaces.rebuild-command %}
1. {% data reusables.codespaces.recovery-mode %} 修复配置中的错误。

   ![有关恢复模式的错误消息](/assets/images/help/codespaces/recovery-mode-error-message.png)

   - 要通过查看创建日志来诊断错误，请单击 **View creation log（查看创建日志）**。
   - 要修复日志中发现的错误，请更新您的 `devcontainer.json` 文件。
   - 要应用更改，请重建容器。

## 延伸阅读

- "[预构建代码空间](/codespaces/prebuilding-your-codespaces)"
