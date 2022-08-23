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
1. 在 {% ifversion fpt or ghec or ghes > 3.5 or ghae-issue-6069 %}“拉取请求”{% else %}“合并按钮”{% endif %} 下，选择 **Allow squash merging（允许压缩合并）**。 这将允许贡献者通过将所有提交压缩到单个提交中来合并拉取请求。 The default commit message presented to contributors when merging is the commit title and message if the pull request contains only 1 commit, or the pull request title and list of commits if the pull request contains 2 or more commits. {% ifversion ghes = 3.6 %} To always use the title of the pull request regardless of the number of commits in the pull request select **Default to PR title for squash merge commits**.{% endif %}{% ifversion default-merge-squash-commit-message %} ![Pull request squashed commits](/assets/images/help/repository/allow-squash-merging.png){% endif %}{% ifversion ghes = 3.6 %} ![Screenshot of Pull Request settings with allow merge commits checkbox emphasized](/assets/images/help/repository/allow-squash-merging-no-dropdown.png){% endif %}
{% ifversion ghes < 3.6  %}
 ![拉取请求压缩提交](/assets/images/enterprise/3.5/repository/pr-merge-squash.png){% endif %}
{% ifversion default-merge-squash-commit-message %}
1. Optionally, under **Allow squash merging**, use the dropdown to choose the format of the default squash commit message presented to contributors when merging. The default message uses the commit title and message if the pull request contains only 1 commit, or the pull request title and list of commits if the pull request contains 2 or more commits. You can also choose to use just the pull request title, the pull request title and commit details, or the pull request title and description. ![Screenshot of emphasized default squash message dropdown](/assets/images/help/repository/default-squash-message-dropdown.png)
{% endif %}

如果选择多种合并方法，则协作者可以选择在合并拉取请求时要使用的合并提交类型。 {% data reusables.repositories.squash-and-rebase-linear-commit-history %}

## 延伸阅读

- "[关于拉取请求合并](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)"
- "[合并拉取请求](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)"
