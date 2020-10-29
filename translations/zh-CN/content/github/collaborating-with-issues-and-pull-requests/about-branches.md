---
title: 关于分支
intro: '使用分支隔离开发工作而不影响仓库中的其他分支。 每个仓库都有一个默认分支，也可有多个其他分支。 您可以使用拉取请求将一个分支合并到另一个分支。'
redirect_from:
  - /articles/working-with-protected-branches/
  - /articles/about-branches
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---


### 关于分支

分支允许您在仓库的包含区域中开发功能、修复错误或安全地试验新的想法。

始终可以从现有分支创建分支。 通常，您可能会从仓库的默认分支创建新的分支。 然后，您可以单独处理这个新分支，不受其他人对仓库所做更改的影响。 为构建功能而创建的分支通常称为功能分支或主题分支。 更多信息请参阅“[创建和删除仓库中的分支](/articles/creating-and-deleting-branches-within-your-repository/)”。

也可以使用分支发布 {% data variables.product.prodname_pages %} 网站。 更多信息请参阅“[关于 {% data variables.product.prodname_pages %}](/articles/what-is-github-pages)”。

必须对仓库有写入权限才可在拉取请求中创建分支、打开拉取请求或者删除和恢复分支。 更多信息请参阅“[{% data variables.product.prodname_dotcom %} 上的访问权限](/github/getting-started-with-github/access-permissions-on-github)”。

### 关于默认分支

{% data reusables.branches.new-repo-default-branch %} 默认分支是任何人访问您的仓库时 {% data variables.product.prodname_dotcom %} 显示的分支。 默认分支也是初始分支，当有人克隆存储库时，Git 会在本地检出该分支。 {% data reusables.branches.default-branch-automatically-base-branch %}

By default, {% data variables.product.product_name %} names the default branch {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.23" %}`main`{% else %}`master`{% endif %} in any new repository.

{% data reusables.branches.set-default-branch %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}

{% data reusables.branches.set-default-branch %}

{% endif %}

### 使用分支

对您的工作感到满意后，可以打开拉取请求以将当前分支（*头部*分支）的更改合并到另一个分支（*基础*分支）。 更多信息请参阅“[关于拉取请求](/articles/about-pull-requests)”。

在拉取请求合并或关闭后，可以删除头分支，因为不再需要。 您必须对仓库具有写入权限才能删除分支。 无法删除与打开的拉取请求直接关联的分支。 更多信息请参阅“[删除和恢复拉取请求中的分支](/github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request)”。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
{% data reusables.pull_requests.retargeted-on-branch-deletion %}
下图说明了这一点。

 有人从 `master` 分支创建了一个名为 `feature1` 的分支，然后您从 `feature1` 创建了一个名为 `feature2` 的分支。 两个分支都有打开的拉取请求。 箭头指示每个拉取请求的当前基础分支。 目前，`feature1` 是 `feature2` 的基础分支。 如果合并 `feature2` 的拉取请求，`feature2` 分支将合并到 `feature1`。

 ![merge-pull-request-button](/assets/images/help/branches/pr-retargeting-diagram1.png)

在下一张图中，有人将 `feature1` 的拉取请求合并到了 `master` 分支，并且他们删除了 `feature1` 分支。 因此，{% data variables.product.prodname_dotcom %} 自动重新定位了 `feature2` 的拉取请求，使其基础分支现在变成了 `master`。

 ![merge-pull-request-button](/assets/images/help/branches/pr-retargeting-diagram2.png)

现在合并 `feature2` 拉取请求时，它会合并到 `master` 分支。
{% endif %}

### 使用受保护分支

仓库管理员可对分支启用保护。 如果您处理的是受保护分支，将无法删除或强制推送到该分支。 在分支可以合并之前，仓库管理员可以另外启用几项其他受保护分支设置来实施不同的工作流程。

{% note %}

**注：**如果您是仓库管理员，则即使拉取请求不符合要求，只要分支保护未设置为 "Include administrators"（包括管理员），便可在启用了分支保护的分支上合并拉取请求。

{% endnote %}

要查看您的拉取请求能否合并，请查看拉取请求的 **Conversation（对话）**选项卡底部的合并框。 更多信息请参阅“[关于受保护分支](/articles/about-protected-branches)”。

当分支受保护时：

- 您无法删除或强制推送到该分支。
- 如果对分支启用了必需状态检查，则在所有必需 CI 测试通过之前，无法将更改合并到分支。 更多信息请参阅“[关于状态检查](/articles/about-status-checks)”。
- 如果对分支启用了必需拉取请求审查，则在满足拉取请求审查策略中的所有要求之前，无法将更改合并到分支。 更多信息请参阅“[合并拉取请求](/articles/merging-a-pull-request)”。
- 如果对分支启用了代码所有者的必需审查，并且拉取请求修改具有所有者的代码，则代码所有者必须批准拉取请求后才可合并。 更多信息请参阅“[关于代码所有者](/articles/about-code-owners)”。
- 如果对分支启用了必需提交签名，则无法将任何提交推送到未签名和验证的分支。 For more information, see "[About commit signature verification](/articles/about-commit-signature-verification)" and "[About required commit signing](/articles/about-required-commit-signing)."{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
- 如果您使用 {% data variables.product.prodname_dotcom %} 的冲突编辑器来解决从受保护分支创建拉取请求的冲突，{% data variables.product.prodname_dotcom %} 可帮助您为拉取请求创建一个备用分支，以解决合并冲突。 更多信息请参阅“[解决 {% data variables.product.prodname_dotcom %} 上的合并冲突](/github/collaborating-with-issues-and-pull-requests/resolving-a-merge-conflict-on-github)”。{% endif %}

### 延伸阅读

- "[关于拉取请求](/articles/about-pull-requests)"
- {% data variables.product.prodname_dotcom %} 词汇中的“[分支](/articles/github-glossary/#branch)”
- Git 文档中的“[Nutshell 中的分支](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell)”
