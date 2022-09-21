---
ms.openlocfilehash: c61e071aa06bda0d31a1c4578dfe78addb55867e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "147167377"
---
如果在 {% data variables.product.product_location %} 上配置了 HTTP 代理服务器：
  - 必须将 `localhost` 和 `127.0.0.1` 添加到“HTTP 代理排除”列表。
  - 如果 BYOS 桶不可路由，则还必须将桶的 URL 添加到排除列表。

  有关更改代理设置的详细信息，请参阅“[配置出站 Web 代理服务器](/admin/configuration/configuring-an-outbound-web-proxy-server)”。