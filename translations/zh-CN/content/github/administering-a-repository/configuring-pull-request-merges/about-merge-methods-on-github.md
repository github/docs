---
title: 关于 GitHub 上的合并方法
intro: '您可以允许能够推送到仓库的贡献者使用不同的合并选项在 {% data variables.product.product_location %} 上合并其推送请求，或者对所有仓库的拉取请求实施特定的合并方法。'
redirect_from:
  - /articles/about-merge-methods-on-github
  - /github/administering-a-repository/about-merge-methods-on-github
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

{% data reusables.pull_requests.configure_pull_request_merges_intro %} 您可以只对仓库启用所需的方法，以实施一种合并方法，如提交压缩或变基。

{% data reusables.pull_requests.default_merge_option %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
默认合并方法创建合并提交。 通过强制实施线性提交历史记录，可以防止任何人将合并提交推送到受保护分支。 更多信息请参阅“[关于受保护分支](/github/administering-a-repository/about-protected-branches#require-linear-history)”。{% endif %}

### 压缩合并提交

{% data reusables.pull_requests.squash_and_merge_summary %}

在启用压缩提交之前，请考虑以下缺点：
- 您会丢失关于最初何时执行了特定更改以及是谁进行了压缩提交的信息。
- 如果在压缩与合并后继续操作拉取请求的头部分支，然后在相同分支之间创建新的拉取请求，您先前被压缩与合并的提交将列于新的拉取请求中。 可能还有必须在每个连续的拉取请求中反复解决的冲突。 更多信息请参阅“[关于拉取请求合并](/github/collaborating-with-issues-and-pull-requests/about-pull-request-merges#squashing-and-merging-a-long-running-branch)”。
- 有些使用 "SHA" 或“哈希”ID 的 Git 命令可能更难使用，因为原始提交的 SHA ID 已经丢失。 例如，使用 [`git rerere`](https://git-scm.com/docs/git-rerere) 可能不像以前一样有效。

更多信息请参阅“[为拉取请求配置提交压缩](/articles/configuring-commit-squashing-for-pull-requests)”。

### 变基和合并提交

{% data reusables.pull_requests.rebase_and_merge_summary %}

在启用提交变基之前，请考虑以下缺点：
- 仓库贡献者可能必须在命令行上变基，解决任何冲突，并且将其更改推送到拉取请求的主题分支（或删除头部分支），然后才可在 {% data variables.product.product_location %} 上使用 **Rebase and merge（变基和合并）** 选项。 强制推送必须谨慎执行，以免贡献者覆盖别人在其工作基础上所做的工作。 要详细了解何时在 {% data variables.product.product_location %} 上禁用 **Rebase and merge（变基和合并）**选项以及重新启用它的工作流程，请参阅“[关于拉取请求合并](/articles/about-pull-request-merges/#rebase-and-merge-your-pull-request-commits)”。

更多信息请参阅“[为拉取请求配置提交变基](/articles/configuring-commit-rebasing-for-pull-requests)”。
