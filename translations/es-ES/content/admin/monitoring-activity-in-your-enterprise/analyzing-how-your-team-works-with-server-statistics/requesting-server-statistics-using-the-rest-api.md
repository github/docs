---
title: Solicitud de estadísticas del servidor mediante la API REST
shortTitle: Server Statistics and REST API
intro: 'Puedes usar tus propias herramientas para analizar el uso de {% data variables.product.prodname_ghe_server %} a lo largo del tiempo solicitando las métricas {% data variables.product.prodname_server_statistics %} recopiladas mediante la API REST.'
versions:
  feature: server-statistics
redirect_from:
  - /early-access/github/analyze-how-your-team-works-with-server-statistics/requesting-server-statistics-using-the-rest-api
ms.openlocfilehash: d93a51a1d39840187b14480eb91e06e0a4606332
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147409335'
---
Puedes solicitar las métricas de hasta 365 días en una única solicitud de API REST de {% data variables.product.prodname_server_statistics %}. Estos datos, que incluyen métricas agregadas en repositorios, incidencias y solicitudes de incorporación de cambios, pueden ayudarte a anticipar las necesidades de la organización, comprender cómo trabaja el equipo y mostrar el valor que obtienes de {% data variables.product.prodname_ghe_server %}. Para obtener una lista de las métricas recopiladas, consulta "[Datos de {% data variables.product.prodname_server_statistics %} recopilados](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/about-server-statistics#server-statistics-data-collected)".

Para poder usar la API REST de {% data variables.product.prodname_server_statistics %}, debes habilitar las {% data variables.product.prodname_server_statistics %}. Para obtener más información, consulta "[Habilitación de {% data variables.product.prodname_server_statistics %} para la empresa](/admin/configuration/configuring-github-connect/enabling-server-statistics-for-your-enterprise)". 

Para obtener más información sobre el uso de la API REST para solicitar estadísticas del servidor, consulta "[Obtención de estadísticas de {% data variables.product.prodname_ghe_server %}](/enterprise-cloud@latest/rest/enterprise-admin/admin-stats#get-github-enterprise-server-statistics)" en la documentación de la API REST de {% data variables.product.prodname_ghe_cloud %}.
