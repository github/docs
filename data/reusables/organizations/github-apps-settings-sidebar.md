{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5658 %}
1. In the left sidebar, select **{% octicon "code" aria-label="The code icon" %} Developer settings** then click **{% data variables.product.prodname_github_apps %}**.
{% elsif ghes < 3.4 or ghae %}
1. In the left sidebar, click **{% data variables.product.prodname_github_apps %}**.
![{% data variables.product.prodname_github_apps %} settings](/assets/images/help/organizations/github-apps-settings-sidebar.png)
{% endif %}
