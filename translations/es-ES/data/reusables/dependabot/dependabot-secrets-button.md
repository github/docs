{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5658 %}
1. In the "Security" section of the sidebar, select **{% octicon "key-asterisk" aria-label="The key-asterisk icon" %} Secrets**, then click **{% data variables.product.prodname_dependabot %}**.
{% elsif ghes > 3.2%}
1. En la barra lateral, haz clic en **{% data variables.product.prodname_dependabot %}**. ![Opción de la barra lateral de secretos del {% data variables.product.prodname_dependabot %}](/assets/images/enterprise/3.3/dependabot/dependabot-secrets.png)
{% endif %}
