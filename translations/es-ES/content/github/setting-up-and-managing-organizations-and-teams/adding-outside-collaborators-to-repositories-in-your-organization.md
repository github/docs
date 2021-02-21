---
title: Agregar colaboradores externos a los repositorios en tu organización
intro: 'Un *colaborador externo* es una persona que no es explícitamente un miembro en tu organización pero tiene premisos de lectura.'
redirect_from:
  - /articles/adding-outside-collaborators-to-repositories-in-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% data reusables.organizations.owners-and-admins-can %} agregar colaboradores externos a un repositorio, a menos que un propietario de la organización haya restringido la capacidad para invitar colaboradores. Para obtener más información, consulta "[Establecer permisos para agregar colaboradores externos](/articles/setting-permissions-for-adding-outside-collaborators)".

{% data reusables.organizations.outside-collaborators-use-seats %}

{% if currentVersion != "github-ae@latest" %}
Si tu organización [requiere miembros y colaboradores externos para usar la autenticación de dos factores](/articles/requiring-two-factor-authentication-in-your-organization), deben habilitar la autenticación de dos factores antes de que puedan aceptar tu invitación para colaborar en el repositorio de una organización.
{% endif %}

{% data reusables.organizations.outside_collaborator_forks %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% if currentVersion == "free-pro-team@latest" %}
{% data reusables.repositories.navigate-to-manage-access %}
{% data reusables.organizations.invite-teams-or-people %}
5. En el campo de búsqueda, comienza a teclear el nombre de la persona que quieres invitar, luego da clic en un nombre de la lista de resultados. ![Campo de búsqueda para teclear el nombre de una persona e invitarla al repositorio](/assets/images/help/repository/manage-access-invite-search-field.png)
6. Debajo de "Selecciona un rol", selecciona los permisos que quieres otorgar a la persona, luego da clic en **"Añadir NOMBRE a REPOSITORIO**. ![Seleccionar los permisos para la persona](/assets/images/help/repository/manage-access-invite-choose-role-add.png)
{% else %}
5. En la barra lateral izquierda, haz clic en **Collaborators & teams** (Colaboradores y equipos). ![Barra lateral de configuraciones del repositorio con Colaboradores y equipos resaltados](/assets/images/help/repository/org-repo-settings-collaborators-and-teams.png)
6. En "Collaborators" (Colaboradores), escribe el nombre de la persona a la que te gustaría brindar acceso al repositorio, luego haz clic en **Add collaborator** (Agregar colaborador). ![La sección Collaborators (Colaboradores) con el nombre de usuario de Octocat ingresado en el campo de búsqueda](/assets/images/help/repository/org-repo-collaborators-find-name.png)
7. Junto al nombre del colaborador, escribe el nivel de permiso correspondiente: *Write* (Escritura) *Read* (Lectura) o *Admin* (Administración). ![El recolector de permisos del repositorio](/assets/images/help/repository/org-repo-collaborators-choose-permissions.png)
{% endif %}

### Leer más

- "[Convertir a un miembro de la organización en colaborador externo](/articles/converting-an-organization-member-to-an-outside-collaborator)"
- "[Eliminar a un colaborador externo desde el repositorio de una organización](/articles/removing-an-outside-collaborator-from-an-organization-repository)"
