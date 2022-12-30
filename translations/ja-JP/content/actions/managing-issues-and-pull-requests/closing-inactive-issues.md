---
title: 非アクティブな Issue をクローズする
intro: '{% data variables.product.prodname_actions %} を使用して、一定期間、非アクティブであった Issue にコメントしたり、Issue をクローズしたりすることができます。'
redirect_from:
  - /actions/guides/closing-inactive-issues
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - Project management
ms.openlocfilehash: 7d0cab4c1ef7ac5fda67a0487b50817adfb5dfd8
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '147063611'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## はじめに

このチュートリアルでは、[`actions/stale` アクション](https://github.com/marketplace/actions/close-stale-issues)を使用して、一定期間非アクティブだった issue にコメントを付けてクローズする方法について説明します。 たとえば、Issueが 30 日間非アクティブであった場合にコメントして、参加者にアクションを実行するように促すことができます。 その後、14 日以上経っても追加のアクティビティが発生しない場合は、Issue をクローズできます。

チュートリアルでは、[`actions/stale` アクション](https://github.com/marketplace/actions/close-stale-issues)を使用するワークフロー ファイルをまず作成します。 次に、ニーズに合わせてワークフローをカスタマイズします。

## ワークフローの作成

1. {% data reusables.actions.choose-repo %}
2. {% data reusables.actions.make-workflow-file %}
3. 次の YAML コンテンツをワークフローファイルにコピーします。

    ```yaml{:copy}
    name: Close inactive issues
    on:
      schedule:
        - cron: "30 1 * * *"

    jobs:
      close-issues:
        runs-on: ubuntu-latest
        permissions:
          issues: write
          pull-requests: write
        steps:
          - uses: {% data reusables.actions.action-stale %}
            with:
              days-before-issue-stale: 30
              days-before-issue-close: 14
              stale-issue-label: "stale"
              stale-issue-message: "This issue is stale because it has been open for 30 days with no activity."
              close-issue-message: "This issue was closed because it has been inactive for 14 days since being marked as stale."
              days-before-pr-stale: -1
              days-before-pr-close: -1
              repo-token: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
    ```

4. ワークフローファイルのパラメータをカスタマイズします。
   - `on.schedule` の値を変更して、このワークフローを実行する日時を指定します。 上記の例では、ワークフローは毎日 1:30 UTC に実行されます。 スケジュールされたワークフローの詳細については、[スケジュールされたイベント](/actions/reference/events-that-trigger-workflows#scheduled-events)に関するページを参照してください。
   - `days-before-issue-stale` の値を、`actions/stale` アクションが issue のラベルを付ける前のアクティビティのない日数に変更します。 このアクションで issue にラベルを付けない場合は、この値を `-1` に設定します。
   - `days-before-issue-close` の値を、`actions/stale` アクションが issue をクローズする前のアクティビティのない日数に変更します。 このアクションで issue をクローズしない場合は、この値を `-1` に設定します。
   - `stale-issue-label` の値を、`days-before-issue-stale` で指定した期間非アクティブだった issue に適用するラベルに変更します。
   - `stale-issue-message` の値を、`actions/stale` アクションによってラベル付けされた issue に追加するコメントに変更します。
   - `close-issue-message` の値を、`actions/stale` アクションによってクローズされた issue に追加するコメントに変更します。
5. {% data reusables.actions.commit-workflow %}

## 予想される結果

`schedule` パラメーター (たとえば、毎日 1:30 UTC) に基づいて、ワークフローは指定された期間非アクティブであった issue を検出し、指定されたコメントとラベルを追加します。 さらに、指定された期間に追加のアクティビティが発生しなかった場合、ワークフローは以前にラベル付けされた Issue をすべてクローズします。

{% data reusables.actions.schedule-delay %}

ワークフローの実行履歴を表示して、このワークフローが定期的に実行されているかどうかを確認できます。 詳細については、「[ワークフロー実行の履歴を表示する](/actions/managing-workflow-runs/viewing-workflow-run-history)」を参照してください。

このワークフローでは、レート制限を超えないように、一度に 30 件の issue にのみラベルを付けたりクローズしたりします。 `operations-per-run` 設定を使用してこれを構成できます。 詳細については、[`actions/stale` アクションのドキュメント](https://github.com/marketplace/actions/close-stale-issues)を参照してください。

## 次の手順

- 非アクティブな pull request のクローズ、特定のラベルやマイルストーンに関する issue の無視、特定のラベルに関する issue のみの確認など、`actions/stale` アクションで実行できるその他の操作の詳細については、[`actions/stale` アクションのドキュメント](https://github.com/marketplace/actions/close-stale-issues)を参照してください。
- このアクションを使用するワークフローの例については [GitHub を検索](https://github.com/search?q=%22uses%3A+actions%2Fstale%22&type=code)してください。
