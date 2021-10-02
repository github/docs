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

## Introducción

In this guide, you'll learn about the basic components needed to create and use a packaged composite action. Para centrar esta guía en los componentes necesarios para empaquetar la acción, la funcionalidad del código de la acción es mínima. La acción imprime "Hello World" y después "Goodbye", o si proporcionas un nombre personalizado, imprime "Hello [who-to-greet]" y luego "Goodbye". La acción también mapea un número aleatorio hacia la variable de salida `random-number`, y ejecuta un script denominado `goodbye.sh`.

Once you complete this project, you should understand how to build your own composite action and test it in a workflow.

{% data reusables.github-actions.context-injection-warning %}

## Prerrequisitos

Antes de que comiences, crearás un repositorio de {% data variables.product.product_name %}.

1. Crea un repositorio público nuevo en {% data variables.product.product_location %}. You can choose any repository name, or use the following `hello-world-composite-action` example. Puedes agregar estos archivos después de que tu proyecto se haya subido a {% data variables.product.product_name %}. Para obtener más información, consulta "[Crear un repositorio nuevo](/articles/creating-a-new-repository)".

1. Clona el repositorio en tu computadora. Para obtener más información, consulta "[Clonar un repositorio](/articles/cloning-a-repository)".

1. Desde tu terminal, cambia los directorios en el repositorio nuevo.

  ```shell
  cd hello-world-composite-action
  ```

2. In the `hello-world-composite-action` repository, create a new file called `goodbye.sh`, and add the following example code:

  ```bash
  echo "Goodbye"
  ```

3. Desde tu terminal, haz ejecutable a `goodbye.sh`.

  ```shell
  chmod +x goodbye.sh
  ```

1. Desde tu terminal, ingresa tu archivo `goodbye.sh`.
  ```shell
  git add goodbye.sh
  git commit -m "Add goodbye script"
  git push
  ```

## Crear un archivo de metadatos de una acción

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
  Este archivo define la entrada `who-to-greet`, mapea el número generado aleatoriamente en la variable de salida `random-number` y ejecuta el script de `goodbye.sh`. It also tells the runner how to execute the composite action.

  For more information about managing outputs, see "[`outputs` for a composite action](/actions/creating-actions/metadata-syntax-for-github-actions#outputs-for-composite-actions)".

  Para obtener más información acerca de cómo utilizar `github.action_path`, consulta la sección "[`github context`](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)".

1. Desde tu terminal, ingresa tu archivo `action.yml`.

  ```shell
  git add action.yml
  git commit -m "Add action"
  git push
  ```

1. Desde tu terminal, agrega una etiqueta. Este ejemplo utiliza una etiqueta que se llama `v1`. Para obtener más información, consulta la sección "[Acerca de las acciones](/actions/creating-actions/about-actions#using-release-management-for-actions)".

  ```shell
  git tag -a -m "Description of this release" v1
  git push --follow-tags
  ```

## Probar tu acción en un flujo de trabajo

El siguiente código de flujo de trabajo utiliza la acción completada de "hello world" que hiciste previamente en "[Crear un archivo de metadatos para la acción](/actions/creating-actions/creating-a-composite-action#creating-an-action-metadata-file)".

Copy the workflow code into a `.github/workflows/main.yml` file in another repository, but replace `actions/hello-world-composite-action@v1` with the repository and tag you created. También puedes reemplazar la entrada `who-to-greet` con tu nombre.

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

Desde tu repositorio, da clic en la pestaña de **Acciones** y selecciona la última ejecución de flujo de trabajo. La salida deberá incluir "Hello Mona the Octocat", el resultado del script de "Goodbye" y un número aleatorio.
