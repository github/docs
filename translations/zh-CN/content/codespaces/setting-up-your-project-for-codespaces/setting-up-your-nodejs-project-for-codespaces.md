---
title: 为代码空间设置 Node.js 项目
shortTitle: Setting up your Node.js project
intro: '通过创建自定义开发容器，开始在 {% data variables.product.prodname_codespaces %} 中使用 JavaScript、Node.js 或 TypeScript 项目。'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /codespaces/getting-started-with-codespaces/getting-started-with-your-nodejs-project-in-codespaces
type: tutorial
topics:
  - Codespaces
  - Developer
  - Node
  - JavaScript
hasExperimentalAlternative: true
hidden: true
ms.openlocfilehash: 24a7023e66bc76f45a43721c9b6a59468996ad49
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '147063240'
---
## 简介

本指南介绍如何在 {% data variables.product.prodname_codespaces %} 中设置 JavaScript、Node.js 或 TypeScript 项目。 它将演示在代码空间中打开项目以及从模板添加和修改开发容器配置的示例。

### 先决条件

- 您应该在 {% data variables.product.prodname_dotcom_the_website %} 的仓库中有现有的 JavaScript、Node.js 或 TypeScript 项目。 如果没有项目，可以使用以下示例尝试本教程： https://github.com/microsoft/vscode-remote-try-node
- 您必须为组织启用 {% data variables.product.prodname_codespaces %} 。

## 步骤 1：在代码空间中打开项目

1. 在存储库名称下，使用“{% octicon "code" aria-label="The code icon" %} 代码”下拉菜单，然后在“Codespaces”选项卡中，单击“基于主函数创建 codespace”  。

   ![新建代码空间按钮](/assets/images/help/codespaces/new-codespace-button.png)

   如果您看不到此选项，则表示 {% data variables.product.prodname_codespaces %} 不适用于您的项目。 有关详细信息，请参阅 [访问 {% data variables.product.prodname_codespaces %}](/codespaces/developing-in-codespaces/creating-a-codespace#access-to-codespaces)。


创建代码空间时，您的项目是在专用于您的远程 VM 上创建的。 默认情况下，代码空间的容器有许多语言和运行时，包括 Node.js、JavaScript、Typescript、nvm、npm 和 yarn。 它还包括一套常见的工具，例如 git、wget、rsync、openssh 和 nano。

{% data reusables.codespaces.customize-vcpus-and-ram %}

## 步骤 2：从模板将开发容器配置添加到存储库

{% data variables.product.prodname_github_codespaces %} 的默认开发容器将支持立即运行 [vscode-remote-try-node](https://github.com/microsoft/vscode-remote-try-node) 等 Node.js 项目。 但是，我们建议配置自己的开发容器，因为这样就可以定义项目所需的任何特定工具和脚本。 这将确保存储库中的所有 GitHub Codespaces 用户都拥有完全可复制的环境。

{% data reusables.codespaces.setup-custom-devcontainer %}

{% data reusables.codespaces.command-palette-container %}
1. 对于本示例，请单击“Node.js”。  如果需要其他功能，您可以选择任何特定于节点或工具（如节点和 MongoDB）组合的容器。

   ![从列表中选择节点选项](/assets/images/help/codespaces/add-node-prebuilt-container.png)

1. 单击推荐的 Node.js 版本。

   ![Node.js 版本选择](/assets/images/help/codespaces/add-node-version.png)

{% data reusables.codespaces.rebuild-command %}

### 开发容器的剖析

添加 Node.js 开发容器模板会将 `.devcontainer` 目录添加到项目存储库的根目录中，其中包含以下文件：

- `devcontainer.json`
- Dockerfile

新添加的 `devcontainer.json` 文件定义了在示例之后描述的几个属性。

#### devcontainer.json

```json
// For format details, see https://aka.ms/devcontainer.json. For config options, see the README at:
// https://github.com/microsoft/vscode-dev-containers/tree/v0.162.0/containers/javascript-node
{
    "name": "Node.js",
    "build": {
        "dockerfile": "Dockerfile",
        // Update 'VARIANT' to pick a Node version: 10, 12, 14
        "args": { "VARIANT": "14" }
    },

    // Set *default* container specific settings.json values on container create.
    "settings": {
        "terminal.integrated.shell.linux": "/bin/bash"
    },

    // Add the IDs of extensions you want installed when the container is created.
    "extensions": [
        "dbaeumer.vscode-eslint"
    ],

    // Use 'forwardPorts' to make a list of ports inside the container available locally.
    // "forwardPorts": [],

    // Use 'postCreateCommand' to run commands after the container is created.
    // "postCreateCommand": "yarn install",

    // Comment out connect as root instead. More info: https://aka.ms/vscode-remote/containers/non-root.
    "remoteUser": "node"
}
```

- name - 可以将开发容器命名为任何名称，这只是默认名称。
- build - 生成属性。
  - dockerfile - 在 `build` 对象中，`dockerfile` 包含 Dockerfile 的路径，该文件也是从模板中添加的。
  - **args**
    - variant：此文件仅包含一个生成参数，即我们要使用并传递到 Dockerfile 的节点变体。
- settings - 这些是你可以设置的 {% data variables.product.prodname_vscode %} 设置。
  - terminal.integrated.shell.linux - 虽然 bash 是此处的默认设置，但你可以通过修改它来使用其他终端 shell。
- extensions - 这些是默认包含的扩展。
  - dbaeumer.vscode-eslint - ES lint 是 Lint 分析的良好扩展，但是对于 JavaScript，还可以包括许多出色的市场扩展。
- **forwardPorts** - 此处列出的任何端口都将自动转发。 有关详细信息，请参阅“[在 codespace 中转发端口](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)。”
- postCreateCommand - 使用此方法在创建 codespace 后，运行未在 Dockerfile 中定义的命令。
- **remoteUser** - 默认情况下以 vscode 用户身份运行，但可以选择将其设置为 root。

#### Dockerfile

```bash
# [Choice] Node.js version: 14, 12, 10
ARG VARIANT="14-buster"
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

# [Optional] Uncomment if you want to install more global node modules
# RUN su node -c "npm install -g <your-package-list-here>"
```

您可以使用 Dockerfile 添加其他容器层，以指定要包含在容器中的操作系统包、节点版本或全局包。

## 步骤 3：修改 devcontainer.json 文件

添加了开发容器配置并基本了解所有功能之后，现在可以进行更改以进一步自定义你的环境。 在此示例中，您将添加属性以在代码空间启动时安装 npm，并使容器内的端口列表在本地可用。

1. 在资源管理器中，从树中选择 `devcontainer.json` 文件以将其打开。 可能需要展开 `.devcontainer` 文件夹才能看到它。

   ![Explorer 中的 devcontainer.json 文件](/assets/images/help/codespaces/devcontainers-options.png)

2. 将以下行添加到 `devcontainer.json` 文件的 `extensions` 之后：

   ```json{:copy}
   "postCreateCommand": "npm install",
   "forwardPorts": [4000],
   ```

   {% data reusables.codespaces.more-info-devcontainer %}

{% data reusables.codespaces.rebuild-command %}

   {% data reusables.codespaces.rebuild-reason %}

## 步骤 4：运行应用程序

在上一部分中，你使用 `postCreateCommand` 通过 npm 安装了一组包。 您现在可以使用它来通过 npm 运行应用程序。

1. 在终端中使用 `npm start` 运行启动命令。

   ![终端的 npm 启动](/assets/images/help/codespaces/codespaces-npmstart.png)

2. 项目启动时，您应该在右下角看到一个信息框，提示您连接到项目使用的端口。

   ![端口转发信息框](/assets/images/help/codespaces/codespaces-port-toast.png)

## 步骤 5：提交更改

{% data reusables.codespaces.committing-link-to-procedure %}

## 后续步骤

现在，您应该准备开始在 {% data variables.product.prodname_codespaces %} 中开发您的 JavaScript 项目。 以下是用于更高级场景的一些额外资源。

{% data reusables.codespaces.next-steps-adding-devcontainer %}
