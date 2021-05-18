---
title: 自动合并拉取请求
intro: 您可以通过启用拉取请求自动合并（使拉取请求在满足所有合并要求时自动合并）来提高开发速度。
product: '{% data reusables.gated-features.auto-merge %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.1'
  github-ae: '*'
topics:
  - Pull requests
---

### 关于自动合并

如果启用拉取请求自动合并，则拉取请求在满足所有必需审查并且状态检查通过时将自动合并。 自动合并使您无需等待满足要求，可以继续执行其他任务。

在使用拉取请求自动合并之前，必需对仓库启用自动合并。 更多信息请参阅“[管理仓库中拉取请求的自动合并](/github/administering-a-repository/managing-auto-merge-for-pull-requests-in-your-repository)”。{% if currentVersion == "free-proteam@latest" or currentVersion == "github-ae@next " or currentVersion ver_gt "enterprise-server@3.1" %}

对拉取请求启用自动合并后，如果没有仓库写入权限的人员将新更改推送到头部分支或切换拉取请求的基础分支，则自动合并将被禁用。 例如，如果维护者允许从复刻自动合并拉取请求，则在贡献者推送对拉取请求的新更改后，自动合并将被禁用。{% endif %}

您可以通过[联系我们](https://support.github.com/contact/feedback?category=prs-and-code-review&subject=Pull%20request%20auto-merge%20feedback)提供关于自动合并的反馈。

### 启用自动合并

拥有仓库写入权限的人可启用拉取请求自动合并。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}
1. 在“Pull Requests（拉取请求）”列表中，单击要自动合并的拉取请求。
1. （可选）要选择合并方法，请选择 **Enable auto-merge（启用自动合并）**下拉菜单，然后单击合并方法。 更多信息请参阅“[关于拉取请求合并](/github/collaborating-with-issues-and-pull-requests/about-pull-request-merges)”。 !["启用自动合并"下拉菜单](/assets/images/help/pull_requests/enable-auto-merge-drop-down.png)
1. 单击 **Enable auto-merge（启用自动合并）**。 ![启用自动合并的按钮](/assets/images/help/pull_requests/enable-auto-merge-button.png)
1. 如果选择合并或压缩并合并方法，请输入提交消息和说明，然后选择要创作合并提交的电子邮件地址。 ![输入提交消息和说明并选择提交作者电子邮件的字段](/assets/images/help/pull_requests/pull-request-information-fields.png)
1. 单击 **Confirm auto-merge（确认自动合并）**。 ![确认自动合并的按钮](/assets/images/help/pull_requests/confirm-auto-merge-button.png)

### 禁用自动合并

拥有仓库写入权限的人和拉取请求作者可禁用拉取请求自动合并。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}
1. 在“Pull Requests（拉取请求）”列表中，单击要禁用自动合并的拉取请求。
1. 在合并框中，单击 **Disable auto-merge（禁用自动合并）**。 ![禁用自动合并的按钮](/assets/images/help/pull_requests/disable-auto-merge-button.png)
