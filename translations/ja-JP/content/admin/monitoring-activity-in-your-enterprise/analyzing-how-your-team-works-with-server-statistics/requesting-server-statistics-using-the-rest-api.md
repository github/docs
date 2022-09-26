---
title: REST API を使用したサーバー統計の要求
shortTitle: Server Statistics and REST API
intro: '収集された {% data variables.product.prodname_server_statistics %} のメトリックを REST API を使って要求することにより、独自のツールを使って {% data variables.product.prodname_ghe_server %} の経時的な使用状況を分析できます。'
versions:
  feature: server-statistics
redirect_from:
  - /early-access/github/analyze-how-your-team-works-with-server-statistics/requesting-server-statistics-using-the-rest-api
ms.openlocfilehash: d93a51a1d39840187b14480eb91e06e0a4606332
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147409332'
---
1 つの {% data variables.product.prodname_server_statistics %} REST API 要求で最大 365 日間のメトリックを要求できます。 リポジトリ、issue、pull request に関する集計メトリックを含むこのデータは、Organization のニーズを予測し、チームがどのように機能するかを理解し、{% data variables.product.prodname_ghe_server %} から取得した値を表示するのに役立ちます。 収集される集計メトリックのリストについては、「[{% data variables.product.prodname_server_statistics %} で収集されるデータ](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/about-server-statistics#server-statistics-data-collected)」をご覧ください。

{% data variables.product.prodname_server_statistics %} REST API を使用する前に、{% data variables.product.prodname_server_statistics %} を有効にする必要があります。 詳しくは、「[Enterprise での {% data variables.product.prodname_server_statistics %} の有効化](/admin/configuration/configuring-github-connect/enabling-server-statistics-for-your-enterprise)」をご覧ください。 

REST API を使用してサーバー統計を要求する方法について詳しくは、{% data variables.product.prodname_ghe_cloud %} REST API ドキュメントの「[{% data variables.product.prodname_ghe_server %} 統計の取得](/enterprise-cloud@latest/rest/enterprise-admin/admin-stats#get-github-enterprise-server-statistics)」をご覧ください。
