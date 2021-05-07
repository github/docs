---
title: Syntax für Kontext und Ausdrücke bei GitHub-Aktionen
shortTitle: Kontext- und Ausdruckssyntax
intro: Du kannst in Workflows und Aktionen auf Kontextinformationen zugreifen und Ausdrücke auswerten.
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/contexts-and-expression-syntax-for-github-actions
  - /github/automating-your-workflow-with-github-actions/contexts-and-expression-syntax-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/contexts-and-expression-syntax-for-github-actions
  - /actions/reference/contexts-and-expression-syntax-for-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Informationen zu Kontexten und Ausdrücken

Mit Ausdrücken können Sie programmatisch Variablen in Workflow-Dateien festlegen und auf Kontexte zugreifen. Ein Ausdruck kann eine beliebige Kombination aus literalen Werten, Verweisen auf einen Kontext und Funktionen sein. Du kannst Literale, Kontextverweise und Funktionen mithilfe von Operatoren kombinieren.

Ausdrücke werden häufig mit dem Bedingungs-Schlüsselwort `if` in einer Workflow-Datei verwendet, um zu entscheiden, ob ein Schritt ausgeführt werden soll. Wenn eine `if`-Bedingung `true` (wahr) ist, wird der Schritt ausgeführt.

Sie müssen eine spezielle Syntax verwenden, um {% data variables.product.prodname_dotcom %} mitzuteilen, dass ein Ausdruck nicht als Zeichenfolge behandelt, sondern ausgewertet werden soll.

{% raw %}
`${{ <expression> }}`
{% endraw %}

{% data reusables.github-actions.expression-syntax-if %} Weitere Informationen über Bedingungen mit `if`findest Du unter „[Workflow-Syntax für {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions/#jobsjob_idif)“.

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
  my_env_var: ${{ <expression> }}
```
{% endraw %}

### Kontexte

Kontexte sind eine Möglichkeit, auf Informationen zu Workflow-Läufen, Runner-Umgebungen, Jobs und Schritten zuzugreifen. Kontexte nutzen die Syntax für Ausdrücke.

{% raw %}
`${{ <context> }}`
{% endraw %}

| Kontextname | Typ      | Beschreibung                                                                                                                                                                                                                                                                                |
| ----------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `github`    | `Objekt` | Informationen zum Workflow-Lauf. Weitere Informationen findest Du unter „[`github`-Kontext](#github-context)“.                                                                                                                                                                              |
| `env`       | `Objekt` | Enthält Umgebungsvariablen, die in einem Workflow, Job oder Schritt festgelegt sind. Weitere Informationen findest Du unter [`env`-Kontext](#env-context) .                                                                                                                                 |
| `Auftrag`   | `Objekt` | Informationen zum derzeit ausgeführten Job. Weitere Informationen findest Du unter „[`job`-Kontext](#job-context)“.                                                                                                                                                                         |
| `steps`     | `Objekt` | Informationen zu den Schritten, die bei diesem Job ausgeführt wurden. Weitere Informationen findest Du unter „[`steps`-Kontext](#steps-context)“.                                                                                                                                           |
| `runner`    | `Objekt` | Informationen zu dem Runner, der den aktuellen Job ausführt. Weitere Informationen findest Du unter [`runner`-Kontext](#runner-context).                                                                                                                                                    |
| `secrets`   | `Objekt` | Ermöglicht den Zugriff auf Geheimnisse. Weitere Informationen über Geheimnisse findest Du unter „[Verschlüsselte Geheimnisse erstellen und verwenden](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)“.                                         |
| `strategy`  | `Objekt` | Ermöglicht den Zugriff auf die konfigurierten Strategieparameter und Informationen zum aktuellen Job. Zu Strategieparametern gehören `fail-fast`, `job-index`, `job-total` und `max-parallel`.                                                                                              |
| `matrix`    | `Objekt` | Ermöglicht den Zugriff auf die Matrixparameter, die Du für den aktuellen Job konfiguriert hast. Wenn Du beispielsweise einen Matrix-Build mit den Versionen von `os` und `node` konfigurierst, umfasst das Kontextobjekt `matrix` die Versionen von `os` und `node` des aktuellen Auftrags. |
| `needs`     | `Objekt` | Ermöglicht den Zugriff auf die Ausgaben aller Jobs, die als Abhängigkeit des aktuellen Jobs definiert sind. Weitere Informationen findest Du unter [`needs`-Kontext](#needs-context).                                                                                                       |

Als Teil eines Ausdrucks kannst Du mit einer der beiden folgenden Syntaxarten auf Kontextinformationen zugreifen.
- Index-Syntax: `github['sha']`
- Syntax zur Dereferenzierung von Eigenschaften: `github.sha`

Bei der Syntax zur Dereferenzierung von Eigenschaften muss der Name der Eigenschaft:
- mit `a-Z` oder `_` beginnen,
- mit `a-Z`, `0-9`, `-` oder `_` weitergehen.

#### Determining when to use contexts

{% data reusables.github-actions.using-context-or-environment-variables %}

#### `github`-Kontext

Der `github`-Kontext enthält Informationen zum Workflow-Lauf und zu dem Ereignis, das den Lauf ausgelöst hat. Du kannst die meisten `github`-Kontextdaten in Umgebungsvariablen lesen. Weitere Informationen über Umgebungsvariablen findest Du unter „[Umgebungsvariablen verwenden](/actions/automating-your-workflow-with-github-actions/using-environment-variables)“.

{% data reusables.github-actions.github-context-warning %}

| Name der Eigenschaft      | Typ      | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `github`                  | `Objekt` | Der Top-Level-Kontext, der bei jedem Job oder Schritt im Workflow verfügbar ist.                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `github.action`           | `string` | Der Name der aktuell laufenden Aktion. {% data variables.product.prodname_dotcom %} entfernt Sonderzeichen oder verwendet den Namen `run` wenn der aktuelle Schritt ein Skript ausführt.  Wenn Du dieselbe Aktion mehr als einmal im selben Job verwendest, enthält der Name ein Suffix mit der Sequenznummer.  Zum Beispiel wird das erste Skript, das Du ausführst, den Namen `run1`haben, und das zweite Skript heißt `run2`. Ebenso wird die zweite Anrufung von `actions/checkout` `actionscheckout2` sein. |
| `github.action_path`      | `string` | The path where your action is located. You can use this path to easily access files located in the same repository as your action. This attribute is only supported in composite run steps actions.                                                                                                                                                                                                                                                                                                              |
| `github.actor`            | `string` | Der Anmeldename des Benutzers, der den Workflow-Lauf initiiert hat                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `github.base_ref`         | `string` | Das `base_ref` oder der Ziel-Branch des Pull Requests in einem Workflow-Lauf. Diese Eigenschaft ist nur verfügbar, wenn das Ereignis, das einen Workflow auslöst, ein `pull_request` (Pull Request) ist.                                                                                                                                                                                                                                                                                                         |
| `github.event`            | `Objekt` | Die vollständige Nutzlast des Ereignis-Webhooks. Weitere Informationen findest Du unter „[Ereignisse, die Workflows auslösen](/articles/events-that-trigger-workflows)“. You can access individual properties of the event using this context.                                                                                                                                                                                                                                                                   |
| `github.event_name`       | `string` | Der Name des Ereignisses, das den Workflow-Lauf ausgelöst hat.                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `github.event_path`       | `string` | Der Pfad zur vollständigen Event-Webhook-Nutzlast auf dem Runner.                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `github.head_ref`         | `string` | Das `head_ref` oder der Quell-Branch des Pull Requests in einem Workflow-Lauf. Diese Eigenschaft ist nur verfügbar, wenn das Ereignis, das einen Workflow auslöst, ein `pull_request` (Pull Request) ist.                                                                                                                                                                                                                                                                                                        |
| `github.job`              | `string` | Die [`job_id`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_id) des aktuellen Jobs.                                                                                                                                                                                                                                                                                                                                                                                                             |
| `github.ref`              | `string` | Das Branch- oder Tag-Ref, das den Workflow-Lauf ausgelöst hat. For branches this in the format  `refs/heads/<branch_name>`, and for tags it is `refs/tags/<tag_name>`.                                                                                                                                                                                                                                                                                                                               |
| `github.repository`       | `string` | Der Inhaber- und Repository-Name, z. B. `Codertocat/Hello-World`.                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `github.repository_owner` | `string` | Der Name des Repository-Besitzers. Beispielsweise `Codertocat`.                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `github.run_id`           | `string` | {% data reusables.github-actions.run_id_description %}
| `github.run_number`       | `string` | {% data reusables.github-actions.run_number_description %}
| `github.sha`              | `string` | Die Commit-SHA, die den Workflow-Lauf ausgelöst hat.                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `github.token`            | `string` | Ein Token zum Authentifizieren im Namen der in Deinem Repository installierten GitHub-App. Funktionell entspricht dies dem Geheimnis `GITHUB_TOKEN`. Weitere Informationen findest Du unter „[Authentifizierung mit dem GITHUB_TOKEN](/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token)".                                                                                                                                                                              |
| `github.workflow`         | `string` | Der Name des Workflows. Wenn in der Workflow-Datei kein `name` (Name) festgelegt ist, entspricht der Wert dieser Eigenschaft dem vollständigen Pfad der Workflow-Datei im Repository.                                                                                                                                                                                                                                                                                                                            |
| `github.workspace`        | `string` | Das Standardarbeitsverzeichnis für Schritte und der Standardspeicherort Deines Repositorys bei Verwendung der Aktion [ `checkout`](https://github.com/actions/checkout).                                                                                                                                                                                                                                                                                                                                         |

#### `env`-Kontext

Der `env`-Kontext enthält Umgebungsvariablen, die in einem Workflow, Job oder Schritt gesetzt wurden. Weitere Informationen über das Setzen von Umgebungsvariablen in Deinem Workflow findest Du unter „[Workflow-Syntax für {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#env)“.

Mit der Syntax für den `env`-Kontext kannst Du den Wert einer Umgebungsvariable in Deiner Workflow-Datei verwenden. You can use the `env` context in the value of any key in a **step** except for the `id` and `uses` keys. Weitere Informationen zur Syntax für Schritte findest Du unter „[Workflow-Syntax für {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idsteps)“.

Wenn Du den Wert einer Umgebungsvariable innerhalb eines Runners verwenden willst, dann verwende die normale Methode des Runner-Betriebssystems zum Lesen von Umgebungsvariablen.

| Name der Eigenschaft   | Typ      | Beschreibung                                                                                                                              |
| ---------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `env`                  | `Objekt` | Dieser Kontext ändert sich bei jedem Schritt in einem Auftrag. Du kannst bei jedem Schritt in einem Auftrag auf diesen Kontext zugreifen. |
| `env.<env_name>` | `string` | Der Wert einer bestimmten Umgebungsvariable.                                                                                              |

#### `job`-Kontext

Der `job`-Kontext enthält Informationen zum gerade ausgeführten Auftrag.

| Name der Eigenschaft                      | Typ      | Beschreibung                                                                                                                                                                                                                                         |
| ----------------------------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Auftrag`                                 | `Objekt` | Dieser Kontext ändert sich bei jedem Auftrag in einem Workflow-Lauf. Du kannst bei jedem Schritt in einem Auftrag auf diesen Kontext zugreifen.                                                                                                      |
| `job.container`                           | `Objekt` | Informationen zum Container des Auftrags. Weitere Informationen zu Containern findest Du unter „[Workflow-Syntax für {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#jobsjob_idcontainer)“.              |
| `job.container.id`                        | `string` | Die ID des Containers                                                                                                                                                                                                                                |
| `job.container.network`                   | `string` | Die ID des Container-Netzwerks. Der Runner erstellt das Netzwerk, das von allen Containern in einem Auftrag genutzt wird.                                                                                                                            |
| `job.services`                            | `Objekt` | Die für einen Auftrag erstellten Dienstcontainer. Weitere Informationen zu Dienstcontainern findest Du unter „[Workflow-Syntax für {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#jobsjob_idservices)“. |
| `job.services.<service id>.id`      | `string` | Die ID des Dienstcontainers                                                                                                                                                                                                                          |
| `job.services.<service id>.network` | `string` | Die ID des Dienstcontainer-Netzwerks. Der Runner erstellt das Netzwerk, das von allen Containern in einem Auftrag genutzt wird.                                                                                                                      |
| `job.services.<service id>.ports`   | `Objekt` | Die offengelegten Ports des Service-Containers                                                                                                                                                                                                       |
| `job.status`                              | `string` | Der aktuelle Status des Auftrags. Mögliche Werte sind `success` (erfolgreich), `failure` (fehlgeschlagen) oder `cancelled` (abgebrochen).                                                                                                            |

#### `steps`-Kontext

Der `steps`-Kontext enthält Informationen zu den Schritten im aktuellen Auftrag, die bereits ausgeführt wurden.

| Name der Eigenschaft                                | Typ      | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --------------------------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `steps`                                             | `Objekt` | Dieser Kontext ändert sich bei jedem Schritt in einem Auftrag. Du kannst bei jedem Schritt in einem Auftrag auf diesen Kontext zugreifen.                                                                                                                                                                                                                                                                                                                                                                                                             |
| `steps.<step id>.outputs`                     | `Objekt` | Der Satz an Ausgaben, die für diesen Schritt definiert wurden. Weitere Informationen findest Du unter „[Metadaten-Syntax für {% data variables.product.prodname_actions %}](/articles/metadata-syntax-for-github-actions#outputs)“.                                                                                                                                                                                                                                                                                                                   |
| `steps.<step id>.conclusion`                  | `string` | Das Ergebnis eines abgeschlossenen Schritts nachdem[`continue-on-error` (bei Fehler weitermachen)](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error) angewendet wurde. Mögliche Werte sind `success` (erfolgreich), `failure` (fehlgeschlagen), `cancelled` (abgebrochen) oder `skipped` (übersprungen). Wenn ein Schritt mit `continue-on-error` (bei Fehler weitermachen) fehlschlägt, ist `outcome` (Ergebnis) `failure` zwar (Fehler), aber `conclusion` (Schlussfolgerung) ist am Ende `success` (Erfolg). |
| `steps.<step id>.outcome`                     | `string` | Das Ergebnis eines abgeschlossenen Schritts bevor [`continue-on-error` (bei Fehler weitermachen)](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error) angewendet wird. Mögliche Werte sind `success` (erfolgreich), `failure` (fehlgeschlagen), `cancelled` (abgebrochen) oder `skipped` (übersprungen). Wenn ein Schritt mit `continue-on-error` (bei Fehler weitermachen) fehlschlägt, ist `outcome` (Ergebnis) `failure` zwar (Fehler), aber `conclusion` (Schlussfolgerung) ist am Ende `success` (Erfolg).   |
| `steps.<step id>.outputs.<output name>` | `string` | Der Wert einer bestimmten Ausgabe                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

#### `runner`-Kontext

Der `runner`-Kontext enthält Informationen über den Runner, der den aktuellen Job ausführt.

| Name der Eigenschaft | Typ      | Beschreibung                                                                                                                                                                                                                                                        |
| -------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runner.os`          | `string` | Das Betriebssystem des Runners, der den Job ausführt. Mögliche Werte sind `Linux`, `Windows` oder `macOS`.                                                                                                                                                          |
| `runner.temp`        | `string` | Der Pfad des temporären Verzeichnisses für den Runner. Dieses Verzeichnis ist zu Beginn jedes Auftrags garantiert leer, sogar bei selbst-gehosteten Runnern.                                                                                                        |
| `runner.tool_cache`  | `string` | {% if currentVersion == "github-ae@latest" %}For instructions on how to make sure your {% data variables.actions.hosted_runner %} has the required software installed, see "[Creating custom images](/actions/using-github-hosted-runners/creating-custom-images)." |
{% else %}The path of the directory containing some of the preinstalled tools for {% data variables.product.prodname_dotcom %}-hosted runners. For more information, see "[Specifications for {% data variables.product.prodname_dotcom %}-hosted runners](/actions/reference/specifications-for-github-hosted-runners/#supported-software)". {% endif %}

#### `needs`-Kontext

Der `needs`-Kontext enthält Ausgaben von allen Jobs, die als Abhängigkeit des aktuellen Jobs definiert sind. Weitere Informationen zur Definition von Jobabhängigkeiten findest Du unter „[Workflow-Syntax für {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds)“.

| Name der Eigenschaft                               | Typ      | Beschreibung                                                                                                                                                                                 |
| -------------------------------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `needs.<job id>`                             | `Objekt` | Ein einzelner Job, von dem der aktuelle Job abhängt.                                                                                                                                         |
| `needs.<job id>.outputs`                     | `Objekt` | Die Menge aller Ausgaben eines Jobs, von dem der aktuelle Job abhängt.                                                                                                                       |
| `needs.<job id>.outputs.<output name>` | `string` | Der Wert einer bestimmten Ausgabe für einen Job, von dem der aktuelle Job abhängt.                                                                                                           |
| `needs.<job id>.result`                      | `string` | Das Ergebnis eines Jobs, von dem der aktuelle Job abhängt. Mögliche Werte sind `success` (erfolgreich), `failure` (fehlgeschlagen), `cancelled` (abgebrochen) oder `skipped` (übersprungen). |

#### Beispiel für die Ausgabe von Kontextinformationen in der Protokolldatei

Mit dem folgenden Beispiel einer Workflow-Datei kannst Du die Informationen einsehen, auf die in den einzelnen Kontexten zugegriffen werden kann.

{% data reusables.github-actions.github-context-warning %}

**.github/workflows/main.yml**
{% raw %}
```yaml
on: push

jobs:
  one:
    runs-on: ubuntu-latest
    steps:
      - name: Dump GitHub context
        env:
          GITHUB_CONTEXT: ${{ toJSON(github) }}
        run: echo "$GITHUB_CONTEXT"
      - name: Dump job context
        env:
          JOB_CONTEXT: ${{ toJSON(job) }}
        run: echo "$JOB_CONTEXT"
      - name: Dump steps context
        env:
          STEPS_CONTEXT: ${{ toJSON(steps) }}
        run: echo "$STEPS_CONTEXT"
      - name: Dump runner context
        env:
          RUNNER_CONTEXT: ${{ toJSON(runner) }}
        run: echo "$RUNNER_CONTEXT"
      - name: Dump strategy context
        env:
          STRATEGY_CONTEXT: ${{ toJSON(strategy) }}
        run: echo "$STRATEGY_CONTEXT"
      - name: Dump matrix context
        env:
          MATRIX_CONTEXT: ${{ toJSON(matrix) }}
        run: echo "$MATRIX_CONTEXT"
```
{% endraw %}

### Literale

In einem Ausdruck kannst Du die Datentypen `boolean`, `null`, `number` oder `string` verwenden. Bei booleschen Literalen wird die Groß- und Kleinschreibung nicht berücksichtigt. Du kannst also sowohl `true` als auch `True` benutzen.

| Datentyp        | Literalwert                                                                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `boolean`       | `true` oder `false`                                                                                                                              |
| `null (nichts)` | `null (nichts)`                                                                                                                                  |
| `number`        | Alle von JSON unterstützten Zahlenformate                                                                                                        |
| `string`        | Du musst einfache Anführungszeichen verwenden. Maskiere einfache Anführungszeichen (Apostrophen) mit einem weiteren einfachen Anführungszeichen. |

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

### Operatoren

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

{% data variables.product.prodname_dotcom %} vergleicht auf Gleichheit in toleranter Weise.

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

### Funktionen

{% data variables.product.prodname_dotcom %} bietet integrierte Funktionen, die Du in Ausdrücken verwenden kannst. Manche Funktionen verwandeln Werte an einen String, um Vergleiche durchzuführen. {% data variables.product.prodname_dotcom %} verwandelt Daten verschiedener Typen folgendermaßen in einen String:

| Typ     | Ergebnis                                          |
| ------- | ------------------------------------------------- |
| Null    | `''`                                              |
| Boolean | `'true'` oder `'false'`                           |
| Number  | Dezimalformat, bei großen Zahlen exponentiell     |
| Array   | Arrays werden nicht in einen String umgewandelt.  |
| Object  | Objekte werden nicht in einen String umgewandelt. |

#### contains

`contains( search, item )`

Gibt `true` zurück, wenn der `item` in `search` enthalten ist. Wenn `search` ein Array ist, gibt diese Funktion `true` zurück, wenn der `item` ein Element im Array ist. Wenn `search` ein String ist, gibt diese Funktion `true` zurück, wenn der `item` ein Teilstring von `search` ist. Bei dieser Funktion wird die Groß- und Kleinschreibung nicht berücksichtigt. Übergibt Werte an einen String.

##### Beispiel mit einem Array

`contains(github.event.issue.labels.*.name, 'bug')`

##### Beispiel mit einem String

`contains('Hello world', 'llo')` gibt `true` zurück.

#### startsWith

`startsWith( searchString, searchValue )`

Gibt `true` zurück, wenn der `searchString` mit `searchValue` beginnt. Bei dieser Funktion wird die Groß- und Kleinschreibung nicht berücksichtigt. Übergibt Werte an einen String.

##### Beispiel

`startsWith('Hello world', 'He')` gibt `true` zurück.

#### endsWith

`endsWith( searchString, searchValue )`

Gibt `true` zurück, wenn der `searchString` mit `searchValue` endet. Bei dieser Funktion wird die Groß- und Kleinschreibung nicht berücksichtigt. Übergibt Werte an einen String.

##### Beispiel

`endsWith('Hello world', 'ld')` gibt `true` zurück.

#### format

`format( string, replaceValue0, replaceValue1, ..., replaceValueN)`

Ersetzt die Werte im `string` durch die Variable `replaceValueN`. Variablen im `string` werden mit der `{N}`-Syntax festgelegt, wobei `N` eine Ganzzahl ist. Du musst mindestens einen `replaceValue` und `string` festlegen. Du kannst eine unbegrenzte Anzahl an Variablen (`replaceValueN`) verwenden. Maskiere geschweifte Klammern mit doppelten Klammern.

##### Beispiel

Gibt „Hello Mona the Octocat“ zurück:

`format('Hello {0} {1} {2}', 'Mona', 'the', 'Octocat')`

##### Beispiel mit maskierten Klammern

Gibt „{Hello Mona the Octocat}“ zurück

{% raw %}
```js
format('{{Hello {0} {1} {2}!}}', 'Mona', 'the', 'Octocat')
```
{% endraw %}

#### join

`join( array, optionalSeparator )`

Der Wert für `array` kann ein Array oder ein String sein. Alle Werte im `array` werden in einem String zusammengeführt. Wenn Du `optionalSeparator` angibst, wird er zwischen den verketteten Werten eingefügt. Andernfalls wird der Standard-Trennzeichen `,` verwendet. Übergibt Werte an einen String.

##### Beispiel

`join(github.event.issue.labels.*.name, ', ')` kann „Bug, Hilfe gesucht“ zurückgeben

#### toJSON

`toJSON(value)`

Gibt eine Pretty-Print-JSON-Darstellung von `value` zurück. Diese Funktion hilft Dir bei der Fehlersuche in den Informationen, die in Kontexten enthalten sind.

##### Beispiel

`toJSON(job)` kann `{ "status": "Success" }` zurückgeben.

#### fromJSON

`fromJSON(value)`

Returns a JSON object or JSON data type for `value`. You can use this function to provide a JSON object as an evaluated expression or to convert environment variables from a string.

##### Example returning a JSON object

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

##### Example returning a JSON data type

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

#### hashFiles

`hashFiles(path)`

Gibt einen einzelnen Hash für den Satz von Dateien zurück, der dem `Pfad`-Muster entspricht. You can provide a single `path` pattern or multiple `path` patterns separated by commas. Der `path` ist relativ zum Verzeichnis `GITHUB_WORKSPACE` und kann nur Dateien innerhalb des `GITHUB_WORKSPACE` umfassen. Diese Funktion berechnet einen individuellen SHA-256-Hash für jede passende Datei und verwendet diese Hashes dann zur Berechnung eines endgültigen SHA-256-Hashs für den Satz von Dateien. Weitere Informationen über SHA-256 findest Du unter „[SHA-2](https://en.wikipedia.org/wiki/SHA-2)“.

Du kannst Zeichen zum Musterabgleich verwenden, um Dateien mit passenden Namen auszuwählen. Bei dem Musterabgleich unter Windows wird die Groß-/Kleinschreibung nicht beachtet. Weitere Informationen über unterstützte Zeichen zum Musterabgleich findest Du unter „[Workflow-Syntax für {% data variables.product.prodname_actions %}](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions/#filter-pattern-cheat-sheet)“.

##### Example with a single pattern

Passt zu jeder Datei `package-lock.json` im Repository.

`hashFiles('**/package-lock.json')`

##### Example with multiple patterns

Creates a hash for any `package-lock.json` and `Gemfile.lock` files in the repository.

`hashFiles('**/package-lock.json', '**/Gemfile.lock')`

### Funktionen zur Prüfung des Job-Status

Du kannst die nachfolgenden Funktionen zum Statuscheck als Ausdrücke in `if`-Bedingungen verwenden. Wenn Dein `if`-Ausdruck keine Statusfunktion enthält, wird automatisch das Ergebnis `success()` zurückgegeben. Weitere Informationen zu `if`-Anweisungen finden Sie unter „[Workflow-Syntax für GitHub Actions](/articles/workflow-syntax-for-github-actions/#jobsjob_idif)“.

#### success (Erfolg)

Gibt `true` zurück, wenn keiner der vorherigen Schritte fehlgeschlagen ist oder abgebrochen wurde.

##### Beispiel

```yaml
steps:
  ...
  - name: The job has succeeded
    if: {% raw %}${{ success() }}{% endraw %}
```

#### always

Gibt immer `true`zurück, sogar bei Abbruch. Ein Job oder Schritt wird nicht ausgeführt, wenn ein kritischer Fehler die Ausführung der Aufgabe verhindert. Beispiel: Quellen konnten nicht abgerufen werden.

##### Beispiel

```yaml
if: {% raw %}${{ always() }}{% endraw %}
```

#### cancelled

Gibt `true` zurück, wenn der Workflow abgebrochen wurde.

##### Beispiel

```yaml
if: {% raw %}${{ cancelled() }}{% endraw %}
```

#### failure (Fehlschlag)

Gibt `true` zurück, wenn irgend ein vorheriger Schritt des Jobs fehlschlägt.

##### Beispiel

```yaml
steps:
  ...
  - name: The job has failed
    if: {% raw %}${{ failure() }}{% endraw %}
```

### Objektfilter

Mit der Syntax `*` kannst Du einen Filter anwenden und passende Elemente in einer Sammlung auswählen.

Betrachten Sie beispielsweise das Objekt-Array `fruits`.

```json
[
  { "name": "apple", "quantity": 1 },
  { "name": "orange", "quantity": 2 },
  { "name": "pear", "quantity": 1 }
]
```

Der Filter `fruits.*.name` gibt das Array `[ "apple", "orange", "pear" ]` zurück.
