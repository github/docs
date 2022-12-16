---
title: Verwenden der Paginierung in der REST-API
intro: 'Hier erfährst du, wie du über die REST-API durch paginierte Antworten navigierst.'
redirect_from:
  - /guides/traversing-with-pagination
  - /v3/guides/traversing-with-pagination
  - /rest/guides/traversing-with-pagination
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
shortTitle: Pagination
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 3a47974e431b227a225584ff6d3cd65f21a1ab9a
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193299'
---
## Informationen zur Paginierung

Wenn eine Antwort der REST-API viele Ergebnisse enthält, werden die Ergebnisse von {% data variables.product.company_short %} paginiert, und es wird eine Teilmenge der Ergebnisse zurückgegeben. `GET /repos/octocat/Spoon-Knife/issues` gibt beispielsweise nur 30 Issues aus dem Repository `octocat/Spoon-Knife` zurück, obwohl das Repository über 1600 offene Issues enthält. Dadurch werden die Antworten für Server und Benutzer*innen leichter zu bewältigen.

In diesem Leitfaden wird veranschaulicht, wie du zusätzliche Ergebnisseiten für paginierte Antworten anforderst, die Anzahl der auf jeder Seite zurückgegebenen Ergebnisse änderst und ein Skript schreibst, um mehrere Ergebnisseiten abzurufen.

## Verwenden von Linkheadern

Wenn die Antwort paginiert ist, enthält der Antwortheader einen Linkheader. Der Linkheader wird weggelassen, wenn der Endpunkt keine Paginierung unterstützt oder alle Ergebnisse auf eine einzelne Seite passen. Der Linkheader enthält URLs, mit denen du zusätzliche Ergebnisseiten abrufen kannst. Wenn du cURL oder die {% data variables.product.prodname_cli %} verwendest und Antwortheader anzeigen möchtest, musst du das Flag `--include` mit deiner Anforderung übergeben. Um die Antwortheader anzuzeigen, wenn du eine Bibliothek zum Senden von Anforderungen verwendest, befolge die Anweisungen in der Dokumentation für diese Bibliothek. Beispiel:

```shell
curl --include --request GET \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues" \
--header "Accept: application/vnd.github+json"
```

Wenn die Antwort paginiert ist, sieht der Linkheader ungefähr wie folgt aus:

```
link: <https://api.github.com/repositories/1300192/issues?page=2>; rel="prev", <https://api.github.com/repositories/1300192/issues?page=4>; rel="next", <https://api.github.com/repositories/1300192/issues?page=515>; rel="last", <https://api.github.com/repositories/1300192/issues?page=1>; rel="first"
```

Der Linkheader enthält die URL für die vorherige, nächste, erste und letzte Ergebnisseite:

- Die URL für die vorherige Seite wird gefolgt von `rel="prev"`.
- Die URL für die nächste Seite wird gefolgt von `rel="next"`.
- Die URL für die letzte Seite wird gefolgt von `rel="last"`.
- Die URL für die erste Seite wird gefolgt von `rel="first"`.

In einigen Fällen ist nur eine Teilmenge dieser Links verfügbar. Beispielsweise ist der Link zur vorherigen Seite nicht enthalten, wenn du dich auf der ersten Ergebnisseite befindest, und der Link zur letzten Seite ist nicht enthalten, wenn er nicht berechnet werden kann.

Du kannst die URLs aus dem Linkheader verwenden, um eine weitere Ergebnisseite anzufordern. So forderst du beispielsweise die letzte Ergebnisseite basierend auf dem vorherigen Beispiel an:

```shell
curl --include --request GET \
--url "https://api.github.com/repositories/1300192/issues?page=515" \
--header "Accept: application/vnd.github+json"
```

Die URLs im Linkheader verwenden Abfrageparameter, um anzugeben, welche Ergebnisseite zurückgegeben werden soll. Die Abfrageparameter in den Link-URLs können sich je nach Endpunkt unterscheiden: Jeder paginierte Endpunkt verwendet die Abfrageparameter `page`, `before`/`after` oder `since`. (Einige Endpunkte verwenden den Parameter `since` für andere Zwecke als die Paginierung.) In allen Fällen kannst du die URLs im Linkheader verwenden, um zusätzliche Ergebnisseiten abzurufen. Weitere Informationen zu Abfrageparametern findest du unter [Erste Schritte mit der REST-API](/rest/guides/getting-started-with-the-rest-api#using-query-parameters).  

## Ändern der Anzahl der Elemente pro Seite

Wenn ein Endpunkt den Abfrageparameter `per_page` unterstützt, kannst du steuern, wie viele Ergebnisse auf einer Seite zurückgegeben werden. Weitere Informationen zu Abfrageparametern findest du unter [Erste Schritte mit der REST-API](/rest/guides/getting-started-with-the-rest-api#using-query-parameters).

Diese Anforderung verwendet beispielsweise den Abfrageparameter `per_page`, um zwei Elemente pro Seite zurückzugeben:

```shell
curl --include --request GET \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues?per_page=2" \
--header "Accept: application/vnd.github+json"
```

Der Parameter `per_page` wird automatisch in den Linkheader eingeschlossen. Beispiel:

```
link: <https://api.github.com/repositories/1300192/issues?per_page=2&page=2>; rel="next", <https://api.github.com/repositories/1300192/issues?per_page=2&page=7715>; rel="last"
```

## Skripterstellung mit Paginierung

Anstatt URLs manuell aus dem Linkheader zu kopieren, kannst du ein Skript schreiben, um mehrere Ergebnisseiten abzurufen.

In den folgenden Beispielen werden JavaScript und die Octokit.js-Bibliothek von {% data variables.product.company_short %} verwendet. Weitere Informationen zu Octokit.js findest du unter [Erste Schritte mit der REST-API](/rest/guides/getting-started-with-the-rest-api?tool=javascript) und in der [Infodatei zu Octokit.js](https://github.com/octokit/octokit.js/#readme).

### Beispiel für die Verwendung der Octokit.js-Paginierungsmethode

Du kannst `octokit.paginate()` verwenden, um mit Octokit.js paginierte Ergebnisse abzurufen. `octokit.paginate()` ruft die nächste Ergebnisseite ab, bis die letzte Seite erreicht ist, und gibt dann alle Ergebnisse als einzelnes Array zurück. Einige Endpunkte geben paginierte Ergebnisse als Array in einem Objekt zurück, anstatt die paginierten Ergebnisse als Array zurückzugeben. `octokit.paginate()` gibt immer ein Array aus Elementen zurück, auch wenn das Rohergebnis ein Objekt war. Wenn die Ergebnisse nicht paginiert sind, verhält sich `octokit.paginate()` wie `octokit.request()`.

Dieses Skript ruft beispielsweise alle Issues aus dem Repository `octocat/Spoon-Knife` ab. Obwohl 100 Issues gleichzeitig angefordert werden, wird die Funktion erst zurückgegeben, wenn die letzte Datenseite erreicht ist.

```javascript{:copy}
import { Octokit } from "octokit";

const octokit = new Octokit({ {% ifversion ghes or ghae %}
  baseUrl: "{% data variables.product.api_url_code %}",
{% endif %}});

const data = await octokit.paginate("GET /repos/{owner}/{repo}/issues", {
  owner: "octocat",
  repo: "Spoon-Knife",
  per_page: 100,{% ifversion api-date-versioning %}
  headers: {
    "X-GitHub-Api-Version": "{{ allVersions[currentVersion].latestApiVersion }}",
  },{% endif %}
});

console.log(data)
```

Du kannst eine optionale Zuordnungsfunktion an `octokit.paginate()` übergeben, um die Paginierung zu beenden, bevor die letzte Seite erreicht wird, oder um die Arbeitsspeicherauslastung zu reduzieren, indem nur eine Teilmenge der Antwort beibehalten wird. Du kannst auch `octokit.paginate.iterator()` verwenden, um immer nur eine Seite gleichzeitig zu durchlaufen, anstatt jede Seite anzufordern. Weitere Informationen findest du in der [Octokit.js-Dokumentation](https://github.com/octokit/octokit.js#pagination).

### Beispiel zum Erstellen einer Paginierungsmethode

Wenn du eine andere Sprache oder Bibliothek ohne Paginierungsmethode verwendest, kannst du eine eigene Paginierungsmethode erstellen. In diesem Beispiel wird weiterhin die Octokit.js-Bibliothek verwendet, um Anforderungen zu stellen, doch es besteht keine Abhängigkeit von `octokit.paginate()`.

Die `getPaginatedData`-Funktion sendet mit `octokit.request()` eine Anforderung an einen Endpunkt. Die Daten aus der Antwort werden von `parseData` verarbeitet. Mit dieser Funktion werden Fälle verarbeitet, in denen keine Daten zurückgegeben werden oder die zurückgegebenen Daten ein Objekt anstelle eines Arrays sind. Die verarbeiteten Daten werden dann an eine Liste angefügt, die alle bisher gesammelten paginierten Daten enthält. Wenn die Antwort einen Linkheader enthält und dieser einen Link für die nächste Seite enthält, verwendet die Funktion ein RegEx-Muster (`nextPattern`), um die URL für die nächste Seite abzurufen. Die Funktion wiederholt dann die vorherigen Schritte und verwendet nun diese neue URL. Sobald der Linkheader keinen Link zur nächsten Seite mehr enthält, werden alle Ergebnisse zurückgegeben.

```javascript{:copy}
import { Octokit } from "octokit";

const octokit = new Octokit({ {% ifversion ghes or ghae %}
  baseUrl: "{% data variables.product.api_url_code %}",
{% endif %}});

async function getPaginatedData(url) {
  const nextPattern = /(?<=<)([\S]*)(?=>; rel="Next")/i;
  let pagesRemaining = true;
  let data = [];

  while (pagesRemaining) {
    const response = await octokit.request(`GET ${url}`, {
      per_page: 100,{% ifversion api-date-versioning %}
      headers: {
        "X-GitHub-Api-Version":
          "{{ allVersions[currentVersion].latestApiVersion }}",
      },{% endif %}
    });

    const parsedData = parseData(response.data)
    data = [...data, ...parsedData];

    const linkHeader = response.headers.link;

    pagesRemaining = linkHeader && linkHeader.includes(`rel=\"next\"`);

    if (pagesRemaining) {
      url = linkHeader.match(nextPattern)[0];
    }
  }

  return data;
}

function parseData(data) {
  // If the data is an array, return that
    if (Array.isArray(data)) {
      return data
    }

  // Some endpoints respond with 204 No Content instead of empty array
  //   when there is no data. In that case, return an empty array.
  if (!data) {
    return []
  }

  // Otherwise, the array of items that we want is in an object
  // Delete keys that don't include the array of items
  delete data.incomplete_results;
  delete data.repository_selection;
  delete data.total_count;
  // Pull out the array of items
  const namespaceKey = Object.keys(data)[0];
  data = data[namespaceKey];
  
  return data;
}

const data = await getPaginatedData("/repos/octocat/Spoon-Knife/issues");

console.log(data);
```
