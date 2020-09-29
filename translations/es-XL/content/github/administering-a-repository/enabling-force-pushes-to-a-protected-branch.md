---
title: Habilitar subidas de información forzadas en una rama protegida
intro: Puedes permitir subidas de información forzadas en una rama protegida.
product: '{% data reusables.gated-features.protected-branches %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.20'
---

Cualquiera con permisos de administrador en un repositorio puede habilitar las subidas de información forzadas.

### Acerca de las subidas de información forzadas en ramas protegidas

Predeterminadamente, las subidas de información forzadas se encuentran bloqueadas en todas las ramas protegidas. Cuando habilitas estas subidas forzadas en una rama protegida, cualquiera que tenga privilegios por lo menos de escritura en ese repositorio puede forzar la subida de información a la rama, incluyendo aquellos con permisos de administrador.

Habilitar las subidas forzadas no invalidará ninguna otra regla de protección a la rama. Por ejemplo, si una rama requiere un historial de confirmaciones linear, no puedes forzar la subida de fusión de confirmaciones en esa rama.

{% if currentVersion != "free-pro-team@latest" %}No puedes habilitar las subidas forzadas en una rama protegida si un administrador de sitio las ha bloqueado en todas las ramas de tu repositorio. Para obtener más información, consulta "[Bloquear las subidas de información forzadas en los repositorios que sean propiedad de una organización o cuenta de usuario](/enterprise/{{ currentVersion }}/admin/developer-workflow/blocking-force-pushes-to-repositories-owned-by-a-user-account-or-organization)."

Si un administrador de sitio ha bloqueado las subidas de información forzadas en la rama predeterminada únicamente, entonces aún puedes habilitarlas en cualquier otra rama protegida.{% endif %}

{% data reusables.repositories.protected-branches-options %}

### Habilitar subidas de información forzadas

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
{% data reusables.repositories.add-branch-protection-rules %}
6. Debajo de "Reglas aplicadas a todos, incluyendo administradores", selecciona **Permitir subidas de información forzadas**. ![Permitir la opción de subida de información forzada](/assets/images/help/repository/allow-force-pushes.png)
7. Haz clic en **Create** (crear).
