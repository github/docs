---
title: Gestionar a los administradores de seguridad en tu organización
intro: Puedes otorgar a tu equipo de seguridad el menor tipo de acceso que necesiten en tu organización si asignas un equipo al rol de administrador de seguridad.
versions:
  feature: security-managers
topics:
  - Organizations
  - Teams
shortTitle: Security manager role
permissions: Organization owners can assign the security manager role.
ms.openlocfilehash: c29dd20a123ccb20a32d40896064e11d59643bd9
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145069630'
---
{% data reusables.organizations.security-manager-beta-note %}

{% data reusables.organizations.about-security-managers %}

## Permisos para el rol de administrador de seguridad

Los miembros de un equipo que tengan el rol de administrador de seguridad solo tienen los permisos requeridos para administrar la seguridad de la organización efectivamente.

- Acceso de lectura en todos los repositorios de la organización, adicionalmente a cualquier acceso existente a los repositorios
- Acceso de escritura en todas las alertas de seguridad de la organización {% ifversion not fpt %}
- Acceso al resumen de seguridad de la organización {% endif %}
- La capacidad de configurar los ajustes de seguridad a nivel organizacional{% ifversion not fpt %}, incluyendo la capacidad de habilitar o inhabilitar la {% data variables.product.prodname_GH_advanced_security %}{% endif %}
- La capacidad de configurar los ajustes de seguridad a nivel de repositorio{% ifversion not fpt %}, incluyendo la capacidad de habilitar o inhabilitar la {% data variables.product.prodname_GH_advanced_security %}{% endif %}

{% ifversion fpt %} Hay funcionalidades adicionales disponibles, incluida la información general de seguridad de la organización, para las organizaciones que usan {% data variables.product.prodname_ghe_cloud %} con {% data variables.product.prodname_advanced_security %}. Para obtener más información, vea la [documentación de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization).
{% endif %}

Si un equipo tiene el rol de administrador de seguridad, las personas con acceso administrativo al equipo y a un repositorio específico pueden cambiar el nivel de acceso de dicho equipo al repositorio pero no pueden eliminar el acceso. Para obtener más información, consulta "[Administración del acceso de equipo a un repositorio de la organización](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository){% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %}" y "[Administración de equipos y personas con acceso al repositorio](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository)".{% else %}."{% endif %}

  ![Administrar la IU de acceso al repositorio con administradores de seguridad](/assets/images/help/organizations/repo-access-security-managers.png)

## Asignar el rol de administrador de seguridad a un equipo en tu organización
Puedes asignar el rol de administrador de seguridad a un máximo de 10 equipos en tu organización.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security-and-analysis %}
1. En **Security managers** (Administradores de seguridad), busque y seleccione el equipo al que quiere asignar el rol. Cada equipo que selecciones aparecerá en una lista debajo de la barra de búsqueda. 
  ![Adición de un administrador de seguridad](/assets/images/help/organizations/add-security-managers.png)
## Eliminar el rol de administrador de seguridad de un equipo de tu organización

{% warning %}

**Advertencia:** Al quitar el rol de administrador de seguridad de un equipo, se quitará también la capacidad del equipo para administrar las alertas y la configuración de seguridad en toda la organización. No obstante, el equipo mantendrá el acceso de lectura a los repositorios a los que se le concedió cuando se asignó el rol. Debes eliminar manualmente cualquier acceso de lectura no deseado. Para obtener más información, consulte "[Administración del acceso de equipo a un repositorio de la organización](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository#removing-a-teams-access-to-a-repository)".

{% endwarning %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security-and-analysis %}
1. En **Security managers** (Administradores de seguridad), a la derecha del equipo que quiere quitar como administrador de seguridad, haga clic en {% octicon "x" aria-label="The X icon" %}.
  ![Eliminación del rol de administrador de seguridad](/assets/images/help/organizations/remove-security-managers.png)
