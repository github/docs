---
ms.openlocfilehash: f51b958c86c6ede52591986f9d208864612047db
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145066581"
---
### Spécification de la version et de l’architecture de JVM

Le workflow de démarrage configure le `PATH` pour contenir OpenJDK 8 pour la plateforme x64. Si vous souhaitez utiliser une autre version de Java ou cibler une architecture différente (`x64` ou `x86`), vous pouvez utiliser l’action `setup-java` pour choisir un autre environnement d’exécution Java.

Par exemple, pour utiliser la version 11 du JDK fourni par Adoptium pour la plateforme x64, vous pouvez utiliser l’action `setup-java` et configurer les paramètres `java-version`, `distribution` et `architecture` sur `'11'`, `'adopt'` et `x64`.

```yaml{:copy}
steps:
  - uses: {% data reusables.actions.action-checkout %}
  - name: Set up JDK 11 for x64
    uses: {% data reusables.actions.action-setup-java %}
    with:
      java-version: '11'
      distribution: 'adopt'
      architecture: x64
```

Pour plus d’informations, consultez l’action [`setup-java`](https://github.com/actions/setup-java).
