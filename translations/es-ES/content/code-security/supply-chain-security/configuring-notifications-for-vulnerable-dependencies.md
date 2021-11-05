---
title: Configurar las notificaciones para las dependencias vulnerables
shortTitle: Configurar notificaciones
intro: 'Optimiza la forma en la que recibes las notificaciones sobre las alertas del {% data variables.product.prodname_dependabot %}.'
redirect_from:
  - /github/managing-security-vulnerabilities/configuring-notifications-for-vulnerable-dependencies
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
topics:
  - Security
---

<!--For this article in earlier GHES versions, see /content/github/managing-security-vulnerabilities-->

### Acerca de las notificaciones para las dependencias vulnerables

Cuando el {% data variables.product.prodname_dependabot %} detecta las dependencias vulnerables en tus repositorios, generamos una alerta del {% data variables.product.prodname_dependabot %} y la mostramos en la pestaña de seguridad del repositorio. {% data variables.product.product_name %} notifica a los mantenedores de los repositorios afectados sobre la alerta nueva de acuerdo con sus preferencias de notificaciones.{% if currentVersion == "free-pro-team@latest" %}El {% data variables.product.prodname_dependabot %} se habilita predeterminadamente en todos los repositorios públicos. En el caso de las {% data variables.product.prodname_dependabot_alerts %}, predeterminadamente, recibirás {% data variables.product.prodname_dependabot_alerts %} por correo electrónico, agrupadas por la vulnerabilidad específica.
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}Si eres un propietario de organización, puedes habilitar o inhabilitar las {% data variables.product.prodname_dependabot_alerts %} para todos los repositorios en tu organización con un clic. También puedes configurar si se habilitará o inhabilitará la detección de dependencias vulnerables para los repositorios recién creados. Para obtener más información, consulta la sección "[Administrar la configuración de análisis y seguridad para tu organización](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization#enabling-or-disabling-a-feature-for-all-new-repositories-when-they-are-added)".
{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.20" %}
Predeterminadamente, si tu administrador de sitio configuró el correo electrónico para las notificaciones de tu empresa, recibirás {% data variables.product.prodname_dependabot_alerts %} por correo electrónico.{% endif %}

{% if currentVersion ver_gt "enterprise-server@2.21" %}Los administradores de sitio también pueden habilitar las {% data variables.product.prodname_dependabot_alerts %} sin notificaciones. Para obtener más información, consulta la sección "[Habilitar las {% data variables.product.prodname_dependabot_alerts %} para las dependencias vulnerables en {% data variables.product.prodname_ghe_server %}](/enterprise/{{ currentVersion }}/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server)".{% endif %}

### Configurar las notificaciones para las {% data variables.product.prodname_dependabot_alerts %}

Puedes configurar los ajustes de notificaciones para ti mismo o para tu organización desde el menú desplegable de administrar notificaciones {% octicon "bell" aria-label="The notifications bell" %} que se muestra en la parte superior de cada página. Para obtener más información, consulta la sección "[Configurar las notificaciones](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#choosing-your-notification-settings)".

{% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization %}
{% data reusables.notifications.vulnerable-dependency-notification-options %}

  ![Opciones de las {% data variables.product.prodname_dependabot_alerts %}](/assets/images/help/notifications-v2/dependabot-alerts-options.png)

{% note %}

**Nota:** Puedes filtrar tus notificaciones en {% data variables.product.company_short %} para mostrar las alertas del {% data variables.product.prodname_dependabot %}. Para recibir más información, consulta la sección "[Administrar las notificaciones desde tu bandeja de entrada](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#dependabot-custom-filters)".

{% endnote %}

{% data reusables.repositories.security-alerts-x-github-severity %}Para obtener más información, consulta la sección "[Configurar notificaciones](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#filtering-email-notifications)".

### Cómo reducir el ruido de las notificaciones para las dependencias vulnerables

Si te preocupa recibir demasiadas notificaciones para las {% data variables.product.prodname_dependabot_alerts %}, te recomendamos que te unas al resumen semanal por correo electrónico o que apagues las notificaciones mientras mantienes habilitadas las {% data variables.product.prodname_dependabot_alerts %}. Aún puedes navegar para ver tus {% data variables.product.prodname_dependabot_alerts %} en la pestaña de seguridad de tu repositorio. Para obtener más información, consulta la sección "[Visualizar y actualizar las dependencias vulnerables en tu repositiorio](/github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository)".

### Leer más

- "[Configurar notificaciones](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications)"
- "[Administrar las notificaciones desde tu bandeja de entrada](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#supported-is-queries)"
