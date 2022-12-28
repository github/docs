---
ms.openlocfilehash: 22cef14793f2fe8ffa5937d60056f05f1be0265a
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/09/2022
ms.locfileid: "148159416"
---
## 共享端口

{% note %}

注意：如果你的组织使用 {% data variables.product.prodname_team %} 或 {% data variables.product.prodname_ghe_cloud %}，则只能将端口专用于组织。

{% endnote %}

如果要与其他人共享转发的端口，则可以将该端口专用于您的组织，也可以将该端口设为公共端口。 将端口设为组织专用后，组织中具有该端口 URL 的任何人都可以查看正在运行的应用程序。 将端口设为公共端口后，知道 URL 和端口号的任何人都可以查看正在运行的应用程序，而无需进行身份验证。

{% note %}

注意：你选择的端口可见性选项可能会受到为组织配置的策略的限制。 有关详细信息，请参阅“[限制转发端口的可见性](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports)”。

{% endnote %}