---
title: Habilitar la eliminación de una rama protegida
intro: Puedes permitir que cualquiera que tenga acceso de escritura para un repositorio borre una rama protegida.
product: '{% data reusables.gated-features.protected-branches %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.20'
redirect_from:
  - /github/administering-a-repository/enabling-deletion-of-a-protected-branch
---
Cualquiera con permisos de administrador para un repositorio puede habilitar eliminaciones de ramas.

Por defecto, no puedes eliminar una rama protegida. Cuando habilitas la eliminación a una rama protegida, cualquiera con al menos permisos de escritura en el repositorio puede eliminar la rama incluyendo aquellos con permisos de administración.

{% data reusables.repositories.protected-branches-options %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
{% data reusables.repositories.add-branch-protection-rules %}
6. En la sección "Reglas aplicadas a todos, incluidos los administradores", selecciona **Allow deletions**. ![Opción para habilitar las eliminaciones de ramas](/assets/images/help/repository/allow-branch-deletions.png)
7. Haz clic en **Create** (crear).
