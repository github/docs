---
ms.openlocfilehash: f51b958c86c6ede52591986f9d208864612047db
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: "145069592"
---
### Указание версии и архитектуры JVM

Начальный рабочий процесс настраивает `PATH`, чтобы содержать OpenJDK 8 для платформы x64. Если вы хотите использовать другую версию Java или выбрать другую архитектуру (`x64` или `x86`), можно использовать действие `setup-java` для выбора другой среды выполнения Java.

Например, чтобы использовать JDK версии 11, предоставляемой Adoptium для платформы x64, можно выполнить действие `setup-java` и установить параметры `java-version`,`distribution` и `architecture` на `'11'`, `'adopt'` и `x64`.

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

Дополнительные сведения см. в описании действия [`setup-java`](https://github.com/actions/setup-java).
