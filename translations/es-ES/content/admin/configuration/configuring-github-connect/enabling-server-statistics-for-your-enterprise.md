---
title: Habilitación de estadísticas de servidor para tu empresa
intro: 'Para analizar tus propios datos agregados de {% data variables.product.prodname_ghe_server %} y ayudarnos a mejorar los productos de {% data variables.product.company_short %}, habilita {% data variables.product.prodname_server_statistics %}.'
versions:
  feature: server-statistics
redirect_from:
  - /early-access/github/analyze-how-your-team-works-with-server-statistics/about-server-statistics/enabling-server-statistics
topics:
  - Enterprise
shortTitle: Server Statistics
ms.openlocfilehash: 125651de793a45240008de34845762e6de637040
ms.sourcegitcommit: 9af8891fea10039b3374c76818634e05410e349d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/06/2022
ms.locfileid: '148191874'
---
## Acerca de {% data variables.product.prodname_server_statistics %}

{% data variables.product.prodname_server_statistics %} collects aggregate usage data from {% data variables.location.product_location %}, que puedes usar para anticipar mejor las necesidades de tu organización, comprender cómo funciona tu equipo y mostrar el valor que obtienes de {% data variables.product.prodname_ghe_server %}. 

{% data variables.product.prodname_server_statistics %} solo recopila determinadas métricas agregadas en repositorios, incidencias, solicitudes de incorporación de cambios y otras características. Tampoco recopilamos contenido de {% data variables.product.prodname_dotcom %}, como código, incidencias, comentarios ni contenido de solicitud de incorporación de cambios. Para obtener más información, consulta «[Acerca de {% data variables.product.prodname_server_statistics %}](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/about-server-statistics)».

Al habilitar {% data variables.product.prodname_server_statistics %}, también estás ayudando a mejorar {% data variables.product.company_short %}. Los datos agregados que nos proporciones nos ayudarán a comprender cómo nuestros clientes usan {% data variables.product.prodname_dotcom %}, y a tomar decisiones mejores y más fundamentadas para los productos, lo cual también te beneficiará a ti.

## Habilitar {% data variables.product.prodname_server_statistics %}

Para poder habilitar {% data variables.product.prodname_server_statistics %}, primero debes conectar la instancia de {% data variables.product.prodname_ghe_server %} a {% data variables.product.prodname_dotcom_the_website %} a través de {% data variables.product.prodname_github_connect %}. Para más información, vea "[Conexión de {% data variables.product.prodname_ghe_server %} a {% data variables.product.prodname_ghe_cloud %}](/enterprise-server@3.1/admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/connecting-github-enterprise-server-to-github-enterprise-cloud)".

Puedes deshabilitar {% data variables.product.prodname_server_statistics %} de {% data variables.product.prodname_ghe_server %} en cualquier momento.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.github-connect-tab %}
4. En «Compartir estadísticas de servidor con GitHub.com», selecciona el menú desplegable y haz clic en **Habilitado** o **Deshabilitado**.
  ![Captura de pantalla del menú desplegable {% data variables.product.prodname_server_statistics %} con opciones deshabilitadas o habilitadas](/assets/images/help/server-statistics/server-statistics-enable-disable-options.png)
