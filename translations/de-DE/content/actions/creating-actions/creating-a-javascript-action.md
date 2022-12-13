---
title: Creating a JavaScript action (Erstellen einer JavaScript-Aktion)
intro: 'In diesem Leitfaden erfährst du, wie du mit dem Aktionstoolkit eine JavaScript-Aktion erstellst.'
redirect_from:
  - /articles/creating-a-javascript-action
  - /github/automating-your-workflow-with-github-actions/creating-a-javascript-action
  - /actions/automating-your-workflow-with-github-actions/creating-a-javascript-action
  - /actions/building-actions/creating-a-javascript-action
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Action development
  - JavaScript
shortTitle: JavaScript action
ms.openlocfilehash: c42dca4205519f6799d7f92b254b75696853b7f9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145088652'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Einführung

In dieser Anleitung erfährst du mehr über die grundlegenden Komponenten, die benötigt werden, um eine paketierte Docker-Container-Aktion zu erstellen und zu verwenden. Diese Anleitung fokussiert jene Komponenten, welche zum Paketieren der Aktion benötigt werden. Daher hat der Aktions-Code nur minimale Funktionalität. Die Aktion schreibt „Hello World“ in die Logs oder "Hello [who-to-greet]" wenn du einen benutzerdefinierten Namen angibst.

Diese Anleitung verwendet das Node.js Modul des {% data variables.product.prodname_actions %}-Toolkits, um die Entwicklung zu beschleunigen. Weitere Informationen findest du im Repository für [Aktionen/Toolkits](https://github.com/actions/toolkit).

Nach dem Abschluss dieses Projekts solltest du verstehen, wie du deine eigene JavaScript-Aktion erstellen und sie in einem Workflow testen kannst.

{% data reusables.actions.pure-javascript %}

{% data reusables.actions.context-injection-warning %}

## Voraussetzungen

Bevor du beginnst, musst du Node.js herunterladen und ein öffentliches {% data variables.product.prodname_dotcom %}-Repository erstellen.

1. Lade Node.js {% ifversion fpt or ghes > 3.3 or ghae-issue-5504 or ghec %}16.x{% else %}12.x{% endif %} herunter – enthält npm –, und installiere es.

  {% ifversion fpt or ghes > 3.3 or ghae-issue-5504 or ghec %}https://nodejs.org/en/download/{% else %}https://nodejs.org/en/download/releases/{% endif %}

1. Erstelle ein neues öffentliches Repository in {% data variables.product.product_location %} und nenne es „hello-world-javascript-action“. Weitere Informationen findest du unter [Erstellen eines neuen Repositorys](/articles/creating-a-new-repository).

1. Klone dein Repository auf deinen Computer. Weitere Informationen findest du unter [Klonen eines Repositorys](/articles/cloning-a-repository).

1. Gehe in deinem Terminal zum Verzeichnisse deines neuen Repositorys.

  ```shell{:copy}
  cd hello-world-javascript-action
  ```

1. Initialisiere im Terminal das Verzeichnis mit npm, um eine `package.json`-Datei zu generieren.

  ```shell{:copy}
  npm init -y
  ```

## Eine Datei für die Metadaten der Aktion erstellen

Erstelle mit dem folgenden Beispielcode eine Datei namens `action.yml` im Verzeichnis `hello-world-javascript-action`. Weitere Informationen findest du unter [Metadatensyntax für {% data variables.product.prodname_actions %}](/actions/creating-actions/metadata-syntax-for-github-actions).

```yaml{:copy}
name: 'Hello World'
description: 'Greet someone and record the time'
inputs:
  who-to-greet:  # id of input
    description: 'Who to greet'
    required: true
    default: 'World'
outputs:
  time: # id of output
    description: 'The time we greeted you'
runs:
  using: {% ifversion fpt or ghes > 3.3 or ghae-issue-5504 or ghec %}'node16'{% else %}'node12'{% endif %}
  main: 'index.js'
```

Diese Datei definiert die Eingabe für `who-to-greet` und die Ausgabe für `time`. Sie teilt dem Aktionsrunner auch mit, wie diese JavaScript-Aktion gestartet wird.

## Toolkit-Pakete für Aktionen hinzufügen

Das Toolkit für Aktionen ist eine Node.js-Paketsammlung, mit der du JavaScript-Aktionen schnell und konsistenter erstellen kannst.

Das Toolkitpaket [`@actions/core`](https://github.com/actions/toolkit/tree/main/packages/core) bietet eine Schnittstelle zu Befehlen, Eingabe- und Ausgabevariablen, Beendigungsstatus und Debugnachrichten des Workflows.

Das Toolkit bietet auch ein [`@actions/github`](https://github.com/actions/toolkit/tree/main/packages/github)-Paket, das einen authentifizierten Octokit-REST-Client und Zugriff auf GitHub Actions-Kontexte zurückgibt.

Das Toolkit bietet mehr als die Pakete `core` und `github`. Weitere Informationen findest du im Repository für [Aktionen/Toolkits](https://github.com/actions/toolkit).

Installiere am Terminal die Pakete `core` und `github` des Aktionstoolkits.

```shell{:copy}
npm install @actions/core
npm install @actions/github
```

Jetzt solltest du ein `node_modules`-Verzeichnis mit den soeben installierten Modulen und eine `package-lock.json`-Datei mit den installierten Modulabhängigkeiten und den Versionen jedes installierten Moduls sehen.

## Aktions-Code schreiben

Diese Aktion verwendet das Toolkit, um die in der Metadatendatei der Aktion erforderliche Eingabevariable `who-to-greet` abzurufen, und gibt „Hello [who-to-greet]“ in einer Debuggingmeldung im Protokoll aus. Als Nächstes ruft das Skript die aktuelle Zeit ab und legt sie als eine Ausgabevariable fest, die von später in einem Auftrag ausgeführten Aktionen verwendet werden kann.

GitHub Actions stellt Kontextinformationen zum Webhook-Ereignis, zu den Git-Refs, zum Workflow, zur Aktion und zur Person bereit, die den Workflow ausgelöst hat. Um auf die Kontextinformationen zuzugreifen, kannst du das `github`-Paket verwenden. Die von Ihnen geschriebene Aktion gibt die Webhook-Ereignisnutzdaten im Protokoll aus.

Füge mit dem folgenden Code eine neue Datei namens `index.js` hinzu.

{% raw %}
```javascript{:copy}
const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
```
{% endraw %}

Wenn im obigen `index.js`-Beispiel ein Fehler ausgelöst wird, verwendet `core.setFailed(error.message);` das Aktionstoolkitpaket [`@actions/core`](https://github.com/actions/toolkit/tree/main/packages/core), um eine Nachricht zu protokollieren und einen Exitcode mit Fehler festzulegen. Weitere Informationen findest du unter [Festlegen von Exitcodes für Aktionen](/actions/creating-actions/setting-exit-codes-for-actions).

## Eine README erstellen

Du kannst eine README-Datei erstellen, um Person zu zeigen, wie sie deine Aktion verwenden sollen. Eine README-Datei ist sehr hilfreich, wenn du planst, deine Aktion öffentlich bereitzustellen. Sie ist jedoch auch eine gute Möglichkeit, dich oder dein Team daran zu erinnern, wie die Aktion zu verwenden ist.

Erstelle in deinem `hello-world-javascript-action`-Verzeichnis eine `README.md`-Datei, mit der die folgenden Informationen angegeben werden:

- Eine ausführliche Beschreibung, wozu die Aktion dient
- Erforderliche Eingabe- und Ausgabeargumente
- Optionale Eingabe- und Ausgabeargumente
- Geheimnisse, die von der Aktion verwendet werden
- Umgebungsvariablen, die von der Aktion verwendet werden
- Ein Beispiel für die Verwendung deiner Aktion in einem Workflow

```markdown{:copy}
# Hello world javascript action

This action prints "Hello World" or "Hello" + the name of a person to greet to the log.

## Inputs

## `who-to-greet`

**Required** The name of the person to greet. Default `"World"`.

## Outputs

## `time`

The time we greeted you.

## Example usage

uses: actions/hello-world-javascript-action@v1.1
with:
  who-to-greet: 'Mona the Octocat'
```

## Committe, tagge und pushe deine Aktion auf GitHub

{% data variables.product.product_name %} lädt jede Aktion, die zur Laufzeit in einem Workflow ausgeführt wird, herunter und führt sie als komplettes Codepaket aus, bevor du Workflowbefehle wie `run` zur Interaktion mit dem Runnercomputer verwenden kannst. Folglich musst du alle zum Ausführen des JavaScript-Codes erforderlichen Paketabhängigkeiten einschließen. Du musst die Pakete `core` und `github` des Toolkits im Repository deiner Aktion einchecken.

Committe von deinem Terminal aus die Dateien `action.yml`, `index.js`, `node_modules`, `package.json`, `package-lock.json` und `README.md`. Wenn du eine `.gitignore`-Datei hinzugefügt hast, die `node_modules` auflistet, musst du diese Zeile entfernen, um das `node_modules`-Verzeichnis zu committen.

Es hat sich bewährt, auch ein Versions-Tag für Releases deiner Aktion hinzuzufügen. Weitere Informationen zur Versionsverwaltung deiner Aktion findest du unter [Informationen zu Aktionen](/actions/automating-your-workflow-with-github-actions/about-actions#using-release-management-for-actions).

```shell{:copy}
git add action.yml index.js node_modules/* package.json package-lock.json README.md
git commit -m "My first action is ready"
git tag -a -m "My first action release" v1.1
git push --follow-tags
```

Das Einchecken deines `node_modules`-Verzeichnisses kann zu Problemen führen. Alternativ dazu kannst du ein Tool namens [`@vercel/ncc`](https://github.com/vercel/ncc) verwenden, um deinen Code und deine Module in eine Datei zu kompilieren, die für die Verteilung verwendet wird.

1. Installiere `vercel/ncc`, indem du diesen Befehl an deinem Terminal ausführst.
  `npm i -g @vercel/ncc`

1. Kompiliere deine `index.js`-Datei.
  `ncc build index.js --license licenses.txt`

  Du siehst eine neue `dist/index.js`-Datei mit deinem Code und den kompilierten Modulen.
  Außerdem siehst du eine begleitende `dist/licenses.txt`-Datei mit allen Lizenzen der `node_modules`, die du verwendest.

1. Ändere das `main`-Schlüsselwort in deiner `action.yml`-Datei so, dass die neue `dist/index.js`-Datei verwendet wird.
 `main: 'dist/index.js'`

1. Wenn du das `node_modules`-Verzeichnis bereits eingecheckt hast, entferne es.
  `rm -rf node_modules/*`

1. Committe an deinem Terminal die Aktualisierungen in die Dateien `action.yml`, `dist/index.js` und `node_modules`.
```shell{:copy}
git add action.yml dist/index.js node_modules/*
git commit -m "Use vercel/ncc"
git tag -a -m "My first action release" v1.1
git push --follow-tags
```

## Deine Aktion in einem Workflow testen

Nun bist du bereit, deine Aktion in einem Workflow zu testen. Wenn sich eine Aktion in einem privaten Repository befindet, kann die Aktion nur in Workflows im gleichen Repository verwendet werden. Öffentliche Aktionen können von Workflows in jedem beliebigen Repository verwendet werden.

{% data reusables.actions.enterprise-marketplace-actions %}

### Beispiel mit einer öffentlichen Aktion

Dieses Beispiel veranschaulicht, wie deine neue öffentliche Aktion aus einem externen Repository heraus ausgeführt werden kann.

Kopiere den folgende YAML-Code in eine neue Datei in `.github/workflows/main.yml`, und aktualisiere die Zeile `uses: octocat/hello-world-javascript-action@v1.1` mit deinem Benutzernamen und dem Namen des öffentlichen Repositorys, das du weiter oben erstellt hast. Du kannst auch die Eingabe für `who-to-greet` durch deinen Namen ersetzen.

{% raw %}
```yaml{:copy}
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

Wenn dieser Workflow ausgelöst wird, lädt der Runner die Aktion `hello-world-javascript-action` aus deinem öffentlichen Repository herunter und führt sie aus.

### Beispiel mit einer privaten Aktion

Kopiere den Workflowcode in eine `.github/workflows/main.yml`-Datei im Repository deiner Aktion. Du kannst auch die Eingabe für `who-to-greet` durch deinen Namen ersetzen.

**.github/workflows/main.yml**
```yaml{:copy}
on: [push]

jobs:
  hello_world_job:
    runs-on: ubuntu-latest
    name: A job to say hello
    steps:
      # To use this repository's private action,
      # you must check out the repository
      - name: Checkout
        uses: {% data reusables.actions.action-checkout %}
      - name: Hello world action step
        uses: ./ # Uses an action in the root directory
        id: hello
        with:
          who-to-greet: 'Mona the Octocat'
      # Use the output from the `hello` step
      - name: Get the output time
        run: echo "The time was {% raw %}${{ steps.hello.outputs.time }}{% endraw %}"
```

Klicke in deinem Repository auf die Registerkarte **Aktionen**, und wähle die neueste Workflowausführung aus. Klicke unter **Aufträge** oder im Visualisierungsdiagramm auf **A job to say hello**. Im Protokoll sollten „Hello Mona the Octocat“ oder der von Ihnen für die `who-to-greet`-Eingabe verwendete Name und der Zeitstempel ausgegeben werden.

![Ein Screenshot zur Verwendung deiner Aktion in einem Workflow](/assets/images/help/repository/javascript-action-workflow-run-updated-2.png)
