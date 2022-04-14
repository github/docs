---
title: Gestionar a los administradores de seguridad en tu organización
intro: Puedes otorgar a tu equipo de seguridad el menor tipo de acceso que necesiten en tu organización si asignas un equipo al rol de administrador de seguridad.
versions:
  fpt: '*'
  ghes: '>=3.3'
  feature: security-managers
topics:
  - Organizations
  - Teams
shortTitle: Rol de administrador de seguridad
permissions: Organization owners can assign the security manager role.
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

{% ifversion fpt %}
Puedes encontrar funcionalidades adicionales disponibles, incluyendo un resumen de seguridad de la organización, en las organizaciones que utilizan {% data variables.product.prodname_ghe_cloud %} con la {% data variables.product.prodname_advanced_security %}. Para obtener más información, consulta la [documentación de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization).
{% endif %}

Si un equipo tiene el rol de administrador de seguridad, las personas con acceso administrativo al equipo y a un repositorio específico pueden cambiar el nivel de acceso de dicho equipo al repositorio pero no pueden eliminar el acceso. Para obtener más información, consulta las secciones "[Administrar el acceso de los equipos aun repositorio organizacional](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository){% ifversion ghes %}".{% else %} y "[Administrar a los equipos y personas con acceso a tu repositorio](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository)".{% endif %}

  ![Administrar la IU de acceso al repositorio con administradores de seguridad](/assets/images/help/organizations/repo-access-security-managers.png)

## Asignar el rol de administrador de seguridad a un equipo en tu organización
Puedes asignar el rol de administrador de seguridad a un máximo de 10 equipos en tu organización.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security-and-analysis %}
1. Debajo de **administradores de seguridad**, busca y selecciona el equipo al cual otorgarle el rol. Cada equipo que selecciones aparecerá en una lista debajo de la barra de búsqueda. ![Agregar a un administrador de seguridad](/assets/images/help/organizations/add-security-managers.png)
## Eliminar el rol de administrador de seguridad de un equipo de tu organización

{% warning %}

**Advertencia:** El eliminar el rol de administrador de seguridad de un equipo también eliminará la capacidad de dicho equipo para administrar las alertas de seguridad y los ajustes en toda la organización, pero el equipo retendrá el acceso de lectura a los repositorios en donde lo tuviera cuando este se haya asignado. Debes eliminar manualmente cualquier acceso de lectura no deseado. Para obtener más información, consulta la sección "[Administrar el acceso de un equipo a un repositorio organizacional](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository#removing-a-teams-access-to-a-repository)."

{% endwarning %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security-and-analysis %}
1. Debajo de **Administradores de seguridad**, a la derecha del equipo que quieras eliminar como administrador de seguridad, haz clic en {% octicon "x" aria-label="The X icon" %}. ![Eliminar a un administrador de seguridad](/assets/images/help/organizations/remove-security-managers.png)
