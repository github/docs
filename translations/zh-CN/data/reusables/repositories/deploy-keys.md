---
ms.openlocfilehash: f4ea2cee931b8d44b44f0febba3304f41bac404c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "145086843"
---
可以使用部署密钥（即授予对单个存储库的访问权限的 SSH 密钥）从 {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} 上的存储库启动项目到服务器。 {% data variables.product.product_name %} 将密钥的公共部分直接附加到存储库而不是个人帐户，密钥的私有部分仍保留在服务器上。 有关详细信息，请参阅“[传递部署](/rest/guides/delivering-deployments)”。
