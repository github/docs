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
4. Under {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %}"Pull Requests"{% else %}"Merge button"{% endif %}, select **Allow squash merging**. これにより、コントリビューターが全てのコミットを 1 つのコミットに squash してプルリクエストをマージできるようになります。 The squash message automatically defaults to the title of the pull request if it contains more than one commit. {% ifversion fpt or ghec or ghes > 3.5 or ghae-issue-7042 %}If you want to use the title of the pull request as the default merge message for all squashed commits, regardless of the number of commits in the pull request, select **Default to PR title for squash merge commits**. ![Pull request squashed commits](/assets/images/help/repository/pr-merge-squash.png){% else %}
![Pull request squashed commits](/assets/images/enterprise/3.5/repository/pr-merge-squash.png){% endif %}

If you select more than one merge method, collaborators can choose which type of merge commit to use when they merge a pull request. {% data reusables.repositories.squash-and-rebase-linear-commit-hisitory %}

## 参考リンク

- [プルリクエストのマージについて](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)
- [プルリクエストのマージ](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)
