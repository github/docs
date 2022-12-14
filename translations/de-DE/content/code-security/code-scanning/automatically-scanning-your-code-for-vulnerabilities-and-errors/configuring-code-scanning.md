---
title: Konfigurieren der Codeüberprüfung
intro: 'Du kannst konfigurieren, wie {% data variables.product.prodname_dotcom %} Code in deinem Projekt auf Sicherheitsrisiken und Fehler überprüft.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'People with write permissions to a repository can configure {% data variables.product.prodname_code_scanning %} for the repository.'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning
  - /code-security/secure-coding/configuring-code-scanning
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Actions
  - Repositories
  - Pull requests
  - JavaScript
  - Python
shortTitle: Configure code scanning
ms.openlocfilehash: cad147292c113d749004f2fe303b27a4dada1456
ms.sourcegitcommit: dac72908e8660cb4a347fbf73beab61034eed8c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/25/2022
ms.locfileid: '148182314'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

{% ifversion ghes or ghae %} {% note %}

**Hinweis:** In diesem Artikel werden die Features beschrieben, die mit der Version der CodeQL-Aktion und dem zugehörigen CodeQL-CLI-Bundle im ursprünglichen Release dieser Version von {% data variables.product.product_name %} verfügbar sind. Wenn dein Unternehmen eine neuere Version der CodeQL-Aktion verwendet, findest du Informationen zu den neuesten Features unter [{% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning). {% ifversion not ghae %} Informationen zur Verwendung der neuesten Version findest du unter [Konfigurieren der Codeüberprüfung für deine Appliance](/admin/advanced-security/configuring-code-scanning-for-your-appliance#configuring-codeql-analysis-on-a-server-without-internet-access).{% endif %}

{% endnote %} {% endif %}

## Informationen zum Konfigurieren von {% data variables.product.prodname_code_scanning %}

Du kannst {% data variables.product.prodname_code_scanning %} mit {% data variables.product.prodname_actions %} in {% data variables.product.product_name %} oder auf deinem Continuous Integration(CI)-System ausführen. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/about-github-actions) oder [Informationen zu {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} auf dem CI-System](/code-security/secure-coding/about-codeql-code-scanning-in-your-ci-system).

In diesem Artikel wird beschrieben, wie {% data variables.product.prodname_code_scanning %} in {% data variables.product.product_name %} mithilfe von Aktionen ausgeführt wird.

Bevor du {% data variables.product.prodname_code_scanning %} für ein Repository konfigurieren kannst, musst du {% data variables.product.prodname_code_scanning %} einrichten, indem du dem Repository einen Workflow für {% data variables.product.prodname_actions %} hinzufügst. Weitere Informationen findest du unter [Einrichten von {% data variables.product.prodname_code_scanning %} für ein Repository](/code-security/secure-coding/setting-up-code-scanning-for-a-repository).

{% data reusables.code-scanning.edit-workflow %}

Die {% data variables.product.prodname_codeql %}-Analyse ist nur eine Art von {% data variables.product.prodname_code_scanning %}, die du in {% data variables.product.prodname_dotcom %} durchführen kannst. {% data variables.product.prodname_marketplace %}{% ifversion ghes %} auf {% data variables.product.prodname_dotcom_the_website %}{% endif %} enthält andere {% data variables.product.prodname_code_scanning %}-Workflows, die du verwenden kannst. {% ifversion fpt or ghec %}Du findest eine Auswahl dieser Workflows auf der Seite „Erste Schritte mit {% data variables.product.prodname_code_scanning %}“, auf die du über die Registerkarte **{% octicon "shield" aria-label="The shield symbol" %} Sicherheit** zugreifen kannst.{% endif %} Die in diesem Artikel angegebenen konkreten Beispiele beziehen sich auf die {% data variables.code-scanning.codeql_workflow %}-Datei.

## Bearbeiten eines {% data variables.product.prodname_code_scanning %}-Workflows

In {% data variables.product.prodname_dotcom %} werden Workflowdateien im _.github/workflows_-Verzeichnis des Repositorys gespeichert. Du findest einen Workflow, den du hinzugefügt hast, indem du nach seinem Dateinamen suchst. Beispielsweise ist der Name der Workflowdatei für {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} standardmäßig auf _codeql-analysis.yml_ festgelegt.

1. Navigiere in deinem Repository zu der Workflow-Datei, die du bearbeiten möchtest.
1. Klicke zum Öffnen des Workflow-Editors oben rechts in der Dateiansicht auf {% octicon "pencil" aria-label="The edit icon" %}.
![Schaltfläche zum Editieren der Workflow-Datei](/assets/images/help/repository/code-scanning-edit-workflow-button.png)
1. Nachdem du die Datei bearbeitet hast, klicke auf **Starr commit** (Commit starten), und fülle das Formular „Commit changes“ (Änderungen committen) aus. Du kannst einen Commit direkt in den aktuellen Branch committen oder einen neuen Branch erstellen und einen Pull Request starten.
![Durchführen des Commits der Aktualisierung in den codeql.yml-Workflow](/assets/images/help/repository/code-scanning-workflow-update.png)

Weitere Informationen zum Bearbeiten von Workflowdateien findest du unter [Informationen zu {% data variables.product.prodname_actions %}](/actions/learn-github-actions).

## Konfigurieren der Häufigkeit

Du kannst den {% data variables.code-scanning.codeql_workflow %} konfigurieren, um Code na Zeitplan zu überprüfen oder wenn bestimmte Ereignisse in einem Repository auftreten.

Scanning code on every push to the repository, and every time a pull request is created, prevents developers from introducing new vulnerabilities and errors into the code. Das Überprüfen von Code nach einem Zeitplan informiert dich über die neuesten Sicherheitsrisiken und Fehler, die {% data variables.product.company_short %}, Sicherheitsexperten und die Community entdecken, auch wenn Entwickler das Repository nicht aktiv verwalten.

### Überprüfen bei Push

Standardmäßig wird vom {% data variables.code-scanning.codeql_workflow %} das `on.push`-Ereignis dazu verwendet, bei jeder Pushübertragung zum Standardbranch des Repositorys sowie zu geschützten Branches eine Codeüberprüfung auszulösen. Damit {% data variables.product.prodname_code_scanning %} auf einem bestimmten Branch ausgelöst wird, muss der Workflow in diesem Branch vorhanden sein. Weitere Informationen findest du unter [Workflowsyntax für {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#on).

Wenn du beim Pushen eine Überprüfung durchführst, werden die Ergebnisse auf der Registerkarte **Sicherheit** für das Repository angezeigt. Weitere Informationen findest du unter [Verwalten von Codeüberprüfungswarnungen für dein Repository](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository).

Wenn eine `on:push`-Überprüfung ein Ergebnis zurückgibt, das einem offenen Pull Request zugeordnet werden kann, werden diese Warnungen für den Pull Request automatisch am gleichen Ort wie andere Pull Request-Warnungen angezeigt. Die Warnungen werden identifiziert, indem die vorhandene Analyse des HEAD des Branch mit der Analyse für den Zielbranch verglichen wird. Weitere Informationen zu {% data variables.product.prodname_code_scanning %}-Warnungen in Pull Requests findest du unter [Selektieren von {% data variables.product.prodname_code_scanning %}-Warnungen in Pull Requests](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests).

### Überprüfen von Pull Requests

Im Standard-{% data variables.code-scanning.codeql_workflow %} wird das `pull_request`-Ereignis dazu verwendet, eine Codeüberprüfung bei Pull Requests auszulösen, die sich auf den Standardbranch beziehen. {% ifversion ghes %}Das `pull_request`-Ereignis wird nicht ausgelöst, wenn der Pull Request über einen privaten Fork geöffnet wurde.{% else %}Wenn ein Pull Request von einem privaten Fork ausgeht, wird das `pull_request`-Ereignis nur ausgelöst, wenn du in den Repositoryeinstellungen die Option „Run workflows from fork pull requests“ (Workflows von forkbasierten Pull Requests ausführen) ausgewählt hast. Weitere Informationen findest du unter [Verwalten von Einstellungen für {% data variables.product.prodname_actions %} für ein Repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#enabling-workflows-for-private-repository-forks).{% endif %}

Weitere Informationen zum `pull_request`-Event findest du unter [Ereignisse, die Workflows auslösen](/actions/learn-github-actions/events-that-trigger-workflows#pull_request).

Wenn du Pull Requests scannst, werden die Ergebnisse als Warnungen in einer Pull Request-Überprüfung angezeigt. Weitere Informationen findest du unter [Selektieren von Codeüberprüfungswarnungen in Pull Requests](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests).

Wenn du den `pull_request`-Trigger verwendest, der so konfiguriert ist, dass anstelle des HEAD-Commits der Mergecommit des Pull Requests überprüft wird, führt dies zu effizienteren und genaueren Ergebnissen als eine HEAD-Überprüfung für den Branch bei jedem Pushvorgang. Wenn du jedoch ein CI/CD-System verwendest, das nicht für das Auslösen bei Pull Requests konfiguriert werden kann, kannst du trotzdem den `on:push`-Trigger verwendest. Von {% data variables.product.prodname_code_scanning %} werden die Ergebnisse dann offenen Pull Requests für den Branch zugeordnet. Die Warnungen werden als Anmerkungen für den Pull Request hinzugefügt. Weitere Informationen findest du unter [Überprüfen bei Push](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#scanning-on-push).

### Definieren der Schweregrade, die einen Fehler bei der Pull Request-Überprüfung verursachen

Standardmäßig führen bei der Überprüfung von Pull Requests nur Warnungen mit dem Schweregrad `Error` oder dem Sicherheitsschweregrad `Critical` oder `High` zu einem Fehler, und eine Überprüfung mit Warnungen mit niedrigeren Schweregraden ist weiterhin erfolgreich. Du kannst die Stufen von Warnungsschweregraden und Sicherheitsschweregraden in deinen Repositoryeinstellungen ändern, die bei der Überprüfung von Pull Requests zu einem Fehler führen. Weitere Informationen zu Schweregradstufen findest du unter [Informationen zu Codeüberprüfungswarnungen](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts#about-alert-details).

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. Verwende unter „Code Scanning“ (Codeüberprüfung) rechts neben „Check Failure“ (Überprüfungsfehler) das Dropdownmenü, um den Schweregrad auszuwählen, den du als Auslöser für einen Pull Request-Überprüfungsfehler festlegen möchtest.
![Überprüfen der Fehlereinstellung](/assets/images/help/repository/code-scanning-check-failure-setting.png)

### Vermeiden unnötiger Überprüfungen von Pull Requests

Möglicherweise möchtest du verhindern, dass ein Codescan für bestimmte Pull Requests ausgelöst wird, die sich auf den Standardbranch beziehen, und zwar unabhängig davon, welche Dateien geändert wurden. Du kannst dies konfigurieren, indem du im {% data variables.product.prodname_code_scanning %}-Workflow `on:pull_request:paths-ignore` oder `on:pull_request:paths` festlegst. Wenn die einzigen Änderungen in einem Pull Request z. B. Dateien mit den Dateierweiterungen `.md` oder `.txt` sind, kannst du das folgende `paths-ignore`-Array verwenden.

``` yaml
on:
  push:
    branches: [main, protected]
  pull_request:
    branches: [main]
    paths-ignore:
      - '**/*.md'
      - '**/*.txt'
```

{% note %}

**Hinweise**

* Durch `on:pull_request:paths-ignore` und `on:pull_request:paths` werden Bedingungen festgelegt, die bestimmen, ob die Aktionen im Workflow bei einem Pull Request ausgeführt werden. Es wird nicht bestimmt, welche Dateien analysiert werden, wenn die Aktionen _tatsächlich_ ausgeführt werden. Wenn ein Pull Request alle Dateien enthält, die nicht mit `on:pull_request:paths-ignore` oder `on:pull_request:paths` übereinstimmen, führt der Workflow die Aktionen aus, und überprüft alle Dateien, die im Pull Request geändert wurden, einschließlich der mit `on:pull_request:paths-ignore` oder `on:pull_request:paths` übereinstimmenden, es sei denn, die Dateien wurden ausgeschlossen. Informationen zum Ausschließen von Dateien aus der Analyse findest du unter [Angeben von Verzeichnissen zum Überprüfen](#specifying-directories-to-scan).
* Verwende für {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}-Workflowdateien nicht die Schlüsselwörter `paths-ignore` oder `paths` mit dem `on:push`-Ereignis, da dies wahrscheinlich zu fehlenden Analysen führt. Für genaue Ergebnisse müssen von {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} neue Änderungen mit der Analyse des vorherigen Commits verglichen werden können.

{% endnote %}

Weitere Informationen dazu, wie mithilfe von `on:pull_request:paths-ignore` und `on:pull_request:paths` ermittelt wird, wann ein Workflow für einen Pull Request ausgeführt wird, findest du unter [Workflowsyntax für {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore).

### Scannen nach einem Zeitplan

Wenn du den standardmäßigen {% data variables.code-scanning.codeql_workflow %} ausführst, überprüft der Workflow zusätzlich zu den von Ereignissen ausgelösten Überprüfungen einmal wöchentlich den Code in deinem Repository. Um diesen Zeitplan anzupassen, bearbeite den `cron`-Wert im Workflow. Weitere Informationen findest du unter [Workflowsyntax für {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#onschedule).

{% note %}

**Hinweis**: Von {% data variables.product.prodname_dotcom %} werden nur geplante Aufträge ausgeführt, die sich in Workflows im Standardbranch befinden. Das Ändern des Zeitplans in einem Workflow in einem anderen Branch hat erst dann eine Auswirkung, wenn du den Branch mit dem Standardbranch zusammenführst.

{% endnote %}

### Beispiel

Im folgenden Beispiel wird ein {% data variables.code-scanning.codeql_workflow %} für ein bestimmtes Repository angezeigt, das einen Standardbranch mit der Bezeichnung `main` und einen geschützten Branch mit der Bezeichnung `protected` aufweist.

``` yaml
on:
  push:
    branches: [main, protected]
  pull_request:
    branches: [main]
  schedule:
    - cron: '20 14 * * 1'
```

Dieser Workflow scannt Folgendes:
* Jeden Pushvorgang in den Standardbranch und den geschützten Branch
* Jeden Pull Request an den Standardbranch
* Den Standardbranch jeden Montag um 14:20 UTC

## Angeben eines Betriebssystems

Wenn dein Code ein bestimmtes Betriebssystem zum Kompilieren benötigt, kannst du das Betriebssystem in deinem {% data variables.code-scanning.codeql_workflow %} konfigurieren. Bearbeite den Wert `jobs.analyze.runs-on`, um das Betriebssystem für den Computer anzugeben, auf dem die {% data variables.product.prodname_code_scanning %}-Aktionen ausgeführt werden. {% ifversion ghes %}Du gibst das Betriebssystem mithilfe einer entsprechenden Bezeichnung als zweites Element in einem aus zwei Elementen bestehenden Array nach `self-hosted` an.{% else %}

``` yaml
jobs:
  analyze:
    name: Analyze
    runs-on: [ubuntu-latest]
```

Wenn du einen selbstgehosteten Runner für die Codeüberprüfung verwenden möchtest, kannst du ein Betriebssystem mithilfe einer geeigneten Bezeichnung als zweites Element in einem aus zwei Elementen bestehenden Array nach `self-hosted` angeben.{% endif %}

``` yaml
jobs:
  analyze:
    name: Analyze
    runs-on: [self-hosted, ubuntu-latest]
```

{% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} unterstützt die neuesten Versionen von Ubuntu, Windows und macOS. Typische Werte für diese Einstellung sind daher: `ubuntu-latest`, `windows-latest`und `macos-latest`. Weitere Informationen findest du unter [Auswählen des Runners für einen Auftrag](/actions/using-jobs/choosing-the-runner-for-a-job) und [Verwenden von Bezeichnungen mit selbstgehosteten Runnern](/actions/hosting-your-own-runners/using-labels-with-self-hosted-runners).

{% ifversion ghes %}Du musst sicherstellen, dass Git bei deinen selbstgehosteten Runnern in der Variable PATH enthalten ist.{% else %}Wenn du einen selbstgehosteten Runner verwendest, musst du sicherstellen, dass Git in der Variable PATH enthalten ist.{% endif %} Weitere Informationen findest du unter [Informationen zu selbstgehosteten Runnern](/actions/hosting-your-own-runners/about-self-hosted-runners) und [Hinzufügen selbstgehosteter Runner](/actions/hosting-your-own-runners/adding-self-hosted-runners).

Empfohlene Spezifikationen (RAM, CPU-Kerne und Datenträger) zum Ausführen der {% data variables.product.prodname_codeql %}-Analyse{% ifversion not ghes %} auf selbstgehosteten Computern{% endif %} findest du unter [Empfohlene Hardwareressourcen zum Ausführen von {% data variables.product.prodname_codeql %}](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/recommended-hardware-resources-for-running-codeql).

## Angeben des Speicherorts für {% data variables.product.prodname_codeql %}-Datenbanken

Im Allgemeinen musst du dir keine Gedanken darüber machen, wo {% data variables.code-scanning.codeql_workflow %}-Datenbanken vom {% data variables.product.prodname_codeql %} platziert werden, da in späteren Schritten automatisch Datenbanken ermittelt werden, die in vorherigen Schritten erstellt wurden. Wenn du jedoch einen benutzerdefinierten Workflowschritt schreibst, der es erforderlich macht, dass sich die {% data variables.product.prodname_codeql %}-Datenbank an einem bestimmten Speicherort des Datenträgers befindet, z. B. zum Hochladen der Datenbank als Workflowartefakt, kannst du diesen Speicherort mithilfe des Parameters `db-location` unter der Aktion `init` angeben.

``` yaml
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    db-location: {% raw %}'${{ github.workspace }}/codeql_dbs'{% endraw %}
```

Vom {% data variables.code-scanning.codeql_workflow %} wird erwartet, dass der im Parameter `db-location` angegebene Pfad beschreibbar ist und entweder nicht vorhanden oder ein leeres Verzeichnis ist. Wenn du diesen Parameter in einem Auftrag verwendest, der auf einem selbstgehosteten Runner ausgeführt oder für den ein Docker-Container verwendet wird, ist es die Verantwortung des Benutzers, sicherzustellen, dass das ausgewählte Verzeichnis zwischen den Ausführungen gelöscht wird oder dass die Datenbanken entfernt werden, sobald sie nicht mehr benötigt werden. {% ifversion fpt or ghec or ghes %} Nicht notwendig ist dies für Aufträge, die auf Runnern ausgeführt werden, die auf {% data variables.product.prodname_dotcom %} gehostet werden und die bei jeder Ausführung eine neue Instanz und ein bereinigtes Dateisystem abrufen. Weitere Informationen findest du unter [Informationen zu auf {% data variables.product.prodname_dotcom %} gehosteten Runnern](/actions/using-github-hosted-runners/about-github-hosted-runners).{% endif %}

Wenn dieser Parameter nicht verwendet wird, werden vom {% data variables.code-scanning.codeql_workflow %}-Datenbanken an einem eigenständig gewählten temporären Speicherort erstellt.

## Ändern der analysierten Sprachen

Von {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} wird in den unterstützten Sprachen geschriebener Code automatisch erkannt.

{% data reusables.code-scanning.codeql-languages-bullets %}

Die {% data variables.code-scanning.codeql_workflow %}-Standarddatei enthält eine Matrix namens `language`, in der die analysierten Sprachen in deinem Repository aufgeführt sind. Von {% data variables.product.prodname_codeql %} wird diese Matrix automatisch gefüllt, wenn du {% data variables.product.prodname_code_scanning %} einem Repository hinzufügst. Mithilfe der `language`-Matrix wird {% data variables.product.prodname_codeql %} dahin gehend optimiert, dass die einzelnen Analysen parallel ausgeführt werden. Aufgrund der Leistungsvorteile der Parallelisierung von Builds wird empfohlen, dass alle Workflows diese Konfiguration übernehmen. Weitere Informationen zu Matrizen findest du unter [Verwenden einer Matrix für deine Aufträge](/actions/using-jobs/using-a-matrix-for-your-jobs).

{% data reusables.code-scanning.specify-language-to-analyze %}

Wenn die `language`-Matrix vom Workflow verwendet wird, wird {% data variables.product.prodname_codeql %} hartcodiert, sodass nur die Sprachen in der Matrix analysiert werden. Um die Sprachen zu ändern, die du analysieren möchtest, bearbeite den Wert der Matrixvariablen. Du kannst eine Sprache entfernen, um zu verhindern, dass sie analysiert wird, oder du kannst eine Sprache hinzufügen, die beim Einrichten von {% data variables.product.prodname_code_scanning %} nicht im Repository vorhanden war. Wenn das Repository beispielsweise anfänglich nur JavaScript enthielt, als {% data variables.product.prodname_code_scanning %} eingerichtet wurde, und du später Python-Code hinzugefügt hast, musst du der Matrix `python` hinzufügen.

```yaml
jobs:
  analyze:
    name: Analyze
    ...
    strategy:
      fail-fast: false
      matrix:
        language: ['javascript', 'python']
```

Wenn dein Workflow keine Matrix mit der Bezeichnung `language` enthält, wird {% data variables.product.prodname_codeql %} so konfiguriert, dass die Analyse sequenziell ausgeführt wird. Wenn du keine Sprachen im Workflow angibst, erkennt {% data variables.product.prodname_codeql %} automatisch alle unterstützten Sprachen im Repository und versucht, diese zu analysieren. Wenn du ohne Verwendung einer Matrix auswählen möchtest, welche Sprachen analysiert werden sollen, kannst du den `languages`-Parameter unter der `init`-Aktion verwenden.

```yaml
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    languages: cpp, csharp, python
```
{% ifversion fpt or ghec %}
## Analysieren von Python-Abhängigkeiten

Bei auf GitHub gehosteten Runnern, die nur Linux verwenden, wird vom {% data variables.code-scanning.codeql_workflow %} versucht, Python-Abhängigkeiten automatisch zu installieren, sodass mehr Ergebnisse für die CodeQL-Analyse bereitgestellt werden. Du kannst dieses Verhalten steuern, indem du den Parameter `setup-python-dependencies` für die Aktion angibst, die vom Schritt „Initialisieren von CodeQL“ aufgerufen wird. Dieser Parameter ist standardmäßig auf `true` festgelegt.

-  Wenn das Repository Code enthält, der in Python geschrieben wurde, werden im Rahmen des Schritts „Initialisieren von CodeQL“ die erforderlichen Abhängigkeiten auf dem Runner installiert, der auf GitHub gehostetet wird. Wenn die automatische Installation erfolgreich verläuft, wird die Umgebungsvariable `CODEQL_PYTHON` von der Aktion auf die ausführbare Python-Datei festgelegt, die die Abhängigkeiten enthält.

- Wenn das Repository keine Python-Abhängigkeiten aufweist oder die Abhängigkeiten auf unerwartete Weise angegeben werden, erhältst du eine Warnung, und die Aktion wird mit den verbleibenden Aufträgen fortgesetzt. Die Aktion kann auch dann erfolgreich ausgeführt werden, wenn Probleme beim Interpretieren von Abhängigkeiten auftreten, aber die Ergebnisse sind dann möglicherweise unvollständig.

Alternativ dazu kannst du Python-Abhängigkeiten manuell auf jedem Betriebssystem installieren. Du musst `setup-python-dependencies` hinzufügen und auf `false` festlegen. Außerdem musst du `CODEQL_PYTHON` auf die ausführbare Python-Datei festlegen, die die Abhängigkeiten enthält, wie in diesem Workflowausschnitt gezeigt:

```yaml
jobs:
  CodeQL-Build:
    runs-on: ubuntu-latest
    permissions:
      security-events: write
      actions: read

    steps:
      - name: Checkout repository
        uses: {% data reusables.actions.action-checkout %}
      - name: Set up Python
        uses: {% data reusables.actions.action-setup-python %}
        with:
          python-version: '3.x'
      - name: Install dependencies
        run: |
          python -m pip install --upgrade pip
          if [ -f requirements.txt ];
          then pip install -r requirements.txt;
          fi
          # Set the `CODEQL-PYTHON` environment variable to the Python executable
          # that includes the dependencies
          echo "CODEQL_PYTHON=$(which python)" >> $GITHUB_ENV
      - name: Initialize CodeQL
        uses: {% data reusables.actions.action-codeql-action-init %}
        with:
          languages: python
          # Override the default behavior so that the action doesn't attempt
          # to auto-install Python dependencies
          setup-python-dependencies: false
```
{% endif %}

## Konfigurieren einer Kategorie für die Analyse

Verwende `category`, um zwischen mehreren Analysen für dasselbe Tool und denselben Commit zu unterscheiden, die jedoch für verschiedene Sprachen oder Teile des Codes ausgeführt werden. Die Kategorie, die du im Workflow angibst, wird in die SARIF-Ergebnisdatei aufgenommen.

Dieser Parameter ist besonders nützlich, wenn du mit Monorepos arbeitest und mehrere SARIF-Dateien für verschiedene Komponenten des Monorepo besitzen.

``` yaml
    - name: Perform CodeQL Analysis
      uses: {% data reusables.actions.action-codeql-action-analyze %}
      with:
        # Optional. Specify a category to distinguish between multiple analyses
        # for the same tool and ref. If you don't use `category` in your workflow,
        # GitHub will generate a default category name for you
        category: "my_category"
```

Wenn du keinen `category`-Parameter im Workflow angibst, wird von {% data variables.product.product_name %} ein Kategoriename für dich generiert, der auf dem Namen der Workflowdatei, die die Aktion auslöst, dem Aktionsnamen und allen Matrixvariablen basiert. Beispiel:
- Der Workflow `.github/workflows/codeql-analysis.yml` und die Aktion `analyze` erzeugen die Kategorie `.github/workflows/codeql.yml:analyze`.
- Der Workflow `.github/workflows/codeql-analysis.yml`, die Aktion `analyze` und die Matrixvariablen `{language: javascript, os: linux}` erzeugen die Kategorie `.github/workflows/codeql-analysis.yml:analyze/language:javascript/os:linux`.

Der `category`-Wert wird als Eigenschaft `<run>.automationDetails.id` in SARIF v2.1.0 angezeigt. Weitere Informationen findest du unter [SARIF-Unterstützung für {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/sarif-support-for-code-scanning#runautomationdetails-object).

Die Details des `runAutomationDetails`-Objekts in der SARIF-Datei werden, sofern enthalten, von der angegebenen Kategorie nicht überschrieben.

## Ausführen zusätzlicher Abfragen

{% data reusables.code-scanning.run-additional-queries %}

{% ifversion codeql-packs %}
### Verwenden von {% data variables.product.prodname_codeql %}-Abfragepaketen

{% data reusables.code-scanning.beta-codeql-packs-cli %}

Füge zum Hinzufügen mindestens eines {% data variables.product.prodname_codeql %}-Abfragepakets (Beta) im Abschnitt `uses: {% data reusables.actions.action-codeql-action-init %}` des Workflows einen `with: packs:`-Eintrag hinzu. In `packs` gibst du mindestens ein Paket an, das verwendet werden soll. Optional kannst du angeben, welche Version heruntergeladen werden soll. Wenn du keine Version angibst, wird die neueste Version heruntergeladen. Wenn du Pakete verwenden möchtest, die nicht öffentlich verfügbar sind, musst du die Umgebungsvariable `GITHUB_TOKEN` auf ein Geheimnis festlegen, das Zugriff auf die Pakete hat. Weitere Informationen findest du unter [Authentifizierung in einem Workflow](/actions/reference/authentication-in-a-workflow) und [Verschlüsselte Geheimnisse](/actions/reference/encrypted-secrets).

{% note %}

**Hinweis:** Bei Workflows, mit denen {% data variables.product.prodname_codeql %}-Datenbanken für mehrere Sprachen generiert werden, musst du stattdessen die {% data variables.product.prodname_codeql %}-Abfragepakete in einer Konfigurationsdatei angeben. Weitere Informationen findest du nachstehend unter [Angeben von {% data variables.product.prodname_codeql %}-Abfragepaketen](#specifying-codeql-query-packs).

{% endnote %}

Im folgenden Beispiel ist `scope` die Organisation oder das persönliche Konto, die/das das Paket veröffentlicht hat. Wenn der Workflow ausgeführt wird, werden die vier {% data variables.product.prodname_codeql %}-Abfragepakete von {% data variables.product.product_name %} und die Standardabfragen oder die Abfragesammlung für jede Packausführung heruntergeladen:
- Die neueste Version von `pack1` wird heruntergeladen, und alle Standardabfragen werden ausgeführt.
- Version 1.2.3 von `pack2` wird heruntergeladen, und alle Standardabfragen werden ausgeführt.
- Die neueste Version von `pack3`, die mit Version 3.2.1 kompatibel ist, wird heruntergeladen, und alle Abfragen werden ausgeführt.
- Version 4.5.6 von `pack4` wird heruntergeladen, und nur die in `path/to/queries` gefundenen Abfragen werden ausgeführt.

``` yaml
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    # Comma-separated list of packs to download
    packs: scope/pack1,scope/pack2@1.2.3,scope/pack3@~3.2.1,scope/pack4@4.5.6:path/to/queries
```

### Herunterladen von {% data variables.product.prodname_codeql %}-Paketen aus {% data variables.product.prodname_ghe_server %}

Wenn dein Workflow Pakete verwendet, die auf einer {% data variables.product.prodname_ghe_server %}-Installation veröffentlicht wurden, musst du deinem Workflow mitteilen, wo sie zu finden sind. Möglich ist dies über die `registries`-Eingabe der Aktion {% data reusables.actions.action-codeql-action-init %}. Diese Eingabe akzeptiert eine Liste mit den Eigenschaften `url`, `packages` und `token`, wie unten gezeigt.

```
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    registries: {% raw %}|
      # URL to the container registry, usually in this format
      - url: https://containers.GHEHOSTNAME1/v2/

        # List of package glob patterns to be found at this registry
        packages:
          - my-company/*
          - my-company2/*

        # Token, which should be stored as a secret
        token: ${{ secrets.GHEHOSTNAME1_TOKEN }}

      # URL to the default container registry
      - url: https://ghcr.io/v2/
        # Packages can also be a string
        packages: "*/*"
        token: ${{ secrets.GHCR_TOKEN }}

    {% endraw %}
```

Die Paketmuster in der Registrierungsliste werden in der angegebenen Reihenfolge überprüft, daher solltest das spezifischste Paketmuster in der Regel zuerst angeben. Bei den Werten für `token` muss es sich um ein {% data variables.product.pat_v1 %} handeln, das durch die GitHub-Instanz generiert wurde, von der du mit der Berechtigung `read:packages` einen Download durchführst.

Beachte das `|` nach dem Eigenschaftsnamen `registries`. Dies ist wichtig, da {% data variables.product.prodname_actions %}-Eingaben nur Zeichenfolgen akzeptieren können. Mit dem `|` wird der nachfolgende Text in eine Zeichenfolge umgewandelt, die später von der {% data reusables.actions.action-codeql-action-init %}-Aktion geparst wird.

### Verwenden von Abfragen in QL-Paketen
{% endif %} Füge zum Hinzufügen mindestens einer Abfrage innerhalb des Abschnitts `uses: {% data reusables.actions.action-codeql-action-init %}` des Workflows einen `with: queries:`-Eintrag hinzu. Wenn sich die Abfragen in einem privaten Repository befinden, verwende den Parameter `external-repository-token`, um ein Token anzugeben, das Zugriff zum Auschecken des privaten Repositorys hat.

``` yaml
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    queries: COMMA-SEPARATED LIST OF PATHS
    # Optional. Provide a token to access queries stored in private repositories.
    external-repository-token: {% raw %}${{ secrets.ACCESS_TOKEN }}{% endraw %}
```

Du kannst auch Abfragesammlungen im Wert von `queries` angeben. Abfragesammlungen sind Sammlungen von Abfragen, die in der Regel nach Zweck oder Sprache gruppiert sind.

{% data reusables.code-scanning.codeql-query-suites-explanation %}

{% ifversion codeql-packs %}
### Arbeiten mit benutzerdefinierten Konfigurationsdateien
{% endif %}

Wenn du auch eine Konfigurationsdatei für benutzerdefinierte Einstellungen verwendest, werden alle in deinem Workflow angegebenen zusätzlichen {% ifversion codeql-packs %}Pakete oder {% endif %}Abfragen anstelle der in der Konfigurationsdatei angegebenen Komponenten verwendet. Wenn du eine Kombination zusätzlicher {% ifversion codeql-packs %}Pakete oder {% endif %}Abfragen ausführen möchtest, musst du den Wert von {% ifversion codeql-packs %}`packs` oder {% endif %}`queries` im Workflow mit dem Symbol `+` als Präfix versehen. Weitere Informationen findest du unter [Erstellen einer benutzerdefinierten Konfigurationsdatei](#using-a-custom-configuration-file).

Im folgenden Beispiel wird mit dem Symbol `+` sichergestellt, dass die angegebenen zusätzlichen {% ifversion codeql-packs %}Pakete und {% endif %}Abfragen zusammen mit allen angegebenen Komponenten in der Konfigurationsdatei verwendet werden, auf die verwiesen wird.

``` yaml
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    config-file: ./.github/codeql/codeql-config.yml
    queries: +security-and-quality,octo-org/python-qlpack/show_ifs.ql@main
    {%- ifversion codeql-packs %}
    packs: +scope/pack1,scope/pack2@1.2.3,scope/pack3@4.5.6:path/to/queries
    {%- endif %}
```

## Verwenden einer benutzerdefinierten Konfigurationsdatei

Eine benutzerdefinierte Konfigurationsdatei ist eine alternative Möglichkeit, zusätzliche {% ifversion codeql-packs %}Pakete und {% endif %}Abfragen anzugeben, die ausgeführt werden sollen. Du kannst die Datei auch verwenden, um die Standardabfragen zu deaktivieren{% ifversion code-scanning-exclude-queries-from-analysis %}, bestimmte Abfragen auszuschließen oder einzuschließen{% endif %} und um festzulegen, welche Verzeichnisse während der Analyse überprüft werden sollen.

Verwende in der Workflowdatei den `config-file`-Parameter der `init`-Aktion, um den Pfad zur Konfigurationsdatei anzugeben, die du verwenden möchtest. In diesem Beispiel wird die Konfigurationsdatei _./.github/codeql/codeql-config.yml_ geladen.

``` yaml
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    config-file: ./.github/codeql/codeql-config.yml
```

{% data reusables.code-scanning.custom-configuration-file %}

Wenn sich die Konfigurationsdatei in einem externen privaten Repository befindet, verwende den `external-repository-token`-Parameter der `init`-Aktion, um ein Token anzugeben, das Zugriff auf das private Repository besitzt.

```yaml
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    external-repository-token: {% raw %}${{ secrets.ACCESS_TOKEN }}{% endraw %}
```

Die Einstellungen in der Konfigurationsdatei werden im YAML-Format geschrieben.

{% ifversion codeql-packs %}
### Angeben von {% data variables.product.prodname_codeql %}-Abfragepaketen

{% data reusables.code-scanning.beta-codeql-packs-cli %}

Du gibst {% data variables.product.prodname_codeql %}-Abfragepakete in einem Array an. Beachte, dass sich das Format von dem Format unterscheidet, das von der Workflowdatei verwendet wird.

{% raw %}
``` yaml
packs:
  # Use the latest version of 'pack1' published by 'scope'
  - scope/pack1
  # Use version 1.2.3 of 'pack2'
  - scope/pack2@1.2.3
  # Use the latest version of 'pack3' compatible with 3.2.1
  - scope/pack3@~3.2.1
  # Use pack4 and restrict it to queries found in the 'path/to/queries' directory
  - scope/pack4:path/to/queries
  # Use pack5 and restrict it to the query 'path/to/single/query.ql'
  - scope/pack5:path/to/single/query.ql
  # Use pack6 and restrict it to the query suite 'path/to/suite.qls'
  - scope/pack6:path/to/suite.qls
```
{% endraw %}

Das vollständige Format zum Angeben eines Abfragepakets ist `scope/name[@version][:path]`. `version` und `path` sind optional. `version` ist der SemVer-Versionsbereich. Wenn dieser fehlt, wird die neueste Version verwendet. Weitere Informationen zu SemVer-Bereichen findest du in der [SemVer-Dokumentation auf der npm-Website](https://docs.npmjs.com/cli/v6/using-npm/semver#ranges).

Wenn du über einen Workflow verfügst, mit dem mehrere {% data variables.product.prodname_codeql %}-Datenbanken generiert werden, kannst du in einer benutzerdefinierten Konfigurationsdatei beliebige auszuführende {% data variables.product.prodname_codeql %}-Abfragepakete angeben, indem du eine geschachtelte Zuordnung von Paketen verwendest.

{% raw %}
``` yaml
packs:
  # Use these packs for JavaScript and TypeScript analysis
  javascript:
    - scope/js-pack1
    - scope/js-pack2
  # Use these packs for Java and Kotlin analysis
  java:
    - scope/java-pack1
    - scope/java-pack2@v1.0.0
```
{% endraw %} {% endif %}

### Angeben zusätzlicher Abfragen

Du gibst zusätzliche Abfragen in einem `queries`-Array an. Jedes Element des Arrays enthält einen `uses`-Parameter mit einem Wert, der eine einzelne Abfragedatei, ein Verzeichnis mit Abfragedateien oder eine Abfragesammlungs-Definitionsdatei identifiziert.

``` yaml
queries:
  - uses: ./my-basic-queries/example-query.ql
  - uses: ./my-advanced-queries
  - uses: ./query-suites/my-security-queries.qls
```

Optional kannst du jedem Arrayelement einen Namen geben, wie in den folgenden Beispielkonfigurationsdateien gezeigt. Weitere Informationen zu zusätzlichen Abfragen findest du oben unter [Ausführen zusätzlicher Abfragen](#running-additional-queries).

### Deaktivieren der Standardabfragen

Wenn du nur benutzerdefinierte Abfragen ausführen möchtest, kannst du die Standardsicherheitsabfragen mit `disable-default-queries: true` deaktivieren.

{% ifversion code-scanning-exclude-queries-from-analysis %}
### Ausschließen bestimmter Abfragen aus der Analyse

Du kannst `exclude`- und `include`-Filter in deine benutzerdefinierte Konfigurationsdatei einfügen, um die Abfragen festzulegen, die du bei der Analyse ausschließen oder einbeziehen möchtest.

Dies ist nützlich, wenn du bestimmte Abfragen ausschließen möchtest:
- Bestimmte Abfragen aus den Standardsammlungen (`security`, `security-extended` und `security-and-quality`)
- Spezifische Abfragen, deren Ergebnisse für dich nicht relevant sind
- Alle Abfragen, die Warnungen und Empfehlungen generieren

Du kannst `exclude`-Filter ähnlich denen in der Konfigurationsdatei unten verwenden, um Abfragen auszuschließen, die du aus der Standardanalyse entfernen möchtest. In der folgenden Beispielkonfigurationsdatei werden sowohl die `js/redundant-assignment`- als auch die `js/useless-assignment-to-local`-Abfragen aus der Analyse ausgeschlossen.

```yaml
query-filters:
  - exclude:
      id: js/redundant-assignment
  - exclude:
      id: js/useless-assignment-to-local
```
Um die ID einer Abfrage zu ermitteln, kannst du in der Liste der Warnungen auf der Registerkarte „Sicherheit“ auf die jeweilige Warnung klicken. Dadurch wird die Seite mit den Details zur Warnung geöffnet. Das Feld `Rule ID` enthält die Abfrage-ID. Weitere Informationen über die Seite mit den Warnungsdetails findest du unter [Informationen zu {% data variables.product.prodname_code_scanning %}-Warnungen](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts#about-alert-details).

{% tip %}

**Tipps:**
- Die Reihenfolge der Filter ist wichtig. Die erste Filteranweisung, die nach den Anweisungen zu den Abfragen und Abfragepaketen angezeigt wird, bestimmt, ob die Abfragen standardmäßig ein- oder ausgeschlossen werden.
- Nachfolgende Anweisungen werden in der angegebenen Reihenfolge ausgeführt, und Anweisungen, die später in der Datei erscheinen, haben Vorrang vor den vorherigen Anweisungen.

{% endtip %}

Ein weiteres Beispiel zur Veranschaulichung der Verwendung dieser Filter findest du im Abschnitt [Beispielkonfigurationsdateien](#example-configuration-files).

Weitere Informationen zur Verwendung von `exclude`- und `include`-Filtern in deiner benutzerdefinierten Konfigurationsdatei findest du unter [Erstellen von {% data variables.product.prodname_codeql %}-Abfragesammlungen](https://codeql.github.com/docs/codeql-cli/creating-codeql-query-suites/#filtering-the-queries-in-a-query-suite). Informationen zu den Abfragemetadaten, nach denen du filtern kannst, findest du unter [Metadaten für CodeQL-Abfragen](https://codeql.github.com/docs/writing-codeql-queries/metadata-for-codeql-queries/).

{% endif %}

### Angeben der zu scannenden Verzeichnisse

Für die von {% data variables.product.prodname_codeql %} unterstützten interpretierten Sprachen (Python{% ifversion fpt or ghes > 3.3 or ghae > 3.3 %}, Ruby{% endif %} und JavaScript/TypeScript) kannst du {% data variables.product.prodname_code_scanning %} auf Dateien in bestimmten Verzeichnissen beschränken, indem du der Konfigurationsdatei ein `paths`-Array hinzufügst. Du kannst die Dateien in bestimmten Verzeichnissen von der Analyse ausschließen, indem du ein `paths-ignore`-Array hinzufügst.

``` yaml
paths:
  - src
paths-ignore:
  - src/node_modules
  - '**/*.test.js'
```

{% note %}

**Hinweis**:

* Die Schlüsselwörter `paths` und `paths-ignore`, die im Kontext der {% data variables.product.prodname_code_scanning %}-Konfigurationsdatei verwendet werden, sollten nicht mit den gleichen Schlüsselwörtern verwechselt werden, wenn diese für `on.<push|pull_request>.paths` in einem Workflow verwendet werden. Wenn sie zum Ändern von `on.<push|pull_request>` in einem Workflow verwendet werden, bestimmen sie, ob die Aktionen ausgeführt werden, wenn jemand Code in den angegebenen Verzeichnissen ändert. Weitere Informationen findest du unter [Workflowsyntax für {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore).
* Die Filtermusterzeichen `?`, `+`, `[`, `]` und `!` werden nicht unterstützt und werden literal wörtlich abgeglichen.
* `**`-Zeichen dürfen sich nur am Anfang oder Ende einer Zeile befinden oder müssen in Schrägstriche eingeschlossen sein, und du kannst `**` und andere Zeichen nicht mischen. Beispielsweise stellen die Zeichenfolgen `foo/**`, `**/foo` und `foo/**/bar` zulässige Syntax dar, `**foo` aber nicht. Du kannst jedoch einzelne Sternchen zusammen mit anderen Zeichen verwenden, wie im Beispiel gezeigt. Du musst alle Zeichenfolgen in Anführungszeichen einschließen, die ein `*`-Zeichen enthalten.

{% endnote %}

Wenn du bei kompilierten Sprachen {% data variables.product.prodname_code_scanning %} auf bestimmte Verzeichnisse in deinem Projekt beschränken möchtest, musst du die entsprechenden Buildschritte im Workflow angeben. Welche Befehle du verwenden musst, um ein Verzeichnis aus dem Buildvorgang auszuschließen, hängt von deinem Buildsystem ab. Weitere Informationen findest du unter [Konfigurieren des {% data variables.product.prodname_codeql %}-Workflows für kompilierte Sprachen](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language).

Du kannst kleine Teile eines Monorepositorys schnell analysieren, wenn du Code in bestimmten Verzeichnissen änderst. Du musst sowohl Verzeichnisse in den Buildschritten ausschließen als auch die Schlüsselwörter `paths-ignore` und `paths` für [`on.<push|pull_request>`](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore) in deinem Workflow verwenden.

### Beispielkonfigurationsdateien

{% data reusables.code-scanning.example-configuration-files %}

## Konfigurieren von {% data variables.product.prodname_code_scanning %} für kompilierte Sprachen

{% data reusables.code-scanning.autobuild-compiled-languages %} {% data reusables.code-scanning.analyze-go %}

{% data reusables.code-scanning.autobuild-add-build-steps %} Weitere Informationen zum Konfigurieren von {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} für kompilierte Sprachen findest du unter [Konfigurieren des {% data variables.product.prodname_codeql %}-Workflows für kompilierte Sprachen](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages).

## Hochladen von {% data variables.product.prodname_code_scanning %}-Daten in {% data variables.product.prodname_dotcom %}

You can display code analysis from a third-party tool in {% data variables.product.prodname_dotcom %} by adding the <code>upload-sarif</code> action to your workflow. Du kannst Codeanalysedaten mit der Aktion `upload-sarif` hochladen. Weitere Informationen findest du unter [Hochladen einer SARIF-Datei in GitHub](/code-security/secure-coding/uploading-a-sarif-file-to-github).
