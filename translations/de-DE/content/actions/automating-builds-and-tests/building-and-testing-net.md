---
title: Erstellen und Testen eines .NET-Projekts
intro: 'Du kannst einen Continuous-Integration-Workflow (CI) erstellen, um dein .NET-Projekt zu erstellen und zu testen.'
redirect_from:
  - /actions/guides/building-and-testing-net
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Build & test .NET
ms.openlocfilehash: eadb00516976159f2efffcaa04cb4b46471c527f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147063618'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Einführung

In dieser Anleitung erfährst du, wie du ein .NET-Paket erstellst, testest und veröffentlichst.

{% ifversion ghae %} Zum Erstellen und Testen eines .NET-Projekts auf {% data variables.product.prodname_ghe_managed %} benötigst du das .NET Core SDK. Von {% data reusables.actions.self-hosted-runners-software %} {% else %} {% data variables.product.prodname_dotcom %} gehostete Runner verfügen über einen Toolcache mit vorinstallierter Software, in dem das .NET Core SDK enthalten ist. Eine umfassende Liste mit aktueller Software und den vorinstallierten Versionen von .NET Core SDK findest du unter [Auf {% data variables.product.prodname_dotcom %}-gehosteten Runnern installierte Software](/actions/reference/specifications-for-github-hosted-runners).
{% endif %}

## Voraussetzungen

Du solltest bereits mit der YAML-Syntax vertraut sein und wissen, wie sie mit {% data variables.product.prodname_actions %} verwendet wird. Weitere Informationen findest du unter [Workflowsyntax für {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions).

Du solltest über grundlegende Kenntnisse in Bezug auf das .NET Core SDK verfügen. Weitere Informationen findest du unter [Erste Schritte mit .NET](https://dotnet.microsoft.com/learn).

## Verwenden des .NET-Starterworkflows

Von {% data variables.product.prodname_dotcom %} wird ein .NET-Starterworkflow bereitgestellt, der für die meisten .NET-Projekte verwendet werden kann. Wie du diesen Starterworkflow anpassen kannst, erfährst du anhand der Beispiele in diesem Leitfaden. Weitere Informationen findest du im [.NET-Starterworkflow](https://github.com/actions/setup-dotnet).

Für einen schnellen Einstieg fügst du den Starterworkflow zum Verzeichnis `.github/workflows` deines Repositorys hinzu.

```yaml
name: dotnet package

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    strategy:
      matrix:
        dotnet-version: ['3.0', '3.1.x', '5.0.x' ]

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Setup .NET Core SDK {% raw %}${{ matrix.dotnet-version }}{% endraw %}
        uses: {% data reusables.actions.action-setup-dotnet %}
        with:
          dotnet-version: {% raw %}${{ matrix.dotnet-version }}{% endraw %}
      - name: Install dependencies
        run: dotnet restore
      - name: Build
        run: dotnet build --configuration Release --no-restore
      - name: Test
        run: dotnet test --no-restore --verbosity normal
```

## Angeben einer .NET-Version

Verwende die Aktion `setup-dotnet`, um eine vorinstallierte Version des .NET Core SDK für einen von {% data variables.product.prodname_dotcom %} gehosteten Runner zu verwenden. Mit dieser Aktion wird im Toolcache der jeweiligen Runner nach einer bestimmten Version von .NET gesucht, und die erforderlichen Binärdateien werden zu `PATH` hinzugefügt. Diese Änderungen bleiben für den Rest des Auftrags beibehalten.

Die Aktion `setup-dotnet` wird als Methode zur Verwendung von .NET mit {% data variables.product.prodname_actions %} empfohlen, da damit ein konsistentes Verhalten bei verschiedenen Runnern und verschiedenen Version von .NET gewährleistet wird. Wenn du einen selbst gehosteten Runner verwendest, musst du .NET installieren und zu `PATH` hinzufügen. Weitere Informationen findest du unter der Aktion [`setup-dotnet`](https://github.com/marketplace/actions/setup-net-core-sdk).

### Verwenden mehrerer .NET-Versionen

```yaml
name: dotnet package

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    strategy:
      matrix:
        dotnet-version: [ '3.0', '3.1.x', '5.0.x' ]

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Setup dotnet {% raw %}${{ matrix.dotnet-version }}{% endraw %}
        uses: {% data reusables.actions.action-setup-dotnet %}
        with:
          dotnet-version: {% raw %}${{ matrix.dotnet-version }}{% endraw %}
      # You can test your matrix by printing the current dotnet version
      - name: Display dotnet version
        run: dotnet --version
```

### Verwenden einer bestimmten .NET-Version

Du kannst einen Auftrag so konfigurieren, dass eine bestimmte Version von .NET verwendet wird, z. B. `3.1.3`. Alternativ kannst du auch Syntax für semantische Versionierung verwenden, um die neuste Nebenversion abzurufen. In diesem Beispiel wird die neueste Nebenversion von .NET 3 verwendet.

```yaml
    - name: Setup .NET 3.x
      uses: {% data reusables.actions.action-setup-dotnet %}
      with:
        # Semantic version range syntax or exact version of a dotnet version
        dotnet-version: '3.x'
```

## Installieren von Abhängigkeiten

Auf von {% data variables.product.prodname_dotcom %} gehosteten Runnern ist der Paketmanager NuGet installiert. Du kannst die dotnet-CLI verwenden, um Abhängigkeiten aus der NuGet-Paketregistrierung zu installieren, bevor du deinen Code erstellst und testest. Mit dem folgenden YAML-Code wird beispielsweise das `Newtonsoft`-Paket installiert.

```yaml
steps:
- uses: {% data reusables.actions.action-checkout %}
- name: Setup dotnet
  uses: {% data reusables.actions.action-setup-dotnet %}
  with:
    dotnet-version: '3.1.x'
- name: Install dependencies
  run: dotnet add package Newtonsoft.Json --version 12.0.1
```

{% ifversion actions-caching %}

### Abhängigkeiten „cachen“ (zwischenspeichern)

Du kannst NuGet Abhängigkeiten mithilfe eines eindeutigen Schlüssels zwischenspeichern, mit dem du die Abhängigkeiten für zukünftige Workflows mit der [`cache`](https://github.com/marketplace/actions/cache)-Aktion wiederherstellen kannst. Mit dem folgenden YAML-Code wird beispielsweise das `Newtonsoft`-Paket installiert.

Weitere Informationen findest du unter [Zwischenspeichern von Abhängigkeiten zum Beschleunigen von Workflows](/actions/guides/caching-dependencies-to-speed-up-workflows).

```yaml
steps:
- uses: {% data reusables.actions.action-checkout %}
- name: Setup dotnet
  uses: {% data reusables.actions.action-setup-dotnet %}
  with:
    dotnet-version: '3.1.x'
- uses: {% data reusables.actions.action-cache %}
  with:
    path: ~/.nuget/packages
    # Look to see if there is a cache hit for the corresponding requirements file
    key: {% raw %}${{ runner.os }}-nuget-${{ hashFiles('**/packages.lock.json') }}
    restore-keys: |
      ${{ runner.os }}-nuget{% endraw %}
- name: Install dependencies
  run: dotnet add package Newtonsoft.Json --version 12.0.1
```

{% note %}

**Hinweis:** Je nach Anzahl der Abhängigkeiten ist es möglicherweise schneller, den Abhängigkeitscache zu verwenden. Bei Projekten mit vielen umfangreichen Abhängigkeiten sollte sich die Leistung erhöhen, da die zum Herunterladen erforderliche Zeit reduziert wird. Bei Projekten mit weniger Abhängigkeiten ist möglicherweise keine signifikante Leistungssteigerung, sondern aufgrund der Art und Weise, wie zwischengespeicherte Abhängigkeiten von NuGet installiert werden, sogar eine geringfügige Leistungsabnahme zu verzeichnen. Die Leistung variiert je nach Projekt.

{% endnote %}

{% endif %}

## Deinen Code bauen und testen

Du kannst die gleichen Befehle verwenden, die du auch lokal verwendest, um deinen Code zu bauen und zu testen. In diesem Beispiel wird veranschaulicht, wie die Befehle `dotnet build` und `dotnet test` in einem Auftrag verwendet werden:

```yaml
steps:
- uses: {% data reusables.actions.action-checkout %}
- name: Setup dotnet
  uses: {% data reusables.actions.action-setup-dotnet %}
  with:
    dotnet-version: '3.1.x'
- name: Install dependencies
  run: dotnet restore
- name: Build
  run: dotnet build
- name: Test with the dotnet CLI
  run: dotnet test
```

## Workflow-Daten als Artefakte paketieren

Nach Abschluss eines Workflows kannst du die resultierenden Artefakte für die Analyse hochladen. Zum Beispiel kann es notwendig sein, Logdateien, Core Dumps, Testergebnisse oder Screenshots zu speichern. Im folgenden Beispiel wird gezeigt, wie die Aktion `upload-artifact` zum Hochladen von Testergebnissen verwendet werden kann.

Weitere Informationen findest du unter [Speichern von Workflowdaten mithilfe von Artefakten](/github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts).

```yaml
name: dotnet package

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    strategy:
      matrix:
        dotnet-version: [ '3.0', '3.1.x', '5.0.x' ]

      steps:
        - uses: {% data reusables.actions.action-checkout %}
        - name: Setup dotnet
          uses: {% data reusables.actions.action-setup-dotnet %}
          with:
            dotnet-version: {% raw %}${{ matrix.dotnet-version }}{% endraw %}
        - name: Install dependencies
          run: dotnet restore
        - name: Test with dotnet
          run: dotnet test --logger trx --results-directory {% raw %}"TestResults-${{ matrix.dotnet-version }}"{% endraw %}
        - name: Upload dotnet test results
          uses: {% data reusables.actions.action-upload-artifact %}
          with:
            name: {% raw %}dotnet-results-${{ matrix.dotnet-version }}{% endraw %}
            path: {% raw %}TestResults-${{ matrix.dotnet-version }}{% endraw %}
          # Use always() to always run this step to publish test results when there are test failures
          if: {% raw %}${{ always() }}{% endraw %}
```

## In Paket-Registries veröffentlichen

Du kannst deinen Workflow so konfigurieren, dass das .NET-Paket in einer Paketregistrierung veröffentlicht wird, wenn deine CI-Tests bestanden werden. Du kannst Repositorygeheimnisse verwenden, um alle Token oder Anmeldeinformationen zu speichern, die zum Veröffentlichen deiner Binärdatei erforderlich sind. Im folgenden Beispiel wird ein Paket erstellt und mithilfe von `dotnet core cli` in {% data variables.product.prodname_registry %} veröffentlicht.

```yaml
name: Upload dotnet package

on:
  release:
    types: [created]

jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      packages: write
      contents: read
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: {% data reusables.actions.action-setup-dotnet %}
        with:
          dotnet-version: '3.1.x' # SDK Version to use.
          source-url: https://nuget.pkg.github.com/<owner>/index.json
        env:
          NUGET_AUTH_TOKEN: {% raw %}${{secrets.GITHUB_TOKEN}}{% endraw %}
      - run: dotnet build --configuration Release <my project>
      - name: Create the package
        run: dotnet pack --configuration Release <my project>
      - name: Publish the package to GPR
        run: dotnet nuget push <my project>/bin/Release/*.nupkg
```
