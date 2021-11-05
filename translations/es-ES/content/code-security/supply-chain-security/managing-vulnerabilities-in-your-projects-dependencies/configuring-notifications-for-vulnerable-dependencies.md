---
title: Configurar las notificaciones para las dependencias vulnerables
shortTitle: Configurar notificaciones
intro: 'Optimiza la forma en la que recibes las notificaciones sobre las alertas del {% data variables.product.prodname_dependabot %}.'
redirect_from:
  - /github/managing-security-vulnerabilities/configuring-notifications-for-vulnerable-dependencies
  - /code-security/supply-chain-security/configuring-notifications-for-vulnerable-dependencies
versions:
  fpt: '*'
  ghes: '*'
  ghae: issue-4864
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

<!--For this article in earlier GHES versions, see /content/github/managing-security-vulnerabilities-->

## Acerca de las notificaciones para las dependencias vulnerables

Cuando el {% data variables.product.prodname_dependabot %} detecta las dependencias vulnerables en tus repositorios, generamos una alerta del {% data variables.product.prodname_dependabot %} y la mostramos en la pestaña de seguridad del repositorio. {% data variables.product.product_name %} notifica a los mantenedores de los repositorios afectados sobre la alerta nueva de acuerdo con sus preferencias de notificaciones.{% ifversion fpt or ghec %}El {% data variables.product.prodname_dependabot %} se habilita predeterminadamente en todos los repositorios públicos. En el caso de las {% data variables.product.prodname_dependabot_alerts %}, predeterminadamente, recibirás {% data variables.product.prodname_dependabot_alerts %} por correo electrónico, agrupadas por la vulnerabilidad específica.
{% endif %}

{% ifversion fpt or ghec %}Si eres un propietario de organización, puedes habilitar o inhabilitar las {% data variables.product.prodname_dependabot_alerts %} para todos los repositorios en tu organización con un clic. También puedes configurar si se habilitará o inhabilitará la detección de dependencias vulnerables para los repositorios recién creados. Para obtener más información, consulta la sección "[Administrar la configuración de análisis y seguridad para tu organización](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization#enabling-or-disabling-a-feature-for-all-new-repositories-when-they-are-added)".
{% endif %}

{% ifversion ghes or ghae-issue-4864 %}
Predeterminadamente, si el propietario de tu empresa configuró las notificaciones por correo electrónico en ella, recibirás las {% data variables.product.prodname_dependabot_alerts %} por este medio.

Los propietarios de empresas también pueden habilitar las {% data variables.product.prodname_dependabot_alerts %} sin notificaciones. Para obtener más información, consulta la sección "[Habilitar la gráfica de dependencias y las {% data variables.product.prodname_dependabot_alerts %} en tu cuenta empresarial](/admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-the-dependency-graph-and-dependabot-alerts-on-your-enterprise-account)".
{% endif %}

## Configurar las notificaciones para las {% data variables.product.prodname_dependabot_alerts %}

{% ifversion fpt or ghes > 3.1 or ghec %}
Cuando se detecta una alerta nueva del {% data variables.product.prodname_dependabot %}, {% data variables.product.product_name %} notifica a todos los usuarios del repositorio con acceso a las {% data variables.product.prodname_dependabot_alerts %} de acuerdo con sus preferencias de notificación. Recibirás las alertas si estás observando el repositorio, si habilitas las notificaciones para las alertas de seguridad para toda la actividad del repositorio y si es que no lo estás ignorando. Para obtener más información, consulta la sección "[Configurar las notificaciones](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#configuring-your-watch-settings-for-an-individual-repository)".
{% endif %}

Puedes configurar los ajustes de notificaciones para ti mismo o para tu organización desde el menú desplegable de administrar notificaciones {% octicon "bell" aria-label="The notifications bell" %} que se muestra en la parte superior de cada página. Para obtener más información, consulta la sección "[Configurar las notificaciones](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#choosing-your-notification-settings)".

{% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization2 %}
{% data reusables.notifications.vulnerable-dependency-notification-options %}

  ![Opciones de las {% data variables.product.prodname_dependabot_alerts %}](/assets/images/help/notifications-v2/dependabot-alerts-options.png)

{% note %}

**Nota:** Puedes filtrar tus notificaciones en {% data variables.product.company_short %} para mostrar las alertas del {% data variables.product.prodname_dependabot %}. Para recibir más información, consulta la sección "[Administrar las notificaciones desde tu bandeja de entrada](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#dependabot-custom-filters)".

{% endnote %}

{% data reusables.repositories.security-alerts-x-github-severity %}Para obtener más información, consulta la sección "[Configurar notificaciones](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#filtering-email-notifications)".

## Cómo reducir el ruido de las notificaciones para las dependencias vulnerables

Si te preocupa recibir demasiadas notificaciones para las {% data variables.product.prodname_dependabot_alerts %}, te recomendamos que te unas al resumen semanal por correo electrónico o que apagues las notificaciones mientras mantienes habilitadas las {% data variables.product.prodname_dependabot_alerts %}. Aún puedes navegar para ver tus {% data variables.product.prodname_dependabot_alerts %} en la pestaña de seguridad de tu repositorio. Para obtener más información, consulta la sección "[Visualizar y actualizar las dependencias vulnerables en tu repositiorio](/github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository)".

## Leer más

- "[Configurar notificaciones](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications)"
- "[Administrar las notificaciones desde tu bandeja de entrada](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#supported-is-queries)"
