---
title: Verwenden der Abhängigkeitsübermittlungs-API
intro: "Mit der Abhängigkeitsübermittlungs-API kannst du Abhängigkeiten für Projekte übermitteln, z.\_B. die Abhängigkeiten, die gelöst werden, wenn ein Projekt erstellt oder kompiliert wird."
shortTitle: Dependency submission API
topics:
  - API
  - Dependency graph
  - Dependencies
  - REST
versions:
  feature: dependency-submission-api
ms.openlocfilehash: f81967a46763d299afd14727cd884a36cb0b3d9c
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880814'
---
{% data reusables.dependency-submission.dependency-submission-api-beta %}

## Informationen zur Abhängigkeitsübermittlungs-API

{% data reusables.dependency-submission.about-dependency-submission %}

Abhängigkeiten werden in Form einer Momentaufnahme an die Abhängigkeitsübermittlungs-API übermittelt. Eine Momentaufnahme ist eine Reihe von Abhängigkeiten, die einem Commit-SHA und anderen Metadaten zugeordnet sind, die den aktuellen Status deines Repositorys für einen Commit widerspiegeln. Weitere Informationen zur Abhängigkeitsübermittlungs-API findest du in der [REST-API-Dokumentation zur Abhängigkeitsübermittlung](/rest/dependency-graph/dependency-submission).

## Übermitteln von Abhängigkeiten zur Buildzeit

Du kannst die Abhängigkeitsübermittlungs-API in einem {% data variables.product.prodname_actions %}-Workflow verwenden, um beim Erstellen deines Projekts Abhängigkeiten dafür zu übermitteln. 

### Verwenden vordefinierter Aktionen

Am einfachsten lässt sich die Abhängigkeitsübermittlungs-API verwenden, indem du deinem Repository eine vordefinierte Aktion hinzuzufügst, die die Liste der Abhängigkeiten erfasst, in das erforderliche Momentaufnahmeformat konvertiert und an die API übermittelt. Aktionen, die diese Schritte für verschiedene Ökosysteme ausführen, sind auf {% data variables.product.prodname_marketplace %} verfügbar, und weitere Aktionen werden im Verlauf der Betaversion und darüber hinaus erstellt. Links zu den derzeit verfügbaren Aktionen findest du in der folgenden Tabelle:

Ökosystem | Aktion |
--- | --- |
Go | [Go-Abhängigkeitsübermittlung](https://github.com/actions/go-dependency-submission)

Der folgende Workflow für die [Go-Abhängigkeitsübermittlung](https://github.com/actions/go-dependency-submission) berechnet beispielsweise die Abhängigkeiten für ein Go-Buildziel (eine Go-Datei mit einer `main`-Funktion) und sendet die Liste an die Abhängigkeitsübermittlungs-API. 

```yaml

name: Go Dependency Submission
on:
  push:
    branches:
      - main
      
# The API requires write permission on the repository to submit dependencies
permissions:
  contents: write

# Envionment variables to configure Go and Go modules. Customize as necessary
env:
  GOPROXY: '' # A Go Proxy server to be used
  GOPRIVATE: '' # A list of modules are considered private and not requested from GOPROXY
jobs:
  go-action-detection:
    runs-on: ubuntu-latest
    steps:
      - name: 'Checkout Repository'
        uses: {% data reusables.actions.action-checkout %}
        
      - uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: ">=1.18.0"
          
      - name: Run snapshot action
        uses: @actions/go-dependency-submission@v1
        with:
            # Required: Define the repo path to the go.mod file used by the
            # build target
            go-mod-path: go-example/go.mod
            #
            # Optional. Define the repo path of a build target,
            # a file with a `main()` function.
            # If undefined, this action will collect all dependencies
            # used by all build targets for the module. This may
            # include Go dependencies used by tests and tooling.
            go-build-target: go-example/cmd/octocat.go

```
### Erstellen einer eigenen Aktion

Alternativ kannst du eine eigene Aktion schreiben, um Abhängigkeiten für dein Projekt zur Buildzeit zu übermitteln. Mit deinem Workflow sollen folgende Aktionen ausgeführt werden:

  1. Generieren einer Liste von Abhängigkeiten für dein Projekt.
  2. Übersetzen der Liste der Abhängigkeiten in das Momentaufnahmeformat, das von der Abhängigkeitsübermittlungs-API akzeptiert wird. Weitere Informationen zum Format findest du in den Textparametern für den API-Vorgang „Erstellen einer Repository-Momentaufnahme“ in der [REST-API-Dokumentation zur Abhängigkeitsübermittlung](/rest/dependency-graph/dependency-submission).
  3. Übermitteln der formatierten Liste der Abhängigkeiten an die Abhängigkeitsübermittlungs-API.

{% data variables.product.product_name %} verwaltet das [Dependency Submission Toolkit](https://github.com/github/dependency-submission-toolkit), eine TypeScript-Bibliothek, mit der du eine eigene GitHub-Aktion zum Übermitteln von Abhängigkeiten an die Abhängigkeitsübermittlungs-API erstellen kannst. Weitere Informationen zum Schreiben einer Aktion findest du unter [Erstellen von Aktionen](/actions/creating-actions).
