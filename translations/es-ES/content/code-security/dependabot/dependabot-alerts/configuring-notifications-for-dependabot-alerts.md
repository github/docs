---
title: Configuración de notificaciones para alertas de Dependabot
shortTitle: Configure notifications
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
ms.openlocfilehash: 570a41570821b61aa68d625c92e6e9384e893f1a
ms.sourcegitcommit: 738c16f6fc6d56d939a80c832497c8bfa28d10c7
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/05/2022
ms.locfileid: '148134896'
---
## Acerca de las notificaciones de {% data variables.product.prodname_dependabot_alerts %}

Cuando {% data variables.product.prodname_dependabot %} detecta las dependencias vulnerables{% ifversion GH-advisory-db-supports-malware %} o el malware{% endif %} en tus repositorios, generamos una alerta del {% data variables.product.prodname_dependabot %} y la mostramos en la pestaña Seguridad del repositorio. {% data variables.product.product_name %} notifica a los mantenedores de los repositorios afectados sobre la alerta nueva de acuerdo con sus preferencias de notificaciones.{% ifversion fpt or ghec %} {% data variables.product.prodname_dependabot %} está habilitado de forma predeterminada en todos los repositorios públicos. En el caso de las {% data variables.product.prodname_dependabot_alerts %}, predeterminadamente, recibirás {% data variables.product.prodname_dependabot_alerts %} por correo electrónico, agrupadas por la vulnerabilidad específica.
{% endif %} 

{% ifversion fpt or ghec %} Si eres propietario de la organización, puedes habilitar o deshabilitar {% data variables.product.prodname_dependabot_alerts %} para todos los repositorios de la organización con un solo clic. También puedes establecer si {% data variables.product.prodname_dependabot_alerts %} se habilitarán o deshabilitarán para los repositorios recién creados. Para más información, vea "[Administración de la configuración de seguridad y análisis para la organización](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization#enabling-or-disabling-a-feature-for-all-new-repositories-when-they-are-added)".
{% endif %}

{% ifversion ghes or ghae %} De forma predeterminada, si el propietario de tu empresa configuró las notificaciones por correo electrónico en ella, recibirás {% data variables.product.prodname_dependabot_alerts %} por este medio.

Los propietarios de empresas también pueden habilitar las {% data variables.product.prodname_dependabot_alerts %} sin notificaciones. Para obtener más información, consulte "[Habilitación de {% data variables.product.prodname_dependabot %} para la empresa](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)".
{% endif %}

## Configurar las notificaciones para las {% data variables.product.prodname_dependabot_alerts %}

{% ifversion fpt or ghes or ghec %} Cuando se detecta una alerta nueva de {% data variables.product.prodname_dependabot %}, {% data variables.product.product_name %} notifica a todos los usuarios del repositorio con acceso a las {% data variables.product.prodname_dependabot_alerts %} de acuerdo con sus preferencias de notificación. Recibirás las alertas si estás observando el repositorio, si habilitas las notificaciones para las alertas de seguridad para toda la actividad del repositorio y si es que no lo estás ignorando. Para más información, vea "[Configuración de notificaciones](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#configuring-your-watch-settings-for-an-individual-repository)".
{% endif %}

Puedes configurar los ajustes de notificaciones para ti mismo o para tu organización desde el menú desplegable de administrar notificaciones {% octicon "bell" aria-label="The notifications bell" %} que se muestra en la parte superior de cada página. Para más información, vea "[Configuración de notificaciones](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#choosing-your-notification-settings)".

{% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization2 %} {% data reusables.notifications.vulnerable-dependency-notification-options %}

{% ifversion update-notification-settings-22 %} ![Captura de pantalla de las opciones de {% data variables.product.prodname_dependabot_alerts %}](/assets/images/help/dependabot/dependabot-notification-frequency.png){% endif %}{% ifversion ghes > 3.7 or ghae > 3.7 %} ![Captura de pantalla de las opciones de {% data variables.product.prodname_dependabot_alerts %}](/assets/images/help/enterprises/dependabot-alerts-options-no-UI.png){% endif %}{% ifversion ghes < 3.8 or ghae < 3.8 %} ![Captura de pantalla de las opciones de {% data variables.product.prodname_dependabot_alerts %}](/assets/images/help/notifications-v2/dependabot-alerts-options.png){% endif %}


{% note %}

**Nota**: Puedes filtrar tus notificaciones en {% data variables.product.company_short %} para mostrar {% data variables.product.prodname_dependabot_alerts %}. Para más información, vea "[Administración de notificaciones de la Bandeja de entrada](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#dependabot-custom-filters)".

{% endnote %}

{% data reusables.repositories.security-alerts-x-github-severity %} Para obtener más información, consulta "[Configuración de notificaciones](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#filtering-email-notifications)".

## Cómo reducir el ruido de las notificaciones de {% data variables.product.prodname_dependabot_alerts %}

Si te preocupa recibir demasiadas notificaciones para las {% data variables.product.prodname_dependabot_alerts %}, te recomendamos que te unas al resumen semanal por correo electrónico o que apagues las notificaciones mientras mantienes habilitadas las {% data variables.product.prodname_dependabot_alerts %}. Todavía puedes navegar para ver los {% data variables.product.prodname_dependabot_alerts %} en la pestaña Seguridad del repositorio. Para obtener más información, consulta "[Visualización y actualización de {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)".

## Información adicional

- "[Configuración de notificaciones](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications)"
- "[Administración de notificaciones desde la bandeja de entrada](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#supported-is-queries)"
