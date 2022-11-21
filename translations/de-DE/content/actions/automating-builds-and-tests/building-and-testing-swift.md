---
title: Erstellen und Testen eines Swift-Projekts
intro: 'Du kannst einen Continuous-Integration-Workflow (CI) erstellen, um dein Swift-Projekt zu erstellen und zu testen.'
redirect_from:
  - /actions/guides/building-and-testing-swift
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CI
  - Swift
shortTitle: Build & test Swift
ms.openlocfilehash: 5717f9c7a939d2347ea5a49458002185c3ec07eb
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '147408995'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Einführung

Dieser Leitfaden zeigt dir, wie du ein Swift-Paket erstellen und testen kannst.

{% ifversion ghae %} Damit du dein Swift-Projekt auf {% data variables.product.prodname_ghe_managed %} erstellen und testen kannst, sind Swift-Abhängigkeiten erforderlich. {% data reusables.actions.self-hosted-runners-software %} {% else %}{% data variables.product.prodname_dotcom %}-gehostete Runner haben einen Toolscache mit vorinstallierter Software, und die Ubuntu- und macOS-Runner enthalten die Abhängigkeiten zum Erstellen von Swift-Paketen. Eine vollständige Liste der aktuellen Software und der vorinstallierten Versionen von Swift und Xcode findest du unter [Informationen zu GitHub-gehosteten Runnern](/actions/using-github-hosted-runners/about-github-hosted-runners#supported-software).{% endif %}

## Voraussetzungen

Du solltest bereits mit der YAML-Syntax vertraut sein und wissen, wie sie mit {% data variables.product.prodname_actions %} verwendet wird. Weitere Informationen findest du unter [Workflowsyntax für {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions).

Du solltest grundlegende Kenntnisse über Swift-Pakete besitzen. Weitere Informationen findest du in der Apple-Entwicklerdokumentation unter [Swift-Pakete](https://developer.apple.com/documentation/swift_packages).

## Verwenden des Swift-Starterworkflows

Von {% data variables.product.prodname_dotcom %} wird ein Swift-Starterworkflow bereitgestellt, der für die meisten Swift-Projekte verwendet werden kann. Wie du diesen Starterworkflow anpassen kannst, erfährst du anhand der Beispiele in diesem Leitfaden. Weitere Informationen findest du im [Swift-Starterworkflow](https://github.com/actions/starter-workflows/blob/main/ci/swift.yml).

Für einen schnellen Einstieg füge den Starterworkflow zum Verzeichnis `.github/workflows` deines Repositorys hinzu.

```yaml{:copy}
name: Swift

on: [push]

jobs:
  build:

    runs-on: macos-latest

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Build
        run: swift build
      - name: Run tests
        run: swift test
```

## Angeben einer Swift-Version

Verwende die Aktion `fwal/setup-swift`, um eine vorinstallierte Swift-Version auf einem von {% data variables.product.prodname_dotcom %} gehosteten Runner zu verwenden. Mit dieser Aktion wird im Toolcache der jeweiligen Runner nach einer bestimmten Version von Swift gesucht, und die erforderlichen Binärdateien werden `PATH` hinzugefügt. Diese Änderungen werden für den Rest eines Auftrags beibehalten. Weitere Informationen findest du unter der Aktion [`fwal/setup-swift`](https://github.com/marketplace/actions/setup-swift).

Wenn du einen selbstgehosteten Runner verwendest, musst du deine gewünschten Swift Versionen installieren und diese `PATH` hinzufügen.

Die folgenden Beispiele veranschaulichen die Verwendung der `fwal/setup-swift`-Aktion.

### Verwenden mehrerer Swift-Versionen

Du kannst deinen Auftrag so konfigurieren, dass mehrere Versionen von Swift in einer Matrix verwendet werden.

```yaml{:copy}

{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}


name: Swift

on: [push]

jobs:
  build:
    name: {% raw %}Swift ${{ matrix.swift }} on ${{ matrix.os }}{% endraw %}
    strategy:
      matrix:
        os: [ubuntu-latest, macos-latest]
        swift: ["5.2", "5.3"]
    runs-on: {% raw %}${{ matrix.os }}{% endraw %}
    steps:
      - uses: fwal/setup-swift@2040b795e5c453c3a05fcb8316496afc8a74f192
        with:
          swift-version: {% raw %}${{ matrix.swift }}{% endraw %}
      - uses: {% data reusables.actions.action-checkout %}
      - name: Build
        run: swift build
      - name: Run tests
        run: swift test
```

### Verwenden einer einzelnen bestimmten Swift-Version

Du kannst deinen Auftrag so konfigurieren, dass eine einzelne bestimmte Version von Swift verwendet wird, z. B. `5.3.3`.

{% raw %}
```yaml{:copy}
steps:
  - uses: fwal/setup-swift@2040b795e5c453c3a05fcb8316496afc8a74f192
    with:
      swift-version: "5.3.3"
  - name: Get swift version
    run: swift --version # Swift 5.3.3
```
{% endraw %}

## Deinen Code bauen und testen

Du kannst dieselben Befehle verwenden, die du auch lokal verwendest, um deinen Code mit Swift zu erstellen und zu testen. In diesem Beispiel wird veranschaulicht, wie die Befehle `swift build` und `swift test` in einem Auftrag verwendet werden:

```yaml{:copy}
steps:
  - uses: {% data reusables.actions.action-checkout %}
  - uses: fwal/setup-swift@2040b795e5c453c3a05fcb8316496afc8a74f192
    with:
      swift-version: "5.3.3"
  - name: Build
    run: swift build
  - name: Run tests
    run: swift test
```
