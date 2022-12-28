---
title: REST API를 사용하여 서버 통계 요청
shortTitle: Server Statistics and REST API
intro: '사용자 고유의 도구를 사용하여 REST API에서 수집된 {% data variables.product.prodname_server_statistics %} 메트릭을 요청하여 시간별 {% data variables.product.prodname_ghe_server %} 사용량을 분석할 수 있습니다.'
versions:
  feature: server-statistics
redirect_from:
  - /early-access/github/analyze-how-your-team-works-with-server-statistics/requesting-server-statistics-using-the-rest-api
ms.openlocfilehash: d93a51a1d39840187b14480eb91e06e0a4606332
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147409333'
---
단일 {% data variables.product.prodname_server_statistics %} REST API 요청에서 최대 365일의 메트릭을 요청할 수 있습니다. 리포지토리, 문제 및 끌어오기 요청에 대한 집계 메트릭을 포함하는 이 데이터는 조직의 요구 사항을 예측하고, 팀의 작동 방식을 이해하고, {% data variables.product.prodname_ghe_server %}에서 가져온 값을 표시하는 데 도움이 될 수 있습니다. 수집된 메트릭 목록은 “[수집된 {% data variables.product.prodname_server_statistics %} 데이터](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/about-server-statistics#server-statistics-data-collected)”를 참조하세요.

{% data variables.product.prodname_server_statistics %} REST API를 사용하려면 먼저 {% data variables.product.prodname_server_statistics %}를 활성화해야 합니다. 자세한 내용은 “[엔터프라이즈에 {% data variables.product.prodname_server_statistics %} 사용](/admin/configuration/configuring-github-connect/enabling-server-statistics-for-your-enterprise)”을 참조하세요. 

REST API를 사용하여 서버 통계를 요청하는 방법에 대한 자세한 내용은 {% data variables.product.prodname_ghe_cloud %} REST API 설명서의 "[{% data variables.product.prodname_ghe_server %} 통계 가져오기](/enterprise-cloud@latest/rest/enterprise-admin/admin-stats#get-github-enterprise-server-statistics)"를 참조하세요.
