---
title: 使用 REST API 请求服务器统计信息
shortTitle: Server Statistics and REST API
intro: '可以使用自己的工具通过请求使用 REST API 收集的 {% data variables.product.prodname_server_statistics %} 指标来分析 {% data variables.product.prodname_ghe_server %} 使用情况。'
versions:
  feature: server-statistics
redirect_from:
  - /early-access/github/analyze-how-your-team-works-with-server-statistics/requesting-server-statistics-using-the-rest-api
ms.openlocfilehash: d93a51a1d39840187b14480eb91e06e0a4606332
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147409329'
---
可以在单个 {% data variables.product.prodname_server_statistics %} REST API 请求中请求最多 365 天的指标。 此数据包括存储库、问题和拉取请求的聚合指标，可帮助你预测组织的需求、理解团队的工作方式，以及显示从 {% data variables.product.prodname_ghe_server %} 获取的值。 有关收集的指标的列表，请参阅“[收集的 {% data variables.product.prodname_server_statistics %} 数据](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/about-server-statistics#server-statistics-data-collected)”。

必须先启用 {% data variables.product.prodname_server_statistics %}，然后才可使用 {% data variables.product.prodname_server_statistics %} REST API。 有关详细信息，请参阅“[对企业启用 {% data variables.product.prodname_server_statistics %}](/admin/configuration/configuring-github-connect/enabling-server-statistics-for-your-enterprise)”。 

有关使用 REST API 请求服务器统计信息的详细信息，请参阅 {% data variables.product.prodname_ghe_cloud %} REST API 文档中的“[获取 {% data variables.product.prodname_ghe_server %} 统计信息](/enterprise-cloud@latest/rest/enterprise-admin/admin-stats#get-github-enterprise-server-statistics)”。
