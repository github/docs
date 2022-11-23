---
ms.openlocfilehash: e3bbac236dce195487aada32132e9b78e27500ea
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "145102368"
---
Du kannst die Verfügbarkeit von {% data variables.product.prodname_ghe_server %} überwachen, indem du den Statuscode überprüfst, der für die `https://HOSTNAME/status`-URL zurückgegeben wird. Eine Appliance, die den Benutzerdatenverkehr verarbeiten kann, gibt den Statuscode `200` (OK) zurück. Eine Appliance kann aus einigen Gründen `503` (Dienst nicht verfügbar) zurückgeben:
 - Die Appliance ist ein passives Replikat, beispielsweise ein Replikat in einer Hochverfügbarkeitskonfiguration mit zwei Knoten.
 - Die Appliance befindet sich im Wartungsmodus.
 - Die Appliance ist Bestandteil der Geo-Replikationskonfiguration, ist jedoch ein inaktives Replikat.

Du kannst auch das Replikationsübersichts-Dashboard verwenden, das unter der folgenden Adresse verfügbar ist:

`https://HOSTNAME/setup/replication`
