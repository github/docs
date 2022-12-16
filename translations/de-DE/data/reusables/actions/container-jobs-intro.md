---
ms.openlocfilehash: 8acbacc0b39b108fdd05473ceb85e65bfe0e92d0
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: "145105103"
---
Das Konfigurieren von Aufträgen für die Ausführung in einem Container vereinfacht die Netzwerkkonfigurationen zwischen dem Auftrag und den Dienstcontainern. Docker-Container im gleichen benutzerdefinierten Bridge-Netzwerk exponieren gegenseitig alle Ports, sodass Du keinen der Servicecontainer-Ports dem Docker-Host zuordnen musst. Mit der im Workflow konfigurierten Kennzeichnung kannst Du vom Auftrags-Container her auf den Dienst-Container zugreifen.
