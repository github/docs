---
title: Checks APIを使ってみる
intro: Check Runs APIを使うと、リポジトリのコード変更に対して強力なチェックを実行するGitHub Appを構築できます。 継続的インテグレーション、コードの構文チェック、コードのスキャンサービスを実行し、コミットについて詳細なフィードバックを行うアプリを作成できます。
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - API
---

### 概要

GitHub Appは、単に合格/不合格の二択ではない、情報量の多いビルドステータスを報告し、コードの行について詳細な情報が付いたアノテーションをつけ、テストを再実行することができます。 Checks APIの機能は、GitHub Appのみで利用できます。

{% data variables.product.prodname_github_app %}でChecks APIを利用する方法については、「[Checks APIでCIテストを作成する](/apps/quickstart-guides/creating-ci-tests-with-the-checks-api/)を参照してください。

### チェックスイートについて

誰かがリポジトリにコードをプッシュすると、その直近のコミットについてGitHubはチェックスイートを作成します。 チェックスイートとは、特定のコミットに対して一つのGitHub Appにより作成された[チェック実行](/rest/reference/checks#check-runs)の集合のことです。 チェックスイートは、スイートに含まれるチェックを実行し、ステータスとチェック結果をまとめます。

![チェックスイートのワークフロー](/assets/images/check_suites.png)

チェックスイートは、チェックスイートの`conclusion`において、実行したチェックの中で最も優先度が高い`conclusion`を報告します。 たとえば、3つのチェックを実行した際に`timed_out`、`success`、`neutral`の結果が出た場合、チェックスイートの結果は`timed_out`となります。

デフォルトでは、GitHubはリポジトリにコードがプッシュされると自動的にチェックスイートを作成します。 デフォルトのフローでは、`checks:write`権限を持つすべてのGitHub Appに、`check_suite`イベントが (`requested` アクションと共に) 送信されます。 GitHub Appが`check_suite`イベントを受信すると、直近のコミットに対する新たなチェック実行を作成できます。 GitHubは、チェック実行のリポジトリおよびSHAに基づき、正しい[チェックスイート](/rest/reference/checks#check-suites)に新しいチェック実行を自動的に追加します。

デフォルトの自動的なフローを使いたくない場合は、チェックスイートをいつ作成するかをコントロールできます。 チェックスイートの作成についてのデフォルト設定を変更するには、[チェックスイートのためのリポジトリプリファレンスの更新](/rest/reference/checks#update-repository-preferences-for-check-suites)エンドポイントを使用します。 自動フロー設定に対するすべての変更は、リポジトリのAudit logに記録されます。 自動フローを無効化した場合、[チェックスイートの作成](/rest/reference/checks#create-a-check-suite)エンドポイントを使ってチェックスイートを作成できます。 コミットにフィードバックを行うには、[チェック実行の作成](/rest/reference/checks#create-a-check-run)エンドポイントの使用を継続すべきです。

{% data reusables.apps.checks-availability %}

チェックスイートAPIを使用するには、GitHub Appは`checks:write`権限が必要であり、また[check_suite](/webhooks/event-payloads/#check_suite) webhookにサブスクライブすることもできます。

{% data reusables.shortdesc.authenticating_github_app %}

### チェックの実行について

チェックの実行は、個別のテストであり、チェックスイートの一機能です。 各実行にステータスと結果が含まれます。

![チェック実行のワークフロー](/assets/images/check_runs.png)

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}
チェック実行が15日以上にわたり不完全な状態である場合は、チェック実行の`conclusion`が`stale`になり、に状態が
{% data variables.product.prodname_dotcom %}に{% octicon "issue-reopened" aria-label="The issue-reopened icon" %}でstaleと表示されます。 {% data variables.product.prodname_dotcom %}のみが、チェック実行を`stale`としてマークできます。 チェック実行で出る可能性がある結果についての詳細は、 [`conclusion`パラメータ](/rest/reference/checks#create-a-check-run--parameters)を参照してください。
{% endif %}

[`check_suite`](/webhooks/event-payloads/#check_suite) webhookを受け取ったら、チェックが完了していなくてもすぐにチェック実行を作成できます。 チェック実行の`status`は、`queued`、`in_progress`、または`completed`の値で更新でき、より詳細を明らかにして`output`を更新できます。 チェック実行にはタイムスタンプ、詳細情報が記載された外部サイトへのリンク、コードの特定の行に対するアノテーション、および実行した分析についての情報を含めることができます。

![チェック実行のアノテーション](/assets/images/check_run_annotations.png)

チェック実行は、GitHub UIで手動で再実行することも可能です。 詳細は「[ステータスチェックについて](/articles/about-status-checks#checks)」を参照してください。 この場合、チェック実行を作成したGitHub Appは、新たなチェック実行を要求する[`check_run`](/webhooks/event-payloads/#check_run) webhookを受け取ります。 チェックスイートを作成せずにチェック実行を作成した場合、GitHubは自動的にチェックスイートを作成します。

{% data reusables.apps.checks-availability %}

Check Runs APIを使用するには、GitHub Appは`checks:write`権限が必要であり、また[check_run](/webhooks/event-payloads#check_run) webhookにサブスクライブすることもできます。

### チェック実行とリクエストされたアクション

チェック実行をリクエストされたアクション ({% data variables.product.prodname_actions %}と混同しないこと) で設定すると、 {% data variables.product.prodname_dotcom %}のプルリクエストビューでボタンを表示でき、そのボタンで{% data variables.product.prodname_github_app %}に追加のタスクを実行するようリクエストできるます。

たとえば、コードの構文チェックを行うアプリケーションは、リクエストされたアクションを使って、検出した構文エラーを自動的に修正するボタンをプルリクエストに表示できます。

アプリケーションに追加のアクションをリクエストできるボタンを作成するには、[チェック実行を作成する](/rest/reference/checks/#create-a-check-run)際に[`actions` オブジェクト](/rest/reference/checks#create-a-check-run--parameters)を使用します。 たとえば、以下の`actions`オブジェクトは、プルリクエストに「Fix this」というラベルのついたボタンを表示します。 このボタンは、チェック実行が完了した後に表示されます。

   ```json
  "actions": [{
      "label": "Fix this",
      "description": "Let us fix that for you",
      "identifier": "fix_errors"
    }]
  ```

  ![チェック実行のリクエストされたアクションのボタン](/assets/images/github-apps/github_apps_checks_fix_this_button.png)

ユーザがボタンをクリックすると、{% data variables.product.prodname_dotcom %}は[`check_run.requested_action` webhook](/webhooks/event-payloads/#check_run)をアプリケーションに送信します。 アプリケーションが`check_run.requested_action` webhookイベントを受信すると、webhookペイロードから`requested_action.identifier`キーを探し、どのボタンがクリックされたかを判断してリクエストされたタスクを実行することができます。

Checks APIで必要なアクションを設定する方法の詳しい例については、「[Checks APIでCIテストを作成する](/apps/quickstart-guides/creating-ci-tests-with-the-checks-api/#part-2-creating-the-octo-rubocop-ci-test)」を参照してください。
