---
title: Ver el resumen de seguridad
intro: Navegar a las diversas vistas disponibles en el resumen de seguridad
permissions: '{% data reusables.security-overview.permissions %}'
product: '{% data reusables.gated-features.security-overview %}'
allowTitleToDifferFromFilename: true
versions:
  ghae: '>= 3.4'
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Security overview
  - Advanced Security
  - Alerts
  - Organizations
  - Teams
shortTitle: View the security overview
ms.openlocfilehash: bc802d290406bb4e480050ee21bb7a4687475d97
ms.sourcegitcommit: 094dff459fcbf7d0634930e02405606dfffd7f0a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/12/2022
ms.locfileid: '148163223'
---
{% ifversion ghes < 3.5 or ghae %} {% data reusables.security-overview.beta %} {% endif %}

{% data reusables.security-overview.information-varies-GHAS %}

## Visualizar el resumen de seguridad de una organización

{% data reusables.security-overview.beta-org-risk-coverage %}

{% ifversion security-overview-org-risk-coverage %} {% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.security-overview %}
1. Elige la información general que deseas mostrar en las opciones de la barra lateral.
1. Usa los filtros desplegables y el cuadro de búsqueda para centrarte en la información de mayor interés. Las vistas "Riesgo de seguridad" y "Cobertura de seguridad" también tienen un encabezado interactivo que puedes usar para filtrar los resultados.

  ![Captura de pantalla de la vista Riesgo de seguridad con el encabezado interactivo resaltado](/assets/images/help/security-overview/security-risk-interactive-header.png)

{% else %}

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.security-overview %}
1. Para ver información agregada sobre los tipos de alerta, haga clic en **Show more**.
  ![Botón Mostrar más](/assets/images/help/security-overview/security-overview-show-more-button.png) {% data reusables.organizations.filter-security-overview %} {% ifversion security-overview-alert-views %} {% data reusables.organizations.security-overview-feature-specific-page %} ![Captura de pantalla de la página específica del examen de código](/assets/images/help/security-overview/security-overview-code-scanning-alerts.png) {% endif %}

{% endif %}

{% ifversion ghec or ghes > 3.4 or ghae > 3.4 %}
## Ver el resumen de seguridad de una empresa

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
1. En la barra lateral izquierda, haga clic en {% octicon "shield" aria-label="The shield icon" %} **Code Security**.
{% ifversion security-overview-feature-specific-alert-page %} {% data reusables.organizations.security-overview-feature-specific-page %} {% endif %}

{% endif %}

{% ifversion ghes < 3.7 or ghae < 3.7 %}
## Visualizar el resumen de seguridad de un equipo

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team-security-overview %} {% data reusables.organizations.filter-security-overview %} {% endif %}
