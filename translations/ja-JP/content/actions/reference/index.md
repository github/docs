---
title: リファレンス
intro: 'ワークフローの作成、GitHub ホストランナーの使用、および認証に関するリファレンスドキュメント。'
redirect_from:
  - /actions/configuring-and-managing-workflows/using-variables-and-secrets-in-a-workflow
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### ワークフロー構文

ワークフローファイルは YAML で記述されています。 YAML ワークフローファイルでは、式の構文を使用して、コンテキスト情報、リテラル、演算子、および関数を評価できます。 コンテキスト情報には、ワークフロー、環境変数、シークレット、およびワークフローをトリガーしたイベントが含まれます。 ワークフローステップで [`run`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsrun) を使用してシェルコマンドを実行する場合、特定のワークフローコマンド構文を使用して環境変数を設定し、後続のステップの出力パラメーターを設定して、エラーメッセージまたはデバッグメッセージを設定できます。

{% link_in_list /workflow-syntax-for-github-actions %}
{% link_in_list /context-and-expression-syntax-for-github-actions %}
{% link_in_list /workflow-commands-for-github-actions %}

### イベント

特定の GitHub イベントが発生したとき、スケジュールされた時間で実行、手動で実行、または GitHub 外のイベントが発生したときに実行するようにワークフローを設定できます。

{% link_in_list /events-that-trigger-workflows %}

### 認証とシークレット

{% data variables.product.prodname_dotcom %}は、{% data variables.product.prodname_actions %}の代理で認証を受けるために利用できるトークンを提供します。 機密情報を Organization{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}、リポジトリ、環境{% else %}あるいはリポジトリ{% endif %}のシークレットとして保存することもできます。 {% data variables.product.prodname_dotcom %} はすべてのシークレットを暗号化します。

{% link_in_list /authentication-in-a-workflow %}
{% link_in_list /encrypted-secrets %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}
### 環境

ワークフロージョブは、保護ルールあるいは環境固有のシークレットを持つ環境を参照できます。

{% link_in_list /environments %}
{% endif %}

### 環境変数

{% data variables.product.prodname_dotcom %}はそれぞれの{% data variables.product.prodname_actions %}ワークフローの実行に対してデフォルトの環境変数を設定します。 ワークフローファイル中でカスタムの環境変数を設定することもできます。

{% link_in_list /environment-variables %}

{% if currentVersion == "free-pro-team@latest" %}
### 管理

{% data variables.product.prodname_dotcom %} ホストランナーでワークフローを実行する場合、使用制限が適用されたり使用料がかかったりする場合があります。 リポジトリおよび Organization での {% data variables.product.prodname_actions %} の使用を無効化または制限することもできます。

{% link_in_list /usage-limits-billing-and-administration %}

{% endif %}
