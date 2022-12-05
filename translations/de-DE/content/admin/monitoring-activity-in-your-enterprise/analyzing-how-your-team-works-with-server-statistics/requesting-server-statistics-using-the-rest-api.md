---
title: Anfordern von Serverstatistiken mithilfe der REST-API
shortTitle: Server Statistics and REST API
intro: 'Du kannst deine eigenen Tools verwenden, um deine {% data variables.product.prodname_ghe_server %}-Nutzung im Zeitverlauf zu analysieren, indem du die {% data variables.product.prodname_server_statistics %}-Metriken anforderst, die mithilfe der REST-API gesammelt wurden.'
versions:
  feature: server-statistics
redirect_from:
  - /early-access/github/analyze-how-your-team-works-with-server-statistics/requesting-server-statistics-using-the-rest-api
ms.openlocfilehash: d93a51a1d39840187b14480eb91e06e0a4606332
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147409331'
---
Mit einer einzigen REST-API-Anforderung für {% data variables.product.prodname_server_statistics %} kannst du Metriken für bis zu 365 Tage anfordern. Diese Daten enthalten aggregierte Metriken zu Repositorys, Issues und Pull Requests, die helfen können, die Bedürfnisse deiner Organisation zu antizipieren, zu verstehen, wie dein Team arbeitet, und den Wert zu zeigen, den du von {% data variables.product.prodname_ghe_server %} erhältst. Eine Liste der erfassten Metriken findest du unter [Erfasste {% data variables.product.prodname_server_statistics %}-Daten](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/about-server-statistics#server-statistics-data-collected).

Bevor du die REST-API für {% data variables.product.prodname_server_statistics %} verwenden kannst, musst du {% data variables.product.prodname_server_statistics %} aktivieren. Weitere Informationen findest du unter [Aktivieren von {% data variables.product.prodname_server_statistics %} für dein Unternehmen](/admin/configuration/configuring-github-connect/enabling-server-statistics-for-your-enterprise). 

Weitere Informationen zum Verwenden der REST-API zum Anfordern von Serverstatistiken findest du unter [Abrufen von {% data variables.product.prodname_ghe_server %}-Statistiken](/enterprise-cloud@latest/rest/enterprise-admin/admin-stats#get-github-enterprise-server-statistics) in der REST-API-Dokumentation zu {% data variables.product.prodname_ghe_cloud %}.
