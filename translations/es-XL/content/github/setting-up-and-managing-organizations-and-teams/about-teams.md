---
title: Acerca de los equipos
intro: Los equipos son grupos de miembros de una organización que reflejan la estructura de tu empresa o grupo con menciones y permisos de acceso en cascada.
redirect_from:
  - /articles/about-teams
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

![Listado de equipos en una organización](/assets/images/help/teams/org-list-of-teams.png)

Los propietarios de la organización y los mantenedores del equipo le pueden otorgar a los equipos acceso de escritura, de lectura o de administrador a los repositorios de la organización. Los miembros de la organización pueden enviar una notificación a todo un equipo al mencionar el nombre del equipo. Los miembros de la organización también pueden enviar una notificación a todo un equipo al solicitar una revisión de ese equipo. Los miembros de la organización pueden solicitar revisiones de equipos específicos con acceso de lectura al repositorio donde la solicitud de extracción esté abierta. Los equipos pueden ser designados como propietarios de ciertos tipos o áreas de código en un archivo CODEOWNERS.

Para obtener más información, consulta:
- "[Administrar el acceso del equipo al repositorio de una organización](/articles/managing-team-access-to-an-organization-repository)"
- "[Mencionar personas y equipos](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)"
- "[Acerca de los propietarios del código](/articles/about-code-owners/)"

![Imagen de la mención a un equipo](/assets/images/help/teams/team-mention.png)

{% if currentVersion != "free-pro-team@latest" %}

También puedes usar la sincronización LDAP para sincronizar los roles del equipo y los miembros del equipo de {% data variables.product.product_location_enterprise %} con tus grupos de LDAP establecidos. Esto te permite establecer un control de acceso para usuarios basado en roles desde tu servidor LDAP, en lugar de hacerlo de forma manual dentro de {% data variables.product.product_location_enterprise %}. Para obtener más información, consulta "[Activar sincronización LDAP](/enterprise/{{ currentVersion }}/admin/guides/user-management/using-ldap#enabling-ldap-sync)".

{% endif %}

{% data reusables.organizations.team-synchronization %}

### Visibilidad del equipo

{% data reusables.organizations.types-of-team-visibility %}

### Paginas del equipo

Cada equipo tiene su propia página dentro de una organización. En la página de un equipo, puedes ver los miembros del equipo, los equipos hijo y los repositorios del equipo. Los propietarios de la organización y los mantenedores del equipo pueden acceder a los parámetros del equipo y actualizar la foto de perfil y la descripción del equipo desde la página del equipo.

Los miembros de la organización pueden crear y participar en debates con el equipo. Para obtener más información, consulta [Acerca de los debates del equipo](/articles/about-team-discussions)".

![Página del equipo que enumera los miembros del equipo y los debates](/assets/images/help/organizations/team-page-discussions-tab.png)

### Equipos anidados

Puedes reflejar la jerarquía de tu grupo o empresa dentro de tu organización de {% data variables.product.product_name %} con varios niveles de equipos anidados. Un equipo padre puede tener varios equipos hijo, mientras que cada equipo hijo solo tiene un equipo padre. No puedes anidar equipos secretos.

Los equipos hijo heredan los permisos de acceso del padre, lo que simplifica la administración de permisos para los grupos grandes. Los miembros de los equipos hijo también reciben notificaciones cuando se hace una @mención al equipo padre, simplificando la comunicación con varios grupos de personas.

Por ejemplo, si la estructura de tu equipo es Empleados > Ingeniería > Ingeniería de aplicación> Identidad, otorgar acceso de escritura a Ingeniería en un repositorio implicará que también se podrá acceder a Ingeniería de aplicación e Identidad. Si haces una @mención al equipo de Identidad o a cualquier equipo de la parte inferior de la jerarquía de la organización, son los únicos que recibirán una notificación.

![Página de los equipos con un equipo padre y equipos hijo](/assets/images/help/teams/nested-teams-eng-example.png)

Para comprender fácilmente quién comparte las menciones y los permisos de un equipo padre, puedes ver todos los miembros de los equipos hijo de un equipo padre en la pestaña Miembros de la página del equipo padre. Los miembros de un equipo hijo no son miembros directos del equipo padre.

![Página del equipo padre con todos los miembros de los equipos hijo](/assets/images/help/teams/team-and-subteam-members.png)

Puedes elegir un padre cuando creas el equipo o puedes mover un equipo más tarde en la jerarquía de tu organización. Para obtener más información, consulta [Mover un equipo dentro de la jerarquía de tu organización](/articles/moving-a-team-in-your-organization-s-hierarchy)".

{% if currentVersion != "free-pro-team@latest" %}

{% data reusables.enterprise_user_management.ldap-sync-nested-teams %}

{% endif %}

### Prepararse para anidar equipos en tu organización

Si tu organización ya tiene equipos existentes, deberías auditar los permisos de acceso a los repositorios de cada equipo antes de anidar equipos por arriba o por debajo del mismo. También deberías considerar la nueva estructura que te gustaría implementar para tu organización.

En la parte superior de la jerarquía del equipo, deberías otorgar permisos de acceso a los repositorios de los equipos padre que son seguros para cada miembro del equipo padre y sus equipos hijo. A medida que te mueves hacia la parte inferior de la jerarquía, puedes otorgar a los equipos hijo un acceso adicional, más pormenorizado para los repositorios más confidenciales.

1. Eliminar todos los miembros de los equipos existentes.
2. Auditar y ajustar los permisos de acceso a los repositorios de cada equipo y darle a cada equipo un padre.
3. Crear todos los equipos nuevos que quieras, elegir un padre para cada equipo nuevo y otorgarles acceso a los repositorios.
4. Agregar las personas directamente a los equipos.

### Leer más

- "[Crear un equipo](/articles/creating-a-team)"
- "[Agregar miembros de la organización a un equipo](/articles/adding-organization-members-to-a-team)"
