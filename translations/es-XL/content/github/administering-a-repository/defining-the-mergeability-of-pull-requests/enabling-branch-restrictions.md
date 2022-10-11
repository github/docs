---
title: Habilitar restricciones de rama
intro: 'Puedes imponer restricciones de rama para que solo ciertos usuarios {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %},{% else %} o{% endif %} equipos{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}, o aplicaciones{% endif %} puedan subir información a las ramas protegidas en los repositorios que sean propiedad de tu organización.'
product: '{% data reusables.gated-features.branch-restrictions %}'
redirect_from:
  - /articles/enabling-branch-restrictions
  - /github/administering-a-repository/enabling-branch-restrictions
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---
Cualquiera que tenga permisos de administrador en un repositorio que pertenezca a una organización puede habilitar las restricciones de rama.

{% data reusables.repositories.protected-branches-options %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
{% data reusables.repositories.add-branch-protection-rules %}
{% data reusables.repositories.include-administrators %}
6. Selecciona **Restringir quién puede subir información a las ramas correspondientes** bajo "Proteger las ramas correspondientes". ![Casilla de verificación para restricción de rama](/assets/images/help/repository/restrict-branch.png)
8. Busca y selecciona a las personas {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %},{% else %} o{% endif %} equipos{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}, o aplicaciones{% endif %} que tendrán permiso de subir información a la rama protegida. ![Búsqueda de restricciones de rama](/assets/images/help/repository/restrict-branch-search.png)
9. Haz clic en **Create** (crear).

### Leer más

- "[Acerca de las ramas protegidas](/github/administering-a-repository/about-protected-branches)"
- "[Configurar ramas protegidas](/github/administering-a-repository/configuring-protected-branches)"
- "[Acerca de las verificaciones de estado requeridas](/github/administering-a-repository/about-required-status-checks)"
- "[Activar verificaciones de estado requeridas](/github/administering-a-repository/enabling-required-status-checks)"
