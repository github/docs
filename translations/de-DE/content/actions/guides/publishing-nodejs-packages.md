---
title: Node.js-Pakete veröffentlichen
intro: Du kannst Node.js-Pakete als Teil Deines Workflows zur kontinuierlichen Integrations (CI) in einer Registry veröffentlichen.
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/publishing-nodejs-packages
  - /actions/language-and-framework-guides/publishing-nodejs-packages
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: 'tutorial'
topics:
  - 'Pakete erstellen'
  - 'Publishing'
  - 'Node'
  - 'JavaScript'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Einführung

Dieser Leitfaden zeigt Dir, wie Du einen Workflow erstellen kannst, der Node.js Pakete nach den Tests der fortlaufenden Integration (CI) in die {% data variables.product.prodname_registry %} und npm Registrierungen veröffentlicht. Mit einem einzigen Workflow kannst Du Pakete in einer einzigen Registry oder in mehreren Registries veröffentlichen.

### Vorrausetzungen

Wir empfehlen, dass Du ein grundlegendes Verständnis von Workflowkonfigurations-Optionen hast und darüber, wie Du eine Workflow-Datei erstellst. For more information, see "[Learn {% data variables.product.prodname_actions %}](/actions/learn-github-actions)."

Weitere Informationen zum Erstellen eines CI-Workflows für Dein Node.js-Projekt findest Du unter „[Node.js mit {% data variables.product.prodname_actions %} verwenden](/actions/automating-your-workflow-with-github-actions/using-nodejs-with-github-actions)“.

Vielleicht findest Du es auch hilfreich, ein grundlegendes Verständnis von Folgendem zu haben:

- „[Konfiguration von npm für die Verwendung mit {% data variables.product.prodname_registry %}](/github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages)“
- "[Environment variables](/actions/reference/environment-variables)"
- "[Encrypted secrets](/actions/reference/encrypted-secrets)"
- "[Authentication in a workflow](/actions/reference/authentication-in-a-workflow)"

### Informationen zur Paketkonfiguration

 Die Felder `name` und `version` in der Datei *package.json* bilden eine eindeutige Kennung. Registries verwenden diese Kennung, um Dein Paket mit einer Registry zu verknüpfen. Du kannst eine Zusammenfassung für die Paketlisten-Seite hinzufügen, indem Du in die Datei *package.json* ein Feld `description` einfügst. Weitere Informationen findest Du unter „[Eine Datei package.json erstellen](https://docs.npmjs.com/creating-a-package-json-file)“ und „[Node.js-Module erstellen](https://docs.npmjs.com/creating-node-js-modules)“ in der npm-Dokumentation.

Wenn eine lokale Datei *.npmrc* existiert, in der ein Wert `registry` angegeben ist, dann verwendet der Befehl `npm publish` die in der Datei *.npmrc* konfigurierte Registry. {% data reusables.github-actions.setup-node-intro %}

Du kannst die auf dem Runner installierte Node.js-Version mit der Aktion `setup-node` angeben.

Wenn Du Schritte in Deinen Workflow einfügst, um die `publishConfig`-Felder in Deiner *package.json*-Datei zu konfigurieren, brauchst Du die Registry-URL nicht mittels der Aktion `setup-node` anzugeben, aber Du kannst das Paket in nur einer einzigen Registry veröffentlichen. Weitere Informationen finden Sie unter „[publishConfig](https://docs.npmjs.com/files/package.json#publishconfig)“ in der NPM-Dokumentation.

### Pakete in der npm-Registry veröffentlichen

Jedes Mal, wenn Du ein neues Release erstellst, kannst Du einen Workflow anstoßen, um Dein Paket zu veröffentlichen. Der Workflow im folgenden Beispiel wird von dem Ereignis `release` vom Typ `created` angestoßen. Der Workflow veröffentlicht das Paket im npm-Registry sofern es die CI-Tests besteht.

To perform authenticated operations against the npm registry in your workflow, you'll need to store your npm authentication token as a secret. For example, create a repository secret called `NPM_TOKEN`. Weitere Informationen findest Du unter „[Verschlüsselte Geheimnisse erstellen und verwenden](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)“.

Standardmäßig verwendet npm das Feld `name` der Datei *package.json*, um die npm-Registry zu ermitteln. Wenn Du in einem globalen Namespace veröffentlichst, brauchst Du nur den Paketnamen anzugeben. Zum Beispiel würdest Du ein Paket namens `npm-hello-world-test` auf `https://www.npmjs.com/package/npm-hello-world-test` veröffentlichen.

Wenn Du ein Paket veröffentlichst, das einen Präfix für den „scope“ (Geltungsbereich) enthält, dann füge den Geltungsbereich als `name` in Deine Datei *package.json* ein. Wenn beispielsweise Dein Präfix für den npm-scope „octocat“ und der Paketname „hello-world“ ist, dann sollte der `name` in Deiner Datei *package.json* auf `@octocat/hallo-world` gesetzt sein. Wenn Dein npm-Paket einen Scope-Präfix verwendet und das Paket öffentlich ist, musst Du die Option `npm publish --access public` verwenden. Dies ist eine Option, die npm verlangt, um zu verhindern, dass jemand versehentlich ein privates Paket veröffentlicht.

Dieses Beispiel speichert das Geheimnis `NPM_TOKEN` in der Umgebungsvariablen `NODE_AUTH_TOKEN`. Wenn die Aktion `setup-node` eine Datei *.npmrc* erzeugt, referenziert sie das Token aus der Umgebungsvariable `NODE_AUTH_TOKEN`.

{% raw %}
```yaml{:copy}
name: Node.js Package
on:
  release:
    types: [created]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    # Setup .npmrc file to publish to npm
    - uses: actions/setup-node@v2
      with:
        node-version: '12.x'
        registry-url: 'https://registry.npmjs.org'
    - run: npm install
    - run: npm publish
      env:
        NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```
{% endraw %}

Im obigen Beispiel erzeugt die Aktion `setup-node` auf dem Runner eine Datei *.npmrc* mit folgendem Inhalt:

```ini
//registry.npmjs.org/:_authToken=${NODE_AUTH_TOKEN}
registry=https://registry.npmjs.org/
always-auth=true
```

### Pakete in der {% data variables.product.prodname_registry %} veröffentlichen

Jedes Mal, wenn Du ein neues Release erstellst, kannst Du einen Workflow anstoßen, um Dein Paket zu veröffentlichen. Der Workflow im folgenden Beispiel läuft jedes Mal, wenn das Ereignis `release` vom Typ `created` auftritt. Der Workflow veröffentlicht das Paket in {% data variables.product.prodname_registry %} , wenn die CI-Tests bestanden wurden.

#### Configuring the destination repository

If you don't provide the `repository` key in your *package.json* file, then {% data variables.product.prodname_registry %} publishes a package in the {% data variables.product.prodname_dotcom %} repository you specify in the `name` field of the *package.json* file. For example, a package named `@my-org/test` is published to the `my-org/test` {% data variables.product.prodname_dotcom %} repository.

However, if you do provide the `repository` key, then the repository in that key is used as the destination npm registry for {% data variables.product.prodname_registry %}. For example, publishing the below *package.json* results in a package named `my-amazing-package` published to the `octocat/my-other-repo` {% data variables.product.prodname_dotcom %} repository.

```json
{
  "name": "@octocat/my-amazing-package",
  "repository": {
    "type": "git",
    "url": "https://github.com/octocat/my-other-repo.git"
  },
```

#### Authenticating to the destination repository

To authenticate to the {% data variables.product.prodname_registry %} registry in your workflow, you can use the `GITHUB_TOKEN` from your repository. It is created automatically and has _read_ and _write_ permissions for packages in the repository where the workflow runs. For more information, see "[Authentication in a workflow](/actions/reference/authentication-in-a-workflow)."

If you want to publish your package to a different repository, you must use a personal access token (PAT) that has permission to write to packages in the destination repository. For more information, see "[Creating a personal access token](/github/authenticating-to-github/creating-a-personal-access-token)" and "[Encrypted secrets](/actions/reference/encrypted-secrets)."

#### Example workflow

Dieses Beispiel speichert das Geheimnis `GITHUB_TOKEN` in der Umgebungsvariablen `NODE_AUTH_TOKEN`. Wenn die Aktion `setup-node` eine Datei *.npmrc* erzeugt, referenziert sie das Token aus der Umgebungsvariable `NODE_AUTH_TOKEN`.

{% raw %}
```yaml{:copy}
name: Node.js Package
on:
  release:
    types: [created]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    # Setup .npmrc file to publish to GitHub Packages
    - uses: actions/setup-node@v2
      with:
        node-version: '12.x'
        registry-url: 'https://npm.pkg.github.com'
        # Defaults to the user or organization that owns the workflow file
        scope: '@octocat'
    - run: npm install
    - run: npm publish
      env:
        NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
{% endraw %}

Die Aktion `setup-node` erzeugt eine Datei *.npmrc* auf dem Runner. Wenn Du für die Aktion `setup-node` die Eingabe `scope` verwendest, enthält die Datei *.npmrc* das Präfix „scope“. Standardmäßig legt die Aktion `setup-node` den „Scope“ (Geltungsbereich) in der Datei *.npmrc* auf das Konto fest, das diese Workflow-Datei enthält.

```ini
//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
@octocat:registry=https://npm.pkg.github.com
always-auth=true
```

### Pakete mittels „Yarn“ veröffentlichen

Wenn Du den Paketmanager „Yarn“ verwendest, kannst Du mit Yarn Pakete installieren und veröffentlichen.

{% raw %}
```yaml{:copy}
name: Node.js Package
on:
  release:
    types: [created]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    # Setup .npmrc file to publish to npm
    - uses: actions/setup-node@v2
      with:
        node-version: '12.x'
        registry-url: 'https://registry.npmjs.org'
        # Defaults to the user or organization that owns the workflow file
        scope: '@octocat'
    - run: yarn
    - run: yarn publish
      env:
        NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```
{% endraw %}

### Pakete auf npm und in der {% data variables.product.prodname_registry %} veröffentlichen

{% note %}

**Hinweis:** Wenn Du in Registries mit unterschiedlichen „Scope“-Präfixen publizieren musst, dann musst Du die Datei *package.json* auf dem Runner anpassen, um das „Scope“-Präfix zu ändern. Wenn Du beispielsweise ein Paket im Geltungsbereich `@mona` für npm und `@octocat` für {% data variables.product.prodname_registry %}veröffentlichst, kannst Du nach der Veröffentlichung auf npm und vor der Veröffentlichung in der {% data variables.product.prodname_registry %} auf dem Runner in der Datei *package.json* den Geltungsbereich `@mona` durch `@octocat` ersetzen.

{% endnote %}

Du kannst Deine Pakete sowohl in der npm-Registry als auch in {% data variables.product.prodname_registry %} veröffentlichen, indem Du die Aktion `setup-node` für jede Registry verwendest.

Wenn Du ein Paket in beiden Registries veröffentlichst, musst Du sicherstellen, dass Dein „Scope“-Präfix auf npm mit Deinem Benutzer- oder Organisationsnamen in {% data variables.product.prodname_dotcom %} übereinstimmt. Um Pakete in einer öffentlichen Registry mit einem „Scope“-Präfix zu veröffentlichen, kannst Du den Befehl `npm publish --access public` verwenden. Weitere Informationen findest Du unter [`npm-scope`](https://docs.npmjs.com/misc/scope) und „[Öffentliche Pakete mit „Scope“ (Geltungsbereich) anlegen und veröffentlichen](https://docs.npmjs.com/creating-and-publishing-scoped-public-packages)“ in der npm-Dokumentation.

Stelle sicher, dass in Deiner Datei *package.json* den Geltungsbereich Deines {% data variables.product.prodname_dotcom %}-Repositorys und der npm-Registry angegeben ist. Wenn Du beispielsweise ein Paket im Repository `octocat/npm-hello-world-test` auf {% data variables.product.prodname_dotcom %} und https://www.npmjs.com/package/@octocat/npm-hello-world-test veröffentlichen willst, dann sollte in Deiner Datei *package.json* der Name `"name": "@octocat/npm-hello-world-test"` stehen.

Um authentifizierte Vorgänge für die Registry {% data variables.product.prodname_registry %} in Deinem Workflow kannst Du den `GITHUB_TOKEN` verwenden. Der `GITHUB_TOKEN` existiert standardmäßig in Deinem Repository und hat Lese- und Schreibrechte für Pakete in dem Repository, in dem der Workflow läuft. Weitere Informationen findest Du unter „[Verschlüsselte Geheimnisse erstellen und verwenden](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)“.

Wenn Du für die Aktion `setup-node` die Eingabe `scope` verwendest, erstellt die Aktion eine Datei *.npmrc* mit dem Präfix „scope“. Standardmäßig legt die Aktion `setup-node` den Geltungsbereich in der Datei *.npmrc* auf den Benutzer oder die Organisation fest, der die Workflow-Datei gehört.

Dieser Workflow ruft die Aktion `setup-node` zweimal auf. Jedes Mal, wenn die Aktion `setup-node` ausgeführt wird, überschreibt sie die Datei *.npmrc*. Die Datei *.npmrc* referenziert den Token, mit dem Du authentifizierte Operationen in der Paket-Registry durchführen kannst, durch die Umgebungsvariable `NODE_AUTH_TOKEN`. Der Workflow setzt die Umgebungsvariable `NODE_AUTH_TOKEN` jedes Mal, wenn der Befehl `npm publish` ausgeführt wird; zuerst mit einem Token zum Veröffentlichen auf npm (`NPM_TOKEN`) und dann mit einem Token zum Veröffentlichen in der {% data variables.product.prodname_registry %} (`GITHUB_TOKEN`).

{% raw %}
```yaml{:copy}
name: Node.js Package
on:
  release:
    types: [created]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    # Setup .npmrc file to publish to npm
    - uses: actions/setup-node@v1
      with:
        node-version: '10.x'
        registry-url: 'https://registry.npmjs.org'
    - run: npm install
    # Publish to npm
    - run: npm publish --access public
      env:
        NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
    # Setup .npmrc file to publish to GitHub Packages
    - uses: actions/setup-node@v1
      with:
        registry-url: 'https://npm.pkg.github.com'
        # Defaults to the user or organization that owns the workflow file
        scope: '@octocat'
    # Publish to GitHub Packages
    - run: npm publish
      env:
        NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
{% endraw %}
