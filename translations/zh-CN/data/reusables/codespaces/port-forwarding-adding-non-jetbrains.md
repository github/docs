---
ms.openlocfilehash: 5aef043edaeaf981964defece5a3a008a89ee5b8
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/09/2022
ms.locfileid: "148159502"
---
## 将端口添加到代码空间配置

你可以将转发的端口添加到存储库的 {% data variables.product.prodname_github_codespaces %} 配置中，因此该端口将自动为从存储库创建的所有 codespace 转发。 更新配置后，必须重建任何以前创建的代码空间以应用更改。 有关详细信息，请参阅“[开发容器简介](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#applying-configuration-changes-to-a-codespace)”。

可以使用 `forwardPorts` 属性在 `.devcontainer.json` 文件中手动配置转发端口，也可以在浏览器中已打开的 codespace 或 {% data variables.product.prodname_vscode_shortname %} 桌面应用程序中使用“端口”面板。

{% data reusables.codespaces.navigate-to-ports-tab %}
1. 右键单击要添加到 codespace 配置的端口，然后单击“设置标签并更新 devcontainer.json”。
  ![右键菜单中设置标签并将端口添加到 devcontainer.json 的选项](/assets/images/help/codespaces/update-devcontainer-to-add-port-option.png) {% data reusables.codespaces.type-port-label %}