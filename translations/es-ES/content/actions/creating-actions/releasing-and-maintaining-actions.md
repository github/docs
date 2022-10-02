---
title: Lanzar y mantener las acciones
shortTitle: Releasing and maintaining actions
intro: Puedes aprovechar la automatización y las mejores prácticas de código abierto para lanzar y mantener acciones.
type: tutorial
topics:
  - Action development
  - Actions
  - Community
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
ms.openlocfilehash: 563a63a3af79c75c6912777c1c3f0ecdace6403e
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145069954'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introducción

Después de que creas una acción, querrás seguir lanzando características nuevas mientras trabajas con las contribuciones de la comunidad. Este tutorial describe un proceso de ejemplo que puedes seguir para lanzar y mantener las acciones en los proyectos de código abierto. El ejemplo:

* Aprovecha las {% data variables.product.prodname_actions %} para la integración continua, actualizaciones de dependencias, administración de lanzamientos y automatización de tareas.
* Proporciona confianza a través de las pruebas automatizadas e insignias de compilación.
* Indica cómo puede utilizarse la acción, idealmente, como parte de un flujo de trabajo más amplio.
* Señala qué tipo de contribuciones de la comunidad recibes. (Por ejemplo: propuestas, solicitudes de cambios o reportes de vulnerabilidades.)

Para obtener un ejemplo aplicado de este proceso, vea [github-developer/javascript-action](https://github.com/github-developer/javascript-action).

## Desarrollar y lanzar las acciones

En esta sección, debatimos un proceso de ejemplo para desarrollar y lanzar acciones y mostramos cómo utilizar las {% data variables.product.prodname_actions %} para automatizar el proceso.

### Acerca de las acciones de JavaScript

Las acciones de JavaScript son repositorios de Node.js con metadatos. Sin embargo, las acciones de JavaScript tienen propiedades adicionales comparadas con los proyectos tradicionales de Node.js:

* Los paquetes dependientes se confirman junto con el código, habitualmente de forma compilada y minificada. Esto significa que las compilaciones automatizadas y contribuciones seguras de la comunidad, son importantes.

{% ifversion fpt or ghec %}

* Los lanzamientos etiquetados pueden publicarse directamente en {% data variables.product.prodname_marketplace %} y consumirse mediante flujos de trabajo a lo largo de {% data variables.product.prodname_dotcom %}.

{% endif %}

* Muchas de las acciones utilizan las API de {% data variables.product.prodname_dotcom %} y de terceros, así que recomendamos hacer pruebas robustas de extremo a extremo.

### Configurar los flujos de trabajo de {% data variables.product.prodname_actions %}

Para apoyar el proceso de desarrollo en la siguiente sección, agrega dos flujos de trabajo de {% data variables.product.prodname_actions %} a tu repositorio:

1. Agregue un flujo de trabajo que se desencadene cuando se inserte una confirmación en una rama de características o `main`, o bien cuando se cree una solicitud de incorporación de cambios. Configura el flujo de trabajo para que ejecute tus pruebas de unidad y de integración. Para obtener un ejemplo, vea [este flujo de trabajo](https://github.com/github-developer/javascript-action/blob/963a3b9a9c662fd499419a240ed8c49411ff5add/.github/workflows/test.yml).
2. Agrega un flujo de trabajo que se active cuando se publique o edite un lanzamiento. Configura el flujo de trabajo para garantizar que cuentes con etiquetas semánticas. Puede usar una acción como [JasonEtco/build-and-tag-action](https://github.com/JasonEtco/build-and-tag-action) para compilar y agrupar el archivo de JavaScript y los metadatos, y forzar la inserción de etiquetas semánticas principales, secundarias y de revisión. Para obtener un ejemplo, vea [este flujo de trabajo](https://github.com/github-developer/javascript-action/blob/963a3b9a9c662fd499419a240ed8c49411ff5add/.github/workflows/publish.yml). Para más información sobre las etiquetas semánticas, vea "[Acerca del control de versiones semántico](https://docs.npmjs.com/about-semantic-versioning)".

### Proceso de desarrollo ejemplo

Aquí tienes un proceso de ejemplo que puedes seguir para ejecutar pruebas automáticas, crear un lanzamiento{% ifversion fpt or ghec%} y publicarlo en {% data variables.product.prodname_marketplace %}{% endif %} y publicar tu acción.

1. Realiza trabajo de características en las ramas por flujo de GitHub. Para más información, vea "[Flujo de GitHub](/get-started/quickstart/github-flow)".
   * Cuando se suba una confirmación a la rama de característica, tu flujo de trabajo de pruebas ejecutará las pruebas automáticamente.

2. Cree solicitudes de incorporación de cambios en la rama `main` para iniciar debates y revisiones, y realizar la combinación cuando estén listas.

   * Cuando se abre una solicitud de cambios, ya sea desde una rama o una bifurcación, tu flujo de trabajo de prueba volverá a ejecutar las pruebas, esta vez, con la confirmación de fusión.

   * **Nota:** Por motivos de seguridad, los flujos de trabajo desencadenados por `pull_request` desde las bifurcaciones tienen permisos `GITHUB_TOKEN` restringidos y no tienen acceso a los secretos. Si las pruebas u otros flujos de trabajo desencadenados tras la solicitud de incorporación de cambios necesitan acceso a los secretos, considere la posibilidad de usar otro evento, como un [desencadenador manual](/actions/reference/events-that-trigger-workflows#manual-events) o [`pull_request_target`](/actions/reference/events-that-trigger-workflows#pull_request_target). Obtenga más información [aquí](/actions/reference/events-that-trigger-workflows#pull-request-events-for-forked-repositories).

3. Crea un lanzamiento con etiquetado semántico. {% ifversion fpt or ghec %} También puedes publicar en {% data variables.product.prodname_marketplace %} con una casilla de verificación sencilla. {% endif %} Para más información, vea "[Administración de versiones en un repositorio](/github/administering-a-repository/managing-releases-in-a-repository#creating-a-release)"{% ifversion fpt or ghec %} y "[Acciones de publicación en {% data variables.product.prodname_marketplace %}](/actions/creating-actions/publishing-actions-in-github-marketplace#publishing-an-action)"{% endif %}.

   * Cuando se publica o edita un lanzamiento, el flujo de trabajo de este se encargará automáticamente de la compilación y ajuste de etiquetas.

   * Se recomienda crear versiones mediante etiquetas con versiones semánticas (por ejemplo, `v1.1.3`) y mantener las etiquetas principales (`v1`) y secundarias (`v1.1`) actuales en la confirmación adecuada más reciente. Para más información, vea "[Acerca de las acciones personalizadas](/actions/creating-actions/about-custom-actions#using-release-management-for-actions)" y "[Acerca del control de versiones semántico](https://docs.npmjs.com/about-semantic-versioning)".

### Results

A diferencia de otras estrategias de administración de versiones automatizadas, este proceso no confirma de forma intencionadas las dependencias en la rama `main`, solo en las confirmaciones de versión etiquetadas. Al hacerlo, se anima a los usuarios de la acción a hacer referencia a etiquetas con nombre o `sha`, y ayuda a garantizar la seguridad de las solicitudes de incorporación de cambios de terceros al realizar personalmente la compilación durante una versión.

El utilizar lanzamientos semánticos significa que los usuarios de tus acciones pueden fijar sus flujos de trabajo a una versión y tener por seguro que podrían seguir recibiendo las últimas características constantes y estables, dependiendo de su nivel de confort:

## Trabajar con la comunidad

{% data variables.product.product_name %} proporciona herramientas y guías para ayudarte a trabajar con la comunidad de código abierto. Aquí tienes algunas herramientas que te recomendamos configurar para tener una comunicación bidireccional saludable. Al proporcionar las siguientes señales a la comunidad, motivas a los demás a utilizar, modificar y contribuir con tu acción:

* Mantenga un `README` con una gran cantidad de ejemplos de uso e instrucciones. Para más información, vea "[Acerca de los archivos Léame](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes)".
* Incluya un distintivo de estado de flujo de trabajo en el archivo `README`. Para más información, vea "[Adición de un distintivo de estado de flujo de trabajo](/actions/managing-workflow-runs/adding-a-workflow-status-badge)". Visite también [shields.io](https://shields.io/) para obtener información sobre otros distintivos que puede agregar.{% ifversion fpt or ghec %}
* Agregue archivos de estado de la comunidad como `CODE_OF_CONDUCT`, `CONTRIBUTING` y `SECURITY`. Para más información, vea "[Creación de un archivo de estado de la comunidad predeterminado](/github/building-a-strong-community/creating-a-default-community-health-file#supported-file-types)".{% endif %}
* Mantenga las incidencias actualizadas mediante acciones como [actions/stale](https://github.com/actions/stale).

## Información adicional

Los ejemplos donde se emplean patrones similares incluyen:

* [github/super-linter](https://github.com/github/super-linter)
* [octokit/request-action](https://github.com/octokit/request-action)
* [github-developer/javascript-action](https://github.com/github-developer/javascript-action)
