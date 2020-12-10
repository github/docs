---
title: プルリクエストでのフィードバックを取り込む
intro: 'レビュー担当者がプルリクエストの変更を提案する場合、変更をプルリクエストに自動的に組み込むか、Issue をオープンしてスコープ外の提案を追跡できます。'
redirect_from:
  - /articles/incorporating-feedback-in-your-pull-request
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### 提案された変更を適用する

他の人はプルリクエストに特定の変更を提案することができます。 リポジトリに対する書き込みアクセスがある場合は、プルリクエストで提案されたこれらの変更を直接適用することができます。 プルリクエストがフォークから作成されたもので、作者がメンテナーによる編集を許可していれば、上流リポジトリへの書き込みアクセスがある場合でも、提案された変更を適用できます。 詳細は「[プルリクエストへコメントする](/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request)」および「[フォークから作成されたプルリクエストブランチへの変更を許可する](/github/collaborating-with-issues-and-pull-requests/allowing-changes-to-a-pull-request-branch-created-from-a-fork)」を参照してください。

提案された複数の変更を 1 つのコミットに取り込みたければ、提案された変更をバッチとして適用すると簡単です。 提案された変更を 1 つ、またはバッチとして適用すると、プルリクエストの比較ブランチで 1 つのコミットが作成されます。

コミットに含まれる変更を提案した各ユーザがそのコミットの共作者になり、 提案された変更を適用したユーザは、共作者兼そのコミットのコミッターになります。 Git におけるコミッターという用語については、_Pro Git_ ブック サイトで「[Git の基礎 - コミット履歴を表示する](https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History)」を参照してください。

{% data reusables.repositories.sidebar-pr %}
2. プルリクエストのリストで、提案された変更を適用する対象のプルリクエストをクリックします。
3. 適用する最初の変更提案に移動します。
    - それ自体のコミットで変更を適用する場合は、[**Commit suggestion**] をクリックします。 ![[Commit suggestion] ボタン](/assets/images/help/pull_requests/commit-suggestion-button.png)
    - 変更のバッチに提案を追加するには、[**Add suggestion to batch**] をクリックします。 これを繰り返して、1 つのコミットに取り込む変更を追加します。 提案された変更の追加が終わったら、[**Commit suggestions**] をクリックします。 ![[Add suggestion to batch] ボタン](/assets/images/help/pull_requests/add-suggestion-to-batch.png)
4. コミットメッセージのフィールドに、ファイルに対する変更内容を説明する、短くわかりやすいコミットメッセージを入力します。 ![Commit messageフィールド](/assets/images/help/pull_requests/suggested-change-commit-message-field.png)
5. [**Commit changes**] をクリックします。 ![[Commit changes] ボタン](/assets/images/help/pull_requests/commit-changes-button.png)

### Re-requesting a review

{% data reusables.pull_requests.re-request-review %}

### スコープ外の提案に対する Issue のオープン

プルリクエストの変更が提案され、その変更がプルリクエストのスコープ外である場合、フィードバックを追跡するために新しい Issue をオープンすることができます。 詳しい情報については「[コメントからIssueを開く](/github/managing-your-work-on-github/opening-an-issue-from-a-comment)」を参照してください。

### 参考リンク

- "[プルリクエストのレビューについて](/github/collaborating-with-issues-and-pull-requests/about-pull-request-reviews)"
- 「[プルリクエストで提案された変更をレビューする](/github/collaborating-with-issues-and-pull-requests/reviewing-proposed-changes-in-a-pull-request)」
- 「[プルリクエストへコメントする](/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request)」
- 「[プルリクエストのレビューをリクエストする](/github/collaborating-with-issues-and-pull-requests/requesting-a-pull-request-review)」
- 「[コメントから Issue を開く](/github/managing-your-work-on-github/opening-an-issue-from-a-comment)」
