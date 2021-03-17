---
title: Convertir a un miembro de la organización en un colaborador externo
intro: 'Si un miembro actual de tu organización solo necesita acceso a determinados repositorios, como consultores o empleados temporales, puedes convertirlo en un *colaborador externo".'
redirect_from:
  - /articles/converting-an-organization-member-to-an-outside-collaborator
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% data reusables.organizations.owners-and-admins-can %} convertir a los miembros de la organización en colaboradores externos.

{% data reusables.organizations.outside-collaborators-use-seats %}{% data reusables.organizations.outside_collaborator_forks %}

Luego de convertir a un miembro de la organización en un colaborador externo, solo tendrá acceso a los repositorios que permite su membresía de equipo actual. La persona ya no será un miembro explícito de la organización, y ya no podrá:

- Crear equipos
- Ver todos los miembros y equipos de la organización
- @mencionar cualquier equipo visible
- Ser un mantenedor del equipo

Para obtener más información, consulta ´la sección "[Niveles de permisos para una organización](/github/setting-up-and-managing-organizations-and-teams/permission-levels-for-an-organization)".

Recomendamos revisar el acceso del miembro de la organización a los repositorios para garantizar que su acceso sea el que esperas. Para obtener más información, consulta la sección "[Administrar el acceso de un individuo a un repositorio de la organización](/articles/managing-an-individual-s-access-to-an-organization-repository)".

Cuando conviertes a un miembro de la organización en colaborador externo, sus privilegios de miembros de la organización se guardan por tres meses para que puedas restablecer sus privilegios de membrecía si los{% if currentVersion == "free-pro-team@latest" %} invitas a volver a unirse{% else %} agregas de nuevo{% endif %} a tu organización dentro del límite de tiempo establecido. Para obtener más información, consulta "[Reinstalar un miembro antiguo de tu organización](/enterprise/{{ page.version }}/user/articles/reinstating-a-former-member-of-your-organization)".

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.people %}
4. Selecciona la persona o las personas a quienes deseas convertir en colaboradores externos. ![Lista de miembros con dos miembros seleccionados](/assets/images/help/teams/list-of-members-selected-bulk.png)
5. Arriba de la lista de miembros, utiliza el menú desplegable y haz clic en **Convert to outside collaborator** (Convertir en colaborador externo). ![Menú desplegable con la opción para convertir miembros en colaboradores externos](/assets/images/help/teams/user-bulk-management-options.png)
6. Lee la información sobre cómo convertir miembros en colaboradores externos, luego haz clic en **Convert to outside collaborator** (Convertir en colaborador externo). ![Información sobre permisos de colaboradores externos y botón Convert to outside collaborators (Convertir en colaboradores externos)](/assets/images/help/teams/confirm-outside-collaborator-bulk.png)

### Leer más

- "[Agregar colaboradores externos a repositorios de tu organización](/articles/adding-outside-collaborators-to-repositories-in-your-organization)"
- "[Eliminar a un colaborador externo desde el repositorio de una organización](/articles/removing-an-outside-collaborator-from-an-organization-repository)"
- "[Convertir a un colaborador externoe en un miembro de la organización](/articles/removing-an-outside-collaborator-from-an-organization-repository)"
