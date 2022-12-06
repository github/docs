---
title: 在 JetBrains IDE 中使用 GitHub Codespaces
shortTitle: JetBrains IDEs
intro: 可以使用 JetBrains 网关连接到 codespace，并在你喜欢的 JetBrains IDE 中工作。
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Developer
ms.openlocfilehash: f522bf481e932f9735560ee4a1fec21944ced2e7
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159504'
---
{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

## 关于 JetBrains IDE 中的 {% data variables.product.prodname_codespaces %}

如果使用 JetBrains IDE 来处理代码，则可以利用在 codespace 中工作的优势。 可以使用 JetBrains 网关应用程序执行此操作。

安装 JetBrains 网关后，可以将 JetBrains 设置为默认编辑器，然后每当从 {% data variables.product.prodname_dotcom_the_website %} 打开 codespace 时，JetBrains 网关将启动，以允许你选择 JetBrains IDE 并连接到 codespace。

{% note %}

**注意**：JetBrains 网关中只有现有的 codespace 可用。 可以在 {% data variables.product.prodname_dotcom_the_website %} 中或使用 {% data variables.product.prodname_cli %} 创建 codespace。 有关详细信息，请参阅“[为存储库创建 codespace](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository)”。

{% endnote %}

### JetBrains 远程开发连接过程

在 JetBrains IDE 中使用 codespace 的基本过程如下所示。

* 在 JetBrains 网关应用程序中，选择一个活动或已停止的 codespace。 
* 然后选择要使用的 JetBrains IDE。 
* 然后将所选 JetBrains IDE 下载到托管 codespace 和源代码的远程虚拟机。
* 然后将 JetBrains 瘦客户端应用程序下载到本地计算机并启动。
* 客户端应用程序连接到完整的后端 IDE。
* 可以在客户端应用程序中以与在本地环境中相同的方式处理代码。

## 先决条件

若要在 JetBrains IDE 中的 codespace 中工作，需要：

* 有效的 JetBrains 许可证
* JetBrains 网关应用程序
* {% data variables.product.prodname_cli %} 版本 2.18.0 或更高版本 
* 运行 SSH 服务器的现有 codespace

### JetBrains 许可证

必须拥有至少一个受支持的 JetBrains IDE 的许可证，才能从 JetBrains 网关连接到 codespace。

### JetBrains 网关

可以从 JetBrains 工具箱应用程序安装和更新 JetBrains 网关。

1. 下载并安装 [JetBrains 工具箱](https://www.jetbrains.com/toolbox-app)。
1. 打开 JetBrains 工具箱。
1. 在可用工具列表中找到“网关”，然后单击“安装” 。

   ![JetBrains 工具箱的屏幕截图](/assets/images/help/codespaces/jetbrains-toolbox.png)

### {% data variables.product.prodname_cli %}

JetBrains 网关的 {% data variables.product.prodname_github_codespaces %} 插件要求先安装并配置 {% data variables.product.prodname_cli %} 版本 2.18.0 或更高版本，然后才能从 JetBrains 网关打开 codespace。

使用此命令检查 {% data variables.product.prodname_cli %} 的版本：

```shell{:copy}
gh --version
```

有关详细信息，请参阅“[关于 GitHub CLI](/github-cli/github-cli/about-github-cli)”。

### 运行 SSH 服务器的 codespace

必须具有要连接到的现有 codespace。 {% data reusables.codespaces.ways-to-create-a-codespace %} 有关详细信息，请参阅“[为存储库创建 codespace](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository)”。

{% data reusables.codespaces.ssh-server-installed %}

有关 `devcontainer.json` 文件和默认容器映像的详细信息，请参阅“[开发容器简介](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)”。

{% note %}

**注意**：有关通过 SSH 连接到 codespace 的帮助，请参阅“[{% data variables.product.prodname_github_codespaces %} 客户端故障排除](/codespaces/troubleshooting/troubleshooting-github-codespaces-clients?tool=jetbrains#ssh-connection-issues)”。

{% endnote %}

## 设置 JetBrains 网关

首次对 {% data variables.product.prodname_github_codespaces %} 使用 JetBrains 网关时，必须安装 {% data variables.product.prodname_codespaces %} 插件。 还必须允许 JetBrains 网关使用 {% data variables.product.prodname_dotcom %} 帐户访问 {% data variables.product.prodname_dotcom_the_website %}。 

1. 打开 JetBrains 网关应用程序。
1. 在“安装更多提供程序”下，单击 {% data variables.product.prodname_github_codespaces %} 的“安装”链接 。

   ![JetBrains 网关初始视图的屏幕截图](/assets/images/help/codespaces/jetbrains-gateway-initial-view.png)

1. 单击“连接到 Codespace”。

   ![带有“连接到 Codespace”按钮的网关屏幕截图](/assets/images/help/codespaces/jetbrains-gateway-connect.png)

1. 在“欢迎使用 JetBrains 网关”对话框中，单击“使用 {% data variables.product.prodname_dotcom %} 登录”。

   ![“登录”按钮的屏幕截图](/assets/images/help/codespaces/jetbrains-gateway-sign-in.png)

1. 单击一次性代码旁边的图标进行复制，然后单击登录链接。

   ![一次性登录代码的屏幕截图](/assets/images/help/codespaces/jetbrains-gateway-login-code.png)

1. 如果当前未登录到 {% data variables.product.prodname_dotcom %}，则会显示登录页面。 
   * 输入详细信息，然后单击“登录”。
   * 进行身份验证，例如输入双因素身份验证代码。
1. 在“设备激活”页上，粘贴复制的代码，然后单击“继续”。
1. 如果你属于组织，则会显示“单一登录到组织”页。 单击要授权 JetBrains 网关访问的组织旁边的“授权”，然后单击“继续” 。
1. 在“为 JetBrains 授权 {% data variables.product.prodname_github_codespaces %}”页上，单击“授权 {% data variables.product.prodname_dotcom %}”。
1. 返回到 JetBrains 网关应用程序，并从当前活动或已停止的 codespace 列表中打开一个 codespace，请参阅以下过程的步骤 3。

## 在 JetBrains IDE 中打开一个 codespace

{% data reusables.codespaces.opening-codespace-in-jetbrains %}

   首次连接到 codespace 时，后端 IDE 将下载到远程计算机。 这可能需要几分钟的时间。 下次连接到同一 codespace 时不需要执行此步骤，从而加快连接过程。 

   然后启动后端 IDE。 同样，如果将来要重新连接到保持运行的后端 IDE，则不需要执行此步骤。 
   
   然后启动客户端应用程序。

## 延伸阅读

- “[在 codespace 中开发](/codespaces/developing-in-codespaces/developing-in-a-codespace)”
- “[将 {% data variables.product.prodname_github_codespaces %} 插件用于 JetBrains](/codespaces/codespaces-reference/using-the-github-codespaces-plugin-for-jetbrains)”
- “[在 {% data variables.product.prodname_github_codespaces %} 中使用 {% data variables.product.prodname_copilot %}](/codespaces/codespaces-reference/using-github-copilot-in-github-codespaces)”
- “[{% data variables.product.prodname_github_codespaces %} 客户端故障排除](/codespaces/troubleshooting/troubleshooting-github-codespaces-clients?tool=jetbrains)”
