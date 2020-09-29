---
title: 关于受保护分支
intro: 受保护分支确保仓库的协作者无法对分支进行不可撤销的更改。 启用受保护分支也可让您启用其他可选检查和要求，例如必要的状态检查和必要的审查。
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/about-protected-branches
  - /enterprise/admin/developer-workflow/about-protected-branches-and-required-status-checks
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% data reusables.pull_requests.about-protected-branches %} 您可以选择对拉取请求如何合并到存储库中实施限制。

仓库所有者以及对仓库具有管理员权限的用户可以实施特定的工作流程或要求，然后协作者才可创建受保护的分支规则来合并仓库中的分支。

{% data reusables.repositories.branch-rules-example %} 更多信息请参阅“[配置受保护分支](/articles/configuring-protected-branches/)”。

### 排列受保护分支规则的优先级

如果仓库有多个影响相同分支的受保护分支规则，则包含特定分支名称的规则具有最高优先级。 如果有多个受保护分支规则引用相同的特定规则名称，则最先创建的分支规则优先级更高。

提及特殊字符（如 `*`、`?` 或 `]`）的受保护分支按其创建的顺序应用，因此含有这些字符的规则创建时间越早，优先级越高。

### 分支保护设置

在仓库中创建分支保护规则时，{% if currentVersion == "free-pro-team@latest" %} 默认情况下{% endif %}协作者无法强制推送到受保护的分支或删除分支。 您可以启用其他分支保护设置。 有关信息，请参阅“[定义拉取请求的可合并性](/github/administering-a-repository/defining-the-mergeability-of-pull-requests)”。

### 延伸阅读

- "[关于必需状态检查](/articles/about-required-status-checks)"
- "[关于拉取请求的必要审查](/articles/about-required-reviews-for-pull-requests)"
- "[关于必需提交签名](/articles/about-required-commit-signing)"
