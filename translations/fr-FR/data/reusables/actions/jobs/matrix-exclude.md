---
ms.openlocfilehash: a38aec9a1becf4c15877b2d3057d413b6d609f6c
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "147880187"
---
Pour supprimer des configurations spécifiques définies dans la matrice, utilisez `jobs.<job_id>.strategy.matrix.exclude`. Une configuration exclue a seulement besoin d’être une correspondance partielle pour être exclue. Par exemple, le workflow suivant exécute neuf travaux : un travail pour chacune des 12 configurations, moins un travail exclu qui correspond à `{os: macos-latest, version: 12, environment: production}`, et les deux travaux exclus qui correspondent à `{os: windows-latest, version: 16}`.

```yaml
strategy:
  matrix:
    os: [macos-latest, windows-latest]
    version: [12, 14, 16]
    environment: [staging, production]
    exclude:
      - os: macos-latest
        version: 12
        environment: production
      - os: windows-latest
        version: 16
runs-on: {% raw %}${{ matrix.os }}{% endraw %}
```

{% note %}

**Remarque :** Toutes les combinaisons `include` sont traitées après `exclude`. Cela vous permet d’utiliser `include` pour rajouter des combinaisons qui ont été précédemment exclues.

{% endnote %}
