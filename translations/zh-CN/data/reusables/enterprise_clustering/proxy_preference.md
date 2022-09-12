---
ms.openlocfilehash: 69c0fb0e38433bb6c7745701f77efed76421f0cc
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "145097850"
---
如果您的负载均衡器可以支持 PROXY 协议，我们强烈建议您实施该协议。 如果不能提供 PROXY 支持，使用 `X-Forwarded-For` 标头也可以对 HTTP 和 HTTPS 端口进行负载均衡。
