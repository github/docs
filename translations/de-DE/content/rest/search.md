---
title: 'Suchen,'
intro: 'Mit der Such-API kannst du auf {% data variables.product.product_name %} nach bestimmten Elementen suchen.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/search
ms.openlocfilehash: 71f21fc712f7c2121b780d79d20eb9615ad82c90
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147110361'
---
## Informationen zur Such-API

Die Such-API hilft dir bei der Suche nach dem spezifischen Element, das du finden möchtest. Sie können beispielsweise bestimmte Benutzer*innen oder Dateien in einem Repository suchen. Sie können sich die Such-API wie eine Google-Suche vorstellen. Sie ist so konzipiert, dass du das eine Ergebnis findest, nach dem du suchst (oder vielleicht die wenigen Ergebnisse, nach denen du suchst). Wie bei der Google-Suche möchtest du manchmal einige Seiten mit Suchergebnissen anzeigen, damit du das Element finden kannst, das deine Anforderungen am besten erfüllt. Dafür bietet die {% data variables.product.product_name %}-Such-API **bis zu 1.000 Ergebnisse für jede Suche**.

Du kannst deine Suche mithilfe von Abfragen einschränken. Weitere Informationen zur Syntax der Suchabfrage findest du unter [Erstellen einer Suchabfrage](/rest/reference/search#constructing-a-search-query).

### Sortieren von Suchergebnissen nach Rang

Wenn keine andere Sortieroption als Abfrageparameter bereitgestellt wird, werden die Ergebnisse nach der besten Übereinstimmung in absteigender Reihenfolge sortiert. Mehrere Faktoren werden kombiniert, um das relevanteste Element an den Anfang der Ergebnisliste zu bringen.

### Rate Limit

{% data reusables.enterprise.rate_limit %}

Die Such-API verfügt über eine benutzerdefinierte Ratenbegrenzung. Für Anforderungen mit der [Standardauthentifizierung](/rest#authentication), [OAuth](/rest#authentication) oder [Client-ID und Geheimnis](/rest#increasing-the-unauthenticated-rate-limit-for-oauth-applications) kannst du bis zu 30 Anforderungen pro Minute senden. Für nicht authentifizierte Anforderungen ermöglicht die Ratenbegrenzung bis zu 10 Anforderungen pro Minute.

Weitere Informationen zum Bestimmen des aktuellen Ratenbegrenzungsstatus findest du in der [Dokumentation zur Ratenbegrenzung](/rest/reference/rate-limit).

### Erstellen einer Suchabfrage

Jeder Endpunkt in der Such-API verwendet [Abfrageparameter](https://en.wikipedia.org/wiki/Query_string), um Suchvorgänge für {% data variables.product.product_name %} auszuführen. Im jeweiligen Endpunkt in der Such-API findest du ein Beispiel, das den Endpunkt und die Abfrageparameter enthält.

Eine Abfrage kann eine beliebige Kombination aus Suchqualifizierern enthalten, die für {% data variables.product.product_name %} unterstützt werden. Das Format der Suchabfrage lautet:

```
SEARCH_KEYWORD_1 SEARCH_KEYWORD_N QUALIFIER_1 QUALIFIER_N
```

Wenn du beispielsweise nach allen _Repositorys_ von `defunkt` suchen möchtest, die die Wörter `GitHub` und `Octocat` in der README-Datei enthalten, verwende die folgende Abfrage mit dem Endpunkt _Durchsuchen von Repositorys_:

```
GitHub Octocat in:readme user:defunkt
```

**Hinweis:** Stelle sicher, dass du den bevorzugten HTML-Encoder deiner Sprache verwendest, um deine Abfragezeichenfolgen zu erstellen. Beispiel:
```javascript
// JavaScript
const queryString = 'q=' + encodeURIComponent('GitHub Octocat in:readme user:defunkt');
```

In [Suchen auf GitHub](/search-github/searching-on-github) findest du eine vollständige Liste der verfügbaren Qualifizierer, ihr Format und ein Beispiel für ihre Verwendung. Informationen zum Verwenden von Operatoren zum Suchen von Übereinstimmungen mit bestimmten Mengen oder Datumsangaben oder zum Ausschließen von Ergebnissen findest du unter [Grundlegendes zur Suchsyntax](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax/).

### Einschränkungen der Abfragelänge

Die Such-API unterstützt keine Abfragen, die:
- länger als 256 Zeichen sind (ausschließlich Operatoren oder Qualifizierern)
- über mehr als fünf `AND`-, `OR`- oder `NOT`-Operatoren verfügen

Diese Suchabfragen geben eine Fehlermeldung „Überprüfung fehlgeschlagen“ zurück.

### Timeouts und unvollständige Ergebnisse

Damit die Such-API für jeden schnell bleibt, wird die Dauer einer einzelnen Abfrage begrenzt. Für Abfragen, die [das Zeitlimit überschreiten](https://developer.github.com/changes/2014-04-07-understanding-search-results-and-potential-timeouts/), gibt die API die Übereinstimmungen zurück, die bereits vor dem Timeout gefunden wurden, und in der Antwort ist die `incomplete_results`-Eigenschaft auf `true` festgelegt.

Das Erreichen des Zeitlimits bedeutet jedoch nicht in jedem Fall, dass die Suchergebnisse unvollständig sind.
Es kann sein, dass weitere Ergebnisse gefunden wurden.

### Zugriffsfehler oder fehlende Suchergebnisse

Du musst dich erfolgreich authentifizieren und Zugriff auf die Repositorys in deinen Suchabfragen haben. Andernfalls wird ein `422 Unprocessable Entry`-Fehler mit einer Meldung „Überprüfung fehlgeschlagen“ angezeigt. Die Suche schlägt beispielsweise fehl, wenn deine Abfrage `repo:`-, `user:`- oder `org:`-Qualifizierer enthält, die Ressourcen anfordern, auf die du keinen Zugriff hast, wenn du dich bei {% data variables.product.prodname_dotcom %} anmeldest.

Wenn deine Suchabfrage mehrere Ressourcen anfordert, enthält die Antwort nur die Ressourcen, auf die du Zugriff hast, und stellt **keine** Fehlermeldung bereit, die die Ressourcen enthält, die nicht zurückgegeben wurden.

Wenn deine Suchabfrage z. B. nach den Repositorys `octocat/test` und `codertocat/test` sucht, du aber nur Zugriff auf `octocat/test` hast, zeigt deine Antwort Suchergebnisse für `octocat/test` und nichts für `codertocat/test`. Dieses Verhalten simuliert, wie die Suche auf {% data variables.product.prodname_dotcom %} funktioniert.

### Metadaten für Textübereinstimmung

Auf GitHub kannst du den Kontext verwenden, der von Codeausschnitten und Hervorhebungen in Suchergebnissen bereitgestellt wird. Die Such-API bietet zusätzliche Metadaten, mit denen du die übereinstimmenden Suchbegriffe beim Anzeigen von Suchergebnissen hervorheben kannst.

![Hervorhebung von Codeausschnitten](/assets/images/text-match-search-api.png)

Für Anforderungen besteht die Option, diese Textfragmente in der Antwort zu erhalten, und jedes Fragment wird von numerischen Offsets begleitet, die die genaue Position jedes übereinstimmenden Suchbegriffs identifizieren.

Gib zum Abrufen dieser Metadaten in deinen Suchergebnissen den `text-match`-Medientyp in deiner `Accept`-Kopfzeile an.

```shell
application/vnd.github.text-match+json
```

Wenn du den `text-match`-Medientyp bereitstellst, erhältst du einen zusätzlichen Schlüssel namens `text_matches` in der JSON-Nutzlast, der Informationen über die Position deiner Suchbegriffe innerhalb des Texts und die `property` bereitstellt, die den Suchbegriff enthält. Innerhalb des `text_matches`-Arrays enthält jedes Objekt die folgenden Attribute:

Name | BESCHREIBUNG
-----|-----------|
`object_url` | Die URL für die Ressource, die eine Zeichenfolgeneigenschaft enthält, die einem der Suchbegriffe entspricht.
`object_type` | Der Name für den Typ der Ressource, die in der angegebenen `object_url` vorhanden ist.
`property` | Der Name einer Eigenschaft der Ressource, die in der `object_url` vorhanden ist. Diese Eigenschaft ist eine Zeichenfolge, die einem der Suchbegriffe entspricht. (In der von `object_url` zurückgegebenen JSON wird der vollständige Inhalt für das `fragment` in der Eigenschaft mit diesem Namen gefunden.)
`fragment` | Eine Teilmenge des Werts von `property`. Dies ist das Textfragment, das einem oder mehreren Suchbegriffen entspricht.
`matches` | Ein Array eines oder mehrerer Suchbegriffe, die in `fragment` vorhanden sind. Die Indizes (d. h. „Offsets“) sind relativ zum Fragment. (Sie sind nicht relativ zum _vollständigen_ Inhalt von `property`.)

#### Beispiel

Mit cURL und dem obigen [Beispiel für die Suche nach einem Issue](#search-issues-and-pull-requests) würde die API-Anforderung wie folgt aussehen:

``` shell
curl -H 'Accept: application/vnd.github.text-match+json' \
'{% data variables.product.api_url_pre %}/search/issues?q=windows+label:bug \
+language:python+state:open&sort=created&order=asc'
```

Die Antwort enthält ein `text_matches`-Array für jedes Suchergebnis. Im folgenden JSON haben wir zwei Objekte im `text_matches`-Array.

Die erste Textübereinstimmung ist in der `body`-Eigenschaft des Issues aufgetreten. Es wird ein Fragment aus dem Issuetext angezeigt. Der Suchbegriff (`windows`) wird zweimal innerhalb dieses Fragments angezeigt, und wir haben die Indizes für jedes Vorkommen.

Die zweite Textübereinstimmung ist in der `body`-Eigenschaft eines der Issuekommentare aufgetreten. Wir haben die URL für den Issuekommentar. Und natürlich sehen wir ein Fragment aus dem Kommentartext. Der Suchbegriff (`windows`) wird einmal innerhalb dieses Fragments angezeigt.

```json
{
  "text_matches": [
    {
      "object_url": "https://api.github.com/repositories/215335/issues/132",
      "object_type": "Issue",
      "property": "body",
      "fragment": "comprehensive windows font I know of).\n\nIf we can find a commonly
      distributed windows font that supports them then no problem (we can use html
      font tags) but otherwise the '(21)' style is probably better.\n",
      "matches": [
        {
          "text": "windows",
          "indices": [
            14,
            21
          ]
        },
        {
          "text": "windows",
          "indices": [
            78,
            85
          ]
        }
      ]
    },
    {
      "object_url": "https://api.github.com/repositories/215335/issues/comments/25688",
      "object_type": "IssueComment",
      "property": "body",
      "fragment": " right after that are a bit broken IMHO :). I suppose we could
      have some hack that maxes out at whatever the font does...\n\nI'll check
      what the state of play is on Windows.\n",
      "matches": [
        {
          "text": "Windows",
          "indices": [
            163,
            170
          ]
        }
      ]
    }
  ]
}
```
