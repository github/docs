---
title: Migración de un proyecto a Proyectos (versión beta)
intro: Puedes migrar tus proyectos de la experiencia de proyectos antigua a Proyectos (versión beta).
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 2
versions:
  fpt: '*'
  ghec: '*'
topics:
- Projects
- Organizations
ms.openlocfilehash: 9361f3f28d3d365ecbb6053e908644cc8f34f1d0
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 07/13/2022
ms.locfileid: "147080627"
---
{% note %}

**Notas:**

- Proyectos (versión beta) se encuentra actualmente en versión beta pública y está sujeta a cambios.
- Si el proyecto que vas a migrar contiene más de 1200 elementos, se dará prioridad a las incidencias abiertas seguidas de las solicitudes de incorporación de cambios abiertas y, luego, las notas. El espacio restante se usará para las incidencias cerradas, las solicitudes de incorporación de cambios combinadas y las solicitudes de incorporación de cambios cerradas. Los elementos que no se pueden migrar debido a este límite se moverán al archivo. Si se alcanza el límite de archivo de 10 000 elementos, no se migrarán más elementos.
- Las tarjetas de notas se convierten en borradores de incidencias y el contenido se guarda en el cuerpo del borrador. Si parece que falta información, haz que los campos ocultos sean visibles. Para más información, consulta "[Mostrar y ocultar](/issues/trying-out-the-new-projects-experience/customizing-your-project-views#showing-and-hiding-fields)".
- No se migrará la automatización.
- No se migrarán la evaluación de prioridades, el archivo ni la actividad.
- Después de la migración, el proyecto migrado nuevo y el proyecto anterior no seguirán sincronizados.

{% endnote %}

## <a name="about-project-migration"></a>Acerca de la migración de proyectos

Puedes migrar los paneles del proyecto a la experiencia de proyectos (versión beta) nueva y experimentar con tablas, varias vistas, opciones de automatización nuevas y tipos de campo eficaces. Para más información, vea "[Acerca de los proyectos (beta)](/issues/trying-out-the-new-projects-experience/about-projects)".

## <a name="migrating-an-organization-project-board"></a>Migración de un panel de proyecto de organización

{% data reusables.projects.enable-migration %} {% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.organization-wide-project %}
1. A la izquierda, haz clic en **Proyectos (clásico)** .
  ![Captura de pantalla en la que se muestra la opción de menú Proyectos (clásico)}](/assets/images/help/issues/projects-classic-org.png) {% data reusables.projects.migrate-project-steps %}

## <a name="migrating-a-user-project-board"></a>Migración de un panel de proyecto de usuario

{% data reusables.projects.enable-migration %} {% data reusables.profile.access_profile %}
1. En la parte superior de la página de perfil, en la navegación principal, haga clic en {% octicon "project" aria-label="The project board icon" %} **Proyectos**.
![Pestaña Proyecto](/assets/images/help/projects/user-projects-tab.png)
1. Encima de la lista de proyectos, haz clic en **Proyectos (clásico)** .
  ![Captura de pantalla en la que se muestra la opción de menú Proyectos (clásico)}](/assets/images/help/issues/projects-classic-user.png) {% data reusables.projects.migrate-project-steps %}

## <a name="migrating-a-repository-project-board"></a>Migración de un panel de proyecto de repositorio

{% note %}

**Nota:** Proyectos (versión beta) no admite proyectos en el nivel de repositorio. Cuando migras un panel de proyecto de repositorio, se migrará a la cuenta de organización o a la cuenta personal propietaria del proyecto de repositorio y el proyecto migrado se anclará al repositorio original.

{% endnote %}

{% data reusables.projects.enable-migration %} {% data reusables.repositories.navigate-to-repo %}
1. En el nombre del repositorio, haga clic en {% octicon "project" aria-label="The project board icon" %} **Proyectos**.
![Pestaña Proyecto](/assets/images/help/projects/repo-tabs-projects.png)
1. Haz clic en **Proyectos (clásico)** .
  ![Captura de pantalla en la que se muestra la opción de menú Proyectos (clásico)}](/assets/images/help/issues/projects-classic-org.png) {% data reusables.projects.migrate-project-steps %}
