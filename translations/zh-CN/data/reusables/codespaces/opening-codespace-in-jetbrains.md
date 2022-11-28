---
ms.openlocfilehash: 52206649d45bd9d76bcc593adeffa47318a70880
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/09/2022
ms.locfileid: "148159508"
---
如果已将 JetBrains 网关设置为默认编辑器，则在从 {% data variables.product.prodname_dotcom_the_website %} 打开 codespace 时，网关将自动启动。 

如果 JetBrains 网关不是默认编辑器，你仍然可以在 JetBrains 中打开 codespace，方法是转到 [github.com/codespaces](https://github.com/codespaces) 的“你的 codespace”页，然后单击要打开的 codespace 右侧的省略号 (...)。 有关详细信息，请参阅“[打开现有 codespace](/codespaces/developing-in-codespaces/opening-an-existing-codespace?tool=webui)”。

或者，也可以打开 JetBrains 网关并选择现有 codespace，如以下过程所述。

1. 打开 JetBrains 网关应用程序。
1. 单击“连接到 {% data variables.product.prodname_codespaces %}”。

   ![JetBrains 网关初始视图的屏幕截图](/assets/images/help/codespaces/jetbrains-gateway-connect.png)

1. 在“你的 Codespace”列表中，单击要处理的 codespace。

   ![JetBrains 网关 codespace 列表的屏幕截图](/assets/images/help/codespaces/jetbrains-gateway-codespaces.png)

1. 在“可用 IDE”列表中，单击要使用的 JetBrains IDE。 下次连接到 codespace 时，网关将记住你的选择。

   ![JetBrains 网关 codespace 列表的屏幕截图](/assets/images/help/codespaces/jetbrains-gateway-ides.png)

1. 单击“连接”  。

   {% note %}

   **注意**：如果运行的是防火墙：首次连接到远程资源时，系统可能会提示允许 JetBrains 网关跨网络通信。

   {% endnote %}
