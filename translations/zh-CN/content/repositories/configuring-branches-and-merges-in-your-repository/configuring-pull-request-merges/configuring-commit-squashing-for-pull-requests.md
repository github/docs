---
title: 为拉取请求配置提交压缩
intro: '对于仓库中 {% data variables.product.product_location %} 上的所有拉取请求合并，您可以实施、允许或禁用提交压缩。'
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
shortTitle: 配置提交压缩
---

{% data reusables.pull_requests.configure_pull_request_merges_intro %}

{% data reusables.pull_requests.default-commit-message-squash-merge %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. 在 {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %}"拉取请求"{% else %}"合并按钮"{% endif %} 下，可以选择 **Allow merge commits（允许合并提交）**。 这将允许贡献者合并具有完整提交历史记录的拉取请求。 ![allow_standard_merge_commits](/assets/images/help/repository/pr-merge-full-commits.png)
4. 在 {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %}“拉取请求”{% else %}“合并按钮”{% endif %} 下，选择 **Allow squash merging（允许压缩合并）**。 这将允许贡献者通过将所有提交压缩到单个提交中来合并拉取请求。 The squash message automatically defaults to the title of the pull request if it contains more than one commit. {% ifversion fpt or ghec or ghes > 3.5 or ghae-issue-7042 %}If you want to use the title of the pull request as the default merge message for all squashed commits, regardless of the number of commits in the pull request, select **Default to PR title for squash merge commits**. ![Pull request squashed commits](/assets/images/help/repository/pr-merge-squash.png){% else %}
![Pull request squashed commits](/assets/images/enterprise/3.5/repository/pr-merge-squash.png){% endif %}

If you select more than one merge method, collaborators can choose which type of merge commit to use when they merge a pull request. {% data reusables.repositories.squash-and-rebase-linear-commit-hisitory %}

## 延伸阅读

- "[关于拉取请求合并](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)"
- "[合并拉取请求](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)"
