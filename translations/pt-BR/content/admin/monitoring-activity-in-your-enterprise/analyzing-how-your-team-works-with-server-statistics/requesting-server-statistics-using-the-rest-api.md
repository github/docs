---
title: Solicitando estatísticas de servidor usando a API REST
shortTitle: Server Statistics and REST API
intro: 'Você pode usar suas próprias ferramentas para analisar o uso de {% data variables.product.prodname_ghe_server %} ao longo do tempo solicitando as métricas de {% data variables.product.prodname_server_statistics %} coletadas usando a API REST.'
versions:
  feature: server-statistics
redirect_from:
  - /early-access/github/analyze-how-your-team-works-with-server-statistics/requesting-server-statistics-using-the-rest-api
ms.openlocfilehash: d93a51a1d39840187b14480eb91e06e0a4606332
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147409328'
---
Você pode solicitar até 365 dias de métricas em uma única solicitação de API REST de {% data variables.product.prodname_server_statistics %}. Esses dados, que incluem métricas de agregação em repositórios, problemas e solicitações de pull, podem ajudar você a antecipar as necessidades de sua organização, entender como sua equipe trabalha e mostrar o valor obtido do {% data variables.product.prodname_ghe_server %}. Para obter uma lista das métricas coletadas, confira "[Dados coletados de {% data variables.product.prodname_server_statistics %}](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/about-server-statistics#server-statistics-data-collected)".

Para usar a API REST do {% data variables.product.prodname_server_statistics %}, você deve habilitar {% data variables.product.prodname_server_statistics %}. Para obter mais informações, confira "[Como habilitar {% data variables.product.prodname_server_statistics %} em sua empresa](/admin/configuration/configuring-github-connect/enabling-server-statistics-for-your-enterprise)". 

Para obter mais informações sobre como usar a API REST para solicitar estatísticas do servidor, confira "[Obter estatísticas do {% data variables.product.prodname_ghe_server %}](/enterprise-cloud@latest/rest/enterprise-admin/admin-stats#get-github-enterprise-server-statistics)" na documentação da API REST do {% data variables.product.prodname_ghe_cloud %}.
