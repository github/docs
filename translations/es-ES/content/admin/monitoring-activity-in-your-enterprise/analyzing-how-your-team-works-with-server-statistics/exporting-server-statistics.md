---
title: Exportación de estadísticas del servidor
shortTitle: Export Server Statistics
intro: 'Puedes usar tus propias herramientas para analizar el uso de {% data variables.product.prodname_ghe_server %} a lo largo del tiempo descargando las métricas de {% data variables.product.prodname_server_statistics %} en un archivo CSV o JSON.'
versions:
  feature: server-statistics
redirect_from:
  - /early-access/github/analyze-how-your-team-works-with-server-statistics/exploring-server-statistics
ms.openlocfilehash: 4e8fa1d040303ec569d11a8a41708ede10b3e76e
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: '147718169'
---
Puede descargar hasta los últimos 365 días de datos de {% data variables.product.prodname_server_statistics %} en un archivo CSV o JSON. Estos datos, que incluyen métricas agregadas en repositorios, problemas y solicitudes de incorporación de cambios, pueden ayudarte a anticipar las necesidades de tu organización, comprender cómo funciona el equipo y mostrar el valor que obtienes de {% data variables.product.prodname_ghe_server %}. 

Para poder descargar estos datos, debes habilitar {% data variables.product.prodname_server_statistics %}. Para más información, consulta "[Habilitación de {% data variables.product.prodname_server_statistics %} para tu empresa](/admin/configuration/configuring-github-connect/enabling-server-statistics-for-your-enterprise)". 

Para obtener una vista previa de las métricas disponibles para su descarga, consulta "[Acerca de {% data variables.product.prodname_server_statistics %}](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/about-server-statistics)".

Para descargar estas métricas, debes ser propietario de la empresa o propietario de la organización en {% data variables.product.prodname_ghe_cloud %}.
  - Si {% data variables.product.product_location %} está conectada a una cuenta de empresa en {% data variables.product.prodname_ghe_cloud %}, consulta "[Descarga de métricas de la cuenta de empresa](#downloading-metrics-from-your-enterprise-account)".
  - Si {% data variables.product.product_location %} está conectada a una organización en {% data variables.product.prodname_ghe_cloud %}, consulta "[Descarga de métricas de la organización](#downloading-metrics-from-your-organization)".

Para más información sobre {% data variables.product.prodname_github_connect %}, consulta "[Acerca de {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/about-github-connect)".

## Descarga de métricas de la cuenta de empresa

1. En la esquina superior derecha de {% data variables.product.prodname_ghe_cloud %}, haz clic en tu foto de perfil y luego en **Tu perfil**.
  ![Menú desplegable con la opción "Tus empresas"](/assets/images/help/enterprises/enterprise-admin-account-settings.png)

2. Junto a la cuenta de empresa deseada, haz clic en **Configuración**.
  ![Botón de configuración junto a la cuenta de administrador Enterprise](/assets/images/help/enterprises/enterprise-admin-account-settings-button.png)

3. A la izquierda, haz clic en **Conectar a GitHub**.
  ![Opción Conectar a GitHub en la cuenta de administrador de empresa](/assets/images//help/enterprises/enterprise-admin-github-connect.png)

{% data reusables.server-statistics.csv-download %}

## Descarga de métricas de la organización

1. En la esquina superior derecha de {% data variables.product.prodname_ghe_cloud %}, haz clic en tu foto de perfil y, luego, en **Tu perfil**.
  ![Menú desplegable con la opción "Tus organizaciones"](/assets/images/help/enterprises/github-enterprise-cloud-organizations.png)

2. En la lista de organizaciones, junto a la organización conectada a {% data variables.product.product_location %}, haz clic en **Configuración**.
  ![Botón de Configuración junto a la organización {% data variables.product.prodname_ghe_cloud %}](/assets/images/help/enterprises/settings-for-ghec-org.png)

3. A la izquierda, haz clic en **Conectar a GitHub**.
  ![Opción Conectar a GitHub en la barra lateral izquierda de la configuración de la cuenta de la organización](/assets/images/help/enterprises/github-connect-option-for-ghec-org.png)

{% data reusables.server-statistics.csv-download %}
