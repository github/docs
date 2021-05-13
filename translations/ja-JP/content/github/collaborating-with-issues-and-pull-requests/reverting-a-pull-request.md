---
title: Pull Request を打ち消す
intro: Pull Request は上流ブランチへのマージ後に元に戻すことができます。
redirect_from:
  - /articles/reverting-a-pull-request
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

### プルリクエストの打ち消しについて

{% data variables.product.product_name %} で Pull Request を打ち消すと、マージされた元の Pull Request からマージ コミットを 1 回元に戻した、新しい Pull Request が作成されます。

### Pull Request を打ち消す

{% note %}

**注釈:** 次のいずれかに該当する場合、プルリクエストの個々のコミットを元に戻す必要がある場合があります。

- Pull Request を打ち消すとマージコンフリクトが起こる
- 元のプルリクエストが {% data variables.product.product_name %} でマージされていなかった場合。 たとえば、コマンドラインで fast-forward マージを使用してプルリクエストをマージした可能性があります。

Git を使用して個々のコミットを手動で元に戻す方法の詳細については、Git ドキュメントの「[Git 打ち消し](https://git-scm.com/docs/git-revert.html)」を参照してください。

{% endnote %}

{% data reusables.repositories.sidebar-pr %}
2. [Pull Requests] のリストで、打ち消す Pull Request をクリックします。
3. その Pull Request の下部周辺で、[**Revert**] をクリックします。 ![[Revert pull request] リンク](/assets/images/help/pull_requests/revert-pull-request-link.png)
4. 結果の Pull Request をマージします。 詳しい情報については[プルリクエストのマージ](/github/collaborating-with-issues-and-pull-requests/merging-a-pull-request)を参照してください。
