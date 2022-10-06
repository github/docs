---
ms.openlocfilehash: 02f279903abd69f50ad55aa88462c9c8e4b9a1a8
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: "145091342"
---
`jobs.<job_id>.strategy.matrix` を使用して、さまざまなジョブの設定のマトリックスを定義します。 マトリックス内で、1 つ以上の変数と、それに続く値の配列を定義します。 たとえば、次のマトリックスには、値 `[10, 12, 14]` を伴う `version` という名前の変数と、値 `[ubuntu-latest, windows-latest]` を伴う `os` という名前の変数があります。

```yaml
jobs:
  example_matrix:
    strategy:
      matrix:
        version: [10, 12, 14]
        os: [ubuntu-latest, windows-latest]
```

ジョブは、変数の可能な組み合わせごとに実行されます。 この例のワークフローでは 6 つのジョブが、`os` 変数と `version` 変数の組み合わせごとに 1 つずつ実行されます。 

既定で、{% data variables.product.product_name %} は、ランナーの可用性に応じて並列実行されるジョブの数を最大化します。 マトリックス内の変数の順序によって、ジョブが作成される順序が決まります。 定義する最初の変数は、ワークフローの実行で最初に作成されるジョブになります。 たとえば、上記のマトリックスでは、次の順序でジョブが作成されます。

- `{version: 10, os: ubuntu-latest}`
- `{version: 10, os: windows-latest}`
- `{version: 12, os: ubuntu-latest}`
- `{version: 12, os: windows-latest}`
- `{version: 14, os: ubuntu-latest}`
- `{version: 14, os: windows-latest}`

このマトリックスでは、ワークフローの実行ごとに最大で 256 のジョブが生成されます。 この制限は、{% data variables.product.product_name %} ホスト ランナーとセルフホステッド ランナーの両方に適用されます。

定義した変数は、`matrix` のコンテキストでのプロパティとなり、ワークフロー ファイルの他のエリア内のプロパティを参照できます。 この例では、`matrix.version` および `matrix.os` を使用して、ジョブが使用している `version` および `os` の現在の値にアクセスできます。 詳細については、「[コンテキスト](/actions/learn-github-actions/contexts)」を参照してください。
