---
title: Niveles de permiso para tableros de proyecto propiedad del usuario
intro: 'Un tablero de proyecto que le pertenezca a una cuenta personal tiene dos niveles de permiso: el propietario del tablero del proyecto y los colaboradores.'
redirect_from:
  - /articles/permission-levels-for-user-owned-project-boards
  - /github/setting-up-and-managing-your-github-user-account/permission-levels-for-user-owned-project-boards
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/permission-levels-for-user-owned-project-boards
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Permiso para utilizar tableros de proyecto
---

## Resumen de permisos

Solo hay un propietario de un tablero de proyecto que le pertenezca a un usuario; este permiso no se puede compartir con otra cuenta personal. Además del propietario, otras personas pueden colaborar en tableros de proyecto.

Hay tres niveles de permisos para los colaboradores de un tablero de proyecto:

{% data reusables.project-management.project-board-permissions %}

## Permisos de propietario y de administrador para un tablero de proyecto propiedad del usuario

El propietario del tablero de proyecto y los colaboradores con acceso de administrador tienen control completo del tablero de proyecto. Además de todos los permisos admitidos por los colaboradores del tablero de proyecto, un propietario y un colaborador de un tablero de proyecto con acceso de administrador pueden:

- [Administrar, ver y agregar colaboradores](/articles/managing-access-to-your-user-account-s-project-boards)
- [Configurar un tablero de proyecto como {% ifversion ghae %}interno{% else %}público{% endif %} o privado](/articles/changing-project-board-visibility)
- [Eliminar un tablero de proyecto](/articles/deleting-a-project-board/)
- [Cerrar un tablero de proyecto](/articles/closing-a-project-board/)
- [Volver a abrir un tablero de proyecto cerrado](/articles/reopening-a-closed-project-board)

## Permisos de lectura y escritura para un tablero de proyecto propiedad del usuario

Los colaboradores con acceso de lectura a un tablero de proyecto propiedad del usuario pueden:

- Ver un tablero de proyecto
- Copiar un tablero de proyecto
- Filtrar tarjetas en un tablero de proyecto

Los colaboradores con acceso de escritura a un tablero de proyecto propiedad del usuario pueden:

- Ver un tablero de proyecto
- Copiar un tablero de proyecto
- Filtrar tarjetas en un tablero de proyecto
- Editar un tablero de proyecto
- Vincular un repositorio a un tablero de proyecto
- Configurar la automatización de tableros de proyecto
- Copiar un tablero de proyecto
- Agregar propuestas y solicitudes de extracción a un tablero de proyecto
- Agregar notas a un tablero de proyecto
- Rastrear el avance de un tablero de proyecto
- Archivar tarjetas en un tablero de proyecto

## Visibilidad del tablero de proyecto

Puedes cambiar la visibilidad del tablero de proyecto de privada a {% ifversion ghae %}interna{% else %}pública{% endif %} y de vuelta. Por defecto, los tableros de proyecto propiedad del usuario son privados. Para obtener más información, consulta "[Cambiar la visibilidad de un tablero de proyecto](/articles/changing-project-board-visibility)".

## Leer más

  - "[Adminsitrar el acceso a los tableros de proyecto de tu cuenta personal](/articles/managing-access-to-your-user-account-s-project-boards)"
