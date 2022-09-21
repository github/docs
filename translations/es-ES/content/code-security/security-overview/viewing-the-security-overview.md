---
title: Ver el resumen de seguridad
intro: Navegar a las diversas vistas disponibles en el resumen de seguridad
permissions: '{% data reusables.security-overview.permissions %}'
product: '{% data reusables.gated-features.security-overview %}'
versions:
  ghae: issue-5503
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
ms.openlocfilehash: a0b6371155e7b7780ea216373b42481aa403e6db
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147525693'
---
{% ifversion ghes < 3.5 or ghae %} {% data reusables.security-overview.beta %} {% endif %}

{% data reusables.security-overview.information-varies-GHAS %}

## Visualizar el resumen de seguridad de una organización

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.security-overview %}
1. Para ver información agregada sobre los tipos de alerta, haga clic en **Show more**.
  ![Botón Mostrar más](/assets/images/help/organizations/security-overview-show-more-button.png) {% data reusables.organizations.filter-security-overview %} {% ifversion security-overview-views %} {% data reusables.organizations.security-overview-feature-specific-page %} ![Captura de pantalla de la página específica del examen de código](/assets/images/help/organizations/security-overview-code-scanning-alerts.png)

## Visualizar las alertas en toda tu organización

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.security-overview %}
1. En la barra lateral de seguridad, selecciona el subconjunto de alertas que quieras ver.
![Visualizar un subconjunto de alertas](/assets/images/help/organizations/view-alert-subset.png)
2. Opcionalmente, filtra la lista de alertas. Cada vista tiene su propia selección de filtros disponibles. Puedes hacer clic en varios filtros de los menús desplegables de filtros para especificar tu búsqueda. También puedes teclear calificadores de búsqueda en el campo de búsqueda. Para obtener más información sobre los calificadores disponibles, consulte "[Filtrar alertas en el resumen de seguridad](/code-security/security-overview/filtering-alerts-in-the-security-overview)".
  ![Los menús de filtro desplegables y el campo de búsqueda de repositorios en la vista de análisis de secretos](/assets/images/help/organizations/secret-scanning-filter-alerts.png)

{% ifversion ghec or ghes > 3.4 or ghae-issue-6199 %}
## Ver el resumen de seguridad de una empresa

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
1. En la barra lateral izquierda, haga clic en {% octicon "shield" aria-label="The shield icon" %} **Code Security**.
{% ifversion security-overview-feature-specific-alert-page %} {% data reusables.organizations.security-overview-feature-specific-page %} {% endif %} {% endif %}

## Visualizar las alertas para un repositorio

{% data reusables.repositories.navigate-to-repo %}
1. Debajo del nombre del repositorio, haga clic en **Security** (Seguridad).
  ![Pestaña Security del repositorio](/assets/images/help/repository/security-tab.png)
2. En la barra lateral de seguridad, selecciona la vista que quieras abrir.
  ![Subconjunto de alertas de la vista del repositorio](/assets/images/help/repository/repo-security-side-panel.png)
3. Opcionalmente, filtra la lista de alertas. Cada vista tiene su propia selección de filtros disponibles. Puedes hacer clic en varios filtros de los menús desplegables de filtros para especificar tu búsqueda. También puedes teclear calificadores de búsqueda en el campo de búsqueda. Para obtener más información sobre los calificadores disponibles, consulte "[Filtrar alertas en el resumen de seguridad](/code-security/security-overview/filtering-alerts-in-the-security-overview)".
  ![Menús de filtro desplegables en la vista de alertas de análisis de secretos del repositorio](/assets/images/help/repository/repo-code-scanning-filter-and-search.png)

{% endif %}

## Visualizar el resumen de seguridad de un equipo

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team-security-overview %} {% data reusables.organizations.filter-security-overview %}
