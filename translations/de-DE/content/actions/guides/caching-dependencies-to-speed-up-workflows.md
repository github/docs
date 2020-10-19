---
title: Abhängigkeiten zwischenspeichern um Workflows zu beschleunigen
shortTitle: Abhängigkeiten „cachen“ (zwischenspeichern)
intro: 'Um Deine Workflows schneller und effizienter zu gestalten, kannst Du Caches für Abhängigkeiten und andere häufig wiederverwendete Dateien erstellen und verwenden.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/caching-dependencies-to-speed-up-workflows
  - /actions/automating-your-workflow-with-github-actions/caching-dependencies-to-speed-up-workflows
  - /actions/configuring-and-managing-workflows/caching-dependencies-to-speed-up-workflows
versions:
  free-pro-team: '*'
---

### Informationen zum Zwischenspeichern von Workflow-Abhängigkeiten

Workflow-Läufe verwenden häufig dieselben Ausgaben oder heruntergeladenen Abhängigkeiten in aufeinanderfolgenden Durchläufen. Tools zur Verwaltung von Paketen und Abhängigkeiten wie beispielsweise Maven, Gradle, npm und Yarn halten einen lokalen Cache mit heruntergeladenen Abhängigkeiten.

Jobs bei {% data variables.product.prodname_dotcom %}-gehosteten Läufern beginnen in einer sauberen virtuellen Umgebung und müssen Abhängigkeiten jedes Mal herunterladen. Dies führt zu erhöhter Netzwerkauslastung, längerer Laufzeit und erhöhten Kosten. Um die Zeit zum Neuerstellen dieser Dateien einzusparen, kann {% data variables.product.prodname_dotcom %} in Workflows häufig verwendete Abhängigkeiten zwischenspeichern.

Um Abhängigkeiten für einen Job zu cachen, musst du die `Cache`-Aktion von {% data variables.product.prodname_dotcom %} verwenden. Die Aktion ruft einen Cache ab, der durch einen eindeutigen Schlüssel identifiziert wurde. Weitere Informationen findest Du unter [`Aktionen/Cache`](https://github.com/actions/cache).

{% warning %}

**Warnung**: Wir empfehlen Ihnen, keine sensiblen Informationen im Cache von öffentlichen Repositories zu speichern. Sensible Informationen umfassen beispielsweise Zugriffstoken oder Anmeldedaten, die in einer Datei im Cache-Pfad gespeichert sind. Auch Kommandozeilen-Programme (CLI) wie `docker login` können Zugangsdaten in einer Konfigurationsdatei speichern. Jeder mit Lesezugriff kann einen Pull-Request auf ein Repository erstellen und auf den Inhalt des Caches zugreifen. Forks eines Repositorys können auch Pull-Requests auf den base branch (Basiszweig) erstellen und auf Caches im Basiszweig zugreifen.

{% endwarning %}

### Vergleich: Artefakte v/s Zwischenspeicherung von Abhängigkeiten

Artefakte und Caching sind ähnlich, da sie die Möglichkeit bieten, Dateien auf {% data variables.product.prodname_dotcom %} zu speichern, aber die beiden Funktionalitäten bieten verschiedene Anwendungsfälle und dürfen nicht miteinander verwechselt werden.

- Verwende Caching, wenn Du Dateien wiederverwenden willst, die sich zwischen Jobs oder Workflow-Läufen nicht oft ändern.
- Verwende Artefakte, wenn Du die von einem Job erzeugten Dateien speichern willst, um sie nach dem Ende eines Workflows anzuzeigen. Weitere Informationen findest Du unter "[Workflow-Daten mittels Artefakten persistieren](/github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)."

### Einschränkungen für den Zugriff auf einen Cache

Mit `v2-` der `Cache-` -Aktion können Sie in Workflows auf den Cache zugreifen, die von jedem Ereignis ausgelöst werden, das über eine `GITHUB_REF`verfügt. Wenn Sie `v1-` der `-Cache-` -Aktion verwenden, können Sie nur in Workflows auf den Cache zugreifen, `durch pushen` - und `pull_request` -Ereignisse ausgelöst werden, mit Ausnahme des `pull_request` `` -Ereignis geschlossen. Weitere Informationen findest Du unter "[Ereignisse, die Workflows auslösen](/actions/reference/events-that-trigger-workflows)."

A workflow can access and restore a cache created in the current branch, the base branch (including base branches of forked repositories), or the default branch (usually `main`). For example, a cache created on the default branch would be accessible from any pull request. Also, if the branch `feature-b` has the base branch `feature-a`, a workflow triggered on `feature-b` would have access to caches created in the default branch (`main`), `feature-a`, and `feature-b`.

Zugriffsbeschränkungen bieten Cache-Isolation und Sicherheit durch Ziehen einer logischen Grenze zwischen verschiedenen Workflows und Zweigen. For example, a cache created for the branch `feature-a` (with the base `main`) would not be accessible to a pull request for the branch `feature-b` (with the base `main`).

### Verwenden der `-Cache-` -Aktion

Die Aktion `-cache-` wird versuchen, einen Cache basierend auf dem `key` (Schlüssel), den Du angibst, wiederherzustellen. Wenn die Aktion einen Cache findet, stellt die Aktion die zwischengespeicherten Dateien in dem `path` wieder her, den Du konfigurierst.

Wenn es keine exakte Übereinstimmung gibt, erzeugt die Aktion einen neuen Cache-Eintrag, wenn der Job erfolgreich abgeschlossen wird. Der neue Cache wird den `key` verwenden, den Du angegeben hast, und enthält die Dateien im Verzeichnis `path`.

Optional kannst Du eine Liste von `restore-keys` angeben, die verwendet werden sollen, wenn der `key` nicht mit einem vorhandenen Cache übereinstimmt. Eine Liste der `restore-keys` ist nützlich, wenn Du einen Cache aus einem anderen Zweig wiederherstellst, da `restore-keys` auch teilweise mit Cache-Schlüsseln übereinstimmen dürfen. Weitere Informationen zum Abgleich von `restore-keys`, siehe "[Einen Cache-Schlüssel abgleichen](#matching-a-cache-key)."

Weitere Informationen findest Du unter [`Aktionen/Cache`](https://github.com/actions/cache).

#### Eingabeparameter für die `-Cache-` -Aktion

- `key`: **Erforderlich** Der Schlüssel, der beim Speichern eines Caches erstellt wurde, und der Schlüssel, der zum Suchen nach einem Cache verwendet wird. Kann eine beliebige Kombination von Variablen, Kontextwerten, statischen Strings und Funktionen sein. Schlüssel haben eine maximale Länge von 512 Zeichen und Schlüssel, die die maximale Länge überschreiten, lassen die Aktion fehlschlagen.
- `path`: **Erforderlich** Der Dateipfad auf dem Runner zum Anlegen oder Wiederherstellen des Caches. Der Pfad kann ein absoluter Pfad oder relativ zum Arbeitsverzeichnis sein.
  - Mit `v2-` der `-Cache-` -Aktion können Sie einen einzelnen Pfad oder mehrere Pfade als Liste angeben. Pfade können entweder Verzeichnisse oder einzelne Dateien sein, und Glob-Muster werden unterstützt.
  - Bei `v1-` der `-Cache-` -Aktion wird nur ein einzelner Pfad unterstützt, und es muss sich um ein Verzeichnis handeln. Eine einzelne Datei kannst Du nicht cachen.
- `restore-keys`: **Optional** Eine geordnete Liste der alternativen Schlüssel, die zum Finden des Caches verwendet werden sollen, falls `key` keinen Treffer gebracht hat.

#### Ausgangsparameter für die Cache-Aktion

- `Cache-Treffer`: Ein boolescher Wert, um eine genaue Übereinstimmung für den Schlüssel anzugeben.

#### Beispiel für die Verwendung der `-Cache-` -Aktion

Dieses Beispiel erzeugt einen neuen Cache, wenn sich die Pakete in `package-lock.json` ändern oder wenn das Betriebssystem des Runners wechselt. Das folgende Beispiel verwendet Kontexte und Ausdrücke, um einen Schlüssel zu erzeugen, der eine Kennung des Runner-Betriebssystems und einen SHA-256-Hash der Datei `package-lock.json` enthält.

{% raw %}
```yaml
name: Caching mit npm

on: push

jobs:
  build:
    runs-on: ubuntu-latest

    schritte:
    - verwendet: actions/checkout@v2

    - name: Cache node modules
      uses: actions/cache@v2
      env:
        cache-name: cache-node-modules
      with:
        -npm-Cache-Dateien werden in ''/.npm' auf dem Linux/macOS-
        -Pfad gespeichert: '/.npm
        -Schlüssel: '{{ runner.os }}-build-'{{ env.cache-name }}-' hashFiles('**/package-lock.json') '
        Restore-Keys: |
          -{{ runner.os }}-build--{{ env.cache-name }}-
          -{{ runner.os }}-build-
          -{{ runner.os }}-

    - Name: Installieren sie abhängigkeiten
      ausführen: npm install

    - Name: Build
      ausführen: npm build

    - Name: Test
      -Test: npm-Test

```
{% endraw %}

Wenn `key` mit einem existierenden Cache übereinstimmt, wird das als „cache hit“ (Cache-Treffer) bezeichnet, und die Aktion stellt die zwischengespeicherten Dateien wieder her und legt sie in den `path`.

Wenn `key` nicht mit einem existierenden Cache übereinstimmt, wird das als „cache miss“ (Cache-Fehlschlag) bezeichnet. Wenn der Job erfolgreich abgeschlossen ist, wird ein neuer Cache erstellt. Wenn ein Cache-Fehlschlag auftritt, sucht die Aktion mittels der alternativen Schlüssel gemäß `restore-keys` weiter.

1. Wenn du `restore-keys` bereitstellst, sucht die `cache`-Aktion sequentiell nach Caches, die mit der Liste `restore-keys` übereinstimmen.
   - Wenn es eine exakte Übereinstimmung gibt, stellt die Aktion die Dateien aus dem Cache in das Verzeichnis `path` wieder her.
   - Wenn es keine exakten Übereinstimmungen gibt, sucht die Aktion nach partiellen Übereinstimmungen der „restore keys“ (Wiederherstellungs-Scvhlüssel). Wenn die Aktion eine partielle Übereinstimmung findet, wird der aktuellste Cache in das Verzeichnis `path` wiederhergestellt.
1. Die `Cache-` Aktion abgeschlossen wird, und der nächste Workflowschritt im Auftrag wird ausgeführt.
1. Wenn der Job erfolgreich abgeschlossen ist, erstellt die Aktion einen neuen Cache mit dem Inhalt des Verzeichnisses `path`.

Um Dateien in mehr als einem Verzeichnis zu cachen, benötigst Du einen step (Schritt), der die Aktion [`cache`](https://github.com/actions/cache) für jedes Verzeichnis verwendet. Sobald Du einen Cache erstellt hast, kannst Du den Inhalt eines bereits existierenden Caches nicht ändern, aber Du kannst einen neuen Cache mit einem neuen key (Schlüssel) erstellen.

#### Cache-Keys aus Kontexten erstellen

Ein Cache-Key (Cache-Schlüssel) kann Kontexte, Funktionen, Literale und Operatoren enthalten, die von {% data variables.product.prodname_actions %} unterstützt werden. Weitere Informationen findest Du unter „[Kontext- und Ausdrucks-Syntax für {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions)“.

Wenn Du zum Erstellen eines `key`s Ausdrücke verwendest, kannst Du automatisch einen neuen Cache zu erstellen, sobald sich die Abhängigkeiten geändert haben. Zum Beispiel kannst Du einen `key` mittels eines Ausdrucks erstellen, der den Hash-Code einer npm-Datei `package-lock.json` errechnet.

{% raw %}
```
npm-${{ hashFiles('package-lock.json') }}
```
{% endraw %}

{% data variables.product.prodname_dotcom %} wertet den Ausdruck aus `hash "package-lock.json"` um daraus den endgültigen `key` abzuleiten.

```
npm-d5ea0750
```

### Einen Cache-Key abgleichen

Der `-Cache` Aktion sucht zuerst nach Cachetreffern nach `Schlüssel` und `Wiederherstellungsschlüssel n` in der Verzweigung, die die Workflowausführung enthält. Wenn in der aktuellen Verzweigung keine Treffer vorhanden sind, sucht der `-Cache` Aktion nach `Schlüssel` und `Wiederherstellungsschlüssel, die in den übergeordneten Zweigen und vorgelagerten Zweigen` .

Du kannst eine Liste der `restore-keys` angeben, die verwendet werden sollen, wenn auf `key` ein Cache-Fehler auftritt. Du kannst mehrere `restore-keys` erstellen, die von den spezifischsten zum am wenigsten spezifischen sortiert sind. Die Aktion `cache` sucht nach `restore-keys` in sequenzieller Reihenfolge. Wenn ein Schlüssel nicht direkt übereinstimmt, sucht die Aktion nach Schlüsseln denen der Restore-Key vorangestellt ist. Wenn mehrere Teiltreffer für einen Restore-Key vorhanden sind, gibt die Aktion den zuletzt erstellten Cache zurück.

#### Beispiel für die Verwendung mehrerer Restore-Keys

{% raw %}
```
restore-keys: |
  npm-foobar-${{ hashFiles('package-lock.json') }}
  npm-foobar-
  npm-
```
{% endraw %}

Der Runner bewertet die Ausdrücke, die sich in folgende `restore-keys` auflösen lassen:

{% raw %}
```
restore-keys: |
  npm-foobar-d5ea0750
  npm-foobar-
  npm-
```
{% endraw %}

Der Restore-Key `npm-foobar-` passt auf jeden Schlüssel, der mit dem String `npm-foobar-` beginnt. Zum Beispiel passen zu ihm die beiden Schlüssel `npm-foobar-fd3052de` und `npm-foobar-a9b253ff`. Der Cache mit dem neuesten Erstellungsdatum wird verwendet. Die Schlüssel in diesem Beispiel werden in der folgenden Reihenfolge durchsucht:

1. **`npm-foobar-d5ea0750`** passt zu einem bestimmten Hash.
1. **`npm-foobar-`** deckt alle Cache-Schlüssel ab, die mit `npm-foobar-` beginnen.
1. **`npm-`** deckt alle Cache-Schlüssel ab, die mit `npm-` beginnen.

##### Beispiel für die Suchpriorität

```yaml
key:
  npm-feature-d5ea0750
restore-keys: |
  npm-feature-
  npm-
```

For example, if a pull request contains a `feature` branch (the current scope) and targets the default branch (`main`), the action searches for `key` and `restore-keys` in the following order:

1. Schlüssel `npm-feature-d5eaa0750` im Zweig `feature`
1. Schlüssel `npm-feature-` im Zweig `feature`
2. Schlüssel `npm-` im Zweig `feature`
1. Key `npm-feature-d5ea0750` in the `main` branch scope
3. Key `npm-feature-` in the `main` branch scope
4. Key `npm-` in the `main` branch scope

### Nutzungsbeschränkungen und Räumungsrichtlinien

{% data variables.product.prodname_dotcom %} wird alle Cache-Einträge entfernen, auf die seit mehr als 7 Tagen nicht zugegriffen wurde. Es gibt keine Grenze für die Anzahl der Caches, die du speichern kannst, aber die Gesamtgröße aller Caches in einem Repository ist auf 5 GB begrenzt. Wenn du dieses Limit überschreitest, wird {% data variables.product.prodname_dotcom %} deinen Cache speichern, aber damit beginnen, Caches zu löschen, bis die Gesamtgröße kleiner als 5 GB ist.
