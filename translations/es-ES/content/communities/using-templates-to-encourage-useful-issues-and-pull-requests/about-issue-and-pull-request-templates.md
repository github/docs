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
shortTitle: About templates
ms.openlocfilehash: b95b31ae4171a54d9261fab6cbe93c43361296ab
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145117593'
---
Una vez que creas las plantillas de propuestas y solicitudes de extracción en tu repositorio, los colaboradores pueden usar las plantillas para abrir propuestas o describir los cambios propuestos en sus solicitudes de extracción de acuerdo con las pautas de contribución del repositorio. Para obtener más información sobre cómo agregar directrices de contribución a un repositorio, vea "[Configuración de directrices para colaboradores del repositorio](/articles/setting-guidelines-for-repository-contributors)".

{% ifversion fpt or ghes or ghec %}

Puedes crear plantillas predeterminadas de incidencias y solicitudes de incorporación de cambios para tu cuenta personal o de la organización. Para más información, vea "[Creación de un archivo de estado de la comunidad predeterminado](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)".

{% endif %}

## Plantillas de propuestas

Al crear plantillas de problemas para el repositorio mediante el generador de plantillas de problemas{% ifversion fpt or ghec %} o con formularios de problemas{% endif %}, los colaboradores pueden seleccionar la plantilla adecuada cuando abran nuevos problemas en el repositorio.

![Página de la propuesta nueva que muestra las opciones de plantilla de propuesta](/assets/images/help/issues/new-issue-page-with-multiple-templates.png)

El emitir plantillas es útil cuando quieres proporcionar lineamientos para las propuestas que se abren mientras que permites que los contribuyentes especifiquen el contenido de sus propuestas. {% ifversion fpt or ghec %} Si quiere que los colaboradores proporcionen información específica y estructurada cuando abran problemas, los formularios de problemas permiten garantizar que recibe la información deseada. {% endif %}

Al usar el creador de plantillas, puedes especificar un título y una descripción para cada plantilla, agregar el contenido de la plantilla y asignar la plantilla a la rama por defecto o bien abrir una solicitud de extracción en el repositorio. El creador de plantillas automáticamente agrega el markup del texto preliminar de YAML que se requiere para que la plantilla aparezca en la página de la propuesta nueva. Para más información, vea "[Configuración de plantillas de incidencia para el repositorio](/articles/configuring-issue-templates-for-your-repository)".

{% ifversion fpt or ghec %} Con los formularios de problemas, puede crear plantillas que tengan campos de formulario web mediante el esquema de formulario {% data variables.product.prodname_dotcom %}. Cuando un contribuyente abre una propuesta utilizando un formato de propuesta, las entradas de este formato se convierten en un comentario de propuesta con lenguaje de marcado estándar. Puedes especificar varios tipos diferentes de entradas y configurarlas como se requieran para ayudar a que los contribuyentes abran las propuestas accionables en tu repositorio. Para obtener más información, vea "[Configuración de plantillas de problemas para el repositorio](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository#creating-issue-forms)" y "[Sintaxis para formularios de problemas](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms)".
{% endif %}

{% data reusables.repositories.issue-template-config %} Para obtener más información, consulta "[Configuración de plantillas de incidencias para el repositorio](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository#configuring-the-template-chooser)".

Las plantillas de problemas se almacenan en la rama predeterminada del repositorio, en un directorio oculto `.github/ISSUE_TEMPLATE`. Si creas una plantilla en otra rama, no estará disponible para que la usen los colaboradores. Los nombres de archivo de las plantillas de propuestas no distinguen entre mayúsculas y minúsculas y necesitan tener una extensión *.md*.{% ifversion fpt or ghec %}Las plantillas de propuestas que se crearon con formatos de propuesta necesitan una extensión *.yml*.{% endif %} {% data reusables.repositories.valid-community-issues %}

Es posible crear de forma manual una única plantilla de propuesta en Markdown usando el flujo de trabajo de la plantilla de propuesta heredado. Los colaboradores del proyecto automáticamente ven el contenido de la plantilla en el cuerpo de la propuesta. Pero se recomienda usar el generador de plantillas de varios problemas actualizado{% ifversion fpt or ghec %} o el formulario de problemas{% endif %} para crear plantillas de problemas. Para obtener más información sobre el flujo de trabajo heredado, vea "[Creación manual de una sola plantilla de problemas para el repositorio](/articles/manually-creating-a-single-issue-template-for-your-repository)".

{% data reusables.repositories.security-guidelines %}

## Plantillas de solicitud de incorporación de cambios

Cuando agregas una plantilla de solicitud de extracción a tu repositorio, los colaboradores del proyecto verán automáticamente los contenidos de la plantilla en el cuerpo de la solicitud de extracción.

![Plantilla de solicitud de extracción de ejemplo](/assets/images/help/pull_requests/pr-template-sample.png)

Debes crear las plantillas en la rama por defecto del repositorio. Las plantillas creadas en otras ramas no están disponibles para que las usen los colaboradores. Puede almacenar su plantilla de solicitud de incorporación de cambios en el directorio raíz visible del repositorio, la carpeta `docs` o el directorio `.github` oculto. Los nombres de archivo de la plantilla de solicitud de incorporación de cambios no distinguen entre mayúsculas y minúsculas y pueden tener una extensión como *.md* o *.txt*.

Para obtener más información, vea "[Creación de una plantilla de solicitud de incorporación de cambios para el repositorio](/articles/creating-a-pull-request-template-for-your-repository)".
