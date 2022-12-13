---
ms.openlocfilehash: 446bc8429d81d54d38eeaf2852a61d25db17da68
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: "145186077"
---
`jobs.<job_id>.outputs` を使って、ジョブの出力の `map` を作成できます。 ジョブの出力は、そのジョブに依存しているすべての下流のジョブから利用できます。 ジョブ依存関係の定義の詳細については、「[`jobs.<job_id>.needs`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idneeds)」を参照してください。

{% data reusables.actions.output-limitations %}

表現が含まれているジョブの出力は、各ジョブの終了時にランナー上で評価されます。 シークレットを含む出力はランナー上で編集され、{% data variables.product.prodname_actions %}には送られません。

依存するジョブでジョブ出力を使うには、`needs` コンテキストを使用できます。 詳細については、「[コンテキスト](/actions/learn-github-actions/contexts#needs-context)」を参照してください。

### 例: ジョブの出力の定義

{% raw %}
```yaml
jobs:
  job1:
    runs-on: ubuntu-latest
    # Map a step output to a job output
    outputs:
      output1: ${{ steps.step1.outputs.test }}
      output2: ${{ steps.step2.outputs.test }}
    steps:
      - id: step1
        run: echo "::set-output name=test::hello"
      - id: step2
        run: echo "::set-output name=test::world"
  job2:
    runs-on: ubuntu-latest
    needs: job1
    steps:
      - run: echo ${{needs.job1.outputs.output1}} ${{needs.job1.outputs.output2}}
```
{% endraw %}
