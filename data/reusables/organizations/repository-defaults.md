{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5658 %}
1. In the "Code, planning, and automation" section of the sidebar, select **{% octicon "repo" aria-label="The repo icon" %} Repository**, then click **Repository defaults**.
{% elsif ghes < 3.4 or ghae %}
1. In the left sidebar, click **Repository defaults**.
  ![Repository defaults tab](/assets/images/help/organizations/repo-defaults-tab.png)
{% endif %}
