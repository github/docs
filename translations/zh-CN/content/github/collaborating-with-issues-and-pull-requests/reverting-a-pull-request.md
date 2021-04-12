---
title: 还原拉取请求
intro: 您可以在将拉取请求合并到上游分支后进行还原。
redirect_from:
  - /articles/reverting-a-pull-request
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - 拉取请求
---

### 关于还原拉取请求

在 {% data variables.product.product_name %} 上还原拉取请求会创建一个新拉取请求。其中包含原始合并拉取请求中一个还原的合并提交。

### 还原拉取请求

{% note %}

**注：**如果以下任一内容属实，您可能需要还原拉取请求中的个人提交。

- 还原拉取请求导致合并冲突
- 原始拉取请求最初在 {% data variables.product.product_name %} 上未合并。 例如，有人可能已在命令行上使用快进合并来合并拉取请求。

有关使用 Git 手动还原单个提交的详细信息，请参阅 Git 文档中的 [Git 还原](https://git-scm.com/docs/git-revert.html)。

{% endnote %}

{% data reusables.repositories.sidebar-pr %}
2. 在“Pull Requests（拉取请求）”列表中，单击要还原的拉取请求。
3. 在拉取请求底部附近，单击 **Revert（还原）**。 ![还原拉取请求链接](/assets/images/help/pull_requests/revert-pull-request-link.png)
4. 合并产生的拉取请求。 更多信息请参阅“[合并拉取请求](/github/collaborating-with-issues-and-pull-requests/merging-a-pull-request)”。
