---
title: ステータスチェックについて
intro: ステータスチェックを利用すると、コントリビュート先のリポジトリの条件をコミットが満たしているかどうかを知ることができます。
redirect_from:
  - /articles/about-statuses/
  - /articles/about-status-checks
  - /github/collaborating-with-issues-and-pull-requests/about-status-checks
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---
ステータスチェックは、リポジトリにプッシュをするたびに実行される継続的インテグレーションのビルドのような、外部のプロセスに基づいています。 プルリクエスト中の個々のコミットの隣に、* pending*、*passing*、 *failing* などの、ステータスチェックのステータスが表示されます。

![コミットとステータスのリスト](/assets/images/help/pull_requests/commit-list-statuses.png)

書き込み権限があるユーザまたはインテグレーションなら誰でも、リポジトリのステータスチェックを任意のステータスに設定できます。

ブランチへの最後のコミットの全体的なステータスは、リポジトリのブランチページあるいはリポジトリのプルリクエストのリストで見ることができます。

{% data reusables.pull_requests.required-checks-must-pass-to-merge %}

### {% data variables.product.product_name %}でのステータスチェックの種類

{% data variables.product.product_name %} のステータスチェックには 2 種類あります。

- チェック
- ステータス

_チェック_は、行のアノテーション、より詳細なメッセージを提供するという点で_ステータス_とは異なっており、{% data variables.product.prodname_github_app %} でのみ利用できます。

Organization オーナー、およびリポジトリにプッシュアクセスを持つユーザは、{% data variables.product.product_name %} の API でチェックおよびステータスを作成できます。 詳しい情報については、「[チェック](/rest/reference/checks)」および「[ ステータス](/rest/reference/repos#statuses)」を参照してください。

### チェック

リポジトリで_チェック_が設定されている場合、プルリクエストには [**Checks**] タブがあり、そこからステータスチェックからの詳細なビルドの出力を表示して、失敗したチェックを再実行できます。

![プルリクエスト中のステータスチェック](/assets/images/help/pull_requests/checks.png)

コミットの特定の行でチェックが失敗している場合、その失敗、警告、注意に関する詳細がプルリクエストの [**Files**] タブの関連するコードの横に表示されます。

![失敗したステータスチェックの詳細](/assets/images/help/pull_requests/checks-detailed.png)

[**Conversation**] タブの下のコミットドロップダウンメニューを使って、プルリクエスト中のさまざまなコミットのチェックのサマリー間を行き来できます。

![ドロップダウンメニュー中でのさまざまなコミットのチェックのサマリー](/assets/images/help/pull_requests/checks-summary-for-various-commits.png)

#### 個々のコミットに関するチェックのスキップとリクエスト

リポジトリがプッシュに対して自動的にチェックをリクエストするように設定されている場合、プッシュする個々のコミットについてチェックをスキップできます。 リポジトリがプッシュに対して自動的にチェックをリクエストするよう設定されて_いない_場合、プッシュする個々のコミットについてチェックをリクエストできます。 これらの設定についての詳しい情報は、「[チェックスイート](/rest/reference/checks#update-repository-preferences-for-check-suites)」を参照してください。

コミットに対するチェックをスキップもしくはリクエストするには、以下の追加行のいずれかをコミットメッセージの末尾に追加します:

- コミットの_チェックをスキップ_には、コミットメッセージと変更の短く意味のある説明を入力してください。 After your commit description, before the closing quotation, add two empty lines followed by `skip-checks: true`:
  ```shell
  $ git commit -m "Update README
  >
  >
  skip-checks: true"
  ```
- コミットのチェックを_リクエスト_するには、コミットメッセージと変更の短く意味のある説明を入力してください。 After your commit description, before the closing quotation, add two empty lines followed by `request-checks: true`:
  ```shell
  $ git commit -m "Refactor usability tests
  >
  >
  request-checks: true"
  ```
