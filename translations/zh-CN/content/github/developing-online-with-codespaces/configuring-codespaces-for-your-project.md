---
title: 为项目配置 Codespaces
intro: 您可以为仓库的每个新代码空间设置默认配置，以确保贡献者在其联机开发环境中拥有所需的所有工具和设置。
product: '{% data reusables.gated-features.codespaces %}'
permissions: 对仓库具有写入权限的人员可以创建或编辑默认代码空间配置。
redirect_from:
  - /github/developing-online-with-github-codespaces/configuring-github-codespaces-for-your-project
versions:
  free-pro-team: '*'
---

{% data reusables.codespaces.release-stage %}

### 关于默认代码空间配置

{% data reusables.codespaces.about-configuration %}

If you don't define a configuration in your repository, {% data variables.product.prodname_dotcom %} creates a codespace with a base Linux image. The base Linux image includes tools for Node.js, JavaScript, TypeScript, Python, C++, Java, C#, .NET Core, PHP, and PowerShell. For more information about the base Linux image, see the [`microsoft/vscode-dev-containers`](https://github.com/microsoft/vscode-dev-containers/tree/master/containers/codespaces-linux) repository.

{% data reusables.codespaces.about-personalization %} {% data reusables.codespaces.codespace-config-order %} 更多信息请参阅“[个性化您帐户的 {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/personalizing-codespaces-for-your-account)”。

您可以使用项目类型的预建容器配置创建默认代码空间配置，也可以根据项目需要创建自定义配置。

{% data variables.product.prodname_codespaces %} 使用仓库根目录下或 `.devcontainer` 文件夹下 `devcontainer.json` 文件包含的设置。 您可以使用 `devcontainer.json` 为整个代码空间环境设置默认设置，包括 {% data variables.product.prodname_vscode %} 编辑器，但您也可以在 `.vscode/set.json` 文件中设置编辑器特定的设置。

对仓库代码空间配置的更改只会应用到每个新的代码空间，而不影响任何现有的代码空间。

### 使用预建容器配置

您可以对 [`vscode-dev-containers`](https://github.com/microsoft/vscode-dev-containers) 仓库中的 {% data variables.product.prodname_vscode %} 使用任何预建容器配置。 预建容器定义包括特定项目类型的共同配置，可帮助您利用现有的配置快速开始使用，配置中已经有适当的容器选项、{% data variables.product.prodname_vscode %} 设置和应该安装的 {% data variables.product.prodname_vscode %} 扩展。

1. 克隆或下载 [`vscode-dev-containers`](https://github.com/microsoft/vscode-dev-containers) 仓库。
1. 在 `vscode-dev-containers` 仓库中，导航到 [`containers`](https://github.com/microsoft/vscode-dev-containers/tree/master/containers) 文件夹，然后选择符合项目需求的容器配置。 We'll use the [Node.js & JavaScript](https://aka.ms/vscode-dev-containers/definitions/node) container configuration as an example.
1. From the [`Node.js & JavaScript`](https://aka.ms/vscode-dev-containers/definitions/node) folder, copy the `.devcontainer` folder to the root of your project's repository.
1. 提交并推送新配置到 {% data variables.product.prodname_dotcom %} 上的项目仓库。

从包含 `.devcontainer` 文件夹的分支创建的每个新代码空间将根据文件夹内容进行配置。 更多信息请参阅“[创建代码空间](/github/developing-online-with-codespaces/creating-a-codespace)”。

### 创建自定义代码空间配置

如果没有预建配置满足您的需求，可通过将 `devcontainer.json` 文件添加到仓库根目录或`.devcontainer` 文件夹来创建自定义配置。 在该文件中，您可以使用支持的配置键来指定代码库环境的各个方面，例如要安装哪些 {% data variables.product.prodname_vscode %} 扩展。

{% data reusables.codespaces.vscode-settings-order %}

您可以在两个地方定义 {% data variables.product.prodname_vscode %} 的默认编辑器设置。

* `.vscode/settings.json` 中定义的编辑器设置在代码空间中用作 _Workspace_ 范围的设置。
* `devcontainer.json` 的 `settings` 键中定义的编辑器设置在代码空间中用作 _Remote [Codespaces]_ 范围的设置。

### 支持的代码空间配置键

您可以在 `devcontainer.json` 中使用 {% data variables.product.prodname_codespaces %} 支持的配置键。

#### 常规设置

- `name`
- `settings`
- `extensions`
- `forwardPorts`
- `devPort`
- `postCreateCommand`

#### Docker、Dockerfile 或映像设置

- `image`
- `dockerFile`
- `context`
- `containerEnv`
- `remoteEnv`
- `containerUser`
- `remoteUser`
- `updateRemoteUserUID`
- `mounts`
- `workspaceMount`
- `workspaceFolder`
- `runArgs`
- `overrideCommand`
- `shutdownAction`
- `dockerComposeFile`

有关可用于 `devcontainer.json` 的设置的更多信息，请参阅 {% data variables.product.prodname_vscode %} 文档中的 [devcontainer.json 参考](https://aka.ms/vscode-remote/devcontainer.json)。
