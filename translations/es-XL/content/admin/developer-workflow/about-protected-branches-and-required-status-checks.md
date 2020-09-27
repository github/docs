---
title: Acerca de ramas protegidas y verificación de estado requerida
intro: 'Las ramas protegidas garantizan que los colaboradores en un repositorio no puedan realizar cambios irrevocables a las ramas. Las verificaciones de estado requeridas garantizan que todas las pruebas de integración continua (CI) requeridas sean aprobadas antes de que los colaboradores puedan realizar cambios en una rama protegida. Las ramas dentro de los repositorios que pertenecen a organizaciones se pueden configurar para que solo ciertos usuarios{% if currentVersion ver_gt "enterprise-server@2.18" %},{% else %} {% endif %} equipos{% if currentVersion ver_gt "enterprise-server@2.18" %} o aplicaciones{% endif %} puedan subir elementos a la rama.'
redirect_from:
  - /enterprise/admin/developer-workflow/about-protected-branches-and-required-status-checks
versions:
  enterprise-server: '*'
---

Las *ramas protegidas* bloquean varias características de Git en una rama que un administrador de repositorio decida proteger. Una rama protegida:

* No puede tener un empuje forzado
* No puede ser eliminada
* No puede tener cambios fusionados hasta que [ se aprueben las comprobaciones de estado requeridas](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/configuring-protected-branches-and-required-status-checks#enabling-required-status-checks)

Cualquier usuario con permisos de administración para un repositorio siempre puede subir elementos a una rama protegida. Si habilitas *restricciones de rama*, solo los usuarios{% if currentVersion ver_gt "enterprise-server@2.18" %},{% else %} los{% endif %} equipos{% if currentVersion ver_gt "enterprise-server@2.18" %} o las aplicaciones{% endif %} a los que se les otorgó permiso pueden subir elementos a una rama protegida. Para obtener más información, consulte [Configurar ramas protegidas y verificaciones de estado requerida](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/configuring-protected-branches-and-required-status-checks)".

![Permisos de rama restringidas](/assets/images/help/repository/restrict-branch-users.png).

{% tip %}

**Nota:** Si la opción "Include administrators" (Incluir administradores) está seleccionada, has [habilitado las verificaciones de estado requeridas](/articles/enabling-required-status-checks) en la rama, y si las verificaciones de estado fallan, cualquier intento de subir cambios a la rama protegida también fallará, incluso para las personas{% if currentVersion ver_gt "enterprise-server@2.18" %} y las aplicaciones{% endif %} con permisos de administración.

{% endtip %}
