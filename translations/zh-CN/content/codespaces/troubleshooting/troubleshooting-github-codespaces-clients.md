---
title: GitHub Codespaces 客户端故障排除
shortTitle: Codespaces clients
intro: '本文提供有关在使用用于 {% data variables.product.prodname_github_codespaces %} 的客户端时可能遇到的问题的故障排除信息。'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
redirect_from:
  - /codespaces/troubleshooting/troubleshooting-codespaces-clients
ms.openlocfilehash: 682160b3b92960487c0709fc411fc2143d18f415
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159435'
---
{% jetbrains %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains %}

{% webui %}

## {% data variables.product.prodname_vscode %} Web 客户端故障排除

如果在非基于 Chromium 的浏览器中使用 {% data variables.product.prodname_github_codespaces %} 时遇到问题，请尝试切换到基于 Chromium 的浏览器，例如 Google Chrome 或 Microsoft Edge。 或者，在 [`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen) 存储库中通过搜索标记有浏览器名称（如 [`firefox`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+label%3Afirefox) 或 [`safari`](https://github.com/Microsoft/vscode/issues?q=is%3Aopen+is%3Aissue+label%3Asafari)）的问题来检查浏览器是否存在已知问题。

如果在基于 Chromium 的浏览器中使用 {% data variables.product.prodname_github_codespaces %} 时遇到问题，可在 [`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen) 存储库中检查是否遇到 {% data variables.product.prodname_vscode_shortname %} 的另一个已知问题。

### 与在本地使用 {% data variables.product.prodname_vscode_shortname %} 的差异

在浏览器中使用 {% data variables.product.prodname_vscode_shortname %} Web 客户端打开 codespace 时，你会注意到与在 {% data variables.product.prodname_vscode_shortname %} 桌面应用程序的本地工作区中工作有一些差异。 例如，某些键绑定将不同或丢失，并且某些扩展的行为可能不同。 有关摘要，请参阅 {% data variables.product.prodname_vscode_shortname %} 文档中的“[已知限制和调整](https://code.visualstudio.com/docs/remote/codespaces#_known-limitations-and-adaptations)”。

可使用 [`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+codespaces) 存储库中的 {% data variables.product.prodname_vscode_shortname %} 体验检查已知问题并记录新问题。

### {% data variables.product.prodname_vscode %} Insiders

{% data variables.product.prodname_vscode %} Insiders 是 {% data variables.product.prodname_vscode_shortname %} 中最常见的版本。 它具有所有最新功能和错误修复，但偶尔也可能包含导致构建中断的新问题。

如果你使用的是 Insiders 版本并发现损坏的行为，我们建议切换到 {% data variables.product.prodname_vscode %} Stable 版，然后重试。

单击编辑器左下方的 {% octicon "gear" aria-label="The manage icon" %}，然后选择“切换到稳定版本…”。如果 {% data variables.product.prodname_vscode_shortname %} Web 版本未加载或 {% octicon "gear" aria-label="The manage icon" %} 图标不可用，可将 `?vscodeChannel=stable` 追加到 codespace URL 并在该 URL 处加载 codespace 来强制切换到 {% data variables.product.prodname_vscode %} 稳定版。

如果在 {% data variables.product.prodname_vscode %} 稳定版中未修复此问题，请检查已知问题，如果需要，请在 [`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+codespaces) 存储库中记录 {% data variables.product.prodname_vscode_shortname %} 体验的新问题。

{% endwebui %}

{% vscode %}

## {% data variables.product.prodname_vscode_shortname %} 故障排除

在 {% data variables.product.prodname_vscode_shortname %} 桌面应用程序中打开 codespace 时，你可能会注意到与在本地工作区中工作相比存在一些差异，但体验应该相似。 

如果遇到问题，可使用 [`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+codespaces) 存储库中的 {% data variables.product.prodname_vscode_shortname %} 体验检查已知问题并记录新问题。

### {% data variables.product.prodname_vscode %} Insiders

{% data variables.product.prodname_vscode %} Insiders 是 {% data variables.product.prodname_vscode_shortname %} 中最常见的版本。 它具有所有最新功能和错误修复，但偶尔也可能包含导致构建中断的新问题。

如果你使用的是 Insiders 版本并发现损坏的行为，我们建议切换到 {% data variables.product.prodname_vscode %} Stable 版，然后重试。

若要切换到 {% data variables.product.prodname_vscode %} 稳定版，请关闭 {% data variables.product.prodname_vscode %} Insiders 应用程序，打开 {% data variables.product.prodname_vscode %} 稳定版应用程序，然后重新打开 codespace。

如果在 {% data variables.product.prodname_vscode %} 稳定版中未修复此问题，请检查已知问题，如果需要，请在 [`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+codespaces) 存储库中记录 {% data variables.product.prodname_vscode_shortname %} 体验的新问题。

{% endvscode %}

{% jetbrains %}

## JetBrains IDE 故障排除

### 性能问题

建议使用至少具有 4 个内核的 {% data variables.product.prodname_github_codespaces %} 计算机类型来运行任何 JetBrains IDE。 有关详细信息，请参阅“[更改 codespace 的计算机类型](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace)”。

如果使用的是具有 4 个或更多内核的计算机，但是在 JetBrains 中体验到的性能感觉有点缓慢，则可能需要增加最大 Java 堆大小。 

建议将最大堆大小设置为 2862 MiB (3 GB) 和远程主机 RAM 的 60% 之间。

下面提供了一些指导作为初始起点，你可以根据代码库的大小和运行应用程序所需的内存进行调整。 例如，如果你有一个大型或复杂的代码库，则可能需要进一步增加堆大小。 如果应用程序较大，则可以设置较小的堆大小，以允许应用程序获得更多内存。

| 计算机类型   | 最大堆大小 |
| -------------- | ----------------- |
| 4 个内核         | 3 GB              |
| 8 个内核         | 4 GB              |
| 16 或 32 个内核 | 8 GB              |

1. 在应用程序窗口顶部的导航栏左侧，单击 codespace 的名称。

   ![JetBrains 中“资源”按钮的屏幕截图](/assets/images/help/codespaces/jetbrains-resources-button.png)

1. 在“性能”选项卡中，注意 CPU 负载和内存详细信息。 这些值将指示计算机是否重载。
 
   ![JetBrains 中“Localhost”按钮的屏幕截图](/assets/images/help/codespaces/jetbrains-performance.png)

1. 单击“设置”选项卡并编辑堆大小，将其增加到不超过 codespace 可用内存的 60%。

   ![最大堆大小设置的屏幕截图](/assets/images/help/codespaces/jetbrains-heap-setting.png)

1. 单击“保存并重启”。

### SSH 连接问题

若要通过在 codespace 中运行的 SSH 服务器进行连接，必须在 `~/.ssh` 目录（MacOS 和 Linux）或 `%HOMEPATH%\.ssh` 目录 (Windows) 中具有已添加到 {% data variables.product.prodname_dotcom %} 帐户的 SSH 密钥。 如果此目录中没有任何密钥，{% data variables.product.prodname_cli %} 将生成密钥。 有关详细信息，请参阅“[将新的 SSH 密钥添加到 {% data variables.product.prodname_dotcom %} 帐户](/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account?platform=windows&tool=webui)”。

如果遇到密钥验证问题，请尝试升级 {% data variables.product.prodname_cli %} 的版本。 有关信息，请参阅 {% data variables.product.prodname_cli %} 的自述文件中的[升级说明](https://github.com/cli/cli#installation)。

### JetBrains IDE 问题

有关你正在使用的 JetBrains IDE 或 JetBrains 网关应用程序特定问题的帮助，请参阅 JetBrains 网站上的“[产品支持](https://www.jetbrains.com/support/)”。

{% endjetbrains %}

