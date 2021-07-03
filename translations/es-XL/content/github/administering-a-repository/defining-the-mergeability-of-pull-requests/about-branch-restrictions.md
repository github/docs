---
title: Acerca de las restricciones de rama
intro: 'Las ramas dentro de los repositorios que pertenecen a organizaciones pueden ser configuradas para que solo ciertos usuarios{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %},{% else %} o{% endif %} equipos{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}, o aplicaciones{% endif %} pueden empujar a la rama.'
product: '{% data reusables.gated-features.branch-restrictions %}'
redirect_from:
  - /articles/about-branch-restrictions
  - /github/administering-a-repository/about-branch-restrictions
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---
Cuando habilitas las restricciones de rama, únicamente los usuarios de {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %},{% else %} o los {% endif %} equipos de {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}, o las palicaciones de {% endif %} a los que se les haya otorgado permiso pueden subir información a la rama protegida. Para obtener más información, consulta "[Habilitar restricciones de rama ](/articles/enabling-branch-restrictions)" y "[Acerca de las ramas protegidas](/articles/about-protected-branches)." Puedes ver y editar los usuarios{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %},{% else %} o{% endif %} los equipos{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}, o las aplicaciones{% endif %} con acceso a la escritura para una rama protegida en las configuraciones de la rama protegida.

Solo puedes brindar acceso de escritura para las ramas protegidas a los usuarios{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %},{% else %} o los{% endif %} equipos{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}, o {% data variables.product.prodname_github_apps %}{% endif %} instalado con acceso de `write` para un repositorio.

Las personas{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %} y las aplicaciones{% endif %} con permisos de administración a un repositorio siempre pueden subir a una rama protegida.

{% tip %}

**Nota:** Si seleccionas "Incluir administradores", habrás habilitado la revisión de estado requerida en la rama, y si cualquier revisión de estado falla, entonces cualquier intento de subir cambios a la rama protegida también fallará, incluso para las personas {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}y aplicaciones {% endif %} con permisos de usuario. Para obtener más información, consulta "[Habilitar las verificaciones de estado requeridas](/articles/enabling-required-status-checks)."

{% endtip %}

### Leer más

- "[Acerca de las ramas protegidas](/articles/about-protected-branches)"
- "[Configurar ramas protegidas](/articles/configuring-protected-branches)"
- "[Acerca de las verificaciones de estado requeridas](/articles/about-required-status-checks)"
- "[Activar verificaciones de estado requeridas](/articles/enabling-required-status-checks)"
