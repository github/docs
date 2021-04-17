{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
1. Branchメニューの右の**New pull request（新規プルリクエスト）**をクリックしてください。 ![ファイルのリスト上の"Pull request" リンク](/assets/images/help/pull_requests/pull-request-start-review-button.png)
{% else %}
1. ファイルのリスト上で、
{% octicon "git-pull-request" aria-label="The pull request icon" %}**Pull Request**をクリックしてください。
  ![ファイルのリスト上の"Pull request" リンク](/assets/images/help/pull_requests/pull-request-start-review-button.png)
{% endif %}
