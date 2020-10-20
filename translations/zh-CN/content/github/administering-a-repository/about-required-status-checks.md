---
title: 关于必需状态检查
intro: 必需状态检查确保在协作者可以对受保护分支进行更改前，所有必需的 CI 测试都已通过。
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/about-required-status-checks
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### 关于必需状态检查

如果您在仓库中实施了分支保护，便可设置必需状态检查。 如果您在仓库中实施了分支保护，便可设置必需状态检查。 更多信息请参阅“[配置受保护分支](/articles/configuring-protected-branches/)”和“[启用必需状态检查](/articles/enabling-required-status-checks)”。 更多信息请参阅“[关于状态检查](/github/administering-a-repository/enabling-required-status-checks)”。

在启用必需状态检查后，必须通过所有必需状态检查后，分支才可合并到受保护分支。 所有必需状态检查通过后，必须将任何提交推送到另一个分支，然后合并或直接推送到受保护分支。

![合并受保护分支 ](/assets/images/help/repository/req-status-check-all-passed.png)

{% tip %}

**注：**对仓库具有写入权限的任何个人或集成可以在仓库中设置任何状态检查的状态。 {% data variables.product.product_name %} 无法验证检查的作者是否被授权创建具有特定名称的检查或修改现有状态。 在合并拉取请求之前，应验证合并框中列出的每个状态的作者是否符合预期。

{% endtip %}

即使必需状态检查失败或待处理，仓库管理员也可以合并受保护分支。 您可以要求管理员接受所需的状态检查。 更多信息请参阅“[启用必需状态检查](/github/administering-a-repository/enabling-required-status-checks)”。

![管理员合并受保护分支](/assets/images/help/repository/req-status-check-admin-merge.png)

即使受保护分支过期，管理员也可使用基本分支合并该分支。

### 必需状态检查设置

根据您是否希望在合并前使用基本分支更新您的分支，您可以设置宽松或严格的状态检查。 更多信息请参阅“[必需状态检查的类型](/github/administering-a-repository/types-of-required-status-checks)”。

### 必需状态检查故障排除

如果您有名称相同的检查和状态，并且选择该名称作为必需状态检查，则检查和状态都是必需的。 更多信息请参阅“[检查](/v3/checks/)”。

在设置必需状态检查后，您的分支在合并之前必须使用基本分支更新。 这可确保您的分支已经使用基本分支的最新代码做过测试。 如果您的分支过期，则需要将基本分支合并到您的分支。

{% note %}

**注：**您也可以使用 Git 变基以基础分支更新您的分支。 更多信息请参阅“[关于 Git 变基](/github/using-git/about-git-rebase)”。

{% endnote %}

![过期分支](/assets/images/help/repository/req-status-check-out-of-date.png)

在通过所有必需状态检查之前，无法向受保护分支推送本地更改。 反而会收到类似如下的错误消息：

```shell
remote: error: GH006: Protected branch update failed for refs/heads/main.
remote: error: Required status check "ci-build" is failing
```
{% note %}

**注：**最新且通过必需状态检查的拉取请求可以本地合并，并且推送到受保护分支。 此操作无需对合并提交本身运行状态检查。

{% endnote %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}

有时，测试合并提交与头部提交的状态检查结果存在冲突。 如果测试合并提交具有状态，则必须传递该状态。 否则，必须传递头部提交的状态后才可合并该分支。 有关合并提交的更多信息，请参阅“[拉取请求](/v3/pulls/#response-1)”。

![具有冲突的合并提交的分支](/assets/images/help/repository/req-status-check-conflicting-merge-commits.png)
{% endif %}

### 延伸阅读

- "[关于状态检查](/github/collaborating-with-issues-and-pull-requests/about-status-checks)"
