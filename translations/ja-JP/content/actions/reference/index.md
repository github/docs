---
title: リファレンス
intro: 'ワークフローの作成、GitHub ホストランナーの使用、および認証に関するリファレンスドキュメント。'
redirect_from:
  - /actions/configuring-and-managing-workflows/using-variables-and-secrets-in-a-workflow
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data variables.product.prodname_actions %} の支払いを管理する
{% data variables.product.prodname_dotcom %}は、macOSランナーのホストに[MacStadium](https://www.macstadium.com/)を使用しています。

### ワークフロー構文

ワークフローファイルは YAML で記述されています。 YAML ワークフローファイルでは、式の構文を使用して、コンテキスト情報、リテラル、演算子、および関数を評価できます。 コンテキスト情報には、ワークフロー、環境変数、シークレット、およびワークフローをトリガーしたイベントが含まれます。 ワークフローステップで [`run`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsrun) を使用してシェルコマンドを実行する場合、特定のワークフローコマンド構文を使用して環境変数を設定し、後続のステップの出力パラメーターを設定して、エラーメッセージまたはデバッグメッセージを設定できます。

{% link_in_list /workflow-syntax-for-github-actions %}
{% link_in_list /context-and-expression-syntax-for-github-actions %}
{% link_in_list /workflow-commands-for-github-actions %}

### イベント

特定の GitHub イベントが発生したとき、スケジュールされた時間で実行、手動で実行、または GitHub 外のイベントが発生したときに実行するようにワークフローを設定できます。

{% link_in_list /events-that-trigger-workflows %}

### 認証とシークレット

{% data variables.product.prodname_dotcom %}は、{% data variables.product.prodname_actions %}の代理で認証を受けるために利用できるトークンを提供します。 機密情報をシークレットとして Organization またはリポジトリに保存することもできます。 {% data variables.product.prodname_dotcom %} はすべてのシークレットを暗号化します。

{% link_in_list /authentication-in-a-workflow %}
{% link_in_list /encrypted-secrets %}

### {% data variables.product.prodname_dotcom %}ホストランナー

GitHub は、ワークフローを実行するホストされた仮想マシンを提供します。 仮想マシンには、GitHub Actions が使用するツール、パッケージ、および環境変数を備えた環境が含まれます。

{% link_in_list /environment-variables %}
{% link_in_list /specifications-for-github-hosted-runners %}

{% if currentVersion == "free-pro-team@latest" %}
### 管理

{% data variables.product.prodname_dotcom %} ホストランナーでワークフローを実行する場合、使用制限が適用されたり使用料がかかったりする場合があります。 リポジトリおよび Organization での {% data variables.product.prodname_actions %} の使用を無効化または制限することもできます。

{% link_in_list /usage-limits-billing-and-administration %}

{% endif %}
