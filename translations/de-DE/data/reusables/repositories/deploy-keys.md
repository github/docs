---
ms.openlocfilehash: f4ea2cee931b8d44b44f0febba3304f41bac404c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "145090678"
---
Du kannst Projekte aus einem Repository in {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} auf deinem Server starten, indem du einen Bereitstellungsschlüssel verwendest. Dies ist ein SSH-Schlüssel, der Zugriff auf ein einzelnes Repository gewährt. {% data variables.product.product_name %} fügt den öffentlichen Teil des Schlüssels direkt an dein Repository anstatt an dein persönliches Konto an, und der private Teil des Schlüssels verbleibt auf deinem Server. Weitere Informationen findest du unter [Übermitteln von Bereitstellungen](/rest/guides/delivering-deployments).
