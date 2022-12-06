---
ms.openlocfilehash: 8eff695be10a097b9693095c219f3a67a3895560
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: "145089324"
---
Das *client.js*-Skript sucht nach den Umgebungsvariablen `REDIS_HOST` und `REDIS_PORT`, um den Client zu erstellen. Der Workflow legt diese beiden Umgebungsvariablen im Rahmen des Schritts „Mit Redis verbinden“ fest, um sie dem *client.js*-Skript zur Verfügung zu stellen. Weitere Informationen zum Skript findest du unter [Testen des Redis-Dienstcontainers](#testing-the-redis-service-container).
