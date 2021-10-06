---
title: Creating a composite action
intro: 'In this guide, you''ll learn how to build a composite action.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/creating-actions/creating-a-composite-run-steps-action
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
type: tutorial
topics:
  - Action development
shortTitle: Composite action
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

## Einführung

In this guide, you'll learn about the basic components needed to create and use a packaged composite action. Diese Anleitung fokussiert jene Komponenten, welche zum Paketieren der Aktion benötigt werden. Daher hat der Aktions-Code nur minimale Funktionalität. The action prints "Hello World" and then "Goodbye",  or if you provide a custom name, it prints "Hello [who-to-greet]" and then "Goodbye". The action also maps a random number to the `random-number` output variable, and runs a script named `goodbye.sh`.

Once you complete this project, you should understand how to build your own composite action and test it in a workflow.

{% data reusables.github-actions.context-injection-warning %}

## Vorrausetzungen

Before you begin, you'll create a {% data variables.product.product_name %} repository.

1. Create a new public repository on {% data variables.product.product_location %}. You can choose any repository name, or use the following `hello-world-composite-action` example. Du kannst diese Dateien hinzufügen, nachdem Dein Projekt per Push an {% data variables.product.product_name %} übergeben wurde. Weitere Informationen finden Sie unter „[Neues Repository erstellen](/articles/creating-a-new-repository)“.

1. Clone Dein Repository auf Deinen Computer. Weitere Informationen findest Du unter „[Ein Repository clonen](/articles/cloning-a-repository)“.

1. Gehe in Deinem Terminal zum Verzeichnisse Deines neuen Repositorys.

  ```shell
  cd hello-world-composite-action
  ```

2. In the `hello-world-composite-action` repository, create a new file called `goodbye.sh`, and add the following example code:

  ```bash
  echo "Auf Wiedersehen"
  ```

3. From your terminal, make `goodbye.sh` executable.

  ```shell
  chmod +x goodbye.sh
  ```

1. Checken Sie von Ihrem Terminal aus Ihre `goodbye.sh` Datei ein.
  ```shell
  git add goodbye.sh
  git commit -m "Add goodbye script"
  git push
  ```

## Eine Datei für die Metadaten der Aktion erstellen

1. In the `hello-world-composite-action` repository, create a new file called `action.yml` and add the following example code. For more information about this syntax, see "[`runs` for a composite actions](/actions/creating-actions/metadata-syntax-for-github-actions#runs-for-composite-actions)".

    {% raw %}
    **action.yml**
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
        value: ${{ steps.random-number-generator.outputs.random-id }}
    runs:
      using: "composite"
      steps:
        - run: echo Hello ${{ inputs.who-to-greet }}.
          shell: bash
        - id: random-number-generator
          run: echo "::set-output name=random-id::$(echo $RANDOM)"
          shell: bash
        - run: ${{ github.action_path }}/goodbye.sh
          shell: bash
    ```
    {% endraw %}
  Diese Datei definiert die `Who-to-Greet-` Eingabe, ordnet die zuzufällig generierte Zahl der `Zufallszahl` Ausgabevariablen zu und führt das `goodbye.sh` Skript aus. It also tells the runner how to execute the composite action.

  For more information about managing outputs, see "[`outputs` for a composite action](/actions/creating-actions/metadata-syntax-for-github-actions#outputs-for-composite-actions)".

  Weitere Informationen zur Verwendung von `github.action_path`finden Sie unter "[`github context`](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)".

1. From your terminal, check in your `action.yml` file.

  ```shell
  git add action.yml
  git commit -m "Add action"
  git push
  ```

1. From your terminal, add a tag. This example uses a tag called `v1`. Weitere Informationen finden Sie unter „[Informationen zu Aktionen](/actions/creating-actions/about-actions#using-release-management-for-actions)“.

  ```shell
  git tag -a -m "Description of this release" v1
  git push --follow-tags
  ```

## Deine Aktion in einem Workflow testen

The following workflow code uses the completed hello world action that you made in "[Creating an action metadata file](/actions/creating-actions/creating-a-composite-action#creating-an-action-metadata-file)".

Copy the workflow code into a `.github/workflows/main.yml` file in another repository, but replace `actions/hello-world-composite-action@v1` with the repository and tag you created. Darüber hinaus können Sie die Eingabe `who-to-greet` durch Ihren Namen ersetzen.

{% raw %}
**.github/workflows/main.yml**
```yaml
on: [push]

jobs:
  hello_world_job:
    runs-on: ubuntu-latest
    name: A job to say hello
    steps:
      - uses: actions/checkout@v2
      - id: foo
        uses: actions/hello-world-composite-action@v1
        with:
          who-to-greet: 'Mona the Octocat'
      - run: echo random-number ${{ steps.foo.outputs.random-number }}
        shell: bash
```
{% endraw %}

Klicke in Deinem Repository auf die Registerkarte **Actions** (Aktionen), und wähle die neueste Workflow-Ausführung aus. The output should include: "Hello Mona the Octocat", the result of the "Goodbye" script, and a random number.
