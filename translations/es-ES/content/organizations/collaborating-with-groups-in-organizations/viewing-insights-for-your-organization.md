---
title: Ver información de tu organización
intro: 'La información de tu organización brinda datos acerca de la actividad, las contribuciones y las dependencias de tu organización.'
redirect_from:
  - /articles/viewing-insights-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/viewing-insights-for-your-organization
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: View organization insights
permissions: Organization members can view organization insights.
ms.openlocfilehash: 5398d60f6a937c35e188dc97e44bf25b01b6d676
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145135228'
---
## Acerca de las perspectivas de la organización

Puedes utilizar la información sobre la actividad de la organización para ayudarte a comprender mejor cómo los miembros de tu organización están utilizando {% data variables.product.product_name %} para colaborar y trabajar con el código. La información sobre las dependencias puede ayudarte a rastrear, informar y actuar en relación al uso del código abierto de tu organización.

{% note %}

**Nota**: Para ver la información de la organización, esta debe usar {% data variables.product.prodname_ghe_cloud %}. {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %}

## Ver la información de la actividad de la organización

{% note %}

**Nota**: La información sobre la actividad de la organización se encuentra actualmente en versión beta pública y está sujeta a cambios.

{% endnote %}

Con la información sobre la actividad de la organización puedes ver semanal, mensual y anualmente las visualizaciones de datos de toda tu organización o de repositorios específicos, incluida la actividad de las propuestas y las solicitudes de extracción, los principales lenguajes utilizados e información acumulada sobre dónde los miembros de tu organización pasan su tiempo.

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %}
3. En el nombre de la organización, haga clic en {% octicon "graph" aria-label="The bar graph icon" %} **Insights** (Información).
  ![Clic en la pestaña de información de la organización](/assets/images/help/organizations/org-nav-insights-tab.png)
4. Opcionalmente, en la esquina superior derecha de la página, elija ver los datos de la **última semana**, el **último mes** o el **último año**.
  ![Selección de un periodo de tiempo para ver la información de la organización](/assets/images/help/organizations/org-insights-time-period.png)
5. Opcionalmente, en la esquina superior derecha de la página, elija ver datos de hasta tres repositorios y haga clic en **Apply** (Aplicar).
  ![Selección de repositorios para ver la información de la organización](/assets/images/help/organizations/org-insights-repos.png)

## Ver información sobre dependencias de la organización

{% note %}

**Nota**: Asegúrese de que ha habilitado el [Gráfico de dependencias](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-the-dependency-graph). 

{% endnote %}

Con la información sobre las dependencias puedes ver vulnerabilidades, licencias y otra información importante de los proyectos de código abierto de los que depende tu organización.

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %}
3. En el nombre de la organización, haga clic en {% octicon "graph" aria-label="The bar graph icon" %} **Insights** (Información).
  ![Pestaña de información en la barra de navegación principal de la organización](/assets/images/help/organizations/org-nav-insights-tab.png)
4. Para ver las dependencias de esta organización, haga clic en **Dependencies** (Dependencias).
  ![Pestaña de dependencias debajo de la barra de navegación principal de la organización](/assets/images/help/organizations/org-insights-dependencies-tab.png)
5. Para ver la información de las dependencias de todas las organizaciones {% data variables.product.prodname_ghe_cloud %}, haga clic en **My organizations** (Mis organizaciones).
  ![Botón Mis organizaciones en la pestaña de dependencias](/assets/images/help/organizations/org-insights-dependencies-my-orgs-button.png)
6. Puede hacer clic en los resultados en los gráficos **Open security advisories** (Abrir avisos de seguridad) y **Licenses** (Licencias) para filtrar por un estado de vulnerabilidad, una licencia o una combinación de los dos.
  ![Gráficos de "las vulnerabilidades de mis organizaciones" y de licencias](/assets/images/help/organizations/org-insights-dependencies-graphs.png)
7. Puede hacer clic en {% octicon "package" aria-label="The package icon" %} **dependents** (dependientes) junto a cada vulnerabilidad para ver qué dependiente en su organización está usando cada biblioteca.
  ![Dependientes vulnerables de mis organizaciones](/assets/images/help/organizations/org-insights-dependencies-vulnerable-item.png)

## Información adicional
 - "[Acerca de las organizaciones](/organizations/collaborating-with-groups-in-organizations/about-organizations)"
 - "[Exploración de las dependencias de un repositorio](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)"
 - "[Cambio de la visibilidad de la información de dependencias de la organización](/organizations/managing-organization-settings/changing-the-visibility-of-your-organizations-dependency-insights)"{% ifversion ghec %}
- "[Aplicación de directivas para la información de dependencias en su empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-dependency-insights-in-your-enterprise)"{% endif %}
