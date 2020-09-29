---
title: GitHub Actionsの中核的概念
shortTitle: 中核的概念
intro: '以下のリストに、弊社のサイト及び{% data variables.product.prodname_actions %}のドキュメンテーションで使う一般的な{% data variables.product.prodname_actions %}の用語を示します。'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/core-concepts-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/core-concepts-for-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data variables.product.prodname_actions %} の支払いを管理する
{% data variables.product.prodname_dotcom %}は、macOSランナーのホストに[MacStadium](https://www.macstadium.com/)を使用しています。

### アクション

ステップとして組み合わせてジョブを作成するための、個々のタスクです。 アクションは、ワークフローの最小のポータブルな構成要素です。 {% data variables.product.prodname_dotcom %}コミュニティから共有されるアクションを使って独自にアクションを作成することも、パブリックなアクションをカスタマイズすることもできます。 ワークフローでアクションを使うには、それをステップとして含めなければなりません。

### 成果物

アーティファクトとは、コードをビルドしてテストするときに作成されるファイルのことです。 たとえば、アーティファクトには、バイナリまたパッケージファイル、テスト結果、スクリーンショット、ログファイルなどがあります。 アーティファクトは、それを作成したワークフローの実行に関連づけられ、他のジョブから使ったり、デプロイしたりできます。

### 継続的インテグレーション（CI）

頻繁に小さなコード変更を共有リポジトリにコミットするソフトウェア開発のプラクティス。 {% data variables.product.prodname_actions %}を使えば、コードを自動的にビルドしてテストするカスタムのCIワークフローを作成できます。 リポジトリからコード変更のステータスと、ワークフロー内の各アクションの詳細なログを見ることができます。 CIは、コード変更に対する即座のフィードバックを提供し、素早くバグを検出して解決できるようにすることによって、開発者の時間を節約します。

### 継続的デプロイメント（CD）

継続的デプロイメントは、継続的インテグレージョンの上に構築されます。 新しいコードがコミットされ、CIテストをパスしたなら、そのコードは自動的に実働環境にデプロイされます。 {% data variables.product.prodname_actions %}を使えば、コードを任意のクラウド、自己ホストのサービスやプラットフォームに、リポジトリから自動的にデプロイをするカスタムのCDワークフローを作成できます。 CDは、デプロイメントのプロセスを自動化し、テスト済みの安定したコード変更を顧客により早くデプロイすることによって、開発者の時間を節約します。

### イベント

ワークフローの実行をトリガする特定のアクティビティ。 たとえば、誰かがコミットをリポジトリにプッシュした場合、あるいはIssueもしくはプルリクエストが作成された場合、{% data variables.product.prodname_dotcom %}からアクティビティを発生させることができます。 また、リポジトリのディスパッチwebhookを使って外部イベントが生じたときにワークフローが実行されるよう設定することもできます。

### {% data variables.product.prodname_dotcom %}ホストランナー
{% data variables.product.prodname_dotcom %}は、Linux、Windows、macOSのランナーをホストします。 ジョブは、一般的に使用されるプリインストールのソフトウェアを含む仮想マシンの新たなインスタンスで実行されます。 {% data variables.product.prodname_dotcom %}は、{% data variables.product.prodname_dotcom %}ホストランナーのすべてのアップグレードやメンテナンスを行います。 {% data variables.product.prodname_dotcom %}ホストランナーのハードウェア構成はカスタマイズできません。 詳しい情報については「[{% data variables.product.prodname_dotcom %}ホストランナーの仮想環境](/github/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners)」を参照してください。

### ジョブ

同じランナー上で実行されるステップの集合。 ジョブの実行に関する依存関係のルールを、ワークフローファイル内で定義できます。 ジョブは、同時に並列に実行することも、先行するジョブのステータスに応じてシーケンシャルに実行することもできます。 たとえば、ワークフローにコードのビルドとテストという2つのシーケンシャルなジョブを持たせ、テストジョブをビルドジョブのステータスに依存させることができます。 ビルドジョブが失敗した場合は、テストジョブは実行されません。 {% data variables.product.prodname_dotcom %}ホストランナーでは、ワークフロー内の各ジョブは仮想環境の新しいインスタンス内で実行されます。

### ランナー

{% data variables.product.prodname_actions %}ランナーアプリケーションがインストールされたマシンです。 {% data variables.product.prodname_dotcom %}がホストするランナーを使うことも、自分でランナーをホストすることもできます。 ランナーは実行できるジョブを待ち受けます。 ランナーは、ジョブを選択するとそのジョブのアクションを実行し、進行状況、ログ、最終結果の報告を{% data variables.product.prodname_dotcom %}に返します。 ランナーは一度に1つのジョブを実行します。 詳しい情報については「[{% data variables.product.prodname_dotcom %}ホストランナー](#github-hosted-runner)」及び「[セルフホストランナー](#self-hosted-runner)」を参照してください。

{% note %}

**ノート：** {% data reusables.github-actions.runner-app-open-source %}

{% endnote %}

### セルフホストランナー

セルフホストランナーアプリケーションがインストールされた、あなたが管理してメンテナンスするマシンです。 {% data reusables.github-actions.self-hosted-runner-description %} 詳しい情報については「[自分のランナーのホスト](/github/automating-your-workflow-with-github-actions/hosting-your-own-runners)」を参照してください。

### ステップ

ステップは、コマンドやアクションを実行できる個別のタスクです。 ジョブには1つ以上のステップが設定されます。 ジョブ中の各ステップは同じランナー上で実行されるので、ファイルシステムを使用して、そのジョブにおける複数のアクションで情報を共有することが可能です。

### 仮想環境

{% data variables.product.prodname_dotcom %}ホストランナーの仮想環境には、その仮想マシンのハードウェア構成、オペレーティングシステム、インストール済みのソフトウェアが含まれます。 詳しい情報については「[{% data variables.product.prodname_dotcom %}ホストランナーの仮想環境](/github/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners)」を参照してください。

### ワークフロー

{% data variables.product.prodname_dotcom %}で任意のプロジェクトをビルド、テスト、パッケージ、リリース、またはデプロイするためにリポジトリでセットアップできる、設定可能な自動プロセスです。 ワークフローは1つ以上のジョブから構成され、スケジュールしたり、イベントに応じて動作させたりできます。

### ワークフローファイル

最低1つのジョブと合わせてワークフローの設定を定義するYAMLファイル。 このファイルは、{% data variables.product.prodname_dotcom %}リポジトリの`.github/workflows`ディレクトリ直下にあります。

### ワークフローラン

事前設定されたイベントが生じたときに実行されるワークフローのインスタンス。 それぞれのワークフローランについて、ジョブ、アクション、ログ、ステータスを見ることができます。
