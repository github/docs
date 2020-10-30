---
title: プルリクエストのベースブランチを変更する
intro: プルリクエストがオープンされた後は、ベースブランチを変更し、プルリクエストの変更を他のブランチと比較できます。
redirect_from:
  - /articles/changing-the-base-branch-of-a-pull-request
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% warning %}

**警告**: プルリクエストのベースブランチを変更すると、タイムラインから一部のコミットが削除される場合かあります。 また、レビューコメントが言及するコード行が、プルリクエストの変更に含まれなくなれば、そのコメントも役に立たなくなります。

{% endwarning %}

{% data reusables.repositories.sidebar-pr %}
2. [Pull Requests] リストで、変更するプルリクエストをクリックします。
3. プルリクエストのタイトルの隣にある [**Edit**] をクリックします。 ![プルリクエスト編集ボタン](/assets/images/help/pull_requests/pull-request-edit.png)
4. ベースブランチのドロップダウンメニューで、 [変更の比較対象](/github/committing-changes-to-your-project/comparing-commits#comparing-branches)にするベースブランチを選択します。 ![ベースブランチのドロップダウンメニュー ](/assets/images/help/pull_requests/pull-request-edit-base-branch.png)
5. ベースブランチの変更に関する情報を読み、[**Change base**] をクリックします。 ![ベースブランチの変更確認ボタン ](/assets/images/help/pull_requests/pull-request-base-branch-confirm.png)

### 参考リンク

- [プルリクエストの作成](/articles/creating-a-pull-request)
- [プルリクエストについて](/articles/about-pull-requests)
- [プルリクエストで提案された変更のレビュー](/articles/reviewing-proposed-changes-in-a-pull-request)
