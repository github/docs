---
title: ステータスチェックについて
intro: ステータスチェックを利用すると、コントリビュート先のリポジトリの条件をコミットが満たしているかどうかを知ることができます。
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks
  - /articles/about-statuses
  - /articles/about-status-checks
  - /github/collaborating-with-issues-and-pull-requests/about-status-checks
  - /github/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: 759889bd4f014e4bc2afff5f182a0b7258c8bb07
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065867'
---
ステータスチェックは、リポジトリにプッシュをするたびに実行される継続的インテグレーションのビルドのような、外部のプロセスに基づいています。 pull request 中の個々のコミットの隣に、ステータスチェックの *pending*、*passing*、*failing* などのステータスが表示されます。

![コミットとステータスのリスト](/assets/images/help/pull_requests/commit-list-statuses.png)

書き込み権限があるユーザまたはインテグレーションなら誰でも、リポジトリのステータスチェックを任意のステータスに設定できます。

ブランチへの最後のコミットの全体的なステータスは、リポジトリのブランチページあるいはリポジトリのプルリクエストのリストで見ることができます。

{% data reusables.pull_requests.required-checks-must-pass-to-merge %}

## {% data variables.product.product_name %}でのステータスチェックの種類

{% data variables.product.product_name %} のステータスチェックには 2 種類あります。

- チェック
- ステータス

_チェック_ は、行のアノテーション、より詳細なメッセージを提供するという点で _ステータス_ とは異なっており、{% data variables.product.prodname_github_app %} でのみ利用できます。

Organization オーナー、およびリポジトリにプッシュアクセスを持つユーザは、{% data variables.product.product_name %} の API でチェックおよびステータスを作成できます。 詳細については、「[チェック](/rest/reference/checks)」と「[ステータス](/rest/reference/commits#commit-statuses)」を参照してください。

## チェック

リポジトリで _チェック_ がセットアップされている場合、pull request には **[チェック]** タブがあり、そこからステータスチェックからの詳細なビルドのアウトプットを見て、失敗したチェックを再実行できます。

![プルリクエスト中のステータスチェック](/assets/images/help/pull_requests/checks.png)

{% note %}

**注釈:** リポジトリの _状態_ ではなく、_チェック_ を設定した場合にのみ、 **[チェック]** タブに pull request が設定されます。

{% endnote %}

コミットの特定の行でチェックが失敗している場合、その失敗、警告、注意に関する詳細が pull request の **[ファイル]** タブの関連するコードの横に表示されます。

![失敗したステータスチェックの詳細](/assets/images/help/pull_requests/checks-detailed.png)

**[会話]** タブの下のコミットドロップダウンメニューを使って、pull request 中のさまざまなコミットのチェックのサマリー間を行き来できます。

![ドロップダウンメニュー中でのさまざまなコミットのチェックのサマリー](/assets/images/help/pull_requests/checks-summary-for-various-commits.png)

### 個々のコミットに関するチェックのスキップとリクエスト

リポジトリがプッシュに対して自動的にチェックをリクエストするように設定されている場合、プッシュする個々のコミットについてチェックをスキップできます。 リポジトリがプッシュに対して自動的にチェックをリクエストするよう設定されて _いない_ 場合、プッシュする個々のコミットについてチェックをリクエストできます。 これらの設定の詳細については、「[チェックスイート](/rest/reference/checks#update-repository-preferences-for-check-suites)」を参照してください。

コミットに対するチェックをスキップもしくはリクエストするには、以下の追加行のいずれかをコミットメッセージの末尾に追加します:

- コミットの _チェックをスキップ_ には、コミットメッセージと変更の短く意味のある説明を入力してください。 コミットの説明の後、終了引用符の前に、2 つの空の行を追加してから `skip-checks: true` を追加します。
  ```shell
  $ git commit -m "Update README
  >
  >
  skip-checks: true"
  ```
- コミットのチェックを _リクエスト_ するには、コミットメッセージと変更の短く意味のある説明を入力してください。 コミットの説明の後、終了引用符の前に、2 つの空の行を追加してから `request-checks: true` を追加します。
  ```shell
  $ git commit -m "Refactor usability tests
  >
  >
  request-checks: true"
  ```

{% ifversion fpt or ghec %}
### 状態チェックの保持

{% data reusables.pull_requests.retention-checks-data %} {% endif %}
