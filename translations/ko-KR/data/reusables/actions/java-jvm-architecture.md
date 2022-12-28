---
ms.openlocfilehash: f51b958c86c6ede52591986f9d208864612047db
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145068245"
---
### JVM 버전 및 아키텍처 지정

시작 워크플로는 x64 플랫폼의 경우 OpenJDK 8을 포함하도록 `PATH`를 설정합니다. 다른 버전의 Java를 사용하거나 다른 아키텍처(`x64` 또는 `x86`)를 대상으로 지정하려는 경우 `setup-java` 작업을 사용하여 다른 Java 런타임 환경을 선택할 수 있습니다.

예를 들어 x64 플랫폼용 Adoptium에서 제공하는 JDK 버전 11을 사용하려면 `setup-java` 작업을 사용하고 `java-version`, `distribution` 및 `architecture` 매개 변수를 각각 `'11'`, `'adopt'` 및 `x64`로 구성할 수 있습니다.

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

자세한 내용은 [`setup-java`](https://github.com/actions/setup-java) 작업을 참조하세요.
