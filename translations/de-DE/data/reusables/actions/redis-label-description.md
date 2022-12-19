---
ms.openlocfilehash: 662ae539ae3cfdb6446d31664da325a9a67e9a26
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: "145068127"
---
Der Workflow konfiguriert einen Dienstcontainer mit der Bezeichnung `redis`. Alle Dienste müssen in einem Container ausgeführt werden, daher erfordert jeder Dienst die Angabe des Containers `image`. Dieses Beispiel verwendet das `redis`-Containerimage und enthält Optionen für Integritätsüberprüfungen, um die Ausführung des Diensts sicherzustellen. Weitere Informationen findest du im [Redis-Image](https://hub.docker.com/_/redis) für Docker Hub.
