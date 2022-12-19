---
title: Grundlegende Features von GitHub Actions
shortTitle: Essential features
intro: '{% data variables.product.prodname_actions %} sind dafür konzipiert, dass du stabile und dynamische Automatisierungen erstellen kannst. In diesem Leitfaden wird gezeigt, wie du {% data variables.product.prodname_actions %}-Workflows erstellen kannst, die Umgebungsvariablen, benutzerdefinierte Skripts und vieles mehr enthalten.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Fundamentals
ms.openlocfilehash: 46a6a33928d9ff4587707972fc26de86c59f9ac6
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145069003'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Übersicht

Mit {% data variables.product.prodname_actions %} kannst du deine Workflows so anpassen, dass sie die individuellen Anforderungen deiner Anwendung und deines Teams erfüllen. In diesem Leitfaden werden einige der wichtigsten Anpassungstechniken erklärt, z. B. das Verwenden von Variablen, das Ausführen von Skripts und das Freigeben von Daten und Artefakten zwischen Aufträgen.

##  Verwenden von Variablen in deinen Workflows

{% data variables.product.prodname_actions %} enthält Standardumgebungsvariablen für jede Workflowausführung. Wenn du benutzerdefinierte Umgebungsvariablen verwenden musst, kannst du diese in deiner YAML-Workflowdatei festlegen. In diesem Beispiel wird veranschaulicht, wie du die benutzerdefinierten Variablen `POSTGRES_HOST` und `POSTGRES_PORT` erstellen kannst. Diese Variablen sind dann für das `node client.js`-Skript verfügbar.

```yaml
jobs:
  example-job:
      steps:
        - name: Connect to PostgreSQL
          run: node client.js
          env:
            POSTGRES_HOST: postgres
            POSTGRES_PORT: 5432
```

Weitere Informationen findest du unter [Verwenden von Umgebungsvariablen](/actions/configuring-and-managing-workflows/using-environment-variables).

## Hinzufügen von Skripts zu deinem Workflow

Mit Aktionen kannst du Skript- und Shellbefehle ausführen, die dann auf dem zugewiesenen Runner ausgeführt werden. In diesem Beispiel wird veranschaulicht, wie eine Aktion das `run`-Schlüsselwort verwenden kann, um `npm install -g bats` auf dem Runner auszuführen.

```yaml
jobs:
  example-job:
    steps:
      - run: npm install -g bats
```

Wenn du beispielsweise ein Skript als Aktion ausführst, kannst du das Skript in deinem Repository speichern und den Pfad und Shelltyp angeben.

```yaml
jobs:
  example-job:
    steps:
      - name: Run build script
        run: ./.github/scripts/build.sh
        shell: bash
```

Weitere Informationen findest du unter [Workflowsyntax für {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsrun).

## Freigeben von Daten zwischen Aufträgen

Wenn dein Auftrag Dateien generiert, die du für einen anderen Auftrag im selben Workflow freigeben möchtest, oder wenn du die Dateien zur späteren Verwendung speichern möchtest, kannst du sie in {% data variables.product.prodname_dotcom %} als _Artefakte_ speichern. Artefakte sind die Dateien, die erstellt werden, wenn du deinen Code erstellst und testest. Artefakte können beispielsweise Binär- oder Paketdateien, Testergebnisse, Screenshots oder Protokolldateien sein. Artefakte sind der Workflowausführung zugeordnet, in der sie erstellt wurden, und sie können in einem anderen Auftrag verwendet werden. {% data reusables.actions.reusable-workflow-artifacts %}

Du kannst beispielsweise eine Datei erstellen und sie dann als Artefakt hochladen.

```yaml
jobs:
  example-job:
    name: Save output
    steps:
      - shell: bash
        run: |
          expr 1 + 1 > output.log
      - name: Upload output file
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: output-log-file
          path: output.log
```

Du kannst die `actions/download-artifact`-Aktion verwenden, wenn du ein Artefakt aus einer separaten Workflowausführung herunterladen möchtest. Beispielsweise kannst du das Artefakt mit dem Namen `output-log-file` herunterladen.

```yaml
jobs:
  example-job:
    steps:
      - name: Download a single artifact
        uses: {% data reusables.actions.action-download-artifact %}
        with:
          name: output-log-file
```

Wenn du ein Artefakt aus derselben Workflowausführung herunterladen möchtest, sollte der Downloadauftrag den `needs: upload-job-name` angeben, damit er erst gestartet wird, wenn der Uploadauftrag abgeschlossen ist.

Weitere Informationen zu Artefakten findest du unter [Endgültiges Speichern von Workflowdaten mit Artefakten](/actions/configuring-and-managing-workflows/persisting-workflow-data-using-artifacts).

## Nächste Schritte

Weitere Informationen zu {% data variables.product.prodname_actions %} findest du unter [Verwalten komplexer Workflows](/actions/learn-github-actions/managing-complex-workflows).
