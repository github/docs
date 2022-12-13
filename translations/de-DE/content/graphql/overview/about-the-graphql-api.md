---
title: Informationen zur GraphQL-API
intro: 'Die GraphQL-API von {% data variables.product.prodname_dotcom %} bietet Flexibilität und die Möglichkeit, genau die Daten zu definieren, die du abrufen möchtest.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
ms.openlocfilehash: 9b447925609425157d5d965370c09fdd12d30b56
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145068421'
---
## Übersicht

Hier findest du einige schnelle Links für die Einrichtung der GraphQL-API:

* [Authentifizierung](/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql)
* [Stammendpunkt](/graphql/guides/forming-calls-with-graphql#the-graphql-endpoint)
* [Schemaintrospektion](/graphql/guides/introduction-to-graphql#discovering-the-graphql-api)
* [Ratenbegrenzungen](/graphql/overview/resource-limitations)
* [Migrieren aus REST](/graphql/guides/migrating-from-rest-to-graphql)

## Informationen zu GraphQL

Die Sprache der [GraphQL](https://graphql.github.io/)-Datenabfrage lautet:

* **A [Spezifikation](https://graphql.github.io/graphql-spec/June2018/).** Die Spezifikation bestimmt die Gültigkeit des [Schemas](/graphql/guides/introduction-to-graphql#schema) auf dem API-Server. Das Schema bestimmt die Gültigkeit von Client-Aufrufen.

* **[Stark typisiert](#about-the-graphql-schema-reference).** Das Schema definiert das Typsystem einer API und alle Objektbeziehungen.

* **[Introspektive](/graphql/guides/introduction-to-graphql#discovering-the-graphql-api).** Ein Client kann das Schema nach Details zum Schema abfragen.

* **[Hierarchisch](/graphql/guides/forming-calls-with-graphql).** Die Form eines GraphQL-Aufrufs spiegelt die Form der zurückgegebenen JSON-Daten. [Geschachtelte Felder](/graphql/guides/migrating-from-rest-to-graphql#example-nesting) ermöglichen es dir, nur die Daten zu erhalten, die du in einer einzelnen Rundreise angibst.

* **Eine Anwendungsschicht.** GraphQL ist kein Speichermodell oder eine Datenbankabfragesprache. Das _Graph_ bezieht sich auf Graphstrukturen, die im Schema definiert sind, wobei [Knoten](/graphql/guides/introduction-to-graphql#node) Objekte und [Kanten](/graphql/guides/introduction-to-graphql#edge) Beziehungen zwischen Objekten definieren. Die API durchläuft und gibt Anwendungsdaten basierend auf den Schemadefinitionen zurück, unabhängig davon, wie die Daten gespeichert werden.

## Warum GitHub GraphQL verwendet

GitHub wählte GraphQL aus, da es wesentlich mehr Flexibilität für unsere Integratoren bietet. Die Möglichkeit, genau die gewünschten&mdash; Daten zu definieren und _nur_ die gewünschten&mdash; Daten zu definieren, ist ein leistungsstarker Vorteil gegenüber herkömmlichen REST-API-Endpunkten. GraphQL ermöglicht es Ihnen, mehrere REST-Anforderungen durch _einen einzelnen Aufruf_ zu ersetzen, um die von Ihnen angegebenen Daten abzurufen.

Weitere Informationen dazu, warum GitHub in GraphQL investiert hat, findest du im ursprünglichen [Blogbeitrag mit der Ankündigung](https://github.blog/2016-09-14-the-github-graphql-api/).

## Informationen zum GraphQL-Schemaverweis

Die Dokumente in der Seitenleiste werden aus dem {% data variables.product.prodname_dotcom %} GraphQL-[Schema](/graphql/guides/introduction-to-graphql#discovering-the-graphql-api) generiert. Alle Aufrufe werden für das Schema überprüft und ausgeführt. Verwende diese Dokumente, um herauszufinden, welche Daten du aufrufen kannst:

* Zulässige Vorgänge: [Abfragen](/graphql/reference/queries) und [Mutationen](/graphql/reference/mutations).

* Schemadefinierte Typen: [Skalare](/graphql/reference/scalars), [Objekte](/graphql/reference/objects), [Enumerationen](/graphql/reference/enums), [Schnittstellen](/graphql/reference/interfaces), [Vereinigungen](/graphql/reference/unions) und [Eingabeobjekte](/graphql/reference/input-objects).

Du kannst über die [Seitenleiste von Explorer-Dokumenten](/graphql/guides/using-the-explorer#accessing-the-sidebar-docs) auf dieselben Inhalte zugreifen. Beachte, dass du möglicherweise sowohl auf die Dokumente als auch auf die Schemaüberprüfung angewiesen bist, um die GraphQL-API erfolgreich aufzurufen.

Weitere Informationen wie Authentifizierungs- und Ratenlimitdetails findest du in den [Anleitungen](/graphql/guides).

## Anfordern von Unterstützung

{% data reusables.support.help_resources %}
