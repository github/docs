---
ms.openlocfilehash: da828b3b969dfc24b1f71400f336cccfa1f4d004
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "145108524"
---
Konfiguriere den Load-Balancer, um eine der folgenden URLs zu überprüfen:
 - `https://HOSTNAME/status` wenn HTTPS aktiviert ist (Standard)
 - `http://HOSTNAME/status` wenn HTTPS deaktiviert ist

Bei der Überprüfung wird der Statuscode `200` (OK) zurückgegeben, wenn der Knoten fehlerfrei ist und zum Beantworten von Endbenutzeranforderungen verfügbar ist.
