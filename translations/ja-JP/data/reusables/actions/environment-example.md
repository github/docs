ワークフロー内のそれぞれのジョブに、環境を指定できます。 そのためには、`jobs.<job_id>.environment`キーのあとに環境の名前を続けて追加してください。

たとえば、このワークフローは`production`という環境を使います。

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
        # ...デプロイメント固有のステップ
```

上のワークフローが実行されると、`deployment`ジョブは`production`環境に設定されたルールに従います。 たとえば、環境がレビュー担当者を必要とする場合、ジョブはレビュー担当者の1人がジョブを承認するまで一時停止します。

環境のURLを指定することもできます。 指定されたURLはリポジトリのデプロイメントページ（リポジトリのホームページの**Environments**をクリックすればアクセスできます）と、ワークフローの実行の可視化グラフに表示されます。 Pull Requestがそのワークフローをトリガーした場合、URLはPull Requestのタイムラインの**View deployment（デプロイメントの表示）**ボタンとしても表示されます。

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
        # ...デプロイメント固有のステップ
```

![URL付きのワークフローグラフ](/assets/images/help/images/deploy-graph.png)
