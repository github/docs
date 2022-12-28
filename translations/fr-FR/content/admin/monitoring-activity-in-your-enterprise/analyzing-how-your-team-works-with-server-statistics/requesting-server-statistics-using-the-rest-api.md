---
title: Demande de statistiques de serveur à l’aide de l’API REST
shortTitle: Server Statistics and REST API
intro: 'Vous pouvez utiliser vos propres outils pour analyser votre utilisation de {% data variables.product.prodname_ghe_server %} au fil du temps en demandant les métriques {% data variables.product.prodname_server_statistics %} collectées à l’aide de l’API REST.'
versions:
  feature: server-statistics
redirect_from:
  - /early-access/github/analyze-how-your-team-works-with-server-statistics/requesting-server-statistics-using-the-rest-api
ms.openlocfilehash: d93a51a1d39840187b14480eb91e06e0a4606332
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147409330'
---
Vous pouvez demander jusqu’à 365 jours de métriques dans une seule demande d’API REST {% data variables.product.prodname_server_statistics %}. Ces données, qui incluent des métriques agrégées sur les dépôts, les problèmes et les demandes de tirage, peuvent vous aider à anticiper les besoins de votre organisation, à comprendre le fonctionnement de votre équipe et à mettre en évidence la valeur ajoutée que vous obtenez de {% data variables.product.prodname_ghe_server %}. Pour obtenir la liste des métriques collectées, consultez « [Données {% data variables.product.prodname_server_statistics %} collectées](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/about-server-statistics#server-statistics-data-collected) ».

Avant de pouvoir utiliser l’API REST {% data variables.product.prodname_server_statistics %}, vous devez activer {% data variables.product.prodname_server_statistics %}. Pour plus d’informations, consultez « [Activation de {% data variables.product.prodname_server_statistics %} pour votre entreprise](/admin/configuration/configuring-github-connect/enabling-server-statistics-for-your-enterprise) ». 

Pour plus d’informations sur l’utilisation de l’API REST pour demander des statistiques de serveur, consultez « [Obtenir des statistiques {% data variables.product.prodname_ghe_server %}](/enterprise-cloud@latest/rest/enterprise-admin/admin-stats#get-github-enterprise-server-statistics) » dans la documentation de l’API REST {% data variables.product.prodname_ghe_cloud %}.
