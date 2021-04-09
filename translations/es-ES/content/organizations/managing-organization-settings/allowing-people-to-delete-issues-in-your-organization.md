---
title: Permitir que personas eliminen propuestas en tu organización
intro: Los propietarios de la organización pueden permitir que determinadas personas eliminen propuestas en repositorios que pertenecen a tu organización.
redirect_from:
  - /articles/allowing-people-to-delete-issues-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/allowing-people-to-delete-issues-in-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - organizations
  - equipos
---

Por defecto, las propuestas no pueden eliminarse en los repositorios de una organización. El propietario de la organización debe habilitar esta característica para todos los repositorios de la organización en primer lugar.

Una vez habilitados, los propietarios de la organización y las personas con permisos de administración en un repositorio que es propiedad de la empresa pueden eliminar propuestas. Entre las personas con permisos de administración en un repositorio se incluyen los miembros de la organización y los colaboradores externos con privilegios de administración. Para obtener más información, consulta "[Niveles de permiso del repositorio para una organización](/articles/repository-permission-levels-for-an-organization/)" y "[Eliminar una propuesta"](/articles/deleting-an-issue)".

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.member-privileges %}
5. En "Issue deletion" (Eliminación de la propuesta), selecciona **Permitir que los miembros eliminen propuestas para esta organización**. ![Casilla de verificación para permitir que las personas eliminen propuestas](/assets/images/help/settings/issue-deletion.png)
6. Haz clic en **Save ** (guardar).
