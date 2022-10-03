---
ms.openlocfilehash: 4795fdc557dbb103d64f7b97d0fa58f445434bca
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: "145114414"
---
ワークフロー内のジョブごとに環境を指定できます。 そのためには `jobs.<job_id>.environment` キーを追加し、その後に環境の名前を追加します。

たとえば、このワークフローでは `production` という環境が使用されます。

```yaml
name: Deployment

on:
  push:
    branches:
      - main

jobs:
  deployment:
    runs-on: ubuntu-latest
    environment: production
    steps:
      - name: deploy
        # ...deployment-specific steps
```

上記のワークフローを実行すると、 `deployment` ジョブは `production` 環境用に構成されたすべてのルールに従います。 たとえば、環境でレビュー担当者が必要な場合、いずれかのレビュー担当者がジョブを承認するまでジョブは一時停止します。

環境の URL を指定することもできます。 指定した URL は、リポジトリのデプロイ ページ (リポジトリのホーム ページの **[環境]** をクリックすることでアクセス可能) とワークフロー実行の視覚化グラフに表示されます。 pull request がワークフローをトリガーすると、URL は pull request タイムラインの **[デプロイの表示]** ボタンとしても表示されます。

```yaml
name: Deployment

on:
  push:
    branches:
      - main

jobs:
  deployment:
    runs-on: ubuntu-latest
    environment: 
      name: production
      url: https://github.com
    steps:
      - name: deploy
        # ...deployment-specific steps
```

![URL を含むワークフロー グラフ](/assets/images/help/images/deploy-graph.png)
