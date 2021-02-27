---
title: Administrar el acceso de equipo a un repositorio de la organización
intro: 'Puedes darle acceso de equipo a un repositorio, eliminar el acceso del equipo sobre un repositorio, o cambiar el nivel de permiso del equipo sobre un repositorio.'
redirect_from:
  - /articles/managing-team-access-to-an-organization-repository-early-access-program/
  - /articles/managing-team-access-to-an-organization-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Las personas con acceso de administrador a un repositorio pueden administrar el acceso del equipo a un repositorio. Los mantenedores del equipo pueden eliminar el acceso de un equipo a un repositorio.

{% warning %}

**Advertencias:**
- Puedes cambiar el nivel de permiso de un equipo si el equipo tiene acceso directo a un repositorio. Si el acceso del equipo a un repositorio se hereda de un equipo padre, debes cambiar el acceso del equipo padre al repositorio.
- Si agregas o eliminas el acceso al repositorio de un equipo padre, cada uno de sus equipos hijos también recibirá o perderá el acceso al repositorio. Para obtener más información, consulta "[Acerca de los equipos](/articles/about-teams)".

{% endwarning %}

### Otorgarle a un equipo acceso a un repositorio

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team-repositories-tab %}
5. Encima de la lista de repositorios, haz clic en **Add repository (Agregar repositorio)**. ![Botón Agregar repositorio](/assets/images/help/organizations/add-repositories-button.png)
6. Escribe el nombre de un repositorio, después haz clic en **Add repository to team (Agregar repositorio al equipo)**. ![Campo Buscar repositorio](/assets/images/help/organizations/team-repositories-add.png)
7. De forma opcional, a la derecha del nombre del repositorio, utiliza el menú desplegable y elige un nivel de permiso diferente para el equipo. ![Menú desplegable de nivel de acceso a un repositorio](/assets/images/help/organizations/team-repositories-change-permission-level.png)

### Eliminar el acceso de un equipo a un repositorio

Puedes eliminar el acceso de un equipo a un repositorio si el equipo tiene acceso directo a un repositorio. Si el acceso de un equipo al repositorio se hereda de un equipo padre, debes eliminar el repositorio del equipo padre para poder eliminar el repositorio de los equipos hijos.

{% data reusables.repositories.deleted_forks_from_private_repositories_warning %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team-repositories-tab %}
5. Selecciona el repositorio o los repositorios que deseas eliminar del equipo. ![Lista de repositorios de equipo con casillas de verificación para algunos repositorios seleccionados](/assets/images/help/teams/select-team-repositories-bulk.png)
6. Encima de la lista de repositorios, utiliza el menú desplegable, y haz clic en **Remove from team (Eliminar del equipo)**. ![Menú desplegable con la opción de eliminar un repositorio de un equipo](/assets/images/help/teams/remove-team-repo-dropdown.png)
7. Revisa el o los repositorios que serán eliminados del equipo, después haz clic en **Remove repositories (Eliminar repositorios)**. ![Casilla modal con una lista de repositorios a los que el equipo ya no tiene acceso](/assets/images/help/teams/confirm-remove-team-repos.png)

### Leer más

- "[Niveles de permiso del repositorio para una organización](/articles/repository-permission-levels-for-an-organization)"
