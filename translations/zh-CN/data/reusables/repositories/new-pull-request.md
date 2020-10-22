{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.22" %}
1. 对于 Branch（分支）菜单右侧，单击 **New pull request（新拉取请求）**。 ![文件列表上方的"拉取请求"链接](/assets/images/help/pull_requests/pull-request-start-review-button.png)
{% else %}
1. 在文件列表上方，单击
{% octicon "git-pull-request" aria-label="The pull request icon" %} **拉取请求**。
  ![文件列表上方的"拉取请求"链接](/assets/images/help/pull_requests/pull-request-start-review-button.png)
{% endif %}
