---
title: Migrieren globaler GraphQL-Knoten-IDs
intro: Hier erfährst du mehr über die beiden globalen Knoten-ID-Formate und wie sie vom Legacyformat zum neuen Format migriert werden.
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
shortTitle: Migrating global node IDs
ms.openlocfilehash: 7d62d81e52b848e4fb8b5f6b2bae9997e0ac1209
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147717853'
---
## Hintergrund

Die {% data variables.product.product_name %} GraphQL-API unterstützt derzeit zwei Typen globaler Knoten-ID-Formate. Das Legacy-Format ist veraltet und wird durch ein neues Format ersetzt.  In diesem Leitfaden wird gezeigt, wie du bei Bedarf zum neuen Format migrierst. 

Durch die Migration zum neuen Format stellst du sicher, dass die Reaktionszeiten deiner Anforderungen konsistent und kurz bleiben. Du stellst außerdem sicher, dass deine Anwendung weiterhin funktioniert, sobald die Legacy-IDs vollständig veraltet sind.

Weitere Informationen dazu, warum das ältere globale Knoten-ID-Format veraltet ist, findest du unter [Neues globales ID-Format, das zu GraphQL kommt](https://github.blog/2021-02-10-new-global-id-format-coming-to-graphql).

## Ermitteln, ob du Maßnahmen ergreifen musst

Du musst nur die Migrationsschritte ausführen, wenn du Verweise auf globale GraphQL-Knoten-IDs speicherst.  Diese IDs entsprechen dem `id`-Feld für jedes Objekt im Schema.  Wenn du keine globalen Knoten-IDs speicherst, kannst du weiterhin mit der API ohne Änderung interagieren.

Wenn du die Legacy-IDs derzeit decodierst, um Typ-Informationen zu extrahieren (zum Beispiel, wenn du die ersten beiden Zeichen von `PR_kwDOAHz1OX4uYAah` verwendest, um festzustellen, ob es sich bei dem Objekt um eine Pull Request handelt), wird ihr Dienst abgebrochen, da sich das Format der IDs geändert hat.  Du solltest deinen Dienst migrieren, um diese IDs als undurchsichtige Zeichenfolgen zu behandeln.  Diese IDs sind eindeutig, daher kannst du dich direkt als Verweise darauf verlassen.


## Migrieren zu den neuen globalen IDs

Um die Migration zum neuen ID-Format zu erleichtern, kannst du den `X-Github-Next-Global-ID`-Header in deinen GraphQL-API-Anforderungen verwenden. Der Wert des `X-Github-Next-Global-ID`-Headers muss `1` oder `0` sein.  Wenn du den Wert festlegst, um `1` die Antwortnutzlast zu erzwingen, wird immer das neue ID-Format für jedes Objekt verwendet, für das du das `id`-Feld angefordert hast.  Wenn du den Wert `0` festlegst, der auf das Standardverhalten zurückgesetzt wird, wird die Legacy-ID oder neue ID abhängig vom Erstellungsdatum des Objekts angezeigt. 

Hier folgt eine Beispielanforderung unter Verwendung von cURL:

```
$ curl \
  -H "Authorization: Bearer $GITHUB_TOKEN" \
  -H "X-Github-Next-Global-ID: 1" \
  https://api.github.com/graphql \
  -d '{ "query": "{ node(id: \"MDQ6VXNlcjM0MDczMDM=\") { id } }" }'
```

Obwohl die Legacy-ID `MDQ6VXNlcjM0MDczMDM=` in der Abfrage verwendet wurde, enthält die Antwort das neue ID-Format:
```
{"data":{"node":{"id":"U_kgDOADP9xw"}}}
```
Mit dem `X-Github-Next-Global-ID`-Header findest du das neue ID-Format für Legacy-IDs, auf die du in deiner Anwendung verweist. Anschließend kannst du diese Verweise mit der in der Antwort empfangenen ID aktualisieren. Du solltest alle Verweise auf ältere IDs aktualisieren und das neue ID-Format für alle nachfolgenden Anforderungen an die API verwenden. Zum Ausführen von Massenvorgängen kannst du Aliase verwenden, um mehrere Knotenabfragen in einem API-Aufruf zu übermitteln. Weitere Informationen findest du in [den GraphQL-API-Dokumenten](https://graphql.org/learn/queries/#aliases).

Du kannst auch die neue ID für eine Sammlung von Elementen abrufen. Wenn du beispielsweise die neue ID für die letzten 10 Repositorys in deiner Organisation abrufen möchtest, kannst du eine Abfrage wie folgt verwenden:
```
{
  organization(login: "github") {
    repositories(last: 10) {
      edges {
        cursor
        node {
          name
          id
        }
      }
    }
  }
}
```

Beachte, dass sich die Einstellung `X-Github-Next-Global-ID` zu `1` auf den Rückgabewert jedes `id`-Felds in deiner Abfrage auswirkt.  Dies bedeutet, dass du auch dann, wenn du eine Nicht-`node`-Abfrage übermittelst, die neue Format-ID zurückerhältst, wenn du das `id`-Feld angefordert hast.

## Feedback teilen

Wenn du Bedenken beim Rollout dieser Änderung hast, die sich auf deine App auswirken, wende dich bitte an [{% data variables.product.product_name %}](https://support.github.com/contact) und füge Informationen wie deinen App-Namen hinzu, damit wir dich besser unterstützen können.
