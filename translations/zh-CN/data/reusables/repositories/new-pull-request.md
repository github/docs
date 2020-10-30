{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.22" %}
1. 对于 Branch（分支）菜单右侧，单击 **New pull request（新拉取请求）**。 !["Pull request" link above list of files](/assets/images/help/pull_requests/pull-request-start-review-button.png)
{% else %}
1. Above the list of files, click
{% octicon "git-pull-request" aria-label="The pull request icon" %} **Pull request**.
  !["Pull request" link above list of files](/assets/images/help/pull_requests/pull-request-start-review-button.png)
{% endif %}
