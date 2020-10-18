---
title: Building and testing Node.js
intro: Du kannst einen Workflow für kontinuierliche Integration (CI) erstellen, um Dein Node.js-Projekt zu bauen und zu testen.
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/using-nodejs-with-github-actions
  - /actions/language-and-framework-guides/using-nodejs-with-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Einführung

Diese Anleitung zeigt Dir, wie Du einen Workflow für fortlaufende Integration (CI) erstellen kannst, der Node.js-Code baut und testet. Wenn Deine CI-Tests erfolgreich durchlaufen, kannst Du Deinen Code deployen (bereitstellen) oder ein Paket veröffentlichen.

### Vorrausetzungen

Wir empfehlen, dass Du ein grundlegendes Verständnis von Node.js, YAML, Workflowkonfigurations-Optionen und die Erstellung einer Workflow-Datei hast. Weitere Informationen findest Du unter:

- "[Learn {% data variables.product.prodname_actions %}](/actions/learn-github-actions)"
- "[Getting started with Node.js](https://nodejs.org/en/docs/guides/getting-started-guide/)"

{% data reusables.actions.enterprise-setup-prereq %}

### Einstieg mit einer Node.js-Workflow-Vorlage

{% data variables.product.prodname_dotcom %} bietet eine Node.js-Workflow-Vorlage, die für die meisten Node.js-basierten Projekte funktionieren wird. Diese Anleitung enthält npm und Yarn Beispiele, mit denen Du die Vorlage anpassen kannst. Weitere Informationen findest Du in der [Node.js-Workflow-Vorlage](https://github.com/actions/starter-workflows/blob/main/ci/node.js.yml).

Um schnell loszulegen, füge die Vorlage in das Verzeichnis `.github/workflows` Deines Repositorys ein.

{% raw %}
```yaml
name: Node.js CI

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [8.x, 10.x, 12.x]

    steps:
    - uses: actions/checkout@v2
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v1
      with:
        node-version: ${{ matrix.node-version }}
    - run: npm install
    - run: npm run build --if-present
    - run: npm test
      env:
        CI: true
```
{% endraw %}

{% data reusables.github-actions.example-github-runner %}

### Die Node.js-Version angeben

Der einfachste Weg, eine Node.js-Version anzugeben, ist die Aktion `setup-node` von {% data variables.product.prodname_dotcom %} zu verwenden. Weitere Informationen findest Du unter [`setup-node`](https://github.com/actions/setup-node/).

Die Aktion `setup-node` nimmt eine Node.js-Version als Eingabe und konfiguriert diese Version auf dem Runner. Die Aktion `setup-node` findet auf jedem Runner eine bestimmte Version von Node.js aus dem Tools-Cache und legt die notwendigen Binärdateien im `PATH` ab, wo sie für den Rest des Jobs bestehen bleiben. Für Node.js mit {% data variables.product.prodname_actions %} wird empfohlen, die Aktion `setup-node` zu verwenden, weil dadurch über verschiedenen Runner und verschiedenen Versionen von Node.js hinweg ein konsistentes Verhalten sicherstellt wird. Wenn Du einen selbst gehosteten Runner verwendest, musst Du Node.js installieren und zum `PATH` hinzufügen.

Die Vorlage enthält eine Matrix-Strategie, die Deinen Code mit drei Node.js-Versionen baut und testet: 8.x, 10.x und 12.x. Das 'x' ist ein Platzhalterzeichen, für das neueste Minor- und Patch-Release des jeweiligen Major-Releases steht. The 'x' is a wildcard character that matches the latest minor and patch release available for a version. Jede Version von Node.js, die im Array `node-version` festgelegt ist, erstellt einen Job, der die gleichen Schritte ausführt.

Jeder Job in der Matrix kann mithilfe des `Matrix`-Kontexts auf den im Array `node-version` definierten Wert zugreifen. Die Aktion `setup-node` verwendet den Kontext als Eingabe für `node-version`. Die Aktion `setup-node` konfiguriert jeden Job mit einer anderen Node.js-Version bevor sie den Code baut und testet. Weitere Informationen zu Matrix-Strategien und Kontexten findest Du unter „[Workflow-Syntax für {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategymatrix)“ und „[Kontext- und Ausdruckssyntax für {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions)“.

{% raw %}
```yaml
strategy:
  matrix:
    node-version: [8.x, 10.x, 12.x]

steps:
- uses: actions/checkout@v2
- name: Use Node.js ${{ matrix.node-version }}
  uses: actions/setup-node@v1
  with:
    node-version: ${{ matrix.node-version }}
```
{% endraw %}

Alternativ kannnst Du auch mit genauen Node.js-Versionen bauen und testen.

```yaml
strategy:
  matrix:
    node-version: [8.16.2, 10.17.0]
```

Oder Du kannst auch mithilfe einer einzelnen Version von Node.js bauen und testen.

{% raw %}
```yaml
name: Node.js CI

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2
    - name: Use Node.js
      uses: actions/setup-node@v1
      with:
        node-version: '12.x'
    - run: npm install
    - run: npm run build --if-present
    - run: npm test
      env:
        CI: true
```
{% endraw %}

Wenn Du keine Node.js Version festlegst, verwendet {% data variables.product.prodname_dotcom %} die standardmäßige Node.js Version der Umgebung. For more information, see "[Specifications for {% data variables.product.prodname_dotcom %}-hosted runners](/actions/reference/specifications-for-github-hosted-runners/#supported-software)".

### Abhängigkeiten installieren

Auf {% data variables.product.prodname_dotcom %}-gehosteten Runnern sind die Abhängigkeitsmanager npm und Yarn installiert. Du kannst npm und Yarn verwenden, um in Ihrem Workflow Abhängigkeiten zu installieren, bevor Du Deinen Code baust und testest. Die auf {% data variables.product.prodname_dotcom %} gehosteten Windows- und Linux-Runner haben auch Grunt, Gulp und Bower installiert.

Du kannst Abhängigkeiten auch im Cache zwischenspeichern, um Deinen Workflow zu beschleunigen. Weitere Informationen findest Du unter „[Abhängigkeiten im Cache zwischenspeichern, um Deinen Workflow zu beschleunigen](/actions/automating-your-workflow-with-github-actions/caching-dependencies-to-speed-up-workflows)“.

#### Beispiel mit npm

Dieses Beispiel installiert die Abhängigkeiten, die in der Datei *package.json* definiert sind. Weitere Informationen findest Du unter [`npm install`](https://docs.npmjs.com/cli/install).

```yaml
steps:
- uses: actions/checkout@v2
- name: Use Node.js
  uses: actions/setup-node@v1
  with:
    node-version: '12.x'
- name: Install dependencies
  run: npm install
```

Du kannst mithilfe `npm ci` die Versionen in der Datei *package-lock.json* oder *npm-shrinkwrap.json* installieren und Aktualisierungen der Sperrdatei verhindern. `npm ci` zu verwenden ist gewöhnlich schneller als `npm install` laufen zu lassen. Weitere Informationen findest Du unter [`npm ci`](https://docs.npmjs.com/cli/ci.html) und „[Einführung in `npm ci` für schnellere und zuverlässigere Builds](https://blog.npmjs.org/post/171556855892/introducing-npm-ci-for-faster-more-reliable)“.

{% raw %}
```yaml
steps:
- uses: actions/checkout@v2
- name: Use Node.js
  uses: actions/setup-node@v1
  with:
    node-version: '12.x'
- name: Install dependencies
  run: npm ci
```
{% endraw %}

#### Beispiel mit Yarn

Dieses Beispiel installiert die Abhängigkeiten, die in der Datei *package.json* definiert sind. Weitere Informationen findest Du unter [`Yarn-Installation`](https://yarnpkg.com/en/docs/cli/install).

```yaml
steps:
- uses: actions/checkout@v2
- name: Use Node.js
  uses: actions/setup-node@v1
  with:
    node-version: '12.x'
- name: Install dependencies
  run: yarn
```

Alternativ kannst Du `--frozen-lockfile` übergeben, um die Versionen in der Datei *yarn.lock* zu installieren und Aktualisierungen der Datei *yarn.lock* zu verhindern.

```yaml
steps:
- uses: actions/checkout@v2
- name: Use Node.js
  uses: actions/setup-node@v1
  with:
    node-version: '12.x'
- name: Install dependencies
  run: yarn --frozen-lockfile
```

#### Beispiel mit einer privaten Registry und Erstellung der Datei .npmrc

{% data reusables.github-actions.setup-node-intro %}

Um Dich bei Deiner privaten Registry zu authentifizieren, musst Du in Deinen Repository-Einstellungen Dein npm-Authentifizierungs-Token als Geheimnis ablegen. Erstelle z.B. ein Geheimnis namens `NPM_TOKEN`. Weitere Informationen findest Du unter „[Verschlüsselte Geheimnisse erstellen und verwenden](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)“.

Im folgenden Beispiel enthält das Geheimnis `NPM_TOKEN` den npm-Authentifizierungs-Token. Die Aktion `setup-node` konfiguriert die Datei *.npmrc*, um den npm-Authentifizierung-Token aus der Umgebungsvariablen `NODE_AUTH_TOKEN` zu lesen. Wenn Du die Aktion `setup-node` verwendest, um eine Datei *.npmrc* zu erstellen, musst Du die Umgebungsvariable `NPM_AUTH_TOKEN` auf das Geheimnis setzen, das Deinen npm-Authentifizierungs-Token enthält.

Bevor Du Abhängigkeiten installierst, verwende die Aktion `setup-node`, um die Datei *.npmrc* zu erstellen. Die Aktion hat zwei Eingabeparameter. Der Parameter `node-version` legt die Version von Node.js fest und der Parameter `registry-url` bestimmt die Standard-Registry. Wenn Deine Paket-Registry Geltungsbereiche verwendet, musst Du den Parameter `scope` verwenden. Weitere Informationen findest Du unter [`npm-scope`](https://docs.npmjs.com/misc/scope).

{% raw %}
```yaml
steps:
- uses: actions/checkout@v2
- name: Use Node.js
  uses: actions/setup-node@v1
  with:
    always-auth: true
    node-version: '12.x'
    registry-url: https://registry.npmjs.org
    scope: '@octocat'
- name: Install dependencies
  run: npm ci
  env:
    NODE_AUTH_TOKEN: ${{secrets.NPM_TOKEN}}
```
{% endraw %}

Das obige Beispiel erzeugt eine *.npmrc* Datei mit folgendem Inhalt:

```
//registry.npmjs.org/:_authToken=${NODE_AUTH_TOKEN}
@octocat:registry=https://registry.npmjs.org/
always-auth=true
```

#### Beispiel zum Zwischenspeichern von Abhängigkeiten im Cache

Du kannst Abhängigkeiten mit einem eindeutigen Schlüssel im Cache zwischenspeichern und sie später wiederherstellen, wenn Du zukünftige Workflows mit der Aktion `-cache-` ausführst. Weitere Informationen findest Du unter „[Caching-Abhängigkeiten zur Beschleunigung von Workflows](/actions/automating-your-workflow-with-github-actions/caching-dependencies-to-speed-up-workflows)“ und der [Aktion `cache`](https://github.com/marketplace/actions/cache).

{% raw %}
```yaml
steps:
- uses: actions/checkout@v2
- name: Use Node.js
  uses: actions/setup-node@v1
  with:
    node-version: '12.x'
- name: Cache Node.js modules
  uses: actions/cache@v2
  with:
    # npm cache files are stored in `~/.npm` on Linux/macOS
    path: ~/.npm 
    key: ${{ runner.OS }}-node-${{ hashFiles('**/package-lock.json') }}
    restore-keys: |
      ${{ runner.OS }}-node-
      ${{ runner.OS }}-
- name: Install dependencies
  run: npm ci
```
{% endraw %}

### Deinen Code bauen und testen

Du kannst die gleichen Befehle verwenden, die Du auch lokal verwendest, um Deinen Code zu erstellen und zu testen. Wenn Du beispielsweise `npm run build` ausführst, um die in Deinem *package.json* definierten Build-Schritte zu durchlaufen, und `npm test`, um Deine Testsuite laufen zu lassen, dann fügst Di diese Befehle in Deine Workflow-Datei ein.

```yaml
steps:
- uses: actions/checkout@v2
- name: Use Node.js
  uses: actions/setup-node@v1
  with:
    node-version: '12.x'
- run: npm install
- run: npm run build --if-present
- run: npm test
```

### Workflow-Daten als Artefakte paketieren

Du kannst Artefakte aus deinen Build- und Testschritten speichern, um sie nach dem Abschluss eines Jobs anzuzeigen. Zum Beispiel kann es notwendig sein, Logdateien, Core Dumps, Testergebnisse oder Screenshots zu speichern. Weitere Informationen findest Du unter „[Workflow-Daten mittels Artefakten persistieren](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)“.

### In Paket-Registries veröffentlichen

Du kannst Deinen Workflow so konfigurieren, dass Dein Node.js-Paket nach Bestehen Deiner CI-Tests in einer Paket-Registry veröffentlicht wird. Weitere Informationen zum Veröffentlichen in npm und {% data variables.product.prodname_registry %} findest Du unter „[Node.js Pakete veröffentlichen](/actions/automating-your-workflow-with-github-actions/publishing-nodejs-packages)“.
