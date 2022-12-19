---
title: Verwenden des Explorers
intro: 'Du kannst Abfragen für echte {% data variables.product.prodname_dotcom %}-Daten mithilfe des GraphQL-Explorers ausführen, einer integrierten Entwicklungsumgebung in deinem Browser, die Dokumente, Syntaxhervorhebung und Überprüfungsfehler unterstützt.'
redirect_from:
  - /v4/guides/using-the-explorer
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
ms.openlocfilehash: 19c534dd0cdcacdfd0d96bb93d055ff3fca8690b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '146749489'
---
## Informationen zum GraphQL-Explorer

{% ifversion fpt or ghec %}

Der [GraphQL-Explorer](/graphql/overview/explorer) ist eine [GraphiQL](https://github.com/graphql/graphiql)-Instanz, bei der es sich um eine „grafische interaktive browserinterne GraphQL-IDE“ handelt.

{% else %}

[GraphiQL](https://github.com/graphql/graphiql) (in dieser Dokumentation auch als GraphQL-Explorer bezeichnet) ist eine „grafische interaktive browserinterne GraphQL-IDE“.

{% endif %}

## Verwenden von GraphiQL

Um die GraphiQL-App zu verwenden, muss sie auf https://github.com/skevy/graphiql-app heruntergeladen und installiert werden.

### Konfigurieren von GraphiQL

1. Rufe ein [OAuth-Token](/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql) ab.
1. Starte GraphiQL.
1. Klicke in der oberen rechten Ecke von GraphiQL auf **Edit HTTP Headers** (HTTP-Header bearbeiten).
1. Geben Sie im Feld **Schlüssel**`Authorization` ein. Geben Sie im Feld **Value** (Wert) `Bearer <token>` ein, wobei `<token>` das von Ihnen generierte OAuth-Token ist.
![graphiql-Header](/assets/images/developer/graphiql-headers.png)
1. Aktiviere das Kontrollkästchen rechts neben dem Token, um es zu speichern.
1. Klicke auf eine Stelle außerhalb des modalen Fensters **HTTP-Header bearbeiten**, um zum Editor zurückzukehren.
1. Geben Sie im Feld **GraphQL Endpoint** (GraphQL-Endpunkt) `{% data variables.product.graphql_url_pre %}` ein.
1. Wähle im Dropdownmenü **Methode** die Option **POST** aus.

{% note %}

**Hinweis**: Weitere Informationen dazu, weshalb die Methode `POST` verwendet wird, findest du unter [Kommunizieren mit GraphQL](/graphql/guides/forming-calls-with-graphql#communicating-with-graphql).

{% endnote %}

Zum Testen des Zugriffs kannst du dich selbst abfragen:

```graphql
query {
  viewer {
    login
  }
}
```

Wenn alles richtig funktioniert hat, wird deine Anmeldung angezeigt. Du kannst nun Abfragen ausführen.

## Zugreifen auf die Randleistendokumentation

Alle Typen in einem GraphQL-Schema umfassen ein `description`-Feld, das in der Dokumentation kompiliert ist. Über den reduzierbaren Bereich **Dokumentation** rechts auf der Explorer-Seite kannst du die Dokumentation zum Typensystem durchsuchen. Die Dokumentation wird automatisch aktualisiert, und veraltete Felder werden entfernt.

{% note %}

Die Inhalte, auf die über die Randleiste **Dokumentation** zugegriffen werden kann, sind mit den Inhalten identisch, die automatisch anhand des Schemas unter [Referenz](/graphql) generiert werden. Der einzige Unterschied ist eine abweichende Formatierung.

{% endnote %}

## Verwenden des Variablenbereichs

Einige Beispielaufrufe umfassen [Variablen](/graphql/guides/forming-calls-with-graphql#working-with-variables), die wie folgt aussehen:

```graphql
query($number_of_repos:Int!){
  viewer {
    name
     repositories(last: $number_of_repos) {
       nodes {
         name
       }
     }
   }
}
variables {
   "number_of_repos": 3
}
```

Dies ist das richtige Format, um den Aufruf per cURL `POST` zu übermitteln (solange [Zeilenvorschubzeichen in Escape-Zeichen gesetzt werden](/graphql/guides/forming-calls-with-graphql#communicating-with-graphql)).

Wenn der Aufruf im Explorer erfolgen soll, gib das `query`-Segment im Hauptbereich und die Variablen im Bereich **Abfragevariablen** darunter ein. Lasse das Wort `variables` im Explorer aus:

```graphql
{
   "number_of_repos": 3
}
```

## Anfordern von Unterstützung

{% data reusables.support.help_resources %}

## Problembehandlung

Da GraphQL [introspektiv](/graphql/guides/introduction-to-graphql#discovering-the-graphql-api) ist, unterstützt der Explorer Folgendes:

* Intelligente Vorschlagssuche, bei der das aktuelle Schema berücksichtigt wird
* Vorschau von Validierungsfehlern während der Eingabe

Bei der Eingabe einer Abfrage, die nicht wohlgeformt ist oder die die [Schemaüberprüfung](/graphql/guides/introduction-to-graphql#schema) nicht besteht, wirst du in einer Popupwarnung über diesen Fehler informiert. Wenn du die Abfrage ausführst, wird der Fehler im Antwortbereich zurückgegeben.

Eine GraphQL-Antwort enthält mehrere Schlüssel: einen `data`-Hash und ein `errors`-Array.

```json
{
  "data": null,
  "errors": [
    {
      "message": "Objects must have selections (field 'nodes' returns Repository but has no selections)",
      "locations": [
        {
          "line": 5,
          "column": 8
        }
      ]
    }
  ]
}
```

Möglicherweise tritt ein unerwarteter Fehler auf, der nicht im Zusammenhang mit dem Schema steht. In diesem Fall enthält die Meldung einen Referenzcode, den du beim Melden des Problems verwenden kannst:

```json
{
  "data": null,
  "errors": [
    {
      "message": "Something went wrong while executing your query. This is most likely a GitHub bug. Please include \"7571:3FF6:552G94B:69F45B7:5913BBEQ\" when reporting this issue."
    }
  ]
}
```

{% note %}

**Hinweis:** {% data variables.product.prodname_dotcom %} empfiehlt eine Überprüfung auf Fehler, bevor Daten in einer Produktionsumgebung verwendet werden. Bei GraphQL betreffen Fehler nicht zwangsläufig sämtliche Abfragen: einige GraphQL-Abfragen können erfolgreich sein, während bei anderen Fehler auftreten.

{% endnote %}
