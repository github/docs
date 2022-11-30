---
ms.openlocfilehash: 81a94e9dce7fe1354dc1a32f0540ef90a4fe8dcb
ms.sourcegitcommit: 6edb015070d3f0fda4525c6c931f1324626345dc
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: "145105788"
---
Wenn mehr als eine Umgebungsvariable mit dem gleichen Namen definiert ist, verwendet {% data variables.product.prodname_dotcom %} die spezifischste Umgebungsvariable. Beispielsweise wird eine in einem Schritt definierte Umgebungsvariable die Auftrags- und Workflow-Variablen mit dem gleichen Namen überschreiben, während der Schritt ausgeführt wird. Eine für einen Auftrag definierte Variable überschreibt die Workflow-Variable mit dem gleichen Namen, während der Auftrag ausgeführt wird.
