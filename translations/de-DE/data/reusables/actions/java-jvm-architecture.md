---
ms.openlocfilehash: f51b958c86c6ede52591986f9d208864612047db
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "145068244"
---
### Spezifizieren der JVM-Version und -Architektur

Der Starterworkflow richtet `PATH` so ein, dass OpenJDK 8 für die x64-Plattform enthalten ist. Wenn du eine andere Java-Version verwenden willst oder auf eine andere Architektur (`x64` oder `x86`) abzielen möchtest, kannst du die `setup-java`-Aktion verwenden, um eine andere Java-Laufzeitumgebung auszuwählen.

Um etwa Version 11 des JDK zu verwenden, das von Adoptium für die x64-Plattform bereitgestellt wird, kannst du die Aktion `setup-java` verwenden und die Parameter `java-version`, `distribution` und `architecture` für `'11'`, `'adopt'` und `x64` konfigurieren.

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

Weitere Informationen findest du unter der Aktion [`setup-java`](https://github.com/actions/setup-java).
