---
title: Crear equipos
intro: 'Los equipos les permiten a las organizaciones crear grupos de miembros y controlar el acceso a los repositorios. A los miembros del equipo se les pueden otorgar permisos de lectura, escritura o administración para repositorios específicos.'
redirect_from:
  - /enterprise/admin/user-management/creating-teams
versions:
  enterprise-server: '*'
---

Los equipos son centrales para muchas de las características colaborativas de {% data variables.product.prodname_dotcom %}, como las @menciones del equipo para notificar a las partes correspondientes que les quieres solicitar su colaboración o atención. Para obtener más información, consulta "[Niveles de permisos para el repositorio de una organizazión](/enterprise/{{ currentVersion }}/user/articles/repository-permission-levels-for-an-organization/)".

Un equipo puede representar a un grupo dentro de tu empresa o incluir personas con ciertos intereses o experiencia. Por ejemplo, un equipo de expertos en accesibilidad en {% data variables.product.product_location %} podría estar compuesto por personas de diferentes departamentos. Los equipos pueden representar inquietudes de carácter funcional que complementan la jerarquía divisional existente de una empresa.

Las organizaciones pueden crear varios niveles de equipos anidados para reflejar la estructura de jerarquía de una empresa o grupo. Para obtener más información, consulta "[Acerca de los equipos](/enterprise/{{ currentVersion }}/user/articles/about-teams/#nested-teams)".

### Crear un equipo

Una combinación prudente de equipos es una manera eficaz de controlar el acceso a los repositorios. Por ejemplo, si tu organización solo permite que tu equipo de ingeniería en lanzamientos suba código a la rama predeterminada de cualquier repositorio, puedes otorgar únicamente a este equipo el permiso de **administrador** para los repositorios de tu organización y darle al resto de los equipos permisos de **lectura**.

{% data reusables.profile.enterprise_access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.new_team %}
{% data reusables.organizations.team_name %}
{% data reusables.organizations.team_description %}
{% data reusables.organizations.team_visibility %}
{% data reusables.organizations.create-team-choose-parent %}
{% data reusables.organizations.create_team %}

### Crear equipos con la sincronización LDAP activada

Las instancias que usan LDAP para la autenticación de usuarios pueden usar la sincronización LDAP para administrar los miembros de un equipo. Al poner el **Nombre Distintivo** (DN) del grupo en el campo **LDAP group** (Grupo LDAP), se le asignará un equipo a un grupo LDAP en tu servidor LDAP. Si usas la sincronización LDAP para administrar los miembros de un equipo, no podrás administrar tu equipo dentro de {% data variables.product.product_location %}. Cuando la sincronización LDAP está activada, el equipo asignado sincroniza sus miembros en segundo plano de manera periódica con el intervalo configurado. Para obtener más información, consulta "[Activar sincronización LDAP](/enterprise/{{ page.version }}/admin/guides/user-management/using-ldap#enabling-ldap-sync)".

{% data reusables.enterprise_user_management.ldap-sync-nested-teams %}

{% warning %}

**Notas:**
- La sincronización LDAP solo administra la lista de miembros del equipo. Debes administrar los permisos y repositorios del equipo desde dentro del {% data variables.product.prodname_ghe_server %}.
- Si se elimina un grupo LDAP asignado a un DN, o si se borra un grupo LDAP, todos los miembros se eliminan del equipo sincronizado del {% data variables.product.prodname_ghe_server %}. Para solucionar esto, asigna el equipo a un nuevo DN, vuelve a agregar a los miembros del equipo y [sincroniza de forma manual la asignación](/enterprise/{{ page.version }}/admin/guides/user-management/using-ldap/#manually-syncing-ldap-accounts).
- Si se elimina a una persona de un repositorio cuando la sincronización LDAP está activada, perderá el acceso, pero sus bifurcaciones no se borrarán. Si se agrega a esa persona a un equipo con acceso al repositorio original de la organización dentro de los tres meses posteriores, en la siguiente sincronización, se reestablecerá automáticamente su acceso a las bifurcaciones.

{% endwarning %}

1. Asegúrate de que [La sincronización LDAP esté activada](/enterprise/{{ page.version }}/admin/guides/user-management/using-ldap#enabling-ldap-sync).
{% data reusables.profile.enterprise_access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.new_team %}
{% data reusables.organizations.team_name %}
6. Busca el DN de un grupo LDAP al que asignar el equipo. Si no conoces el DN, escribe el nombre del grupo LDAP.
El {% data variables.product.prodname_ghe_server %} buscará y completará automáticamente cualquier coincidencia.
![Asignar al DN del grupo LDAP](/assets/images/enterprise/orgs-and-teams/ldap-group-mapping.png)
{% data reusables.organizations.team_description %}
{% data reusables.organizations.team_visibility %}
{% data reusables.organizations.create-team-choose-parent %}
{% data reusables.organizations.create_team %}
