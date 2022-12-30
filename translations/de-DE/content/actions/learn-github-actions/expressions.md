---
title: Ausdrücke
shortTitle: Expressions
intro: Du kannst Ausdrücke in Workflows und Aktionen auswerten.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 94bd9f7a43d4325e497a776357711adf64c0d7ba
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147614223'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Informationen zu Ausdrücken

Mit Ausdrücken kannst du programmgesteuert Variablen in Workflow-Dateien festlegen und auf Kontexte zugreifen. Ein Ausdruck kann eine beliebige Kombination aus literalen Werten, Verweisen auf einen Kontext und Funktionen sein. Du kannst Literale, Kontextverweise und Funktionen mithilfe von Operatoren kombinieren. Weitere Informationen zu Kontexten findest du unter [Kontexte](/actions/learn-github-actions/contexts).

Ausdrücke werden in Workflowdateien häufig mit dem Bedingungsschlüsselwort `if` verwendet, um festzulegen, ob ein Schritt ausgeführt werden soll. Wenn eine `if`-Bedingung `true` ist, wird der Schritt ausgeführt.

Du musst eine spezielle Syntax verwenden, um {% data variables.product.prodname_dotcom %} mitzuteilen, dass ein Ausdruck nicht als Zeichenfolge behandelt, sondern ausgewertet werden soll.

{% raw %} `${{ <expression> }}`
{% endraw %}

{% data reusables.actions.expression-syntax-if %} Weitere Informationen zu `if`-Bedingungen findest du unter [Workflowsyntax für {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions/#jobsjob_idif).

{% data reusables.actions.context-injection-warning %}

#### Beispielausdruck in einer `if`-Bedingung

```yaml
steps:
  - uses: actions/hello-world-javascript-action@v1.1
    if: {% raw %}${{ <expression> }}{% endraw %}
```

#### Beispiel zum Setzen einer Umgebungsvariablen

{% raw %}
```yaml
env:
  MY_ENV_VAR: ${{ <expression> }}
```
{% endraw %}

## Literale

In Ausdrücken kannst du die Datentypen `boolean`, `null`, `number` oder `string` verwenden.

| Datentyp | Literalwert |
|-----------|---------------|
| `boolean` | `true` oder `false` |
| `null`    | `null` |
| `number`  | Alle von JSON unterstützten Zahlenformate |
| `string`  | Du musst Zeichenfolgen nicht mit `{% raw %}${{{% endraw %}` und `{% raw %}}}{% endraw %}` umschließen. Wenn du dich jedoch dazu entscheidest, musst du die Zeichenfolge mit einfachen Anführungszeichen (`'`) umschließen. Wenn du ein einzelnes Anführungszeichen als Literal verwenden möchtest, musst du ein zusätzliches einzelnes Anführungszeichen (`''`) als Escapezeichen verwenden. Das Umschließen mit doppelten Anführungszeichen (`"`) löst einen Fehler aus. |

#### Beispiel

{% raw %}

```yaml
env:
  myNull: ${{ null }}
  myBoolean: ${{ false }}
  myIntegerNumber: ${{ 711 }}
  myFloatNumber: ${{ -9.2 }}
  myHexNumber: ${{ 0xff }}
  myExponentialNumber: ${{ -2.99e-2 }}
  myString: Mona the Octocat
  myStringInBraces: ${{ 'It''s open source!' }}
```

{% endraw %}

## Operatoren

| Operator    | BESCHREIBUNG |
| ---         | ---         |
| `( )`       | Logische Gruppierung |
| `[ ]`       | Index
| `.`         | Eigenschaftsdereferenzierung |
| `!`         | Not |
| `<`         | Kleiner als |
| `<=`        | Kleiner als oder gleich |
| `>`         | Größer als |
| `>=`        | Größer als oder gleich |
| `==`        | Gleich |
| `!=`        | Ungleich |
| `&&`        | And |
|  <code>\|\|</code> | oder |

{% data variables.product.prodname_dotcom %} vergleicht auf Gleichheit in toleranter Weise.

* Wenn die Typen nicht übereinstimmen, wandelt {% data variables.product.prodname_dotcom %} den Typ in eine Zahl um. {% data variables.product.prodname_dotcom %} übergibt Datentypen anhand der folgenden Umwandlungen an eine Zahl:

  | type    | Ergebnis |
  | ---     | ---    |
  | Null    | `0` |
  | Boolean | `true` gibt `1` zurück. <br /> `false` gibt `0` zurück. |
  | String  | Aus einem zulässigem JSON-Zahlenformat geparst, andernfalls `NaN`. <br /> Hinweis: Eine leere Zeichenfolge gibt `0` zurück. |
  | Array   | `NaN` |
  | Object  | `NaN` |
* Ein Vergleich eines `NaN`-Werts mit einem anderen `NaN`-Wert ergibt nicht `true`. Weitere Informationen findest du unter [Mozilla-Dokumentation zu NaN-Werten](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN).
* {% data variables.product.prodname_dotcom %} ignoriert beim Vergleichen der Strings die Groß- und Kleinschreibung.
* Objekte und Arrays werden nur dann als gleich betrachtet, wenn sie dieselbe Instanz sind.

## Functions

{% data variables.product.prodname_dotcom %} bietet integrierte Funktionen, die du in Ausdrücken verwenden kannst. Manche Funktionen verwandeln Werte an einen String, um Vergleiche durchzuführen. {% data variables.product.prodname_dotcom %} verwandelt Daten verschiedener Typen folgendermaßen in einen String:

| type    | Ergebnis |
| ---     | ---    |
| Null    | `''` |
| Boolean | `'true'` oder `'false'` |
| Number  | Dezimalformat, bei großen Zahlen exponentiell |
| Array   | Arrays werden nicht in einen String umgewandelt. |
| Object  | Objekte werden nicht in einen String umgewandelt. |

### contains

`contains( search, item )`

Gibt `true` zurück, wenn `search` `item` enthält. Wenn `search` ein Array ist, gibt diese Funktion `true` zurück, wenn es sich bei `item` um ein Arrayelement handelt. Wenn `search` einer Zeichenfolge entspricht, gibt diese Funktion `true` zurück, wenn es sich bei `item` um eine Unterzeichenfolge von `search` handelt. Bei dieser Funktion wird die Groß- und Kleinschreibung nicht berücksichtigt. Wandelt Werte in einen String um.

#### Beispiel mit einem String

`true` gibt `contains('Hello world', 'llo')` zurück.

#### Beispiel für die Verwendung eines Objektfilters

`contains(github.event.issue.labels.*.name, 'bug')` gibt `true` zurück, wenn das Issue im Zusammenhang mit dem Ereignis als Fehler (bug) bezeichnet wird.

Weitere Informationen findest du unter [Objektfilter](#object-filters).

#### Beispiel für den Abgleich eines Arrays aus Zeichenfolgen

Anstatt `github.event_name == "push" || github.event_name == "pull_request"` zu schreiben, kannst du `contains()` mit `fromJson()` verwenden, um zu überprüfen, ob ein Array aus Zeichenfolgen ein `item` enthält.

`contains(fromJson('["push", "pull_request"]'), github.event_name)` gibt beispielsweise `true` zurück, wenn `github.event_name` „push“ oder „pull_request“ lautet.

### startsWith

`startsWith( searchString, searchValue )`

Gibt `true` zurück, wenn `searchString` mit `searchValue` beginnt. Bei dieser Funktion wird die Groß- und Kleinschreibung nicht berücksichtigt. Wandelt Werte in einen String um.

#### Beispiel

`true` gibt `startsWith('Hello world', 'He')` zurück.

### endsWith

`endsWith( searchString, searchValue )`

Gibt `true` zurück, wenn `searchString` mit `searchValue` endet. Bei dieser Funktion wird die Groß- und Kleinschreibung nicht berücksichtigt. Wandelt Werte in einen String um.

#### Beispiel

`true` gibt `endsWith('Hello world', 'ld')` zurück.

### format

`format( string, replaceValue0, replaceValue1, ..., replaceValueN)`

Ersetzt Werte in der Zeichenfolge (`string`) durch die Variable `replaceValueN`. Variablen in `string` werden mit der `{N}`-Syntax angegeben, wobei es sich bei `N` um eine ganze Zahl handelt. Du musst mindestens einen `replaceValue`- und einen `string`-Wert angeben. Es gibt kein Maximum für die Anzahl der Variablen (`replaceValueN`), die du verwenden kannst. Verwende geschweifte Klammern doppelt, um eine als Escapezeichen zu verwenden.

#### Beispiel

`format('Hello {0} {1} {2}', 'Mona', 'the', 'Octocat')`

Gibt „Hello Mona the Octocat“ zurück

#### Beispiel mit maskierten Klammern

{% raw %}
```js
format('{{Hello {0} {1} {2}!}}', 'Mona', 'the', 'Octocat')
```
{% endraw %}

Gibt „{Hello Mona the Octocat!}“ zurück

### join

`join( array, optionalSeparator )`

Der Wert von `array` kann ein Array oder eine Zeichenfolge sein. Alle Werte im `array` sind zu einer Zeichenfolge verkettet. Wenn du `optionalSeparator` angibst, wird der Wert in die verketteten Werte eingefügt. Andernfalls wird das Standardtrennzeichen `,` verwendet. Wandelt Werte in einen String um.

#### Beispiel

`join(github.event.issue.labels.*.name, ', ')` kann 'bug, help wanted' (Fehler, Hilfe benötigt) zurückgeben.

### toJSON

`toJSON(value)`

Gibt eine Pretty-Print-JSON-Darstellung von `value` zurück. Diese Funktion hilft Dir bei der Fehlersuche in den Informationen, die in Kontexten enthalten sind.

#### Beispiel

`toJSON(job)` kann `{ "status": "Success" }` zurückgeben.

### fromJSON

`fromJSON(value)`

Gibt ein JSON-Objekt oder einen JSON-Datentyp für `value` zurück. Mit dieser Funktion kannst du JSON-Objekte als ausgewertete Ausdrücke bereitstellen oder Umgebungsvariablen aus einer Zeichenfolge konvertieren.

#### Beispiel für die Rückgabe eines JSON-Objekts

Dieser Workflow legt eine JSON-Matrix in einem Auftrag fest und übergibt sie mit einer Ausgabe und `fromJSON` an den nächsten Auftrag.

{% raw %}
```yaml
name: build
on: push
jobs:
  job1:
    runs-on: ubuntu-latest
    outputs:
      matrix: ${{ steps.set-matrix.outputs.matrix }}
    steps:
      - id: set-matrix
        run: echo "::set-output name=matrix::{\"include\":[{\"project\":\"foo\",\"config\":\"Debug\"},{\"project\":\"bar\",\"config\":\"Release\"}]}"
  job2:
    needs: job1
    runs-on: ubuntu-latest
    strategy:
      matrix: ${{ fromJSON(needs.job1.outputs.matrix) }}
    steps:
      - run: build
```
{% endraw %}

#### Beispiel für die Rückgabe eines JSON-Datentyps

Dieser Workflow konvertiert Umgebungsvariablen mithilfe von `fromJSON` von einer Zeichenfolge in eine boolesche oder eine ganze Zahl.

{% raw %}
```yaml
name: print
on: push
env:
  continue: true
  time: 3
jobs:
  job1:
    runs-on: ubuntu-latest
    steps:
      - continue-on-error: ${{ fromJSON(env.continue) }}
        timeout-minutes: ${{ fromJSON(env.time) }}
        run: echo ...
```
{% endraw %}

### hashFiles

`hashFiles(path)`

Gibt einen einzelnen Hash für Dateien zurück, die dem `path`-Muster entsprechen. Du kannst ein einzelnes `path`-Muster oder mehrere `path`-Muster bereitstellen, die durch Kommas getrennt sind. `path` ist relativ zum `GITHUB_WORKSPACE`-Verzeichnis und kann nur Dateien innerhalb des `GITHUB_WORKSPACE`-Verzeichnisses enthalten. Diese Funktion berechnet einen individuellen SHA-256-Hash für jede passende Datei und verwendet diese Hashes dann zur Berechnung eines endgültigen SHA-256-Hashs für den Satz von Dateien. Wenn das `path`-Muster keinen Dateien entspricht, gibt es eine leere Zeichenfolge zurück. Weitere Informationen zu SHA-256 findest du unter [SHA-2](https://en.wikipedia.org/wiki/SHA-2).

Du kannst Zeichen zum Musterabgleich verwenden, um Dateien mit passenden Namen auszuwählen. Bei dem Musterabgleich unter Windows wird die Groß-/Kleinschreibung nicht beachtet. Weitere Informationen zu unterstützten Musterabgleichszeichen findest du unter [Workflowsyntax für {% data variables.product.prodname_actions %}](/actions/using-workflows/workflow-syntax-for-github-actions/#filter-pattern-cheat-sheet).

#### Beispiel für ein einzelnes Muster

Stimmt mit allen `package-lock.json`-Dateien im Repository überein

`hashFiles('**/package-lock.json')`

#### Beispiel mit mehreren Mustern

Erstellt einen Hash für alle `package-lock.json`- und `Gemfile.lock`-Dateien im Repository

`hashFiles('**/package-lock.json', '**/Gemfile.lock')`


{% ifversion fpt or ghes > 3.3 or ghae-issue-5504 or ghec %}
## Statusprüfungsfunktionen

Du kannst die nachfolgenden Statusüberprüfungsfunktionen als Ausdrücke in `if`-Bedingungen verwenden. Eine Standardstatusprüfung von `success()` wird angewendet, sofern du keine dieser Funktionen einfügst. Weitere Informationen zu `if`-Bedingungen findest du unter [Workflowsyntax für GitHub Actions](/articles/workflow-syntax-for-github-actions/#jobsjob_idif) und [Metadatensyntax für GitHub Composite Actions](/actions/creating-actions/metadata-syntax-for-github-actions/#runsstepsif).
{% else %}
## Überprüfungsfunktionen
Du kannst die nachfolgenden Statusüberprüfungsfunktionen als Ausdrücke in `if`-Bedingungen verwenden. Eine Standardstatusprüfung von `success()` wird angewendet, sofern du keine dieser Funktionen einfügst. Weitere Informationen zur `if`-Bedingung findest du unter [Workflowsyntax für GitHub Actions](/articles/workflow-syntax-for-github-actions/#jobsjob_idif).
{% endif %}

### success

Gibt `true` zurück, wenn keiner der vorherigen Schritte fehlgeschlagen ist oder abgebrochen wurde

#### Beispiel

```yaml
steps:
  ...
  - name: The job has succeeded
    if: {% raw %}${{ success() }}{% endraw %}
```

### immer

Bewirkt, dass der Schritt immer ausgeführt wird, und gibt selbst bei Abbruch `true` zurück Ein Job oder Schritt wird nicht ausgeführt, wenn ein kritischer Fehler die Ausführung der Aufgabe verhindert. Beispiel: Quellen konnten nicht abgerufen werden.

#### Beispiel

```yaml
if: {% raw %}${{ always() }}{% endraw %}
```

### cancelled

Gibt `true` zurück, wenn der Workflow abgebrochen wurde

#### Beispiel

```yaml
if: {% raw %}${{ cancelled() }}{% endraw %}
```

### failure

Gibt `true` zurück, wenn ein vorheriger Schritt eines Auftrags fehlschlägt. Wenn du über eine Kette abhängiger Aufträge verfügst, gibt `failure()` `true` zurück, wenn ein vorheriger Auftrag fehlschlägt.

#### Beispiel

```yaml
steps:
  ...
  - name: The job has failed
    if: {% raw %}${{ failure() }}{% endraw %}
```

#### Fehler bei Bedingungen

Du kannst zusätzliche Bedingungen für einen Schritt einschließen, der nach einem Fehler ausgeführt werden soll. Allerdings musst du dennoch `failure()` einfügen, um die Standardstatusüberprüfung für `success()` außer Kraft zu setzen, die automatisch auf `if`-Bedingungen angewendet wird, die keine Statusprüfungsfunktion enthalten.

##### Beispiel

```yaml
steps:
  ...
  - name: Failing step
    id: demo
    run: exit 1
  - name: The demo step has failed
    if: {% raw %}${{ failure() && steps.demo.conclusion == 'failure' }}{% endraw %}
```

## Objektfilter

Mit der `*`-Syntax kannst du einen Filter anwenden und übereinstimmende Elemente in einer Sammlung auswählen.

Als Beispiel sei das Objektarray namens `fruits` gegeben.

```json
[
  { "name": "apple", "quantity": 1 },
  { "name": "orange", "quantity": 2 },
  { "name": "pear", "quantity": 1 }
]
```

Der Filter `fruits.*.name` gibt das Array `[ "apple", "orange", "pear" ]` zurück.

Du kannst auch die `*`-Syntax für ein Objekt verwenden. Angenommen, du verfügst über ein Objekt namens `vegetables`.

```json

{
  "scallions":
  {
    "colors": ["green", "white", "red"],
    "ediblePortions": ["roots", "stalks"],
  },
  "beets":
  {
    "colors": ["purple", "red", "gold", "white", "pink"],
    "ediblePortions": ["roots", "stems", "leaves"],
  },
  "artichokes":
  {
    "colors": ["green", "purple", "red", "black"],
    "ediblePortions": ["hearts", "stems", "leaves"],
  },
}
```

Der Filter `vegetables.*.ediblePortions` kann wie folgt ausgewertet werden:

```json

[
  ["roots", "stalks"],
  ["hearts", "stems", "leaves"],
  ["roots", "stems", "leaves"],
]
```

Da Objekte keine Reihenfolge beibehalten, kann die Reihenfolge der Ausgabe nicht garantiert werden.
