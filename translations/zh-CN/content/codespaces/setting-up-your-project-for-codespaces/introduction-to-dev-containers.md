---
title: 开发容器简介
intro: 在 codespace 中工作时，你工作所处的环境是使用托管在虚拟机上的开发容器创建的。
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
ms.openlocfilehash: 22a227f8f97b054e4d3980876dae47d72fb03d08
ms.sourcegitcommit: 3a16368cd8beb8b8487eb77d3e597cf49f4c4335
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 07/14/2022
ms.locfileid: '147111168'
---
## <a name="about-dev-containers"></a>关于开发容器

开发容器是 Docker 容器，是为了提供功能齐全的开发环境专门配置的。 只要在 codespace 中运作，都是在虚拟机上使用开发容器。

可以为存储库配置开发容器，以便为该存储库创建的 codespace 能够为你提供定制的开发环境，其中包含处理特定项目所需的所有工具和运行时。 如果未在存储库中定义配置，则 {% data variables.product.prodname_github_codespaces %} 使用默认配置，其中包含团队在开发项目时可能需要的许多常用工具。 有关详细信息，请参阅“[使用默认开发容器配置](#using-the-default-dev-container-configuration)”。

开发容器的配置文件包含在存储库的 `.devcontainer` 目录中。 可以使用 {% data variables.product.prodname_vscode %} 为你添加配置文件。 可以从各种项目类型的预定义配置中进行选择。 无需进一步配置即可使用这些配置，也可以编辑这些配置以优化它们生成的开发环境。 有关详细信息，请参阅“[使用预定义的开发容器配置](#using-a-predefined-dev-container-configuration)”。

或者，可以添加自己的自定义配置文件。 有关详细信息，请参阅“[创建自定义开发容器配置](#creating-a-custom-dev-container-configuration)”。

可以为存储库定义单个开发容器配置、为不同分支定义不同配置或多个配置。 当有多个配置可用时，用户可以在创建 codespace 时选择其首选配置。 这对于包含不同编程语言或不同项目的源代码的大型存储库尤其有用。 你可以创建一个配置选择，允许不同的团队使用为他们正在进行的工作设置的相应 codespace。

### <a name="devcontainerjson"></a>devcontainer.json

开发容器配置中的主文件是 `devcontainer.json` 文件。 可以使用此文件来确定为存储库创建的 codespace 环境。 此文件的内容定义了开发容器，它可以包括框架、工具、扩展和端口转发。 `devcontainer.json` 文件通常包含对 Dockerfile 的引用，Dockerfile 通常与 `devcontainer.json` 文件放在一起。

如果未将 `devcontainer.json` 文件添加到存储库， 则使用默认开发容器配置。 有关详细信息，请参阅“[使用默认开发容器配置](#using-the-default-dev-container-configuration)”。

`devcontainer.json` 文件通常位于存储库的 `.devcontainer` 目录中。 或者，可以直接在存储库的根目录中找到它，在这种情况下，文件名必须以句点开头：`.devcontainer.json`。 

如果要在存储库中选择开发容器配置，则 `.devcontainer/devcontainer.json`（或 `.devcontainer.json`）文件的任何替代文件都必须位于路径 `.devcontainer/SUBDIRECTORY/devcontainer.json` 处它们自己的子目录中。 例如，可以选择两种配置： 
* `.devcontainer/database-dev/devcontainer.json` 
* `.devcontainer/gui-dev/devcontainer.json`

当存储库中有多个 `devcontainer.json` 文件时，每个 codespace 仅从其中一种配置创建。 无法在 `devcontainer.json` 文件之间导入或继承设置。 如果自定义子目录中的 `devcontainer.json` 文件具有依赖文件（例如 Dockerfile 或由 `devcontainer.json` 文件中的命令运行的脚本），建议将这些文件放在同一子目录中。

有关如何在创建 codespace 时选择首选的开发容器配置的信息，请参阅“[创建 codespace](/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace)”。

{% data reusables.codespaces.more-info-devcontainer %}

#### <a name="how-to-use-the-devcontainerjson"></a>如何使用 devcontainer.json

将 `devcontainer.json` 文件视为提供“自定义”而不是“个性化”很有用。 你应仅包括每个人处理代码库都需要的内容（而不是个人偏好的内容），将它们作为开发环境的标准元素。 Linter 等内容非常适合标准化，并且要求每个人都安装，因此它们很适合包含在 `devcontainer.json` 文件中。 用户界面装饰器或主题等内容属于个人选择，不应放入 `devcontainer.json` 文件中。

可以使用点文件和设置同步对 codespace 进行个性化设置。有关详细信息，请参阅“[为帐户设置个性化的 {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account)”。

### <a name="dockerfile"></a>Dockerfile

可以将 Dockerfile 添加为开发容器配置的一部分。 

Dockerfile 是一个文本文件，其中包含创建 Docker 容器映像所需的指令。 每次有人使用引用此 Dockerfile 的 `devcontainer.json` 文件创建 codespace 时，此映像用于生成开发容器。 Dockerfile 中的指令通常以引用将创建的新映像所基于的父映像开始。 随后是在映像创建过程中运行的命令，例如安装软件包。

开发容器的 Dockerfile 通常位于 `.devcontainer` 文件夹中，引用它的 `devcontainer.json` 也在其中。 

{% note %}

注意：作为使用 Dockerfile 的替代方法，可以使用 `devcontainer.json` 文件中的 `image` 属性直接引用要使用的现有映像。 如果找不到 Dockerfile 和映像，则使用默认容器映像。 有关详细信息，请参阅“[使用默认开发容器配置](#using-the-default-dev-container-configuration)”。

{% endnote %}

#### <a name="simple-dockerfile-example"></a>简单的 Dockerfile 示例

以下示例使用四个指令：

`ARG` 定义生成时变量。

`FROM` 指定生成的 Docker 映像所基于的父映像。

`COPY` 复制文件并将其添加到文件系统。 

`RUN` 更新包列表并运行脚本。 还可以使用 `RUN` 指令来安装软件，如注释掉的说明所示。 若要运行多个命令，请使用 `&&` 将命令组合成一个 `RUN` 语句。

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

有关 Dockerfile 指令的详细信息，请参阅 Docker 文档中的“[Dockerfile 参考](https://docs.docker.com/engine/reference/builder)”。

#### <a name="using-a-dockerfile"></a>使用 Dockerfile

若要将 Dockerfile 用作开发容器配置的一部分，请使用 `dockerfile` 属性在 `devcontainer.json` 文件中引用它。

```json{:copy}
{
  ...
  "build": { "dockerfile": "Dockerfile" },
  ...
}
```

有关在开发容器配置中使用 Dockerfile 的详细信息，请参阅 {% data variables.product.prodname_vscode_shortname %} 文档“[创建开发容器](https://code.visualstudio.com/docs/remote/create-dev-container#_dockerfile)”。

## <a name="using-the-default-dev-container-configuration"></a>使用默认开发容器配置

如果没有在存储库中定义配置，{% data variables.product.prodname_dotcom %} 使用默认 Linux 映像创建 codespace。 此 Linux 映像包括许多常用语言的运行时版本，例如 Python、Node、PHP、Java、Go、C++、Ruby 和 .NET Core/C#。 使用这些语言的最新或 LTS 版本。 还有一些工具可以支持数据科学和机器学习，例如 JupyterLab 和 Conda。 该映像还包括其他开发人员工具和实用程序，例如 Git、GitHub CLI、yarn、openssh 和 vim。 若要查看包含的所有语言、运行时和工具，请在 codespace 终端中使用 `devcontainer-info content-url` 命令，并遵循命令输出的 URL。

或者，有关默认 Linux 映像中包含的所有内容的详细信息，请参阅 [`microsoft/vscode-dev-containers`](https://github.com/microsoft/vscode-dev-containers/tree/main/containers/codespaces-linux) 存储库中的最新文件。 

如果要处理使用 {% data variables.product.prodname_github_codespaces %} 提供的语言和工具的小型项目，默认配置是个不错的选择。

## <a name="using-a-predefined-dev-container-configuration"></a>使用预定义的开发容器配置

可以从预定义配置列表中选择，为存储库创建开发容器配置。 这些配置提供特定项目类型的共同设置，可帮助你快速开始使用已经有适当的容器选项、{% data variables.product.prodname_vscode_shortname %} 设置和应该安装的 {% data variables.product.prodname_vscode_shortname %} 扩展的配置。

如果您需要一些额外的扩展性，使用预先定义的配置是一个好主意。 也可以从预定义的配置开始，并根据项目的需要对其进行修改。

可以在 codespace 中工作时或在本地处理存储库时添加预定义的开发容器配置。 

{% data reusables.codespaces.command-palette-container %}
1. 单击要使用的定义。

   ![预定义容器定义列表](/assets/images/help/codespaces/predefined-container-definitions-list.png)

1. 按照提示自定义您的定义。 有关自定义定义的选项的详细信息，请参阅“[向 `devcontainer.json` 文件添加其他功能](#adding-additional-features-to-your-devcontainerjson-file)”。
1. 单击" **确定**"。

   ![确定按钮](/assets/images/help/codespaces/prebuilt-container-ok-button.png)

1. 如果在 codespace 中工作，请应用更改，方法是单击窗口右下角的消息中的“立即重新生成”。 有关重新生成容器的详细信息，请参阅“[对配置应用更改](#applying-configuration-changes-to-a-codespace)”。

   ![{% data variables.product.prodname_vscode_command_palette %} 中的“Codespaces：重新生成容器”](/assets/images/help/codespaces/rebuild-prompt.png)

### <a name="adding-additional-features-to-your-devcontainerjson-file"></a>向 `devcontainer.json` 文件添加其他功能

{% note %}

注意：此功能为 beta 版本，可能会变动。

{% endnote %}

可以向预定义的容器配置中添加功能，以自定义可用的工具并扩展工作区的功能，而无需从头开始创建自定义开发容器配置。 例如，可以使用预定义的容器配置并添加 {% data variables.product.prodname_cli %}。 设置容器配置时，可以通过将功能添加到 `devcontainer.json` 文件来为项目提供这些附加功能。

您可以通过在配置预定义容器时选择一些最常用的功能来添加这些功能。 有关可用功能的详细信息，请参阅 `vscode-dev-containers` 存储库中的[脚本库](https://github.com/microsoft/vscode-dev-containers/tree/main/script-library#scripts)。


1. 访问命令面板 (`Shift + Command + P` / `Ctrl + Shift + P`)，然后开始键入“configure”。 选择“Codespaces: Configure Devcontainer Features”。

   ![命令面板中的 Configure Devcontainer Features 命令](/assets/images/help/codespaces/codespaces-configure-features.png)

1. 更新功能选择，然后单击“确定”。

   ![容器配置期间的“选择其他功能”菜单](/assets/images/help/codespaces/select-additional-features.png)

1. 若要应用更改，请在屏幕右下角单击“立即重新生成”。 有关重新生成容器的详细信息，请参阅“[对配置应用更改](#applying-configuration-changes-to-a-codespace)”。

   ![命令面板中的“Codespaces：重新生成容器”](/assets/images/help/codespaces/rebuild-prompt.png)

## <a name="creating-a-custom-dev-container-configuration"></a>创建自定义开发容器配置

如果任何预定义配置都不符合你的需求，可以通过编写自己的 `devcontainer.json` 文件创建自定义配置。

* 如果要添加一个 `devcontainer.json` 文件，该文件将由从存储库创建 codespace 的每个人使用，请在存储库根目录的 `.devcontainer` 目录中创建该文件。 
* 如果要为用户提供配置选择，可以创建多个自定义 `devcontainer.json` 文件，每个文件位于 `.devcontainer` 目录的单独子目录中。

   {% note %}

   注意：无法在比 `.devcontainer` 低一级的目录中找到 `devcontainer.json` 文件。 例如，位于 `.devcontainer/teamA/devcontainer.json` 的文件可以正常运行，但 `.devcontainer/teamA/testing/devcontainer.json` 不行。 

   {% endnote %}

   如果在存储库中找到多个 `devcontainer.json` 文件，则会在 codespace 创建选项页中列出这些文件。 有关详细信息，请参阅“[创建 codespace](/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace)”。

   ![选择配置文件](/assets/images/help/codespaces/configuration-file-choice.png)

### <a name="default-configuration-selection-during-codespace-creation"></a>创建 codespace 期间的默认配置选择

如果 `.devcontainer/devcontainer.json` 或 `.devcontainer.json` 存在，则创建 codespace 时，它将是可用配置文件列表中的默认选择。 如果两个文件都不存在，则默认选择默认开发容器配置。 

![选择的默认配置选项](/assets/images/help/codespaces/configuration-file-choice-default.png)

### <a name="editing-the-devcontainerjson-file"></a>编辑 devcontainer.json 文件

可以在 `devcontainer.json` 文件中添加和编辑支持的配置键，以指定 codespace 环境的各个方面，例如将安装哪些 {% data variables.product.prodname_vscode_shortname %} 扩展。 {% data reusables.codespaces.more-info-devcontainer %}

`devcontainer.json` 文件是使用 JSONC 格式编写的。 这样，就可以在配置文件中包含注释。 有关详细信息，请参阅 {% data variables.product.prodname_vscode_shortname %} 文档中的“[使用 {% data variables.product.prodname_vscode_shortname %} 编辑 JSON](https://code.visualstudio.com/docs/languages/json#_json-with-comments)”。

{% note %}

注意：如果使用 Linter 验证 `devcontainer.json` 文件，请确保将其设置为 JSONC 而不是 JSON，否则注释将被报告为错误。

{% endnote %}

### <a name="editor-settings-for--data-variablesproductprodname_vscode_shortname-"></a>{% data variables.product.prodname_vscode_shortname %} 的编辑器设置

{% data reusables.codespaces.vscode-settings-order %}

可以在两个地方定义 {% data variables.product.prodname_vscode_shortname %} 的默认编辑器设置。

* 在存储库的 `.vscode/settings.json` 文件中定义的编辑器设置在 codespace 中应用为工作区范围的设置。
* 在 `devcontainer.json` 文件的 `settings` 键中定义的编辑器设置应用为 codespace 中远程 [Codespaces] 范围的设置。

## <a name="applying-configuration-changes-to-a-codespace"></a>将配置更改应用于 codespace

{% data reusables.codespaces.apply-devcontainer-changes %}

{% data reusables.codespaces.rebuild-command %}
1. {% data reusables.codespaces.recovery-mode %} 修复配置中的错误。

   ![有关恢复模式的错误消息](/assets/images/help/codespaces/recovery-mode-error-message.png)

   - 若要通过查看创建日志来诊断错误，请单击“查看创建日志”。
   - 若要修复日志中标识的错误，请更新 `devcontainer.json` 文件。
   - 要应用更改，请重建容器。 

## <a name="further-reading"></a>延伸阅读

- [预构建 codespaces](/codespaces/prebuilding-your-codespaces)
