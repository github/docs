---
title: 必需状态检查故障排除
intro: 您可以检查必需状态检查的常见错误并解决问题，
product: '{% data reusables.gated-features.protected-branches %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
redirect_from:
  - /github/administering-a-repository/troubleshooting-required-status-checks
---
如果您有名称相同的检查和状态，并且选择该名称作为必需状态检查，则检查和状态都是必需的。 更多信息请参阅“[检查](/rest/reference/checks)”。

在启用必需状态检查后，您的分支在合并之前可能需要使用基础分支更新。 这可确保您的分支已经使用基本分支的最新代码做过测试。 如果您的分支过期，则需要将基本分支合并到您的分支。 更多信息请参阅“[关于受保护分支](/github/administering-a-repository/about-protected-branches#require-status-checks-before-merging)”。

{% note %}

**注：**您也可以使用 Git 变基以基础分支更新您的分支。 更多信息请参阅“[关于 Git 变基](/github/getting-started-with-github/about-git-rebase)”。

{% endnote %}

在通过所有必需状态检查之前，无法向受保护分支推送本地更改。 反而会收到类似如下的错误消息。

```shell
remote: error: GH006: Protected branch update failed for refs/heads/main.
remote: error: Required status check "ci-build" is failing
```
{% note %}

**注：**最新且通过必需状态检查的拉取请求可以本地合并，并且推送到受保护分支。 此操作无需对合并提交本身运行状态检查。

{% endnote %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %}

有时，测试合并提交与头部提交的状态检查结果存在冲突。 如果测试合并提交具有状态，则测试合并提交必须通过。 否则，必须传递头部提交的状态后才可合并该分支。 有关测试合并提交的更多信息，请参阅“[拉取](/rest/reference/pulls#get-a-pull-request)”。

![具有冲突的合并提交的分支](/assets/images/help/repository/req-status-check-conflicting-merge-commits.png)
{% endif %}
