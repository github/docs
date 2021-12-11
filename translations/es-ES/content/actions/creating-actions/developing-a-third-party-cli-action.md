---
title: Desarrollar una acción del CLI de terceros
shortTitle: Acción de configuración del CLI
intro: 'Aprende cómo desarrollar una acción para configurar un CLI en los ejecutores de {% data variables.product.prodname_actions %}.'
redirect_from: []
versions:
  fpt: '*'
  ghec: '*'
type: tutorial
topics:
  - Actions
---

## Introducción

Puedes escribir una acción para proporcionarles a los usuarios una forma de acceder a tus servidores a través de un ambiente configurado de CLI en los ejecutores de {% data variables.product.prodname_actions %}.

Tu cuenta debería:

- Facilitar que los usuarios especifiquen la versión del CLI a instalar
- Ser compatible con sistemas operativos múltiples
- Ejecutarse de forma eficiente para minimizar los costos de tiempo de ejecución y asociados
- Funcionar a lo largo de los ejecutores auto-hospedados y hospedados en {% data variables.product.product_name %}
- Apoyar las herramientas de la comunidad en medida de lo posible

Este artículo te demostrará cómo escribir una acción que recupere una versión específica de tu CLI, la instale, la agregue a la ruta y la guarde en caché (opcionalmente). Este tipo de acción (una acción que configura una herramienta) se llama a menudo `setup-$TOOL`.

## Prerrequisitos

Deberás de entender cómo escribir una acción personalizada. Para obtener más información, consulta la sección "[Acerca de las acciones personalizadas](/actions/creating-actions/about-custom-actions)". Para consulta una guía más detallada sobre cómo escribir una acción personalizada, consulta la sección "[Crear una acción de JavaScript](/actions/creating-actions/creating-a-javascript-action)".

## Ejemplo

El siguiente script demuestra cómo puedes obtener una versión especificada por un usuario como entrada, descargar y extraer esta versión específica de tu CLI y luego agregar el CLI a la ruta.

{% data variables.product.prodname_dotcom %} proporciona el [`actions/toolkit`](https://github.com/actions/toolkit), el cual es un conjunto de paquetes que te ayuda a crear acciones. Este ejemplo utiliza los paquetes [`actions/core`](https://github.com/actions/toolkit/tree/main/packages/core) y [`actions/tool-cache`](https://github.com/actions/toolkit/tree/main/packages/tool-cache) packages.

{% raw %}
```javascript{:copy}
const core = require('@actions/core');
const tc = require('@actions/tool-cache');

async function setup() {
  // Get version of tool to be installed
  const version = core.getInput('version');

  // Download the specific version of the tool, e.g. as a tarball
  const pathToTarball = await tc.downloadTool(getDownloadURL());

  // Extract the tarball onto the runner
  const pathToCLI = await tc.extractTar(pathToTarball);

  // Expose the tool by adding it to the PATH
  core.addPath(pathToCLI)
}

module.exports = setup
```
{% endraw %}

Para utilizar este script, reemplaza a `getDownloadURL` con una función que descargue tu CLI. También necesitarás crear un archivo de metadatos de acciones (`action.yml`) que acepte una entrada de `version` y que ejecute este script. Para encontrar todos los detalles sobre cómo crear una acción, consulta la sección "[Crear una acción de JavaScript](/actions/creating-actions/creating-a-javascript-action)".

Para encontrar un ejemplo completo de cómo configurar esta acción, consulta [example-setup-gh](https://github.com/github-developer/example-setup-gh).

## Leer más

Este patrón se emplea en varias acciones. Para ver más ejemplos, consulta:

* [`ruby/setup-ruby`](https://github.com/ruby/setup-ruby)
* [`google-github-actions/setup-gcloud`](https://github.com/google-github-actions/setup-gcloud)
* [`hashicorp/setup-terraform`](https://github.com/hashicorp/setup-terraform)

