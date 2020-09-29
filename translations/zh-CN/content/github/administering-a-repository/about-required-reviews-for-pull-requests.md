---
title: 关于拉取请求的必需审查
intro: 必需审查确保拉取请求获得特定数量的审批审查之后，协作者才可更改受保护分支。
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/about-required-reviews-for-pull-requests
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

如果您在仓库中实施了分支保护，便可设置必需审查。 有关实施分支保护的更多信息，请参阅“[配置受保护分支](/articles/configuring-protected-branches/)”。 有关设置必需审查的更多信息，请参阅“[对拉取请求启用必需审查](/articles/enabling-required-reviews-for-pull-requests)”。

{% data reusables.pull_requests.required-reviews-for-prs-summary %}

如果具有*管理员*权限的人员在审查中选择 **Request changes（申请更改）**选项，则拉取请求必须经此人批准后才可合并。 如果申请更改拉取请求的审查者没有空，则具有仓库*管理员*或*写入*权限的任何人都可忽略阻止审查。 更多信息请参阅“[忽略拉取请求审查](/articles/dismissing-a-pull-request-review)”。

{% note %}

**注：**仓库管理员可以限制对特定的人员或团队忽略拉取请求审查。 更多信息请参阅“[启用拉取请求的必需审查](/articles/enabling-required-reviews-for-pull-requests)”。

{% endnote %}

如果将代码修改提交推送到已批准拉取请求的分支，在仓库管理员设置了旧审查忽略时可能会忽略审批。 更多信息请参阅“[启用拉取请求的必需审查](/articles/enabling-required-reviews-for-pull-requests)”。 如果推送非代码修改提交（例如将基础分支合并到拉请求的分支），则这不适用。 有关基础分支的信息，请参阅“[关于拉取请求](/articles/about-pull-requests)”。

除非必需审查已设置为包含仓库管理员，否则具有*管理员*权限的人员可以合并拉取请求，而不管其他管理员是否审查。

{% data reusables.repositories.review-policy-overlapping-commits %}

有具有*写入*或*管理员*权限的人员批准之前，您无法将拉取请求合并到受保护分支。 如果存在待处理或拒绝的审查，您会收到错误消息：

```shell
remote: error: GH006: Protected branch update failed for refs/heads/main.
remote: error: Changes have been requested.
```
