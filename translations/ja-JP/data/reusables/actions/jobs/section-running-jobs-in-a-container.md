---
ms.openlocfilehash: 59a9cc8c52f8e3d28b2b392c28ef6abcb52439a9
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: "147718206"
---
`jobs.<job_id>.container` を使用して、コンテナーを作成し、コンテナーをまだ指定していないジョブのステップを実行します。 スクリプトアクションとコンテナアクションの両方を使うステップがある場合、コンテナアクションは同じボリュームマウントを使用して、同じネットワーク上にある兄弟コンテナとして実行されます。

`container` を設定しない場合、ステップがコンテナーで実行するように構成されたアクションを参照しない限り、すべてのステップは `runs-on` で指定されたホスト上で直接実行されます。

{% note %}

**注:** コンテナー内の `run` ステップの既定のシェルは、`bash` ではなく `sh` です。 これは、[`jobs.<job_id>.defaults.run`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_iddefaultsrun) でも [`jobs.<job_id>.steps[*].shell`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsshell) でもオーバーライドできます。

{% endnote %}

### 例: コンテナー内でジョブを実行する

```yaml{:copy}
name: CI
on:
  push:
    branches: [ main ]
jobs:
  container-test-job:
    runs-on: ubuntu-latest
    container:
      image: node:14.16
      env:
        NODE_ENV: development
      ports:
        - 80
      volumes:
        - my_docker_volume:/volume_mount
      options: --cpus 1
    steps:
      - name: Check for dockerenv file
        run: (ls /.dockerenv && echo Found dockerenv) || (echo No dockerenv)
```

コンテナー イメージのみを指定する場合は、`image` キーワードを省略できます。

```yaml
jobs:
  container-test-job:
    runs-on: ubuntu-latest
    container: node:14.16
```
