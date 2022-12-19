---
title: Desarrollar una acción del CLI de terceros
shortTitle: CLI setup action
intro: 'Aprende cómo desarrollar una acción para configurar un CLI en los ejecutores de {% data variables.product.prodname_actions %}.'
redirect_from: []
versions:
  fpt: '*'
  ghec: '*'
type: tutorial
topics:
  - Actions
ms.openlocfilehash: c839faa63efd0f8b7f5ab78a81107d27ab93e1c4
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145092539'
---
## Introducción

Puedes escribir una acción para proporcionarles a los usuarios una forma de acceder a tus servidores a través de un ambiente configurado de CLI en los ejecutores de {% data variables.product.prodname_actions %}.

Tu cuenta debería:

- Facilitar que los usuarios especifiquen la versión del CLI a instalar
- Ser compatible con sistemas operativos múltiples
- Ejecutarse de forma eficiente para minimizar los costos de tiempo de ejecución y asociados
- Funcionar a lo largo de los ejecutores auto-hospedados y hospedados en {% data variables.product.product_name %}
- Apoyar las herramientas de la comunidad en medida de lo posible

Este artículo te demostrará cómo escribir una acción que recupere una versión específica de tu CLI, la instale, la agregue a la ruta y la guarde en caché (opcionalmente). Este tipo de acción (una acción que configura una herramienta) a menudo se denomina `setup-$TOOL`. 

## Prerrequisitos

Deberás de entender cómo escribir una acción personalizada. Para más información, vea "[Acerca de las acciones personalizadas](/actions/creating-actions/about-custom-actions)". Para obtener una guía más detallada sobre cómo escribir una acción personalizada, vea "[Creación de una acción de JavaScript](/actions/creating-actions/creating-a-javascript-action)".

## Ejemplo

El siguiente script demuestra cómo puedes obtener una versión especificada por un usuario como entrada, descargar y extraer esta versión específica de tu CLI y luego agregar el CLI a la ruta.

{% data variables.product.prodname_dotcom %} proporciona [`actions/toolkit`](https://github.com/actions/toolkit), que es un conjunto de paquetes que le ayuda a crear acciones. En este ejemplo se usan los paquetes [`actions/core`](https://github.com/actions/toolkit/tree/main/packages/core) y [`actions/tool-cache`](https://github.com/actions/toolkit/tree/main/packages/tool-cache).

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

Para usar este script, reemplace `getDownloadURL` por una función que descargue la CLI. También tendrá que crear un archivo de metadatos de acciones (`action.yml`) que acepte una entrada `version` y que ejecute este script. Para obtener información completa sobre cómo crear una acción, vea "[Creación de una acción de JavaScript](/actions/creating-actions/creating-a-javascript-action)".

Para obtener un ejemplo completo de cómo configurar esta acción, vea [example-setup-gh](https://github.com/github-developer/example-setup-gh).

## Información adicional

Este patrón se emplea en varias acciones. Para ver más ejemplos, consulta:

* [`ruby/setup-ruby`](https://github.com/ruby/setup-ruby)
* [`google-github-actions/setup-gcloud`](https://github.com/google-github-actions/setup-gcloud)
* [`hashicorp/setup-terraform`](https://github.com/hashicorp/setup-terraform)

