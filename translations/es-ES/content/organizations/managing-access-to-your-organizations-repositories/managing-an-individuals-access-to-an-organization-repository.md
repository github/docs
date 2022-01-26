---
title: Administrar el acceso de una persona a un repositorio de una organización
intro: Puedes administrar el acceso de una persona a un repositorio propiedad de tu organización.
redirect_from:
  - /articles/managing-an-individual-s-access-to-an-organization-repository-early-access-program
  - /articles/managing-an-individual-s-access-to-an-organization-repository
  - /articles/managing-an-individuals-access-to-an-organization-repository
  - /github/setting-up-and-managing-organizations-and-teams/managing-an-individuals-access-to-an-organization-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Administrar el acceso individual
permissions: People with admin access to a repository can manage access to the repository.
---

## Acerca del acceso a los repositorios de la organización

Cuando eliminas a un colaborador de un repositorio en tu organización, el colaborador pierde el acceso de lectura y escritura al repositorio. Si el repositorio es privado y el colaborador ha bifurcado el repositorio, entonces su bifurcación también se elimina, pero el colaborador conservará cualquier clon local de tu repositorio.

{% data reusables.repositories.deleted_forks_from_private_repositories_warning %}

## Otorgar a una persona acceso a un repositorio

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-manage-access %}
{% data reusables.organizations.invite-teams-or-people %}
5. En el campo de búsqueda, comienza a teclear el nombre de la persona que desees invitar y luego haz clic en un nombre de la lista de coincidencias. ![Campo de búsqueda para teclear el nombre del equipo o persona que deseas invitar al repositorio](/assets/images/help/repository/manage-access-invite-search-field.png)
6. Debajo de "Elige un rol", selecciona el rol de repositorio que quieres asignar a la persona y luego haz clic en **Agregar NOMBRE a REPOSITORIO**. ![Seleccionar los permisos para el equipo o persona](/assets/images/help/repository/manage-access-invite-choose-role-add.png)

## Administrar el acceso de una persona a un repositorio de una organización

{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.people %}
4. Haz clic en **Members (Miembros)** o **Outside collaborators (Colaboradores externos)** para administrar las personas con diferentes tipos de acceso. ![Botón para invitar a miembros o colaboradores externos a una organización](/assets/images/help/organizations/select-outside-collaborators.png)
5. A la derecha del nombre de la persona que desearías administrar, utiliza el menú desplegable {% octicon "gear" aria-label="The Settings gear" %}, y haz clic en **Manage (Administrar)**. ![Enlace de acceso al gerente](/assets/images/help/organizations/member-manage-access.png)
6. En la página "Manage access" (Administrar el acceso), al lado del repositorio, haz clic en **Manage access (Administrar el acceso)**. ![Botón de administración de acceso a un repositorio](/assets/images/help/organizations/repository-manage-access.png)
7. Revisa el acceso de la persona a un repositorio determinado, como si fuera un colaborador o si tuviera acceso a un repositorio por medio de una membresía de equipo. ![Matriz de acceso a repositorio para el usuario](/assets/images/help/organizations/repository-access-matrix-for-user.png)

## Leer más

{% ifversion fpt or ghec %}- "[Limitar las interacciones con tu repositorio](/articles/limiting-interactions-with-your-repository)"{% endif %}
- "[Roles de repositorio para una organización](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)"
