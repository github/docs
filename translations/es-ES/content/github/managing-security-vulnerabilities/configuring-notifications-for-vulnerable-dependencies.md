---
title: Configurar las notificaciones para las dependencias vulnerables
shortTitle: Configurar notificaciones
intro: 'Optimiza la forma en la que recibes las notificaciones sobre las alertas de  {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% else %}seguridad{% endif %} del {% data variables.product.prodname_dependabot %}.'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.21'
---

### Acerca de las notificaciones para las dependencias vulnerables

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}Cuando el {% data variables.product.prodname_dependabot %} detecta dependencias vulnerables en tus repositorios, generamos una alerta del {% data variables.product.prodname_dependabot %} y la mostramos en la pestaña de seguridad del repositorio. {% data variables.product.product_name %} notifica a los mantenedores de los repositorios afectados sobre la alerta nueva de acuerdo con sus preferencias de notificación.{% else %}Cuando{% data variables.product.product_name %} detecta dependencias vulnerables en tus repositorios, manda alertas de seguridad.{% endif %}{% if currentVersion == "free-pro-team@latest" %} El {% data variables.product.prodname_dependabot %} se habilita predeterminadamente en todos los repositorios públicos. En el caso de las {% data variables.product.prodname_dependabot_alerts %}, predeterminadamente, recibirás {% data variables.product.prodname_dependabot_alerts %} por correo electrónico, agrupadas por la vulnerabilidad específica.
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}Si eres un propietario de organización, puedes habilitar o inhabilitar las {% data variables.product.prodname_dependabot_alerts %} para todos los repositorios en tu organización con un clic. También puedes configurar si se habilitará o inhabilitará la detección de dependencias vulnerables para los repositorios recién creados. Para obtener más información, consulta la sección "[Administrar la configuración de análisis y seguridad para tu organización](/github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization#enabling-or-disabling-a-feature-for-all-new-repositories-when-they-are-added)".
{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion == "enterprise-server@2.21" %}
Tu administrador de sitio necesita habilitar las alertas de seguridad para las dependencias vulnerables de
{% data variables.product.product_location %} antes de que puedas utilizar la característica. Para obtener más información, consulta la sección "[Habilitar las alertas para las dependencias vulnerables en {% data variables.product.prodname_ghe_server %}](/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server)".{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.20" %}
Predeterminadamente, si tu administrador de sitio configuró el correo electrónico para notificaciones en tu empresa, recibirás
{% if currentVersion ver_gt "enterprise-server@2.21" %}Alertas de {% else %}seguridad{% endif %} del {% data variables.product.prodname_dependabot_alerts %} por correo electrónico.{% endif %}

{% if currentVersion ver_gt "enterprise-server@2.21" %}Los administradores de sitio también pueden habilitar las {% data variables.product.prodname_dependabot_alerts %} sin notificaciones. Para obtener más información, consulta la sección "[Habilitar las {% data variables.product.prodname_dependabot_alerts %} para las dependencias vulnerables en {% data variables.product.prodname_ghe_server %}](/enterprise/{{ currentVersion }}/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server)".{% endif %}

{% if currentVersion ver_lt "enterprise-server@2.22" %}Los administradores de sitio también pueden habilitar las alertas de seguridad sin notificaciones. Para obtener más información, consulta la sección "[Habilitar las alertas de seguridad para las dependencias vulnerables en {% data variables.product.prodname_ghe_server %}](/enterprise/{{ currentVersion }}/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server)".{% endif %}

### Configurar notificaciones para las {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}alertas de seguridad del {% data variables.product.prodname_dependabot_alerts %}{% else %}{% endif %}

Puedes configurar los ajustes de notificaciones para ti mismo o para tu organización desde el menú desplegable de administrar notificaciones {% octicon "bell" aria-label="The notifications bell" %} que se muestra en la parte superior de cada página. Para obtener más información, consulta la sección "[Configurar las notificaciones](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#choosing-your-notification-settings)".

{% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization %}
{% data reusables.notifications.vulnerable-dependency-notification-options %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
  ![Opciones de las {% data variables.product.prodname_dependabot_alerts %}](/assets/images/help/notifications-v2/dependabot-alerts-options.png)
{% else %}
  ![Opciones de alertas de seguridad](/assets/images/help/notifications-v2/security-alerts-options.png)
{% endif %}

{% note %}

**Note:** You can filter your notifications on {% data variables.product.company_short %} to show {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot %}{% else %} security{% endif %} alerts. Para recibir más información, consulta la sección "[Administrar las notificaciones desde tu bandeja de entrada](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#dependabot-custom-filters)".

{% endnote %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" % %}{% data reusables.repositories.security-alerts-x-github-severity %} Para obtener más información, consulta la sección"[Configurar las notificaciones](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#filtering-email-notifications){% else %}"[Acerca de las notificaciones por correo electrónico](/github/receiving-notifications-about-activity-on-github/about-email-notifications){% endif %}".{% endif %}

### Cómo reducir el ruido de las notificaciones para las dependencias vulnerables

Si te preocupa recibir demasiadas notificaciones para {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}las {% else %}alertas de seguridad{% endif %} del {% data variables.product.prodname_dependabot_alerts %}, te recomendamos que decidas ingresar en el resúmen semanal por correo electrónico, o apagar las notificaciones mientras aún tienes {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %} las {% else %}alertas de seguridad{% endif %} de las {% data variables.product.prodname_dependabot_alerts %} habilitadas. Aún puedes navegar para ver tus {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% else %}alertas de seguridad{% endif %} del {% data variables.product.prodname_dependabot_alerts %} en la pestaña de seguridad de tu repositorio.{% if currentVersion == "free-pro-team@latest" %} Para obtener más información, consulta la sección "[Visualizar y actualizar las dependencias vulnerables en tu repositorio](/github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository)".{% endif %}

### Further reading

- "[Configurar notificaciones](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications)"
- "[Administrar las notificaciones desde tu bandeja de entrada](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#supported-is-queries)"
