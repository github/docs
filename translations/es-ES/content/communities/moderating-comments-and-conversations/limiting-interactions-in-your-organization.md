---
title: Limitar las interacciones en tu organización
intro: Puedes requerir temporalmente un periodo de actividad limitada para usuarios específicos en todos los repositorios públicos que pertenezcan a tu organización.
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/limiting-interactions-in-your-organization
  - /articles/limiting-interactions-in-your-organization
  - /github/building-a-strong-community/limiting-interactions-in-your-organization
versions:
  fpt: '*'
  ghec: '*'
permissions: Organization owners and moderators can limit interactions in an organization.
topics:
  - Community
shortTitle: Limitar las interacciones en org
---

## Acerca de los límites de interacción temporales

El limitar las interacciones en tu organización habilita los límites de interacción temporal para todos los repositorios públicos que pertenezcan a la organización. {% data reusables.community.interaction-limits-restrictions %}

{% data reusables.community.interaction-limits-duration %} Después de que pase el periodo de límite, los usuarios pueden reanudar sus actividades normales en los repositorios públicos de tu organización.

{% data reusables.community.types-of-interaction-limits %}

Los miembros de la organización no se verán afectados por ninguno de los tipos de límites.

Cuando habilitas limitaciones de actividad en toda la organización, no puedes habilitar o inhabilitar límites de interacción en los repositorios individuales. Para obtener más información sobre limitar la actividad de un repositorio individual, consulta la sección "[Limitr las interacciones en tu repositorio](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)".

Los propietarios y moderadores de las organizaciones también pueden bloquear a los usuarios durante un periodo de tiempo específico. Después de que expira el bloqueo, el usuario se desbloquea de manera automática. Para obtener más información, consulta "[Bloquear un usuario de tu organización](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization)".

## Limitar las interacciones en tu organización


{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. _Para los propietarios de las organizaciones:_ En la sección de "Acceso" de la barra lateral, selecciona **{% octicon "report" aria-label="The report icon" %} Moderación** y luego haz clic en **Limites de interación**.

   _Para los moderadores de las organizaciones:_ En la barra lateral, haz clic en **Límites de interacción**.

{% data reusables.community.set-interaction-limit %}
  ![Opciones de límites de interacción temporarios](/assets/images/help/organizations/organization-temporary-interaction-limits-options.png)

## Leer más
- "[Informar abuso o spam](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)"
- "[Administrar el acceso de un individuo al repositorio de una organización](/articles/managing-an-individual-s-access-to-an-organization-repository)"
- "[Niveles de permiso para un repositorio de una cuenta personal](/articles/permission-levels-for-a-user-account-repository)"
- "[Roles de repositorio para una organización](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)"
- "[Administrar a los moderadores en tu organización](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-moderators-in-your-organization)"
