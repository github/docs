---
ms.openlocfilehash: 37edbef15e16094672ca7be6dbfbc28390b37bca
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "146332320"
---
DNS-Nachschlagevorgänge für den {% data variables.product.prodname_ghe_server %}-Hostnamen sollten im Load-Balancer aufgelöst werden. Es wird empfohlen, dass Du die Subdomain-Isolation aktivierst. Bei aktivierter Subdomain-Isolation sollte ein zusätzlicher Platzhaltereintrag (`*.HOSTNAME`) ebenfalls im Lastenausgleich aufgelöst werden. Weitere Informationen findest du unter [Aktivieren der Subdomain-Isolation](/enterprise/admin/guides/installation/enabling-subdomain-isolation/).
