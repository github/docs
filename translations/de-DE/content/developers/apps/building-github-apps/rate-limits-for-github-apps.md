---
title: Rate limits for GitHub Apps (Ratenbegrenzungen für GitHub-Apps)
intro: '{% data reusables.shortdesc.rate_limits_github_apps %}'
redirect_from:
  - /early-access/integrations/rate-limits
  - /apps/building-integrations/setting-up-and-registering-github-apps/about-rate-limits-for-github-apps
  - /apps/building-github-apps/rate-limits-for-github-apps
  - /apps/building-github-apps/understanding-rate-limits-for-github-apps
  - /developers/apps/rate-limits-for-github-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Rate limits
ms.openlocfilehash: 46e1fddabff7d0e9c8d3d21c6a0d18668083ae63
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147710355'
---
{% data reusables.enterprise.rate_limit %}

{% data reusables.rest-api.always-check-your-limit %}

{% ifversion ghec or fpt %}

## Informationen zu Ratengrenzwerten für Apps

Die Ratengrenzwerte für {% data variables.product.prodname_github_apps %} und {% data variables.product.prodname_oauth_apps %} hängen von dem Plan für die Organisation ab, in der du die Anwendung installierst. Weitere Informationen findest du unter [{% data variables.product.company_short %}-Produkte](/get-started/learning-about-github/githubs-products) und [Typen von {% data variables.product.company_short %}-Konten](/get-started/learning-about-github/types-of-github-accounts#organization-accounts).

{% endif %}

## Server-zu-Server-Anforderungen

{% ifversion ghec or fpt %}

### Standardmäßige Server-zu-Server-Ratengrenzwerte für {% data variables.product.prodname_dotcom_the_website %}

{% endif %}

{% data variables.product.prodname_github_apps %}, die Server-zu-Server-Anforderungen vornehmen, verwenden den minimalen Ratengrenzwert der Installation von 5.000 Anforderungen pro Stunde. Wenn eine Anwendung in einer Organisation mit mehr als 20 Benutzern installiert ist, erhält die Anwendung für jeden Benutzer weitere 50 Anforderungen pro Stunde. Installationen mit mehr als 20 Repositorys erhalten weitere 50 Anforderungen pro Stunde für jedes Repository. Der maximale Ratengrenzwert für eine Installation beträgt 12.500 Anforderungen pro Stunde.

{% ifversion fpt or ghec %}

### Server-zu-Server-Ratengrenzwerte für {% data variables.product.prodname_ghe_cloud %}

{% endif %}

{% ifversion fpt or ghec %}

{% data variables.product.prodname_github_apps %}, die in einer Organisation innerhalb eines Unternehmens auf {% data variables.product.product_location %} installiert sind, unterliegen einem Grenzwert von 15.000 Anforderungen pro Stunde je Organisation, in der die App installiert ist.

{% endif %}

## Benutzer-zu-Server-Anforderungen

{% data variables.product.prodname_github_apps %} und {% data variables.product.prodname_oauth_apps %} können auch im Namen eines Benutzers agieren und Benutzer-zu-Server-Anforderungen ausgeben, nachdem der Benutzer die App autorisiert hat. Weitere Informationen findest du unter [Autorisieren von {% data variables.product.prodname_github_apps %}](/authentication/keeping-your-account-and-data-secure/authorizing-github-apps) und [Autorisieren von {% data variables.product.prodname_oauth_apps %}](/authentication/keeping-your-account-and-data-secure/authorizing-oauth-apps).

Benutzer-zu-Server-Anforderungen von {% data variables.product.prodname_oauth_apps %} werden mit einem OAuth-Token authentifiziert. Benutzer-zu-Server-Anforderungen von {% data variables.product.prodname_github_apps %} werden entweder mit einem OAuth-Token oder einem ablaufenden Benutzerzugriffstoken authentifiziert. Weitere Informationen findest du unter [Identifizieren und Autorisieren von Benutzer*innen für {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps#identifying-and-authorizing-users-for-github-apps) und [Autorisieren von {% data variables.product.prodname_oauth_apps %}](/developers/apps/building-oauth-apps/authorizing-oauth-apps).

{% ifversion fpt or ghec %}

### Standardmäßige Benutzer-zu-Server-Ratengrenzwerte für {% data variables.product.prodname_dotcom_the_website %}

{% endif %}

{% ifversion ghec %}

Die Ratengrenzwerte für Benutzer-zu-Server-Anforderungen, die von {% data variables.product.prodname_github_apps %} ausgegeben werden, hängen davon ab, wo die App installiert ist. Wenn die App in Organisationen oder Repositorys installiert wird, die sich im Besitz eines Unternehmens in {% data variables.product.product_location %} befinden, dann ist die Rate höher als bei Installationen außerhalb eines Unternehmens.

{% endif %}

{% data reusables.apps.user-to-server-rate-limits %}

{% ifversion fpt or ghec %}

### Benutzer-zu-Server-Ratengrenzwerte für {% data variables.product.prodname_ghe_cloud %}

{% data reusables.apps.user-to-server-rate-limits-ghec %}

{% endif %}

## Weitere Informationsquellen

- [Ratengrenzwerte](/rest/overview/resources-in-the-rest-api#rate-limiting) in der REST-API-Dokumentation
- [Ressourcenbeschränkungen](/graphql/overview/resource-limitations) in der GraphQL-API-Dokumentation
