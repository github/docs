{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
1. To the right of the Branch menu, click **New pull request**. !["Pull request" link above list of files](/assets/images/help/pull_requests/pull-request-start-review-button.png)
{% else %}
1. Above the list of files, click
{% octicon "git-pull-request" aria-label="The pull request icon" %} **Pull request**.
  !["Pull request" link above list of files](/assets/images/help/pull_requests/pull-request-start-review-button.png)
{% endif %}
