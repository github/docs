---
title: Limitar las interacciones en tu repositorio
intro: Puedes requerir temporalmente un periodo de actividad limitada para usuarios específicos en un repositorio público.
redirect_from:
  - /articles/limiting-interactions-with-your-repository
  - /articles/limiting-interactions-in-your-repository
  - /github/building-a-strong-community/limiting-interactions-in-your-repository
versions:
  fpt: '*'
  ghec: '*'
permissions: 'People with admin permissions to a repository, and organization moderators, can temporarily limit interactions in that repository.'
topics:
  - Community
shortTitle: Limitar las interacciones en un repositorio
---

## Acerca de los límites de interacción temporales

{% data reusables.community.interaction-limits-restrictions %}

{% data reusables.community.interaction-limits-duration %} Después de que pase el periodo de tu límite, los usuarios pueden reanudar sus actividades normales en tu repositorio.

{% data reusables.community.types-of-interaction-limits %}

También puedes habilitar las limitaciones de las actividades en todos los repositorios que le pertenezcan a tu cuenta personal o a una organización. Si se habilita un límite a lo largo de la organización o del usuario, no podrás limitar la actividad para los repositorios individuales que pertenezcan a la cuenta. Para obtener más información, consulta las secciones "[Limitar las interacciones para tu cuenta personal](/communities/moderating-comments-and-conversations/limiting-interactions-for-your-user-account)" y "[Limitar las interacciones en tu organización](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization)".

## Limitar las interacciones en tu repositorio

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. En la barra lateral, selecciona **{% octicon "comment-discussion" aria-label="The comment-discussion icon" %} Opciones de moderación** y luego haz clic en **Límites de interacción**.
{% data reusables.community.set-interaction-limit %}
  ![Opciones de límites de interacción temporarios](/assets/images/help/repository/temporary-interaction-limits-options.png)

## Leer más
- "[Informar abuso o spam](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)"
- "[Administrar el acceso de un individuo al repositorio de una organización](/articles/managing-an-individual-s-access-to-an-organization-repository)"
- "[Niveles de permiso para un repositorio de una cuenta personal](/articles/permission-levels-for-a-user-account-repository)"
- "[Roles de repositorio para una organización](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)"
- "[Administrar a los moderadores en tu organización](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-moderators-in-your-organization)"
