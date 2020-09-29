---
title: Administrar las alertas por dependencias vulnerables en tu organización
intro: 'Los propietarios de organización y los administradores de repositorio reciben las {% data variables.product.prodname_dependabot_alerts %} cuando detectamos una dependencia vulnerable en el repositorio de una organización. Puedes especificar miembros o equipos adicionales de la organización con acceso de escritura para que también reciban alertas de las dependencias vulnerables.'
redirect_from:
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organization-s-repositories/
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organizations-repositories/
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organization
versions:
  free-pro-team: '*'
---

{% if currentVersion == "free-pro-team@latest" %}
{% data reusables.repositories.you-can-manage-access-to-security-alerts %}
{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. En la barra lateral izquierda, da clic en **Alertas del Dependabot**. ![Pestaña de alertas del dependabot en la barra lateral de configuración](/assets/images/help/settings/settings-sidebar-dependabot-alerts.png)
4. Teclea el nombre de la persona o equipo sobre los cuales quieres recibir {% data variables.product.prodname_dependabot_alerts %} cuando {% data variables.product.product_name %} detecte una dependencia vulnerable y, posteriormente, da clic en el nombre de usuario o de equipo para seleccionarlo.
5. Después de que hayas seleccionado a todas las personas o equipos sobre las cuales quieres recibir {% data variables.product.prodname_dependabot_alerts %}, da clic en **Guardar cambios**.

### Leer más

- "[Acerca de las alertas para las dependencias vulnerables](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)"
- "[Ver y actualizar las dependencias vulnerables en tu repositorio](/articles/viewing-and-updating-vulnerable-dependencies-in-your-repository)"
- "[Administrar la seguridad y la configuración de análisis para tu organización](/github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization)"
