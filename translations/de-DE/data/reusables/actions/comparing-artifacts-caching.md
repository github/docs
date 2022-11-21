---
ms.openlocfilehash: 48326e29174e0cba6f56d99436271a68f65189bc
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "145105108"
---
## Vergleich: Artefakte v/s Zwischenspeicherung von Abhängigkeiten

Artefakte und Caching sind ähnlich, da sie die Möglichkeit bieten, Dateien auf {% data variables.product.prodname_dotcom %} zu speichern, aber die beiden Funktionalitäten bieten verschiedene Anwendungsfälle und dürfen nicht miteinander verwechselt werden.

- Verwende die Zwischenspeicherung, wenn du Dateien wiederverwenden möchtest, die sich zwischen Aufträgen oder Workflowausführungen nur selten verändern, zum Beispiel Buildabhängigkeiten aus einem Paketverwaltungssystem.
- Verwende Artefakte, wenn du von einem Auftrag generierte Dateien speichern möchtest, um diese nach einer Workflowausführung zu öffnen, zum Beispiel Binärdateien oder Buildprotokolle. 
