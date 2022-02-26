{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
1. In the "Security" section of the sidebar, select **{% octicon "key-asterisk" aria-label="The key-asterisk icon" %} Secrets**, then click **{% data variables.product.prodname_dependabot %}**.
{% else %}
1. Na barra lateral, clique em **{% data variables.product.prodname_dependabot %}**. ![Opção da barra lateral de segredos de {% data variables.product.prodname_dependabot %}](/assets/images/enterprise/3.3/dependabot/dependabot-secrets.png)
{% endif %}
