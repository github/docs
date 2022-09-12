---
ms.openlocfilehash: dae1f0d42b9b0b2e122bfcfc2a096d062efd8ee0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145114189"
---
`jobs.<job_id>.defaults.run` を使用して、ジョブ内のすべての `run` ステップに既定の `shell` と `working-directory` を指定します。 このセクションではコンテキストと式は許されていません。

ジョブ内のすべての [`run`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun) ステップに既定の `shell` と `working-directory` のオプションを指定できます。 また、ワークフロー全体の `run` に既定の設定を設定することもできます。 詳細については、「[`jobs.defaults.run`](/actions/using-workflows/workflow-syntax-for-github-actions#defaultsrun)」を参照してください。 このキーワード中では、コンテキストや式を使うことはできません。

{% data reusables.actions.defaults-override %}

#### 例: ジョブの既定の `run` ステップ オプションの設定

```yaml
jobs:
  job1:
    runs-on: ubuntu-latest
    defaults:
      run:
        shell: bash
        working-directory: scripts
```
