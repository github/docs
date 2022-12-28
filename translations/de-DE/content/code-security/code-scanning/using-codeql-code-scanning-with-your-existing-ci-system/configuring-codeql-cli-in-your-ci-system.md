---
title: Konfigurieren der CodeQL-CLI in deinem CI-System
shortTitle: Configure CodeQL CLI
intro: 'Du kannst dein Continuous Integration-System so konfigurieren, dass die {% data variables.product.prodname_codeql_cli %} ausgeführt, {% data variables.product.prodname_codeql %}-Analysen durchgeführt und die Ergebnisse in {% data variables.product.product_name %} als {% data variables.product.prodname_code_scanning %}-Warnungen hochgeladen werden.'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-cli-in-your-ci-system
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
  - Repositories
  - Pull requests
  - Integration
  - CI
  - SARIF
ms.openlocfilehash: 165aee9852cb6863dceddb41daf6d05176191f7a
ms.sourcegitcommit: dac72908e8660cb4a347fbf73beab61034eed8c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/25/2022
ms.locfileid: '148182298'
---
{% data reusables.code-scanning.enterprise-enable-code-scanning %}

{% ifversion ghes or ghae %} {% note %}

**Hinweis:** In diesem Artikel werden Features beschrieben, die in der Version von {% data variables.product.prodname_codeql_cli %} zur Zeit der Veröffentlichung von {% data variables.product.product_name %} verfügbar sind. Wenn dein Unternehmen eine aktuellere Version von {% data variables.product.prodname_codeql_cli %} verwendet, lies stattdessen die [{% data variables.product.prodname_ghe_cloud %}-Dokumentation](/enterprise-cloud@latest/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-cli-in-your-ci-system).

{% endnote %} {% endif %}

## Informationen zum Generieren von Codeüberprüfungsergebnissen mit {% data variables.product.prodname_codeql_cli %}

Nachdem du die {% data variables.product.prodname_codeql_cli %} für Server in deinem CI-System verfügbar gemacht und sichergestellt hast, dass sie sich mit {% data variables.product.product_name %} authentifizieren können, kannst du Daten generieren.

Du verwendest drei unterschiedliche Befehle, um Ergebnisse zu generieren und diese auf {% data variables.product.product_name %} hochzuladen:

<!--Option to analyze multiple languages with one call-->
1. `database create`: Mit diesem Befehl erstellst du eine {% data variables.product.prodname_codeql %}-Datenbank, die die hierarchische Struktur aller unterstützten Programmiersprachen im Repository darstellt.
2. ` database analyze`: Mit diesem Befehl führst du Abfragen aus, um jede {% data variables.product.prodname_codeql %}-Datenbank zu analysieren und die Ergebnisse in einer SARIF-Datei zusammenzufassen.
3. `github upload-results`: Mit diesem Befehl lädst du die SARIF-Dateien auf {% data variables.product.product_name %} hoch, wo die Ergebnisse mit einem Branch oder Pull Request abgeglichen und als Warnungen der Codeüberprüfung ( {% data variables.product.prodname_code_scanning %}) angezeigt werden.

Du kannst die Befehlszeilenhilfe über die Option <nobr>`--help`</nobr> für jeden Befehl anzeigen.

{% data reusables.code-scanning.upload-sarif-ghas %}

## Erstellen von {% data variables.product.prodname_codeql %}-Datenbanken zur Analyse

1. Checke den Code aus, den du analysieren möchtest:
    - Für einen Branch: Checke den Kopfteil des Branchs aus, den du analysieren möchtest.
    - Für einen Pull Request: Checke entweder den Headcommit des Pull Requests oder den von {% data variables.product.prodname_dotcom %} generierten Mergecommit aus.
2. Richte die Umgebung für die Codebasis ein, und stelle sicher, dass alle Abhängigkeiten verfügbar sind. Weitere Informationen findest du unter [Erstellen von Datenbanken für nicht kompilierte Sprachen](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/#creating-databases-for-non-compiled-languages) und [Erstellen von Datenbanken für kompilierte Sprachen](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/#creating-databases-for-compiled-languages) in der Dokumentation für die {% data variables.product.prodname_codeql_cli %}.
3. Suche ggf. den Buildbefehl für die Codebasis. Üblicherweise ist dieser in der Konfigurationsdatei des CI-Systems verfügbar.
4. Führe `codeql database create` im Check-Out-Stamm deines Repositorys aus, und erstelle die Codebasis.

  ```shell
  # Single supported language - create one CodeQL database
  codeql database create &lt;database&gt; --command&lt;build&gt; --language=&lt;language-identifier&gt;

  # Multiple supported languages - create one CodeQL database per language
  codeql database create &lt;database&gt; --command&lt;build&gt; \
        --db-cluster --language=&lt;language-identifier&gt;,&lt;language-identifier&gt;
  ```

  {% note %}

  **Hinweis:** Wenn du einen Containerbuild verwendest, musst du die {% data variables.product.prodname_codeql_cli %} innerhalb des Containers ausführen, in dem die Buildaufgabe ausgeführt wird.

  {% endnote %}

| Option | Erforderlich | Verwendung |
|--------|:--------:|-----|
| `<database>` | {% octicon "check-circle-fill" aria-label="Required" %} | Gib den Namen und den Speicherort eines Verzeichnisses an, das für die {% data variables.product.prodname_codeql %}-Datenbank erstellt werden soll. Der Befehl schlägt fehl, wenn du versuchst, ein vorhandenes Verzeichnis zu überschreiben. Wenn du außerdem `--db-cluster` angibst, ist dies das übergeordnete Verzeichnis, und für jede analysierte Sprache wird ein Unterverzeichnis erstellt.|
| <nobr>`--language`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | Gib den Bezeichner für die Sprache an, für die eine Datenbank erstellt werden soll: `{% data reusables.code-scanning.codeql-languages-keywords %}`. (Verwende `javascript` zum Analysieren von TypeScript-Code {% ifversion codeql-kotlin-beta %} und `java` zum Analysieren von Kotlin-Code{% endif %}.) Wenn dieser mit <nobr>`--db-cluster`</nobr> verwendet wird, akzeptiert die Option eine durch Kommas getrennte Liste oder kann mehrfach angegeben werden.
| <nobr>`--command`</nobr> | | Empfohlen. Verwende diese Option, um den Buildbefehl oder das Skript anzugeben, der bzw. das den Buildprozess für die Codebasis aufruft. Befehle werden aus dem aktuellen Ordner oder (falls definiert) aus <nobr>`--source-root`</nobr> ausgeführt. Diese Option ist für Python- und JavaScript- bzw. TypeScript-Analysen nicht erforderlich. |
| <nobr>`--db-cluster`</nobr> | | Optional. Verwende diese Option für Codebasen mit mehreren Sprachen, um eine Datenbank für jede durch <nobr>`--language`</nobr> angegebene Sprache zu generieren.
| <nobr>`--no-run-unnecessary-builds`</nobr> | | Empfohlen. Verwende diese Option, um den Buildbefehl für Sprachen zu unterdrücken, in denen die {% data variables.product.prodname_codeql_cli %} den Build nicht überwachen muss (z. B. Python und JavaScript bzw. TypeScript).
| <nobr>`--source-root`</nobr> | | Optional. Verwende diese Option, wenn du die CLI außerhalb des Check-Out-Stamms des Repositorys ausführst. Beim Befehl zum Erstellen von Datenbanken (`database create`) wird standardmäßig davon ausgegangen, dass das aktuelle Verzeichnis das Stammverzeichnis der Quelldateien ist. Verwende diese Option, um einen anderen Speicherort anzugeben. |
| <nobr>`--codescanning-config`</nobr> | | Optional (Erweitert). Verwende diese Option, wenn du über eine Konfigurationsdatei verfügst, die angibt, wie die {% data variables.product.prodname_codeql %}-Datenbanken erstellt werden und welche Abfragen in späteren Schritten ausgeführt werden sollen. Weitere Informationen findest du unter [Verwenden einer benutzerdefinierten Konfigurationsdatei](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#using-a-custom-configuration-file) und unter [database create](https://codeql.github.com/docs/codeql-cli/manual/database-create/#cmdoption-codeql-database-create-codescanning-config). |

Weitere Informationen findest du unter [Erstellen von {% data variables.product.prodname_codeql %}-Datenbanken](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/) in der Dokumentation für die {% data variables.product.prodname_codeql_cli %}.

### Beispiel für eine einzelne Sprache

In diesem Beispiel wird eine {% data variables.product.prodname_codeql %}-Datenbank für das Repository erstellt, das unter `/checkouts/example-repo` ausgecheckt ist. Dabei wird der JavaScript-Extraktor verwendet, um eine hierarchische Darstellung des JavaScript- und TypeScript-Codes im Repository zu erstellen. Die resultierende Datenbank wird unter `/codeql-dbs/example-repo` gespeichert.

```
$ codeql database create /codeql-dbs/example-repo --language=javascript \
    --source-root /checkouts/example-repo

> Initializing database at /codeql-dbs/example-repo.
> Running command [/codeql-home/codeql/javascript/tools/autobuild.cmd]
    in /checkouts/example-repo.
> [build-stdout] Single-threaded extraction.
> [build-stdout] Extracting
...
> Finalizing database at /codeql-dbs/example-repo.
> Successfully created database at /codeql-dbs/example-repo.
```

### Beispiel für mehrere Sprachen

In diesem Beispiel werden zwei {% data variables.product.prodname_codeql %}-Datenbanken für das Repository erstellt, das unter `/checkouts/example-repo-multi` ausgecheckt ist. Er verwendet Folgendes:

- `--db-cluster`: Wird verwendet, um die Analyse mehrerer Sprachen anzufordern
- `--language`: Wird verwendet, um anzugeben, für welche Sprachen Datenbanken erstellt werden sollen
- `--command`: Wird verwendet, um dem Tool den Buildbefehl für die Codebasis weiterzugeben, hier `make`.
- `--no-run-unnecessary-builds`: Wird verwendet, um das Tool anzuweisen, den Buildbefehl für Sprachen zu überspringen, in denen er nicht benötigt wird (z. B. für Python)

Die resultierenden Datenbanken werden in den Unterverzeichnissen `python` und `cpp` von `/codeql-dbs/example-repo-multi` gespeichert.

```
$ codeql database create /codeql-dbs/example-repo-multi \
    --db-cluster --language python,cpp \
    --command make --no-run-unnecessary-builds \
    --source-root /checkouts/example-repo-multi
Initializing databases at /codeql-dbs/example-repo-multi.
Running build command: [make]
[build-stdout] Calling python3 /codeql-bundle/codeql/python/tools/get_venv_lib.py
[build-stdout] Calling python3 -S /codeql-bundle/codeql/python/tools/python_tracer.py -v -z all -c /codeql-dbs/example-repo-multi/python/working/trap_cache -p ERROR: 'pip' not installed.
[build-stdout] /usr/local/lib/python3.6/dist-packages -R /checkouts/example-repo-multi
[build-stdout] [INFO] Python version 3.6.9
[build-stdout] [INFO] Python extractor version 5.16
[build-stdout] [INFO] [2] Extracted file /checkouts/example-repo-multi/hello.py in 5ms
[build-stdout] [INFO] Processed 1 modules in 0.15s
[build-stdout] <output from calling 'make' to build the C/C++ code>
Finalizing databases at /codeql-dbs/example-repo-multi.
Successfully created databases at /codeql-dbs/example-repo-multi.
$
```

## Analysieren einer {% data variables.product.prodname_codeql %}-Datenbank

1. Erstelle eine {% data variables.product.prodname_codeql %}-Datenbank (siehe oben).
2. Führe `codeql database analyze` in der Datenbank aus, und gib an, welche {% ifversion codeql-packs %}-Pakete und/oder {% endif %}Abfragen verwendet werden sollen.
  ```shell
  codeql database analyze &lt;database&gt; --format=&lt;format&gt; \
      --output=&lt;output&gt;  {% ifversion codeql-packs %}--download &lt;packs,queries&gt;{% else %}&lt;queries&gt;{% endif %}
  ```

{% note %}

**Hinweis:** Wenn du mehrere {% data variables.product.prodname_codeql %}-Datenbanken für einen einzelnen Commit analysierst, musst du für alle von diesem Befehl generierten Ergebnisse eine SARIF-Kategorie angeben. Wenn du die Ergebnisse auf {% data variables.product.product_name %} hochlädst, wird diese Kategorie bei der {% data variables.product.prodname_code_scanning %} verwendet, um die Ergebnisse separat für jede Sprache zu speichern. Wenn du dies vergisst, überschreibt jeder Upload die alten Ergebnisse.

```shell
codeql database analyze &lt;database&gt; --format=&lt;format&gt; \
    --sarif-category=&lt;language-specifier&gt; --output=&lt;output&gt; \
    {% ifversion codeql-packs %}&lt;packs,queries&gt;{% else %}&lt;queries&gt;{% endif %}
```
{% endnote %}

| Option | Erforderlich | Verwendung |
|--------|:--------:|-----|
| `<database>` | {% octicon "check-circle-fill" aria-label="Required" %} | Gib den Pfad des Verzeichnisses an, das die zu analysierende {% data variables.product.prodname_codeql %}-Datenbank enthält. |
| `<packs,queries>` | | Gib {% data variables.product.prodname_codeql %}-Pakete oder -Abfragen an, die ausgeführt werden sollen. Lass diesen Parameter aus, um die Standardabfragen zur {% data variables.product.prodname_code_scanning %} auszuführen. Die anderen Abfragesammlungen, die im {% data variables.product.prodname_codeql_cli %}-Paket enthalten sind, findest du unter `/<extraction-root>/qlpacks/codeql/<language>-queries/codeql-suites`. Weitere Informationen zum Erstellen einer eigenen Abfragesammlung findest du unter [Erstellen von CodeQL-Abfragesammlungen](https://codeql.github.com/docs/codeql-cli/creating-codeql-query-suites/) in der Dokumentation für die {% data variables.product.prodname_codeql_cli %}.
| <nobr>`--format`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | Gib das Format der vom Befehl generierten Ergebnisdatei an. Für den Upload in {% data variables.product.company_short %} sollte dies sein: {% ifversion fpt or ghae or ghec %}`sarif-latest`{% else %}`sarifv2.1.0`{% endif %}. Weitere Informationen findest du unter [SARIF-Unterstützung für {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/sarif-support-for-code-scanning).
| <nobr>`--output`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | Gib an, wo die SARIF-Ergebnisdatei gespeichert werden soll.
| <nobr>`--sarif-category`<nobr> | {% octicon "question" aria-label="Required with multiple results sets" %} | Diese Option kann optional bei der Analyse einer einzelnen Datenbank verwendet werden. Diese Option ist erforderlich, um die Sprache zu definieren, wenn du mehrere Datenbanken für einen einzelnen Commit in einem Repository analysierst. Gib eine Kategorie an, die in die SARIF-Ergebnisdatei für diese Analyse aufgenommen werden soll. Eine Kategorie wird verwendet, um mehrere Analysen für dasselbe Tool und denselben Commit zu unterscheiden, die jedoch für verschiedene Sprachen oder Teile des Codes ausgeführt werden.|{% ifversion fpt or ghes > 3.3 or ghae or ghec %}
| <nobr>`--sarif-add-query-help`</nobr> | | Optional. Verwende diese Option, wenn du alle verfügbaren, mit Markdown gerenderten Abfragen, die in deiner Analyse verwendet werden, einschließen möchtest. Alle Abfragehilfen für benutzerdefinierte Abfragen, die in der SARIF enthalten sind, werden auf der Benutzeroberfläche für die Codeüberprüfung angezeigt, wenn die entsprechende Abfrage eine Warnung generiert. Weitere Informationen findest du unter [Analysieren von Datenbanken mit der {% data variables.product.prodname_codeql_cli %}](https://codeql.github.com/docs/codeql-cli/analyzing-databases-with-the-codeql-cli/#including-query-help-for-custom-codeql-queries-in-sarif-files) in der Dokumentation für die {% data variables.product.prodname_codeql_cli %}.{% endif %}{% ifversion codeql-packs %}
| `<packs>` | | Optional. Verwende diese Option, wenn du CodeQL-Abfragepakete in deine Analyse einschließen möchtest. Weitere Informationen findest du unter [Herunterladen und Verwenden von {% data variables.product.prodname_codeql %}-Paketen](#downloading-and-using-codeql-query-packs).
| <nobr>`--download`</nobr> | | Optional. Verwende diese Option, wenn einige deiner CodeQL-Abfragepakete sich noch nicht auf dem Datenträger befinden und heruntergeladen werden müssen, ehe du Abfragen ausführst.{% endif %}
| <nobr>`--threads`</nobr> | | Optional. Verwende diese Option, wenn du mehrere Threads zum Ausführen von Abfragen verwenden möchtest. Standardwert: `1`. Du kannst weitere Threads angeben, um die Abfrageausführung zu beschleunigen. Gib `0` an, um die Anzahl der Threads auf die Anzahl der logischen Prozessoren festzulegen.
| <nobr>`--verbose`</nobr> | | Optional. Verwende diese Option, um weitere Informationen zum Analyseprozess und Diagnosedaten zum Prozess der Datenbankerstellung zu erhalten.

Weitere Informationen findest du unter [Analysieren von Datenbanken mit der {% data variables.product.prodname_codeql_cli %}](https://codeql.github.com/docs/codeql-cli/analyzing-databases-with-the-codeql-cli/) in der Dokumentation für die {% data variables.product.prodname_codeql_cli %}.

### Einfaches Beispiel

In diesem Beispiel wird eine {% data variables.product.prodname_codeql %}-Datenbank analysiert, die unter `/codeql-dbs/example-repo` gespeichert ist und die Ergebnisse als SARIF-Datei speichert: `/temp/example-repo-js.sarif`. Dabei wird `--sarif-category` verwendet, um zusätzliche Informationen in die SARIF-Datei einzuschließen, die die Ergebnisse als JavaScript kennzeichnen. Dies ist wichtig, wenn du über mehrere {% data variables.product.prodname_codeql %}-Datenbanken verfügst und einen einzelnen Commit in einem Repository analysieren möchtest.

```
$ codeql database analyze /codeql-dbs/example-repo  \
    javascript-code-scanning.qls --sarif-category=javascript \
    --format={% ifversion fpt or ghae or ghec %}sarif-latest{% else %}sarifv2.1.0{% endif %} --output=/temp/example-repo-js.sarif

> Running queries.
> Compiling query plan for /codeql-home/codeql/qlpacks/codeql-javascript/AngularJS/DisablingSce.ql.
...
> Shutting down query evaluator.
> Interpreting results.
```

## Hochladen von Ergebnissen in {% data variables.product.product_name %}

{% data reusables.code-scanning.upload-sarif-alert-limit %}

Bevor du Ergebnisse auf {% data variables.product.product_name %} hochladen kannst, musst du bestimmen, wie du die {% data variables.product.prodname_github_app %} oder das zuvor erstellte {% data variables.product.pat_generic %} am besten an die {% data variables.product.prodname_codeql_cli %} übergibst (siehe [Installieren von {% data variables.product.prodname_codeql_cli %} in deinem CI-System](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system#generating-a-token-for-authentication-with-github)). Es wird empfohlen, den Leitfaden deines CI-Systems zur sicheren Verwendung eines Geheimnisspeichers zu lesen. Die {% data variables.product.prodname_codeql_cli %} unterstützt:

- Das Übergeben des Tokens an die CLI über die Standardeingabe mithilfe der Option `--github-auth-stdin` (empfohlen)
- Das Speichern des Geheimnisses in der Umgebungsvariablen `GITHUB_TOKEN` und das Ausführen der CLI ohne die Option `--github-auth-stdin`

Wenn du dich für die sicherste und zuverlässigste Methode für deinen CI-Server entschieden hast, führe `codeql github upload-results` in jeder SARIF-Ergebnisdatei aus, und schließe `--github-auth-stdin` ein (es sei denn, das Token ist in der Umgebungsvariablen `GITHUB_TOKEN` verfügbar).

  ```shell
  echo "$UPLOAD_TOKEN" | codeql github upload-results --repository=&lt;repository-name&gt; \
      --ref=&lt;ref&gt; --commit=&lt;commit&gt; --sarif=&lt;file&gt; \
      {% ifversion ghes or ghae %}--github-url=&lt;URL&gt; {% endif %}--github-auth-stdin
  ```

| Option | Erforderlich | Verwendung |
|--------|:--------:|-----|
| <nobr>`--repository`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | Gib *OWNER/NAME* (den*die Besitzer*in/den Namen) des Repositorys an, in das Daten hochgeladen werden. Der Besitzer muss eine Organisation innerhalb eines Unternehmens sein, die über eine Lizenz für {% data variables.product.prodname_GH_advanced_security %} verfügt. {% data variables.product.prodname_GH_advanced_security %} muss für das Repository aktiviert sein{% ifversion fpt or ghec %}, es sei denn, das Repository ist öffentlich{% endif %}. Weitere Informationen findest du unter [Verwalten von Sicherheits- und Analyseeinstellungen für dein Repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository).
| <nobr>`--ref`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | Gib den Namen des von dir ausgecheckten und analysierten Verweises (`ref`) an, damit die Ergebnisse dem richtigen Code zugeordnet werden können. Verwende für einen Branch `refs/heads/BRANCH-NAME`. Verwende für einen Headcommit eines Pull Requests `refs/pull/NUMBER/head` oder für den von {% data variables.product.prodname_dotcom %} generierten Mergecommit eines Pull Requests `refs/pull/NUMBER/merge`.
| <nobr>`--commit`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | Gib die vollständigen SHA des analysierten Commits an.
| <nobr>`--sarif`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | Gib die SARIF-Datei an, die geladen werden soll.{% ifversion ghes or ghae %}
| <nobr>`--github-url`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | Gib die URL für {% data variables.product.product_name %} an.{% endif %}
| <nobr>`--github-auth-stdin`</nobr> | | Optional. Verwende diese Option, um die CLI an die {% data variables.product.prodname_github_app %} oder das {% data variables.product.pat_generic %} weiterzugeben, das zur Authentifizierung mit der REST-API von {% data variables.product.company_short %} über die Standardeingabe erstellt wurde. Dies ist nicht erforderlich, wenn der Befehl über Zugriff auf `GITHUB_TOKEN`-Umgebungsvariablen verfügt, die mit diesem Token festgelegt wurden.

Weitere Informationen findest du unter [github upload-results](https://codeql.github.com/docs/codeql-cli/manual/github-upload-results/) in der Dokumentation für die {% data variables.product.prodname_codeql_cli %}.

### Einfaches Beispiel

In diesem Beispiel werden Ergebnisse aus der SARIF-Datei `temp/example-repo-js.sarif` in das Repository `my-org/example-repo` hochgeladen. Es teilt der {% data variables.product.prodname_code_scanning %}-API mit, dass die Ergebnisse für den Commit `deb275d2d5fe9a522a0b7bd8b6b6a1c939552718` für den Branch `main` gelten.

```
$ echo $UPLOAD_TOKEN | codeql github upload-results --repository=my-org/example-repo \
    --ref=refs/heads/main --commit=deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 \
    --sarif=/temp/example-repo-js.sarif {% ifversion ghes or ghae %}--github-url={% data variables.command_line.git_url_example %} \
    {% endif %}--github-auth-stdin
```

Es gibt keine Ausgabe aus diesem Befehl, sofern der Upload nicht erfolgreich war. Die Eingabeaufforderung kehrt zurück, wenn der Upload abgeschlossen ist und die Datenverarbeitung begonnen hat. Auf kleineren Codebasen solltest du die {% data variables.product.prodname_code_scanning %}-Warnungen in {% data variables.product.product_name %} kurz danach untersuchen können. Je nach ausgechecktem Code kannst du Warnungen direkt in der Pull-Anforderung oder auf der Registerkarte **Sicherheit** für Branches anzeigen. Weitere Informationen findest du unter [Selektieren von {% data variables.product.prodname_code_scanning %}-Warnungen in Pull Requests](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests) und [Verwalten von {% data variables.product.prodname_code_scanning %}-Warnungen für dein Repository](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository).

{% ifversion codeql-packs %}
## Herunterladen und Verwenden von {% data variables.product.prodname_codeql %}-Abfragepaketen

{% data reusables.code-scanning.beta-codeql-packs-cli %}

Das {% data variables.product.prodname_codeql_cli %}-Paket enthält Abfragen, die von {% data variables.product.company_short %}-Experten, Sicherheitsforschern und Community-Mitwirkenden verwaltet werden. Wenn du Abfragen ausführen möchtest, die von anderen Organisationen entwickelt wurden, bieten {% data variables.product.prodname_codeql %}-Abfragepakete eine effiziente und zuverlässige Möglichkeit zum Herunterladen und Ausführen von Abfragen. Weitere Informationen findest du unter [Informationen zu Codeüberprüfungswarnungen mit CodeQL](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql#about-codeql-queries).

Bevor du ein {% data variables.product.prodname_codeql %}-Paket verwenden kannst, um eine Datenbank zu analysieren, müssen alle Pakete heruntergeladen werden, die du aus der {% data variables.product.company_short %} {% data variables.product.prodname_container_registry %} benötigst. Dies kann durch Verwendung des Flags `--download` als Teil des Befehls `codeql database analyze` erfolgen. Wenn ein Paket nicht öffentlich verfügbar ist, musst du eine {% data variables.product.prodname_github_app %} oder ein {% data variables.product.pat_generic %} zum Authentifizieren verwenden. Weitere Informationen und ein Beispiel findest du unter [Hochladen von Ergebnissen in {% data variables.product.product_name %}](#uploading-results-to-github) oben.

| Option | Erforderlich | Verwendung |
|--------|:--------:|-----|
| <nobr>`<scope/name@version:path>`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | Gib den Bereich und den Namen eines oder mehrerer CodeQL-Abfragepakete an, die mithilfe einer durch Komma getrennten Liste heruntergeladen werden sollen. Schließe optional die Version ein, die heruntergeladen und entpackt werden soll. Standardmäßig wird die neueste Version des Pakets heruntergeladen. Optional kannst du einen Pfad zu einer Abfrage, einem Verzeichnis oder einer Abfragesammlung angeben, die ausgeführt werden soll. Wenn kein Pfad angegeben ist, führe die Standardabfragen dieses Pakets aus. |
| <nobr>`--github-auth-stdin`</nobr> | | Optional. Übergib die {% data variables.product.prodname_github_app %} oder das {% data variables.product.pat_generic %}, das zur Authentifizierung mit der {% data variables.product.company_short %}-REST-API erstellt wurde, über die Standardeingabe an die CLI. Dies ist nicht erforderlich, wenn der Befehl über Zugriff auf `GITHUB_TOKEN`-Umgebungsvariablen verfügt, die mit diesem Token festgelegt wurden.

### Einfaches Beispiel

In diesem Beispiel wird der Befehl `codeql database analyze` mit der Option `--download` für folgende Zwecke ausgeführt:

1. Herunterladen der neuesten Version des Pakets `octo-org/security-queries`
2. Herunterladen einer Version des Pakets `octo-org/optional-security-queries`, die mit Version 1.0.1 *kompatibel* ist (in diesem Fall Version 1.0.2) Weitere Informationen zur SemVer-Kompatibilität findest du in der [npm-Dokumentation zur semantischen Versionierung unter „Ranges“](https://github.com/npm/node-semver#ranges).
3. Ausführen aller Standardabfragen in `octo-org/security-queries`
4. Ausschließliches Ausführen der Abfrage `queries/csrf.ql` in `octo-org/optional-security-queries`

```
$ echo $OCTO-ORG_ACCESS_TOKEN | codeql database analyze --download /codeql-dbs/example-repo \
    octo-org/security-queries \
    octo-org/optional-security-queries@~1.0.1:queries/csrf.ql \
    --format=sarif-latest --output=/temp/example-repo-js.sarif

> Download location: /Users/mona/.codeql/packages
> Installed fresh octo-org/security-queries@1.0.0
> Installed fresh octo-org/optional-security-queries@1.0.2
> Running queries.
> Compiling query plan for /Users/mona/.codeql/packages/octo-org/security-queries/1.0.0/potential-sql-injection.ql.
> [1/2] Found in cache: /Users/mona/.codeql/packages/octo-org/security-queries/1.0.0/potential-sql-injection.ql.
> Starting evaluation of octo-org/security-queries/query1.ql.
> Compiling query plan for /Users/mona/.codeql/packages/octo-org/optional-security-queries/1.0.2/queries/csrf.ql.
> [2/2] Found in cache: /Users/mona/.codeql/packages/octo-org/optional-security-queries/1.0.2/queries/csrf.ql.
> Starting evaluation of octo-org/optional-security-queries/queries/csrf.ql.
> [2/2 eval 694ms] Evaluation done; writing results to octo-org/security-queries/query1.bqrs.
> Shutting down query evaluator.
> Interpreting results.
```

### Direktes Herunterladen von {% data variables.product.prodname_codeql %}-Paketen

Wenn du ein {% data variables.product.prodname_codeql %}-Paket herunterladen möchtest, ohne es sofort auszuführen, kannst du den Befehl `codeql pack download` verwenden. Dies ist nützlich, wenn du bei der Ausführung von {% data variables.product.prodname_codeql %}-Abfragen den Zugriff auf das Internet vermeiden möchtest. Wenn du die {% data variables.product.prodname_codeql %}-Analyse ausführst, kannst du Pakete, Versionen und Pfade auf die gleiche Weise wie im vorherigen Beispiel angeben:

```shell
echo $OCTO-ORG_ACCESS_TOKEN | codeql pack download &lt;scope/name@version:path&gt; &lt;scope/name@version:path&gt; ...
```

### Herunterladen von {% data variables.product.prodname_codeql %}-Paketen aus mehreren {% data variables.product.company_short %}-Containerregistrierungen

Wenn sich deine {% data variables.product.prodname_codeql %}-Pakete in mehreren Containerregistrierungen befinden, musst du der {% data variables.product.prodname_codeql_cli %} mitteilen, wo jedes Paket zu finden ist. Weitere Informationen findest du unter [Konfigurieren von {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors#downloading-codeql-packs-from-github-enterprise-server).
{% endif %}

## CI-Beispielkonfiguration für {% data variables.product.prodname_codeql %}-Analyse

Dies ist ein Beispiel für die Reihe von Befehlen, die du verwenden kannst, um eine Codebasis mit zwei unterstützten Sprachen zu analysieren und dann die Ergebnisse in {% data variables.product.product_name %} hochzuladen.

```shell
# Create CodeQL databases for Java and Python in the 'codeql-dbs' directory
# Call the normal build script for the codebase: 'myBuildScript'

codeql database create codeql-dbs --source-root=src \
    --db-cluster --language=java,python --command=./myBuildScript

# Analyze the CodeQL database for Java, 'codeql-dbs/java'
# Tag the data as 'java' results and store in: 'java-results.sarif'

codeql database analyze codeql-dbs/java java-code-scanning.qls \
    --format=sarif-latest --sarif-category=java --output=java-results.sarif

# Analyze the CodeQL database for Python, 'codeql-dbs/python'
# Tag the data as 'python' results and store in: 'python-results.sarif'

codeql database analyze codeql-dbs/python python-code-scanning.qls \
    --format=sarif-latest --sarif-category=python --output=python-results.sarif

# Upload the SARIF file with the Java results: 'java-results.sarif'

echo $UPLOAD_TOKEN | codeql github upload-results --repository=my-org/example-repo \
    --ref=refs/heads/main --commit=deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 \
    --sarif=java-results.sarif --github-auth-stdin

# Upload the SARIF file with the Python results: 'python-results.sarif'

echo $UPLOAD_TOKEN | codeql github upload-results --repository=my-org/example-repo \
    --ref=refs/heads/main --commit=deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 \
    --sarif=python-results.sarif --github-auth-stdin
```

## Problembehandlung der {% data variables.product.prodname_codeql_cli %} im CI-System

### Anzeigen von Protokoll- und Diagnoseinformationen

Wenn du eine {% data variables.product.prodname_codeql %}-Datenbank mithilfe einer {% data variables.product.prodname_code_scanning %}-Abfragesuite analysierst, generiert die CLI detaillierte Informationen zu Warnungen und meldet zusätzlich Diagnosedaten aus dem Schritt für die Datenbankgenerierung und Zusammenfassungsmetriken. Für Repositorys mit wenigen Warnungen sind diese Informationen möglicherweise für dich hilfreich, um festzustellen, ob es wirklich wenige Probleme im Code gibt, oder wenn Fehler beim Generieren der {% data variables.product.prodname_codeql %}-Datenbank aufgetreten sind. Wenn du eine ausführlichere `codeql database analyze`-Ausgabe wünschst, verwende die Option `--verbose`.

Weitere Informationen zum Typ der verfügbaren Diagnoseinformationen findest du unter [Anzeigen von {% data variables.product.prodname_code_scanning %}-Protokollen](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/viewing-code-scanning-logs#about-analysis-and-diagnostic-information).

### {% data variables.product.prodname_code_scanning_capc %} zeigt nur Analyseergebnisse aus einer der analysierten Sprachen an.

Standardmäßig erwartet {% data variables.product.prodname_code_scanning %} eine SARIF-Ergebnisdatei pro Analyse für ein Repository. Wenn du daher eine zweite SARIF-Ergebnisdatei für einen Commit hochlädst, wird sie als Ersatz für den ursprünglichen Datensatz behandelt.

Wenn du mehrere Ergebnisse in die {% data variables.product.prodname_code_scanning %}-API für einen Commit in einem Repository hochladen möchtest, musst du jede Gruppe von Ergebnissen als eindeutige Gruppe identifizieren. Für Repositorys, in denen du mehrere {% data variables.product.prodname_codeql %}-Datenbanken zur Analyse für jeden Commit erstellst, verwende die Option `--sarif-category`, um eine Sprache oder eine andere eindeutige Kategorie für jede SARIF-Datei anzugeben, die du für dieses Repository generierst.

{% ifversion fpt or ghec or ghes > 3.7 or ghae > 3.7 %}
### Probleme mit der Python-Extraktion

Die Unterstützung von Python 2 für die {% data variables.product.prodname_codeql_cli %}, genauer gesagt für die Phase der CodeQL-Datenbankgenerierung (Codeextraktion), wird eingestellt.

Wenn du die {% data variables.product.prodname_codeql_cli %} verwendest, um eine {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} für in Python geschriebenen Code auszuführen, musst du sicherstellen, dass für dein CI-System Python 3 installiert ist.

{% endif %}

## Weitere Informationsquellen

- [Erstellen von CodeQL-Datenbanken](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/)
- [Analysieren von Datenbanken mit der CodeQL-CLI](https://codeql.github.com/docs/codeql-cli/analyzing-databases-with-the-codeql-cli/)
- [Veröffentlichen und Verwenden von CodeQL-Paketen](https://codeql.github.com/docs/codeql-cli/publishing-and-using-codeql-packs/)
