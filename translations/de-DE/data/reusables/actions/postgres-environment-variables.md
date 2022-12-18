---
ms.openlocfilehash: 38cb1809a69bf402d3fac174d5e8597dc0db7b8b
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: "145089347"
---
Das *client.js*-Skript sucht nach den Umgebungsvariablen `POSTGRES_HOST` und `POSTGRES_PORT`, um den Client zu erstellen. Der Workflow legt diese beiden Umgebungsvariablen im Rahmen des Schritts „Mit PostgreSQL verbinden“ fest, um sie dem *client.js*-Skript zur Verfügung zu stellen. Weitere Informationen zum Skript findest du unter [Testen des PostgreSQL-Dienstcontainers](#testing-the-postgresql-service-container).
