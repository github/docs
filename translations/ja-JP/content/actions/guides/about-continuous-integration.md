---
title: 継続的インテグレーションについて
intro: '{% data variables.product.prodname_actions %} で {% data variables.product.prodname_dotcom %} リポジトリにカスタム継続的インテグレーション（CI）ワークフローと継続的デプロイメント（CD）ワークフローを直接作成できます。'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/about-continuous-integration
  - /github/automating-your-workflow-with-github-actions/about-continuous-integration
  - /actions/automating-your-workflow-with-github-actions/about-continuous-integration
  - /actions/building-and-testing-code-with-continuous-integration/about-continuous-integration
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: overview
topics:
  - CI
  - CD
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### 継続的インテグレーションについて

継続的インテグレーション (CI) とは、ソフトウェアの開発においてコードを頻繁に共有リポジトリにコミットする手法のことです。 コードをコミットする頻度が高いほどエラーの検出が早くなり、開発者がエラーの原因を見つけるためにデバッグしなければならないコードの量も減ります。 コードの更新が頻繁であれば、ソフトウェア開発チームの他のメンバーによる変更をマージするのも、それだけ容易になります。 コードの記述により多くの時間をかけられるようになり、エラーのデバッグやマージコンフリクトの解決にかける時間が減るので、これは開発者にとって素晴らしいやり方です。

コードをリポジトリにコミットするとき、コミットによってエラーが発生しないように、コードのビルドとテストを継続的に行うことができます。 テストには、コードの文法チェッカー (スタイルフォーマットをチェックする)、セキュリティチェック、コードカバレッジ、機能テスト、その他のカスタムチェックを含めることができます。

コードをビルドしてテストするには、サーバーが必要です。 ローカルでアップデートのビルドとテストを行ってからコードをリポジトリにプッシュする方法もありますし、リポジトリ での新しいコードのコミットをチェックするCIサーバーを使用する方法もあります。

### {% data variables.product.prodname_actions %} を使用する継続的インテグレーションについて

{% if currentVersion == "github-ae@latest" %}{% data variables.product.prodname_actions %} を使用する CI は、リポジトリにコードをビルドしてテストを実行できるワークフローが利用できます。 ワークフローは、{% data variables.product.prodname_dotcom %} によってホストされている仮想マシンで実行できます。 詳しい情報については「[{% data variables.actions.hosted_runner %}について](/actions/using-github-hosted-runners/about-ae-hosted-runners)」を参照してください。
{% else %}{% data variables.product.prodname_actions %} を利用した CI では、リポジトリ中のコードをビルドしてテストを実行できるワークフローが利用できます。 ワークフローは、{% data variables.product.prodname_dotcom %} でホストされている仮想マシン、または自分がホストしているマシンで実行できます。 詳しい情報については、「[{% data variables.product.prodname_dotcom %} ホストランナーの仮想環境](/actions/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners)」および「[セルフホストランナーについて](/actions/automating-your-workflow-with-github-actions/about-self-hosted-runners)」を参照してください。
{% endif %}

CI ワークフローは、{% data variables.product.product_name %} イベントが発生したとき（たとえば、新しいコードがリポジトリにプッシュされたとき）や、設定されたスケジュール、またはリポジトリディスパッチ webhook を使用して外部イベントが発生したときに実行するように設定できます。

{% data variables.product.product_name %} は CI テストを実行して、プルリクエストで各テストの結果を提供するため、ブランチの変更によってエラーが発生したかどうかを確認できます。 ワークフローのテストがすべて成功すると、プッシュした変更をチームメンバーがレビューできるように、またはマージできるようになります。 テストが失敗した場合は、いずれかの変更がその原因になっている可能性があります。

リポジトリに CI を設定する際には、{% data variables.product.product_name %} がリポジトリ内のコードを分析し、リポジトリ内の言語とフレームワークに基づいて CI ワークフローを推奨します。 たとえば、[Node.js](https://nodejs.org/en/) を使用する場合、{% data variables.product.product_name %} は、Node.js パッケージをインストールしてテストを実行するテンプレートファイルを提案します。 {% data variables.product.product_name %} によって提案された CI ワークフローテンプレートを使用しても、提案されたテンプレートをカスタマイズしてもかまいませんし、独自のカスタムワークフローファイルを作成して CI テストを実行することもできます。

![提案された継続的インテグレーションテンプレートのスクリーンショット](/assets/images/help/repository/ci-with-actions-template-picker.png)

プロジェクトの CI ワークフローの設定だけでなく、{% data variables.product.prodname_actions %} を使用してソフトウェア開発のライフサイクル全体に渡るワークフローを作成することもできます。 たとえば、Actionを使用してプロジェクトをデプロイ、パッケージ、またはリリースすることが可能です。 詳しい情報については、「[{% data variables.product.prodname_actions %} について](/articles/about-github-actions)」を参照してください。

一般的な用語の定義については「[{% data variables.product.prodname_actions %} の中核的概念](/github/automating-your-workflow-with-github-actions/core-concepts-for-github-actions)」を参照してください。

### サポートされている言語
<!-- If you make changes to this feature, update /getting-started-with-github/github-language-support to reflect any changes to supported languages. -->

{% data variables.product.product_name %} では、各種言語およびフレームワークに応じて CI ワークフローテンプレートが提供されます。

{% data variables.product.product_location %} 上の {% if currentVersion == "free-pro-team@latest" %}[actions/starter-workflows](https://github.com/actions/starter-workflows/tree/main/ci) リポジトリ{% else %} `actions/starter-workflows` リポジトリで {% data variables.product.product_name %} が提供する CI ワークフローテンプレートの完全なリストを参照します。{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}
### ワークフロー実行をスキップする

ワークフローがトリガーされないようにする場合は、コミットメッセージにスキップ命令を追加できます。 `on: push` または `on: pull_request` でトリガーされるワークフローは、プッシュまたはプルリクエストの HEAD コミットで、次の文字列型のいずれかをコミットメッセージに追加した場合トリガーされません。

* `[skip ci]`
* `[ci skip]`
* `[no ci]`
* `[skip actions]`
* `[actions skip]`

または、コミットメッセージを 2 行の空行で終了し、その後に `skip-checks: true` または `skip-checks:true` のいずれかを続けることもできます。

最初にリポジトリがパスするための特定のチェックを受けるように設定されている場合、プルリクエストをマージすることはできません。 プルリクエストをマージできるようにするには、コミットメッセージのスキップ命令なしでプルリクエストに新しいコミットをプッシュできます。

{% note %}

**注釈:** スキップ命令は、`push` および `pull_request` イベントにのみ適用されます。 たとえば、コミットメッセージに `[skip ci]` を追加しても、`on: pull_request_target` でトリガーされたワークフロー実行は停止されません。

{% endnote %}
{% endif %}

### ワークフロー実行の通知

{% data reusables.repositories.workflow-notifications %}

### ワークフロー実行のためのステータスバッジ

{% data reusables.repositories.actions-workflow-status-badge-into %}

詳細は「[ワークフローの設定](/articles/configuring-a-workflow)」を参照してください。

### 参考リンク

- 「[{% data variables.product.prodname_actions %} を使用して継続的インテグレーションを設定する](/articles/setting-up-continuous-integration-using-github-actions)」
{% if currentVersion == "free-pro-team@latest" %}
- 「[{% data variables.product.prodname_actions %} の支払いを管理する](/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)」
{% endif %}
