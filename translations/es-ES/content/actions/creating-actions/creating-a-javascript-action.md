---
title: Creación de una acción de JavaScript
shortTitle: Create a JavaScript action
intro: 'En esta guía, aprenderás como desarrollar una acción de JavaScript usando el kit de herramientas de acciones.'
redirect_from:
  - /articles/creating-a-javascript-action
  - /github/automating-your-workflow-with-github-actions/creating-a-javascript-action
  - /actions/automating-your-workflow-with-github-actions/creating-a-javascript-action
  - /actions/building-actions/creating-a-javascript-action
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Action development
  - JavaScript
ms.openlocfilehash: 60fd562df55756afd081c395d9cffee89c2c04d6
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192749'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introducción

En esta guía, aprenderás acerca de los componentes básicos necesarios para crear y usar una acción de JavaScript empaquetada. Para centrar esta guía en los componentes necesarios para empaquetar la acción, la funcionalidad del código de la acción es mínima. La acción imprime "Hello World" en los registros o "Hello [who-to-greet]"si proporcionas un nombre personalizado.

Esta guía usa el módulo Node.js del kit de herramientas {% data variables.product.prodname_actions %} para acelerar el desarrollo. Para obtener más información, consulte el repositorio [actions/toolkit](https://github.com/actions/toolkit).

Una vez que completes este proyecto, deberías comprender cómo crear tu propia acción de JavaScript y probarla en un flujo de trabajo.

{% data reusables.actions.pure-javascript %}

{% data reusables.actions.context-injection-warning %}

## Prerrequisitos

Antes de que comiences, necesitarás descargar Node.js y crear un repositorio público de {% data variables.product.prodname_dotcom %}.

1. Descargue e instale Node.js {% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}16.x{% else %}12.x{% endif %}, el cual incluye npm.

  {% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %} https://nodejs.org/en/download/{% else %} https://nodejs.org/en/download/releases/{% endif %}

1. Crea un repositorio público nuevo en {% data variables.location.product_location %} y llámalo "hello-world-javascript-action". Para más información, vea "[Creación de un repositorio](/articles/creating-a-new-repository)".

1. Clona tu repositorio en tu computadora. Para más información, vea "[Clonación de un repositorio](/articles/cloning-a-repository)".

1. Desde tu terminal, cambia los directorios en tu repositorio nuevo.

  ```shell{:copy}
  cd hello-world-javascript-action
  ```

1. Desde el terminal, inicialice el directorio con npm para generar un archivo `package.json`.

  ```shell{:copy}
  npm init -y
  ```

## Crear un archivo de metadatos de una acción

Cree un nuevo archivo denominado `action.yml` en el directorio `hello-world-javascript-action` con el siguiente código de ejemplo. Para más información, vea "[Sintaxis de metadatos para {% data variables.product.prodname_actions %}](/actions/creating-actions/metadata-syntax-for-github-actions)".

```yaml{:copy}
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
  using: {% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}'node16'{% else %}'node12'{% endif %}
  main: 'index.js'
```

Este archivo define la entrada `who-to-greet` y la salida `time`. También informa al ejecutor de la acción cómo empezar a ejecutar esta acción de JavaScript.

## Agregar paquetes de kit de herramientas de las acciones

El kit de herramientas de acciones es una recopilación de los paquetes Node.js que te permiten desarrollar rápidamente acciones de JavaScript con más consistencia.

El paquete [`@actions/core`](https://github.com/actions/toolkit/tree/main/packages/core) del kit de herramientas proporciona una interfaz para los comandos de flujo de trabajo, las variables de entrada y salida, los estados de salida y los mensajes de depuración.

El kit de herramientas también ofrece un paquete [`@actions/github`](https://github.com/actions/toolkit/tree/main/packages/github) que devuelve un cliente autenticado de Octokit REST y acceso a los contextos de Acciones de GitHub.

El kit de herramientas ofrece mucho más que los paquetes `core` y `github`. Para obtener más información, consulte el repositorio [actions/toolkit](https://github.com/actions/toolkit).

En el terminal, instale los paquetes `core` y `github` del kit de herramientas de acciones.

```shell{:copy}
npm install @actions/core
npm install @actions/github
```

Ahora debería ver un directorio `node_modules` con los módulos que acaba de instalar y un archivo `package-lock.json` con las dependencias del módulo instalado y las versiones de cada módulo instalado.

## Escribir el código de la acción

Esta acción usa el kit de herramientas para obtener la variable de entrada `who-to-greet` requerida en el archivo de metadatos de la acción e imprime "Hello [a_quien_se_salude]" en un mensaje de depuración del registro. A continuación, el script obtiene la hora actual y la establece como una variable de salida que pueden usar las acciones que se ejecutan posteriormente en un trabajo.

Las Acciones de GitHub proporcionan información de contexto sobre el evento de webhooks, las referencias de Git, el flujo de trabajo, la acción y la persona que activó el flujo de trabajo. Para acceder a la información de contexto, puede usar el paquete `github`. La acción que escribirás imprimirá el evento de webhook que carga el registro.

Agregue un nuevo archivo denominado `index.js` con el código siguiente.

{% raw %}
```javascript{:copy}
const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
```
{% endraw %}

Si se produce un error en el ejemplo anterior `index.js`, `core.setFailed(error.message);` usa el paquete [`@actions/core`](https://github.com/actions/toolkit/tree/main/packages/core) del kit de herramientas de acciones para registrar un mensaje y establecer un código de salida con errores. Para más información, vea "[Establecimiento de códigos de salida para acciones](/actions/creating-actions/setting-exit-codes-for-actions)".

## Crear un README

Puedes crear un archivo README para que las personas sepan cómo usar tu acción. Un archivo README resulta más útil cuando planificas el intercambio de tu acción públicamente, pero también es una gran manera de recordarle a tu equipo cómo usar la acción.

En el directorio `hello-world-javascript-action`, cree un archivo `README.md` que especifique la información siguiente:

- Una descripción detallada de lo que hace la acción.
- Los argumentos de entrada y salida obligatorios.
- Los argumentos de entrada y salida opcionales.
- Los secretos que usa la acción.
- Las variables de entorno que usa la acción.
- Un ejemplo de cómo usar la acción en un flujo de trabajo.

````markdown{:copy}
# Hello world javascript action

This action prints "Hello World" or "Hello" + the name of a person to greet to the log.

## Inputs

### `who-to-greet`

**Required** The name of the person to greet. Default `"World"`.

## Outputs

### `time`

The time we greeted you.

## Example usage

```yaml
uses: actions/hello-world-javascript-action@v1.1
with:
  who-to-greet: 'Mona the Octocat'
```
````

## Confirma, etiqueta y sube tu acción a GitHub

{% data variables.product.product_name %} descarga cada acción ejecutada en un flujo de trabajo durante el tiempo de ejecución y la ejecuta como un paquete completo de código antes de que pueda usar comandos de flujo de trabajo como `run` para interactuar con la máquina del ejecutor. Eso significa que debes incluir cualquier dependencia del paquete requerida para ejecutar el código de JavaScript. Tendrá que insertar los paquetes `core` y `github` del kit de herramientas en el repositorio de la acción.

Desde el terminal, confirme los archivos `action.yml`, `index.js`, `node_modules`, `package.json`, `package-lock.json` y `README.md`. Si agregó un archivo `.gitignore` que enumera `node_modules`, deberá quitar esa línea para confirmar el directorio `node_modules`.

También es recomendable agregar una etiqueta de versión para los lanzamientos de tu acción. Para más información sobre el control de versiones de la acción, vea "[Acerca de las acciones](/actions/automating-your-workflow-with-github-actions/about-actions#using-release-management-for-actions)".

```shell{:copy}
git add action.yml index.js node_modules/* package.json package-lock.json README.md
git commit -m "My first action is ready"
git tag -a -m "My first action release" v1.1
git push --follow-tags
```

La inserción del directorio `node_modules` en el repositorio puede causar problemas. Como alternativa, puede usar una herramienta que se denomina [`@vercel/ncc`](https://github.com/vercel/ncc) para compilar el código y los módulos en un archivo usado para la distribución.

1. Instale `vercel/ncc` ejecutando este comando en el terminal.
  `npm i -g @vercel/ncc`

1. Compile el archivo `index.js`.
  `ncc build index.js --license licenses.txt`

  Verá un nuevo archivo `dist/index.js` con el código y los módulos compilados.
  También verá un archivo `dist/licenses.txt` que lo acompaña y que contiene todas las licencias de los archivos `node_modules` que está usando.

1. Cambie la palabra clave `main` del archivo `action.yml` para usar el nuevo archivo `dist/index.js`.
 `main: 'dist/index.js'`

1. Si ya ha insertado en el repositorio el directorio `node_modules`, quítelo.
  `rm -rf node_modules/*`

1. En el terminal, confirme las actualizaciones de los archivos `action.yml`, `dist/index.js` y `node_modules`.
```shell{:copy}
git add action.yml dist/index.js node_modules/*
git commit -m "Use vercel/ncc"
git tag -a -m "My first action release" v1.1
git push --follow-tags
```

## Probar tu acción en un flujo de trabajo

Ahora estás listo para probar tu acción en un flujo de trabajo. Cuando una acción está en un repositorio privado, solo se puede usar en flujos de trabajo del mismo repositorio. Los flujos de trabajo de cualquier repositorio pueden usar acciones públicas.

{% data reusables.actions.enterprise-marketplace-actions %}

### Ejemplo usando una acción pública

Este ejemplo demuestra cómo se puede ejecutar tu acción nueva y pública desde dentro de un repositorio externo.

Copie el siguiente código YAML en un nuevo archivo en `.github/workflows/main.yml` y actualice la línea `uses: octocat/hello-world-javascript-action@v1.1` con su nombre de usuario y el nombre del repositorio público que ha creado anteriormente. También puede reemplazar la entrada `who-to-greet` por su nombre.

{% raw %}
```yaml{:copy}
on: [push]

jobs:
  hello_world_job:
    runs-on: ubuntu-latest
    name: A job to say hello
    steps:
      - name: Hello world action step
        id: hello
        uses: octocat/hello-world-javascript-action@v1.1
        with:
          who-to-greet: 'Mona the Octocat'
      # Use the output from the `hello` step
      - name: Get the output time
        run: echo "The time was ${{ steps.hello.outputs.time }}"
```
{% endraw %}

Cuando se desencadene este flujo de trabajo, el ejecutor descargará la acción `hello-world-javascript-action` desde su repositorio público y luego la ejecutará.

### Ejemplo usando una acción privada

Copie el código de flujo de trabajo en un archivo `.github/workflows/main.yml` del repositorio de la acción. También puede reemplazar la entrada `who-to-greet` por su nombre.

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
        run: echo "The time was {% raw %}${{ steps.hello.outputs.time }}{% endraw %}"
```

En el repositorio, haga clic en la pestaña **Actions** y seleccione la última ejecución de flujo de trabajo. En **Jobs** o en el gráfico de visualización, haga clic en **A job to say hello**. En el registro, debería ver "Hello Mona the Octocat", o el nombre que haya usado para la entrada `who-to-greet`, y la marca de tiempo.

![Una captura de pantalla del uso de tu acción en un flujo de trabajo](/assets/images/help/repository/javascript-action-workflow-run-updated-2.png)

## Repositorios de plantillas para crear acciones de JavaScript

{% data variables.product.prodname_dotcom %} ofrece repositorios de plantillas para crear acciones de JavaScript y TypeScript. Puedes usar estas plantillas para empezar a crear rápidamente una nueva acción que incluya pruebas, linting y otros procedimientos recomendados.

* [Repositorio de plantilla de `javascript-action`](https://github.com/actions/javascript-action)
* [Repositorio de plantilla de `typescript-action`](https://github.com/actions/typescript-action)
