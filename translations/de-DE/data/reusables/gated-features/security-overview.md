---
ms.openlocfilehash: d358c88fda2590864a15c4cd3eb2f0bfb39cd78d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "147525705"
---
{% ifversion fpt %} Die Sicherheitsübersicht ist für Organisationen verfügbar, die {% data variables.product.prodname_enterprise %} verwenden. Weitere Informationen findest du bei den [GitHub-Produkten](/articles/githubs-products).
{% elsif security-overview-displayed-alerts %} Alle Organisationen und Unternehmen verfügen über eine Sicherheitsübersicht. Wenn du {% data variables.product.prodname_GH_advanced_security %}{% ifversion ghae %} verwendest, das in der Betaversion kostenlos ist,{% endif %} werden zusätzliche Informationen angezeigt. {% data reusables.advanced-security.more-info-ghas %} {% elsif ghes < 3.7 %} Die Sicherheitsübersicht für deine Organisation ist verfügbar, wenn du über eine Lizenz für {% data variables.product.prodname_GH_advanced_security %} verfügst. {% data reusables.advanced-security.more-info-ghas %} {% elsif ghae %} Eine Sicherheitsübersicht für dein Unternehmen und für Organisationen ist verfügbar, wenn du {% data variables.product.prodname_GH_advanced_security %} verwendest, das in der Betaversion kostenlos ist. {% data reusables.advanced-security.more-info-ghas %} {% endif %}
