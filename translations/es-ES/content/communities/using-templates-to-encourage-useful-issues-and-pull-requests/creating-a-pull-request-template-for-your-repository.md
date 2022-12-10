---
title: Crear una plantilla de solicitud de extracción para tu repositorio
intro: 'Cuando agregas una plantilla de solicitud de extracción a tu repositorio, los colaboradores del proyecto verán automáticamente los contenidos de la plantilla en el cuerpo de la solicitud de extracción.'
redirect_from:
  - /articles/creating-a-pull-request-template-for-your-repository
  - /github/building-a-strong-community/creating-a-pull-request-template-for-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Create a PR template
ms.openlocfilehash: fa4d3cf78b63af147c85b8f6d77d7cca74e3853a
ms.sourcegitcommit: 4daa156856e651cb3854ead40e35bd918e481ad6
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/02/2022
ms.locfileid: '148190412'
---
Para más información, vea "[Acerca de las plantillas de incidencias y solicitudes de incorporación de cambios](/articles/about-issue-and-pull-request-templates)".

Puedes crear un subdirectorio *PULL_REQUEST_TEMPLATE/* en cualquiera de las carpetas admitidas para incluir múltiples plantillas de solicitudes de incorporación de cambios y usar el parámetro de consulta `template` para especificar la plantilla que completará el cuerpo de dicha solicitud. Para obtener más información, consulta "[Utilizar parámetros de consulta para crear una solicitud de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/using-query-parameters-to-create-a-pull-request)".

{% ifversion fpt or ghes or ghec %}

Puedes crear plantillas de solicitudes de incorporación de cambios predeterminadas para tu organización{% ifversion fpt or ghes or ghec %} o cuenta personal{% endif %}. Para más información, vea "[Creación de un archivo de estado de la comunidad predeterminado](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)".

{% endif %}

## Agregar una plantilla de solicitud de extracción

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. En el campo para el nombre del archivo:
    -  Para que la plantilla de solicitud de incorporación de cambios esté visible en el directorio raíz del repositorio, asigna el nombre `pull_request_template.md` a dicha plantilla.
  ![Nuevo nombre de plantilla de solicitud de incorporación de cambios en el directorio raíz](/assets/images/help/repository/pr-template-file-name.png)
    - Para que la plantilla de solicitud de incorporación de cambios esté visible en el directorio `docs` del repositorio, asigna el nombre `docs/pull_request_template.md` a dicha plantilla.
  ![Nueva plantilla de solicitud de incorporación de cambios en un directorio de documentos](/assets/images/help/repository/pr-template-file-name-docs.png)
    - Para almacenar el archivo en un directorio oculto, asigna el nombre `.github/pull_request_template.md` a la plantilla de solicitud de incorporación de cambios.
  ![Nueva plantilla de solicitud de incorporación de cambios en un directorio oculto](/assets/images/help/repository/pr-template-hidden-directory.png)
    - Para crear varias plantillas de solicitud de incorporación de cambios y usar el parámetro de consulta `template` para especificar una plantilla para rellenar el cuerpo de la solicitud de este tipo, escribe *.github/PULL_REQUEST_TEMPLATE/* y, después, el nombre de la plantilla de solicitud de incorporación de cambios. Por ejemplo, `.github/PULL_REQUEST_TEMPLATE/pull_request_template.md`. También puedes almacenar varias plantillas de solicitud de incorporación de cambios en un subdirectorio `PULL_REQUEST_TEMPLATE` dentro del directorio raíz o `docs/`. Para obtener más información, consulta "[Utilizar parámetros de consulta para crear una solicitud de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/using-query-parameters-to-create-a-pull-request)".
  ![Nueva plantilla de solicitud de incorporación de cambios múltiple en un directorio oculto](/assets/images/help/repository/pr-template-multiple-hidden-directory.png)
4. En el cuerpo del nuevo archivo, agrega tu plantilla de solicitud de extracción. Puede incluir:
    - Una [referencia a un problema relacionado](/articles/basic-writing-and-formatting-syntax/#referencing-issues-and-pull-requests) en el repositorio.
    - Una descripción de los cambios propuestos en la solicitud de extracción.
    - [@mentions](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams) de la persona o equipo responsable de revisar los cambios propuestos.
{% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} Las plantillas están disponibles para los colaboradores cuando están fusionadas mediante combinación dentro de la rama predeterminada del repositorio.
{% data reusables.files.propose_new_file %}

## Información adicional

- "[Acerca de las plantillas de incidencias y las solicitudes de incorporación de cambios](/articles/about-issue-and-pull-request-templates)"
- "[Acerca de la automatización para incidencias y solicitudes de incorporación de cambios con parámetros de consulta](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters)"
- "[Creación de una solicitud de incorporación de cambios](/articles/creating-a-pull-request)"
