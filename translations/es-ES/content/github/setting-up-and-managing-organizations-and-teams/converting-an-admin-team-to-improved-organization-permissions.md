---
title: Convertir un equipo de administradores a los permisos de organización mejorados
intro: 'Si tu organización fue creada después de septiembre de 2015, tu organización ha mejorado los permisos de la organización por defecto. Las organizaciones creadas antes de septiembre de 2015 pueden necesitar migrar a los antiguos equipos de propietarios y administradores al modelo mejorado de permisos. Los miembros de los equipos de administradores heredados conservan de forma automática la capacidad para crear repositorios hasta que esos equipos sean migrados al modelo mejorado de permisos de la organización.'
redirect_from:
  - /articles/converting-your-previous-admin-team-to-the-improved-organization-permissions/
  - /articles/converting-an-admin-team-to-improved-organization-permissions
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - organizations
  - equipos
---

Puedes eliminar la capacidad de los miembros del equipo de administración heredado para crear repositorios al crear un nuevo equipo para esos miembros, asegurándote de que el equipo tenga el acceso necesario a los repositorios de la organización, y eliminando el equipo de administración heredado.

Para obtener más información, consulta "[Niveles de permiso del repositorio para una organización](/articles/repository-permission-levels-for-an-organization/)".

{% warning %}

**Advertencias:**
- Si hay miembros de su equipo de administración heredados que no son miembros de otros equipos, la eliminación del equipo eliminará a esos miembros de la organización. Antes de eliminar el equipo, asegúrate de que los miembros ya sean miembros directos de la organización, o que tengan acceso de colaborador a los repositorios necesarios.
- Para evitar la pérdida de bifurcaciones privadas realizadas por los miembros del equipo de administradores heredado, debes seguir los pasos 1-3 a continuación antes de eliminar el equipo de administradores heredado.
- Dado que "admin" es un término para los miembros de la organización con [acceso específico a determinados repositorios](/articles/repository-permission-levels-for-an-organization) en la organización, te recomendamos evitar ese término en cualquier nombre de equipo sobre el que puedas decidir.

{% endwarning %}

1. [Crear un equipo nuevo](/articles/creating-a-team).
2. [Agregar cada uno de los miembros](/articles/adding-organization-members-to-a-team) de tu equipo de administradores heredado al nuevo equipo.
3. [Brindar al equipo nuevo el acceso equivalente](/articles/managing-team-access-to-an-organization-repository) a cada uno de los repositorios a los que podía acceder el equipo heredado.
4. [Eliminar el equipo de administradores heredado](/articles/deleting-a-team).
