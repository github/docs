---
title: Acerca de las plantillas de propuestas y solicitudes de extracción
intro: 'Con las plantillas de propuestas y solicitudes de extracción, puedes personalizar y estandarizar la información que quisieras que los colaboradores incluyan cuando abren propuestas y solicitudes de extracción en tu repositorio.'
redirect_from:
  - /articles/about-issue-and-pull-request-templates
  - /github/building-a-strong-community/about-issue-and-pull-request-templates
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Acerca de las plantillas
---

Una vez que creas las plantillas de propuestas y solicitudes de extracción en tu repositorio, los colaboradores pueden usar las plantillas para abrir propuestas o describir los cambios propuestos en sus solicitudes de extracción de acuerdo con las pautas de contribución del repositorio. Para obtener más información sobre cómo agregar pautas de contribución a un repositorio, consulta "[Configurar pautas para los colaboradores de repositorios](/articles/setting-guidelines-for-repository-contributors)".

{% ifversion fpt or ghes or ghec %}

Puedes crear plantillas de solicitudes de cambios y propuestas predeterminadas para tu cuenta de organización o personal. Para obtener más información, consulta "[Crear un archivo de salud predeterminado para la comunidad](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)."

{% endif %}

## Plantillas de propuestas

Cuando creas plantillas de propuestas para tu repositorio utilizando el creador de plantillas para propuestas{% ifversion fpt or ghec %} o con formatos de propuesta{% endif %}, los contribuyentes pueden seleccionar la plantilla adecuada cuando abren propuestas nuevas en el repositorio.

![Página de la propuesta nueva que muestra las opciones de plantilla de propuesta](/assets/images/help/issues/new-issue-page-with-multiple-templates.png)

El emitir plantillas es útil cuando quieres proporcionar lineamientos para las propuestas que se abren mientras que permites que los contribuyentes especifiquen el contenido de sus propuestas. {% ifversion fpt or ghec %} Si quieres que los contribuyentes proporcionen información específica y estructurada cuando abren propuestas, los formatos de propuesta ayudan a que te asegures de recibir la información que quieres.{% endif %}

Al usar el creador de plantillas, puedes especificar un título y una descripción para cada plantilla, agregar el contenido de la plantilla y asignar la plantilla a la rama por defecto o bien abrir una solicitud de extracción en el repositorio. El creador de plantillas automáticamente agrega el markup del texto preliminar de YAML que se requiere para que la plantilla aparezca en la página de la propuesta nueva. Para obtener más información, consulta "[Configurar plantillas de reporte de problemas para tu repositorio](/articles/configuring-issue-templates-for-your-repository)".

{% ifversion fpt or ghec %}
Con los formatos de propuesta, puedes crear plantillas que tengan campos de formatos web utilizando el modelado de formatos de {% data variables.product.prodname_dotcom %}. Cuando un contribuyente abre una propuesta utilizando un formato de propuesta, las entradas de este formato se convierten en un comentario de propuesta con lenguaje de marcado estándar. Puedes especificar varios tipos diferentes de entradas y configurarlas como se requieran para ayudar a que los contribuyentes abran las propuestas accionables en tu repositorio. Para obtener más información, consulta las secciones "[Configurar plantillas de propuestas en tu repositorio](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository#creating-issue-forms)" y "[Sintaxis para emitir formatos](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms)".
{% endif %}

{% ifversion fpt or ghae or ghes or ghec %}
{% data reusables.repositories.issue-template-config %} Para obtener más información, consulta "[Configurar plantillas de propuestas para tu repositorio](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository#configuring-the-template-chooser)".
{% endif %}

Las plantillas de propuestas se almacenan en la rama por defecto del repositorio, en un directorio oculto `.github/ISSUE_TEMPLATE`. Si creas una plantilla en otra rama, no estará disponible para que la usen los colaboradores. Los nombres de archivo de las plantillas de propuestas no distinguen entre mayúsculas y minúsculas y necesitan tener una extensión *.md*.{% ifversion fpt or ghec %}Las plantillas de propuestas que se crearon con formatos de propuesta necesitan una extensión *.yml*.{% endif %}{% data reusables.repositories.valid-community-issues %}

Es posible crear de forma manual una única plantilla de propuesta en Markdown usando el flujo de trabajo de la plantilla de propuesta heredado. Los colaboradores del proyecto automáticamente ven el contenido de la plantilla en el cuerpo de la propuesta. Sin embargo, te recomendamos utilizar el creador de plantillas de propuestas múltiples mejorado{% ifversion fpt or ghec %} o emitir formatos{% endif %} para crear plantillas de propuestas. Para obtener más información acerca del flujo de trabajo heredado, consulta "[Crear de forma manual una plantilla de propuesta para tu repositorio](/articles/manually-creating-a-single-issue-template-for-your-repository)".

{% data reusables.repositories.security-guidelines %}

## Plantillas de solicitudes de extracción

Cuando agregas una plantilla de solicitud de extracción a tu repositorio, los colaboradores del proyecto verán automáticamente los contenidos de la plantilla en el cuerpo de la solicitud de extracción.

![Plantilla de solicitud de extracción de ejemplo](/assets/images/help/pull_requests/pr-template-sample.png)

Debes crear las plantillas en la rama por defecto del repositorio. Las plantillas creadas en otras ramas no están disponibles para que las usen los colaboradores. Puedes almacenar tu plantilla de solicitud de extracción en el directorio raíz visible del repositorio, la carpeta `docs` o el directorio oculto `.github`. Los nombres de archivo de la plantilla de solicitud de extracción no distinguen entre mayúsculas y minúsculas y pueden tener una extensión como *.md* o *.txt*.

Para obtener más información, consulta [Crear plantillas de solicitud de extracción para tu repositorio](/articles/creating-a-pull-request-template-for-your-repository)".
