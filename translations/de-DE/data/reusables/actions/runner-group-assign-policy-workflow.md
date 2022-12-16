---
ms.openlocfilehash: 115103621cb0b156ebb7a3c2c72f0f303c497cfb
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "146178607"
---
{%- ifversion restrict-groups-to-workflows %}
1. Weise eine Richtlinie für den Workflow-Zugriff zu.

   Du kannst eine Runner-Gruppe so konfigurieren, dass auf eine bestimmte Liste von Workflows oder auf alle Workflows zugegriffen werden kann. Diese Einstellung kann nicht überschrieben werden, wenn du die von einem Unternehmen freigegebene Runner-Gruppe einer Organisation konfigurierst. Wenn du angibst, welcher Workflow auf die Runner-Gruppe zugreifen kann, musst du den vollständigen Pfad zum Workflow verwenden, einschließlich des Repository-Namens und des Besitzers, und du musst den Workflow an eine Verzweigung, ein Tag oder einen vollständigen SHA anheften. Beispiel: `octo-org/octo-repo/.github/workflows/build.yml@v2, octo-org/octo-repo/.github/workflows/deploy.yml@d6dc6c96df4f32fa27b039f2084f576ed2c5c2a5, monalisa/octo-test/.github/workflows/test.yml@main`. 
   
   Zugriff auf die Runner-Gruppe erhalten nur Aufträge, die direkt innerhalb der ausgewählten Workflows definiert sind.{%- endif %}
