---
title: Administrar un acceso individual a un tablero de proyecto de una organización
intro: 'Como propietario de la organización o administrador de un tablero de proyecto, puedes administrar al acceso de un miembro individual a un tablero de proyecto propiedad de tu organización.'
redirect_from:
  - /articles/managing-an-individual-s-access-to-an-organization-project-board
  - /articles/managing-an-individuals-access-to-an-organization-project-board
  - /github/setting-up-and-managing-organizations-and-teams/managing-an-individuals-access-to-an-organization-project-board
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---
{% note %}

**Nota:** {% data reusables.project-management.cascading-permissions %} Para obtener más información, consulta "[Permisos de tablero de proyecto para una organización](/articles/project-board-permissions-for-an-organization)."

{% endnote %}

### Otorgarle acceso a un miembro de la organización a un tablero de proyecto

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.organization-wide-project %}
{% data reusables.project-management.select-project %}
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
{% data reusables.project-management.collaborator-option %}
9. Debajo de "Search by username, full name or email address" (Buscar por nombre de usuario, nombre completo o dirección de correo electrónico), escribe el nombre, el nombre de usuario o el correo electrónico del colaborador {% data variables.product.prodname_dotcom %}. ![La sección Collaborators (Colaboradores) con el nombre de usuario de Octocat ingresado en el campo de búsqueda](/assets/images/help/projects/org-project-collaborators-find-name.png)
{% data reusables.project-management.add-collaborator %}
{% data reusables.project-management.collaborator-permissions %}

### Cambiar el acceso de un miembro de la organización a un tablero de proyecto

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.organization-wide-project %}
{% data reusables.project-management.select-project %}
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
{% data reusables.project-management.collaborator-option %}
{% data reusables.project-management.collaborator-permissions %}

### Eliminar el acceso de un miembro de la organización a un tablero de proyecto

Cuando eliminas a un colaborador de un tablero de proyecto, es posible que conserve acceso a un tablero en base a los permisos que tiene por otros roles. Para eliminar de forma completa el acceso a un tablero de proyecto, debes eliminar el acceso para cada rol que tenga esa persona. Por ejemplo, una persona puede tener acceso al tablero de proyecto como miembro de la organización o miembro del equipo. Para obtener más información, consulta "[Permisos de tablero de proyecto para una organización](/articles/project-board-permissions-for-an-organization)".

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.organization-wide-project %}
{% data reusables.project-management.select-project %}
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
{% data reusables.project-management.collaborator-option %}
{% data reusables.project-management.remove-collaborator %}

### Leer más

- [Permisos de tablero de proyecto para una organización](/articles/project-board-permissions-for-an-organization)"
