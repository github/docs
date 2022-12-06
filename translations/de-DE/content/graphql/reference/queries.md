---
title: Abfragen
miniTocMaxHeadingLevel: 3
redirect_from:
  - /v4/query
  - /v4/reference/query
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
ms.openlocfilehash: d5c31e8e00788d2e75f27b0bb161249f01fcfb1d
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108446'
---
## Informationen zu Abfragen

Jedes GraphQL-Schema verfügt über einen Stammtyp für Abfragen und Mutationen. Der [Abfragetyp](https://graphql.github.io/graphql-spec/June2018/#sec-Type-System) definiert GraphQL-Vorgänge, die Daten vom Server abrufen.

Weitere Informationen findest du unter „[Informationen zu Abfragen](/graphql/guides/forming-calls-with-graphql#about-queries)“.

{% note %}

**Hinweis:** Für [Benutzer-zu-Server-](/developers/apps/identifying-and-authorizing-users-for-github-apps#user-to-server-requests)-{% data variables.product.prodname_github_app %}-Anforderungen solltest du separate Abfragen für Probleme und Pullanforderungen verwenden. Verwende z. B. die Filter `is:issue` oder`is:pull-request` und ihre Entsprechungen. Die Verwendung der `search`-Verbindung zum Zurückgeben einer Kombination von Problemen und Pullanforderungen in einer einzelnen Abfrage führt zu einer leeren Gruppe von Knoten.

{% endnote %}

<!-- Content after this section is automatically generated -->
