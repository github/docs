{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5658 %}
1. In the "Code & operations" section of the sidebar, click **{% octicon "git-branch" aria-label="The git-branch icon" %} Branches**.
{% elsif ghes < 3.4 or ghae %}
1. In the left menu, click **Branches**.
![Repository options sub-menu](/assets/images/help/repository/repository-options-branch.png)
{% endif %}
