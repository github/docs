{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5658 %}
1. In the left sidebar, select **{% octicon "code" aria-label="The code icon" %} Developer settings** then click **{% data variables.product.prodname_github_apps %}**.
{% elsif ghes < 3.4 or ghae %}
1. En la barra lateral izquierda, haz clic en **{% data variables.product.prodname_github_apps %}**. ![Ajustes de las {% data variables.product.prodname_github_apps %}](/assets/images/help/organizations/github-apps-settings-sidebar.png)
{% endif %}
