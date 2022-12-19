---
title: Suchen und Anpassen von Aktionen
shortTitle: Finding and customizing actions
intro: 'Aktionen sind die Bausteine deiner Workflows. Ein Workflow kann Aktionen enthalten, die von der Community erstellt wurden. Du kannst aber auch eigene Aktionen direkt im Repository deiner Anwendung erstellen. In diesem Leitfaden erfährst du, wie du Aktionen ermitteln, verwenden und anpassen kannst.'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/using-github-marketplace-actions
  - /actions/automating-your-workflow-with-github-actions/using-actions-from-github-marketplace-in-your-workflow
  - /actions/getting-started-with-github-actions/using-actions-from-github-marketplace
  - /actions/getting-started-with-github-actions/using-community-workflows-and-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Fundamentals
ms.openlocfilehash: cb2b8bb24e044bd559b0823ec7b0e4be7be1becb
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147063794'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Übersicht

Die Aktionen, die du in deinem Workflow verwendest, können in den folgenden Instanzen definiert werden:

- Im selben Repository wie dem deiner Workflowdatei{% ifversion internal-actions %}
- In einem internen Repository mit dem selben Unternehmenskonto, das zum Gewähren des Zugriffs auf Workflows konfiguriert ist{% endif %}
- In einem beliebigen öffentlichen Repository
- in einem veröffentlichten Docker-Container-Image auf Docker Hub

{% data variables.product.prodname_marketplace %} ist eine zentrale Anlaufstelle für die Suche nach Aktionen, die von der {% data variables.product.prodname_dotcom %}-Community erstellt wurden. Auf der {% ifversion fpt or ghec %} [{% data variables.product.prodname_marketplace %}-Seite](https://github.com/marketplace/actions/) kannst du Aktionen nach Kategorie filtern. {% endif %}

{% data reusables.actions.enterprise-marketplace-actions %}

{% ifversion fpt or ghec %}

## Durchsuchen von Marketplace-Aktionen im Workflow-Editor

Direkt im Workflow-Editor deines Repositorys kannst du Aktionen suchen und durchstöbern und auch suchen. In der Seitenleiste kannst du nach einer bestimmten Aktion suchen, vorgestellte Aktionen anzeigen und vorgestellte Kategorien durchsuchen. Du kannst auch nach der Anzahl der Sterne schauen, die eine Aktion von der {% data variables.product.prodname_dotcom %}-Community erhalten hat.

1. Navigiere in deinem Repository zu der Workflow-Datei, die du bearbeiten möchtest.
1. Klicke zum Öffnen des Workflow-Editors oben rechts in der Dateiansicht auf {% octicon "pencil" aria-label="The edit icon" %}.
   ![Schaltfläche zum Bearbeiten der Workflowdatei](/assets/images/help/repository/actions-edit-workflow-file.png)
1. Rechts vom Editor befindet sich die Sidebar {% data variables.product.prodname_marketplace %} , um Aktionen zu durchsuchen. Bei Aktionen mit dem Badge {% octicon "verified" aria-label="The verified badge" %} wurde der*die Ersteller*in von {% data variables.product.prodname_dotcom %} als Partnerorganisation bestätigt.
   ![Seitenleiste für den Marketplace-Workflow](/assets/images/help/repository/actions-marketplace-sidebar.png)

## Hinzufügen einer Aktion zu deinem Workflow

Du kannst deinem Workflow eine Aktion hinzufügen, indem du in deiner Workflowdatei auf die Aktion verweist. 

Du kannst die Aktionen, auf die in deinen {% data variables.product.prodname_actions %}-Workflows verwiesen wird, im Abhängigkeitsdiagramm des Repositorys, in dem deine Workflows sich befinden, als Abhängigkeiten anzeigen. Weitere Informationen findest du unter [Informationen zum Abhängigkeitsdiagramm](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph).

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6269 %}

{% note %}

**Hinweis:** Aus Sicherheitsgründen werden Umleitungen von Aktionen von {% data variables.product.prodname_actions %} nicht mehr unterstützt. Dies bedeutet, dass bei einer Änderung des Besitzers bzw. der Besitzerin oder des Namens des Repositorys einer Aktion alle Workflows, die diese Aktion mit dem vorherigen Namen verwenden, fehlschlagen.

{% endnote %}

{% endif %}

### Hinzufügen einer Aktion vom {% data variables.product.prodname_marketplace %}

Die Listing-Seite einer Aktion enthält die Version der Aktion und die erforderliche Workflow-Syntax, um die Aktion zu benutzen. Damit dein Workflow auch bei Updates einer Aktion stabil bleibt, kannst du auf die zu verwendende Version der Aktion verweisen, indem du die Git- oder Docker-Tagnummer in deiner Workflowdatei angibst.

1. Navigiere zu der Aktion, die du in deinem Workflow verwenden möchtest.
1. Klicke unter „Installation“ auf {% octicon "clippy" aria-label="The edit icon" %}, um die Workflowsyntax zu kopieren.
   ![Anzeigen der Aktionslisting](/assets/images/help/repository/actions-sidebar-detailed-view.png)
1. Füge die Syntax als neuen Schritt in deinen Workflow ein. Weitere Informationen findest du unter [Workflowsyntax für {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idsteps).
1. Lege in deinem Workflow Eingaben fest, wenn diese für die Aktion erforderlich sind. Informationen zu den für eine Aktion erforderlichen Eingaben findest du unter [Verwenden von Eingaben und Ausgaben mit einer Aktion](/actions/learn-github-actions/finding-and-customizing-actions#using-inputs-and-outputs-with-an-action).

{% data reusables.dependabot.version-updates-for-actions %}

{% endif %}

### Hinzufügen einer Aktion aus demselben Repository

Wenn eine Aktion im selben Repository definiert wird, in dem deine Workflowdatei diese Aktion verwendet, kannst du entweder mit der `{owner}/{repo}@{ref}`- oder der `./path/to/dir`-Syntax in deiner Workflowdatei auf die Aktion verweisen.

Beispiel für die Struktur einer Repository-Datei:

```
|-- hello-world (repository)
|   |__ .github
|       └── workflows
|           └── my-first-workflow.yml
|       └── actions
|           |__ hello-world-action
|               └── action.yml
```

Beispiel einer Workflow-Datei:

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      # This step checks out a copy of your repository.
      - uses: {% data reusables.actions.action-checkout %}
      # This step references the directory that contains the action.
      - uses: ./.github/actions/hello-world-action
```

Die `action.yml`-Datei wird zum Bereitstellen von Metadaten für die Aktion verwendet. Unter [Metadatensyntax für GitHub Actions](/actions/creating-actions/metadata-syntax-for-github-actions) erfahre mehr über den Inhalt dieser Datei.

### Hinzufügen einer Aktion aus einem anderen Repository

Wenn eine Aktion in einem anderen Repository als deine Workflowdatei definiert ist, kannst du mit der `{owner}/{repo}@{ref}`-Syntax in deiner Workflowdatei auf diese Aktion verweisen.

Die Aktion muss in einem öffentlichen Repository{% ifversion internal-actions %} oder einem internen Repository gespeichert sein, das so konfiguriert ist, dass der Zugriff auf Workflows möglich ist. Weitere Informationen findest du unter [Freigeben von Aktionen und Workflows für dein Unternehmen](/actions/creating-actions/sharing-actions-and-workflows-with-your-enterprise).{% else %}.{% endif %}

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: {% data reusables.actions.action-setup-node %}
```

### Einen Container auf Docker Hub referenzieren

Wenn eine Aktion in einem veröffentlichen Docker-Containerimage auf Docker Hub definiert wird, musst du mit der `docker://{image}:{tag}`-Syntax in deiner Workflowdatei auf diese Aktion verweisen. Zum Schutz deines Codes und deiner Daten wird dringend empfohlen, die Integrität des Docker-Container-Images von Docker Hub zu verifizieren, bevor du es in deinen Workflow einfügst.

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: docker://alpine:3.8
```

Unter [Workflow zu „Docker-image.yml“](https://github.com/actions/starter-workflows/blob/main/ci/docker-image.yml) und [Erstellen einer Docker-Containeraktion](/articles/creating-a-docker-container-action) findest du einige Beispiele für Docker-Aktionen.


## Anwenden der Releaseverwaltung auf deine benutzerdefinierten Aktionen

Die Ersteller*innen einer Communityaktion können Tags, Branches oder SHA-Werte zum Verwalten der Releases der Aktion verwenden. Wie bei allen Abhängigkeiten solltest du die Version der zu verwendenden Aktion abhängig davon angeben, ob du mit automatischen Updates für die Aktion einverstanden bist.

Du legst die Version der Aktion in deiner Workflowdatei fest. Überprüfe die Dokumentation der Aktion, um Informationen zur Releaseverwaltung zu erhalten und zu erfahren, welches Tag, welcher Branch oder welcher SHA-Wert verwendet werden soll.

{% note %}

**Hinweis:** Es wird empfohlen, beim Verwenden von Aktionen von Drittanbietern einen SHA-Wert zu nutzen. Weitere Informationen findest du unter [Sicherheitshärtung für GitHub Actions](/actions/learn-github-actions/security-hardening-for-github-actions#using-third-party-actions).

{% endnote %}

### Verwenden von Tags

Mit Tags kannst du entscheiden, wann zwischen Haupt- und Nebenversionen gewechselt werden soll. Diese sind jedoch kurzlebiger und können von den Verantwortlichen verschoben oder gelöscht werden. In diesem Beispiel wird gezeigt, wie du eine Aktion verwenden kannst, die als `v1.0.1` getagged wurde:

```yaml
steps:
  - uses: actions/javascript-action@v1.0.1
```

### Verwenden von SHAs

Wenn du eine zuverlässigere Versionsverwaltung benötigst, solltest du den SHA-Wert verwenden, der der Version der Aktion zugeordnet ist. SHAs sind unveränderlich und daher zuverlässiger als Tags oder Branches. Wenn du diesen Ansatz verwendest, kannst du jedoch keine automatischen Updates für eine Aktion erhalten, einschließlich wichtiger Fehlerbehebungen und Sicherheitsupdates. Du musst den vollständigen SHA-Wert eines Commits verwenden, keinen abgekürzten Wert. In diesem Beispiel wird der SHA-Wert einer Aktion verwendet:

```yaml
steps:
  - uses: actions/javascript-action@172239021f7ba04fe7327647b213799853a9eb89
```

### Verwenden von Branches

Wenn du einen Zielbranch für die Aktion angibst, wird immer die Version ausgeführt, die sich aktuell auf diesem Branch befindet. Durch diesen Ansatz können Probleme entstehen, wenn ein Update für den Branch Breaking Changes enthält. In diesem Beispiel wird ein Branch namens `@main` verwendet:

```yaml
steps:
  - uses: actions/javascript-action@main
```

Weitere Informationen findest du unter [Verwenden der Releaseverwaltung für Aktionen](/actions/creating-actions/about-actions#using-release-management-for-actions).

## Verwenden von Eingaben und Ausgaben mit einer Aktion

Eine Aktion akzeptiert oder erfordert häufig Eingaben und generiert Ausgaben, die du verwenden kannst. Beispielsweise musst du bei einer Aktion einen Pfad zu einer Datei, den Namen einer Bezeichnung oder andere Daten angeben, die zur Aktionsverarbeitung verwendet werden.

Überprüfe die `action.yml`- oder `action.yaml`-Datei im Stammverzeichnis des Repositorys, um die Eingaben und Ausgaben einer Aktion anzuzeigen.

Bei `action.yml` definiert das Schlüsselwort `inputs` die erforderliche Eingabe namens `file-path` und enthält einen Standardwert, der verwendet wird, wenn sonst keiner angegeben wird. Das Schlüsselwort `outputs` definiert eine Ausgabe namens `results-file`, die angibt, wo die Ergebnisse zu finden sind.

```yaml
name: "Example"
description: "Receives file and generates output"
inputs:
  file-path: # id of input
    description: "Path to test script"
    required: true
    default: "test-file.js"
outputs:
  results-file: # id of output
    description: "Path to results file"
```

{% ifversion ghae %}

## Verwenden der Aktionen, die in {% data variables.product.prodname_ghe_managed %} enthalten sind

Standardmäßig kannst du die meisten offiziellen von {% data variables.product.prodname_dotcom %} erstellten Aktionen in {% data variables.product.prodname_ghe_managed %} verwenden. Weitere Informationen findest du unter [Verwenden von Aktionen in {% data variables.product.prodname_ghe_managed %}](/admin/github-actions/using-actions-in-github-ae).
{% endif %}

## Nächste Schritte

Weitere Informationen zu {% data variables.product.prodname_actions %} findest du unter [Wichtige Features von {% data variables.product.prodname_actions %}](/actions/learn-github-actions/essential-features-of-github-actions).
