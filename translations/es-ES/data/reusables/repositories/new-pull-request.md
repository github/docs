{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
1. A la derecha del menú de rama, da clic en **Nueva solicitud de extracción**. ![Enlace de "Solicitud de extracción" sobre la lsita de archivos](/assets/images/help/pull_requests/pull-request-start-review-button.png)
{% else %}
1. Sobre la lista de archivos, da clic en
{% octicon "git-pull-request" aria-label="The pull request icon" %} **Solicitud de cambios**.
  ![Enlace de "Solicitud de extracción" sobre la lsita de archivos](/assets/images/help/pull_requests/pull-request-start-review-button.png)
{% endif %}
