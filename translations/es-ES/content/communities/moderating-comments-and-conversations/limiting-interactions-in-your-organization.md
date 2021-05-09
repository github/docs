---
title: Limitar las interacciones en tu organización
intro: Puedes requerir temporalmente un periodo de actividad limitada para usuarios específicos en todos los repositorios públicos que pertenezcan a tu organización.
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/limiting-interactions-in-your-organization
  - /articles/limiting-interactions-in-your-organization
  - /github/building-a-strong-community/limiting-interactions-in-your-organization
versions:
  free-pro-team: '*'
permissions: Organization owners can limit interactions in an organization.
topics:
  - Community
---

### Acerca de los límites de interacción temporales

El limitar las interacciones en tu organización habilita los límites de interacción temporal para todos los repositorios públicos que pertenezcan a la organización. {% data reusables.community.interaction-limits-restrictions %}

{% data reusables.community.interaction-limits-duration %} Después de que pase el periodo de límite, los usuarios pueden reanudar sus actividades normales en los repositorios públicos de tu organización.

{% data reusables.community.types-of-interaction-limits %}

Los miembros de la organización no se verán afectados por ninguno de los tipos de límites.

Cuando habilitas limitaciones de actividad en toda la organización, no puedes habilitar o inhabilitar límites de interacción en los repositorios individuales. Para obtener más información sobre limitar la actividad de un repositorio individual, consulta la sección "[Limitr las interacciones en tu repositorio](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)".

Los propietarios de la organización también pueden bloquear a los usuarios por un periodo específico. Después de que expira el bloqueo, el usuario se desbloquea de manera automática. Para obtener más información, consulta "[Bloquear un usuario de tu organización](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization)".

### Limitar las interacciones en tu organización

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
1. Enla barra lateral de configuración de la organización, da clic en **Configuración de moderación**. !["Configuración de moderación" en la barra lateral de configuración de la organización](/assets/images/help/organizations/org-settings-moderation-settings.png)
1. Debajo de "Configuración de moderación", da clic en **Límites de interacción**. !["Límites de interacción" en la barra lateral de configuración de la organización](/assets/images/help/organizations/org-settings-interaction-limits.png)
{% data reusables.community.set-interaction-limit %}
  ![Opciones de límites de interacción temporarios](/assets/images/help/organizations/organization-temporary-interaction-limits-options.png)

### Leer más
- "[Informar abuso o spam](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)"
- "[Administrar el acceso de un individuo al repositorio de una organización](/articles/managing-an-individual-s-access-to-an-organization-repository)"
- "[Niveles de permiso para el repositorio de una cuenta de usuario](/articles/permission-levels-for-a-user-account-repository)"
- "[Niveles de permiso del repositorio para una organización](/articles/repository-permission-levels-for-an-organization)"
