---
ms.openlocfilehash: 543455f8802e8e2c8b4dc60283c442a536476751
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: "145114230"
---
`jobs.<job_id>.if` 条件文を使って、条件が満たされなければジョブを実行しないようにできます。 条件文を作成するには、サポートされている任意のコンテキストや式が使えます。

{% data reusables.actions.expression-syntax-if %} 詳細については、「[式](/actions/learn-github-actions/expressions)」を参照してください。

### 例: 特定のリポジトリに対してのみジョブを実行する

この例では `if` を使って `production-deploy` ジョブを実行できるタイミングを制御しています。 リポジトリが `octo-repo-prod` という名前で、`octo-org` という組織内にある場合のみ実行されます。 それ以外の場合、ジョブはスキップ済みとしてマーク _されます_。

```yaml{:copy}
name: example-workflow
on: [push]
jobs:
  production-deploy:
    if: github.repository == 'octo-org/octo-repo-prod'
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '14'
      - run: npm install -g bats
```
