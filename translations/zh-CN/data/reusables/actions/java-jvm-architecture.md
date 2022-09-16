---
ms.openlocfilehash: f51b958c86c6ede52591986f9d208864612047db
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: "145065943"
---
### 指定 JVM 版本和架构

初学者工作流程将 `PATH` 设置为包含 OpenJDK 8，用于 x64 平台。 如果要使用不同的 Java 版本或面向不同的体系结构（`x64` 或 `x86`），可以使用 `setup-java` 操作选择不同的 Java 运行时环境。

例如，要使用由 Adoptium 提供的 11 版本的 JDK，用于 x64 平台，可以使用 `setup-java` 操作并将 `java-version`、`distribution` 和 `architecture` 参数配置为 `'11'`、`'adopt'` 和 `x64`。

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

有关详细信息，请参阅 [`setup-java`](https://github.com/actions/setup-java) 操作。
