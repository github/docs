---
title: Codespaces 客户端疑难解答
intro: 您可以在浏览器中使用 {% data variables.product.prodname_codespaces %} ，也可以通过 {% data variables.product.prodname_vscode %}使用。 本文提供常见客户端问题的疑难解答步骤。
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
- Codespaces
shortTitle: Codespaces clients
ms.openlocfilehash: 9b8a04083665a1f2d555d568f855e3ebdf57fb56
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "145098652"
---
## {% data variables.product.prodname_vscode %} 故障排除

当您将桌面版本的 {% data variables.product.prodname_vscode %} 连接到代码空间时，您会注意到与在普通工作区中工作相比几乎没有什么区别，但体验非常相似。 

当您在浏览器中使用 web 中的 {% data variables.product.prodname_vscode %} 打开代码空间时，您会注意到更多差异。 例如，某些键绑定将不同或丢失，并且某些扩展的行为可能不同。 有关摘要，请参阅 {% data variables.product.prodname_vscode %} 文档中的“[已知限制和调整](https://code.visualstudio.com/docs/remote/codespaces#_known-limitations-and-adaptations)”。

可使用 [`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+codespaces) 存储库中的 {% data variables.product.prodname_vscode %} 体验检查已知问题并记录新问题。

### {% data variables.product.prodname_vscode %} Insiders

{% data variables.product.prodname_vscode %} Insiders 是 {% data variables.product.prodname_vscode %} 中最常见的版本。 它具有所有最新功能和错误修复，但偶尔也可能包含导致构建中断的新问题。

如果你使用的是 Insiders 版本并发现损坏的行为，我们建议切换到 {% data variables.product.prodname_vscode %} Stable 版，然后重试。

在 {% data variables.product.prodname_vscode %} 的桌面版本上，可以通过关闭 {% data variables.product.prodname_vscode %} Insiders 应用程序，打开 {% data variables.product.prodname_vscode %} Stable 应用程序，然后重新打开代码空间，切换到 Stable 版。

在 {% data variables.product.prodname_vscode %} 的 Web 版本中，可单击编辑器左下方的 {% octicon "gear" aria-label="The manage icon" %}，然后选择“切换到稳定版本…”。如果 Web 版本未加载或 {% octicon "gear" aria-label="The manage icon" %} 图标不可用，可将 `?vscodeChannel=stable` 追加到 codespace URL 并在该 URL 处加载 codespace 来强制切换到 {% data variables.product.prodname_vscode %} 稳定版本。

如果在 {% data variables.product.prodname_vscode %} Stable 版中未修复问题，请按照上述故障排除说明进行操作。

## 浏览器故障排除

如果在不是基于 Chromium 的浏览器中使用 codespace 时遇到问题，请尝试切换到基于 Chromium 的浏览器，或通过在 `microsoft/vscode` 存储库中搜索标有你的浏览器名称（如 [`firefox`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+label%3Afirefox) 或 [`safari`](https://github.com/Microsoft/vscode/issues?q=is%3Aopen+is%3Aissue+label%3Asafari)）的问题，查找浏览器的已知问题。

如果在基于 Chromium 的浏览器中使用 codespace 时遇到问题，可在 [`microsoft/vscode`](https://github.com/microsoft/vscode/issues) 存储库中检查是否遇到 {% data variables.product.prodname_vscode %} 的另一个已知问题。
