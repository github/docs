---
title: Creación de una acción de contenedor de Docker
intro: 'Esta guía te muestra los pasos mínimos necesarios para desarrollar una acción de contenedor Docker. '
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
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147518788'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introducción

Esta guía te muestra los pasos mínimos necesarios para desarrollar una acción de contenedor de Docker. Para centrar esta guía en los componentes necesarios para empaquetar la acción, la funcionalidad del código de la acción es mínima. La acción imprime "Hello World" en los registros o "Hello [who-to-greet]"si proporcionas un nombre personalizado.

Una vez que completes este proyecto, deberías comprender cómo crear tu propia acción de contenedor Docker y probarla en un flujo de trabajo.

{% data reusables.actions.self-hosted-runner-reqs-docker %}

{% data reusables.actions.context-injection-warning %}

## Prerrequisitos

Puede ser útil tener un entendimiento básico de variables de entorno de las {% data variables.product.prodname_actions %} y del sistema de archivos de contenedor Docker:

- "[Uso de variables de entorno](/actions/automating-your-workflow-with-github-actions/using-environment-variables)" {% ifversion ghae %}
- "[Sistema de archivos del contenedor de Docker](/actions/using-github-hosted-runners/about-ae-hosted-runners#docker-container-filesystem)".
{% else %} 
- "[Acerca de los ejecutores hospedados en {% data variables.product.prodname_dotcom %}](/actions/using-github-hosted-runners/about-github-hosted-runners#docker-container-filesystem)" {% endif %}

Antes de comenzar, necesitarás crear un repositorio de {% data variables.product.prodname_dotcom %}.

1. Crea un repositorio nuevo en {% data variables.product.product_location %}. Puedes elegir cualquier nombre de repositorio o usar "hello-world-docker-action" como este ejemplo. Para más información, vea "[Creación de un repositorio](/articles/creating-a-new-repository)".

1. Clona tu repositorio en tu computadora. Para más información, vea "[Clonación de un repositorio](/articles/cloning-a-repository)".

1. Desde tu terminal, cambia los directorios en tu repositorio nuevo.

  ```shell{:copy}
  cd hello-world-docker-action
  ```

## Crear un Dockerfile

En el nuevo directorio `hello-world-docker-action`, cree un archivo `Dockerfile`. Asegúrese de que en el nombre de archivo se usen las mayúsculas adecuadas (una `D` mayúscula pero no una `f` mayúscula) en caso de que tenga problemas. Para más información, vea "[Compatibilidad de Dockerfile con {% data variables.product.prodname_actions %}](/actions/creating-actions/dockerfile-support-for-github-actions)".

**Dockerfile**
```Dockerfile{:copy}
# Container image that runs your code
FROM alpine:3.10

# Copies your code file from your action repository to the filesystem path `/` of the container
COPY entrypoint.sh /entrypoint.sh

# Code file to execute when the docker container starts up (`entrypoint.sh`)
ENTRYPOINT ["/entrypoint.sh"]
```

## Crear un archivo de metadatos de una acción

Cree un archivo `action.yml` en el directorio `hello-world-docker-action` que ha creado antes. Para más información, vea "[Sintaxis de metadatos para {% data variables.product.prodname_actions %}](/actions/creating-actions/metadata-syntax-for-github-actions)".

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

Estos metadatos definen una entrada `who-to-greet` y un parámetro de salida `time`. Para pasar entradas al contenedor de Docker, debe declarar la entrada mediante `inputs` y pasarla en la palabra clave `args`. Todo lo que incluya en `args` se pasa al contenedor, pero para que a los usuarios les resulte más sencillo descubrir la acción, se recomienda usar entradas.

{% data variables.product.prodname_dotcom %} compilará una imagen a partir de `Dockerfile` y ejecutará comandos en nuevo contenedor con esta imagen.

## Escribir el código de la acción

Puedes elegir cualquier imagen de Docker base y, por lo tanto, cualquier idioma para tu acción. En el ejemplo de script del shell siguiente se usa la variable de entrada `who-to-greet` para imprimir "Hello [a_quien_se_salude]" en el archivo de registro.

A continuación, el script obtiene la hora actual y la establece como una variable de salida que pueden usar las acciones que se ejecutan posteriormente en un trabajo. Para que {% data variables.product.prodname_dotcom %} reconozca las variables de salida, debe usar un comando de flujo de trabajo con una sintaxis específica: `echo "::set-output name=<output name>::<value>"`. Para más información, vea "[Comandos de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/reference/workflow-commands-for-github-actions#setting-an-output-parameter)".

1. En el directorio `hello-world-docker-action`, cree un archivo `entrypoint.sh`.

1. Agregue el código siguiente al archivo `entrypoint.sh`.

  **entrypoint.sh**
  ```shell{:copy}
  #!/bin/sh -l

  echo "Hello $1"
  time=$(date)
  echo "::set-output name=time::$time"
  ```
  Si `entrypoint.sh` se ejecuta sin errores, el estado de la acción se establece en `success`. También puedes establecer explícitamente códigos de salida en el código de tu acción para proporcionar el estado de una acción. Para más información, vea "[Establecimiento de códigos de salida para acciones](/actions/creating-actions/setting-exit-codes-for-actions)".

1. Para convertir el archivo `entrypoint.sh` en ejecutable, ejecute el comando siguiente en el sistema.

  ```shell{:copy}
  $ chmod +x entrypoint.sh
  ```

## Crear un README

Puedes crear un archivo README para que las personas sepan cómo usar tu acción. Un archivo README resulta más útil cuando planificas el intercambio de tu acción públicamente, pero también es una gran manera de recordarle a tu equipo cómo usar la acción.

En el directorio `hello-world-docker-action`, cree un archivo `README.md` que especifique la información siguiente:

- Una descripción detallada de lo que hace la acción.
- Los argumentos de entrada y salida obligatorios.
- Los argumentos de entrada y salida opcionales.
- Los secretos que usa la acción.
- Las variables de entorno que usa la acción.
- Un ejemplo de cómo usar la acción en un flujo de trabajo.

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

## Confirmar, etiquetar y subir tu acción a {% data variables.product.product_name %}

Desde el terminal, confirme los archivos `action.yml`, `entrypoint.sh`, `Dockerfile` y `README.md`.

También es recomendable agregar una etiqueta de versión para los lanzamientos de tu acción. Para más información sobre el control de versiones de la acción, vea "[Acerca de las acciones](/actions/automating-your-workflow-with-github-actions/about-actions#using-release-management-for-actions)".

```shell{:copy}
git add action.yml entrypoint.sh Dockerfile README.md
git commit -m "My first action is ready"
git tag -a -m "My first action release" v1
git push --follow-tags
```

## Probar tu acción en un flujo de trabajo

Ahora estás listo para probar tu acción en un flujo de trabajo. Cuando una acción está en un repositorio privado, solo se puede usar en flujos de trabajo del mismo repositorio. Los flujos de trabajo de cualquier repositorio pueden usar acciones públicas.

{% data reusables.actions.enterprise-marketplace-actions %}

### Ejemplo usando una acción pública

En el código de flujo de trabajo siguiente se usa la acción _hello world_ completada en el repositorio público [`actions/hello-world-docker-action`](https://github.com/actions/hello-world-docker-action). Copie el código de ejemplo de flujo de trabajo siguiente en un archivo `.github/workflows/main.yml`, pero reemplace `actions/hello-world-docker-action` por el repositorio y el nombre de la acción. También puede reemplazar la entrada `who-to-greet` por su nombre. {% ifversion fpt or ghec %}Las acciones públicas pueden utilizarse incluso si no se han publicado en {% data variables.product.prodname_marketplace %}. Para más información, vea "[Publicación de una acción](/actions/creating-actions/publishing-actions-in-github-marketplace#publishing-an-action)". {% endif %}

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

### Ejemplo usando una acción privada

Copie el código de flujo de trabajo de ejemplo siguiente en un archivo `.github/workflows/main.yml` del repositorio de la acción. También puede reemplazar la entrada `who-to-greet` por su nombre. {% ifversion fpt or ghec %}Esta acción privada no puede publicarse en {% data variables.product.prodname_marketplace %} y solo puede utilizarse en este repositorio.{% endif %}

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

En el repositorio, haga clic en la pestaña **Actions** y seleccione la última ejecución de flujo de trabajo. En **Jobs** o en el gráfico de visualización, haga clic en **A job to say hello**. En el registro, debería ver "Hello Mona the Octocat", o el nombre que haya usado para la entrada `who-to-greet`, y la marca de tiempo.

![Una captura de pantalla del uso de tu acción en un flujo de trabajo](/assets/images/help/repository/docker-action-workflow-run-updated.png)

