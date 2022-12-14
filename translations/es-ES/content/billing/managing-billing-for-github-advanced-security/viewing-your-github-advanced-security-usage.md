---
title: Visualizar tu uso de GitHub Advanced Security
intro: 'Puedes ver el uso de {% data variables.product.prodname_GH_advanced_security %} de tu empresa.'
permissions: 'Enterprise owners can view usage for {% data variables.product.prodname_GH_advanced_security %}.'
product: '{% data reusables.gated-features.ghas %}'
redirect_from:
  - /billing/managing-licensing-for-github-advanced-security/viewing-your-github-advanced-security-usage
  - /admin/advanced-security/viewing-your-github-advanced-security-usage
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-licensing-for-github-advanced-security/viewing-your-github-advanced-security-usage
  - /github/setting-up-and-managing-your-enterprise/managing-use-of-advanced-security-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-billing-and-payments-on-github/viewing-your-github-advanced-security-usage
versions:
  ghes: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 3
type: how_to
topics:
  - Advanced Security
  - Enterprise
shortTitle: View Advanced Security usage
ms.openlocfilehash: 8647ba2eb00f580256bd3f49ac2218331e45eef3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '146180491'
---
## Acerca de las licencias para {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.advanced-security.about-ghas-license-seats %} Para más información, vea "[Acerca de la facturación de {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)".

{% ifversion ghas-committers-calculator %} Puedes calcular cuántos puestos adicionales se usarán si habilitas {% data variables.product.prodname_GH_advanced_security %} para más organizaciones y repositorios con el panel de administración del sitio. Para obtener más información, consulta "[Panel de administración del sitio](/admin/configuration/configuring-your-enterprise/site-admin-dashboard#advanced-security-active-committers)".
{% endif %}

## Visualizar el uso del licenciamiento de {% data variables.product.prodname_GH_advanced_security %} para tu cuenta empresarial

Puedes verificar cuántas plazas incluye tu licencia y cuántas de ellas se están utilizando.

{% ifversion fpt or ghec %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.license-tab %} En la sección "{% data variables.product.prodname_GH_advanced_security %}" se muestran los detalles del uso actual.
  ![{% data variables.product.prodname_GH_advanced_security %} en la configuración de licencias empresariales](/assets/images/help/enterprises/enterprise-licensing-tab-ghas.png) Si se agotan los puestos, la sección será de color rojo y se mostrará "Límite superado". Debes ya sea reducir tu uso de {% data variables.product.prodname_GH_advanced_security %} o comprar más plazas. Para más información, vea "[Acerca de la facturación de {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security#getting-the-most-out-of-github-advanced-security)".
  ![{% data variables.product.prodname_GH_advanced_security %} en los ajustes de licencias de empresa donde se muestra "Limit superado"](/assets/images/help/enterprises/enterprise-licensing-tab-ghas-no-seats.png)
4. Opcionalmente, para ver un desglose detallado del uso por organización, haga clic en **Facturación** en la barra lateral izquierda.
  ![Pestaña Facturación de la barra lateral de configuración de la cuenta de empresa](/assets/images/help/business-accounts/settings-billing-tab.png) En la sección "{% data variables.product.prodname_GH_advanced_security %}" puede ver el número de confirmadores y confirmadores únicos para cada organización.
  ![{% data variables.product.prodname_GH_advanced_security %} en la configuración de facturación de la empresa](/assets/images/help/billing/ghas-orgs-list-enterprise-dotcom.png)
5. Opcionalmente, haz clic en el nombre de una organización que te pertenezca para mostrar la configuración de seguridad y análisis para la organización.
  ![Organización de su propiedad en la sección {% data variables.product.prodname_GH_advanced_security %} de la configuración de facturación empresarial](/assets/images/help/billing/ghas-orgs-list-enterprise-click-org.png)
6. En la página de configuración "Seguridad y análisis", desplácese hacia la sección de repositorios de "{% data variables.product.prodname_GH_advanced_security %}" para ver un resumen detallado del uso por repositorio en esta organización.
  ![Sección de repositorios de {% data variables.product.prodname_GH_advanced_security %}](/assets/images/help/enterprises/settings-security-analysis-ghas-repos-list.png) Para más información, vea "[Administración de la configuración de seguridad y análisis para la organización](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".

{% elsif ghes %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.license-tab %} En la sección "{% data variables.product.prodname_GH_advanced_security %}" se muestran los detalles del uso actual. Puedes ver la cantidad total de plazas utilizadas, así como una tabla con la cantidad de confirmantes y confirmantes únicos para cada organización.
  ![Sección de la licencia Enterprise de {% data variables.product.prodname_GH_advanced_security %}](/assets/images/help/billing/ghas-orgs-list-enterprise-ghes.png)
5. Opcionalmente, haz clic en el nombre de una organización que te pertenezca para mostrar la configuración de seguridad y análisis para la organización.
  ![Organización de su propiedad en la sección {% data variables.product.prodname_GH_advanced_security %} de la configuración de facturación empresarial](/assets/images/help/billing/ghas-orgs-list-enterprise-click-org.png)
6. En la página de configuración "Seguridad y análisis", desplácese hacia la sección de repositorios de "{% data variables.product.prodname_GH_advanced_security %}" para ver un resumen detallado del uso por repositorio en esta organización.
  ![Sección de repositorios de {% data variables.product.prodname_GH_advanced_security %}](/assets/images/help/enterprises/settings-security-analysis-ghas-repos-list.png) Para más información, vea "[Administración de la configuración de seguridad y análisis para la organización](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".

{% endif %}

{% ifversion ghec or ghes > 3.3 or ghae-issue-5378 %}

## Descargar la información de uso de licencia de {% data variables.product.prodname_GH_advanced_security %}

Puedes descargar un archivo de CSV con la información de uso de licencia de {% data variables.product.prodname_GH_advanced_security %} tanto en los niveles de empresa como de organización. El archivo CSV contiene información sobre cada plaza de {% data variables.product.prodname_advanced_security %} que se encuentra en uso, incluyendo:

- El nombre de la persona que utiliza la plaza
- Los repositorios con la {% data variables.product.prodname_advanced_security %} habilitada en donde se hicieron las confirmaciones
- Las organizaciones a las cuales pertenecen las personas que utilizan las plazas
- Las fechas de confirmación más recientes

Puedes utilizar esta información para obtener perspectivas de cómo se están utilizando las licencias de {% data variables.product.prodname_advanced_security %}, tales como qué miembros de tu empresa están utilizando una plaza de {% data variables.product.prodname_advanced_security %} o cómo se están consumiendo las licencias de {% data variables.product.prodname_advanced_security %} en tus organizaciones.

Puedes descargar el CSV de uso de licencias de {% data variables.product.prodname_advanced_security %} mediante la interfaz de usuario de {% data variables.product.product_name %} o de la API de REST.

### Descargar la información de uso de licencia de {% data variables.product.prodname_advanced_security %} a través de la IU

#### A nivel organizacional

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.billing_plans %}
1. Debajo de "{% data variables.product.prodname_GH_advanced_security %}", haz clic en {% octicon "download" aria-label="The download icon" %} junto a "Confirmantes".
  ![Botón de descarga para los datos de nivel de organización](/assets/images/help/billing/download-organization-GHAS-usage-data.png)

#### A nivel empresarial

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.license-tab %}
1. Debajo de "{% data variables.product.prodname_GH_advanced_security %}", haz clic en {% octicon "download" aria-label="The download icon" %} junto a "Confirmantes".
  ![Botón de descarga para los datos de nivel de empresa](/assets/images/help/billing/download-enterprise-GHAS-usage-data.png)

### Descargar la información de uso de licencia de {% data variables.product.prodname_advanced_security %} a través de la API de REST

Puedes recuperar la información de uso de {% data variables.product.prodname_advanced_security %} a través de la API de facturación.

{% ifversion ghec %}

Para los datos de nivel de organización, use el punto de conexión `/orgs/{org}/settings/billing/advanced-security`. Para más información, vea "[Facturación](/rest/reference/billing#get-github-advanced-security-active-committers-for-an-organization)" en la documentación de la API REST de {% data variables.product.prodname_dotcom %}.

{% endif %}

Para los datos de nivel de empresa, use el punto de conexión `/enterprises/{enterprise}/settings/billing/advanced-security`. Para más información, vea "[Administración de {% data variables.product.prodname_enterprise %}](/rest/reference/enterprise-admin#get-github-advanced-security-active-committers-for-an-enterprise)" en la documentación de la API REST de {% data variables.product.prodname_dotcom %}.

{% endif %}
