---
title: Lanzar y mantener las acciones
shortTitle: Lanzar y mantener las acciones
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
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Introducción

Después de que creas una acción, querrás seguir lanzando características nuevas mientras trabajas con las contribuciones de la comunidad. Este tutorial describe un proceso de ejemplo que puedes seguir para lanzar y mantener las acciones en los proyectos de código abierto. El ejemplo:

* Aprovecha las {% data variables.product.prodname_actions %} para la integración continua, actualizaciones de dependencias, administración de lanzamientos y automatización de tareas.
* Proporciona confianza a través de las pruebas automatizadas e insignias de compilación.
* Indica cómo puede utilizarse la acción, idealmente, como parte de un flujo de trabajo más amplio.
* Señala qué tipo de contribuciones de la comunidad recibes. (Por ejemplo: propuestas, solicitudes de cambios o reportes de vulnerabilidades.)

Para encontrar un ejemplo aplicado de este proceso, consulta [github-developer/javascript-action](https://github.com/github-developer/javascript-action).

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

1. Agrega un flujo de trabajo que se active cuando se suba una confirmación a una rama de característica o a `main` o cuando se cree una solicitud de cambios. Configura el flujo de trabajo para que ejecute tus pruebas de unidad y de integración. Para encontrar un ejemplo, consulta [este flujo de trabajo](https://github.com/github-developer/javascript-action/blob/963a3b9a9c662fd499419a240ed8c49411ff5add/.github/workflows/test.yml).
2. Agrega un flujo de trabajo que se active cuando se publique o edite un lanzamiento. Configura el flujo de trabajo para garantizar que cuentes con etiquetas semánticas. Puedes utilizar una acción como [JasonEtco/build-and-tag-action](https://github.com/JasonEtco/build-and-tag-action) para compilar y empaquetar el archivo de metadatos y de JavaScript y subir forzadamente las etiquetas semánticas mayores, menores y de parche. Para un ejemplo, vea [este flujo de trabajo](https://github.com/github-developer/javascript-action/blob/963a3b9a9c662fd499419a240ed8c49411ff5add/.github/workflows/publish.yml). Para obtener más información sobre las etiquetas semánticas, consulta la sección "[Acerca del versionamiento semántico](https://docs.npmjs.com/about-semantic-versioning)".

### Proceso de desarrollo ejemplo

Aquí tienes un proceso de ejemplo que puedes seguir para ejecutar pruebas automáticas, crear un lanzamiento{% ifversion fpt or ghec%} y publicarlo en {% data variables.product.prodname_marketplace %}{% endif %} y publicar tu acción.

1. Realiza trabajo de características en las ramas por flujo de GitHub. Para obtener más información, consulta la sección "[Flujo de GitHub](/get-started/quickstart/github-flow)".
   * Cuando se suba una confirmación a la rama de característica, tu flujo de trabajo de pruebas ejecutará las pruebas automáticamente.

2. Crea solicitudes de cambios en la rama `main` para iniciar debates y revisiones, fusionándolas cuando estén listas.

   * Cuando se abre una solicitud de cambios, ya sea desde una rama o una bifurcación, tu flujo de trabajo de prueba volverá a ejecutar las pruebas, esta vez, con la confirmación de fusión.

   * **Nota:** por razones de seguridad, los flujos de trabajo se activan mediante `pull_request` desde las bifurcaciones que tienen permisos de `GITHUB_TOKEN` restringidos y no tienen acceso a los secretos. Su tus pruebas u otros flujos de trabajo que se activaron en la solicitud de cambios requieren acceso a secretos, considera utilizar un evento diferente como un [activador manual](/actions/reference/events-that-trigger-workflows#manual-events) o una [`pull_request_target`](/actions/reference/events-that-trigger-workflows#pull_request_target). Puedes leer más al respecto [aquí](/actions/reference/events-that-trigger-workflows#pull-request-events-for-forked-repositories).

3. Crea un lanzamiento con etiquetado semántico. {% ifversion fpt or ghec %} También puedes publicar en {% data variables.product.prodname_marketplace %} con una casilla de verificación sencilla. {% endif %} Para obtener más información, consulta las secciones "[Adminsitrar los lanzamientos en un repositorio](/github/administering-a-repository/managing-releases-in-a-repository#creating-a-release)"{% ifversion fpt or ghec %} y "[Publicar acciones en {% data variables.product.prodname_marketplace %}](/actions/creating-actions/publishing-actions-in-github-marketplace#publishing-an-action)"{% endif %}.

   * Cuando se publica o edita un lanzamiento, el flujo de trabajo de este se encargará automáticamente de la compilación y ajuste de etiquetas.

   * Te recomendamos crear lanzamientos utilizando etiquetas versionadas semánticamente; como por ejemplo: `v1.1.3`; y mantener las etiquetas mayores (`v1`) y menores (`v1.1`) al corriente con sus confirmaciones más recientes adecuadas. Para obtener más información, consulta la sección "[Acerca de las acciones personalizadas](/actions/creating-actions/about-custom-actions#using-release-management-for-actions)" y "[Acerca del versionamiento semántico](https://docs.npmjs.com/about-semantic-versioning).

### Resultados

A diferencia de algunas otras estrategias de administración de lanzamientos automatizadas, este proceso no confirma dependencias en la rama `main` a propósito, sino únicamente em las confirmaciones de lanzamiento etiquetadas. Al hacerlo, animas a los usuarios de tu acción a referenciar las etiquetas nombradas o los `sha` y ayudas a garantizar la seguridad de las solicitudes de cambios de terceros al crear la compilación tú mismo durante un lanzamiento.

El utilizar lanzamientos semánticos significa que los usuarios de tus acciones pueden fijar sus flujos de trabajo a una versión y tener por seguro que podrían seguir recibiendo las últimas características constantes y estables, dependiendo de su nivel de confort:

## Trabajar con la comunidad

{% data variables.product.product_name %} proporciona herramientas y guías para ayudarte a trabajar con la comunidad de código abierto. Aquí tienes algunas herramientas que te recomendamos configurar para tener una comunicación bidireccional saludable. Al proporcionar las siguientes señales a la comunidad, motivas a los demás a utilizar, modificar y contribuir con tu acción:

* Mantener un `README` con suficientes ejemplos de uso y lineamientos. Para obtener más información, consulta "[Acerca de los README](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes)".
* Incluye una insignia de estado de flujo de trabajo en tu archivo `README`. Para obtener más información, consulta la sección "[Agregar una insignia de estado de flujo de trabajo](/actions/managing-workflow-runs/adding-a-workflow-status-badge)". También, visita [shields.io](https://shields.io/) para aprender sobre el resto de las insignias que puedes agregar.{% ifversion fpt or ghec %}
* Agrega archivos de salud comunitaria como `CODE_OF_CONDUCT`, `CONTRIBUTING` y `SECURITY`. Para obtener más información, consulta "[Crear un archivo de salud predeterminado para la comunidad](/github/building-a-strong-community/creating-a-default-community-health-file#supported-file-types)".{% endif %}
* Mantén las propuestas al día utilizando acciones como [actions/stale](https://github.com/actions/stale).

## Leer más

Los ejemplos donde se emplean patrones similares incluyen:

* [github/super-linter](https://github.com/github/super-linter)
* [octokit/request-action](https://github.com/octokit/request-action)
* [github-developer/javascript-action](https://github.com/github-developer/javascript-action)
