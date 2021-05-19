---
title: Bereitstellungsaktivitäten für Dein Repository anzeigen
intro: Du kannst Informationen zu Bereitstellungen für Dein gesamtes Repository oder für einen bestimmten Pull Request anzeigen.
redirect_from:
  - /articles/viewing-deployment-activity-for-your-repository
  - /github/administering-a-repository/viewing-deployment-activity-for-your-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---
{% note %}

**Hinweis:** Das Dashboard für Bereitstellungen liegt derzeit als Beta-Version vor und kann sich jederzeit ändern.

{% endnote %}

Personen mit Lesezugriff auf ein Repository können eine Zusammenfassung sämtlicher aktueller Bereitstellungen und ein Protokoll der letzten Bereitstellungsaktivitäten anzeigen, sofern der Bereitstellungs-Workflow des Repositorys über die API für Bereitstellungen oder über eine App aus [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace/category/deployment) in {% data variables.product.product_name %} integriert ist. For more information, see "[Deployments](/v3/repos/deployments/)."

Darüber hinaus können Bereitstellungsinformationen auf der Registerkarte „Conversation“ (Unterhaltung) eines Pull-Requests angezeigt werden.

### Dashboard für Bereitstellungen anzeigen

{% data reusables.repositories.navigate-to-repo %}
2. {% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.21" %}To the right of the list of files, click **Environments**. ![Environments on the right of the repository page](/assets/images/help/repository/environments.png){% else %}Above the list of files, click **Environments**. ![Environments on top of repository page](/assets/images/help/repository/environments-top.png){% endif %}


### Weiterführende Informationen
 - „[Informationen zu Pull Requests](/articles/about-pull-requests)“
