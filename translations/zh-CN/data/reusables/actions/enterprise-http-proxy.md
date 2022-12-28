---
ms.openlocfilehash: 4efb2b0e214ee93dc8815055b005e11ea29534bb
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: "148107675"
---
如果在 {% data variables.location.product_location %} 上配置了 HTTP 代理服务器：

  - 必须将 `localhost` 和 `127.0.0.1` 添加到“HTTP 代理排除”列表。
  - 如果外部存储位置不可路由，则还必须将外部存储 URL 添加到排除列表中。

  有关更改代理设置的详细信息，请参阅“[配置出站 Web 代理服务器](/admin/configuration/configuring-an-outbound-web-proxy-server)”。
