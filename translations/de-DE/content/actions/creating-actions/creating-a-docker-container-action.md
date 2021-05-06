---
title: Eine Docker-Container-Aktion erstellen
intro: 'In diesem Leitfaden werden die mindestens erforderlichen Schritte zum Erstellen einer Docker-Container-Aktion beschrieben.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/creating-a-docker-container-action
  - /github/automating-your-workflow-with-github-actions/creating-a-docker-container-action
  - /actions/automating-your-workflow-with-github-actions/creating-a-docker-container-action
  - /actions/building-actions/creating-a-docker-container-action
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: 'tutorial'
topics:
  - 'Action development'
  - 'Docker'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Einführung

In dieser Anleitung erfährst Du mehr über die grundlegenden Komponenten, die benötigt werden, um eine paketierte Docker-Container-Aktion zu erstellen und zu verwenden. Diese Anleitung fokussiert jene Komponenten, welche zum Paketieren der Aktion benötigt werden. Daher hat der Aktions-Code nur minimale Funktionalität. Die Aktion schreibt „Hello World“ in die Logs oder "Hello [who-to-greet]" wenn du einen benutzerdefinierten Namen angibst.

Nach dem Abschluss dieses Projekts wirst Du verstehen, wie Du Deine eigene Docker-Containeraktion erstellen und sie in einem Workflow testen kannst.

{% data reusables.github-actions.self-hosted-runner-reqs-docker %}

### Vorrausetzungen

Es wir Dir vielleicht helfen, {% data variables.product.prodname_actions %} Umgebungsvariablen und das Docker-Container-Dateisystem grundlegend zu verstehen:

- "[Umgebungsvariablen verwenden](/actions/automating-your-workflow-with-github-actions/using-environment-variables)"
{% if currentVersion == "github-ae@latest" %}
- "[Docker container filesystem](/actions/using-github-hosted-runners/about-ae-hosted-runners#docker-container-filesystem)."
{% else %}
- "[Virtuelle Umgebungen für {% data variables.product.prodname_dotcom %}](/actions/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners#docker-container-filesystem)"
{% endif %}

Before you begin, you'll need to create a {% data variables.product.prodname_dotcom %} repository.

1. Erstellen Sie ein neues Repository auf {% data variables.product.product_location %}. Du kannst einen beliebigen Repository-Namen auswählen oder wie in diesem Beispiel „hello-world-docker-action“ verwenden. Weitere Informationen finden Sie unter „[Neues Repository erstellen](/articles/creating-a-new-repository)“.

1. Clone Dein Repository auf Deinen Computer. Weitere Informationen findest Du unter „[Ein Repository clonen](/articles/cloning-a-repository)“.

1. Gehe in Deinem Terminal zum Verzeichnisse Deines neuen Repositorys.

  ```shell{:copy}
  cd hello-world-docker-action
  ```

### Eine Docker-Datei erstellen

Erstelle im neuen Verzeichnis `hello-world-docker-action` eine neue `Dockerfile`-Datei. For more information, see "[Dockerfile support for {% data variables.product.prodname_actions %}](/actions/creating-actions/dockerfile-support-for-github-actions)."

**Dockerfile**
```dockerfile{:copy}
# Container-Image, das Deinen Code ausführt
FROM alpine:3.10

# Kopiert die Codedatei aus Deinem Aktions-Repository in den Dateisystempfad `/` des Containers
COPY entrypoint.sh /entrypoint.sh

# Codedatei, die beim Start des Docker-Containers ausgeführt werden soll (`entrypoint.sh`)
ENTRYPOINT ["/entrypoint.sh"]
```

### Eine Datei für die Metadaten der Aktion erstellen

Erstelle eine neue `action.yml`-Datei im oben von Dir erstellten Verzeichnis `hello-world-docker-action`. Weitere Informationen findest Du unter „[Metadaten-Syntax für {% data variables.product.prodname_actions %}](/actions/creating-actions/metadata-syntax-for-github-actions)“.

{% raw %}
**action.yml**
```yaml{:copy}
# action.yml
name: 'Hello World'
description: 'Greet someone and record the time'
inputs:
  who-to-greet:  # Eingabe-ID
    description: 'Who to greet'
    required: true
    default: 'World'
outputs:
  time: # Ausgabe-ID
    description: 'The time we greeted you'
runs:
  using: 'docker'
  image: 'Dockerfile'
  args:
    - ${{ inputs.who-to-greet }}
```
{% endraw %}

Diese Metadaten definieren einen `who-to-greet`-Eingabe- und einen `time`-Ausgabeparameter. Um Eingaben an den Docker-Container weiterzugeben, musst Du die Eingabe mit `inputs` deklarieren und die Eingabe im Schlüsselwort`args` weitergeben.

{% data variables.product.prodname_dotcom %} erstellt basierend auf Ihrem `Dockerfile` ein Image und führt mithilfe dieses Images Befehle in einem neuen Container aus.

### Aktions-Code schreiben

Du kannst ein beliebiges Basis-Docker-Image und folglich auch eine beliebige Sprache für Deine Aktion auswählen. Im folgenden Shellskript-Beispiel wird die Eingabevariable `who-to-greet` verwendet, um in der Protokolldatei „Hello [who-to-greet]“ auszugeben.

Als Nächstes ruft das Skript die aktuelle Zeit ab und legt sie als eine Ausgabevariable fest, die von später in einem Auftrag ausgeführten Aktionen verwendet werden kann. Damit {% data variables.product.prodname_dotcom %} Ausgabevariablen erkennen kann, musst Du einen Workflow-Befehl in einer bestimmten Syntax verwenden: `echo "::set-output name=<output name>::<value>"`. Weitere Informationen findest Du unter „[Workflow-Befehle für {% data variables.product.prodname_actions %}](/actions/reference/workflow-commands-for-github-actions#setting-an-output-parameter)“.

1. Erstelle eine neue `entrypoint.sh`-Datei im Verzeichnis `hello-world-docker-action`.

1. Füge Deiner Datei `entrypoint.sh` den folgenden Code hinzu.

  **entrypoint.sh**
  ```shell{:copy}
  #!/bin/sh -l

  echo "Hello $1"
  time=$(date)
  echo "::set-output name=time::$time"
  ```
  Wenn `entrypoint.sh` ohne Fehler durchläuft, wird der Status der Aktion auf `success` (erfolgreich) festgelegt. Du kannst auch explizit Exit-Codes im Code Deiner Aktion festlegen, um einen Status der Aktion anzugeben. Weitere Informationen findest Du unter "[Exit Codes für Aktionen setzen](/actions/creating-actions/setting-exit-codes-for-actions)."

1. Make your `entrypoint.sh` file executable by running the following command on your system.

  ```shell{:copy}
  $ chmod +x entrypoint.sh
  ```

### Eine README erstellen

Sie können eine README-Datei erstellen, um Person dahingehend zu informieren, wie sie Ihre Aktion verwenden sollen. Eine README ist am hilfreichsten, wenn Sie vorhaben, Ihre Aktion öffentlich freizugeben. Zudem eignet sie sich dafür, Sie oder Ihr Team dahingehend zu erinnern, wie die Aktion verwendet wird.

Erstellen Sie in Ihrem Verzeichnis `hello-world-docker-action` eine `README.md`-Datei, welche die folgenden Informationen angibt:

- Eine ausführliche Beschreibung, was die Aktion bewirkt.
- Erforderliche Eingabe- und Ausgabe-Argumente.
- Optionale Eingabe- und Ausgabe-Argumente.
- Geheimnisse, die in der Aktion benutzt werden.
- Umgebungsvariablen, die in der Aktion benutzt werden.
- Ein Beispiel für die Verwendung Deiner Aktion in einem Workflow.

**README.md**
```markdown{:copy}
# Docker-Aktion „Hello world“

Diese Aktion gibt „Hello World“ oder „Hello“ + den Namen einer Person aus, die im Protokoll gegrüßt werden soll.

## Inputs

### `who-to-greet`

**Erforderlich** Der Name der zu grüßenden Person. Der Standardwert lautet „World“.

## Outputs

### `time`

Die Zeit, zu der Sie gegrüßt wurden.

## Example usage

uses: actions/hello-world-docker-action@v1
with:
  who-to-greet: 'Mona the Octocat'
```

### Committe, tagge und pushe Deine Aktion auf GitHub

Committen Sie in Ihrem Terminal Ihre Dateien `action.yml`, `entrypoint.sh`, `Dockerfile` und `README.md`.

Es hat sich bewährt, auch ein Versions-Tag für Releases Deiner Aktion hinzuzufügen. Weitere Informationen zur Versionierung Deiner Aktion findest Du unter "[Informationen zu Aktionen](/actions/automating-your-workflow-with-github-actions/about-actions#using-release-management-for-actions)."

```shell{:copy}
git add action.yml entrypoint.sh Dockerfile README.md
git commit -m "My first action is ready"
git tag -a -m "My first action release" v1
git push --follow-tags
```

### Deine Aktion in einem Workflow testen

Nun sind Sie bereit, Ihre Aktion in einem Workflow zu testen. Wenn eine Aktion in einem privaten Repository vorliegt, kann die Aktion nur in Workflows im selben Repository verwendet werden. Öffentliche Aktionen können von Workflows aus jedem Repository verwendet werden.

{% data reusables.actions.enterprise-marketplace-actions %}

#### Beispiel mit einer öffentlichen Aktion

The following workflow code uses the completed _hello world_ action in the public [`actions/hello-world-docker-action`](https://github.com/actions/hello-world-docker-action) repository. Kopieren Sie den folgenden Workflow-Beispielcode in eine `.github/workflows/main.yml`-Datei. Ersetzen Sie jedoch `actions/hello-world-docker-action` durch Ihren Repository- und Aktionsnamen. Darüber hinaus können Sie die Eingabe `who-to-greet` durch Ihren Namen ersetzen. {% if currentVersion == "free-pro-team@latest" %}Public actions can be used even if they're not published to {% data variables.product.prodname_marketplace %}. For more information, see "[Publishing an action](/actions/creating-actions/publishing-actions-in-github-marketplace#publishing-an-action)." {% endif %}

{% raw %}
**.github/workflows/main.yml**
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
    # Verwenden Sie die Ausgabe aus dem „hello“-Schritt.
    - name: Get the output time
      run: echo "The time was ${{ steps.hello.outputs.time }}"
```
{% endraw %}

#### Beispiel mit einer privaten Aktion

Kopieren Sie den folgenden Workflow-Beispielcode im Repository Ihrer Aktion in eine `.github/workflows/main.yml`-Datei. Darüber hinaus können Sie die Eingabe `who-to-greet` durch Ihren Namen ersetzen. {% if currentVersion == "free-pro-team@latest" %}This private action can't be published to {% data variables.product.prodname_marketplace %}, and can only be used in this repository.{% endif %}

{% raw %}
**.github/workflows/main.yml**
```yaml{:copy}
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
![Ein Screenshot zur Verwendung Deiner Aktion in einem Workflow](/assets/images/help/repository/docker-action-workflow-run-updated.png)
{% else %}
![Ein Screenshot zur Verwendung Deiner Aktion in einem Workflow](/assets/images/help/repository/docker-action-workflow-run.png)
{% endif %}
