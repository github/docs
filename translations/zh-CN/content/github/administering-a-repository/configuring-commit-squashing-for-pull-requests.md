---
title: 为拉取请求配置提交压缩
intro: '对于仓库中 {% data variables.product.product_location %} 上的所有拉取请求合并，您可以实施、允许或禁用提交压缩。'
redirect_from:
  - /articles/configuring-commit-squashing-for-pull-requests
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% data reusables.pull_requests.configure_pull_request_merges_intro %}

{% data reusables.pull_requests.default-commit-message-squash-merge %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. 在“Merge（合并）”按钮下，可选择 **Allow merge commits（允许合并提交）**。 这将允许贡献者合并具有完整提交历史记录的拉取请求。 ![allow_standard_merge_commits](/assets/images/help/repository/pr-merge-full-commits.png)
4. 在“Merge（合并）”按钮下，选择 **Allow squash merging（允许压缩合并）**。 这将允许贡献者通过将所有提交压缩到单个提交中来合并拉取请求。 如果除了 **Allow squash merging（允许压缩合并）**之外，您还选择了另一种合并方法，则贡献者在合并拉取请求时能够选择合并提交的类型。 {% data reusables.repositories.squash-and-rebase-linear-commit-hisitory %} ![拉取请求压缩提交](/assets/images/help/repository/pr-merge-squash.png)

### 延伸阅读

- "[关于拉取请求合并](/articles/about-pull-request-merges)"
- "[合并拉取请求](/articles/merging-a-pull-request)"
