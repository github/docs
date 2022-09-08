---
ms.openlocfilehash: c32095fa49627698da6e8bb888409fec2cda2d4b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "145100277"
---
如果 {% data variables.product.prodname_pages %} 站点已禁用，但设置了自定义域，则存在域接管的风险。 在您的网站被禁用时拥有通过 DNS 提供商配置的自定义域，可能会导致其他人在您的一个子域上托管网站。

验证自定义域可防止其他 GitHub 用户将你的域用于他们的存储库。 如果你的域未经过验证，并且 {% data variables.product.prodname_pages %} 站点已禁用，则应立即通过 DNS 提供商更新或删除 DNS 记录。
