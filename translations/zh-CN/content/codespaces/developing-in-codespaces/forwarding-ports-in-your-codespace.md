---
title: 代码空间中的转发端口
intro: '{% data reusables.codespaces.about-port-forwarding %}'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /github/developing-online-with-codespaces/forwarding-ports-in-your-codespace
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Forward ports
ms.openlocfilehash: 320a2e42d647452056961d4f0f987c3c5db49476
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158907'
---
{% jetbrains %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains %}

## 关于转发的端口

通过端口转发，您可以访问在代码空间内运行的 TCP 端口。 例如，如果要在代码空间中的特定端口上运行 Web 应用程序，则可以转发该端口。 这允许您从本地计算机上的浏览器访问应用程序以进行测试和调试。

{% webui %}

{% data reusables.codespaces.port-forwarding-intro-non-jetbrains %} {% data reusables.codespaces.navigate-to-ports-tab %}
1. 在端口列表下，单击“添加端口”。

   ![添加端口按钮](/assets/images/help/codespaces/add-port-button.png)

1. 键入端口编号或地址，然后按 Enter。

   ![输入端口按钮的文本框](/assets/images/help/codespaces/port-number-text-box.png)

## 使用 HTTPS 转发

默认情况下，{% data variables.product.prodname_github_codespaces %} 使用 HTTP 转发端口，但你可以根据需要更新任何端口以使用 HTTPS。 如果将具有公共可见性的端口更新为使用 HTTPS，则该端口的可见性将自动更改为专用。

{% data reusables.codespaces.navigate-to-ports-tab %}
1. 右键单击要更新的端口，然后单击“更改端口协议”。
  ![更改端口协议的选项](/assets/images/help/codespaces/update-port-protocol.png)
1. 选择此端口所需的协议。 您选择的协议将在代码空间的有效期内被记住用于此端口。

{% data reusables.codespaces.port-forwarding-sharing-non-jetbrains %}

{% data reusables.codespaces.navigate-to-ports-tab %}
1. 右键单击要共享的端口，选择“端口可见性”菜单，然后单击“专用于组织”或“公共” 。
  ![用于在右键单击菜单中选择端口可见性的选项](/assets/images/help/codespaces/make-public-option.png)
1. 在端口的本地地址右侧，单击复制图标。
  ![端口 URL 的复制图标](/assets/images/help/codespaces/copy-icon-port-url.png)
1. 将复制的 URL 发送给您想要与其共享端口的人。

{% data reusables.codespaces.port-forwarding-labeling-non-jetbrains %} {% data reusables.codespaces.port-forwarding-adding-non-jetbrains %}

{% endwebui %}

{% vscode %}

{% data reusables.codespaces.port-forwarding-intro-non-jetbrains %} {% data reusables.codespaces.navigate-to-ports-tab %}
1. 在端口列表下，单击“添加端口”。

   ![添加端口按钮](/assets/images/help/codespaces/add-port-button.png)

1. 键入端口编号或地址，然后按 Enter。

   ![输入端口按钮的文本框](/assets/images/help/codespaces/port-number-text-box.png)

{% data reusables.codespaces.port-forwarding-sharing-non-jetbrains %}

{% data reusables.codespaces.navigate-to-ports-tab %}
1. 右键单击要共享的端口，选择“端口可见性”菜单，然后单击“专用于组织”或“公共” 。
  ![右键菜单中公开端口的选项](/assets/images/help/codespaces/make-public-option.png)
1. 在端口的本地地址右侧，单击复制图标。
  ![端口 URL 的复制图标](/assets/images/help/codespaces/copy-icon-port-url.png)
1. 将复制的 URL 发送给您想要与其共享端口的人。

{% data reusables.codespaces.port-forwarding-labeling-non-jetbrains %} {% data reusables.codespaces.port-forwarding-adding-non-jetbrains %}

{% endvscode %}


{% cli %}

{% data reusables.cli.cli-learn-more %}

若要转发端口，请使用 `gh codespace ports forward` 子命令。 将 `codespace-port:local-port` 替换为要连接的远程端口和本地端口。 输入命令后，从显示的代码空间列表中进行选择。

```shell
gh codespace ports forward CODESPACE-PORT:LOCAL-PORT
```

有关此命令的详细信息，请参阅 [{% data variables.product.prodname_cli %} 手册](https://cli.github.com/manual/gh_codespace_ports_forward)。

若要查看转发端口的详细信息，请输入 `gh codespace ports` 并选择 codespace。

{% data reusables.codespaces.port-forwarding-sharing-non-jetbrains %}

若要更改转发端口的可见性，请使用 `gh codespace ports visibility` 子命令。 {% data reusables.codespaces.port-visibility-settings %}

将 `codespace-port` 替换为转发的端口号。 将 `setting` 替换为 `private`、`org` 或 `public`。 输入命令后，从显示的代码空间列表中进行选择。

```shell
gh codespace ports visibility CODESPACE-PORT:SETTINGS
```

您可以使用一个命令设置多个端口的可见性。 例如：

```shell
gh codespace ports visibility 80:private 3000:public 3306:org
```

有关此命令的详细信息，请参阅 [{% data variables.product.prodname_cli %} 手册](https://cli.github.com/manual/gh_codespace_ports_visibility)。

{% data reusables.codespaces.port-forwarding-labeling-non-jetbrains %}

列出 codespace 的转发端口时，可以看到端口标签。 为此，请使用 `gh codespace ports` 命令，然后选择 codespace。

{% data reusables.codespaces.port-forwarding-adding-non-jetbrains %}

{% endcli %}

{% jetbrains %}

## 转发端口

若要了解如何将 codespace 中的端口转发到本地计算机上的端口的信息，请参阅 JetBrains 文档中“[安全模型](https://www.jetbrains.com/help/idea/security-model.html#port_forwarding)”一文的“端口转发”部分。

或者，可以使用 {% data variables.product.prodname_cli %} 转发端口。 有关详细信息，请单击此页面顶部附近的“{% data variables.product.prodname_cli %}”选项卡。

{% endjetbrains %}
