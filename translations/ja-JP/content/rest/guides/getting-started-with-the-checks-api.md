---
title: Checks APIを使ってみる
intro: Check Runs APIを使うと、リポジトリのコード変更に対して強力なチェックを実行するGitHub Appを構築できます。 継続的インテグレーション、コードの構文チェック、コードのスキャンサービスを実行し、コミットについて詳細なフィードバックを行うアプリを作成できます。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
shortTitle: Get started - Checks API
ms.openlocfilehash: 6d98940d9cf4f4fd534034e142aa3d86a0900406
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147710244'
---
## 概要

GitHub Appは、単に合格/不合格の二択ではない、情報量の多いビルドステータスを報告し、コードの行について詳細な情報が付いたアノテーションをつけ、テストを再実行することができます。 Checks APIの機能は、GitHub Appのみで利用できます。

Checks API を {% data variables.product.prodname_github_app %} で使用する方法の例については、「[Checks API で CI テストを作成する](/apps/quickstart-guides/creating-ci-tests-with-the-checks-api/)」を参照してください。

## チェックスイートについて

誰かがリポジトリにコードをプッシュすると、その直近のコミットについてGitHubはチェックスイートを作成します。 チェック スイートは、特定のコミットに対して単一の GitHub App によって作成された[チェック実行](/rest/reference/checks#check-runs)のコレクションです。 チェックスイートは、スイートに含まれるチェックを実行し、ステータスとチェック結果をまとめます。

![チェックスイートのワークフロー](/assets/images/check_suites.png)

チェック スイートは、チェック スイートの `conclusion` の中で最も優先度の高いチェック実行 `conclusion` を報告します。 たとえば、3 回のチェック実行で `timed_out`、`success`、`neutral` の結論が得られた場合、チェック スイートの結論は `timed_out` になります。

デフォルトでは、GitHubはリポジトリにコードがプッシュされると自動的にチェックスイートを作成します。 この既定のフローでは、`checks:write` のアクセス許可をもつすべての GitHub アプリに `check_suite` イベント (`requested` アクションあり) が送信されます。 GitHub App が `check_suite` イベントを受信すると、直近のコミットに対する新たなチェック実行を作成できます。 GitHub では、チェック実行のリポジトリと SHA に基づいて、正しい[チェック スイート](/rest/reference/checks#check-suites)に新しいチェック実行が自動的に追加されます。

デフォルトの自動的なフローを使いたくない場合は、チェックスイートをいつ作成するかをコントロールできます。 チェック スイートの作成に関する既定の設定を変更するには、[チェックスイートのリポジトリ環境設定の更新](/rest/reference/checks#update-repository-preferences-for-check-suites)エンドポイントを使用します。 自動フロー設定に対するすべての変更は、リポジトリのAudit logに記録されます。 自動フローを無効にした場合は、[チェック スイートの作成](/rest/reference/checks#create-a-check-suite)エンドポイントを使用してチェック スイートを作成できます。 コミットに関するフィードバックを提供するには、引き続き[チェック実行の作成](/rest/reference/checks#create-a-check-run)エンドポイントを使用する必要があります。

{% data reusables.apps.checks-availability %}

チェック スイート API を使用するには、GitHub App に `checks:write` アクセス許可が必要であり、[check_suite](/webhooks/event-payloads/#check_suite) Webhook をサブスクライブすることもできます。

{% data reusables.shortdesc.authenticating_github_app %}

## チェックの実行について

チェックの実行は、個別のテストであり、チェックスイートの一機能です。 各実行にステータスと結果が含まれます。

![チェック実行のワークフロー](/assets/images/check_runs.png)

チェック実行が 14 日を超えて不完全な状態である場合は、チェック実行の `conclusion` が `stale` になり、{% data variables.product.prodname_dotcom %} に stale として {% octicon "issue-reopened" aria-label="The issue-reopened icon" %} と共に表示されます。 チェック実行を `stale` としてマークできるのは {% data variables.product.prodname_dotcom %} のみです。 チェック実行で出る可能性のある結論の詳細については、[`conclusion` パラメーター](/rest/reference/checks#create-a-check-run--parameters)を参照してください。

[`check_suite`](/webhooks/event-payloads/#check_suite) Webhook を受け取るとすぐに、チェックが完了していない場合でも、チェック実行を作成できます。 チェック実行が値 `queued`、`in_progress`、または `completed` で完了したら、チェック実行の `status` を更新できます。さらに詳細が入手できるにつれ `output` を更新できます。 チェック実行にはタイムスタンプ、詳細情報が記載された外部サイトへのリンク、コードの特定の行に対するアノテーション、および実行した分析についての情報を含めることができます。

![チェック実行のアノテーション](/assets/images/check_run_annotations.png)

チェック実行は、GitHub UIで手動で再実行することも可能です。 詳細については、「[ステータス チェックについて](/articles/about-status-checks#checks)」を参照してください。 この場合、チェック実行を作成した GitHub App は、新しいチェック実行を要求する [`check_run`](/webhooks/event-payloads/#check_run) webhook を受け取ります。 チェックスイートを作成せずにチェック実行を作成した場合、GitHubは自動的にチェックスイートを作成します。

{% data reusables.apps.checks-availability %}

チェック実行 API を使用するには、GitHub App に `checks:write` アクセス許可が必要であり、[check_run](/webhooks/event-payloads#check_run) Webhook をサブスクライブすることもできます。

## チェック実行とリクエストされたアクション

チェック実行をリクエストされたアクション ({% data variables.product.prodname_actions %}と混同しないこと) で設定すると、 {% data variables.product.prodname_dotcom %}のプルリクエストビューでボタンを表示でき、そのボタンで{% data variables.product.prodname_github_app %}に追加のタスクを実行するようリクエストできるます。

たとえば、コードの構文チェックを行うアプリケーションは、リクエストされたアクションを使って、検出した構文エラーを自動的に修正するボタンをプルリクエストに表示できます。

アプリから追加のアクションを要求できるボタンを作成するには、[チェック ランの作成](/rest/reference/checks/#create-a-check-run)を行うときに [`actions` オブジェクト](/rest/reference/checks#create-a-check-run--parameters)を使用します。 たとえば、以下の `actions` オブジェクトは、プル要求に「Fix this」というラベルのついたボタンを表示します。 このボタンは、チェック実行が完了した後に表示されます。

   ```json
  "actions": [{
      "label": "Fix this",
      "description": "Let us fix that for you",
      "identifier": "fix_errors"
    }]
  ```

  ![チェック実行のリクエストされたアクションのボタン](/assets/images/github-apps/github_apps_checks_fix_this_button.png)

ユーザーがボタンをクリックすると、{% data variables.product.prodname_dotcom %} は [`check_run.requested_action` Webhook](/webhooks/event-payloads/#check_run) をアプリに送信します。 アプリが `check_run.requested_action` Webhook イベントを受信すると、Webhook ペイロード内の `requested_action.identifier` キーを検索して、どのボタンがクリックされたかを判断し、要求されたタスクを実行できます。

Checks API を使用して要求されたアクションを設定する方法の詳細な例については、「[Checks API で CI テストを作成する](/apps/quickstart-guides/creating-ci-tests-with-the-checks-api/#part-2-creating-the-octo-rubocop-ci-test)」を参照してください。

{% ifversion fpt or ghec %}
## チェック データの保持

{% data reusables.pull_requests.retention-checks-data %} {% endif %}
