---
ms.openlocfilehash: ec9ff0fb1eb8f9fd06d4da13716b3e8e31a758e5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145883578"
---
`jobs.<job_id>.needs` を使って、このジョブの実行前に正常に完了する必要があるジョブを示します。 文字列型または文字列の配列です。 1つのジョブが失敗した場合、失敗したジョブを続行するような条件式を使用していない限り、そのジョブを必要としている他のジョブはすべてスキップされます。 互いを必要とするジョブが実行に含まれていると、エラー時点以降、依存関係チェーン内のすべてのジョブにエラーが適用されます。

#### 例: 依存ジョブの成功が必要である 

```yaml
jobs:
  job1:
  job2:
    needs: job1
  job3:
    needs: [job1, job2]
```

この例では、`job1` が正常に完了してから `job2` が始まる必要があり、`job3` では `job1` と `job2` の両方が完了するまで待機します。

つまり、この例のジョブは逐次実行されるということです。

1. `job1`
2. `job2`
3. `job3`

#### 例: 依存ジョブの成功は必要ではない

```yaml
jobs:
  job1:
  job2:
    needs: job1
  job3:
    if: {% raw %}${{ always() }}{% endraw %}
    needs: [job1, job2]
```

この例では、`job3` では条件式 `always()` を使っているので、`job1` と `job2` が成功したかどうかに関係なく、完了後に常に実行されます。 詳細については、「[式](/actions/learn-github-actions/expressions#status-check-functions)」を参照してください。
