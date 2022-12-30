---
ms.openlocfilehash: 37edbef15e16094672ca7be6dbfbc28390b37bca
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "146332318"
---
对 {% data variables.product.prodname_ghe_server %} 主机名的 DNS 查询应解析为负载均衡器。 我们建议您启用子域隔离。 如果启用了子域隔离，另一个通配符记录 `*.HOSTNAME` 也应解析到负载均衡器。 有关详细信息，请参阅“[启用子域隔离](/enterprise/admin/guides/installation/enabling-subdomain-isolation/)”。
