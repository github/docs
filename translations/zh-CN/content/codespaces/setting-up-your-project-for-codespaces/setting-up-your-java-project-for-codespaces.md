---
title: 为 Codespaces 设置 Java 项目
shortTitle: 使用 Java 项目进行设置
intro: '通过创建自定义开发容器，开始在 {% data variables.product.prodname_codespaces %} 中使用 Java 项目。'
product: '{% data reusables.gated-features.codespaces %}'
redirect_from:
  - /codespaces/getting-started-with-codespaces/getting-started-with-your-java-project-in-codespaces
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
hasExperimentalAlternative: true
hidden: true
---



## 简介

本指南介绍如何在 {% data variables.product.prodname_codespaces %} 中设置 Java 项目。 它将演示在代码空间中打开项目以及从模板添加和修改开发容器配置的示例。

### 基本要求

- 您应该在 {% data variables.product.prodname_dotcom_the_website %} 的仓库中有现有的 Java 项目。 如果您没有项目，可以使用以下示例尝试本教程：https://github.com/microsoft/vscode-remote-try-java
- 您必须为组织启用 {% data variables.product.prodname_codespaces %} 。

## 步骤 1：在代码空间中打开项目

1. 在存储库名称下，使用 **{% octicon "code" aria-label="The code icon" %} 代码**下拉菜单，然后在**Codespaces（代码空间）**选项卡中，单击 {% octicon "plus" aria-label="The plus icon" %} **New codespace（新建代码空间）**。

  ![新建代码空间按钮](/assets/images/help/codespaces/new-codespace-button.png)

  如果您看不到此选项，则表示 {% data variables.product.prodname_codespaces %} 不适用于您的项目。 有关详细信息，请参阅 [访问 {% data variables.product.prodname_codespaces %}](/codespaces/developing-in-codespaces/creating-a-codespace#access-to-codespaces)。

创建代码空间时，您的项目是在专用于您的远程 VM 上创建的。 默认情况下，代码空间的容器有许多语言和运行时，包括 Java、nvm、npm 和 Yarn。 它还包括一套常见的工具，例如 git、wget、rsync、openssh 和 nano。

您可以通过调整 vCPU 和 RAM 的数量、[添加 dotfiles 以个性化环境](/codespaces/setting-up-your-codespace/personalizing-codespaces-for-your-account)或者修改安装的工具和脚本来自定义代码空间。

{% data variables.product.prodname_codespaces %} 使用名为 `devcontainer.json` 的文件来存储配置。 在启动时， {% data variables.product.prodname_codespaces %} 使用文件安装项目可能需要的任何工具、依赖项或其他设置。 更多信息请参阅“[开发容器简介](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project)”。


## 步骤 2：从模板将开发容器添加到您的代码空间

默认代码空间容器附带最新的 Java 版本、包管理器（Maven、Gradle）和其他预装的常用工具。 但是，我们建议您设置一个自定义容器来定义项目所需的工具和脚本。 这将确保仓库中的所有 {% data variables.product.prodname_codespaces %} 用户都拥有完全可复制的环境。

要使用自定义容器设置项目，您需要使用 `devcontainer.json` 文件来定义环境。 在 {% data variables.product.prodname_codespaces %} 中，您可以从模板添加它，也可以自己创建。 有关开发容器的详细信息，请参阅“[开发容器简介](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project)”。


{% data reusables.codespaces.command-palette-container %}
3. 对于此示例，单击 **Java**。 实际上，您可以选择任何特定于 Java 的容器或 Java 和 Azure 函数等工具的组合。 ![从列表中选择 Java 选项](/assets/images/help/codespaces/add-java-prebuilt-container.png)
4. 单击推荐的 Java 版本。 ![Java 版本选择](/assets/images/help/codespaces/add-java-version.png)
{% data reusables.codespaces.rebuild-command %}

### 开发容器的剖析

添加 Java 开发容器模板会将 `.devcontainer` 文件夹添加到项目仓库的根目录中，其中包含以下文件：

- `devcontainer.json`
- Dockerfile

新添加的 `devcontainer.json` 文件定义了几个在样本之后描述的属性。

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

    // Uncomment to connect as a non-root user. 请参阅 https://aka.ms/vscode-remote/containers/non-root。
    "remoteUser": "vscode"
}
```

- **Name** - 您可以将开发容器命名为任何名称，这只是默认名称。
- **Build** - 构建属性。
  - **Dockerfile** - 在构建对象中，dockerfile 是对 Dockerfile 的引用，该文件也是从模板中添加的。
  - **Args**
    - **Variant**：此文件仅包含一个构建参数，即传递到 Dockerfile 的 Java 版本。
- **Settings** - 它们是您可以设置的 {% data variables.product.prodname_vscode %} 设置。
  - **Terminal.integrated.shell.linux** - 虽然 bash 是此处的默认设置，但您可以通过修改它来使用其他终端 shell。
- **Extensions** - 它们是默认包含的扩展名。
  - **Vscjava.vscode-java-pack** - Java 扩展包为 Java 开发提供了流行的扩展，以帮助您入门。
- **forwardPorts** - 此处列出的任何端口都将自动转发。 更多信息请参阅“[在代码空间中转发端口](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)”。
- **postCreateCommand** - 如果您要在进入 Dockerfile 中未定义的代码空间后执行任何操作，您可以在此处执行。
- **remoteUser** - 默认情况下，您以 `vscode` 用户身份运行，但您可以选择将其设置为 `root`。

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

您可以使用 Dockerfile 添加其他容器层，以指定要包含在 Dockerfile 中的操作系统包、Java 版本或全局包。

## 步骤 3：修改 devcontainer.json 文件

添加了开发容器并基本了解所有功能之后，您现在可以进行更改以针对您的环境进行配置。 在此示例中，您将在代码空间启动时添加属性以安装扩展和项目依赖项。

1. 在 Explorer 中，从树中选择 `devcontainer.json` 文件来打开它。 您可能需要展开 `.devcontainer` 文件夹才能看到它。

  ![Explorer 中的 devcontainer.json 文件](/assets/images/help/codespaces/devcontainers-options.png)

2. 在 `devcontainer.json` 文件中的 `extensions` 后面添加以下行。

  ```json{:copy}
  "postCreateCommand": "npm install",
  "forwardPorts": [4000],
  ```

  有关 `devcontainer.json` 属性的更多信息，请参阅 Visual Studio 文档中的 [devcontainer.json 参考](https://code.visualstudio.com/docs/remote/devcontainerjson-reference)。

{% data reusables.codespaces.rebuild-command %}

  在代码空间内进行重建可确保在将更改提交到仓库之前，更改能够按预期工作。 如果某些问题导致了故障，您将进入带有恢复容器的代码空间中，您可以从该容器进行重建以继续调整容器。


## 步骤 4：运行应用程序

在上一节中，您使用 `postCreateCommand` 通过 npm 安装了一组包。 您现在可以使用它来通过 npm 运行应用程序。

1. 按 `F5` 运行应用程序。

2. 项目启动时，您应该在右下角看到一个信息框，提示您连接到项目使用的端口。

  ![端口转发信息框](/assets/images/help/codespaces/codespaces-port-toast.png)

## 步骤 5：提交更改

{% data reusables.codespaces.committing-link-to-procedure %}

## 后续步骤

现在，您应该准备开始在 {% data variables.product.prodname_codespaces %} 中开发您的 Java 项目。 以下是用于更高级场景的一些额外资源。

- [管理 {% data variables.product.prodname_codespaces %} 的加密密码](/codespaces/working-with-your-codespace/managing-encrypted-secrets-for-codespaces)
- [管理 {% data variables.product.prodname_codespaces %} 的 GPG 验证](/codespaces/working-with-your-codespace/managing-gpg-verification-for-codespaces)
- [代码空间中的转发端口](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)
