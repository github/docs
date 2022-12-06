---
ms.openlocfilehash: 50b42f8e3c703723fc592bf63881c997e88b059c
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "145103712"
---
Standardmäßig maximiert {% data variables.product.product_name %} die Anzahl der parallel ausgeführten Aufträge basierend auf der Runnerverfügbarkeit. Um die maximale Anzahl von Aufträgen festzulegen, die bei der Auftragsstrategie `matrix` gleichzeitig ausgeführt werden können, verwende `jobs.<job_id>.strategy.max-parallel`.

Der folgende Workflow führt zum Beispiel maximal zwei Aufträge auf einmal aus, auch wenn es Runner gibt, die alle sechs Aufträge auf einmal ausführen können.

```yaml
jobs:
  example_matrix:
    strategy:
      max-parallel: 2
      matrix:
        version: [10, 12, 14]
        os: [ubuntu-latest, windows-latest]
```
