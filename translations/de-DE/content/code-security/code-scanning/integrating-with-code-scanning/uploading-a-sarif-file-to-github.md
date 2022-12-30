---
title: Hochladen einer SARIF-Datei in GitHub
shortTitle: Upload a SARIF file
intro: '{% data reusables.code-scanning.you-can-upload-third-party-analysis %}'
permissions: 'People with write permissions to a repository can upload {% data variables.product.prodname_code_scanning %} data generated outside {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/managing-security-vulnerabilities/uploading-a-code-scanning-analysis-to-github
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/uploading-a-sarif-file-to-github
  - /code-security/secure-coding/uploading-a-sarif-file-to-github
  - /code-security/secure-coding/integrating-with-code-scanning/uploading-a-sarif-file-to-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Integration
  - Actions
  - Repositories
  - CI
  - SARIF
ms.openlocfilehash: 3def104e487f54e2c48d462d1dcfe8bab63c6fa3
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/11/2022
ms.locfileid: '148161161'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning %}

## Informationen zu SARIF-Dateiuploads für {% data variables.product.prodname_code_scanning %}

{% data variables.product.prodname_dotcom %} erstellt {% data variables.product.prodname_code_scanning %}-Warnungen in einem Repository mithilfe von Informationen aus den SARIF-Dateien (Static Analysis Results Interchange Format). SARIF-Dateien können mithilfe der API oder {% data variables.product.prodname_actions %} in ein Repository hochgeladen werden. Weitere Informationen findest du unter [Verwalten von {% data variables.product.prodname_code_scanning %}-Warnungen für dein Repository](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository).

Du kannst SARIF-Dateien mit vielen Sicherheitstesttools für statische Analysen generieren, einschließlich {% data variables.product.prodname_codeql %}. Für die Ergebnisse muss SARIF Version 2.1.0 verwendet werden. Weitere Informationen findest du unter [SARIF-Unterstützung für {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/sarif-support-for-code-scanning).

Du kannst die Ergebnisse mit {% data variables.product.prodname_actions %}, der {% data variables.product.prodname_code_scanning %}-API,{% ifversion codeql-runner-supported %} dem {% data variables.code-scanning.codeql_runner %}{% endif %} oder der {% data variables.product.prodname_codeql_cli %} hochladen. Die beste Uploadmethode hängt davon ab, wie du die SARIF-Datei generierst, z. B. ob du Folgendes verwendest:

- Wenn du {% data variables.product.prodname_actions %} zum Ausführen der {% data variables.product.prodname_codeql %}-Aktion verwendest, ist keine weitere Aktion erforderlich. Durch die {% data variables.product.prodname_codeql %}-Aktion wird die SARIF-Datei automatisch hochgeladen, wenn die Analyse abgeschlossen ist.
- Wenn du {% data variables.product.prodname_actions %} verwendest, um ein mit SARIF kompatibles Analysetool auszuführen, kannst du den Workflow aktualisieren, um mit einem finalen Schritt die Ergebnisse hochzuladen (siehe unten).
 - Wenn du die {% data variables.product.prodname_codeql_cli %} zum Ausführen von {% data variables.product.prodname_code_scanning %} auf deinem CI-System verwendest, kannst du die CLI verwenden, um Ergebnisse in {% data variables.product.prodname_dotcom %} hochzuladen (weitere Informationen unter [Installieren der {% data variables.product.prodname_codeql_cli %} auf deinem CI-System](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system)).{% ifversion codeql-runner-supported %}
- {% data variables.code-scanning.codeql_runner %} wird verwendet, um das {% data variables.product.prodname_code_scanning %} in deinem CI-System auszuführen. Standardmäßig lädt der Runner automatisch die Ergebnisse nach Fertigstellung auf {% data variables.product.prodname_dotcom %} hoch. Falls du den automatischen Upload blockierst: Wenn du bereit bist, Ergebnisse hochzuladen, kannst du den Befehl `upload` verwenden (weitere Informationen findest du unter [Ausführen von {% data variables.code-scanning.codeql_runner %} auf deinem CI-System](/code-security/secure-coding/running-codeql-runner-in-your-ci-system)).{% endif %}
- Wenn du ein Tool verwendest, das Ergebnisse als Artefakte außerhalb deines Repositorys generiert, kannst du die {% data variables.product.prodname_code_scanning %}-API verwenden, um die Datei hochzuladen (weitere Informationen findest du unter [Hochladen einer Analyse als SARIF-Daten](/rest/reference/code-scanning#upload-an-analysis-as-sarif-data)).

{% data reusables.code-scanning.not-available %}

## Hochladen einer {% data variables.product.prodname_code_scanning %}-Analyse mit {% data variables.product.prodname_actions %}

du benötigst einen Workflow, wenn du {% data variables.product.prodname_actions %} verwenden möchtest, um eine SARIF-Datei eines Drittanbieters in ein Repository hochzuladen. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_actions %}](/actions/learn-github-actions).

In deinem Workflow muss die Aktion `upload-sarif` verwendet werden, die Teil des Repositorys `github/codeql-action` ist. Sie enthält Eingabeparameter, die du zum Konfigurieren des Uploads verwenden kannst. Die wichtigsten Eingabeparameter, die du verwendest, sind folgende:

- Mit `sarif-file` wird die Datei oder das Verzeichnis der SARIF-Dateien zum Hochladen konfiguriert. Das Verzeichnis oder der Dateipfad ist relativ zum Stammverzeichnis des Repositorys.
- Mit `category` (optional) wird eine Kategorie für Ergebnisse in der SARIF-Datei zugewiesen. So kannst du denselben Commit auf mehrere Arten analysieren und die Ergebnisse mithilfe der {% data variables.product.prodname_code_scanning %}-Ansichten in {% data variables.product.prodname_dotcom %} überprüfen. Du kannst z. B. eine Analyse mithilfe mehrerer Tools durchführen. In Monorepos kannst du verschiedene Slices des Repositorys basierend auf der Teilmenge geänderter Dateien analysieren.

Weitere Informationen findest du unter: [`upload-sarif`-Aktion](https://github.com/github/codeql-action/tree/{% ifversion actions-node16-action %}v2{% else %}v1{% endif %}/upload-sarif).

Die Aktion `upload-sarif` kann so konfiguriert werden, dass sie ausgeführt wird, wenn das Ereignis `push` und das Ereignis `scheduled` auftreten. Weitere Informationen zu {% data variables.product.prodname_actions %}-Ereignissen findest du unter [Ereignisse, die Workflows auslösen](/actions/reference/events-that-trigger-workflows).

Wenn deine SARIF-Datei keine `partialFingerprints` enthält, berechnet die `upload-sarif`-Aktion das `partialFingerprints`-Feld für dich und versucht, doppelte Warnungen zu verhindern. Von {% data variables.product.prodname_dotcom %} können `partialFingerprints` nur erstellt werden, wenn das Repository sowohl die SARIF-Datei als auch den Quellcode enthält, der in der statischen Analyse verwendet wird. Weitere Informationen zum Verhindern doppelter Warnungen findest du unter [Informationen zur SARIF-Unterstützung für die Codeüberprüfung](/code-security/secure-coding/sarif-support-for-code-scanning#providing-data-to-track-code-scanning-alerts-across-runs).

{% data reusables.code-scanning.upload-sarif-alert-limit %}

### Beispielworkflow für SARIF-Dateien, die außerhalb eines Repositorys generiert wurden

Du kannst einen neuen Workflow erstellen, der SARIF-Dateien hochlädt, nachdem du sie in dein Repository committet hast. Dies ist nützlich, wenn die SARIF-Datei als Artefakt außerhalb deines Repositorys generiert wird.

Dieser Beispielworkflow wird jedes Mal ausgeführt, wenn Commits in das Repository gepusht werden. Die Aktion verwendet die `partialFingerprints`-Eigenschaft, um zu bestimmen, ob Änderungen aufgetreten sind. Zusätzlich zur Ausführung beim Pushen von Commits wird die Ausführung des Workflows ein Mal pro Woche geplant. Weitere Informationen findest du unter [Ereignisse, die Workflows auslösen](/actions/reference/events-that-trigger-workflows).

Dieser Workflow lädt die `results.sarif`-Datei hoch, die sich im Stammverzeichnis des Repositorys befindet. Weitere Informationen zum Erstellen einer Workflowdatei findest du unter [Informationen zu {% data variables.product.prodname_actions %}](/actions/learn-github-actions).

Alternativ dazu kannst du diesen Workflow auch ändern, um ein Verzeichnis mit SARIF-Dateien hochzuladen. Beispielsweise kannst du alle SARIF-Dateien in einem Verzeichnis im Stammverzeichnis deines Repositorys mit dem Namen `sarif-output` platzieren und den Eingabeparameter `sarif_file` der Aktion auf `sarif-output` festlegen. Wenn du ein Verzeichnis hochlädst, muss jede SARIF-Datei eine eindeutige `runAutomationDetails.id` zum Definieren der Kategorie für die Ergebnisse enthalten. Weitere Informationen findest du unter: [`runAutomationDetails`-Objekt](/code-security/code-scanning/integrating-with-code-scanning/sarif-support-for-code-scanning#runautomationdetails-object).

```yaml
name: "Upload SARIF"

# Run workflow each time code is pushed to your repository and on a schedule.
# The scheduled workflow runs every Thursday at 15:45 UTC.
on:
  push:
  schedule:
    - cron: '45 15 * * 4'

jobs:
  build:
    runs-on: ubuntu-latest
    permissions:
      # required for all workflows
      security-events: write
      # only required for workflows in private repositories
      actions: read
      contents: read
    steps:
      # This step checks out a copy of your repository.
      - name: Checkout repository
        uses: {% data reusables.actions.action-checkout %}
      - name: Upload SARIF file
        uses: {% data reusables.actions.action-codeql-action-upload-sarif %}
        with:
          # Path to SARIF file relative to the root of the repository
          sarif_file: results.sarif
          # Optional category for the results
          # Used to differentiate multiple results for one commit
          category: my-analysis-tool
```

### Beispielworkflow, mit dem das ESLint-Analysetool ausgeführt wird

Wenn du die SARIF-Datei eines Drittanbieters als Teil eines CI-Workflows (Continuous Integration) generierst, kannst du die `upload-sarif`-Aktion als Schritt nach dem Ausführen der CI-Tests hinzufügen. Wenn du noch keinen CI-Workflow hast, kannst du einen mit einer {% data variables.product.prodname_actions %}-Vorlage erstellen. Weitere Informationen findest du in der [Schnellstartanleitung für {% data variables.product.prodname_actions %}](/actions/quickstart).

Dieser Beispielworkflow wird jedes Mal ausgeführt, wenn Commits in das Repository gepusht werden. Die Aktion verwendet die `partialFingerprints`-Eigenschaft, um zu bestimmen, ob Änderungen aufgetreten sind. Zusätzlich zur Ausführung beim Pushen von Commits wird die Ausführung des Workflows ein Mal pro Woche geplant. Weitere Informationen findest du unter [Ereignisse, die Workflows auslösen](/actions/reference/events-that-trigger-workflows).

Der Workflow zeigt ein Beispiel für das Ausführen des Analysetools ESLint für statische Analysen als Schritt in einem Workflow. Der `Run ESLint`-Schritt führt das ESLint-Tool aus und gibt die `results.sarif`-Datei aus. Anschließend wird in dem Workflow die Datei `results.sarif` mithilfe der Aktion `upload-sarif` in {% data variables.product.prodname_dotcom %} hochgeladen. Weitere Informationen zum Erstellen einer Workflowdatei findest du unter [Einführung in GitHub Actions](/actions/learn-github-actions/introduction-to-github-actions).

```yaml
name: "ESLint analysis"

# Run workflow each time code is pushed to your repository and on a schedule.
# The scheduled workflow runs every Wednesday at 15:45 UTC.
on:
  push:
  schedule:
    - cron: '45 15 * * 3'

jobs:
  build:
    runs-on: ubuntu-latest
    permissions:
      # required for all workflows
      security-events: write
      # only required for workflows in private repositories
      actions: read
      contents: read
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Run npm install
        run: npm install
      # Runs the ESlint code analysis
      - name: Run ESLint
        # eslint exits 1 if it finds anything to report
        run: node_modules/.bin/eslint build docs lib script spec-main -f node_modules/@microsoft/eslint-formatter-sarif/sarif.js -o results.sarif || true
      # Uploads results.sarif to GitHub repository using the upload-sarif action
      - uses: {% data reusables.actions.action-codeql-action-upload-sarif %}
        with:
          # Path to SARIF file relative to the root of the repository
          sarif_file: results.sarif
```

## Weiterführende Themen

- [Workflowsyntax für {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions)
- [Workflowverlauf anzeigen](/actions/managing-workflow-runs/viewing-workflow-run-history)
- [Informationen zu {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} auf dem CI-System](/code-security/secure-coding/about-codeql-code-scanning-in-your-ci-system)
- [Hochladen einer Analyse als SARIF-Daten](/rest/reference/code-scanning#upload-an-analysis-as-sarif-data)
