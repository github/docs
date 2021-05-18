---
title: Eliminar usuarios de equipos y organizaciones
intro: 'Si un miembro de tu organización ya no necesita acceso a ciertos repositorios, puedes eliminarlo del equipo que permite ese acceso. Si un miembro de tu organización ya no necesita acceso a ningún repositorio que le pertenezca a tu organización, puedes eliminarlo de la organización.'
redirect_from:
  - /enterprise/admin/user-management/removing-users-from-teams-and-organizations
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Access management
  - Accounts
  - Enterprise
  - Teams
---

Solo los propietarios o los administradores del equipo pueden eliminar miembros de la organización. Cuando se elimina un usuario de un equipo o una organización, sus propuestas, solicitudes de extracción y comentarios en los repositorios de la organización permanecen intactos y siguen siendo atribuidos al usuario.

{% warning %}

**Advertencia**: cuando eliminas un usuario de una organización, perderán el acceso a cualquier bifurcación privada que tengan en los **repositorios privados** de tu organización. Puede seguir teniendo copias locales de esas bifurcaciones. Sin embargo, no podrá sincronizarlas con los repositorios de tu organización. Eres responsable de asegurar que las personas que perdieron el acceso a un repositorio borren cualquier información confidencial o propiedad intelectual. Si el usuario eliminado de tu organización era un miembro de la organización, su acceso a las bifurcaciones privadas de los repositorios de la organización se pueden restablecer si el usuario es [reinstalado como un miembro de la organización](/articles/reinstating-a-former-member-of-your-organization) dentro de los tres meses de haber sido eliminado de una organización.

{% endwarning %}

### Eliminar un miembro del equipo

{% warning %}

**Nota:** {% data reusables.enterprise_management_console.badge_indicator %}

Para eliminar un miembro existente de un equipo sincronizado a un grupo LDAP, comunícate con tu administrador LDAP.

{% endwarning %}

{% data reusables.profile.enterprise_access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
4. Selecciona la persona o las personas que quieres eliminar. ![Casilla junto al miembro de la organización](/assets/images/help/teams/team-member-check-box.png)
5. Arriba de la lista de miembros del equipo, utiliza el menú desplegable y haz clic en **Remove from team** (Eliminar del equipo). ![Menú desplegable con opción para cambiar el rol](/assets/images/help/teams/bulk-edit-drop-down.png)

### Eliminar un usuario de una organización

{% data reusables.profile.enterprise_access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.people %}
4. Al lado del nombre de los usuarios que quieras eliminar de la organización, haz clic en la casilla de verificación. ![Casilla de verificación Eliminar usuario](/assets/images/help/organizations/Organization-remove-user.png)
5. En la parte superior de la página, debajo del nombre de la organización, haz clic en **Eliminar de la organización**. ![Botón para eliminar de la organización ](/assets/images/help/organizations/Organization-remove-from-organization-button.png)

{% data reusables.organizations.data_saved_for_reinstating_a_former_org_member %}
