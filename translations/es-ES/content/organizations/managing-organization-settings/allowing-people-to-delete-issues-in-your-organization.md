---
title: Permitir que personas eliminen propuestas en tu organización
intro: Los propietarios de la organización pueden permitir que determinadas personas eliminen propuestas en repositorios que pertenecen a tu organización.
redirect_from:
  - /articles/allowing-people-to-delete-issues-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/allowing-people-to-delete-issues-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Permitir el borrado de propuestas
---

Por defecto, las propuestas no pueden eliminarse en los repositorios de una organización. El propietario de la organización debe habilitar esta característica para todos los repositorios de la organización en primer lugar.

Once enabled, organization owners and people with admin access in an organization-owned repository can delete issues. People with admin access in a repository include organization members and outside collaborators who were given admin access. For more information, see "[Repository roles for an organization](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)" and "[Deleting an issue](/articles/deleting-an-issue)."

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}
5. En "Issue deletion" (Eliminación de la propuesta), selecciona **Permitir que los miembros eliminen propuestas para esta organización**. ![Casilla de verificación para permitir que las personas eliminen propuestas](/assets/images/help/settings/issue-deletion.png)
6. Haz clic en **Save ** (guardar).
