---
ms.openlocfilehash: 9007a7541d3ee57656a975af1bf430673c796d09
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "145107324"
---
Wenn du eine Apex-Domäne als deine benutzerdefinierte Domäne verwendest, empfehlen wir, auch eine `www`-Unterdomäne einzurichten. Wenn Du über Deinen DNS-Anbieter die richtigen Datensätze für jeden Domänentyp konfigurierst, wird {% data variables.product.prodname_pages %} automatisch Umleitungen zwischen den Domänen erstellen. Wenn du beispielsweise `www.example.com` als benutzerdefinierte Domäne für deine Website konfigurierst, und du {% data variables.product.prodname_pages %}- DNS-Einträge für Apex und `www`-Domänen eingerichtet hast, wird `example.com` zu `www.example.com` umgeleitet. Beachte, dass automatische Weiterleitungen nur für die `www`-Unterdomäne gelten. Automatische Weiterleitungen gelten nicht für andere Unterdomänen, wie z. B. `blog`.
