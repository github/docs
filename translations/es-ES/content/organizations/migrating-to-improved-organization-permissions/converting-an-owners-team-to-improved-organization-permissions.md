---
title: Convertir un equipo de Propietarios a los permisos de organización mejorados
intro: 'Si tu organización fue creada después de septiembre de 2015, tu organización ha mejorado los permisos de la organización por defecto. Las organizaciones creadas antes de septiembre de 2015 pueden necesitar migrar a los antiguos equipos de propietarios y administradores al modelo mejorado de permisos. El "Propietario" ahora tiene un rol administrativo otorgado a los miembros individuales de tu organización. Los miembros de tu equipo de Propietarios heredado automáticamente reciben los privilegios del propietario.'
redirect_from:
  - /articles/converting-your-previous-owners-team-to-the-improved-organization-permissions-early-access-program/
  - /articles/converting-your-previous-owners-team-to-the-improved-organization-permissions/
  - /articles/converting-an-owners-team-to-improved-organization-permissions
  - /github/setting-up-and-managing-organizations-and-teams/converting-an-owners-team-to-improved-organization-permissions
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - organizations
  - equipos
---

Tienes algunas opciones para convertir tu equipo de Propietarios heredado:

- Coloca un nuevo nombre al equipo que denote que los miembros tienen un estado especial en la organización.
- Elimina el equipo luego de asegurarte de que todos los miembros han sido agregados a los equipos que garantizan las acciones necesarias a los repositorios de la organización.

### Proporcionar al equipo de Propietarios un nuevo nombre

{% tip %}

   **Nota:** Dado que "admin" es un término para los miembros de la organización con [acceso específico a determinados repositorios](/articles/repository-permission-levels-for-an-organization) en la organización, te recomendamos evitar ese término en cualquier nombre de equipo sobre el que puedas decidir.

{% endtip %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.owners-team %}
{% data reusables.organizations.convert-owners-team-confirm %}
5. En el campo de nombre del equipo, escoge un nuevo nombre para el equipo Propietarios. Por ejemplo:
    - Si muy pocos miembros de tu organización fuesen miembros del equipo Propietarios, puedes designarlo como equipo "Central".
    - Si todos los miembros de tu organización fuesen miembros del equipo Propietarios de manera que puedan [@mencionar equipos](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams), puedes designar al equipo como "Empleados". ![El campo de nombre del equipo, con el equipo Propietarios con el nuevo nombre Central](/assets/images/help/teams/owners-team-new-name.png)
6. Debajo de la descripción del equipo, haz clic en **Save and continue** (Guardar y continuar). ![El botón para guardar y continuar](/assets/images/help/teams/owners-team-save-and-continue.png)
7. Opcionalmente, [puedes hacer que el equipo sea *público*](/articles/changing-team-visibility).

### Eliminar el equipo de Propietarios heredado

{% warning %}

**Advertencia**: Si hay miembros del equipo de Propietarios heredado que no son miembros de otros equipos, la eliminación del equipo eliminará a esos miembros de la organización. Antes de eliminar el equipo, asegúrate de que los miembros ya sean miembros directos de la organización, o que tengan acceso de colaborador a los repositorios necesarios.

{% endwarning %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.owners-team %}
{% data reusables.organizations.convert-owners-team-confirm %}
5. En la parte inferior de la página, revisa la advertencia y haz clic en **Delete the Owners team** (Eliminar el equipo de Propietarios). ![Enlace para eliminar el equipo de Propietarios](/assets/images/help/teams/owners-team-delete.png)
