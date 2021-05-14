---
title: Migrar los equipos de administradores a permisos de organización mejorados
intro: 'Si tu organización fue creada después de septiembre de 2015, tu organización ha mejorado los permisos de la organización por defecto. Las organizaciones creadas antes de septiembre de 2015 pueden necesitar migrar a los antiguos equipos de propietarios y administradores al modelo mejorado de permisos. Los miembros de los equipos de administradores heredados conservan de forma automática la capacidad para crear repositorios hasta que esos equipos sean migrados al modelo mejorado de permisos de la organización.'
redirect_from:
  - /articles/migrating-your-previous-admin-teams-to-the-improved-organization-permissions/
  - /articles/migrating-admin-teams-to-improved-organization-permissions
  - /github/setting-up-and-managing-organizations-and-teams/migrating-admin-teams-to-improved-organization-permissions
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - Organizations
  - Teams
---

Por defecto, todos los miembros de la organización pueden crear repositorios. Si restringes los [permisos de creación de repositorios](/articles/restricting-repository-creation-in-your-organization) a los propietarios de la organización y tu organización fue creada dentro de la estructura heredada de permisos de organización, los miembros de los equipos de administración heredados seguirán teniendo la capacidad de crear repositorios.

Los equipos de administración heredados son equipos que fueron creados con el nivel de permiso de administración dentro de la estructura heredada de permisos de organización. Los miembros de estos equipos pudieron crear repositorios para la organización, y hemos conservado esta capacidad en la estructura mejorada de permisos de la organización.

Puedes eliminar esta capacidad al migrar tus equipos de administradores heredados a los permisos mejorados de la organización.

Para obtener más información, consulta "[Niveles de permiso del repositorio para una organización](/articles/permission-levels-for-an-organization)".

{% warning %}

**Advertencia:** si tu organización ha inhabilitado [los permisos de creación de repositorio](/articles/restricting-repository-creation-in-your-organization) para todos los miembros, algunos miembros de los equipos de administradores heredados pueden perder los permisos de creación de repositorio. Si tu organización ha habilitado la creación de repositorio de miembro, migrar los equipos de administradores heredados a los permisos mejorados de la organización no afectará la capacidad de los miembros del equipo de crear repositorios.

{% endwarning %}

### Migrar todos tus equipos de administradores heredados de tu organización

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.teams_sidebar %}
1. Revisa tus equipos de administradores heredados de la organización, después haz clic en **Migrate all teams (Migrar todos los equipos)**. ![Botón Migrar todos los equipos](/assets/images/help/teams/migrate-all-legacy-admin-teams.png)
1. Lee la información sobre los posibles cambios en permisos para los miembros de estos equipos, después haz clic en **Migrate all teams (Migrar todos los equipos).** ![Botón Confirmar migración](/assets/images/help/teams/confirm-migrate-all-legacy-admin-teams.png)

### Migrar un equipo de administradores único

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
1. En la casilla de descripción de equipo, haz clic en **Migrate team (Migrar equipo)**. ![Botón Migrar equipo](/assets/images/help/teams/migrate-a-legacy-admin-team.png)
