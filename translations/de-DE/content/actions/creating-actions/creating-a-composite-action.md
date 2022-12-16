---
title: Erstellen einer zusammengesetzten Aktion
shortTitle: Create a composite action
intro: 'In diesem Leitfaden wird erläutert, wie du eine zusammengesetzte Aktion erstellst.'
redirect_from:
  - /actions/creating-actions/creating-a-composite-run-steps-action
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Action development
ms.openlocfilehash: 5c7d332d2b3626a5628e85b09c35ffa6a0ca5f33
ms.sourcegitcommit: 4f08a208a0d2e13dc109678750a962ea2f67e1ba
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 12/06/2022
ms.locfileid: '148192039'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Einführung

In dieser Anleitung erfährst du mehr über die grundlegenden Komponenten, die benötigt werden, um eine paketierte zusammengesetzte Aktion zu erstellen und zu verwenden. Diese Anleitung fokussiert jene Komponenten, welche zum Paketieren der Aktion benötigt werden. Daher hat der Aktions-Code nur minimale Funktionalität. Die Aktion gibt „Hello World“ und dann „Goodbye“ bzw. nach Angabe eines benutzerdefinierten Namens „Hello [who-to-greet]“ und dann „Goodbye“ aus. Zudem ordnet die Aktion der Ausgabevariablen `random-number` eine Zufallszahl zu und führt ein Skript namens `goodbye.sh` aus.

Nach dem Abschluss dieses Projekts weißt du, wie du eine eigene zusammengesetzte Aktion erstellen und in einem Workflow testen kannst.

{% data reusables.actions.context-injection-warning %}

## Voraussetzungen

Bevor du beginnst, erstellst du ein Repository auf {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}.

1. Erstelle ein neues öffentliches Repository auf {% data variables.location.product_location %}. Du kannst einen beliebigen Repositorynamen auswählen oder das folgende `hello-world-composite-action`-Beispiel verwenden. Du kannst diese Dateien hinzufügen, nachdem dein Projekt per Push an {% data variables.product.product_name %} übergeben wurde. Weitere Informationen findest du unter [Erstellen eines neuen Repositorys](/articles/creating-a-new-repository).

1. Klone dein Repository auf deinen Computer. Weitere Informationen findest du unter [Klonen eines Repositorys](/articles/cloning-a-repository).

1. Gehe in deinem Terminal zum Verzeichnisse deines neuen Repositorys.

  ```shell
  cd hello-world-composite-action
  ```

2. Erstelle im Repository `hello-world-composite-action` eine neue Datei namens `goodbye.sh`, und füge den folgenden Beispielcode hinzu:

  ```bash
  echo "Goodbye"
  ```

3. Lege `goodbye.sh` über das Terminal als ausführbare Datei fest.

  ```shell
  chmod +x goodbye.sh
  ```

1. Checke die Datei `goodbye.sh` über das Terminal ein.
  ```shell
  git add goodbye.sh
  git commit -m "Add goodbye script"
  git push
  ```

## Eine Datei für die Metadaten der Aktion erstellen

1. Erstelle im Repository `hello-world-composite-action` eine neue Datei namens `action.yml`, und füge den folgenden Beispielcode hinzu. Weitere Informationen zu dieser Syntax findest du unter [`runs` für eine zusammengesetzte Aktion](/actions/creating-actions/metadata-syntax-for-github-actions#runs-for-composite-actions).

    {% raw %}  **action.yml**
    ```yaml
    name: 'Hello World'
    description: 'Greet someone'
    inputs:
      who-to-greet:  # id of input
        description: 'Who to greet'
        required: true
        default: 'World'
    outputs:
      random-number:
        description: "Random number"
        value: ${{ steps.random-number-generator.outputs.random-number }}
    runs:
      using: "composite"
      steps:
        - run: echo Hello ${{ inputs.who-to-greet }}.
          shell: bash
        - id: random-number-generator{% endraw %}
{%- ifversion actions-save-state-set-output-envs %}
          run: echo "random-number=$(echo $RANDOM)" >> $GITHUB_OUTPUT
{%- else %}
          run: echo "::set-output name=random-number::$(echo $RANDOM)"
{%- endif %}{% raw %}
          shell: bash
        - run: echo "${{ github.action_path }}" >> $GITHUB_PATH
          shell: bash
        - run: goodbye.sh
          shell: bash
    ```
    {% endraw %} Diese Datei definiert die `who-to-greet`-Eingabe, ordnet die zufällig generierte Zahl der Ausgabevariablen `random-number` zu, fügt den Pfad der Aktion zum Systempfad des Runners hinzu (um das Skript `goodbye.sh` während der Ausführung ausfindig zu machen) und führt das Skript `goodbye.sh` aus.

  Weitere Informationen zum Verwalten von Ausgaben findest du unter [`outputs` für eine zusammengesetzte Aktion](/actions/creating-actions/metadata-syntax-for-github-actions#outputs-for-composite-actions).

  Weitere Informationen zum Verwenden von `github.action_path` findest du unter [`github context`](/actions/reference/context-and-expression-syntax-for-github-actions#github-context).

1. Checke die Datei `action.yml` über das Terminal ein.

  ```shell
  git add action.yml
  git commit -m "Add action"
  git push
  ```

1. Füge über das Terminal ein Tag hinzu. In diesem Beispiel wird ein Tag namens `v1` verwendet. Weitere Informationen findest du unter [Informationen zu Aktionen](/actions/creating-actions/about-actions#using-release-management-for-actions).

  ```shell
  git tag -a -m "Description of this release" v1
  git push --follow-tags
  ```

## Deine Aktion in einem Workflow testen

Der folgende Workflowcode verwendet die abgeschlossene „Hello World“-Aktion, die du unter [Erstellen einer Aktionsmetadatendatei](/actions/creating-actions/creating-a-composite-action#creating-an-action-metadata-file) erstellt hast.

Kopiere den Workflowcode in eine Datei `.github/workflows/main.yml` in einem anderen Repository, aber ersetze `actions/hello-world-composite-action@v1` durch das von dir erstellte Repository und Tag. Du kannst auch die Eingabe für `who-to-greet` durch deinen Namen ersetzen.

**.github/workflows/main.yml**
```yaml
on: [push]

jobs:
  hello_world_job:
    runs-on: ubuntu-latest
    name: A job to say hello
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - id: foo
        uses: actions/hello-world-composite-action@v1
        with:
          who-to-greet: 'Mona the Octocat'
      - run: echo random-number {% raw %}${{ steps.foo.outputs.random-number }}{% endraw %}
        shell: bash
```

Klicke in deinem Repository auf die Registerkarte **Aktionen**, und wähle die neueste Workflowausführung aus. Die Ausgabe sollte Folgendes enthalten: „Hello Mona the Octocat“, das Ergebnis des Skripts „Goodbye“ und eine zufällige Zahl.
