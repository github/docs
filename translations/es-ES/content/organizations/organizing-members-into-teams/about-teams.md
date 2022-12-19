---
title: Acerca de los equipos
intro: Los equipos son grupos de miembros de la organización que reflejan la estructura de la empresa o del grupo con menciones y permisos de acceso en cascada.
redirect_from:
  - /articles/about-teams
  - /github/setting-up-and-managing-organizations-and-teams/about-teams
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
ms.openlocfilehash: 7b899cf08ca58170acdf8fb2fb2ad13d251b76e3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145149855'
---
![Listado de equipos en una organización](/assets/images/help/teams/org-list-of-teams.png)

Los propietarios de la organización y los mantenedores del equipo pueden conceder a los equipos acceso de administración, lectura o escritura a los repositorios de la organización. Los miembros de la organización pueden enviar una notificación a todo un equipo mencionando el nombre del equipo. Los miembros de la organización también pueden enviar una notificación a todo un equipo solicitando una revisión por parte de ese equipo. Los miembros de la organización pueden solicitar revisiones a equipos específicos con acceso de lectura al repositorio en el que se ha abierto la solicitud de incorporación de cambios. Los equipos pueden ser designados como propietarios de ciertos tipos o áreas de código en un archivo CODEOWNERS.

Para más información, consulte:
- "[Administración del acceso de equipo a un repositorio de la organización](/articles/managing-team-access-to-an-organization-repository)"
- "[Mención de personas y equipos](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)"
- "[Acerca de los propietarios de código](/articles/about-code-owners/)"

![Imagen de la mención a un equipo](/assets/images/help/teams/team-mention.png)

{% ifversion ghes %}

También puede usar la sincronización de LDAP para sincronizar los roles y miembros del equipo de {% data variables.product.product_location %} con los grupos de LDAP establecidos. Esto le permite establecer un control de acceso para usuarios basado en roles desde el servidor LDAP, en lugar de hacerlo de forma manual desde {% data variables.product.product_location %}. Para más información, vea ["Habilitación de la sincronización LDAP](/enterprise/admin/authentication/using-ldap#enabling-ldap-sync)".

{% endif %}

{% data reusables.organizations.team-synchronization %}

## Visibilidad del equipo

{% data reusables.organizations.types-of-team-visibility %}

Puedes ver todos los equipos a los cuales perteneces en tu tablero personal. Para más información, vea "[Acerca del panel personal](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/about-your-personal-dashboard#finding-your-top-repositories-and-teams)".

## Paginas del equipo

Cada equipo tiene su propia página dentro de una organización. En la página de un equipo, puedes ver los miembros del equipo, los equipos hijo y los repositorios del equipo. Los propietarios de la organización y los mantenedores del equipo pueden acceder a los parámetros del equipo y actualizar la foto de perfil y la descripción del equipo desde la página del equipo.

Los miembros de la organización pueden crear y participar en debates con el equipo. Para más información, vea "[Acerca de los debates de equipo](/organizations/collaborating-with-your-team/about-team-discussions)".

![Página del equipo que enumera los miembros del equipo y los debates](/assets/images/help/organizations/team-page-discussions-tab.png)

## Equipos anidados

Puedes reflejar la jerarquía de tu grupo o empresa dentro de tu organización de {% data variables.product.product_name %} con varios niveles de equipos anidados. Un equipo principal puede tener varios equipos secundarios, mientras que cada equipo secundario solo tiene uno principal. Los equipos secretos no se pueden anidar.

Los equipos secundarios heredan los permisos de acceso del equipo principal, lo que simplifica la administración de permisos de grupos grandes. Los miembros de los equipos secundarios también reciben notificaciones cuando se hace una @mentioned al equipo primario, lo que simplifica la comunicación con varios grupos de personas.

Por ejemplo, si la estructura de tu equipo es Empleados > Ingeniería > Ingeniería de aplicación > Identidad, otorgar acceso de escritura a un repositorio a Ingeniería significa que Ingeniería de aplicación e Identidad también reciben ese acceso. Si hace @mention al equipo de Identidad o a cualquier equipo de la parte inferior de la jerarquía de la organización, son los únicos que recibirán una notificación.

![Página de los equipos con un equipo padre y equipos hijo](/assets/images/help/teams/nested-teams-eng-example.png)

Para comprender fácilmente quién comparte las menciones y los permisos de un equipo padre, puedes ver todos los miembros de los equipos hijo de un equipo padre en la pestaña Miembros de la página del equipo padre. Los miembros de un equipo hijo no son miembros directos del equipo padre.

![Página del equipo padre con todos los miembros de los equipos hijo](/assets/images/help/teams/team-and-subteam-members.png)

Puedes elegir un padre cuando creas el equipo o puedes mover un equipo más tarde en la jerarquía de tu organización. Para más información, vea "[Traslado de un equipo en la jerarquía de la organización](/articles/moving-a-team-in-your-organization-s-hierarchy)".

{% data reusables.enterprise_user_management.ldap-sync-nested-teams %}

## Prepararse para anidar equipos en tu organización

Si tu organización ya tiene equipos existentes, deberías auditar los permisos de acceso a los repositorios de cada equipo antes de anidar equipos por arriba o por debajo del mismo. También deberías considerar la nueva estructura que te gustaría implementar para tu organización.

En la parte superior de la jerarquía del equipo, deberías otorgar permisos de acceso a los repositorios de los equipos padre que son seguros para cada miembro del equipo padre y sus equipos hijo. A medida que te mueves hacia la parte inferior de la jerarquía, puedes otorgar a los equipos hijo un acceso adicional, más pormenorizado para los repositorios más confidenciales.

1. Eliminar todos los miembros de los equipos existentes.
2. Auditar y ajustar los permisos de acceso a los repositorios de cada equipo y darle a cada equipo un padre.
3. Crear todos los equipos nuevos que quieras, elegir un padre para cada equipo nuevo y otorgarles acceso a los repositorios.
4. Agregar las personas directamente a los equipos.

## Información adicional

- "[Creación de un equipo](/articles/creating-a-team)"
- "[Adición de miembros de la organización a un equipo](/articles/adding-organization-members-to-a-team)"
