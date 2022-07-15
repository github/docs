---
title: Configurar las notificaciones para las alertas del Dependabot
shortTitle: Configurar notificaciones
intro: 'Optimiza la forma en la que recibes notificaciones de {% data variables.product.prodname_dependabot_alerts %}.'
redirect_from:
  - /github/managing-security-vulnerabilities/configuring-notifications-for-vulnerable-dependencies
  - /code-security/supply-chain-security/configuring-notifications-for-vulnerable-dependencies
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/configuring-notifications-for-vulnerable-dependencies
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Dependabot
  - Alerts
  - Notifications
  - Vulnerabilities
  - Dependencies
  - Repositories
---

## Acerca de las notificaciones para las {% data variables.product.prodname_dependabot_alerts %}

Cuando el {% data variables.product.prodname_dependabot %} detecta dependencias vulnerables{% ifversion GH-advisory-db-supports-malware %} o malware{% endif %} en tus repositorios, generamos una alerta del {% data variables.product.prodname_dependabot %} y la mostramos en la pestaña de seguridad del repositorio. {% data variables.product.product_name %} notifica a los mantenedores de los repositorios afectados sobre la alerta nueva de acuerdo con sus preferencias de notificaciones.{% ifversion fpt or ghec %}El {% data variables.product.prodname_dependabot %} se habilita predeterminadamente en todos los repositorios públicos. En el caso de las {% data variables.product.prodname_dependabot_alerts %}, predeterminadamente, recibirás {% data variables.product.prodname_dependabot_alerts %} por correo electrónico, agrupadas por la vulnerabilidad específica.
{% endif %}

{% ifversion fpt or ghec %}Si eres un propietario de organización, puedes habilitar o inhabilitar las {% data variables.product.prodname_dependabot_alerts %} para todos los repositorios en tu organización con un clic. También puedes configurar si las {% data variables.product.prodname_dependabot_alerts %} se habilitarán o inhabilitarán para los repositorios recién creados. Para obtener más información, consulta la sección "[Administrar la configuración de análisis y seguridad para tu organización](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization#enabling-or-disabling-a-feature-for-all-new-repositories-when-they-are-added)".
{% endif %}

{% ifversion ghes or ghae %}
Predeterminadamente, si el propietario de tu empresa configuró las notificaciones por correo electrónico en ella, recibirás las {% data variables.product.prodname_dependabot_alerts %} por este medio.

Los propietarios de empresas también pueden habilitar las {% data variables.product.prodname_dependabot_alerts %} sin notificaciones. Para obtener más información, consulta la sección "[Habilitar la {% data variables.product.prodname_dependabot %} en tu empresa](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)".
{% endif %}

## Configurar las notificaciones para las {% data variables.product.prodname_dependabot_alerts %}

{% ifversion fpt or ghes or ghec %}
Cuando se detecta una alerta nueva del {% data variables.product.prodname_dependabot %}, {% data variables.product.product_name %} notifica a todos los usuarios del repositorio con acceso a las {% data variables.product.prodname_dependabot_alerts %} de acuerdo con sus preferencias de notificación. Recibirás las alertas si estás observando el repositorio, si habilitas las notificaciones para las alertas de seguridad para toda la actividad del repositorio y si es que no lo estás ignorando. Para obtener más información, consulta la sección "[Configurar las notificaciones](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#configuring-your-watch-settings-for-an-individual-repository)".
{% endif %}

Puedes configurar los ajustes de notificaciones para ti mismo o para tu organización desde el menú desplegable de administrar notificaciones {% octicon "bell" aria-label="The notifications bell" %} que se muestra en la parte superior de cada página. Para obtener más información, consulta la sección "[Configurar las notificaciones](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#choosing-your-notification-settings)".

{% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization2 %}
{% data reusables.notifications.vulnerable-dependency-notification-options %}

  ![Opciones de las {% data variables.product.prodname_dependabot_alerts %}](/assets/images/help/notifications-v2/dependabot-alerts-options.png)

{% note %}

**Nota:** Puedes filtrar tus notificaciones en {% data variables.product.company_short %} para mostrar las {% data variables.product.prodname_dependabot_alerts %}. Para obtener más información, consulta la sección "[Administrar notificación desde tu bandeja de entrada](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#dependabot-custom-filters)".

{% endnote %}

{% data reusables.repositories.security-alerts-x-github-severity %}Para obtener más información, consulta la sección "[Configurar notificaciones](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#filtering-email-notifications)".

## Cómo reducir el ruido de las notificacines para las {% data variables.product.prodname_dependabot_alerts %}

Si te preocupa recibir demasiadas notificaciones para las {% data variables.product.prodname_dependabot_alerts %}, te recomendamos que te unas al resumen semanal por correo electrónico o que apagues las notificaciones mientras mantienes habilitadas las {% data variables.product.prodname_dependabot_alerts %}. Aún puedes navegar para ver tus {% data variables.product.prodname_dependabot_alerts %} en la pestaña de seguridad de tu repositorio. For more information, see "[Viewing and updatng {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)."

## Leer más

- "[Configurar notificaciones](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications)"
- "[Administrar las notificaciones desde tu bandeja de entrada](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#supported-is-queries)"
