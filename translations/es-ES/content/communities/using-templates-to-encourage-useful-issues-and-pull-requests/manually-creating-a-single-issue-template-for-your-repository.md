---
title: Crear de forma manual una plantilla de propuesta para tu repositorio
intro: 'Cuando agregas una plantilla de propuesta creada de forma manual a tu repositorio, los colaboradores del proyecto verán automáticamente los contenidos de la plantilla en el cuerpo de la propuesta.'
redirect_from:
  - /articles/creating-an-issue-template-for-your-repository
  - /articles/manually-creating-a-single-issue-template-for-your-repository
  - /github/building-a-strong-community/manually-creating-a-single-issue-template-for-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Create an issue template
ms.openlocfilehash: 0d10da9cc3be128744a7b0465c016d1c6346b6f3
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145092336'
---
{% data reusables.repositories.legacy-issue-template-tip %}

Puede crear un subdirectorio de *ISSUE_TEMPLATE/* en cualquiera de las carpetas admitidas para incluir múltiples plantillas de incidencia y usar el parámetro de consulta `template` para especificar la plantilla que rellenará el cuerpo de la incidencia. Para más información, vea "[Acerca de la automatización para incidencias y solicitudes de incorporación de cambios con parámetros de consulta](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters)".

Puede añadir texto preliminar de YAML a cada plantilla de reporte de problemas para pre-llenar el título del mismo, añadir etiquetas y personal asignado automáticamente, y asignar un nombre y descripción que se mostrará en el selector de la misma, el cual verán las personas cuando se cree un nuevo reporte de problemas en su repositorio.

Aquí hay un ejemplo de texto preliminar de YAML.

```yaml
---
name: Tracking issue
about: Use this template for tracking new features.
title: "[DATE]: [FEATURE NAME]"
labels: tracking issue, needs triage
assignees: octocat
---
```
{% note %}

**Nota:** Si un valor del texto preliminar incluye algún carácter reservado de YAML como `:`, tendrá que incluir ese valor entre comillas. Por ejemplo, `":bug: Bug"` o `":new: triage needed, :bug: bug"`.

{% endnote %}

{% ifversion fpt or ghec %}

{% data reusables.repositories.valid-community-issues %}

{% endif %}

{% ifversion fpt or ghes or ghec %}

{% data reusables.repositories.default-issue-templates %}

{% endif %}

## Agregar una plantilla de propuesta

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. En el campo para el nombre del archivo:
    -  Para que la plantilla de incidencia sea visible en el directorio raíz del repositorio, escriba el nombre de la *plantilla_de_incidencia*. Por ejemplo, `issue_template.md`.
  ![Nombre de la nueva plantilla de incidencia en un directorio raíz](/assets/images/help/repository/issue-template-file-name.png)
    - Para que la plantilla de incidencia sea visible en el directorio `docs` del repositorio, escriba *docs/* seguido del nombre de la *plantilla_de_incidencia*. Por ejemplo, `docs/issue_template.md`, ![Nueva plantilla de incidencia en el directorio docs](/assets/images/help/repository/issue-template-file-name-docs.png)
    - Para almacenar el archivo en un directorio oculto, escriba *.github/* seguido del nombre de la *plantilla_de_incidencia*. Por ejemplo, `.github/issue_template.md`.
  ![Nueva plantilla de incidencia en un directorio oculto](/assets/images/help/repository/issue-template-hidden-directory.png)
    - Para crear varias plantillas de incidencia y usar el parámetro de consulta `template` a fin de especificar una plantilla para rellenar el cuerpo de la incidencia, escriba *.github/PLANTILLA_DE_INCIDENCIA/* y después el nombre de la plantilla de incidencia. Por ejemplo, `.github/ISSUE_TEMPLATE/issue_template.md`. También puede almacenar varias plantillas de incidencia en un subdirectorio `ISSUE_TEMPLATE` dentro de los directorios raíz o `docs/`. Para más información, vea "[Acerca de la automatización para incidencias y solicitudes de incorporación de cambios con parámetros de consulta](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters)".
  ![Nueva plantilla de varias incidencias en un directorio oculto](/assets/images/help/repository/issue-template-multiple-hidden-directory.png)
4. En el cuerpo del nuevo archivo, agrega tu plantilla de propuesta. Puede incluir:
    - Texto preliminar de YAML
    - Comportamiento esperado y comportamiento real
    - Pasos para reproducir el problema
    - Especificaciones como la versión del proyecto, el sistema operativo o el hardware {% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} Las plantillas están disponibles para los colaboradores cuando se combinan dentro de la rama predeterminada del repositorio.
{% data reusables.files.propose_new_file %}

## Información adicional

- "[Acerca de las plantillas de incidencias y las solicitudes de incorporación de cambios](/articles/about-issue-and-pull-request-templates)"
- "[Configuración de las plantillas de incidencia para el repositorio](/articles/configuring-issue-templates-for-your-repository)"
- "[Acerca de la automatización para incidencias y solicitudes de incorporación de cambios con parámetros de consulta](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters)"
- "[Creación de una incidencia](/articles/creating-an-issue)"
