---
title: Eine JavaScript-Aktion erstellen
intro: 'In diesem Handbuch erfährst Du, wie Du mit dem Toolkit für Aktionen eine JavaScript-Aktion erstellen kannst.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/creating-a-javascript-action
  - /github/automating-your-workflow-with-github-actions/creating-a-javascript-action
  - /actions/automating-your-workflow-with-github-actions/creating-a-javascript-action
  - /actions/building-actions/creating-a-javascript-action
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: tutorial
topics:
  - Action development
  - JavaScript
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Einführung

In dieser Anleitung erfährst Du mehr über die grundlegenden Komponenten, die benötigt werden, um eine paketierte Docker-Container-Aktion zu erstellen und zu verwenden. Diese Anleitung fokussiert jene Komponenten, welche zum Paketieren der Aktion benötigt werden. Daher hat der Aktions-Code nur minimale Funktionalität. Die Aktion schreibt „Hello World“ in die Logs oder "Hello [who-to-greet]" wenn du einen benutzerdefinierten Namen angibst.

Diese Anleitung verwendet das Node.js Modul des {% data variables.product.prodname_actions %}-Toolkits, um die Entwicklung zu beschleunigen. Weitere Informationen findest Du im Repository [actions/toolkit](https://github.com/actions/toolkit).

Nach dem Abschluss dieses Projekts solltest Du verstehen, wie Du Deine eigene JavaScript-Aktion erstellen und sie in einem Workflow testen kannst.

{% data reusables.github-actions.pure-javascript %}

{% data reusables.github-actions.context-injection-warning %}

### Vorrausetzungen

Before you begin, you'll need to download Node.js and create a public {% data variables.product.prodname_dotcom %} repository.

1. Lade die Anwendung Node.js 12.x, welche npm enthält, herunter, und installiere sie.

  https://nodejs.org/de/download/current/

1. Create a new public repository on {% data variables.product.product_location %} and call it "hello-world-javascript-action". Weitere Informationen finden Sie unter „[Neues Repository erstellen](/articles/creating-a-new-repository)“.

1. Clone Dein Repository auf Deinen Computer. Weitere Informationen findest Du unter „[Ein Repository clonen](/articles/cloning-a-repository)“.

1. Gehe in Deinem Terminal zum Verzeichnisse Deines neuen Repositorys.

  ```shell
  cd hello-world-javascript-action
  ```

1. From your terminal, initialize the directory with npm to generate a `package.json` file.

  ```shell
  npm init -y
  ```

### Eine Datei für die Metadaten der Aktion erstellen

Create a new file named `action.yml` in the `hello-world-javascript-action` directory with the following example code. Weitere Informationen findest Du unter „[Metadaten-Syntax für {% data variables.product.prodname_actions %}](/actions/creating-actions/metadata-syntax-for-github-actions)“.

```yaml
name: 'Hello World'
description: 'Greet someone and record the time'
inputs:
  who-to-greet:  # ID der Eingabe
    description: 'Who to greet'
    required: true
    default: 'World'
outputs:
  time: # ID der Ausgabe
    description: 'The time we greeted you'
runs:
  using: 'node12'
  main: 'index.js'
```

Diese Datei definiert die Eingabe `who-to-greet` und die Ausgabe `time`. Sie gibt dem Action-Runner auch an, wie diese JavaScript-Aktion ausgeführt werden soll.

### Toolkit-Pakete für Aktionen hinzufügen

Das Toolkit für Aktionen ist eine Node.js-Paketsammlung, mit der Sie JavaScript-Aktionen schnell und konsistenter erstellen können.

Das Toolkit-Paket [`@actions/core`](https://github.com/actions/toolkit/tree/main/packages/core) enthält eine Schnittstelle für die Workflow-Befehle, Eingabe- und Ausgabevariablen, Exit-Status und Debugging-Meldungen.

Das Toolkit enthält zudem das Paket [`@actions/github`](https://github.com/actions/toolkit/tree/main/packages/github), das einen authentifizierten Octokit REST-Client und Zugriff auf GitHub Aktions-Kontexte bietet.

Das Toolkit bietet mehr als die Pakete `core` und `github`. Weitere Informationen findest Du im Repository [actions/toolkit](https://github.com/actions/toolkit).

Installiere an Deinem Terminal die Pakete `core` und `github` des Toolkits für Aktionen.

```shell
npm install @actions/core
npm install @actions/github
```

Nun sollte das Verzeichnis `node_modules` mit den soeben von Dir installierten Modulen und die Datei `package-lock.json` mit den installierten Modulabhängigkeiten sowie die Version des jeweils installierten Moduls angezeigt werden.

### Aktions-Code schreiben

Diese Aktion verwendet das Toolkit, um die in der Metadatendatei der Aktion erforderliche Eingabevariable `who-to-greet` abzurufen, und gibt „Hello [who-to-greet]“ im Protokoll in einer Debugging-Meldung aus. Als Nächstes ruft das Skript die aktuelle Zeit ab und legt sie als eine Ausgabevariable fest, die von später in einem Auftrag ausgeführten Aktionen verwendet werden kann.

GitHub Actions stellt Kontextinformationen zum Webhook-Ereignis, zu den Git-Refs, zum Workflow, zur Aktion und zur Person bereit, die den Workflow ausgelöst hat. Um auf die Kontextinformationen zuzugreifen, kannst Du das Paket `github` verwenden. The action you'll write will print the webhook event payload to the log.

Füge eine neue Datei mit der Bezeichnung `index.js` mit dem folgenden Code hinzu.

{% raw %}
```javascript
const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` Eingabedaten, in der Metadaten-Datei der Aktion definiert
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Hole die JSON Webhook Nutzlast fuer das Ereignis, das den Workflow angestossen hat
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
```
{% endraw %}

Wenn im o. g. `index.js`-Beispiel ein Fehler ausgegeben wird, nutzt `core.setFailed(error.message);` das Aktions-Toolkit-Paket [`@actions/core`](https://github.com/actions/toolkit/tree/main/packages/core), um eine Meldung zu protokollieren und einen Fehler-Exit-Code festzulegen. Weitere Informationen findest Du unter "[Exit Codes für Aktionen setzen](/actions/creating-actions/setting-exit-codes-for-actions)."


### Eine README erstellen

Sie können eine README-Datei erstellen, um Person dahingehend zu informieren, wie sie Ihre Aktion verwenden sollen. Eine README ist am hilfreichsten, wenn Sie vorhaben, Ihre Aktion öffentlich freizugeben. Zudem eignet sie sich dafür, Sie oder Ihr Team dahingehend zu erinnern, wie die Aktion verwendet wird.

Erstelle in Deinem Verzeichnis `hello-world-javascript-action` eine Datei `README.md` mit folgenden Informationen:

- Eine ausführliche Beschreibung, was die Aktion bewirkt.
- Erforderliche Eingabe- und Ausgabe-Argumente.
- Optionale Eingabe- und Ausgabe-Argumente.
- Geheimnisse, die in der Aktion benutzt werden.
- Umgebungsvariablen, die in der Aktion benutzt werden.
- Ein Beispiel für die Verwendung Deiner Aktion in einem Workflow.

```markdown
# JavaScript-Aktion „Hello world“

Diese Aktion gibt „Hello World“ oder „Hello“ + den Namen einer Person aus, die im Protokoll gegrüßt werden soll.

## Inputs

### `who-to-greet`

**Erforderlich** Der Name der zu grüßenden Person. Der Standardwert lautet „World“.

## Outputs

### `time`

Die Zeit, zu der Sie gegrüßt wurden.

Beispielverwendung

verwendet: actions/hello-world-javascript-action@v1.1
mit:
  who-to-greet: 'Mona the Octocat'
```

### Committe, tagge und pushe Deine Aktion auf GitHub

{% data variables.product.product_name %} lädt jede Aktion, die in einem Workflow während der Laufzeit ausgeführt wird, herunter und führt sie als komplettes Codepaket aus, bevor Du Workflow-Befehle wie `run` zur Interaktion mit der Runner-Maschine verwenden kannst. Folglich musst Du alle zum Ausführen des JavaScript-Codes erforderlichen Paketabhängigkeiten einschließen. Sie müssen die Pakete `core` und `github` in das Repository Ihrer Aktion einchecken.

Committen Sie in Ihrem Terminal Ihre Dateien `action.yml`, `index.js`, `node_modules`, `package.json`, `package-lock.json` und `README.md`. Falls Sie eine `.gitignore`-Datei hinzugefügt haben, die `node_modules` auflistet, müssen Sie diese Zeile entfernen, um das Verzeichnis `node_modules` zu committen.

Es hat sich bewährt, auch ein Versions-Tag für Releases Deiner Aktion hinzuzufügen. Weitere Informationen zur Versionierung Deiner Aktion findest Du unter "[Informationen zu Aktionen](/actions/automating-your-workflow-with-github-actions/about-actions#using-release-management-for-actions)."


```shell
git add action.yml index.js node_modules/* package.json package-lock.json README.md
git commit -m "My first action is ready"
git tag -a -m "My first action release" v1.1
git push --follow-tags
```

Checking in your `node_modules` directory can cause problems. As an alternative, you can use a tool called [`@vercel/ncc`](https://github.com/vercel/ncc) to compile your code and modules into one file used for distribution.

1. Install `vercel/ncc` by running this command in your terminal. `npm i -g @vercel/ncc`

1. Kompiliere die Datei `index.js`. `ncc build index.js --license licenses.txt`

  Es wird die neue Datei `dist/index.js` mit Deinem Code und den kompilierten Modulen angezeigt. You will also see an accompanying `dist/licenses.txt` file containing all the licenses of the `node_modules` you are using.

1. Ändere das Schlüsselwort `main` in der Datei `action.yml` so, dass die neue Datei `dist/index.js` verwendet wird. `main: 'dist/index.js'`

1. Falls Du Dein Verzeichnis `node_modules` bereits eingecheckt hast, entferne es. `rm -rf node_modules/*`

1. Committe in Deinem Terminal die Updates für Deine Dateien `action.yml`, `dist/index.js` und `node_modules`.
```shell
git add action.yml dist/index.js node_modules/*
git commit -m "Use vercel/ncc"
git tag -a -m "My first action release" v1.1
git push --follow-tags
```

### Deine Aktion in einem Workflow testen

Nun sind Sie bereit, Ihre Aktion in einem Workflow zu testen. Wenn eine Aktion in einem privaten Repository vorliegt, kann die Aktion nur in Workflows im selben Repository verwendet werden. Öffentliche Aktionen können von Workflows aus jedem Repository verwendet werden.

{% data reusables.actions.enterprise-marketplace-actions %}

#### Beispiel mit einer öffentlichen Aktion

This example demonstrates how your new public action can be run from within an external repository.

Copy the following YAML into a new file at `.github/workflows/main.yml`, and update the `uses: octocat/hello-world-javascript-action@v1.1` line with your username and the name of the public repository you created above. Darüber hinaus können Sie die Eingabe `who-to-greet` durch Ihren Namen ersetzen.

{% raw %}
```yaml
on: [push]

jobs:
  hello_world_job:
    runs-on: ubuntu-latest
    name: A job to say hello
    steps:
      - name: Hello world action step
        id: hello
        uses: octocat/hello-world-javascript-action@v1.1
        with:
          who-to-greet: 'Mona the Octocat'
      # Use the output from the `hello` step
      - name: Get the output time
        run: echo "The time was ${{ steps.hello.outputs.time }}"
```
{% endraw %}

When this workflow is triggered, the runner will download the `hello-world-javascript-action` action from your public repository and then execute it.

#### Beispiel mit einer privaten Aktion

Kopieren Sie den Workflow-Code im Repository Ihrer Aktion in eine `.github/workflows/main.yml`-Datei. Darüber hinaus können Sie die Eingabe `who-to-greet` durch Ihren Namen ersetzen.

{% raw %}
**.github/workflows/main.yml**
```yaml
zu: [push]

Jobs:
  hello_world_job:
    läuft auf: ubuntu-latest
    Name: Ein Job, um Hallo zu sagen
    Schritte:
      . Um die private Aktion dieses Repositorys zu verwenden,
      - Sie müssen das Repository
      - Name: Checkout
        verwendet: Aktionen/checkout@v2
      - Name: Hallo Welt-Aktionsschritt
        verwendet: ./ - Verwendet eine Aktion im Root-Verzeichnis
        ID: hallo
        mit:
          who-to-greet: 'Mona the Octocat'
      . Verwenden Sie die Ausgabe aus dem 'Hallo' Schritt
      - Name: Get the output time
        run:{{ steps.hello.outputs.time }}echo
```
{% endraw %}

Klicke in Deinem Repository auf die Registerkarte **Actions** (Aktionen), und wähle die neueste Workflow-Ausführung aus. {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}Under **Jobs** or in the visualization graph, click **A job to say hello**. {% endif %}You should see "Hello Mona the Octocat" or the name you used for the `who-to-greet` input and the timestamp printed in the log.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}
![Ein Screenshot zur Verwendung Deiner Aktion in einem Workflow](/assets/images/help/repository/javascript-action-workflow-run-updated-2.png)
{% elsif currentVersion ver_gt "enterprise-server@2.22" %}
![Ein Screenshot zur Verwendung Deiner Aktion in einem Workflow](/assets/images/help/repository/javascript-action-workflow-run-updated.png)
{% else %}
![Ein Screenshot zur Verwendung Deiner Aktion in einem Workflow](/assets/images/help/repository/javascript-action-workflow-run.png)
{% endif %}
