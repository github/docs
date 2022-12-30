---
title: Informationen zu Integrationen
intro: 'Integrationen sind Tools und Dienste, die mit {% data variables.product.product_name %} verbunden werden, um deinen Workflow zu ergänzen und zu erweitern.'
redirect_from:
  - /articles/about-integrations
  - /github/customizing-your-github-workflow/about-integrations
  - /github/customizing-your-github-workflow/exploring-integrations/about-integrations
versions:
  fpt: '*'
  ghec: '*'
ms.openlocfilehash: a976ad099b80297d0d1e006a020b77b6406989eb
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145106343'
---
Du kannst Integrationen in deinem persönlichen Konto oder in deinen eigenen Organisation installieren. Du kannst auch {% data variables.product.prodname_github_apps %} von einem Drittanbieter in einem bestimmten Repository installieren, für das du Administratorrechte hast oder das sich im Besitz deiner Organisation befindet.

## Unterschiede zwischen {% data variables.product.prodname_github_apps %} und {% data variables.product.prodname_oauth_apps %}

Integrationen können {% data variables.product.prodname_github_apps %}, {% data variables.product.prodname_oauth_apps %}, oder alles sein, was {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}-APIs oder -Webhooks verwendet.

{% data variables.product.prodname_github_apps %}s bieten granulare Berechtigungen und fordern nur Zugriff auf das an, was die App benötigt. {% data variables.product.prodname_github_apps %} bieten außerdem spezifische Berechtigungen auf Benutzerebene, die jeder Benutzer individuell autorisieren muss, wenn eine App installiert wird oder wenn der Integrator die von der App angeforderten Berechtigungen ändert.

Weitere Informationen finden Sie unter
- [Unterschiede zwischen {% data variables.product.prodname_github_apps %} und {% data variables.product.prodname_oauth_apps %}](/apps/differences-between-apps/)
- [Informationen zu Apps](/apps/about-apps/)
- [Berechtigungen auf Benutzerebene](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#user-level-permissions)
- [Autorisieren von {% data variables.product.prodname_oauth_apps %}](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-oauth-apps)
- [Autorisieren von {% data variables.product.prodname_github_apps %}](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-github-apps)
- [Überprüfen autorisierter Integrationen](/articles/reviewing-your-authorized-integrations/)

Du kannst eine vorkonfigurierte {% data variables.product.prodname_github_app %} installieren, wenn die Integratoren oder App-Entwickler ihre App mit dem {% data variables.product.prodname_github_app %}-Manifest-Flow erstellt haben. Weitere Informationen zum Ausführen deiner {% data variables.product.prodname_github_app %} mit automatisierter Konfiguration erhältst du vom Integrator oder App-Entwickler.

Du kannst eine {% data variables.product.prodname_github_app %} mit vereinfachter Konfiguration erstellen, wenn du deine App mit Probot erstellst. Weitere Informationen findest du auf der Website mit der [Probot-Dokumentation](https://probot.github.io/docs/).

## Integrationen auf {% data variables.product.prodname_marketplace %} entdecken

Auf {% data variables.product.prodname_marketplace %} kannst du eine Integration zur Installation finden oder deine eigene Integration veröffentlichen.

[{% data variables.product.prodname_marketplace %}](https://github.com/marketplace) enthält {% data variables.product.prodname_github_apps %} und {% data variables.product.prodname_oauth_apps %}. Weitere Informationen zur Suche nach einer Integration oder zur Erstellung einer eigenen Integration findest du unter [Informationen zum {% data variables.product.prodname_marketplace %}](/articles/about-github-marketplace).

## Direkt von Integratoren bezogene Integrationen

Einige Integrationen kannst du auch direkt von Integratoren beziehen. Wenn du als Organisationsmitglied eine {% data variables.product.prodname_github_app %} findest, die du verwenden möchtest, kannst du beantragen, dass eine Organisation die App für die Organisation genehmigt und installiert.

Wenn du über Administratorberechtigungen für alle organisationseigenen Repositorys verfügst, auf denen die App installiert ist, kannst du {% data variables.product.prodname_github_apps %} mit Berechtigungen auf Repositoryebene installieren, ohne einen Organisationsinhaber um die Genehmigung der App bitten zu müssen. Wenn ein Integrator die Berechtigungen einer App ändert und die Berechtigungen nur für ein Repository gelten, können Organisationsinhaber und Personen mit Administratorberechtigungen für ein Repository, in dem diese App installierte ist, die neuen Berechtigungen überprüfen und akzeptieren.
