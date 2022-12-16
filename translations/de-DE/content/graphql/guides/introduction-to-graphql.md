---
title: Einführung in GraphQL
intro: Lerne nützliche Terminologie und Konzepte für die Nutzung der GitHub GraphQL-API kennen.
redirect_from:
  - /v4/guides/intro-to-graphql
  - /graphql/guides/intro-to-graphql
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
ms.openlocfilehash: abc74dfd4aa65035405fd956c6438a487381284b
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145068472'
---
## GraphQL-Terminologie

Die GitHub GraphQL-API stellt eine architektonische und konzeptionelle Abkehr von der GitHub-REST-API dar. Du wirst wahrscheinlich einige neue Begriffe in den [Referenzdokumenten zur GraphQL-API](/graphql) vorfinden.

## Schema

Ein Schema definiert das Typsystem einer GraphQL-API. Es beschreibt den vollständigen Satz möglicher Daten (Objekte, Felder, Beziehungen, alles), auf die ein Client zugreifen kann. Aufrufe vom Client werden [überprüft](https://graphql.github.io/learn/validation/) und für das Schema [ausgeführt](https://graphql.github.io/learn/execution/). Ein Client kann über eine [Introspektion](#discovering-the-graphql-api) Informationen zum Schema abrufen. Das Schema befindet sich auf dem GraphQL-API-Server. Weitere Informationen findest du unter [Ermitteln der GraphQL-API](#discovering-the-graphql-api).

## Feld

In Feld ist dies eine Dateneinheit, die du über ein Objekt abrufen kannst. Wie in der [offiziellen GraphQL-Dokumentation](https://graphql.github.io/learn/schema/) angegeben ist „die GraphQL-Abfragesprache grundsätzlich für das Auswählen von Feldern in Objekten konzipiert“.

Die [offizielle Spezifikation](https://graphql.github.io/graphql-spec/June2018/#sec-Language.Fields) enthält Folgendes über Felder:

> Alle GraphQL-Vorgänge müssen ihre Auswahl bis hin zu den Feldern angeben, die Skalare zurückgeben, um eine eindeutig gestaltete Antwort sicherzustellen.

Dies bedeutet, wenn du versuchst, ein Feld zurückzugeben, das kein Skalar ist, wird bei der Schemaüberprüfung ein Fehler ausgelöst. Du musst geschachtelte Unterfelder hinzufügen, bis alle Felder Skalare zurückgeben.

## Argument

Ein Argument ein Satz von an ein bestimmtes Feld angefügten Schlüssel-Wert-Paaren. Einige Felder erfordern ein Argument. [Mutationen](/graphql/guides/forming-calls-with-graphql#about-mutations) erfordern ein Eingabeobjekt als Argument.

## Implementierung

Im GraphQL-Schema wird eventuell der Begriff _implementiert_ verwendet, um zu definieren, wie ein Objekt von einer [Schnittstelle](/graphql/reference/interfaces) erbt.

Nachfolgend findest du ein Beispiel für ein Schema, das die `X`-Schnittstelle und das `Y`-Objekt definiert:

```
interface X {
  some_field: String!
  other_field: String!
}

type Y implements X {
  some_field: String!
  other_field: String!
  new_field: String!
}
```

Das bedeutet, dass das `Y`-Objekt dieselben Felder/Argumente/Rückgabetypen wie die `X`-Schnittstelle erfordert und gleichzeitig neue Felder hinzufügt, die spezifisch für das `Y`-Objekt sind. (Das `!` bedeutet, dass das Feld erforderlich ist.)

In den Referenzdokumenten findest du Folgendes:

* Für jedes [Objekt](/graphql/reference/objects) sind unter **Implementiert** die Schnittstellen aufgeführt, _von denen es erbt_.

* Für jede [Schnittstelle](/graphql/reference/interfaces) sind unter **Implementierungen** die Objekte aufgeführt, _von denen sie erbt_.

## Verbindung

Verbindungen stellen eine Möglichkeit dar, zugehörige Objekte als Teil desselben Aufrufs abzufragen. Mit Verbindungen kannst du mit nur einem einzelnen GraphQL-Aufruf dasselbe erreichen, wofür in der REST-API mehrere Aufrufe benötigst. Weitere Informationen findest du unter [Migrieren von REST zu GraphQL](/graphql/guides/migrating-from-rest-to-graphql).

Im einem Diagramm werden Punkte durch Linien miteinander verbunden, um dies zu veranschaulichen. Die Punkte sind Knoten, die Linien sind Kanten. Eine Verbindung definiert eine Beziehung zwischen Knoten.

## Edge

Kanten stellen Verbindungen zwischen Knoten dar. Wenn du eine Verbindung abfragst, werden ihre Kanten durchlaufen, um zu den Knoten zu gelangen. Jedes `edges`-Feld verfügt über ein `node`-Feld und ein `cursor`-Feld. Cursor werden für die [Pagination](https://graphql.github.io/learn/pagination/) verwendet.

## Node

_Knoten_ ist ein allgemeiner Begriff für ein Objekt. Du kannst einen Knoten direkt suchen oder über eine Verbindung auf verwandte Knoten zugreifen. Wenn du einen `node` angibst, dass keinen [Skalar](/graphql/reference/scalars) zurückgibt, musst du Unterfelder einschließen, bis alle Felder Skalare zurückgeben. Informationen zum Zugreifen auf Knoten-IDs über die REST-API und ihre Verwendung in GraphQL-Abfragen findest du unter [Verwenden globaler Knoten-IDs](/graphql/guides/using-global-node-ids).

## Entdecken der GraphQL-API

GraphQL ist [introspektiv](https://graphql.github.io/learn/introspection/). Dies bedeutet, dass du ein GraphQL-Schema für Details zu sich selbst abfragen kannst.

* Frage `__schema` ab, um alle Typen aufzulisten, die im Schema definiert sind, und Details zu jedem zu erhalten:

  ```graphql
  query {
    __schema {
      types {
        name
        kind
        description
        fields {
          name
        }
      }
    }
  }
  ```

* Frage `__type` ab, um Details zu einem beliebigen Typ abzurufen:

  ```graphql
  query {
    __type(name: "Repository") {
      name
      kind
      description
      fields {
        name
      }
    }
  }
  ```

* Du kannst auch eine _Introspektionsabfrage_ für das Schema über eine `GET`-Anforderung ausführen:

  ```shell
  $ curl -H "Authorization: bearer <em>token</em>" {% data variables.product.graphql_url_pre %}
  ```
  
  {% note %}

  **Hinweis:** Wenn du die Antwort `"message": "Bad credentials"` oder `401 Unauthorized` erhältst, solltest du überprüfen, ob du ein gültiges Token verwendest. Weitere Informationen hierzu findest du unter [Erstellen eines persönlichen Zugriffstokens](/github/authenticating-to-github/creating-a-personal-access-token). 

  {% endnote %}
  
  Die Ergebnisse werden in JSON angegeben. Es wird daher empfohlen, zum einfacheren Lesen und Suchen eine Quelltextformatierung durchzuführen. Du kannst ein Befehlszeilentool wie [jq](https://stedolan.github.io/jq/) verwenden oder die Ergebnisse zu diesem Zweck per Pipe an `python -m json.tool` weiterleiten.
  
  Alternativ kannst du den Medientyp `idl` übergeben, um die Ergebnisse im IDL-Format zurückzugeben, das eine komprimierte Version des Schemas darstellt:

  ```shell
  $ curl -H "Authorization: bearer <em>token</em>" -H "Accept: application/vnd.github.v4.idl" \
  {% data variables.product.graphql_url_pre %}
  ```

  {% note %}

  **Hinweis:** Die Introspektionsabfrage ist wahrscheinlich die einzige `GET`-Anforderung, die du in GraphQL ausführst. Wenn du einen Methodenkörper übergibst, ist die GraphQL-Anforderungsmethode `POST`, und zwar unabhängig davon, ob es sich um eine Abfrage oder eine Mutation handelt.

  {% endnote %}

  Weitere Informationen zum Ausführen von Abfragen findest du unter [Erstellen von Aufrufen mit GraphQL](/graphql/guides/forming-calls-with-graphql).
