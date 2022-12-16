---
title: Rate Limit
intro: 'Verwende die REST-API, um den aktuellen Status der Quotengrenze zu überprüfen.'
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
ms.openlocfilehash: a609d339af2201bba5ec12044a8eebe733013cea
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193284'
---
## Informationen zu Quotengrenzen

Du kannst deinen aktuellen Status der Quotengrenze jederzeit überprüfen. Weitere Informationen zu Quotengrenzregeln findest du unter [Ressourcen in der REST-API](/rest/overview/resources-in-the-rest-api#rate-limiting). 

Die REST-API für die Suche nach Elementen verfügt über eine benutzerdefinierte Quotengrenze, die von der Quotengrenze für die anderen REST-API-Endpunkte getrennt ist. Weitere Informationen findest du unter [Suchen](/rest/search). Die GraphQL-API verfügt auch über eine benutzerdefinierte Quotengrenze, die von der Rest-API getrennt und anders berechnet wird als die REST-API. Weitere Informationen findest du unter [Ressourcenbeschränkungen](/graphql/overview/resource-limitations#rate-limit). Aus diesen Gründen kategorisiert die Antwort der API deine Quotengrenzen. Unter `resources` werden Objekte verschiedener Kategorien angezeigt:

* Das `core`-Objekt stellt deinen Status für die Quotengrenze für alle nicht auf die Suche bezogenen Ressourcen in der REST-API bereit.

* Das `search`-Objekt stellt deinen Status der Quotengrenze für die REST-API für die Suche bereit.

* Das `graphql`-Objekt stellt deinen Status der Quotengrenze für die GraphQL-API bereit.

* Das `integration_manifest`-Objekt stellt deinen Status der Quotengrenze für den Vorgang `POST /app-manifests/{code}/conversions` bereit. Weitere Informationen findest du unter [Erstellen einer GitHub-App aus einem Manifest](/apps/building-github-apps/creating-github-apps-from-a-manifest/#3-you-exchange-the-temporary-code-to-retrieve-the-app-configuration).

Weitere Informationen zu den Headern und Werten in der Antwort auf die Quotengrenze findest du unter [Ressourcen in der REST-API](/rest/overview/resources-in-the-rest-api#rate-limit-http-headers).
