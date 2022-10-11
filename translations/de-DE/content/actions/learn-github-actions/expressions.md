---
title: Expressions
shortTitle: Expressions
intro: You can evaluate expressions in workflows and actions.
product: '{% data reusables.gated-features.actions %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
miniTocMaxHeadingLevel: 3
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## About expressions

Mit Ausdrücken können Sie programmatisch Variablen in Workflow-Dateien festlegen und auf Kontexte zugreifen. Ein Ausdruck kann eine beliebige Kombination aus literalen Werten, Verweisen auf einen Kontext und Funktionen sein. Du kannst Literale, Kontextverweise und Funktionen mithilfe von Operatoren kombinieren. For more information about contexts, see "[Contexts](/actions/learn-github-actions/contexts)."

Ausdrücke werden häufig mit dem Bedingungs-Schlüsselwort `if` in einer Workflow-Datei verwendet, um zu entscheiden, ob ein Schritt ausgeführt werden soll. Wenn eine `if`-Bedingung `true` (wahr) ist, wird der Schritt ausgeführt.

Sie müssen eine spezielle Syntax verwenden, um {% data variables.product.prodname_dotcom %} mitzuteilen, dass ein Ausdruck nicht als Zeichenfolge behandelt, sondern ausgewertet werden soll.

{% raw %}
`${{ <expression> }}`
{% endraw %}

{% data reusables.github-actions.expression-syntax-if %} Weitere Informationen über Bedingungen mit `if`findest Du unter „[Workflow-Syntax für {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions/#jobsjob_idif)“.

{% data reusables.github-actions.context-injection-warning %}

#### Beispiel für einen Ausdruck in einer `if`-Anweisung

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

In einem Ausdruck können Sie die Datentypen `boolean`, `null`, `number` oder `string` verwenden.

| Datentyp  | Literalwert                                                                                                                                      |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `boolean` | `true` (ja) oder `false` (nein)                                                                                                                  |
| `null`    | `null`                                                                                                                                           |
| `number`  | Alle von JSON unterstützten Zahlenformate                                                                                                        |
| `string`  | Du musst einfache Anführungszeichen verwenden. Maskiere einfache Anführungszeichen (Apostrophen) mit einem weiteren einfachen Anführungszeichen. |

#### Beispiel

{% raw %}
```yaml
env:
  myNull: ${{ null }}
  myBoolean: ${{ false }}
  myIntegerNumber: ${{ 711 }}
  myFloatNumber: ${{ -9.2 }}
  myHexNumber: ${{ 0xff }}
  myExponentialNumber: ${{ -2.99-e2 }}
  myString: ${{ 'Mona the Octocat' }}
  myEscapedString: ${{ 'It''s open source!' }}
```
{% endraw %}

## Operatoren

| Operator                  | Beschreibung                       |
| ------------------------- | ---------------------------------- |
| `( )`                     | Logische Gruppierung               |
| `[ ]`                     | Index                              |
| `.`                       | Dereferenzierung einer Eigenschaft |
| `!`                       | Nicht                              |
| `<`                    | Kleiner als                        |
| `<=`                   | Kleiner oder gleich                |
| `>`                    | Größer als                         |
| `>=`                   | Größer oder gleich                 |
| `==`                      | Gleich                             |
| `!=`                      | Ungleich                           |
| `&&`              | Und                                |
| <code>\|\|</code> | Oder                               |

{% data variables.product.prodname_dotcom %} führt einen nicht strengen Gleichheitsvergleich aus.

* Wenn die Typen nicht übereinstimmen, wandelt {% data variables.product.prodname_dotcom %} den Typ in eine Zahl um. {% data variables.product.prodname_dotcom %} wandelt Daten verschiedener Typen folgendermaßen in eine Zahl um:

  | Typ     | Ergebnis                                                                                                         |
  | ------- | ---------------------------------------------------------------------------------------------------------------- |
  | Null    | `0`                                                                                                              |
  | Boolean | `true` gibt `1` zurück <br /> `false` gibt `0` zurück                                                      |
  | String  | Aus zulässigem JSON-Zahlenformat geparst, ansonsten `NaN`. <br /> Hinweis: Leere Strings geben `0` zurück. |
  | Array   | `NaN`                                                                                                            |
  | Object  | `NaN`                                                                                                            |
* Der Vergleich von einem `NaN` mit einem anderen `NaN` ergibt nicht `true`. Weitere Informationen findest Du in der „[NaN-Mozilla-Dokumentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)“.
* {% data variables.product.prodname_dotcom %} ignoriert beim Vergleichen der Strings die Groß- und Kleinschreibung.
* Objekte und Arrays werden nur dann als gleich betrachtet, wenn sie dieselbe Instanz sind.

## Funktionen

{% data variables.product.prodname_dotcom %} bietet integrierte Funktionen, die Sie in Ausdrücken verwenden können. Manche Funktionen verwandeln Werte an einen String, um Vergleiche durchzuführen. {% data variables.product.prodname_dotcom %} übergibt Datentypen anhand der folgenden Umwandlungen an einen String:

| Typ     | Ergebnis                                          |
| ------- | ------------------------------------------------- |
| Null    | `''`                                              |
| Boolean | `'true'` oder `'false'`                           |
| Number  | Dezimalformat, bei großen Zahlen exponentiell     |
| Array   | Arrays werden nicht in einen String umgewandelt.  |
| Object  | Objekte werden nicht in einen String umgewandelt. |

### contains

`contains( search, item )`

Gibt `true` zurück, wenn der `item` in `search` enthalten ist. Wenn `search` ein Array ist, gibt diese Funktion `true` zurück, wenn der `item` ein Element im Array ist. Wenn `search` ein String ist, gibt diese Funktion `true` zurück, wenn der `item` ein Teilstring von `search` ist. Bei dieser Funktion wird die Groß- und Kleinschreibung nicht berücksichtigt. Wandelt Werte in einen String um.

#### Beispiel mit einem Array

`contains(github.event.issue.labels.*.name, 'bug')`

#### Beispiel mit einem String

`contains('Hello world', 'llo')` gibt `true` zurück.

### startsWith

`startsWith( searchString, searchValue )`

Gibt `true` zurück, wenn der `searchString` mit `searchValue` beginnt. Bei dieser Funktion wird die Groß- und Kleinschreibung nicht berücksichtigt. Wandelt Werte in einen String um.

#### Beispiel

`startsWith('Hello world', 'He')` gibt `true` zurück.

### endsWith

`endsWith( searchString, searchValue )`

Gibt `true` zurück, wenn der `searchString` mit `searchValue` endet. Bei dieser Funktion wird die Groß- und Kleinschreibung nicht berücksichtigt. Wandelt Werte in einen String um.

#### Beispiel

`endsWith('Hello world', 'ld')` gibt `true` zurück.

### format

`format( string, replaceValue0, replaceValue1, ..., replaceValueN)`

Ersetzt die Werte im `string` durch die Variable `replaceValueN`. Variablen im `string` werden mit der `{N}`-Syntax festgelegt, wobei `N` eine Ganzzahl ist. Du musst mindestens einen `replaceValue` und `string` festlegen. Du kannst eine unbegrenzte Anzahl an Variablen (`replaceValueN`) verwenden. Escape curly braces using double braces.

#### Beispiel

Gibt „Hello Mona the Octocat“ zurück:

`format('Hello {0} {1} {2}', 'Mona', 'the', 'Octocat')`

#### Beispiel mit maskierten Klammern

Gibt „{Hello Mona the Octocat}“ zurück

{% raw %}
```js
format('{{Hello {0} {1} {2}!}}', 'Mona', 'the', 'Octocat')
```
{% endraw %}

### join

`join( array, optionalSeparator )`

Der Wert für `array` kann ein Array oder ein String sein. Alle Werte im `array` werden in einem String zusammengeführt. Wenn Du `optionalSeparator` angibst, wird er zwischen den verketteten Werten eingefügt. Andernfalls wird der Standard-Trennzeichen `,` verwendet. Wandelt Werte in einen String um.

#### Beispiel

`join(github.event.issue.labels.*.name, ', ')` kann „Bug, Hilfe gesucht“ zurückgeben

### toJSON

`toJSON(value)`

Gibt eine Pretty-Print-JSON-Darstellung von `value` zurück. Diese Funktion hilft Dir bei der Fehlersuche in den Informationen, die in Kontexten enthalten sind.

#### Beispiel

`toJSON(job)` kann `{ "status": "Success" }` zurückgeben.

### fromJSON

`fromJSON(value)`

Returns a JSON object or JSON data type for `value`. You can use this function to provide a JSON object as an evaluated expression or to convert environment variables from a string.

#### Example returning a JSON object

Dieser Workflow legt eine JSON-Matrix in einem Job fest und übergibt sie mittels einer Ausgabe und `fromJSON` an den nächsten Job.

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
      matrix: ${{fromJSON(needs.job1.outputs.matrix)}}
    steps:
      - run: build
```
{% endraw %}

#### Example returning a JSON data type

This workflow uses `fromJSON` to convert environment variables from a string to a Boolean or integer.

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

Gibt einen einzelnen Hash für den Satz von Dateien zurück, der dem `Pfad`-Muster entspricht. You can provide a single `path` pattern or multiple `path` patterns separated by commas. Der `path` ist relativ zum Verzeichnis `GITHUB_WORKSPACE` und kann nur Dateien innerhalb des `GITHUB_WORKSPACE` umfassen. Diese Funktion berechnet einen individuellen SHA-256-Hash für jede passende Datei und verwendet diese Hashes dann zur Berechnung eines endgültigen SHA-256-Hashs für den Satz von Dateien. Weitere Informationen über SHA-256 findest Du unter „[SHA-2](https://en.wikipedia.org/wiki/SHA-2)“.

Du kannst Zeichen zum Musterabgleich verwenden, um Dateien mit passenden Namen auszuwählen. Bei dem Musterabgleich unter Windows wird die Groß-/Kleinschreibung nicht beachtet. Weitere Informationen über unterstützte Zeichen zum Musterabgleich findest Du unter „[Workflow-Syntax für {% data variables.product.prodname_actions %}](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions/#filter-pattern-cheat-sheet)“.

#### Example with a single pattern

Passt zu jeder Datei `package-lock.json` im Repository.

`hashFiles('**/package-lock.json')`

#### Example with multiple patterns

Creates a hash for any `package-lock.json` and `Gemfile.lock` files in the repository.

`hashFiles('**/package-lock.json', '**/Gemfile.lock')`

## Funktionen zur Prüfung des Auftragsstatus

Du kannst die nachfolgenden Funktionen zum Statuscheck als Ausdrücke in `if`-Bedingungen verwenden. A default status check of `success()` is applied unless you include one of these functions. Weitere Informationen zu `if`-Bedingungen findest Du unter „[Workflow-Syntax für GitHub Actions](/articles/workflow-syntax-for-github-actions/#jobsjob_idif)“.

### success (Erfolg)

Gibt `true` zurück, wenn keiner der vorherigen Schritte fehlgeschlagen ist oder abgebrochen wurde.

#### Beispiel

```yaml
steps:
  ...
  - name: The job has succeeded
    if: {% raw %}${{ success() }}{% endraw %}
```

### always

Causes the step to always execute, and returns `true`, even when canceled. Ein Job oder Schritt wird nicht ausgeführt, wenn ein kritischer Fehler die Ausführung der Aufgabe verhindert. Beispiel: Quellen konnten nicht abgerufen werden.

#### Beispiel

```yaml
if: {% raw %}${{ always() }}{% endraw %}
```

### cancelled

Gibt `true` zurück, wenn der Workflow abgebrochen wurde.

#### Beispiel

```yaml
if: {% raw %}${{ cancelled() }}{% endraw %}
```

### failure (Fehlschlag)

Gibt `true` zurück, wenn irgend ein vorheriger Schritt des Jobs fehlschlägt.

#### Beispiel

```yaml
steps:
  ...
  - name: The job has failed
    if: {% raw %}${{ failure() }}{% endraw %}
```

## Objektfilter

Mit der Syntax `*` kannst Du einen Filter anwenden und passende Elemente in einer Sammlung auswählen.

Betrachte beispielsweise das Objekt-Array mit dem Namen `fruits`.

```json
[
  { "name": "apple", "quantity": 1 },
  { "name": "orange", "quantity": 2 },
  { "name": "pear", "quantity": 1 }
]
```

Der Filter `fruits.*.name` gibt das Array `[ "apple", "orange", "pear" ]` zurück.
