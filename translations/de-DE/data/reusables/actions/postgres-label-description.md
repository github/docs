---
ms.openlocfilehash: 67ef84929e93a9f0fa1acc99e2035b2d62cb1574
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: "145068148"
---
Der Workflow konfiguriert einen Dienstcontainer mit der Bezeichnung `postgres`. Alle Dienste müssen in einem Container ausgeführt werden, daher erfordert jeder Dienst die Angabe des Containers `image`. Dieses Beispiel verwendet das `postgres`-Containerimage, stellt das standardmäßige PostgreSQL-Passwort bereit und enthält Optionen für Systemdiagnosen, um sicherzustellen, dass der Dienst ausgeführt wird. Weitere Informationen findest du unter [postgres-Image](https://hub.docker.com/_/postgres) auf Docker Hub.
