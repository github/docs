---
title: 代码空间中的转发端口
intro: '{% data reusables.codespaces.about-port-forwarding %}'
product: '{% data reusables.gated-features.codespaces %}'
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
ms.openlocfilehash: 6e178c02b1170a60235a1ecf931001a7db58a187
ms.sourcegitcommit: 43a959b8faf78d9c5b3deadffa079d24cd11650b
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/04/2022
ms.locfileid: '148134741'
---
## 关于转发的端口

通过端口转发，您可以访问在代码空间内运行的 TCP 端口。 例如，如果要在代码空间中的特定端口上运行 Web 应用程序，则可以转发该端口。 这允许您从本地计算机上的浏览器访问应用程序以进行测试和调试。

在 codespace 内运行的应用程序将输出显示到包含本地主机 URL 的终端（例如 `http://localhost:PORT` 或 `http://127.0.0.1:PORT`）时，端口将自动转发。 如果你在浏览器或 {% data variables.product.prodname_vscode %} 中使用 {% data variables.product.prodname_github_codespaces %}，则终端中的 URL 字符串将转换为一个链接，你可以单击该链接在本地计算机上查看网页。 默认情况下，{% data variables.product.prodname_github_codespaces %} 使用 HTTP 转发端口。

![自动端口转发](/assets/images/help/codespaces/automatic-port-forwarding.png)

{% data reusables.codespaces.forwarded-ports-environment-variable %}

您还可以手动转发端口、标记转发的端口、与组织成员共享转发的端口、公开共享转发的端口以及将转发的端口添加到代码空间配置中。

{% note %}

注意：{% data reusables.codespaces.restrict-port-visibility %}

{% endnote %}

## 转发端口

您可以手动转发未自动转发的端口。

{% webui %}

{% data reusables.codespaces.navigate-to-ports-tab %}
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

{% endwebui %}

{% vscode %}

{% data reusables.codespaces.navigate-to-ports-tab %}
1. 在端口列表下，单击“添加端口”。

   ![添加端口按钮](/assets/images/help/codespaces/add-port-button.png)

1. 键入端口编号或地址，然后按 Enter。

   ![输入端口按钮的文本框](/assets/images/help/codespaces/port-number-text-box.png)

{% endvscode %}


{% cli %}

{% data reusables.cli.cli-learn-more %}

若要转发端口，请使用 `gh codespace ports forward` 子命令。 将 `codespace-port:local-port` 替换为要连接的远程端口和本地端口。 输入命令后，从显示的代码空间列表中进行选择。

```shell
gh codespace ports forward CODESPACE-PORT:LOCAL-PORT
```

有关此命令的详细信息，请参阅 [{% data variables.product.prodname_cli %} 手册](https://cli.github.com/manual/gh_codespace_ports_forward)。

若要查看转发端口的详细信息，请输入 `gh codespace ports` 并选择 codespace。

{% endcli %}

## 共享端口

{% note %}

注意：如果你的组织使用 {% data variables.product.prodname_team %} 或 {% data variables.product.prodname_ghe_cloud %}，则只能将端口专用于组织。

{% endnote %}

如果要与其他人共享转发的端口，则可以将该端口专用于您的组织，也可以将该端口设为公共端口。 将端口设为组织专用后，组织中具有该端口 URL 的任何人都可以查看正在运行的应用程序。 将端口设为公共端口后，知道 URL 和端口号的任何人都可以查看正在运行的应用程序，而无需进行身份验证。

{% note %}

注意：你选择的端口可见性选项可能会受到为组织配置的策略的限制。 有关详细信息，请参阅“[限制转发端口的可见性](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports)”。

{% endnote %}

{% webui %}

{% data reusables.codespaces.navigate-to-ports-tab %}
1. 右键单击要共享的端口，选择“端口可见性”菜单，然后单击“专用于组织”或“公共” 。
  ![用于在右键单击菜单中选择端口可见性的选项](/assets/images/help/codespaces/make-public-option.png)
1. 在端口的本地地址右侧，单击复制图标。
  ![端口 URL 的复制图标](/assets/images/help/codespaces/copy-icon-port-url.png)
1. 将复制的 URL 发送给您想要与其共享端口的人。

{% endwebui %}

{% vscode %}

{% data reusables.codespaces.navigate-to-ports-tab %}
1. 右键单击要共享的端口，选择“端口可见性”菜单，然后单击“专用于组织”或“公共” 。
  ![右键菜单中公开端口的选项](/assets/images/help/codespaces/make-public-option.png)
1. 在端口的本地地址右侧，单击复制图标。
  ![端口 URL 的复制图标](/assets/images/help/codespaces/copy-icon-port-url.png)
1. 将复制的 URL 发送给您想要与其共享端口的人。

{% endvscode %}

{% cli %}

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

{% endcli %}

## 标记端口

您可以标记端口，使端口更容易在列表中识别。

{% data reusables.codespaces.navigate-to-ports-tab %}
1. 悬停在要标记的端口上，然后单击标签图标。
  ![端口的标签图标](/assets/images/help/codespaces/label-icon.png) {% data reusables.codespaces.type-port-label %}

## 将端口添加到代码空间配置

你可以将转发的端口添加到存储库的 {% data variables.product.prodname_github_codespaces %} 配置中，因此该端口将自动为从存储库创建的所有 codespace 转发。 更新配置后，必须重建任何以前创建的代码空间以应用更改。 有关详细信息，请参阅“[开发容器简介](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#applying-configuration-changes-to-a-codespace)”。

可以使用 `forwardPorts` 属性在 `.devcontainer.json` 文件中手动配置转发的端口，或在 codespace 使用“端口”面板。

{% data reusables.codespaces.navigate-to-ports-tab %}
1. 右键单击要添加到 codespace 配置的端口，然后单击“设置标签并更新 devcontainer.json”。
  ![右键菜单中设置标签并将端口添加到 devcontainer.json 的选项](/assets/images/help/codespaces/update-devcontainer-to-add-port-option.png) {% data reusables.codespaces.type-port-label %}
