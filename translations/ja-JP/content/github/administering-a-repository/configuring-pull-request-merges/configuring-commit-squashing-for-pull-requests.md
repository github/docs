---
title: プルリクエストにコミットの squash を設定する
intro: 'リポジトリで、{% data variables.product.product_location %} でのすべてのプルリクエストマージについて、コミットの squash を強制、許可、または無効にできます。'
redirect_from:
  - /articles/configuring-commit-squashing-for-pull-requests
  - /github/administering-a-repository/configuring-commit-squashing-for-pull-requests
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

{% data reusables.pull_requests.configure_pull_request_merges_intro %}

{% data reusables.pull_requests.default-commit-message-squash-merge %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. 必要であれば、[Merge button] の下の [**Allow merge commits**] を選択します。 これにより、コントリビューターがコミットの全ての履歴と共にプルリクエストをマージできるようになります。 ![allow_standard_merge_commits](/assets/images/help/repository/pr-merge-full-commits.png)
4. [Merge button] の下にある [**Allow squash merging**] を選択します。 これにより、コントリビューターが全てのコミットを 1 つのコミットに squash してプルリクエストをマージできるようになります。 [**Allow squash merging**] 以外のマージ方法も選択した場合、コラボレーターはプルリクエストをマージする時にコミットのマージ方法を選択できます。 {% data reusables.repositories.squash-and-rebase-linear-commit-hisitory %} ![プルリクエストの squash したコミット](/assets/images/help/repository/pr-merge-squash.png)

### 参考リンク

- [プルリクエストのマージについて](/articles/about-pull-request-merges)
- [プルリクエストのマージ](/articles/merging-a-pull-request)
