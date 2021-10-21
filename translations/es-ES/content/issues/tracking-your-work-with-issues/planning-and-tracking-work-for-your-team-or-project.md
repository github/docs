---
title: Planear y rastrear el trabajo para tu equipo o proyecto
intro: 'Lo básico para utilizar las herramientas de planeación y rastreo de {% data variables.product.prodname_dotcom %} para dministrar el trabajo en un equipo o proyecto.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
---

## Introducción
Puedes utilizar los repositorios de {% data variables.product.prodname_dotcom %}, las propuestas, los tableros de proyecto y otras herramientas para rastrear y planear tu trabajo, ya sea que trabajes en un proyecto individual o en un equipo inter-funcional.

En esta guía, aprenderás cómo crear y configurar un repositorio para colaborar con un grupo de personas, crear plantillas de propuestas{% ifversion fpt %} y formatos {% endif %}, abrir propuestas y utilizar las listas de tareas para dividir el trabajo y establecer un tablero de proyecto para organizar y rastrear las propuestas.

## Crear un repositorio
Cuando comienzas un proyecto, inciativa o característica nuevos, el primer paso es crear un repositorio. Los repositorios contienen todos los archivos de tu proyecto y te proporcionan un lugar para colaborar con otros y administrar tu trabajo. Para obtener más información, consulta la sección "[Crear un nuevo repositorio](/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-new-repository)."

Puedes configurar repositorios para propósitos diferentes con base en tus necesidades. Los siguientes son algunos casos de uso común:

- **Repositorios de producto**: Las organizaciones más grandes que rastrean su trbaajo y metas en productos específicos tienen uno o más repositorios que contienen el código y otros archivos. Estos repositorios también pueden utilizarse para documentación, reportes sobre la salud de los productos o planes futuros para estos.
- **Repositorios de proyecto**: Puedes crear un repositorios para un proyecto individual en el cual estés trabajando o para uno en el que estés colaborando con otras personas. Para una organización que rastrea el trabajo para iniciativas o proyectos de vida corta, tales como una firma de consultores, se necesita reportar la salud de un proyecto y mover a las personas entre proyectos diferentes con base en sus habilidades y necesidades. El código del proyecto a menudo se contiene en un solo repositorio.
- **Repositorios de equipo**: Para una organización que agrupa a las personas en equipos y les da proyectos, tales como un equipo de herramientas de desarrollo, el código puede repartirse en muchos repositorios para lso diferentes trabajos que tienen que rastrear. En este caso, puede se útil tener un repositorio específico para cada equipo como lugar único para rastrear todo el trabajo en el que se involucra dicho equipo.
- **Repositoris personales**: Puedes crear un repositorio personal para rastrear todo tu tabajo en un solo lugar, planear tareas a futuro o incluso agregar notas o información que quieras guardar. También puedes agregar colaboradores si quieres compartir esta información con otros.

Puedes crear repositorios múltiples y separados si quieres tener permisos de acceso diferentes para el código fuente y para rastrear propuestas y debates. Para obtener más información, consulta la sección "[Crear un repositorio solo para propuestas](/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-an-issues-only-repository)".

Para los ejemplos siguientes en esta guía, utilizaremos un repositorio de ejemplo llamado Proyecto Octocat.
## Comunicar la información del repositorio
Puedes crear un archivo de README.md para tu repositorio e introducir tu equipo o proyecto y comunicar información importante sobre este. A menudo, un README es el primer elemento que verá un visitante de tu repositorio, así que también puedes proporcionar información de cómo los usuarios o contribuyentes pueden iniciar con el proyecto y de cómo contactar al equipo. Para obtener más información, consulta "[Acerca de los README](/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-readmes)".

También puedes crear un archivo de CONTRIBUTING.md, específicamente para que contenga los lineamientos sobre cómo los usuarios o contribuyentes pueden interactuar o contribuir con el proyecto, con instrucciones tales como cómo abrir una propuesta para arreglar un error o cómo solicitar una mejora. Para obtener más información, consulta "[Establecer pautas para los colaboradores del repositorio](/communities/setting-up-your-project-for-healthy-contributions/setting-guidelines-for-repository-contributors)".
### Ejemplo de README
Podemos crear un README.md para introducir nuestro proyecto nuevo al Proyecto Octocat.

![Ejemplo de cómo crear un README](/assets/images/help/issues/quickstart-creating-readme.png)
## Crear plantillas de reporte de problemas

Puedes utilizar las propuestas para rastrear los tipos de trabajo diferentes que tu equipo o proyecto inter-funcional cubre, así como para recopilar información de aquellos fuera de tu proyecto. Los siguientes son algunos casos de uso comunes para las propuestas.

- Liberar el rastreo: Puedes utilizar una propuesta para rastrear el progreso para un lanzamiento o para los pasos a completar el día del lanzamiento.
- Iniciativas grandes: Puedes utilizar una propuesta para rastrear el progreso en un proyecto de iniciativa grande, el cual se enlaza a propuestas más pequeñas.
- Solicitudes de características: Tu equipo o usuarios pueden crear propuestas para solicitar una mejora en tu producto o proyecto.
- Errores: Tu equipo o usuarios pueden crear propuestas para reportar un error.

Dependiendo del tipo de repositorio y proyecto en el que estés trabajando, podrías priorizar ciertos tipos de propuestas osbre otras. Una vez que hayas identificado los tipos de propuesta más comunes para tu equipo, puedes crear plantillas de propuestas {% ifversion fpt %} y formatos{% endif %} para tu repositorio. Las plantillas de propuestas {% ifversion fpt %}y formatos{% endif %} te permiten crear una lista estandarizada de plantillas de las cuales puede elegir un contribuyente para abrir una propuesta en tu repositorio. Para obtener más información, consulta "[Configurar plantillas de propuestas para tu repositorio](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository)".

### Ejemplo de plantilla de propuesta
A continuación, creamos una plantilla de propuesta para reportar un error en el Proyecto Octocat.

![Ejemplo de cómo crear una plantilla de propuesta](/assets/images/help/issues/quickstart-creating-issue-template.png)

Ahora que creamos la plantilla de propuestas para reportes de errores, puedes seleccionarla cuando crees una propuesta nueva en el proyecto Octocat.

![Ejemplo de elegir la plantilla de una propuesta](/assets/images/help/issues/quickstart-issue-creation-menu-with-template.png)

## Abrir propuestas y utilizar las listas de tareas para rastrear el trabajo
Puedes organizar y rastrear tu trabajo creando propuestas. Para obtener más información, consulta la sección "[Crear una propuesta](/issues/tracking-your-work-with-issues/creating-issues/creating-an-issue)".
### Ejemplo de propuesta
Aquí tienes un ejemplo de una propuesta que se creó para un trabajo de cara al usuario de una iniciativa grande en el proyecto Octocat.

![Ejemplo de creación de propuesta para una iniciativa grande](/assets/images/help/issues/quickstart-create-large-initiative-issue.png)
### Ejemplo de lista de tareas

Puedes utilizar listas de tareas para dividir propuestas más grandes en otras más pequeñas y para rastrear propuestas como parte de una meta más grande. {% ifversion fpt %} Las listas de tareas tienen una funcionalidad adicional cuando se agregan al cuerpo de una propuesta. Puedes ver la cantidad de tareas que se completaron en comparación con las tareas totales en la parte superior de la propuesta y, si alguien cierra una propuesta que esté enlazada en la lista de tareas, la casilla de verificación se marcará automáticamente como completa.{% endif %} Para obtener más información, consulta la sección "[Acerca de las listas de tareas](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)".

Debajo, agregamos una lista de tareas a nuestra propuesta del Proyecto Octocat, dividiéndola en propuestas más pequeñas.

![Agregar una lista de tareas a un ejemplo de propuesta](/assets/images/help/issues/quickstart-add-task-list-to-issue.png)

## Tomar deciciones como equipo
Puedes utilizar las propuestas y debates para comunicarte y hacer decisiones como equipo sobre las mejoras planeadas o sobre las prioridades de tu proyecto. Las propuestas son útiles cuando las creas para debatir detalles específicos, tales como reportes de rendimiento o de errores, planeaciones para el siguiente trimestre o diseño para una iniciativa nueva. Los debates son útiles para la lluvia de ideas abierta o para la retroalmientación, fuera de la base de código y a través de los repositorios. Para obtener más información, consulta la sección "[¿Qué herramienta de debate debería utilizar?](/github/getting-started-with-github/quickstart/communicating-on-github#which-discussion-tool-should-i-use)".

Como equipo, puedes comunicar actualziaciones sobre las tareas del día a día dentro de las propuestas para que todos sepan el estado del trabajo. Por ejemplo, puedes crear una propuesta para una característica grande en la que estén trabajando varias personas y cada miembro puede agregar actualizaciones con su estado o preguntas abiertas en esa propuesta.
### Ejemplo de propuesta con colaboradores de proyecto
Aquí tienes un ejemplo de los colaboradores de proyecto dando una actualización de estado sobre su trabajo en la propuesta del Proyecto Octocat.

![Colaborar con el ejemplo de propuesta](/assets/images/help/issues/quickstart-collaborating-on-issue.png)
## Utilizar etiquetas para resaltar las metas y el estado del proyecto
Puedes crear etiquetas para que un repositorio categorice las propuestas, solicitudes de cambio y debates. {% data variables.product.prodname_dotcom %} también proporciona etiquetas predeterminadas para cada repositorio nuevo que puedas editar o borrar. Las etiquetas sirven para rastrear las metas del proyecto, los errores, los tipos de trabajo y el estado de una propuesta.

Para obtener más información, consulta "[Crear una etiqueta](/issues/using-labels-and-milestones-to-track-work/managing-labels#creating-a-label)".

Una vez que hayas creado una etiqueta en un repositorio, puedes aplicarla a cualquier propuesta, solicitud de cambos o debate en este. Puedes entonces filtrar las propuestas y solicitudes de cambio por etiqueta para encontrar todo el trabajo asociado. Por ejemplo, encuentra los errores de cara al usuario en tu proyecto filtrando las propuestas con las etiquetas `front-end` y `bug`. Para obtener más información, consulta la sección "[Filtrar y buscar las propuestas y solicitudes de cambio](/issues/tracking-your-work-with-issues/filtering-and-searching-issues-and-pull-requests)".
### Ejemplo de etiqueta
A continuación se encuentra un ejemplo de una etiqueta de `front-end` que creamos y agregamos a la propuesta.

![Agregar una etiqueta a un ejemplo de propuesta](/assets/images/help/issues/quickstart-add-label-to-issue.png)
## Agregar propuestas a un tablero de proyecto
{% ifversion fpt %}Puedes utilizar proyectos en {% data variables.product.prodname_dotcom %}, actualmente en el beta público limitado, para planear y rastrear el trabajo de tu equipo. Un proyecto es una hoja de cálculo personalizada que se integra con tus propuestas y solicitudes de cambvios en {% data variables.product.prodname_dotcom %} y que se actualiza automáticamente con la información de {% data variables.product.prodname_dotcom %}. Puedes personalziar el diseño si filtras, clasificas y agrupas tus propuestas y solicitudes de cambios. Para inciar con los proyectos, consulta la [Guía de inicio rápido para los proyectos (beta)](/issues/trying-out-the-new-projects-experience/quickstart)".
### Ejemplo de proyecto (beta)
Aquí está la vista de tablero de un proyecto de ejemplo, la cual se llenó con propuestas del Proyecto Octocat que hemos creado.

![Ejemplo de vista de tabla de los proyectos (beta)](/assets/images/help/issues/quickstart-projects-table-view.png)

También podemos ver el mismo proyecto como un tablero.

![Ejemplo de vista de tablero de los proyectos (beta)](/assets/images/help/issues/quickstart-projects-board-view.png)

{% endif %}

También puedes {% ifversion fpt %} utilizar los tableros de proyecto existentes{% else %} utilizar{% endif %}los tableros de proyecto en {% data variables.product.prodname_dotcom %} para planear y rastrear tu trabajo o el de tu equipo. Los tableros de proyecto están compuestos por propuestas, solicitudes de extracción y notas que se categorizan como tarjetas en columnas a tu elección. Puedes crear tableros de proyecto para presentar trabajo, planes de alto nivel o incluso listas de verificación. Para obtener más información, consulta "[Acerca de los tableros de proyectos](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)."
### Ejemplo del trablero de proyecto
A continuación, se presenta un tablero de proyecto para nuestro ejemplo del Proyecto Octocat, con la propuesta que creamos y las propuestas más pequeñas en las que lo dividimos agregadas a este.

![Ejemplo del trablero de proyecto](/assets/images/help/issues/quickstart-project-board.png)
## Pasos siguientes

Ya aprendiste sobre las herramientas que ofrece {% data variables.product.prodname_dotcom %} para planear y rastrear tu trabajo e iniciaste en la configuración de un equipo inter-funcional o repositorio de proyecto. Aquí te mostramos algunos recursos útiles para seguir personalizando tu repositorio y organizar tu trabajo.

- Consulta la sección "[Acerca de los repositorios](/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-repositories)" para aprender más sobre cómo crear los repositorios
- "[Rastrear tu trabajo con propuestas](/issues/tracking-your-work-with-issues)" para aprender más sobre los tipos diferentes de crear y administrar las propuestas
- "[Acerca de las propuestas y solicitudes de cambios](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/about-issue-and-pull-request-templates)" para aprender más sobre las plantillas de propuestas
- "[Administrar etiquetas](/issues/using-labels-and-milestones-to-track-work/managing-labels)" para aprender cómo crear, editar y borrar etiquetas
- "[Acerca de las listas de tareas](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)" para aprender más sobre las tareas
{% ifversion fpt %} - "[Acerca de los proyectos (beta)](/issues/trying-out-the-new-projects-experience/about-projects)" para aprender más sobre la experiencia de los proyectos nuevos, actualmente en beta público limitado
- "[Personalizar tus vistas de proyecto (beta)](/issues/trying-out-the-new-projects-experience/customizing-your-project-views)" para aprender cómo personalizar las vistas de los proyectos, actualmente en beta público limitado{% endif %}
- "[Acerca de los tableros de proyecto](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)" para aprender cómo administrar los tableros de proyecto
