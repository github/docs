{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
1. En la sección de "Seguridad" de la barra lateral, selecciona **{% octicon "key-asterisk" aria-label="The key-asterisk icon" %} Secretos** y luego haz clic en **{% data variables.product.prodname_dependabot %}**.
{% else %}
1. En la barra lateral, haz clic en **{% data variables.product.prodname_dependabot %}**. ![Opción de la barra lateral de secretos del {% data variables.product.prodname_dependabot %}](/assets/images/enterprise/3.3/dependabot/dependabot-secrets.png)
{% endif %}
