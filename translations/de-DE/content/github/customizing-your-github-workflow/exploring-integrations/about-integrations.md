---
title: Informationen zu Integrationen
intro: 'Integrationen sind Werkzeuge und Dienste, die mit {% data variables.product.product_name %} verbunden werden, um Ihren Workflow zu ergänzen und zu erweitern.'
redirect_from:
  - /articles/about-integrations
  - /github/customizing-your-github-workflow/about-integrations
versions:
  fpt: '*'
---

Du kannst Integrationen in Deinem persönlichen Konto oder in Deinen eigenen Organisation installieren. You can also install {% data variables.product.prodname_github_apps %} from a third-party in a specific repository where you have admin permissions or which is owned by your organization.

## Differences between {% data variables.product.prodname_github_apps %} and {% data variables.product.prodname_oauth_apps %}

Integrations can be {% data variables.product.prodname_github_apps %}, {% data variables.product.prodname_oauth_apps %}, or anything that utilizes {% data variables.product.product_name %} APIs or webhooks.

{% data variables.product.prodname_github_apps %} offer granular permissions and request access to only what the app needs. {% data variables.product.prodname_github_apps %} also offer specific user-level permissions that each user must authorize individually when an app is installed or when the integrator changes the permissions requested by the app.

Weitere Informationen findest Du unter:
- "[Differences between {% data variables.product.prodname_github_apps %} and {% data variables.product.prodname_oauth_apps %}](/apps/differences-between-apps/)"
- "[About apps](/apps/about-apps/)"
- "[User-level permissions](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#user-level-permissions)"
- "[Authorizing {% data variables.product.prodname_oauth_apps %}](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-oauth-apps)"
- "[Authorizing {% data variables.product.prodname_github_apps %}](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-github-apps)"
- „[Autorisierte Integrationen überprüfen](/articles/reviewing-your-authorized-integrations/)“

Sie können eine vorkonfigurierte {% data variables.product.prodname_github_app %} installieren, wenn die Integratoren oder App-Entwickler ihre App mit dem {% data variables.product.prodname_github_app %}-Manifest-Flow erstellt haben. Weitere Informationen zum Ausführen Ihrer {% data variables.product.prodname_github_app %} mit automatisierter Konfiguration erhalten Sie vom Integrator oder App-Entwickler.

Sie können eine {% data variables.product.prodname_github_app %} mit vereinfachter Konfiguration erstellen, wenn Sie Ihre App mit Probot erstellen. Weitere Informationen findest Du auf der [Probot Docs](https://probot.github.io/docs/)-Website.

## Integrationen auf {% data variables.product.prodname_marketplace %} entdecken

Auf {% data variables.product.prodname_marketplace %} können Sie eine Integration zur Installation finden oder Ihre eigene Integration veröffentlichen.

[{% data variables.product.prodname_marketplace %}](https://github.com/marketplace) contains {% data variables.product.prodname_github_apps %} and {% data variables.product.prodname_oauth_apps %}. Weitere Informationen zum Finden einer Integration oder zum Erstellen einer eigenen Integration findest Du unter „[Informationen zu {% data variables.product.prodname_marketplace %}](/articles/about-github-marketplace).“

## Direkt von Integratoren bezogene Integrationen

Einige Integrationen kannst Du auch direkt von Integratoren beziehen. Wenn Sie als Organisationsmitglied eine {% data variables.product.prodname_github_app %} finden, die Sie verwenden möchten, können Sie beantragen, dass eine Organisation die App für die Organisation genehmigt und installiert.

If you have admin permissions for all organization-owned repositories the app is installed on, you can install {% data variables.product.prodname_github_apps %} with repository-level permissions without having to ask an organization owner to approve the app. Wenn ein Integrator die Berechtigungen einer App ändert und die Berechtigungen nur für ein Repository gelten, können Organisationsinhaber und Personen mit Administratorberechtigungen für ein Repository, in dem diese App installierte ist, die neuen Berechtigungen überprüfen und akzeptieren.
