---
title: Crear una acción para pasos de ejecución compuestos
intro: En esta guía aprenderás cómo crear una acción para los pasos de ejecución compuestos.
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Introducción

En esta guía aprenderás sobre los componentes básicos que se requieren para crear y utilizar una acción de pasos de ejecución compuestos empacada. Para centrar esta guía en los componentes necesarios para empaquetar la acción, la funcionalidad del código de la acción es mínima. La acción imprime "Hello World" y después "Goodbye", o si proporcionas un nombre personalizado, imprime "Hello [who-to-greet]" y luego "Goodbye". La acción también mapea un número aleatorio hacia la variable de salida `random-number`, y ejecuta un script denominado `goodbye.sh`.

Una vez que completes este proyecto, deberás entender cómo construir tu accion para pasos de ejecución compuestos para probarla en un flujo de trabajo.

### Prerrequisitos

Antes de que comiences, crearás un repositorio de {% data variables.product.product_name %}.

1. Crea un repositorio público nuevo en {% data variables.product.product_location %}. Puedes elegir cualquier nombre de repositorio o utilizar el siguiente ejemplo de `hello-world-composite-run-steps-action`. Puedes agregar estos archivos después de que tu proyecto se haya subido a {% data variables.product.product_name %}. Para obtener más información, consulta "[Crear un repositorio nuevo](/articles/creating-a-new-repository)".

1. Clona el repositorio en tu computadora. Para obtener más información, consulta "[Clonar un repositorio](/articles/cloning-a-repository)".

1. Desde tu terminal, cambia los directorios en el repositorio nuevo.

  ```shell
  cd hello-world-composite-run-steps-action
  ```

2. En el repositorio `hello-world-composite-run-steps-action`, crea un archivo nuevo que se llame `goodbye.sh` y agrega el siguiente código de ejemplo:

  ```bash
  echo "Goodbye"
  ```

1. Desde tu terminal, haz ejecutable a `goodbye.sh` y verifícalo en tu repositorio.

  ```shell
  chmod +x goodbye.sh
  ```

1. Desde tu terminal, ingresa tu archivo `goodbye.sh`.
  ```shell
  git add goodbye.sh
  git commit -m "Add goodbye script"
  git push
  ```

### Crear un archivo de metadatos de una acción

1. En el repositorio `hello-world-composite-run-steps-action`, crea un archivo nuevo que se llame `action.yml` y agrega el siguiente código de ejemplo. Para obtener más información acerca de esta sintaxis, consulta la sección de "[`runs` para encontrar los pasos de ejecución compuestos](/actions/creating-actions/metadata-syntax-for-github-actions#runs-for-composite-run-steps-actions)".

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
  Este archivo define la entrada `who-to-greet`, mapea el número generado aleatoriamente en la variable de salida `random-number` y ejecuta el script de `goodbye.sh`. También le dice al ejecutor cómo ejecutar la acción de los pasos de ejecución compuestos.

  Para obtener más información acerca de cómo administrar las alidas, consulta la secicón "[`outputs` para los pasos de ejecución compuestos](/actions/creating-actions/metadata-syntax-for-github-actions#outputs-for-composite-run-steps-actions)".

  Para obtener más información acerca de cómo utilizar `github.action_path`, consulta la sección "[`github context`](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)".

1. Crear una etiqueta nueva. Este ejemplo utiliza una etiqueta llamada `v1` para la rama principal. Para obtener más información, consulta la sección "[Crear una etiqueta](/github/managing-your-work-on-github/creating-a-label)".

### Probar tu acción en un flujo de trabajo

El siguiente código de flujo de trabajo utiliza la acción completada de "hello world" que hiciste previamente en "[Crear un archivo de metadatos para la acción](/actions/creating-actions/creating-a-composite-run-steps-action#creating-an-action-metadata-file)".

Copia el código del flujo de trabajo en un archivo `.github/workflows/main.yml` en otro repositorio, pero reemplaza a `actions/hello-world-composite-run-steps-action@v1` con el prepositorio y la etiqueta que creaste. También puedes reemplazar la entrada `who-to-greet` con tu nombre.

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
      uses: actions/hello-world-composite-run-steps-action@v1
      with:
        who-to-greet: 'Mona the Octocat'
    - run: echo random-number ${{ steps.foo.outputs.random-number }} 
      shell: bash
```
{% endraw %}

Desde tu repositorio, da clic en la pestaña de **Acciones** y selecciona la última ejecución de flujo de trabajo. La salida deberá incluir "Hello Mona the Octocat", el resultado del script de "Goodbye" y un número aleatorio.
