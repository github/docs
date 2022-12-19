---
title: 'Migración desde {% data variables.product.prodname_projects_v1 %}'
intro: 'Puedes migrar las instancias de {% data variables.projects.projects_v1_board %} a la nueva experiencia de {% data variables.product.prodname_projects_v2 %}.'
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/migrating-your-project
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
ms.openlocfilehash: e6db4fd8c6587f413ee0e6832dbae93bbf281573
ms.sourcegitcommit: 9bf175b190674416ad4e11b5c567409f74c00ad2
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/23/2022
ms.locfileid: '148181225'
---
{% note %}

**Notas:**

- Si el proyecto que vas a migrar contiene más de {% data variables.projects.item_limit %} elementos, se dará prioridad a las incidencias abiertas seguidas de las solicitudes de incorporación de cambios abiertas y, luego, las notas. El espacio restante se usará para las incidencias cerradas, las solicitudes de incorporación de cambios combinadas y las solicitudes de incorporación de cambios cerradas. Los elementos que no se pueden migrar debido a este límite se moverán al archivo. Si se alcanza el límite de archivo de {% data variables.projects.archived_item_limit %} elementos, no se migrarán más elementos.
- Las tarjetas de notas se convierten en borradores de incidencias y el contenido se guarda en el cuerpo del borrador. Si parece que falta información, haz que los campos ocultos sean visibles. Para más información, consulta "[Mostrar y ocultar](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view#showing-and-hiding-fields)".
- No se migrará la automatización.
- No se migrarán la evaluación de prioridades, el archivo ni la actividad.
- Después de la migración, el proyecto migrado nuevo y el proyecto anterior no seguirán sincronizados.

{% endnote %}

## Acerca de la migración de proyectos

Puedes migrar los paneles de proyecto a la nueva experiencia de {% data variables.product.prodname_projects_v2 %} y probar tablas, varias vistas, opciones de automatización nuevas y tipos de campo eficaces. Para más información, consulta "[Acerca de los proyectos](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)".

## Migración de un panel de proyecto de organización

{% data reusables.projects.enable-migration %} {% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.organization-wide-project %}
1. A la izquierda, haz clic en **Proyectos (clásico)** .
  ![Captura de pantalla en la que se muestra la opción de menú Proyectos (clásico)}](/assets/images/help/issues/projects-classic-org.png) {% data reusables.projects.migrate-project-steps %}

## Migración de un panel de proyecto de usuario

{% data reusables.projects.enable-migration %} {% data reusables.profile.access_profile %}
1. En la parte superior de la página de perfil, en la navegación principal, haz clic en {% octicon "table" aria-label="The project board icon" %} **Proyectos**.
  ![Captura de pantalla en la que se muestra la pestaña "Proyectos"](/assets/images/help/projects-v2/tab-projects.png)
1. Encima de la lista de proyectos, haz clic en **Proyectos (clásico)** .
  ![Captura de pantalla en la que se muestra la opción de menú Proyectos (clásico)}](/assets/images/help/issues/projects-classic-user.png) {% data reusables.projects.migrate-project-steps %}

## Migración de un panel de proyecto de repositorio

{% note %}

**Nota:** {% data variables.projects.projects_v2_caps %} no admite proyectos de nivel de repositorio. Cuando migras un panel de proyecto de repositorio, se migrará a la cuenta de organización o a la cuenta personal propietaria del proyecto de repositorio y el proyecto migrado se anclará al repositorio original.

{% endnote %}

{% data reusables.projects.enable-migration %} {% data reusables.repositories.navigate-to-repo %}
1. En el nombre del repositorio, haz clic en {% octicon "table" aria-label="The project board icon" %} **Proyectos**.
![Pestaña Proyecto](/assets/images/help/projects-v2/repo-tabs-projects.png)
1. Haz clic en **Proyectos (clásico)** .
  ![Captura de pantalla en la que se muestra la opción de menú Proyectos (clásico)}](/assets/images/help/issues/projects-classic-org.png) {% data reusables.projects.migrate-project-steps %}
