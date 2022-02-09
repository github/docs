{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5658 %}
1. In the "Security" section of the sidebar, click **{% octicon "codescan" aria-label="The codescan icon" %} Code security and analysis**.
{% elsif ghes < 3.4 or ghae %}
1. In the left sidebar, click **Security & analysis**.
  !["Security & analysis" tab in organization settings](/assets/images/help/organizations/org-settings-security-and-analysis.png)
{% endif %}
