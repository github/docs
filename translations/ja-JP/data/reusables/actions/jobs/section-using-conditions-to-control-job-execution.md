---
ms.openlocfilehash: eb897a445a5e5a90014097ba76a5ecb095aa0bef
ms.sourcegitcommit: 4f08a208a0d2e13dc109678750a962ea2f67e1ba
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/06/2022
ms.locfileid: "148192065"
---
`jobs.<job_id>.if` 条件文を使って、条件が満たされなければジョブを実行しないようにできます。 {% data reusables.actions.if-supported-contexts %}

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
