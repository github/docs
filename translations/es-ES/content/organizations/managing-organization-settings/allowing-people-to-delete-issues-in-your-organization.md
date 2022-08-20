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

Una vez habilitada, los propietarios de la organización y las personas con acceso administrativo a un repositorio que pertenezca a la organización podrán borrar las propuestas. Entre las personas con acceso administrativo en un repositorio se incluyen los miembros de la organización y colaboradores externos que obtuvieron acceso administrativo. Para obtener más información, consulte la sección "[Roles de repositorio para una organización](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)" y "[Borrar una propuesta](/articles/deleting-an-issue)".

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}
5. En "Issue deletion" (Eliminación de la propuesta), selecciona **Permitir que los miembros eliminen propuestas para esta organización**. ![Casilla de verificación para permitir que las personas eliminen propuestas](/assets/images/help/settings/issue-deletion.png)
6. Haz clic en **Save ** (guardar).
