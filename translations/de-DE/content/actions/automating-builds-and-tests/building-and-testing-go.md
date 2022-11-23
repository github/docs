---
title: Erstellen und Testen von Go
intro: 'Du kannst einen Continuous Integration-Workflow (CI) erstellen, um dein Go-Projekt zu erstellen und zu testen.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CI
shortTitle: Build & test Go
ms.openlocfilehash: 590edc2af0b7f370e52b449f320bdc2a758450bc
ms.sourcegitcommit: 2e1852bcdd690cb66b9b5d69cb056a2bb2b9a6b4
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160850'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Einführung

In dieser Anleitung erfährst du, wie du ein Go-Paket erstellst, testest und veröffentlichst.

Von {% ifversion ghae %} {% data reusables.actions.self-hosted-runners-software %} {% else %} {% data variables.product.prodname_dotcom %} gehostete Runner verfügen über einen Toolcache mit vorinstallierter Software, in dem die Abhängigkeiten von Go enthalten sind. Eine umfassende Liste mit aktueller Software und den vorinstallierten Versionen von Go findest du unter [Informationen zu von {% data variables.product.prodname_dotcom %} gehosteten Runnern](/actions/using-github-hosted-runners/about-github-hosted-runners#preinstalled-software).
{% endif %}

## Voraussetzungen

Du solltest bereits mit der YAML-Syntax vertraut sein und wissen, wie sie mit {% data variables.product.prodname_actions %} verwendet wird. Weitere Informationen findest du unter [Workflowsyntax für {% data variables.product.prodname_actions %}](/actions/using-workflows/workflow-syntax-for-github-actions).

Du solltest über grundlegende Kenntnisse in Bezug auf die Go-Programmiersprache verfügen. Weitere Informationen findest du unter [Erste Schritte mit Go](https://golang.org/doc/tutorial/getting-started).

## Verwenden des Go-Starterworkflows

{% data variables.product.prodname_dotcom %} enthält einen Go-Starterworkflow, der die für die meisten Go-Projekte funktionieren sollte. Dieser Leitfaden enthält Beispiele, die du zum Anpassen des Starterworkflows verwenden kannst. Weitere Informationen findest du im [Go-Starterworkflow](https://github.com/actions/starter-workflows/blob/main/ci/go.yml).

Für einen schnellen Einstieg fügst du den Starterworkflow zum Verzeichnis `.github/workflows` deines Repositorys hinzu.

```yaml{:copy}
name: Go package

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}

      - name: Set up Go
        uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: 1.15

      - name: Build
        run: go build -v ./...

      - name: Test
        run: go test -v ./...
```

## Angeben einer Go-Version

Der einfachste Weg, eine Go-Version anzugeben, bietet die Aktion `setup-go` von {% data variables.product.prodname_dotcom %}. Weitere Informationen findest du unter der [`setup-go`-Aktion](https://github.com/actions/setup-go/).

Um eine vorinstallierte Version von Go auf einen von {% data variables.product.prodname_dotcom %} gehosteten Runner zu verwenden, musst du die relevante Version an die `go-version`-Eigenschaft der `setup-go`-Aktion übergeben. Mit dieser Aktion wird im Toolcache der jeweiligen Runner nach einer bestimmten Version von Go gesucht, und die erforderlichen Binärdateien werden zu `PATH` hinzugefügt. Diese Änderungen bleiben für den Rest des Auftrags beibehalten.

Die Aktion `setup-go` wird als Methode zur Verwendung von Go mit {% data variables.product.prodname_actions %} empfohlen, da damit ein konsistentes Verhalten bei verschiedenen Runnern und verschiedenen Version von Go gewährleistet werden kann. Wenn du einen selbstgehosteten Runner verwendest, musst du .NET installieren und zu `PATH` hinzufügen.

### Verwenden mehrerer Versionen von Go

```yaml{:copy}
name: Go

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    strategy:
      matrix:
        go-version: [ '1.14', '1.15', '1.16.x' ]

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Setup Go {% raw %}${{ matrix.go-version }}{% endraw %}
        uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: {% raw %}${{ matrix.go-version }}{% endraw %}
      # You can test your matrix by printing the current Go version
      - name: Display Go version
        run: go version
```

### Verwenden einer bestimmten Version von Go

Du kannst einen Auftrag so konfigurieren, dass eine bestimmte Version von Go verwendet wird, z. B. `1.16.2`. Alternativ kannst du auch Syntax für semantische Versionierung verwenden, um die neuste Nebenversion abzurufen. In diesem Beispiel wird das neueste Patchrelease von Go 1.16 verwendet:

```yaml{:copy}
      - name: Setup Go 1.16.x
        uses: {% data reusables.actions.action-setup-go %}
        with:
          # Semantic version range syntax or exact version of Go
          go-version: '1.16.x'
```

## Installieren von Abhängigkeiten

Du kannst `go get` zum Installieren von Abhängigkeiten verwenden:

```yaml{:copy}
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Setup Go
        uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: '1.16.x'
      - name: Install dependencies
        run: |
          go get .
          go get example.com/octo-examplemodule
          go get example.com/octo-examplemodule@v1.3.4
```

{% ifversion actions-caching %}

### Abhängigkeiten „cachen“ (zwischenspeichern)

Du kannst die Abhängigkeiten mithilfe der [Aktion `setup-go`](https://github.com/actions/setup-go) zwischenspeichern und wiederherstellen. Standardmäßig ist die Zwischenspeicherung deaktiviert, du kannst jedoch den `cache`-Parameter auf `true` festlegen, um sie zu aktivieren.

Wenn die Zwischenspeicherung aktiviert ist, sucht die `setup-go`-Aktion nach der Abhängigkeitsdatei `go.sum` im Repositorystamm und verwendet den Hash der Abhängigkeitsdatei als Teil des Cacheschlüssels.

```yaml{:copy}
      - name: Setup Go
        uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: '1.16.x'
          cache: true
```

Alternativ kannst du den `cache-dependency-path`-Parameter in Fällen verwenden, in denen mehrere Abhängigkeitsdateien verwendet werden, oder wenn sie sich in verschiedenen Unterverzeichnissen befinden.

```yaml{:copy}
      - uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: '1.17'
          cache: true
          cache-dependency-path: subdir/go.sum
```

Wenn du eine benutzerdefinierte Anforderung verwendest oder genauere Steuerungsmöglichkeiten zum Zwischenspeichern benötigst, kannst du die [Aktion `cache`](https://github.com/marketplace/actions/cache) verwendest. Weitere Informationen findest du unter [Zwischenspeichern von Abhängigkeiten zum Beschleunigen von Workflows](/actions/using-workflows/caching-dependencies-to-speed-up-workflows).

{% endif %}

## Deinen Code bauen und testen

Du kannst die gleichen Befehle verwenden, die du auch lokal verwendest, um deinen Code zu bauen und zu testen. In diesem Beispielworkflow wird veranschaulicht, wie die Befehle `go build` und `go test` in einem Auftrag verwendet werden:

```yaml{:copy}
name: Go
on: [push]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Setup Go
        uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: '1.16.x'
      - name: Install dependencies
        run: go get .
      - name: Build
        run: go build -v ./...
      - name: Test with the Go CLI
        run: go test
```

## Workflow-Daten als Artefakte paketieren

Nach Abschluss eines Workflows kannst du die resultierenden Artefakte für die Analyse hochladen. Zum Beispiel kann es notwendig sein, Logdateien, Core Dumps, Testergebnisse oder Screenshots zu speichern. Im folgenden Beispiel wird gezeigt, wie die Aktion `upload-artifact` zum Hochladen von Testergebnissen verwendet werden kann.

Weitere Informationen findest du unter [Speichern von Workflowdaten als Artefakte](/actions/using-workflows/storing-workflow-data-as-artifacts).

```yaml{:copy}
name: Upload Go test results

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    strategy:
      matrix:
        go-version: [ '1.14', '1.15', '1.16.x' ]

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Setup Go
        uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: {% raw %}${{ matrix.go-version }}{% endraw %}
      - name: Install dependencies
        run: go get .
      - name: Test with Go
        run: go test -json > TestResults-{% raw %}${{ matrix.go-version }}{% endraw %}.json
      - name: Upload Go test results
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: Go-results-{% raw %}${{ matrix.go-version }}{% endraw %}
          path: TestResults-{% raw %}${{ matrix.go-version }}{% endraw %}.json
```
