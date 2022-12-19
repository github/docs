---
ms.openlocfilehash: da828b3b969dfc24b1f71400f336cccfa1f4d004
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: "145100857"
---
配置负载均衡器以检查以下 URL 之一：
 - 如果已启用 HTTPS（默认），则检查 `https://HOSTNAME/status`
 - 如果已禁用 HTTPS（默认），则检查 `http://HOSTNAME/status`

如果节点运行正常并且可为最终用户的请求提供服务，则检查将返回状态代码 `200`（正常）。
