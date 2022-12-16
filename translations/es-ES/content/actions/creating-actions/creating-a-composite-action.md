---
title: Crear una acción compuesta
shortTitle: Create a composite action
intro: 'En esta guía, aprenderás cómo crear una acción compuesta.'
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
ms.contentlocale: es-ES
ms.lasthandoff: 12/06/2022
ms.locfileid: '148192043'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introducción

En esta guía, aprenderás acerca de los componentes básicos necesarios para crear y usar una acción compuesta empaquetada. Para centrar esta guía en los componentes necesarios para empaquetar la acción, la funcionalidad del código de la acción es mínima. La acción imprime "Hello World" y después "Goodbye", o si proporcionas un nombre personalizado, imprime "Hello [who-to-greet]" y luego "Goodbye". La acción también asigna un número aleatorio a la variable de salida `random-number` y ejecuta un script denominado `goodbye.sh`.

Una vez que completes este proyecto, deberías comprender cómo crear tu propia acción compuesta y probarla en un flujo de trabajo.

{% data reusables.actions.context-injection-warning %}

## Prerrequisitos

Antes de comenzar, deberás crear un repositorio en {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}.

1. Crea un repositorio público nuevo en {% data variables.location.product_location %}. Puede elegir cualquier nombre de repositorio o usar el ejemplo `hello-world-composite-action` siguiente. Puedes agregar estos archivos después de que tu proyecto se haya subido a {% data variables.product.product_name %}. Para más información, vea "[Creación de un repositorio](/articles/creating-a-new-repository)".

1. Clona tu repositorio en tu computadora. Para más información, vea "[Clonación de un repositorio](/articles/cloning-a-repository)".

1. Desde tu terminal, cambia los directorios en tu repositorio nuevo.

  ```shell
  cd hello-world-composite-action
  ```

2. En el repositorio `hello-world-composite-action`, cree un archivo denominado `goodbye.sh`y agregue el código de ejemplo siguiente:

  ```bash
  echo "Goodbye"
  ```

3. Desde el terminal, convierta `goodbye.sh` en ejecutable.

  ```shell
  chmod +x goodbye.sh
  ```

1. Desde el terminal, registre el archivo `goodbye.sh`.
  ```shell
  git add goodbye.sh
  git commit -m "Add goodbye script"
  git push
  ```

## Crear un archivo de metadatos de una acción

1. En el repositorio `hello-world-composite-action`, cree un archivo denominado `action.yml` y agregue el código de ejemplo siguiente. Para más información sobre esta sintaxis, vea "[`runs` para obtener una acción compuesta](/actions/creating-actions/metadata-syntax-for-github-actions#runs-for-composite-actions)".

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
    {% endraw %} Este archivo define la entrada `who-to-greet`, asigna el número generado aleatoriamente a la variable de salida `random-number`, agrega la ruta de acceso de la acción a la ruta del sistema del ejecutor (para buscar el script `goodbye.sh` durante la ejecución) y ejecuta el script `goodbye.sh`.

  Para más información sobre cómo administrar salidas, vea "[`outputs` para obtener una acción compuesta](/actions/creating-actions/metadata-syntax-for-github-actions#outputs-for-composite-actions)".

  Para más información sobre cómo usar `github.action_path`, vea "[`github context`](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)".

1. Desde el terminal, registre el archivo `action.yml`.

  ```shell
  git add action.yml
  git commit -m "Add action"
  git push
  ```

1. Desde tu terminal, agrega una etiqueta. En este ejemplo se usa una etiqueta denominada `v1`. Para más información, vea "[Acerca de las acciones](/actions/creating-actions/about-actions#using-release-management-for-actions)".

  ```shell
  git tag -a -m "Description of this release" v1
  git push --follow-tags
  ```

## Probar tu acción en un flujo de trabajo

En el siguiente código de flujo de trabajo se usa la acción "Hola mundo" completada que ha creado en "[Creación de un archivo de metadatos de acción](/actions/creating-actions/creating-a-composite-action#creating-an-action-metadata-file)".

Copie el código de flujo de trabajo en un archivo `.github/workflows/main.yml` de otro repositorio, pero reemplace `actions/hello-world-composite-action@v1` por el repositorio y la etiqueta que ha creado. También puede reemplazar la entrada `who-to-greet` por su nombre.

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

En el repositorio, haga clic en la pestaña **Actions** y seleccione la última ejecución de flujo de trabajo. La salida deberá incluir "Hello Mona the Octocat", el resultado del script de "Goodbye" y un número aleatorio.
