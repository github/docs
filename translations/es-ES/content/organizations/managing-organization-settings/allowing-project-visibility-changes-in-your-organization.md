---
title: Cambios en la visibilidad del proyecto permitidos en la organización
intro: 'Los propietarios de la organización pueden permitir que los miembros con permisos de administrador ajusten la visibilidad de {% data variables.projects.projects_v2_and_v1 %} de su organización.'
versions:
  feature: classic-project-visibility-permissions-or-projects-v2
topics:
  - Organizations
  - Projects
shortTitle: Project visibility permissions
allowTitleToDifferFromFilename: true
permissions: 'Organization owners can allow {% data variables.projects.project_v2_and_v1 %} visibility changes for an organization.'
ms.openlocfilehash: 5f8963e8c03e2c0a62586964b6331ec7b3d945b5
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148110028'
---
## Acerca de los cambios de visibilidad de los proyectos

Puedes restringir quién puede cambiar la visibilidad de {% data variables.projects.projects_v2_and_v1 %} de la organización, por ejemplo, limitar los miembros que pueden cambiar {% data variables.projects.projects_v2_and_v1 %} de privado a público. 

También puedes limitar la capacidad de cambiar la visibilidad de {% data variables.projects.project_v2_and_v1 %} solo a los propietarios de la organización, o bien permitir que cualquiera con permisos de administración pueda cambiar la visibilidad.

{% ifversion project-visibility-policy %} Es posible que esta opción no esté disponible si un propietario de la empresa restringe los cambios de visibilidad para {% data variables.projects.projects_v2_and_v1 %} en el nivel empresarial. Para más información, consulta "[Requerir políticas para proyectos en tu empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-projects-in-your-enterprise)".
{% endif %}

## Permitir que los miembros cambien las visibilidades del proyecto

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. En la sección de "Código, planificación y automatización" de la barra lateral, haz clic en **{% octicon "table" aria-label="The table icon" %} Proyectos**.
1. Para permitir que los miembros ajusten la visibilidad del proyecto, selecciona **Permitir que los miembros cambien las visibilidades del proyecto para esta organización**.
  ![Captura de pantalla en la que se muestra la casilla para establecer los cambios de visibilidad](/assets/images/help/projects-v2/visibility-change-checkbox.png)
1. Haga clic en **Save**(Guardar).

## Información adicional

{% ifversion projects-v2 %}
- "[Administración de la visibilidad de {% data variables.projects.projects_v2 %}](/issues/planning-and-tracking-with-projects/managing-your-project/managing-visibility-of-your-projects)" {%- endif %}{%- ifversion projects-v1 %}
- "[Cambio de la visibilidad de {% data variables.product.prodname_project_v1 %}](/issues/organizing-your-work-with-project-boards/managing-project-boards/changing-project-board-visibility)" {% endif %}
