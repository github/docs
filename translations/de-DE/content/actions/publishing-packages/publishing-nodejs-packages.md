---
title: Node.js-Pakete veröffentlichen
intro: Du kannst Node.js-Pakete als Teil Deines Workflows zur kontinuierlichen Integrations (CI) in einer Registry veröffentlichen.
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/publishing-nodejs-packages
  - /actions/language-and-framework-guides/publishing-nodejs-packages
  - /actions/guides/publishing-nodejs-packages
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Packaging
  - Publishing
  - Node
  - JavaScript
shortTitle: Node.js packages
ms.openlocfilehash: 61196d4a5d63af6d52769a7a937d8c26f2c5a9a5
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147705027'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Einführung

Dieser Leitfaden zeigt Dir, wie Du einen Workflow erstellen kannst, der Node.js Pakete nach den Tests der fortlaufenden Integration (CI) in die {% data variables.product.prodname_registry %} und npm Registrierungen veröffentlicht.

## Voraussetzungen

Wir empfehlen, dass Du ein grundlegendes Verständnis von Workflowkonfigurations-Optionen hast und darüber, wie Du eine Workflow-Datei erstellst. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_actions %}](/actions/learn-github-actions).

Weitere Informationen zum Erstellen eines CI-Workflows für dein Node.js-Projekt findest du unter [Verwenden von Node.js mit {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/using-nodejs-with-github-actions).

Vielleicht findest Du es auch hilfreich, ein grundlegendes Verständnis von Folgendem zu haben:

- [Arbeiten mit der npm-Registrierung](/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)
- [Umgebungsvariablen](/actions/reference/environment-variables)
- [Verschlüsselte Geheimnisse](/actions/reference/encrypted-secrets)
- [Authentifizierung in einem Workflow](/actions/reference/authentication-in-a-workflow)

## Informationen zur Paketkonfiguration

 Die Felder `name` und `version` in der Datei *package.json* erstellen einen eindeutigen Bezeichner, den Registrierungen zum Verknüpfen deines Pakets mit einer Registrierung verwenden. Du kannst eine Zusammenfassung für die Paketauflistungsseite hinzufügen, indem du das `description`-Feld in die Datei *package.json* einschließt. Weitere Informationen findest du unter [Erstellen einer package.json-Datei](https://docs.npmjs.com/creating-a-package-json-file) und [Erstellen von Node.js-Modulen](https://docs.npmjs.com/creating-node-js-modules) in der npm-Dokumentation.

Wenn eine lokale *NPMRC*-Datei vorhanden und der `registry`-Wert angegeben ist, verwendet der `npm publish`-Befehl die in der *NPMRC*-Datei konfigurierte Registrierung. {% data reusables.actions.setup-node-intro %}

Mithilfe der Aktion `setup-node` kannst du die im Runner installierte Node.js-Version angeben.

Wenn du in deinem Workflow Schritte zum Konfigurieren der `publishConfig`-Felder in der *package.json*-Datei hinzufügst, musst du die Registrierungs-URL (registry-url) nicht mit der `setup-node`-Aktion angeben, aber du kannst das Paket nur in einer einzigen Registrierung veröffentlichen. Weitere Informationen findest du unter [publishConfig](https://docs.npmjs.com/files/package.json#publishconfig) in der npm-Dokumentation.

## Pakete in der npm-Registry veröffentlichen

Jedes Mal, wenn Du ein neues Release erstellst, kannst Du einen Workflow anstoßen, um Dein Paket zu veröffentlichen. Der Workflow im folgenden Beispiel wird ausgeführt, wenn das `release`-Ereignis mit dem `created`-Typ ausgelöst wird. Der Workflow veröffentlicht das Paket im npm-Registry sofern es die CI-Tests besteht.

Um in deinem Workflow authentifizierte Vorgänge für die npm-Registrierung auszuführen, musst du dein npm-Authentifizierungstoken als Geheimnis speichern. Erstelle beispielsweise ein Repositorygeheimnis namens `NPM_TOKEN`. Weitere Informationen findest du unter [Erstellen und Verwenden verschlüsselter Geheimnisse](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets).

Standardmäßig verwendet npm das `name`-Feld der *package.json*-Datei, um den Namen deines veröffentlichten Pakets zu bestimmen. Wenn Du in einem globalen Namespace veröffentlichst, brauchst Du nur den Paketnamen anzugeben. Du kannst beispielsweise ein Paket namens `npm-hello-world-test` unter `https://www.npmjs.com/package/npm-hello-world-test` veröffentlichen.

Wenn du ein Paket veröffentlichst, das ein Präfix für den Bereich (scope) enthält, füge den Bereich in den Namen deiner *package.json*-Datei ein. Wenn beispielsweise dein npm-Bereichspräfix „octocat“ ist und der Paketname „hello-world“ lautet, sollte der `name` in deiner *package.json*-Datei `@octocat/hello-world` lauten. Wenn dein npm-Paket ein Bereichspräfix verwendet und das Paket öffentlich ist, musst du die Option `npm publish --access public` verwenden. Dies ist eine Option, die npm verlangt, um zu verhindern, dass jemand versehentlich ein privates Paket veröffentlicht.

In diesem Beispiel wird das `NPM_TOKEN`-Geheimnis in der Umgebungsvariablen `NODE_AUTH_TOKEN` gespeichert. Wenn die `setup-node`-Aktion eine *NPMRC*-Datei erstellt, verweist sie auf das Token aus der Umgebungsvariablen `NODE_AUTH_TOKEN`.

```yaml{:copy}
name: Publish Package to npmjs
on:
  release:
    types: [created]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      # Setup .npmrc file to publish to npm
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '16.x'
          registry-url: 'https://registry.npmjs.org'
      - run: npm ci
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: {% raw %}${{ secrets.NPM_TOKEN }}{% endraw %}
```

Im vorherigen Beispiel erstellt die `setup-node`-Aktion im Runner eine *NPMRC*-Datei mit dem folgenden Inhalt:

```ini
//registry.npmjs.org/:_authToken=${NODE_AUTH_TOKEN}
registry=https://registry.npmjs.org/
always-auth=true
```

Beachte, dass du die `registry-url` in `setup-node` auf `https://registry.npmjs.org/` festlegen musst, damit deine Anmeldeinformationen ordnungsgemäß konfiguriert werden.

## Pakete in der {% data variables.product.prodname_registry %} veröffentlichen

Jedes Mal, wenn Du ein neues Release erstellst, kannst Du einen Workflow anstoßen, um Dein Paket zu veröffentlichen. Der Workflow im folgenden Beispiel wird immer ausgeführt, wenn das `release`-Ereignis mit den Typ `created` auftritt. Der Workflow veröffentlicht das Paket in {% data variables.product.prodname_registry %} , wenn die CI-Tests bestanden wurden.

### Konfigurieren des Zielrepositorys

Die Verknüpfung des Pakets mit {% data variables.product.prodname_registry %} mithilfe des `repository`-Schlüssels ist optional. Wenn du den `repository`-Schlüssel in der Datei *package.json* nicht angibst, veröffentlicht {% data variables.product.prodname_registry %} ein Paket in dem {% data variables.product.prodname_dotcom %}-Repository, das du im `name`-Feld der *package.json*-Datei angibst. Beispielsweise wird ein Paket namens `@my-org/test` wird im {% data variables.product.prodname_dotcom %}-Repository `my-org/test` veröffentlicht. Wenn die im `repository`-Schlüssel angegebene `url` ungültig ist, kann dein Paket zwar wahrscheinlich veröffentlicht werden, ist aber nicht wie gewünscht mit der Repositoryquelle verknüpft.

Wenn du den `repository`-Schlüssel in deiner *package.json*-Datei angibst, wird das Repository in diesem Schlüssel als npm-Zielregistrierung für {% data variables.product.prodname_registry %} verwendet. Das Veröffentlichen der folgenden *package.json*-Datei führt beispielsweise dazu, dass ein Paket namens `my-amazing-package` im {% data variables.product.prodname_dotcom %}-Repository `octocat/my-other-repo` veröffentlicht wird. Nach der Veröffentlichung wird nur die Repositoryquelle aktualisiert, und das Paket erbt keine Berechtigungen aus dem Zielrepository.

```json
{
  "name": "@octocat/my-amazing-package",
  "repository": {
    "type": "git",
    "url": "https://github.com/octocat/my-other-repo.git"
  },
```

### Authentifizieren beim Zielrepository

Um authentifizierte Vorgänge für die {% data variables.product.prodname_registry %}-Registrierung in deinem Workflow auszuführen, kannst du das `GITHUB_TOKEN` verwenden. {% data reusables.actions.github-token-permissions %}

Wenn du dein Paket in einem anderen Repository veröffentlichen möchtest, musst du ein persönliches Zugriffstoken (Personal Access Token, PAT) verwenden, das über die Berechtigung zum Schreiben in Pakete im Zielrepository verfügt. Weitere Informationen findest du unter [Erstellen eines persönlichen Zugriffstokens](/github/authenticating-to-github/creating-a-personal-access-token) und [Verschlüsselte Geheimnisse](/actions/reference/encrypted-secrets).

### Beispielworkflow

In diesem Beispiel wird das `GITHUB_TOKEN`-Geheimnis in der Umgebungsvariablen `NODE_AUTH_TOKEN` gespeichert. Wenn die `setup-node`-Aktion eine *NPMRC*-Datei erstellt, verweist sie auf das Token aus der Umgebungsvariablen `NODE_AUTH_TOKEN`.

```yaml{:copy}
name: Publish package to GitHub Packages
on:
  release:
    types: [created]
jobs:
  build:
    runs-on: ubuntu-latest 
    permissions: 
      contents: read
      packages: write 
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      # Setup .npmrc file to publish to GitHub Packages
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '16.x'
          registry-url: 'https://npm.pkg.github.com'
          # Defaults to the user or organization that owns the workflow file
          scope: '@octocat'
      - run: npm ci
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
```

Die `setup-node`-Aktion erstellt eine *NPMRC*-Datei im Runner. Wenn du die `scope`-Eingabe für die `setup-node`-Aktion verwendest, enthält die *NPMRC*-Datei das Bereichspräfix. Die `setup-node`-Aktion legt den Bereich in der *NPMRC*-Datei standardmäßig auf das Konto fest, das die Workflowdatei enthält.

```ini
//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
@octocat:registry=https://npm.pkg.github.com
always-auth=true
```

## Pakete mittels „Yarn“ veröffentlichen

Wenn Du den Paketmanager „Yarn“ verwendest, kannst Du mit Yarn Pakete installieren und veröffentlichen.

```yaml{:copy}
name: Publish Package to npmjs
on:
  release:
    types: [created]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      # Setup .npmrc file to publish to npm
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '16.x'
          registry-url: 'https://registry.npmjs.org'
          # Defaults to the user or organization that owns the workflow file
          scope: '@octocat'
      - run: yarn
      - run: yarn publish
        env:
          NODE_AUTH_TOKEN: {% raw %}${{ secrets.NPM_TOKEN }}{% endraw %}
```
