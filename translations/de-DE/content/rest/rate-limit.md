---
title: Rate Limit
intro: Mit der Quotengrenzen-API kannst du den aktuellen Quotengrenzenstatus verschiedener REST-APIs überprüfen.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/rate-limit
ms.openlocfilehash: 282b7e7bbb947256ccad4950b6a17d8874044d8f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147081048'
---
## Informationen zur Quotengrenzen-API

In der Übersichtsdokumentation zur REST-API werden die [Quotengrenzregeln](/rest/overview/resources-in-the-rest-api#rate-limiting) beschrieben. Du kannst den aktuellen Status deiner Quotengrenze jederzeit über die im Folgenden angegebene API für Quotengrenzen überprüfen.

### Grundlegendes zum Status der Quotengrenze

Die Such-API verfügt über eine [benutzerdefinierte Quotengrenze](/rest/reference/search#rate-limit), getrennt von der Quotengrenze für den Rest der REST-API. Die GraphQL-API verfügt auch über eine [benutzerdefinierte Quotengrenze](/graphql/overview/resource-limitations#rate-limit), die von der Rest-API getrennt und anders berechnet wird als die REST-API.

Aus diesen Gründen kategorisiert die Antwort der Quotengrenzen-API deine Quotengrenzen. Unter `resources` werden vier Objekte angezeigt:

* Das `core`-Objekt stellt deinen Status für die Quotengrenze für alle nicht auf die Suche bezogenen Ressourcen in der REST-API bereit.

* Das `search`-Objekt stellt deinen Status für die Quotengrenze für die [Such-API](/rest/reference/search) bereit.

* Das `graphql`-Objekt stellt deinen Status für die Quotengrenze für die [GraphQL-API](/graphql) bereit.

* Das `integration_manifest`-Objekt stellt deinen Status für die Quotengrenze für den [Codekonvertierungsendpunkt eines Manifests für GitHub-Apps](/apps/building-github-apps/creating-github-apps-from-a-manifest/#3-you-exchange-the-temporary-code-to-retrieve-the-app-configuration) dar.

Weitere Informationen zu den Headern und Werten in der Antwort auf die Quotengrenze findest du unter [Ressourcen in der REST-API](/rest/overview/resources-in-the-rest-api#rate-limit-http-headers).
