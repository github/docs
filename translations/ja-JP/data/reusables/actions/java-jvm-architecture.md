---
ms.openlocfilehash: f51b958c86c6ede52591986f9d208864612047db
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: "145068243"
---
### JVMのバージョンとアーキテクチャの指定

スターター ワークフローで x64 プラットフォーム用の OpenJDK 8 を含むように `PATH` を設定します。 異なるバージョンの Java を使用する場合、あるいは異なるアーキテクチャ (`x64` または `x86`) をターゲットとする場合、`setup-java` アクションを使って異なる Java ランタイム環境を選択できます。

たとえば、x64 プラットフォームに対して Adoptium によって提供される JDK のバージョン 11 を使用するには、`setup-java` アクションを使用して、`java-version`、`distribution`、`architecture` パラメーターを `'11'`、`'adopt'`、`x64` に設定します。

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

詳細については、「[`setup-java`](https://github.com/actions/setup-java) アクション」を参照してください。
