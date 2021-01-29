---
title: Crear una acción de contenedor de Docker
intro: 'Esta guía te muestra los pasos mínimos necesarios para desarrollar una acción de contenedor Docker.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/creating-a-docker-container-action
  - /github/automating-your-workflow-with-github-actions/creating-a-docker-container-action
  - /actions/automating-your-workflow-with-github-actions/creating-a-docker-container-action
  - /actions/building-actions/creating-a-docker-container-action
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
type: 'tutorial'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Introducción

Esta guía te muestra los pasos mínimos necesarios para desarrollar una acción de contenedor de Docker. Para centrar esta guía en los componentes necesarios para empaquetar la acción, la funcionalidad del código de la acción es mínima. La acción imprime "Hello World" en los registros o "Hello [who-to-greet]"si proporcionas un nombre personalizado.

Una vez que completes este proyecto, deberías comprender cómo crear tu propia acción de contenedor Docker y probarla en un flujo de trabajo.

{% data reusables.github-actions.self-hosted-runner-reqs-docker %}

### Prerrequisitos

Puede ser útil tener un entendimiento básico de variables de entorno de las {% data variables.product.prodname_actions %} y del sistema de archivos de contenedor Docker:

- "[Usar variables de entorno](/actions/automating-your-workflow-with-github-actions/using-environment-variables)"
- "[Entornos virtuales para {% data variables.product.prodname_dotcom %}](/actions/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners#docker-container-filesystem)"

Antes de comenzar, necesitarás crear un repositorio GitHub.

1. Crea un repositorio nuevo en {% data variables.product.product_location %}. Puedes elegir cualquier nombre de repositorio o usar "hello-world-docker-action" como este ejemplo. Para obtener más información, consulta "[Crear un repositorio nuevo](/articles/creating-a-new-repository)".

1. Clona el repositorio en tu computadora. Para obtener más información, consulta "[Clonar un repositorio](/articles/cloning-a-repository)".

1. Desde tu terminal, cambia los directorios en el repositorio nuevo.

  ```shell
  cd hello-world-docker-action
  ```

### Crear un Dockerfile

En tu nuevo directorio `hello-world-docker-action`, crea un nuevo archivo `Dockerfile`. Para obtener más información, consulta al "[Sporte de Dockerfile para {% data variables.product.prodname_actions %}](/actions/creating-actions/dockerfile-support-for-github-actions)".

**Dockerfile**
```dockerfile
# Imagen del contenedor que ejecuta tu código
FROM alpine:3.10

# Copias tu archivo de código de tu repositorio de acción a la ruta `/`del contenedor
COPY entrypoint.sh /entrypoint.sh

# Archivo del código a ejecutar cuando comienza el contedor del docker (`entrypoint.sh`)
ENTRYPOINT ["/entrypoint.sh"]
```

### Crear un archivo de metadatos de una acción

Crear un nuevo archivo `action.yml` en el directorio `hello-world-docker` que creaste anteriormente. Para obtener más información, consulta la sección "[Sintaxis de metadatos para {% data variables.product.prodname_actions %}](/actions/creating-actions/metadata-syntax-for-github-actions)".

{% raw %}
**action.yml**
```yaml
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

Este metado define un parámetro de entrada `who-to-greet` y uno de salida `time`. Para pasar las entradas al contenedor Docker, debes declarar la entrada usando `inputs` y pasar la entrada a la palabra clave `args`.

{% data variables.product.prodname_dotcom %} creará una imagen desde tu `Dockerfile` y ejecutar comandos en nuevo contenedor usando esta imagen.

### Escribir el código de la acción

Puedes elegir cualquier imagen de Docker base y, por lo tanto, cualquier idioma para tu acción. El siguiente ejemplo de script shell usa la variable de entrada `who-to-greet` para imprimir "Hello [who-to-greet]" en el archivo de registro.

A continuación, el script obtiene la hora actual y la establece como una variable de salida que pueden usar las acciones que se ejecutan posteriormente en unt rabajo. Para que {% data variables.product.prodname_dotcom %} reconozca las variables de salida, debes usar un comando de flujo de trabajo en una sintaxis específica: `echo ":: set-Output Name =<output name>::<value>"`. Para obtener más información, consulta "[Comandos de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/reference/workflow-commands-for-github-actions#setting-an-output-parameter)".

1. Crea un archivo `entrypoint.sh` nuevo en el directorio `hello-world-docker-action`.

1. Convierte tu archivo `entrypoint.sh` en ejecutable:

  ```shell
  chmod +x entrypoint.sh
  ```

1. Agrega el siguiente código a tu archivo `entrypoint.sh`.

  **entrypoint.sh**
  ```shell
  #!/bin/sh -l

  echo "Hello $1"
  time=$(date)
  echo "::set-output name=time::$time"
  ```

  Si `entrypoint.sh` se ejecuta sin errores, el estado de la acción se establece en `exitoso`. También puedes establecer explícitamente códigos de salida en el código de tu acción para proporcionar el estado de una acción. Para obtener más información, consulta la sección "[Configurar los códigos de salida para las acciones](/actions/creating-actions/setting-exit-codes-for-actions)".

### Crear un README

Puedes crear un archivo README para que las personas sepan cómo usar tu acción. Un archivo README resulta más útil cuando planificas el intercambio de tu acción públicamente, pero también es una buena manera de recordarle a tu equipo cómo usar la acción.

En tu directorio <`hello-world-docker-action`, crea un archivo `README.md` que especifique la siguiente información:

- Una descripción detallada de lo que hace la acción.
- Argumentos necesarios de entrada y salida.
- Argumentos opcionales de entrada y salida.
- Secretos que utiliza la acción.
- Variables de entorno que utiliza la acción.
- Un ejemplo de cómo usar tu acción en un flujo de trabajo.

**README.md**
```markdown
# Acción de docker Hello world

Esta acción imprime "Hello World" o "Hello" + el nombre de una persona a quien saludar en el registro.

## Entradas

### `who-to-greet`

**Obligatorio** El nombre de la persona a quien saludar. Default `"World"`.

## Outputs

### `time`

El tiempo en que lo saludamos.

## Ejemplo de uso

uses: actions/hello-world-docker-action@v1
with:
  who-to-greet: 'Mona the Octocat'
```

### Confirmar, etiquetar y subir tu acción a GitHub

Desde tu terminal, confirma tus archivos `action.yml`, `entrypoint.sh`, `Dockerfile`, y `README.md`.

También se recomienda agregarles una etiqueta de versión a los lanzamientos de tu acción. Para obtener más información sobre el control de versiones de tu acción, consulta la sección "[Acerca de las acciones](/actions/automating-your-workflow-with-github-actions/about-actions#using-release-management-for-actions)".

```shell
git add action.yml entrypoint.sh Dockerfile README.md
git commit -m "Mi primera acción está lista"
git tag -a -m "Mi primera versión de acción" v1
git push --follow-tags
```

### Probar tu acción en un flujo de trabajo

Ahora estás listo para probar tu acción en un flujo de trabajo. Cuando una acción esté en un repositorio privado, la acción solo puede usarse en flujos de trabajo en el mismo repositorio. Las acciones públicas pueden ser usadas por flujos de trabajo en cualquier repositorio.

{% data reusables.actions.enterprise-marketplace-actions %}

#### Ejemplo usando una acción pública

El siguiente código de flujo de trabajo usa la acción completa hello world en el repositorio público [`actions/hello-world-docker-action`](https://github.com/actions/hello-world-docker-action). Copia el siguiente código de ejemplo de flujo de trabajo en un archivo `.github/workflows/main.yml`, pero reemplaza `actions/hello-world-docker-action` por tu nombre de repositorio y acción. También puedes reemplazar la entrada `who-to-greet` con tu nombre.

{% raw %}
**.github/workflows/main.yml**
```yaml
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

#### Ejemplo usando una acción privada

Copia el siguiente ejemplo de código de flujo de trabajo en un archivo `.github/workflows/main.yml` en tu repositorio de acción. También puedes reemplazar la entrada `who-to-greet` con tu nombre.

{% raw %}
**.github/workflows/main.yml**
```yaml
on: [push]

jobs:
  hello_world_job:
    runs-on: ubuntu-latest
    name: A job to say hello
    steps:
      # To use this repository's private action,
      # you must check out the repository
      - name: Checkout
        uses: actions/checkout@v2
      - name: Hello world action step
        uses: ./ # Uses an action in the root directory
        id: hello
        with:
          who-to-greet: 'Mona the Octocat'
      # Use the output from the `hello` step
      - name: Get the output time
        run: echo "The time was ${{ steps.hello.outputs.time }}"
```
{% endraw %}

Desde tu repositorio, da clic en la pestaña de **Acciones** y selecciona la última ejecución de flujo de trabajo. {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}Debajo de **Jobs** o en la gráfica de visualización, da clic en **A job to say hello**. {% endif %}Debrás ver la frase "Hello Mona the Octocat" o el nombre que utilizaste para la entrada `who-to-greet` y la marca de tiempo impresa en la bitácora.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
![Captura de pantalla del uso de tu acción en un flujo de trabajo](/assets/images/help/repository/docker-action-workflow-run-updated.png)
{% else %}
![Captura de pantalla del uso de tu acción en un flujo de trabajo](/assets/images/help/repository/docker-action-workflow-run.png)
{% endif %}
