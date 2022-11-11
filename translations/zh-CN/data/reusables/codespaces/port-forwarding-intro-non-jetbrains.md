---
ms.openlocfilehash: 9523f75cde4298a6e1cd4335127a1dfb5bb342b5
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/09/2022
ms.locfileid: "148159483"
---
在 codespace 内运行的应用程序将输出显示到包含本地主机 URL 的终端（例如 `http://localhost:PORT` 或 `http://127.0.0.1:PORT`）时，端口将自动转发。 如果你在浏览器或 {% data variables.product.prodname_vscode %} 中使用 {% data variables.product.prodname_github_codespaces %}，则终端中的 URL 字符串将转换为一个链接，你可以单击该链接在本地计算机上查看网页。 默认情况下，{% data variables.product.prodname_github_codespaces %} 使用 HTTP 转发端口。

![自动端口转发](/assets/images/help/codespaces/automatic-port-forwarding.png)

您还可以手动转发端口、标记转发的端口、与组织成员共享转发的端口、公开共享转发的端口以及将转发的端口添加到代码空间配置中。

{% note %}

注意：{% data reusables.codespaces.restrict-port-visibility %}

{% endnote %}

## 转发端口

您可以手动转发未自动转发的端口。