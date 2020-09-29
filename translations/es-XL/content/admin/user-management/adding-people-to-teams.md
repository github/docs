---
title: Agregar personas a los equipos
redirect_from:
  - /enterprise/admin/articles/adding-teams/
  - /enterprise/admin/articles/adding-or-inviting-people-to-teams/
  - /enterprise/admin/guides/user-management/adding-or-inviting-people-to-teams/
  - /enterprise/admin/user-management/adding-people-to-teams
intro: 'Una vez que se ha creado un equipo, los administradores de la organización pueden agregar usuarios desde {% data variables.product.product_location_enterprise %} al equipo y determinar a qué repositorios tienen acceso.'
versions:
  enterprise-server: '*'
---

Cada equipo tiene sus propios premisos de acceso definidos de manera individual [ para repositorios que le pertenecen a tu organización](/articles/permission-levels-for-an-organization).

- Los miembros con el rol de propietario pueden agregar o eliminar miembros existentes de la organización de todos los equipos.
- Los miembros de equipos que dan permisos de administración solo pueden modificar los repositorios y las membresías de equipos para ese equipo.

### Configurar un equipo

{% data reusables.profile.enterprise_access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.invite_to_team %}
{% data reusables.organizations.review-team-repository-access %}

### Asignar equipos a los grupos LDAP (para instancias que usan la sincronización LDAP para la autenticación de usuario)

{% data reusables.enterprise_management_console.badge_indicator %}

Para agregar un nuevo miembro a un equipo sincronizado con un grupo LDAP, agrega el usuario como un miembro del grupo LDAP o comunícate con el administrador LDAP.
