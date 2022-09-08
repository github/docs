---
ms.openlocfilehash: 95ea94c1f81a3b586d60d96dbd5a882dcdbe89fc
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145114182"
---
`defaults.run` を使用すると、ワークフロー内のすべての [`run`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun) ステップに、デフォルトの `shell` オプションと `working-directory` オプションを指定できます。 1 つのジョブにのみ利用できる `run` に対して、デフォルト設定を設定することもできます。 詳細については、「[`jobs.<job_id>.defaults.run`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_iddefaultsrun)」を参照してください。 このキーワード中では、コンテキストや式を使うことはできません。

{% data reusables.actions.defaults-override %}

#### 例: デフォルトのシェルと作業ディレクトリを設定する

```yaml
defaults:
  run:
    shell: bash
    working-directory: scripts
```
