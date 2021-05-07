---
title: デバッグロギングの有効化
intro: ワークフロージョブあるいはステップが期待どおりに動作しない理由を診断する上で、十分な詳細がワークフローのログになかった場合、追加のデバッグロギングを有効化できます。
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

これらの追加ログは、ワークフローを含むリポジトリにシークレットを設定することで有効になるため、同じ権限要件が適用されます。

- {% data reusables.github-actions.permissions-statement-secrets-repository %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}
- {% data reusables.github-actions.permissions-statement-secrets-environment %}
{% endif %}
- {% data reusables.github-actions.permissions-statement-secrets-organization %}
- {% data reusables.github-actions.permissions-statement-secrets-api %}

シークレットの設定に関する詳しい情報については、「[暗号化されたシークレットの作成と利用](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)」を参照してください。

### ランナーの診断ロギングの有効化

ランナーの診断ログは、ランナーによるジョブの実行の様子に関する情報を含む追加のログファイルを提供します。 ログアーカイブには、2つのログファイルが追加されます。

* ランナープロセスログにはジョブの実行のためのランナーの調整とセットアップに関する情報が含まれます。
* ワーカープロセスログには、ジョブの実行が記録されます。

1. ランナー診断ロギングを有効化するには、ワークフローを含むリポジトリ内で以下のシークレットを設定してください： `ACTIONS_RUNNER_DEBUG`を`true`にしてください。

1. ランナーの診断ログをダウンロードするには、ワークフローの実行のログアーカイブをダウンロードしてください。 ランナーの診断ログは`runner-diagnostic-logs`フォルダに含まれています。 ログのダウンロードに関する詳しい情報については「[ログのダウンロード](/actions/managing-workflow-runs/using-workflow-run-logs/#downloading-logs)」を参照してください。

### ステップのデバッグロギングの有効化

ステップのデバッグロギングは、ジョブの実行の間と実行後のジョブのログの詳細度を高めます。

1. ステップのデバッグロギングを有効化するには、ワークフローを含むリポジトリで以下のシークレットを設定しなければなりません： `ACTIONS_STEP_DEBUG`を`true`にしてください。

1. このシークレットを設定すると、ステップログにより多くのデバッグイベントが示されるようになります。 詳しい情報については「[障害の診断のためのログの閲覧](/actions/managing-workflow-runs/using-workflow-run-logs/#viewing-logs-to-diagnose-failures)」を参照してください。
