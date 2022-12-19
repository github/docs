---
title: Erstellen und Testen von Node.js-Code
intro: 'Du kannst einen CI-Workflow (Continuous Integration) erstellen, um dein Node.js-Projekt zu erstellen und zu testen.'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/using-nodejs-with-github-actions
  - /actions/language-and-framework-guides/using-nodejs-with-github-actions
  - /actions/guides/building-and-testing-nodejs
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CI
  - Node
  - JavaScript
shortTitle: Build & test Node.js
ms.openlocfilehash: 25e44f1454387a84dd198ea9998d1ebc2f94cfe7
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '146179023'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Einführung

Diese Anleitung zeigt Dir, wie du einen Workflow für fortlaufende Integration (CI) erstellen kannst, der Node.js-Code baut und testet. Wenn deine CI-Tests erfolgreich durchlaufen, kannst du deinen Code deployen (bereitstellen) oder ein Paket veröffentlichen.

## Voraussetzungen

Wir empfehlen, dass du ein grundlegendes Verständnis von Node.js, YAML, Workflowkonfigurations-Optionen und die Erstellung einer Workflow-Datei hast. Weitere Informationen finden Sie unter

- [Informationen zu {% data variables.product.prodname_actions %}](/actions/learn-github-actions)
- [Erste Schritte mit Node.js](https://nodejs.org/en/docs/guides/getting-started-guide/)

{% data reusables.actions.enterprise-setup-prereq %}

## Verwenden des Node.js-Starterworkflows

{% data variables.product.prodname_dotcom %} bietet einen Node.js-Starterworkflow, der für die meisten Node.js-Projekte funktionieren wird. Dieser Leitfaden enthält npm- und Yarn-Beispiele, mit denen du den Starterworkflow anpassen kannst. Weitere Informationen findest du unter [Node.js-Starterworkflow](https://github.com/actions/starter-workflows/blob/main/ci/node.js.yml).

Für einen schnellen Einstieg füge den Starterworkflow zum Verzeichnis `.github/workflows` deines Repositorys hinzu. Beim nachstehenden Workflow wird davon ausgegangen, dass der Standardbranch für dein Repository `main` lautet.

```yaml{:copy}
name: Node.js CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [10.x, 12.x, 14.x, 15.x]

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Use Node.js {% raw %}${{ matrix.node-version }}{% endraw %}
        uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: {% raw %}${{ matrix.node-version }}{% endraw %}
      - run: npm ci
      - run: npm run build --if-present
      - run: npm test
```

{% data reusables.actions.example-github-runner %}

## Die Node.js-Version angeben

Der einfachste Weg, eine Node.js-Version anzugeben, bietet die Aktion `setup-node` von {% data variables.product.prodname_dotcom %}. Weitere Informationen findest du unter [`setup-node`](https://github.com/actions/setup-node/).

Von der Aktion `setup-node` wird eine Node.js-Version als Eingabe verwendet und auf dem Runner konfiguriert. Mit dieser Aktion `setup-node` wird im Toolcache der jeweiligen Runner nach einer bestimmten Version von Node.js gesucht, und die erforderlichen Binärdateien werden in `PATH` hinzugefügt, der für den Rest des Auftrags bestehen bleibt. Die Aktion `setup-node` wird als Methode zur Verwendung von Node.js mit {% data variables.product.prodname_actions %} empfohlen, da damit ein konsistentes Verhalten bei verschiedenen Runnern und verschiedenen Version von Node.js gewährleistet wird. Wenn du einen selbst gehosteten Runner verwendest, musst du Node.js installieren und in `PATH` hinzufügen.

Der Starterworkflow umfasst eine Matrixstrategie, die deinen Code mit drei Node.js-Versionen erstellt und testet: 10.x, 12.x, 14.x und 15.x. Das „x“ ist ein Platzhalterzeichen für das neueste Neben- und Patchrelease einer Version. Von jeder im `node-version`-Array angegebenen Version von Node.js wird ein Auftrag erstellt, bei dem dieselben Schritte ausgeführt werden.

Jeder Auftrag kann mithilfe des `matrix`-Kontexts auf den im Matrixarray `node-version` definierten Wert zugreifen. Die Aktion `setup-node` verwendet den Kontext als `node-version`-Eingabe. Die Aktion `setup-node` konfiguriert jeden Auftrag mit einer anderen Node.js-Version, bevor sie den Code erstellt und testet. Weitere Informationen zu Matrixstrategien und Kontexten findest du unter [Workflowsyntax für {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategymatrix) und [Kontexte](/actions/learn-github-actions/contexts).

```yaml{:copy}
strategy:
  matrix:
    node-version: [10.x, 12.x, 14.x, 15.x]

steps:
- uses: {% data reusables.actions.action-checkout %}
- name: Use Node.js {% raw %}${{ matrix.node-version }}{% endraw %}
  uses: {% data reusables.actions.action-setup-node %}
  with:
    node-version: {% raw %}${{ matrix.node-version }}{% endraw %}
```

Alternativ kannnst du auch mit genauen Node.js-Versionen bauen und testen.

```yaml{:copy}
strategy:
  matrix:
    node-version: [8.16.2, 10.17.0]
```

Oder du kannst auch mithilfe einer einzelnen Version von Node.js bauen und testen.

```yaml{:copy}
name: Node.js CI

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Use Node.js
        uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '12.x'
      - run: npm ci
      - run: npm run build --if-present
      - run: npm test
```

Wenn du keine Node.js Version festlegst, verwendet {% data variables.product.prodname_dotcom %} die standardmäßige Node.js Version der Umgebung.
{% ifversion ghae %} {% data reusables.actions.self-hosted-runners-software %} {% else %} Weitere Informationen findest du unter [Spezifikationen für in {% data variables.product.prodname_dotcom %} gehostete Runner](/actions/reference/specifications-for-github-hosted-runners/#supported-software).
{% endif %}

## Installieren von Abhängigkeiten

Auf {% data variables.product.prodname_dotcom %}-gehosteten Runnern sind die Abhängigkeitsmanager npm und Yarn installiert. Du kannst npm und Yarn verwenden, um in deinem Workflow Abhängigkeiten zu installieren, bevor du deinen Code kompilierst und testest. Die auf {% data variables.product.prodname_dotcom %} gehosteten Windows- und Linux-Runner haben auch Grunt, Gulp und Bower installiert.

{% ifversion actions-caching %}Du kannst Abhängigkeiten auch im Cache zwischenspeichern, um deinen Workflow zu beschleunigen. Weitere Informationen findest du unter [Zwischenspeichern von Abhängigkeiten zum Beschleunigen von Workflows](/actions/using-workflows/caching-dependencies-to-speed-up-workflows).{% endif %}

### Beispiel mit npm

Dieses Beispiel installiert die Abhängigkeiten, die in der Datei *package.json* definiert sind. Weitere Informationen findest du unter [`npm install`](https://docs.npmjs.com/cli/install).

```yaml{:copy}
steps:
- uses: {% data reusables.actions.action-checkout %}
- name: Use Node.js
  uses: {% data reusables.actions.action-setup-node %}
  with:
    node-version: '12.x'
- name: Install dependencies
  run: npm install
```

Bei Verwendung von `npm ci` wird die Versionen aus der Datei *package-lock.json* oder *npm-shrinkwrap.json* installiert und verhindert, dass Updates an der Sperrdatei vorgenommen werden. Die Verwendung von `npm ci` ist im Allgemeinen schneller als die Ausführung von `npm install`. Weitere Informationen findest du unter [`npm ci`](https://docs.npmjs.com/cli/ci.html) und [Einführung in `npm ci` für schnellere, zuverlässigere Builds](https://blog.npmjs.org/post/171556855892/introducing-npm-ci-for-faster-more-reliable).

```yaml{:copy}
steps:
- uses: {% data reusables.actions.action-checkout %}
- name: Use Node.js
  uses: {% data reusables.actions.action-setup-node %}
  with:
    node-version: '12.x'
- name: Install dependencies
  run: npm ci
```

### Beispiel mit Yarn

Dieses Beispiel installiert die Abhängigkeiten, die in der Datei *package.json* definiert sind. Weitere Informationen findest du unter [`yarn install`](https://yarnpkg.com/en/docs/cli/install).

```yaml{:copy}
steps:
- uses: {% data reusables.actions.action-checkout %}
- name: Use Node.js
  uses: {% data reusables.actions.action-setup-node %}
  with:
    node-version: '12.x'
- name: Install dependencies
  run: yarn
```

Alternativ kannst du `--frozen-lockfile` übergeben, um die Versionen in der Datei `yarn.lock` zu installieren und Updates an der Datei `yarn.lock` zu verhindern.

```yaml{:copy}
steps:
- uses: {% data reusables.actions.action-checkout %}
- name: Use Node.js
  uses: {% data reusables.actions.action-setup-node %}
  with:
    node-version: '12.x'
- name: Install dependencies
  run: yarn --frozen-lockfile
```

### Beispiel mit einer privaten Registry und Erstellung der Datei .npmrc

{% data reusables.actions.setup-node-intro %}

Um dich bei deiner privaten Registry zu authentifizieren, musst du dein npm-Authentifizierungstoken als Geheimnis speichern. Erstelle beispielsweise ein Repositorygeheimnis namens `NPM_TOKEN`. Weitere Informationen findest du unter [Erstellen und Verwenden verschlüsselter Geheimnisse](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets).

Im folgenden Beispiel enthält das Geheimnis `NPM_TOKEN` das npm-Authentifizierungstoken. Die Aktion `setup-node` konfiguriert die *NPMRC*-Datei, um das npm-Authentifizierungstoken aus der Umgebungsvariable `NODE_AUTH_TOKEN` zu lesen. Wenn du die Aktion `setup-node` zum Erstellen einer *NPMRC*-Datei verwendest, musst du die Umgebungsvariable `NODE_AUTH_TOKEN` mit dem Geheimen festlegen, der dein npm-Authentifizierungstoken enthält.

Verwende vor der Installation von Abhängigkeiten die Aktion `setup-node`, um die *NPMRC*-Datei zu erstellen. Die Aktion hat zwei Eingabeparameter. Der Parameter `node-version` legt die Node.js-Version fest, und der Parameter `registry-url` legt die Standardregistrierung fest. Wenn deine Paketregistrierung Geltungsbereiche verwendet, musst du den Parameter `scope` verwenden. Weitere Informationen findest du unter [`npm-scope`](https://docs.npmjs.com/misc/scope).

```yaml{:copy}
steps:
- uses: {% data reusables.actions.action-checkout %}
- name: Use Node.js
  uses: {% data reusables.actions.action-setup-node %}
  with:
    always-auth: true
    node-version: '12.x'
    registry-url: https://registry.npmjs.org
    scope: '@octocat'
- name: Install dependencies
  run: npm ci
  env:
    NODE_AUTH_TOKEN: {% raw %}${{ secrets.NPM_TOKEN }}{% endraw %}
```

Das obige Beispiel erstellt eine *NPMRC*-Datei mit folgendem Inhalt:

```ini
//registry.npmjs.org/:_authToken=${NODE_AUTH_TOKEN}
@octocat:registry=https://registry.npmjs.org/
always-auth=true
```

{% ifversion actions-caching %}

### Beispiel zum Zwischenspeichern von Abhängigkeiten im Cache

Du kannst die Abhängigkeiten mithilfe der [Aktion `setup-node`](https://github.com/actions/setup-node) zwischenspeichern und wiederherstellen.

Im folgenden Beispiel werden Abhängigkeiten für npm zwischengespeichert.

```yaml{:copy}
steps:
- uses: {% data reusables.actions.action-checkout %}
- uses: {% data reusables.actions.action-setup-node %}
  with:
    node-version: '14'
    cache: 'npm'
- run: npm install
- run: npm test
```

Im folgenden Beispiel werden Abhängigkeiten für Yarn zwischengespeichert.

```yaml{:copy}
steps:
- uses: {% data reusables.actions.action-checkout %}
- uses: {% data reusables.actions.action-setup-node %}
  with:
    node-version: '14'
    cache: 'yarn'
- run: yarn
- run: yarn test
```

Im folgenden Beispiel werden Abhängigkeiten für pnpm (ab Version 6.10) zwischengespeichert.

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

# NOTE: pnpm caching support requires pnpm version >= 6.10.0

steps:
- uses: {% data reusables.actions.action-checkout %}
- uses: pnpm/action-setup@646cdf48217256a3d0b80361c5a50727664284f2
  with:
    version: 6.10.0
- uses: {% data reusables.actions.action-setup-node %}
  with:
    node-version: '14'
    cache: 'pnpm'
- run: pnpm install
- run: pnpm test
```

Wenn du eine benutzerdefinierte Anforderung verwenden oder genauere Steuerungsmöglichkeiten zum Zwischenspeichern benötigst, kannst du die [Aktion `cache`](https://github.com/marketplace/actions/cache) verwenden. Weitere Informationen findest du unter [Zwischenspeichern von Abhängigkeiten zum Beschleunigen von Workflows](/actions/using-workflows/caching-dependencies-to-speed-up-workflows).

{% endif %}

## Deinen Code bauen und testen

Du kannst die gleichen Befehle verwenden, die du auch lokal verwendest, um deinen Code zu bauen und zu testen. Wenn du beispielsweise `npm run build` ausführst, um die in der Datei *package.json* definierten Buildschritte auszuführen, und `npm test`, um deine Testsuite auszuführen, fügst du diese Befehle in der Workflowdatei hinzu.

```yaml{:copy}
steps:
- uses: {% data reusables.actions.action-checkout %}
- name: Use Node.js
  uses: {% data reusables.actions.action-setup-node %}
  with:
    node-version: '12.x'
- run: npm install
- run: npm run build --if-present
- run: npm test
```

## Workflow-Daten als Artefakte paketieren

Du kannst Artefakte aus deinen Build- und Testschritten speichern, um sie nach dem Abschluss eines Jobs anzuzeigen. Zum Beispiel kann es notwendig sein, Logdateien, Core Dumps, Testergebnisse oder Screenshots zu speichern. Weitere Informationen findest du unter [Speichern von Workflowdaten mithilfe von Artefakten](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts).

## In Paket-Registries veröffentlichen

Du kannst deinen Workflow so konfigurieren, dass dein Node.js-Paket nach Bestehen deiner CI-Tests in einer Paket-Registry veröffentlicht wird. Weitere Informationen zum Veröffentlichen in npm und {% data variables.product.prodname_registry %} findest du unter [Veröffentlichen von Node.js-Paketen](/actions/automating-your-workflow-with-github-actions/publishing-nodejs-packages).
