---
title: Creating a Docker container action (Erstellen einer Docker-Containeraktion)
intro: 'In diesem Leitfaden werden die mindestens erforderlichen Schritte zum Erstellen einer Docker-Containeraktion beschrieben. '
redirect_from:
  - /articles/creating-a-docker-container-action
  - /github/automating-your-workflow-with-github-actions/creating-a-docker-container-action
  - /actions/automating-your-workflow-with-github-actions/creating-a-docker-container-action
  - /actions/building-actions/creating-a-docker-container-action
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Action development
  - Docker
shortTitle: Docker container action
ms.openlocfilehash: f22b361f25f406dfdb1233f4d9ce62f2b6b919dc
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147518784'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Einführung

In dieser Anleitung erfährst du mehr über die grundlegenden Komponenten, die benötigt werden, um eine paketierte Docker-Containeraktion zu erstellen und zu verwenden. Diese Anleitung fokussiert jene Komponenten, welche zum Paketieren der Aktion benötigt werden. Daher hat der Aktions-Code nur minimale Funktionalität. Die Aktion schreibt „Hello World“ in die Logs oder "Hello [who-to-greet]" wenn du einen benutzerdefinierten Namen angibst.

Nach dem Abschluss dieses Projekts wirst du verstehen, wie du deine eigene Docker-Containeraktion erstellen und sie in einem Workflow testen kannst.

{% data reusables.actions.self-hosted-runner-reqs-docker %}

{% data reusables.actions.context-injection-warning %}

## Voraussetzungen

Es wird dir vielleicht helfen, {% data variables.product.prodname_actions %}-Umgebungsvariablen und das Docker-Containerdateisystem grundlegend zu verstehen:

- [Verwenden von Umgebungsvariablen](/actions/automating-your-workflow-with-github-actions/using-environment-variables) {% ifversion ghae %}
- [Docker-Container-Dateisystem](/actions/using-github-hosted-runners/about-ae-hosted-runners#docker-container-filesystem)
{% else %} 
- [Informationen zu {% data variables.product.prodname_dotcom %}-gehosteten Runnern](/actions/using-github-hosted-runners/about-github-hosted-runners#docker-container-filesystem) {% endif %}

Bevor du beginnst, musst du ein {% data variables.product.prodname_dotcom %}-Repository erstellen.

1. Erstelle ein neues Repository auf {% data variables.product.product_location %}. Du kannst einen beliebigen Repository-Namen auswählen oder wie in diesem Beispiel „hello-world-docker-action“ verwenden. Weitere Informationen findest du unter [Erstellen eines neuen Repositorys](/articles/creating-a-new-repository).

1. Klone dein Repository auf deinen Computer. Weitere Informationen findest du unter [Klonen eines Repositorys](/articles/cloning-a-repository).

1. Gehe in deinem Terminal zum Verzeichnis deines neuen Repositorys.

  ```shell{:copy}
  cd hello-world-docker-action
  ```

## Eine Docker-Datei erstellen

Erstelle in deinem neuen `hello-world-docker-action`-Verzeichnis eine neue `Dockerfile`-Datei. Stelle sicher, dass dein Dateiname richtig großgeschrieben ist, wenn Probleme auftreten. Verwende ein großes `D`, aber kein großes `f`. Weitere Informationen findest du unter [Dockerfile-Unterstützung für {% data variables.product.prodname_actions %}](/actions/creating-actions/dockerfile-support-for-github-actions).

**Dockerfile**
```Dockerfile{:copy}
# Container image that runs your code
FROM alpine:3.10

# Copies your code file from your action repository to the filesystem path `/` of the container
COPY entrypoint.sh /entrypoint.sh

# Code file to execute when the docker container starts up (`entrypoint.sh`)
ENTRYPOINT ["/entrypoint.sh"]
```

## Eine Datei für die Metadaten der Aktion erstellen

Erstelle eine neue `action.yml`-Datei im oben erstellten `hello-world-docker-action`-Verzeichnis. Weitere Informationen findest du unter [Metadatensyntax für {% data variables.product.prodname_actions %}](/actions/creating-actions/metadata-syntax-for-github-actions).

{% raw %} **action.yml**
```yaml{:copy}
# action.yml
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
  using: 'docker'
  image: 'Dockerfile'
  args:
    - ${{ inputs.who-to-greet }}
```
{% endraw %}

Diese Metadaten definieren einen `who-to-greet`-Eingabe- und einen `time`-Ausgabeparameter. Um Eingaben an den Docker-Container zu übergeben, solltest du die Eingabe mithilfe von `inputs` deklarieren und mithilfe des Schlüsselworts `args` übergeben. Alles, was in `args` enthalten ist, wird an den Container übergeben, doch für eine bessere Auffindbarkeit für Benutzer*innen deiner Aktion wird das Verwenden von Eingaben empfohlen.

{% data variables.product.prodname_dotcom %} erstellt basierend auf deinem `Dockerfile` ein Image und führt mithilfe dieses Images Befehle in einem neuen Container aus.

## Aktions-Code schreiben

Du kannst ein beliebiges Basis-Docker-Image und folglich auch eine beliebige Sprache für deine Aktion auswählen. Im folgenden Shellskriptbeispiel wird die Eingabevariable `who-to-greet` verwendet, um in der Protokolldatei „Hello [who-to-greet]“ auszugeben.

Als Nächstes ruft das Skript die aktuelle Zeit ab und legt sie als eine Ausgabevariable fest, die von später in einem Auftrag ausgeführten Aktionen verwendet werden kann. Damit {% data variables.product.prodname_dotcom %} Ausgabevariablen erkennen können, musst du einen Workflowbefehl in einer bestimmten Syntax verwenden: `echo "::set-output name=<output name>::<value>"` Weitere Informationen findest du unter [Workflowbefehle für {% data variables.product.prodname_actions %}](/actions/reference/workflow-commands-for-github-actions#setting-an-output-parameter).

1. Erstelle im `hello-world-docker-action`-Verzeichnis eine neue `entrypoint.sh`-Datei.

1. Füge deiner `entrypoint.sh`-Datei den folgenden Code hinzu:

  **entrypoint.sh**
  ```shell{:copy}
  #!/bin/sh -l

  echo "Hello $1"
  time=$(date)
  echo "::set-output name=time::$time"
  ```
  Wenn `entrypoint.sh` ohne Fehler ausgeführt wird, wird der Status der Aktion auf `success` festgelegt. Du kannst auch explizit Exitcodes im Code deiner Aktion festlegen, um einen Status der Aktion anzugeben. Weitere Informationen findest du unter [Festlegen von Exitcodes für Aktionen](/actions/creating-actions/setting-exit-codes-for-actions).

1. Mache deine `entrypoint.sh`-Datei ausführbar, indem du den folgenden Befehl auf deinem System ausführst.

  ```shell{:copy}
  $ chmod +x entrypoint.sh
  ```

## Eine README erstellen

Du kannst eine README-Datei erstellen, um Person zu zeigen, wie sie deine Aktion verwenden sollen. Eine README-Datei ist sehr hilfreich, wenn du planst, deine Aktion öffentlich bereitzustellen. Sie ist jedoch auch eine gute Möglichkeit, dich oder dein Team daran zu erinnern, wie die Aktion zu verwenden ist.

Erstelle in deinem `hello-world-docker-action`-Verzeichnis eine `README.md`-Datei, mit der die folgenden Informationen angegeben werden:

- Eine ausführliche Beschreibung, wozu die Aktion dient
- Erforderliche Eingabe- und Ausgabeargumente
- Optionale Eingabe- und Ausgabeargumente
- Geheimnisse, die von der Aktion verwendet werden
- Umgebungsvariablen, die von der Aktion verwendet werden
- Ein Beispiel für die Verwendung deiner Aktion in einem Workflow

**README.md**
```markdown{:copy}
# Hello world docker action

This action prints "Hello World" or "Hello" + the name of a person to greet to the log.

## Inputs

## `who-to-greet`

**Required** The name of the person to greet. Default `"World"`.

## Outputs

## `time`

The time we greeted you.

## Example usage

uses: actions/hello-world-docker-action@v1
with:
  who-to-greet: 'Mona the Octocat'
```

## Committen, Markieren und Pushen der Aktion zu {% data variables.product.product_name %}

Committe von deinem Terminal aus deine `action.yml`-, `entrypoint.sh`-, `Dockerfile`- und `README.md`-Dateien.

Es hat sich bewährt, auch ein Versionstag für Releases deiner Aktion hinzuzufügen. Weitere Informationen zur Versionsverwaltung deiner Aktion findest du unter [Informationen zu Aktionen](/actions/automating-your-workflow-with-github-actions/about-actions#using-release-management-for-actions).

```shell{:copy}
git add action.yml entrypoint.sh Dockerfile README.md
git commit -m "My first action is ready"
git tag -a -m "My first action release" v1
git push --follow-tags
```

## Testen deiner Aktion in einem Workflow

Nun bist du bereit, deine Aktion in einem Workflow zu testen. Wenn sich eine Aktion in einem privaten Repository befindet, kann die Aktion nur in Workflows im gleichen Repository verwendet werden. Öffentliche Aktionen können von Workflows in jedem beliebigen Repository verwendet werden.

{% data reusables.actions.enterprise-marketplace-actions %}

### Beispiel mit einer öffentlichen Aktion

Der folgende Workflowcode verwendet die abgeschlossene _hello world_-Aktion im öffentlichen [`actions/hello-world-docker-action`](https://github.com/actions/hello-world-docker-action)-Repository. Kopiere den folgenden Workflow-Beispielcode in eine `.github/workflows/main.yml`-Datei, ersetze jedoch `actions/hello-world-docker-action` durch dein Repository und den Aktionsnamen. Du kannst auch die `who-to-greet`-Eingabe durch deinen Namen ersetzen. {% ifversion fpt or ghec %}Öffentliche Aktionen können auch dann verwendet werden, wenn sie nicht auf dem {% data variables.product.prodname_marketplace %} veröffentlicht sind. Weitere Informationen findest du unter [Veröffentlichen einer Aktion](/actions/creating-actions/publishing-actions-in-github-marketplace#publishing-an-action). {% endif %}

{% raw %} **.github/workflows/main.yml**
```yaml{:copy}
on: [push]

jobs:
  hello_world_job:
    runs-on: ubuntu-latest
    name: A job to say hello
    steps:
      - name: Hello world action step
        id: hello
        uses: actions/hello-world-docker-action@v1
        with:
          who-to-greet: 'Mona the Octocat'
      # Use the output from the `hello` step
      - name: Get the output time
        run: echo "The time was ${{ steps.hello.outputs.time }}"
```
{% endraw %}

### Beispiel mit einer privaten Aktion

Kopiere den folgenden Workflow-Beispielcode in eine `.github/workflows/main.yml`-Datei im Repository deiner Aktion. Du kannst auch die `who-to-greet`-Eingabe durch deinen Namen ersetzen. {% ifversion fpt or ghec %}Diese private Aktion kann nicht auf dem {% data variables.product.prodname_marketplace %} veröffentlicht und kann nur in diesem Repository verwendet werden.{% endif %}

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
        run: echo "The time was {% raw %}${{ steps.hello.outputs.time }}"{% endraw %}
```

Klicke in deinem Repository auf die Registerkarte **Aktionen**, und wähle die neueste Workflowausführung aus. Klicke unter **Aufträge** oder im Visualisierungsdiagramm auf **A job to say hello**. Im Protokoll sollten „Hello Mona the Octocat“ oder der von Ihnen für die `who-to-greet`-Eingabe verwendete Name und der Zeitstempel ausgegeben werden.

![Ein Screenshot zur Verwendung deiner Aktion in einem Workflow](/assets/images/help/repository/docker-action-workflow-run-updated.png)

