---
title: Requerir políticas para proyectos en tu empresa
intro: 'Puedes requerir políticas para las {% data variables.projects.projects_v2_and_v1 %} dentro de las organizaciones de tu empresa o permitir que estas se configuren en cada organización.'
permissions: Enterprise owners can enforce policies for projects in an enterprise.
redirect_from:
  - /articles/enforcing-project-board-settings-for-organizations-in-your-business-account
  - /articles/enforcing-project-board-policies-for-organizations-in-your-enterprise-account
  - /articles/enforcing-project-board-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-project-board-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/enforcing-project-board-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/enforcing-project-board-policies-in-your-enterprise-account
  - /admin/policies/enforcing-policies-for-your-enterprise/enforcing-project-board-policies-in-your-enterprise
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Policies
  - Projects
shortTitle: Project board policies
ms.openlocfilehash: 2bb72b21094fadea8f584eb4749ed0cea69619ee
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109813'
---
## Acerca de las políticas para proyectos en tu empresa

Puedes requerir políticas para controlar cómo los miembros de la empresa administran {% data variables.projects.projects_v2_and_v1 %}, o bien puedes permitir que los propietarios de la organización administren políticas para {% data variables.projects.projects_v2_and_v1 %} en el nivel de organización. {% ifversion project-visibility-policy %}

Algunas políticas se aplican tanto a {% data variables.product.prodname_projects_v2 %}, a la nueva experiencia de proyectos y a {% data variables.product.prodname_projects_v1 %}, a la experiencia anterior, mientras que algunas solo se aplican a {% data variables.product.prodname_projects_v1 %}. Para más información de cada experiencia, consulta "[Acerca de {% data variables.product.prodname_projects_v2 %}](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)" y "[Acerca de{% data variables.product.prodname_projects_v1 %}](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)."
{% else %}Para más información, consulta "[Acerca de los planes de protecto](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)."{% endif %}

## Requerir una política para proyectos a nivel de organziazión

En todas las organizaciones que son propiedad de tu empresa, puedes habilitar o inhabilitar tableros de proyecto en toda la organización o permitir que los propietarios administren este parámetro a nivel de la organización.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.projects-tab %}
4. En "Proyectos de la organización", revisa la información sobre cómo modificar los parámetros. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. En "Proyectos de la organización", usa el menú desplegable y elige una política.
  ![Menú desplegable con opciones de directivas de paneles de proyecto de la organización](/assets/images/help/business-accounts/organization-projects-policy-drop-down.png)

{% ifversion project-visibility-policy %}
## Requerir una política para los cambios a la visibilidad de los proyectos

En todas las organizaciones que pertenecen a tu empresa, puedes habilitar o deshabilitar la capacidad de la gente con acceso de administrador a un proyecto para cambiar la visibilidad del proyecto, o bien puedes permitir que los propietarios administren la configuración en el nivel de organización.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.projects-tab %}
1. En "Permiso de cambio para visibilidad del proyecto", revisa la información sobre cómo modificar los parámetros. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
1. Selecciona el menú desplegable y, a continuación, haz clic en una política.

   ![Captura de pantalla del menú desplegable para configurar la política "Permiso de cambio de visibilidad del proyecto"](/assets/images/help/business-accounts/project-visibility-change-drop-down.png) {% endif %}

{% ifversion projects-v1 %}
## Requerir políticas para {% data variables.product.prodname_projects_v1 %}

Algunas políticas se aplican solo a {% data variables.product.prodname_projects_v1 %}.

### Requerir una política para proyectos de repositorios

En todas las organizaciones que pertenezcan a tu empresa, puedes habilitar o deshabilitar proyectos a nivel de los repositorios o permitir que los propietarios administren este parámetro a nivel de la organización.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.projects-tab %}
4. En "Proyectos de repositorios", revisa la información sobre cómo modificar los parámetros. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. En "Proyectos de repositorios", usa el menú desplegable y elige una política.

   ![Menú desplegable con las opciones de políticas de paneles de proyecto de repositorios](/assets/images/help/business-accounts/repository-projects-policy-drop-down.png) {% endif %}
