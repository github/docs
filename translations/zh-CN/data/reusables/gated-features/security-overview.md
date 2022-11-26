---
ms.openlocfilehash: d358c88fda2590864a15c4cd3eb2f0bfb39cd78d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "147525703"
---
{% ifversion fpt %}安全概览适用于使用 {% data variables.product.prodname_enterprise %} 的组织。 有关详细信息，请参阅“[GitHub 的产品](/articles/githubs-products)”。
{% elsif security-overview-displayed-alerts %}所有组织和企业都有安全概览。 如果使用 {% data variables.product.prodname_GH_advanced_security %}{% ifversion ghae %}（在 beta 版本发布期间免费），{% endif %}你将看到其他信息。 {% data reusables.advanced-security.more-info-ghas %} {% elsif ghes < 3.7 %}组织安全概览在你拥有 {% data variables.product.prodname_GH_advanced_security %} 许可证时可用。 {% data reusables.advanced-security.more-info-ghas %} {% elsif ghae %}如果你使用 {% data variables.product.prodname_GH_advanced_security %}（在 beta 版本发布期间免费），则企业和组织的安全概览可用。 {% data reusables.advanced-security.more-info-ghas %} {% endif %}
