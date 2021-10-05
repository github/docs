---
title: Configurar las notificaciones para las dependencias vulnerables
shortTitle: Configurar notificaciones
intro: 'Optimiza la forma en la que recibes las notificaciones sobre las alertas de  {% ifversion ghes %}{% else %}seguridad{% endif %} del {% data variables.product.prodname_dependabot %}.'
versions:
  ghes: '* <=2.22'
topics:
  - Security
redirect_from:
  - /github/managing-security-vulnerabilities/configuring-notifications-for-vulnerable-dependencies
---

<!--See /content/code-security/supply-chain-security/configuring-notifications-for-vulnerable-dependencies for the current version of this article -->

## Acerca de las notificaciones para las dependencias vulnerables

{% ifversion ghes %}Cuando el {% data variables.product.prodname_dependabot %} detecta dependencias vulnerables en tus repositorios, generamos una alerta del {% data variables.product.prodname_dependabot %} y la mostramos en la pestaña de seguridad del repositorio. {% data variables.product.product_name %} notifica a los mantenedores de los repositorios afectados sobre la alerta nueva de acuerdo con su preferencias de notificación.{% else %}Cuando {% data variables.product.product_name %} detecta dependencias vulnerables en tus repositoris, este envía alertas de seguridad.{% endif %}

{% ifversion ghes %}
Predeterminadamente, si tu administrador de sitio configuró el correo electrónico para las notificaciones de tu empresa, recibirás las {% ifversion ghes %}{% data variables.product.prodname_dependabot_alerts %}{% else %}alertas de seguridad{% endif %} por correo electrónico.{% endif %}

{% ifversion ghes %}Los administradores de sitio también pueden habilitar las {% data variables.product.prodname_dependabot_alerts %} sin notificaciones. Para obtener más información, consulta la sección "[Habilitar las {% data variables.product.prodname_dependabot_alerts %} para las dependencias vulnerables en {% data variables.product.prodname_ghe_server %}](/enterprise/{{ currentVersion }}/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server)".{% endif %}

## Configurar las notificaciones para {% ifversion ghes %}las alertas de seguridad del {% data variables.product.prodname_dependabot_alerts %}{% else %}{% endif %}

Puedes configurar los ajustes de notificaciones para ti mismo o para tu organización desde el menú desplegable de administrar notificaciones {% octicon "bell" aria-label="The notifications bell" %} que se muestra en la parte superior de cada página. Para obtener más información, consulta la sección "[Configurar las notificaciones](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#choosing-your-notification-settings)".

{% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization %}
{% data reusables.notifications.vulnerable-dependency-notification-options %}

{% ifversion ghes %}
  ![Opciones de las {% data variables.product.prodname_dependabot_alerts %}](/assets/images/help/notifications-v2/dependabot-alerts-options.png)
{% else %}
  ![Opciones de alertas de seguridad](/assets/images/help/notifications-v2/security-alerts-options.png)
{% endif %}

{% note %}

**Nota:** Puedes filtrar las notificaciones de {% data variables.product.company_short %} para mostrar las alertas de {% ifversion fpt or ghes %}{% else %}seguridad{% endif %} del {% data variables.product.prodname_dependabot %}. Para recibir más información, consulta la sección "[Administrar las notificaciones desde tu bandeja de entrada](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#dependabot-custom-filters)".

{% endnote %}

{% data reusables.repositories.security-alerts-x-github-severity %}Para obtener más información, consulta la sección "[Configurar notificaciones](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#filtering-email-notifications)".

## Cómo reducir el ruido de las notificaciones para las dependencias vulnerables

Si te preocupa recibir demasiadas notificaciones para {% ifversion ghes %}las {% else %}alertas de seguridad{% endif %} del {% data variables.product.prodname_dependabot_alerts %}, te recomendamos que decidas ingresar en el resúmen semanal por correo electrónico, o apagar las notificaciones mientras aún tienes {% ifversion ghes %} las {% else %}alertas de seguridad{% endif %} de las {% data variables.product.prodname_dependabot_alerts %} habilitadas. Aún puedes navegar para ver tus {% ifversion ghes %}{% data variables.product.prodname_dependabot_alerts %}{% else %}alertas de seguridad{% endif %} en la pestaña de Seguridad de tu repositorio.

## Leer más

- "[Configurar notificaciones](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications)"
- "[Administrar las notificaciones desde tu bandeja de entrada](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#supported-is-queries)"
