---
title: Informationen zu Integrationen
intro: 'Integrationen sind Werkzeuge und Dienste, die mit {% data variables.product.product_name %} verbunden werden, um Ihren Workflow zu ergänzen und zu erweitern.'
redirect_from:
  - /articles/about-integrations
versions:
  free-pro-team: '*'
---

Du kannst Integrationen in Deinem persönlichen Konto oder in Deinen eigenen Organisation installieren. Sie können auch {% data variables.product.prodname_github_app %}s von einem Drittanbieter in einem bestimmten Repository installieren, für das Sie Administratorrechte haben oder das sich im Besitz Ihrer Organisation befindet.

### Unterschiede zwischen {% data variables.product.prodname_github_app %}s und {% data variables.product.prodname_oauth_app %}s

Integrationen können {% data variables.product.prodname_github_app %}s, {% data variables.product.prodname_oauth_app %}s oder alles weitere sein, was {% data variables.product.product_name %}-APIs oder -Webhooks verwendet.

{% data variables.product.prodname_github_app %}s bieten granulare Berechtigungen und fordern nur Zugriff auf das, was die App benötigt. {% data variables.product.prodname_github_app %} bieten außerdem spezifische Berechtigungen auf Benutzerebene, die jeder Benutzer individuell autorisieren muss, wenn eine App installiert wird oder wenn der Integrator die von der App angeforderten Berechtigungen ändert.

Weitere Informationen findest Du unter:
- "[Differences between {% data variables.product.prodname_github_app %}s and {% data variables.product.prodname_oauth_app %}s](/apps/differences-between-apps/)"
- "[About apps](/apps/about-apps/)"
- "[User-level permissions](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#user-level-permissions)"
- „[{% data variables.product.prodname_oauth_app %}s autorisieren](/articles/authorizing-oauth-apps/)“
- „[Autorisierte Integrationen überprüfen](/articles/reviewing-your-authorized-integrations/)“

Sie können eine vorkonfigurierte {% data variables.product.prodname_github_app %} installieren, wenn die Integratoren oder App-Entwickler ihre App mit dem {% data variables.product.prodname_github_app %}-Manifest-Flow erstellt haben. Weitere Informationen zum Ausführen Ihrer {% data variables.product.prodname_github_app %} mit automatisierter Konfiguration erhalten Sie vom Integrator oder App-Entwickler.

Sie können eine {% data variables.product.prodname_github_app %} mit vereinfachter Konfiguration erstellen, wenn Sie Ihre App mit Probot erstellen. Weitere Informationen findest Du auf der [Probot Docs](https://probot.github.io/docs/)-Website.

### Integrationen auf {% data variables.product.prodname_marketplace %} entdecken

Auf {% data variables.product.prodname_marketplace %} können Sie eine Integration zur Installation finden oder Ihre eigene Integration veröffentlichen.

[{% data variables.product.prodname_marketplace %}](https://github.com/marketplace) enthält {% data variables.product.prodname_github_app %}s und {% data variables.product.prodname_oauth_app %}s. Weitere Informationen zum Finden einer Integration oder zum Erstellen einer eigenen Integration findest Du unter „[Informationen zu {% data variables.product.prodname_marketplace %}](/articles/about-github-marketplace).“

### Direkt von Integratoren bezogene Integrationen

Einige Integrationen kannst Du auch direkt von Integratoren beziehen. Wenn Sie als Organisationsmitglied eine {% data variables.product.prodname_github_app %} finden, die Sie verwenden möchten, können Sie beantragen, dass eine Organisation die App für die Organisation genehmigt und installiert.

Wenn Du über Administratorberechtigungen für alle organisationseigenen Repositorys verfügst, auf denen die App installiert ist, kannst Du {% data variables.product.prodname_github_app %}s mit Berechtigungen auf Repository-Ebene installieren, ohne einen Organisationsinhaber um die Genehmigung der App bitten zu müssen. Wenn ein Integrator die Berechtigungen einer App ändert und die Berechtigungen nur für ein Repository gelten, können Organisationsinhaber und Personen mit Administratorberechtigungen für ein Repository, in dem diese App installierte ist, die neuen Berechtigungen überprüfen und akzeptieren.

