---
ms.openlocfilehash: 50b42f8e3c703723fc592bf63881c997e88b059c
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145103713"
---
Par défaut, {% data variables.product.product_name %} optimise le nombre de travaux exécutés en parallèle en fonction de la disponibilité de l’exécuteur. Pour définir le nombre maximal de travaux pouvant s’exécuter simultanément lors de l’utilisation d’une stratégie de travail `matrix`, utilisez `jobs.<job_id>.strategy.max-parallel`.

Par exemple, le workflow suivant exécute au maximum de deux travaux à la fois, même s’il existe des exécuteurs disponibles pour exécuter les six travaux en même temps.

```yaml
jobs:
  example_matrix:
    strategy:
      max-parallel: 2
      matrix:
        version: [10, 12, 14]
        os: [ubuntu-latest, windows-latest]
```
