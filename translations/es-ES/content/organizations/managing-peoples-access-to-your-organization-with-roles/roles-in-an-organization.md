---
title: Roles en una organización
intro: 'Los propietarios de las organizaciones pueden asignar roles a los individuos y equipos, otorgándoles diferentes conjuntos de permisos en la organización.'
redirect_from:
  - /articles/permission-levels-for-an-organization-early-access-program
  - /articles/permission-levels-for-an-organization
  - /github/setting-up-and-managing-organizations-and-teams/permission-levels-for-an-organization
  - /organizations/managing-peoples-access-to-your-organization-with-roles/permission-levels-for-an-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Roles in an organization
ms.openlocfilehash: 960f6f701ad524220e9e79ada04fa9e4d30b8e9f
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109815'
---
## Acerca de los roles
{% data reusables.organizations.about-roles %}

Los roles a nivel de repositorio otorgan a los miembros de las organizaciones, colaboradores externos y equipos de personas niveles variables de acceso a dichos repositorios. Para más información, vea "[Roles de repositorio para una organización](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)".

Los roles a nivel de equipo son roles que otorgan permisos para administrar a un equipo. Puedes otorgar el rol de mantenedor de equipo a cualquier miembro individual de uno de ellos, lo cual les otorga cierto número de permisos administrativos sobre dicho equipo. Para más información, vea "[Asignación del rol de mantenedor de equipo a un miembro del equipo](/organizations/organizing-members-into-teams/assigning-the-team-maintainer-role-to-a-team-member)".

Los roles a nivel de organización son conjuntos de permisos que se pueden asignar a individuos o equipos para que administren una organización y los ajustes, equipos y repositorios en ella. Para obtener más información sobre todos los roles disponibles a nivel organizacional, vea "[Acerca de los roles de organización](#about-organization-roles)".

## Acerca de los roles en las organizaciones

Puedes asignar personas o equipos a diversos roles a nivel de una organización para controlar el acceso de estos a la misma y a sus recursos. Para obtener más detalles sobre los permisos individuales que se incluyen en cada rol, consulte "[Permisos para los roles organizacionales](#permissions-for-organization-roles)".

{% ifversion enterprise-owner-join-org %} Si tu organización es propiedad de una cuenta empresarial, los propietarios de la empresa pueden elegir unirse a la organización con cualquier rol. Para obtener más información, consulte "[Administración de su rol en una organización que pertenece a su empresa](/admin/user-management/managing-organizations-in-your-enterprise/managing-your-role-in-an-organization-owned-by-your-enterprise)".
{% endif %}

### Propietarios de la organización
Los propietarios de las organizaciones tienen acceso administrativo integral en tu organización. Este rol debe limitarse a dos personas, por lo mucho, en tu organización. Para obtener más información, consulte "[Mantenimiento de la continuidad de la propiedad para la organización](/organizations/managing-peoples-access-to-your-organization-with-roles/maintaining-ownership-continuity-for-your-organization)".

### Miembros de la organización
El rol no administrativo predeterminado para las personas en una organización es el miembro de la misma. Predeterminadamente, los miembros de las organizaciones tienen varios permisos, incluyendo la capacidad de crear repositorios y tableros de proyecto.

{% ifversion fpt or ghec %}
### Moderadores de la organización
Los moderadores son miembros de la organización que, además de sus permisos como miembros, pueden bloquear y desbloquear a colaboradores que no son miembros, establecer límites de interacción y ocultar comentarios en repositorios públicos que son propiedad de la organización. Para obtener más información, consulte "[Administración de moderadores en la organización](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-moderators-in-your-organization)".

### Gerentes de facturación
Los gerentes de facturación son usuarios que pueden administrar los ajustes de facturación de tu organización, tales como la información de pago. Esta es una opción útil si los miembros de tu organización normalmente no tienen acceso a los recursos de facturación. Para obtener más información, consulte "[Adición de un administrador de facturación a la organización](/organizations/managing-peoples-access-to-your-organization-with-roles/adding-a-billing-manager-to-your-organization)".

{% endif %}

{% ifversion security-managers %}
### Administradores de seguridad

{% data reusables.organizations.security-manager-beta-note %}

{% data reusables.organizations.about-security-managers %}

Si tu organización tiene un equipo de seguridad, puedes utilizar el rol de administrador de seguridad para otorgar a los miembros del equipo el menor acceso posible a la organización necesario. Para obtener más información, consulte "[Administración de los administradores de seguridad en la organización](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)".
{% endif %}
### {% data variables.product.prodname_github_app %} administadores
Predeterminadamente, solo los propietarios de la organización pueden administrar la configuración de las {% data variables.product.prodname_github_apps %} que pertenezcan a una organización. Para permitir que más usuarios administren las {% data variables.product.prodname_github_apps %} que le pertenecen a una organización, un propietario puede otorgarles permisos de administrador de {% data variables.product.prodname_github_app %}.

Cuando designas un usuario como administrador de {% data variables.product.prodname_github_app %} en tu organización, puedes otorgarle acceso para administrar las configuraciones de algunas o todas las {% data variables.product.prodname_github_apps %} que le pertenecen a la organización. Para más información, consulte:

- "[Adición de administradores de aplicaciones de GitHub en la organización](/articles/adding-github-app-managers-in-your-organization)"
- "[Eliminación de administradores de aplicaciones de GitHub de la organización](/articles/removing-github-app-managers-from-your-organization)"

### Colaboradores externos
Para mantener seguros los datos de su organización y, al mismo tiempo, permitir el acceso a los repositorios, puede agregar *colaboradores externos*. {% data reusables.organizations.outside_collaborators_description %}

## Permisos para los roles organizacionales

{% ifversion fpt %} Algunas de las características siguientes se limitan a las organizaciones que utilizan {% data variables.product.prodname_ghe_cloud %}. {% data reusables.enterprise.link-to-ghec-trial %} {% endif %}

{% ifversion fpt or ghec %}
<!-- Free/Pro/Team and GHEC versions have extra columns for Moderators and Billing managers-->

| Permiso organizacional | Propietarios | Miembros | Moderadores | Gerentes de facturación | Administradores de seguridad |
|:------------------------|:------:|:-------:|:----------:|:----------------:|:-----------------:|
| Crear repositorios (consulte "[Restricción de la creación de repositorios en la organización](/articles/restricting-repository-creation-in-your-organization)") | **X** | **X** | **X** |  | **X**  |
| Ver y editar la información de facturación | **X** |  |  | **X** |  |
| Invitar personas para que se unan a la organización | **X** |  |  |  |  |
| Editar y cancelar invitaciones para unirse a la organización | **X** |  |  |  |  |
| Eliminar miembros de la organización | **X** |  |  |  |  |
| Reinstalar antiguos miembros a la organización | **X** |  |  |  |  |
| Agregar o quitar personas de **todos los equipos** | **X** |  |  |  |  |
| Promover a miembros de la organización a *mantenedores del equipo* | **X** |  |  |  |  |
| Configurar asignaciones de revisión del código (consulte "[Administración de las asignaciones de revisión del código del equipo](/organizations/organizing-members-into-teams/managing-code-review-assignment-for-your-team)") | **X** |  |  |  |  |
| Configurar recordatorios programados (consulte "[Administración de recordatorios programados para solicitudes de incorporación de cambios](/github/setting-up-and-managing-organizations-and-teams/managing-scheduled-reminders-for-pull-requests)") | **X** |  |  |  |  |
| Agregar colaboradores a **todos los repositorios** | **X** |  |  |  |  |
| Acceder al registro de auditoría de la organización | **X** |  |  |  |  |
| Editar la página de perfil de la organización (consulte "[Acerca del perfil de la organización](/github/setting-up-and-managing-your-github-profile/customizing-your-profile/about-your-organizations-profile)") | **X** |  |  |  |  |{% ifversion ghec %}
| Comprobar los dominios de la organización (consulte "[Comprobación del dominio de la organización](/articles/verifying-your-organization-s-domain)") | **X** |  |  |  |  |
| Restringir las notificaciones por correo electrónico para los dominios verificados o aprobados (consulte "[Restricción de las notificaciones por correo electrónico para la organización](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)") | **X** |  |  |  |  |{% endif %}
| Eliminar **todos los equipos** | **X** |  |  |  |  |
| Eliminar la cuenta de la organización, incluidos todos los repositorios | **X** |  |  |  |  |
| Crear equipos (consulte "[Configuración de permisos de creación de equipos en la organización](/articles/setting-team-creation-permissions-in-your-organization)") | **X** | **X** | **X** |  | **X**  |
| [Mover equipos en la jerarquía de una organización](/articles/moving-a-team-in-your-organization-s-hierarchy) | **X** |  |  |  |  |
| Crear paneles de proyecto (consulte "[Permisos de panel de proyecto para una organización](/articles/project-board-permissions-for-an-organization)") | **X** | **X** | **X** |  | **X**  |
| Ver todos los miembros y equipos de la organización | **X** | **X** | **X** |  | **X**  |
| @mention cualquier equipo visible | **X** | **X** | **X** |  | **X**  |
| Puede ser *mantenedor de equipo* | **X** | **X** | **X** |  | **X** |{% ifversion ghec %}
| Ver información de la organización (consulte "[Visualización de información de la organización](/articles/viewing-insights-for-your-organization)") | **X** | **X** | **X** |  | **X**  |{% endif %}
| Ver y publicar debates de equipo públicos en **todos los equipos** (consulte "[Acerca de los debates de equipo](/organizations/collaborating-with-your-team/about-team-discussions)") | **X** | **X** | **X** |  | **X**  |
| Ver y publicar debates de equipo privados en **todos los equipos** (consulte "[Acerca de los debates de equipo](/organizations/collaborating-with-your-team/about-team-discussions)") | **X** |  |  |  |  |
| Editar y eliminar debates de equipo en **todos los equipos** (consulte "[Administración de comentarios negativos](/communities/moderating-comments-and-conversations/managing-disruptive-comments)") | **X** |  |  |  |  |
| Deshabilitar los debates de equipo para una organización (consulte "[Deshabilitación de los debates de equipo para la organización](/articles/disabling-team-discussions-for-your-organization)") | **X** |  |  |  |  |
| Ocultar comentarios sobre las confirmaciones grabables, las solicitudes de incorporación de cambios y las incidencias (consulte "[Administración de comentarios negativos](/communities/moderating-comments-and-conversations/managing-disruptive-comments/#hiding-a-comment)") | **X** | **X** | **X** |  | **X** |
| Ocultar comentarios sobre _todas_ las confirmaciones, las solicitudes de incorporación de cambios y las incidencias (consulte "[Administración de comentarios negativos](/communities/moderating-comments-and-conversations/managing-disruptive-comments/#hiding-a-comment)") | **X** |  | **X** |  | **X** |
| Bloquear y desbloquear a colaboradores que no son miembros (consulte "[Bloqueo de usuarios de la organización](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization)") | **X** |  | **X** |  |  |
| Limitar las interacciones de determinados usuarios en repositorios públicos (consulte "[Limitación de las interacciones en la organización](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization)") | **X** |  | **X** |  |  |{% ifversion ghec %}
| Administrar la visualización de la información de dependencia de la organización (consulte "[Cambio de la visibilidad de la información de dependencia de la organización](/articles/changing-the-visibility-of-your-organizations-dependency-insights)") | **X** |  |  |  |  |{% endif %}
| Establecer una imagen de perfil para el equipo en **todos los equipos** (consulte "[Establecimiento de la imagen de perfil del equipo](/articles/setting-your-team-s-profile-picture)") | **X** |  |  |  |  |
| Patrocinar cuentas y administrar los patrocinios de la organización (consulte "[Patrocinio de colaboradores de código abierto](/sponsors/sponsoring-open-source-contributors)") | **X** |  |  | **X** | **X**  |
| Administrar las actualizaciones de correo electrónico de las cuentas patrocinadas (consulte "[Administración de actualizaciones de las cuentas de los patrocinadores de la organización](/organizations/managing-organization-settings/managing-updates-from-accounts-your-organization-sponsors)") | **X** |  |  |  |  |
| Atribuir los patrocinios a otra organización (consulte "[Atribución de patrocinios a la organización](/sponsors/sponsoring-open-source-contributors/attributing-sponsorships-to-your-organization)" para obtener más información) | **X** |  |  |  |  |
| Administrar la publicación de sitios de {% data variables.product.prodname_pages %} desde los repositorios de la organización (consulte "[Administración de la publicación de sitios de {% data variables.product.prodname_pages %} para la organización](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)") | **X** |  |  |  |  |
| Administrar la configuración de seguridad y análisis (consulte "[Administración de la configuración de seguridad y análisis de la organización](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)") | **X** |  |  |  | **X** |
| Consultar la información general sobre seguridad de la organización (consulte "[Acerca de la información general sobre seguridad](/code-security/security-overview/about-the-security-overview)") | **X** |  |  |  | **X** |{% ifversion ghec %}
| Habilitar y aplicar el [inicio de sesión único de SAML](/articles/about-identity-and-access-management-with-saml-single-sign-on) | **X** |  |  |  |  |
| [Administrar el acceso de SAML de un usuario a la organización](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization) | **X** |  |  |  |  |
| Administrar las entidades de certificación SSH de una organización (consulte "[Administración de las entidades de certificación SSH de la organización](/articles/managing-your-organizations-ssh-certificate-authorities)") | **X** |  |  |  |  |{% endif %}
| Transferir repositorios | **X** |  |  |   |  |
| Comprar, instalar, administrar la facturación y cancelar aplicaciones {% data variables.product.prodname_marketplace %} | **X** |  |  |  |  |
| Enumerar aplicaciones en {% data variables.product.prodname_marketplace %} | **X** |  |  |  |  |
| Recibir [{% data variables.product.prodname_dependabot_alerts %} sobre las dependencias no seguras](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts) de todos los repositorios de una organización | **X** |  |  |  | **X** |
| Administrar las {% data variables.product.prodname_dependabot_security_updates %} (consulte ["Acerca de {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)") | **X** |  |  |  | **X** |
| [Administrar la directiva de bifurcación](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization) | **X** |  |  |  |  |
| [Limitar la actividad en los repositorios públicos de una organización](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization) | **X** |  |  |  |  |
| Extraer (leer) *todos los repositorios* de la organización | **X** |  |  |  | **X** |
| Insertar (escribir) y clonar (copiar) *todos los repositorios* de la organización | **X** |  |  |  |  |
| Convertir a miembros de la organización en [colaboradores externos](#outside-collaborators) | **X** |  |  |  |  |
| [Ver las personas que tienen acceso a un repositorio de la organización](/articles/viewing-people-with-access-to-your-repository) | **X** |  |  |  |  |{% ifversion ghec %}
| [Exportar una lista de personas con acceso a un repositorio de la organización](/articles/viewing-people-with-access-to-your-repository/#exporting-a-list-of-people-with-access-to-your-repository) | **X** |  |  |  |  |{% endif %}
| Administrar el nombre de la rama predeterminada (consulte "[Administración del nombre de la rama predeterminada para los repositorios de la organización](/organizations/managing-organization-settings/managing-the-default-branch-name-for-repositories-in-your-organization)") | **X** |  |  |  |  |
| Administrar etiquetas predeterminadas (consulte "[Administración de etiquetas predeterminadas para los repositorios de la organización](/articles/managing-default-labels-for-repositories-in-your-organization)") | **X** |  |  |  |  |{% ifversion ghec %}
| Habilitar la sincronización de equipos (consulte "[Administración de la sincronización de equipos para la organización](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)") | **X** |  |  |  |  |{% endif %}
| Administrar revisiones de solicitudes de incorporación de cambios en la organización (consulte "[Administración de revisiones de solicitudes de incorporación de cambios en la organización](/organizations/managing-organization-settings/managing-pull-request-reviews-in-your-organization)") | **X** |  |  |  |  |

{% elsif ghes or ghae %}
<!-- GHES 3.3+ and eventual GHAE release don't have the extra columns for Moderators and Billing managers. -->

| Acción de la organización | Propietarios | Miembros | Administradores de seguridad |
|:--------------------|:------:|:-------:|:-------:|
| Invitar personas para que se unan a la organización | **X** |  |  |
| Editar y cancelar invitaciones para unirse a la organización | **X** |  |  |
| Eliminar miembros de la organización | **X** | | |  |
| Reinstalar antiguos miembros a la organización | **X** | | |  |
| Agregar o quitar personas de **todos los equipos** | **X** |  |  |
| Promover a miembros de la organización a *mantenedores del equipo* | **X** |  |  |
| Configurar asignaciones de revisión del código (consulte "[Administración de las asignaciones de revisión del código del equipo](/organizations/organizing-members-into-teams/managing-code-review-assignment-for-your-team)") | **X** |  |  |
| Agregar colaboradores a **todos los repositorios** | **X** |  |  |
| Acceder al registro de auditoría de la organización | **X** |  |  |
| Editar la página de perfil de la organización (consulte "[Acerca del perfil de la organización](/github/setting-up-and-managing-your-github-profile/customizing-your-profile/about-your-organizations-profile)") | **X** |  |  |{% ifversion ghes %}
| Comprobar los dominios de la organización (consulte "[Comprobación del dominio de la organización](/articles/verifying-your-organization-s-domain)") | **X** |  |  |
| Restringir las notificaciones por correo electrónico para los dominios verificados o aprobados (consulte "[Restricción de las notificaciones por correo electrónico para la organización](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)") | **X** |  |  |{% endif %}
| Eliminar **todos los equipos** | **X** |  |  |
| Eliminar la cuenta de la organización, incluidos todos los repositorios | **X** |  |  |
| Crear equipos (consulte "[Configuración de permisos de creación de equipos en la organización](/articles/setting-team-creation-permissions-in-your-organization)") | **X** | **X** | **X**  |
| Ver todos los miembros y equipos de la organización | **X** | **X** | **X**  |
| @mention cualquier equipo visible | **X** | **X** | **X**  |
| Puede ser *mantenedor de equipo* | **X** | **X** | **X**  |
| Transferir repositorios | **X** | |  |
| Administrar la configuración de seguridad y análisis (consulte "[Administración de la configuración de seguridad y análisis de la organización](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)") | **X** | | **X** |{% ifversion ghes %}
| Consultar la información general sobre seguridad de la organización (consulte "[Acerca de la información general sobre seguridad](/code-security/security-overview/about-the-security-overview)") | **X** | | **X** |{% endif %}{% ifversion ghes %}
| Administrar las {% data variables.product.prodname_dependabot_security_updates %} (consulte ["Acerca de {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)") | **X** | | **X** |{% endif %}
| Administrar las entidades de certificación SSH de una organización (consulte "[Administración de las entidades de certificación SSH de la organización](/articles/managing-your-organizations-ssh-certificate-authorities)") | **X** |  |  |
| Crear paneles de proyecto (consulte "[Permisos de panel de proyecto para una organización](/articles/project-board-permissions-for-an-organization)") | **X** | **X** | **X** |
| Ver y publicar debates de equipo públicos en **todos los equipos** (consulte "[Acerca de los debates de equipo](/organizations/collaborating-with-your-team/about-team-discussions)") | **X** | **X** | **X**  |
| Ver y publicar debates de equipo privados en **todos los equipos** (consulte "[Acerca de los debates de equipo](/organizations/collaborating-with-your-team/about-team-discussions)") | **X** |  |  |
| Editar y eliminar debates de equipo en **todos los equipos** (para obtener más información, consulte "[Administración de comentarios negativos](/communities/moderating-comments-and-conversations/managing-disruptive-comments)") | **X** |  |  |  |
| Ocultar comentarios sobre las confirmaciones, las solicitudes de incorporación de cambios y las incidencias (consulte "[Administración de comentarios negativos](/communities/moderating-comments-and-conversations/managing-disruptive-comments/#hiding-a-comment)") | **X** | **X** | **X**  |
| Deshabilitar los debates de equipo para una organización (consulte "[Deshabilitación de los debates de equipo para la organización](/articles/disabling-team-discussions-for-your-organization)") | **X** |  |  |
| Establecer una imagen de perfil para el equipo en **todos los equipos** (consulte "[Establecimiento de la imagen de perfil del equipo](/articles/setting-your-team-s-profile-picture)") | **X** |  |  |{% ifversion ghes %}
| Administrar la publicación de sitios de {% data variables.product.prodname_pages %} desde los repositorios de la organización (consulte "[Administración de la publicación de sitios de {% data variables.product.prodname_pages %} para la organización](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)") | **X** | |  |{% endif %}
| [Mover equipos en la jerarquía de una organización](/articles/moving-a-team-in-your-organization-s-hierarchy) | **X** | | |
| Extraer (leer) *todos los repositorios* de la organización | **X** | | **X** |
| Insertar (escribir) y clonar (copiar) *todos los repositorios* de la organización | **X** | |  |
| Convertir a miembros de la organización en [colaboradores externos](#outside-collaborators) | **X** | |  |
| [Ver las personas que tienen acceso a un repositorio de la organización](/articles/viewing-people-with-access-to-your-repository) | **X** | |  |
| [Exportar una lista de personas con acceso a un repositorio de la organización](/articles/viewing-people-with-access-to-your-repository/#exporting-a-list-of-people-with-access-to-your-repository) | **X** | |  |
| Administrar etiquetas predeterminadas (consulte "[Administración de etiquetas predeterminadas para los repositorios de la organización](/articles/managing-default-labels-for-repositories-in-your-organization)") | **X** | |  |{% ifversion pull-request-approval-limit %}
| Administrar revisiones de solicitudes de incorporación de cambios en la organización (consulte "[Administración de revisiones de solicitudes de incorporación de cambios en la organización](/organizations/managing-organization-settings/managing-pull-request-reviews-in-your-organization)") | **X** |  | |  |{% endif %}
{% ifversion ghae %}| Administrar listas de direcciones IP permitidas (consulte "[Restricción del tráfico de red a la empresa](/admin/configuration/restricting-network-traffic-to-your-enterprise)") | **X** | |  |{% endif %}

{% else %}
<!-- GHES and GHAE older versions don't have columns for Moderators, Billing managers or Security managers. -->

| Acción de la organización | Propietarios | Miembros |
|:--------------------|:------:|:-------:|
| Invitar personas para que se unan a la organización | **X** |  |
| Editar y cancelar invitaciones para unirse a la organización | **X** |  |
| Eliminar miembros de la organización | **X** | | |
| Reinstalar antiguos miembros a la organización | **X** | | |
| Agregar o quitar personas de **todos los equipos** | **X** |  |  
| Promover a miembros de la organización a *mantenedores del equipo* | **X** |  |
| Configurar asignaciones de revisión del código (consulte "[Administración de la configuración de revisión del código del equipo](/organizations/organizing-members-into-teams/managing-code-review-settings-for-your-team)") | **X** |  |
| Agregar colaboradores a **todos los repositorios** | **X** |  |
| Acceder al registro de auditoría de la organización | **X** |  |
| Editar la página de perfil de la organización (consulte "[Acerca del perfil de la organización](/github/setting-up-and-managing-your-github-profile/customizing-your-profile/about-your-organizations-profile)") | **X** |  |  |{% ifversion ghes %}
| Comprobar los dominios de la organización (consulte "[Comprobación del dominio de la organización](/articles/verifying-your-organization-s-domain)") | **X** |  |
| Restringir las notificaciones por correo electrónico para los dominios verificados o aprobados (consulte "[Restricción de las notificaciones por correo electrónico para la organización](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)") | **X** |  |{% endif %}
| Eliminar **todos los equipos** | **X** |  |
| Eliminar la cuenta de la organización, incluidos todos los repositorios | **X** |  |
| Crear equipos (consulte "[Configuración de permisos de creación de equipos en la organización](/articles/setting-team-creation-permissions-in-your-organization)") | **X** | **X** |
| Ver todos los miembros y equipos de la organización | **X** | **X** |
| @mention cualquier equipo visible | **X** | **X** |
| Puede ser *mantenedor de equipo* | **X** | **X** |
| Transferir repositorios | **X** | |
| Administrar las entidades de certificación SSH de una organización (consulte "[Administración de las entidades de certificación SSH de la organización](/articles/managing-your-organizations-ssh-certificate-authorities)") | **X** |  |
| Crear paneles de proyecto (consulte "[Permisos de panel de proyecto para una organización](/articles/project-board-permissions-for-an-organization)") | **X** | **X** | |
| Ver y publicar debates de equipo públicos en **todos los equipos** (consulte "[Acerca de los debates de equipo](/organizations/collaborating-with-your-team/about-team-discussions)") | **X** | **X** |  |
| Ver y publicar debates de equipo privados en **todos los equipos** (consulte "[Acerca de los debates de equipo](/organizations/collaborating-with-your-team/about-team-discussions)") | **X** |  |  |
| Editar y eliminar debates de equipo en **todos los equipos** (para obtener más información, consulte "[Administración de comentarios negativos](/communities/moderating-comments-and-conversations/managing-disruptive-comments)") | **X** |  |  |
| Ocultar comentarios sobre las confirmaciones, las solicitudes de incorporación de cambios y las incidencias (consulte "[Administración de comentarios negativos](/communities/moderating-comments-and-conversations/managing-disruptive-comments/#hiding-a-comment)") | **X** | **X** | **X** |
| Deshabilitar los debates de equipo para una organización (consulte "[Deshabilitación de los debates de equipo para la organización](/articles/disabling-team-discussions-for-your-organization)") | **X** |  |  |
| Establecer una imagen de perfil para el equipo en **todos los equipos** (consulte "[Establecimiento de la imagen de perfil del equipo](/articles/setting-your-team-s-profile-picture)") | **X** |  |  |{% ifversion ghes %}
| Administrar la publicación de sitios de {% data variables.product.prodname_pages %} desde los repositorios de la organización (consulte "[Administración de la publicación de sitios de {% data variables.product.prodname_pages %} para la organización](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)") | **X** | |{% endif %}
| [Mover equipos en la jerarquía de una organización](/articles/moving-a-team-in-your-organization-s-hierarchy) | **X** | | |
| Extraer (leer), insertar (escribir) y clonar (copiar) *todos los repositorios* de la organización | **X** | |
| Convertir a miembros de la organización en [colaboradores externos](#outside-collaborators) | **X** | |
| [Ver las personas que tienen acceso a un repositorio de la organización](/articles/viewing-people-with-access-to-your-repository) | **X** | |
| [Exportar una lista de personas con acceso a un repositorio de la organización](/articles/viewing-people-with-access-to-your-repository/#exporting-a-list-of-people-with-access-to-your-repository) | **X** | |
| Administrar etiquetas predeterminadas (consulte "[Administración de etiquetas predeterminadas para los repositorios de la organización](/articles/managing-default-labels-for-repositories-in-your-organization)") | **X** | |
{% ifversion ghae %}| Administrar listas de direcciones IP permitidas (consulte "[Restricción del tráfico de red a la empresa](/admin/configuration/restricting-network-traffic-to-your-enterprise)") | **X** | |{% endif %}

{% endif %}

## Información adicional

- "[Roles de repositorio para una organización](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)"
- "[Permisos de panel de proyecto para una organización](/organizations/managing-access-to-your-organizations-project-boards/project-board-permissions-for-an-organization)"
