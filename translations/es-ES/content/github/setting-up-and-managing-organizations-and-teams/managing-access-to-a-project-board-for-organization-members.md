---
title: Administrar el acceso a un tablero de proyecto para los miembros de una organización
intro: 'Como propietario de la organización o administrador de un tablero de proyecto, puedes configurar un nivel de permiso predeterminado para un tablero de proyecto para todos los miembros de la organización.'
redirect_from:
  - /articles/managing-access-to-a-project-board-for-organization-members
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Por defecto, los miembros de una organización tienen acceso de escritura a sus tableros de proyecto de la organización excepto que los propietarios de la organización o los administradores de un tablero de proyecto configuren permisos diferentes para tableros de proyecto específicos.

### Configurar un nivel de permiso base para todos los miembros de la organización

{% tip %}

**Sugerencia:** Puedes darle a un miembro de la organización mayores permisos a un tablero de proyecto. Para obtener más información, consulta "[Permisos de tablero de proyecto para una organización](/articles/project-board-permissions-for-an-organization)".

{% endtip %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.organization-wide-project %}
{% data reusables.project-management.select-project %}
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
8. Debajo de "Organization member permission" (Permiso para miembro de la organización), elige un nivel base de permiso para todos los miembros de la organización: **Read** (Lectura), **Write** (Escritura), **Administrar** o **None** (Ninguno). ![Opciones de permiso base a un tablero de proyecto para todos los miembros de una organización](/assets/images/help/projects/baseline-project-permissions-for-organization-members.png)
9. Haz clic en **Save ** (guardar).

### Further reading

- "[Administrar el acceso de una persona a un tablero de proyecto de una organización](/articles/managing-an-individual-s-access-to-an-organization-project-board)"
- "[Administrar el acceso de equipo a un tablero de proyecto de una organización](/articles/managing-team-access-to-an-organization-project-board)"
- [Permisos de tablero de proyecto para una organización](/articles/project-board-permissions-for-an-organization)"
