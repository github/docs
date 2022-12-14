---
title: Planear y rastrear el trabajo para tu equipo o proyecto
intro: 'Lo básico para utilizar las herramientas de planeación y rastreo de {% data variables.product.prodname_dotcom %} para dministrar el trabajo en un equipo o proyecto.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Project management
  - Projects
ms.openlocfilehash: 782351c80164c90d479120996edf25329d20078c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147423616'
---
## Introducción
Puedes utilizar los repositorios de {% data variables.product.prodname_dotcom %}, las propuestas, los tableros de proyecto y otras herramientas para rastrear y planear tu trabajo, ya sea que trabajes en un proyecto individual o en un equipo inter-funcional.

En esta guía, aprenderá a crear y configurar un repositorio para colaborar con un grupo de personas, crear plantillas de incidencias{% ifversion fpt %} y formularios{% endif %}, abrir incidencias y a usar listas de tareas para dividir el trabajo y establecer un panel de proyecto para organizar las incidencias y realizar su seguimiento.

## Crear un repositorio
Cuando comienzas un proyecto, inciativa o característica nuevos, el primer paso es crear un repositorio. Los repositorios contienen todos los archivos de tu proyecto y te proporcionan un lugar para colaborar con otros y administrar tu trabajo. Para más información, vea "[Creación de un repositorio](/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-new-repository)".

Puedes configurar repositorios para propósitos diferentes con base en tus necesidades. Los siguientes son algunos casos de uso común:

- **Repositorios de producto**: las organizaciones más grandes que realizan el seguimiento de su trabajo y objetivos sobre productos específicos tienen uno o más repositorios que contienen el código y otros archivos. Estos repositorios también pueden utilizarse para documentación, reportes sobre la salud de los productos o planes futuros para estos. 
- **Repositorios de proyectos**: puede crear un repositorio para un proyecto individual en el que trabaje, o bien para uno en el que colabore con otras personas. Para una organización que rastrea el trabajo para iniciativas o proyectos de vida corta, tales como una firma de consultores, se necesita reportar la salud de un proyecto y mover a las personas entre proyectos diferentes con base en sus habilidades y necesidades. El código del proyecto a menudo se contiene en un solo repositorio.
- **Repositorios de equipo**: para una organización que agrupa personas en equipos y les proporciona proyectos, como un equipo de herramientas de desarrollo, es posible que el código esté distribuido entre varios repositorios para los diferentes trabajos de los que tengan que realizar el seguimiento. En este caso, puede resultar útil tener un repositorio específico del equipo como un solo lugar para realizar el seguimiento del trabajo en el que participa el equipo.
- **Repositorios personales**: puede crear un repositorio personal para realizar el seguimiento de todo el trabajo en un solo lugar, planificar tareas futuras o incluso agregar notas o información que quiera guardar. También puedes agregar colaboradores si quieres compartir esta información con otros. 

Puedes crear repositorios múltiples y separados si quieres tener permisos de acceso diferentes para el código fuente y para rastrear propuestas y debates. Para más información, vea "[Creación de un repositorio solo de incidencias](/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-an-issues-only-repository)".

Para los ejemplos siguientes en esta guía, utilizaremos un repositorio de ejemplo llamado Proyecto Octocat.
## Comunicar la información del repositorio
Puedes crear un archivo de README.md para tu repositorio e introducir tu equipo o proyecto y comunicar información importante sobre este. A menudo, un README es el primer elemento que verá un visitante de tu repositorio, así que también puedes proporcionar información de cómo los usuarios o contribuyentes pueden iniciar con el proyecto y de cómo contactar al equipo. Para más información, vea "[Acerca de los archivos Léame](/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-readmes)".

También puedes crear un archivo de CONTRIBUTING.md, específicamente para que contenga los lineamientos sobre cómo los usuarios o contribuyentes pueden interactuar o contribuir con el proyecto, con instrucciones tales como cómo abrir una propuesta para arreglar un error o cómo solicitar una mejora. Para más información, vea "[Establecimiento de instrucciones para los colaboradores del repositorio](/communities/setting-up-your-project-for-healthy-contributions/setting-guidelines-for-repository-contributors)".
### Ejemplo de README
Podemos crear un README.md para introducir nuestro proyecto nuevo al Proyecto Octocat. 

![Ejemplo de cómo crear un README](/assets/images/help/issues/quickstart-creating-readme.png)
## Crear plantillas de reporte de problemas

Puedes utilizar las propuestas para rastrear los tipos de trabajo diferentes que tu equipo o proyecto inter-funcional cubre, así como para recopilar información de aquellos fuera de tu proyecto. Los siguientes son algunos casos de uso comunes para las propuestas.

- Liberar el rastreo: Puedes utilizar una propuesta para rastrear el progreso para un lanzamiento o para los pasos a completar el día del lanzamiento.
- Iniciativas grandes: Puedes utilizar una propuesta para rastrear el progreso en un proyecto de iniciativa grande, el cual se enlaza a propuestas más pequeñas.
- Solicitudes de características: Tu equipo o usuarios pueden crear propuestas para solicitar una mejora en tu producto o proyecto.
- Errores: Tu equipo o usuarios pueden crear propuestas para reportar un error. 

Dependiendo del tipo de repositorio y proyecto en el que estés trabajando, podrías priorizar ciertos tipos de propuestas osbre otras. Una vez que haya identificado los tipos de incidencia más comunes para el equipo, puede crear plantillas de incidencias {% ifversion fpt %}y formularios{% endif %} para el repositorio. Las plantillas de incidencias {% ifversion fpt or ghec %}y los formularios{% endif %} permiten crear una lista estandarizada de plantillas entre las que puede elegir un colaborador cuando abra una incidencia en el repositorio. Para más información, vea "[Configuración de plantillas de incidencia para el repositorio](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository)".

### Ejemplo de plantilla de propuesta
A continuación, creamos una plantilla de propuesta para reportar un error en el Proyecto Octocat.

![Ejemplo de cómo crear una plantilla de propuesta](/assets/images/help/issues/quickstart-creating-issue-template.png)

Ahora que creamos la plantilla de propuestas para reportes de errores, puedes seleccionarla cuando crees una propuesta nueva en el proyecto Octocat.

![Ejemplo de elegir la plantilla de una propuesta](/assets/images/help/issues/quickstart-issue-creation-menu-with-template.png)

## Abrir propuestas y utilizar las listas de tareas para rastrear el trabajo
Puedes organizar y rastrear tu trabajo creando propuestas. Para más información, vea "[Creación de una incidencia](/issues/tracking-your-work-with-issues/creating-issues/creating-an-issue)".
### Ejemplo de propuesta
Aquí tienes un ejemplo de una propuesta que se creó para un trabajo de cara al usuario de una iniciativa grande en el proyecto Octocat.

![Ejemplo de creación de propuesta para una iniciativa grande](/assets/images/help/issues/quickstart-create-large-initiative-issue.png)
### Ejemplo de lista de tareas

Puedes utilizar listas de tareas para dividir propuestas más grandes en otras más pequeñas y para rastrear propuestas como parte de una meta más grande. {% ifversion fpt or ghec %} Las listas de tareas tienen una funcionalidad adicional cuando se agregan al cuerpo de una incidencia. Puede ver la cantidad de tareas que se han completado con respecto al total en la parte superior de la incidencia y, si alguien cierra una incidencia vinculada enlazada en la lista de tareas, la casilla se marcará automáticamente como completada.{% endif %} Para más información, vea "[Acerca de las listas de tareas](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)".

Debajo, agregamos una lista de tareas a nuestra propuesta del Proyecto Octocat, dividiéndola en propuestas más pequeñas.

![Agregar una lista de tareas a un ejemplo de propuesta](/assets/images/help/issues/quickstart-add-task-list-to-issue.png)

## Tomar deciciones como equipo
Puedes utilizar las propuestas y debates para comunicarte y hacer decisiones como equipo sobre las mejoras planeadas o sobre las prioridades de tu proyecto. Las propuestas son útiles cuando las creas para debatir detalles específicos, tales como reportes de rendimiento o de errores, planeaciones para el siguiente trimestre o diseño para una iniciativa nueva. Los debates son útiles para la lluvia de ideas abierta o para la retroalmientación, fuera de la base de código y a través de los repositorios. Para más información, vea "[¿Qué herramienta de debate debo usar?](/github/getting-started-with-github/quickstart/communicating-on-github#which-discussion-tool-should-i-use)".

Como equipo, puedes comunicar actualziaciones sobre las tareas del día a día dentro de las propuestas para que todos sepan el estado del trabajo. Por ejemplo, puedes crear una propuesta para una característica grande en la que estén trabajando varias personas y cada miembro puede agregar actualizaciones con su estado o preguntas abiertas en esa propuesta.
### Ejemplo de propuesta con colaboradores de proyecto
Aquí tienes un ejemplo de los colaboradores de proyecto dando una actualización de estado sobre su trabajo en la propuesta del Proyecto Octocat.

![Colaborar con el ejemplo de propuesta](/assets/images/help/issues/quickstart-collaborating-on-issue.png)
## Utilizar etiquetas para resaltar las metas y el estado del proyecto
Puedes crear etiquetas para que un repositorio categorice las propuestas, solicitudes de cambio y debates. {% data variables.product.prodname_dotcom %} también proporciona etiquetas predeterminadas para cada repositorio nuevo que puedas editar o borrar. Las etiquetas sirven para rastrear las metas del proyecto, los errores, los tipos de trabajo y el estado de una propuesta.

Para más información, vea "[Creación de una etiqueta](/issues/using-labels-and-milestones-to-track-work/managing-labels#creating-a-label)".

Una vez que hayas creado una etiqueta en un repositorio, puedes aplicarla a cualquier propuesta, solicitud de cambos o debate en este. Puedes entonces filtrar las propuestas y solicitudes de cambio por etiqueta para encontrar todo el trabajo asociado. Por ejemplo, para buscar todos los errores de front-end del proyecto, filtre por incidencias con las etiquetas `front-end` y `bug`. Para más información, vea "[Filtrado y búsqueda de incidencias y solicitudes de incorporación de cambios](/issues/tracking-your-work-with-issues/filtering-and-searching-issues-and-pull-requests)".
### Ejemplo de etiqueta
A continuación se muestra un ejemplo de una etiqueta `front-end` que se ha creado y agregado a la incidencia.

![Agregar una etiqueta a un ejemplo de propuesta](/assets/images/help/issues/quickstart-add-label-to-issue.png)

## Agregar propuestas a un tablero de proyecto

{% ifversion projects-v2 %}

Puedes usar {% data variables.projects.projects_v2 %} en {% data variables.product.prodname_dotcom %} para planificar y realizar el seguimiento del trabajo de tu equipo. Un proyecto es una hoja de cálculo personalizada que se integra con tus propuestas y solicitudes de cambvios en {% data variables.product.prodname_dotcom %} y que se actualiza automáticamente con la información de {% data variables.product.prodname_dotcom %}. Puedes personalziar el diseño si filtras, clasificas y agrupas tus propuestas y solicitudes de cambios. Para empezar a trabajar con proyectos, consulta "[Inicio rápido para proyectos](/issues/planning-and-tracking-with-projects/learning-about-projects/quickstart-for-projects)".
### Ejemplo de proyecto
Aquí tienes el diseño de tabla de un proyecto ejemplo, la cual se llenó con propuestas del proyecto Octocat que hemos creado.

![Ejemplo de diseño de tabla de proyectos](/assets/images/help/issues/quickstart-projects-table-view.png)

También podemos ver el mismo proyecto como un tablero.

![Ejemplo de diseño de panel de proyectos](/assets/images/help/issues/quickstart-projects-board-view.png)

{% endif %} {% ifversion projects-v1 %}

También puedes {% ifversion projects-v2 %} usar las instancias de {% data variables.product.prodname_projects_v1 %} {% else %}existentes{% endif %} de {% data variables.product.prodname_dotcom %} para planificar y realizar el seguimiento de tu trabajo y el del equipo. Los tableros de proyecto están compuestos por propuestas, solicitudes de extracción y notas que se categorizan como tarjetas en columnas a tu elección. Puedes crear tableros de proyecto para presentar trabajo, planes de alto nivel o incluso listas de verificación. Para más información, vea "[Acerca de los paneles de proyecto](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)".
### Ejemplo del trablero de proyecto
A continuación, se presenta un tablero de proyecto para nuestro ejemplo del Proyecto Octocat, con la propuesta que creamos y las propuestas más pequeñas en las que lo dividimos agregadas a este.

![Ejemplo del trablero de proyecto](/assets/images/help/issues/quickstart-project-board.png)

{% endif %}

## Pasos siguientes

Ya aprendiste sobre las herramientas que ofrece {% data variables.product.prodname_dotcom %} para planear y rastrear tu trabajo e iniciaste en la configuración de un equipo inter-funcional o repositorio de proyecto. Aquí te mostramos algunos recursos útiles para seguir personalizando tu repositorio y organizar tu trabajo.

- "[Acerca de los repositorios](/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-repositories)" para más información sobre la creación de repositorios
- "[Seguimiento del trabajo con incidencias](/issues/tracking-your-work-with-issues)" para más información sobre las distintas formas de crear y administrar incidencias
- "[Acerca de incidencias y plantillas de solicitud de incorporación de cambios](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/about-issue-and-pull-request-templates)" para más información sobre las plantillas de incidencias
- "[Administración de etiquetas](/issues/using-labels-and-milestones-to-track-work/managing-labels)" para aprender a crear, editar y eliminar etiquetas
- "[Acerca de las listas de tareas](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)" para más información sobre las listas de tareas {% ifversion projects-v2 %} - "[Acerca de los proyectos](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)" para más información sobre los proyectos
- "[Personalización de una vista](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view)" para aprender a personalizar vistas para proyectos{% endif %} {% ifversion projects-v1 %}- "[Acerca de {% data variables.product.prodname_projects_v1 %}](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)" para aprender a administrar paneles de proyecto{% endif %}
