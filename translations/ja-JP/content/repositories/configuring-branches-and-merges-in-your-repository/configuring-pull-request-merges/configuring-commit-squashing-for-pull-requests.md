---
title: プルリクエストにコミットの squash を設定する
intro: 'リポジトリで、{% data variables.product.product_location %} でのすべてのプルリクエストマージについて、コミットの squash を強制、許可、または無効にできます。'
redirect_from:
  - /articles/configuring-commit-squashing-for-pull-requests
  - /github/administering-a-repository/configuring-commit-squashing-for-pull-requests
  - /github/administering-a-repository/configuring-pull-request-merges/configuring-commit-squashing-for-pull-requests
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Configure commit squashing
---

{% data reusables.pull_requests.configure_pull_request_merges_intro %}

{% data reusables.pull_requests.default-commit-message-squash-merge %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Under {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %}"Pull Requests"{% else %}"Merge button"{% endif %}, optionally select **Allow merge commits**. これにより、コントリビューターがコミットの全ての履歴と共にプルリクエストをマージできるようになります。 ![allow_standard_merge_commits](/assets/images/help/repository/pr-merge-full-commits.png)
4. Under {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %}"Pull Requests"{% else %}"Merge button"{% endif %}, select **Allow squash merging**. これにより、コントリビューターが全てのコミットを 1 つのコミットに squash してプルリクエストをマージできるようになります。 [**Allow squash merging**] 以外のマージ方法も選択した場合、コラボレーターはプルリクエストをマージする時にコミットのマージ方法を選択できます。 {% data reusables.repositories.squash-and-rebase-linear-commit-hisitory %} ![プルリクエストの squash したコミット](/assets/images/help/repository/pr-merge-squash.png)

## 参考リンク

- [プルリクエストのマージについて](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)
- [プルリクエストのマージ](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)
