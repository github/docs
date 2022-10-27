---
title: 'Administración de la visibilidad de las instancias de {% data variables.projects.projects_v2 %}'
shortTitle: 'Managing {% data variables.projects.project_v2 %} visibility'
intro: 'Obtén información sobre cómo establecer {% data variables.projects.project_v2 %} en visibilidad privada o pública.'
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/managing-the-visibility-of-your-projects
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
permissions: Organization owners can manage the visibility of project boards in their organization. Organization owners can also allow collaborators with admin permissions to manage project visibility. Visibility of user projects can be managed by the owner of the project and collaborators with admin permissions.
ms.openlocfilehash: fbe4f0943010129b14ace21f6071b99e1160053b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148110140'
---
## Acerca de la visibilidad de los proyectos

Los proyectos pueden ser públicos o privados. En el caso de los proyectos públicos, toda persona con acceso a internet puede verlos. Para el caso de los proyectos privados, solo podrán verlos los usuarios a los que se les otorgó por lo menos acceso de lectura.

Solo se afecta la visibilidad del proyecto; para ver un elemento en el proyecto, alguien debe tener los permisos requeridos para el repositorio al cual pertenece este. Si tu proyecto incluye elementos de un repositorio privado, las personas que no sean colaboradores en el repositorio no podrán ver elementos de este.

![Proyecto con un elemento oculto](/assets/images/help/projects/hidden-items.png)

Los administradores de proyectos y los propietarios de la organización pueden controlar la visibilidad del proyecto. Los propietarios de la organización{% ifversion project-visibility-policy %} y los propietarios de empresa{% endif %} pueden restringir la capacidad de cambiar la visibilidad del proyecto solo a los propietarios de la organización.

En proyectos públicos y privados, las conclusiones solo son visibles para los usuarios con permisos de escritura para el proyecto.

En los proyectos privados que pertenecen a las organizaciones, los avatares de los usuarios que actualmente hacen actualizaciones al mismo se muestran en su IU.

Los administradores de proyecto también pueden administrar el acceso administrativo y de escritura al mismo, así como controlar el acceso para los usuarios individuales. Para más información, consulta "[Administración del acceso a los proyectos](/issues/planning-and-tracking-with-projects/managing-your-project/managing-access-to-your-projects)".

## Cambiar la visibilidad de proyecto

{% data reusables.projects.project-settings %}
1. Junto a **Visibilidad** en "Zona de peligro", selecciona **Privado** o **Público**.
   ![Captura de pantalla en la que se muestran los controles de visibilidad](/assets/images/help/projects-v2/visibility.png)

## Información adicional

- [Cambios en la visibilidad del proyecto permitidos en la organización](/organizations/managing-organization-settings/allowing-project-visibility-changes-in-your-organization)
