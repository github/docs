---
title: Crear una acción compuesta
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
shortTitle: Acción copuesta
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Introducción

En esta guía, aprenderás acerca de los componentes básicos necesarios para crear y usar una acción compuesta empaquetada. Para centrar esta guía en los componentes necesarios para empaquetar la acción, la funcionalidad del código de la acción es mínima. La acción imprime "Hello World" y después "Goodbye", o si proporcionas un nombre personalizado, imprime "Hello [who-to-greet]" y luego "Goodbye". La acción también mapea un número aleatorio hacia la variable de salida `random-number`, y ejecuta un script denominado `goodbye.sh`.

Una vez que completes este proyecto, deberías comprender cómo crear tu propia acción compuesta y probarla en un flujo de trabajo.

{% data reusables.actions.context-injection-warning %}

## Prerrequisitos

Antes de comenzar, deberás crear un repositorio en {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}.

1. Crea un repositorio público nuevo en {% data variables.product.product_location %}. Puedes elegir cualquier nombre de repositorio o utilizar el siguiente ejemplo de `hello-world-composite-action`. Puedes agregar estos archivos después de que tu proyecto se haya subido a {% data variables.product.product_name %}. Para obtener más información, consulta "[Crear un repositorio nuevo](/articles/creating-a-new-repository)".

1. Clona el repositorio en tu computadora. Para obtener más información, consulta "[Clonar un repositorio](/articles/cloning-a-repository)".

1. Desde tu terminal, cambia los directorios en el repositorio nuevo.

  ```shell
  cd hello-world-composite-action
  ```

2. En el repositorio `hello-world-composite-action`, crea un archivo nuevo que se llame `goodbye.sh` y agrega el siguiente código de ejemplo:

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

1. En el repositorio `hello-world-composite-action`, crea un archivo nuevo que se llame `action.yml` y agrega el siguiente código de ejemplo. Para obtener más información acerca de esta sintaxis, consulta la sección de "[`runs` para una acción compuesta](/actions/creating-actions/metadata-syntax-for-github-actions#runs-for-composite-actions)".

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
          run: echo "::set-output name=random-number::$(echo $RANDOM)"
          shell: bash
        - run: echo "${{ github.action_path }}" >> $GITHUB_PATH
          shell: bash          
        - run: goodbye.sh
          shell: bash
    ```
    {% endraw %}
  Este archivo define la entrada `who-to-greet`, mapea el número generado aleatoriamente en la variable de salida `random-number` y ejecuta el script de `goodbye.sh`. También le dice al ejecutor cómo ejecutar la acción compuesta.

  Para obtener más información acerca de cómo administrar las salidas, consulta la sección "[`outputs` para las acciones compuestas](/actions/creating-actions/metadata-syntax-for-github-actions#outputs-for-composite-actions)".

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

Copia el código del flujo de trabajo en un archivo de `.github/workflows/main.yml` en otro repositorio, pero reemplaza `actions/hello-world-composite-action@v1` con el repositorio y etiqueta que creaste. También puedes reemplazar la entrada `who-to-greet` con tu nombre.

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

Desde tu repositorio, da clic en la pestaña de **Acciones** y selecciona la última ejecución de flujo de trabajo. La salida deberá incluir "Hello Mona the Octocat", el resultado del script de "Goodbye" y un número aleatorio.
