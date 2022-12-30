---
title: 为 GitHub Codespaces 设置 Java 项目
allowTitleToDifferFromFilename: true
shortTitle: Setting up with your Java project
intro: '通过创建自定义开发容器，在 {% data variables.product.prodname_github_codespaces %} 中开始使用 Java 项目。'
redirect_from:
  - /codespaces/getting-started-with-codespaces/getting-started-with-your-java-project-in-codespaces
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
hasExperimentalAlternative: true
hidden: true
ms.openlocfilehash: b861744483f61bc01e8069188c1ce6298411d57e
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158763'
---
## 简介

本指南介绍如何设置 Java 项目 {% data reusables.codespaces.setting-up-project-intro %}

### 先决条件

- 您应该在 {% data variables.product.prodname_dotcom_the_website %} 的仓库中有现有的 Java 项目。 如果没有项目，可以使用以下示例尝试本教程： https://github.com/microsoft/vscode-remote-try-java
- 必须为组织启用 {% data variables.product.prodname_github_codespaces %}。

## 步骤 1：在代码空间中打开项目

1. 在存储库名称下，使用“{% octicon "code" aria-label="The code icon" %} 代码”下拉菜单，然后在“Codespaces”选项卡中，单击加号 ({% octicon "plus" aria-label="The plus icon" %}) 。

  ![新建代码空间按钮](/assets/images/help/codespaces/new-codespace-button.png)

创建代码空间时，您的项目是在专用于您的远程 VM 上创建的。 默认情况下，代码空间的容器有许多语言和运行时，包括 Java、nvm、npm 和 Yarn。 它还包括一套常见的工具，例如 git、wget、rsync、openssh 和 nano。

{% data reusables.codespaces.customize-vcpus-and-ram %}

## 步骤 2：从模板将开发容器配置添加到存储库

{% data variables.product.prodname_github_codespaces %} 的默认开发容器或“开发容器”预先安装了最新的 Java 版本、包管理器（Maven、Gradle）和其他常用工具。 但是，我们建议配置自己的开发容器，以包含项目所需的所有工具和脚本。 这将确保存储库中的所有 {% data variables.product.prodname_github_codespaces %} 用户都拥有完全可复制的环境。

{% data reusables.codespaces.setup-custom-devcontainer %}

{% data reusables.codespaces.command-palette-container %}
1. 对于本示例，请单击“Java”。 实际上，您可以选择任何特定于 Java 的容器或 Java 和 Azure 函数等工具的组合。
  ![从列表中选择 Java 选项](/assets/images/help/codespaces/add-java-prebuilt-container.png)
1. 单击推荐的 Java 版本。
  ![Java 版本选择](/assets/images/help/codespaces/add-java-version.png) {% data reusables.codespaces.rebuild-command %}

### 开发容器的剖析

添加 Java 开发容器模板会将 `.devcontainer` 目录添加到项目存储库的根目录中，其中包含以下文件：

- `devcontainer.json`
- Dockerfile

新添加的 `devcontainer.json` 文件定义了在示例之后描述的几个属性。

#### devcontainer.json

```json
// For format details, see https://aka.ms/vscode-remote/devcontainer.json or this file's README at:
// https://github.com/microsoft/vscode-dev-containers/tree/v0.159.0/containers/java
{
    "name": "Java",
    "build": {
        "dockerfile": "Dockerfile",
        "args": {
            // Update the VARIANT arg to pick a Java version: 11, 14
            "VARIANT": "11",
            // Options
            "INSTALL_MAVEN": "true",
            "INSTALL_GRADLE": "false",
            "INSTALL_NODE": "false",
            "NODE_VERSION": "lts/*"
        }
    },

    // Set *default* container specific settings.json values on container create.
    "settings": {
        "terminal.integrated.shell.linux": "/bin/bash",
        "java.home": "/docker-java-home",
        "maven.executable.path": "/usr/local/sdkman/candidates/maven/current/bin/mvn"
    },

    // Add the IDs of extensions you want installed when the container is created.
    "extensions": [
        "vscjava.vscode-java-pack"
    ],

    // Use 'forwardPorts' to make a list of ports inside the container available locally.
    // "forwardPorts": [],

    // Use 'postCreateCommand' to run commands after the container is created.
    // "postCreateCommand": "java -version",

    // Uncomment to connect as a non-root user. See https://aka.ms/vscode-remote/containers/non-root.
    "remoteUser": "vscode"
}
```

- name - 可以将开发容器命名为任何名称，这只是默认名称。
- build - 生成属性。
  - dockerfile - 在 `build` 对象中，`dockerfile` 包含 Dockerfile 的路径，该文件也是从模板中添加的。
  - **args**
    - variant：此文件仅包含一个生成参数，即传递到 Dockerfile 的 Java 版本。
- settings - 这些是你可以设置的 {% data variables.product.prodname_vscode %} 设置。
  - terminal.integrated.shell.linux - 虽然 bash 是此处的默认设置，但你可以通过修改它来使用其他终端 shell。
- extensions - 这些是默认包含的扩展。
  - vscjava.vscode-java-pack - Java 扩展包为 Java 开发提供了常用的扩展，以帮助你入门。
- **forwardPorts** - 此处列出的任何端口都将自动转发。 有关详细信息，请参阅“[在 codespace 中转发端口](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)。”
- postCreateCommand - 使用此方法在创建 codespace 后，运行未在 Dockerfile 中定义的命令。
- **remoteUser** - 默认情况下以 `vscode` 用户身份运行，但可以选择将其设置为 `root`。

#### Dockerfile

```bash
# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.159.0/containers/java/.devcontainer/base.Dockerfile
ARG VARIANT="14"
FROM mcr.microsoft.com/vscode/devcontainers/java:0-${VARIANT}

# [Optional] Install Maven or Gradle
ARG INSTALL_MAVEN="false"
ARG MAVEN_VERSION=3.6.3
ARG INSTALL_GRADLE="false"
ARG GRADLE_VERSION=5.4.1
RUN if [ "${INSTALL_MAVEN}" = "true" ]; then su vscode -c "source /usr/local/sdkman/bin/sdkman-init.sh && sdk install maven \"${MAVEN_VERSION}\""; fi \
    && if [ "${INSTALL_GRADLE}" = "true" ]; then su vscode -c "source /usr/local/sdkman/bin/sdkman-init.sh && sdk install gradle \"${GRADLE_VERSION}\""; fi

# [Optional] Install a version of Node.js using nvm for front end dev
ARG INSTALL_NODE="true"
ARG NODE_VERSION="lts/*"
RUN if [ "${INSTALL_NODE}" = "true" ]; then su vscode -c "source /usr/local/share/nvm/nvm.sh && nvm install ${NODE_VERSION} 2>&1"; fi

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment this line to install global node packages.
# RUN su vscode -c "source /usr/local/share/nvm/nvm.sh && npm install -g <your-package-here>" 2>&1
```

你可以使用 Dockerfile 添加其他容器层，以指定要包含在容器中的操作系统包、Java 版本或全局包。

## 步骤 3：修改 devcontainer.json 文件

添加了开发容器配置并基本了解所有功能之后，现在可以进行更改以进一步自定义你的环境。 在此示例中，您将在代码空间启动时添加属性以安装扩展和项目依赖项。

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

1. 按 `F5` 运行应用程序。

2. 项目启动时，应会在 {% data variables.product.prodname_vscode_shortname %} 的右下角看到一条“toast”通知消息，其中包含连接到项目使用的端口的提示。

   ![端口转发“toast”通知](/assets/images/help/codespaces/codespaces-port-toast.png)

## 步骤 5：提交更改

{% data reusables.codespaces.committing-link-to-procedure %}

## 后续步骤

现在，你应该准备好了在 {% data variables.product.prodname_github_codespaces %} 中开始开发 Java 项目。 以下是用于更高级场景的一些额外资源。

{% data reusables.codespaces.next-steps-adding-devcontainer %}
