---
title: 배포 기록 보기
shortTitle: View deployment history
intro: 리포지토리에 대한 현재 및 이전 배포를 봅니다.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
redirect_from:
  - /developers/overview/viewing-deployment-history
  - /actions/deployment/viewing-deployment-history
ms.openlocfilehash: d9c0baaea469586fe6e412999313839b3590fa59
ms.sourcegitcommit: 7b86410fc3bc9fecf0cb71dda4c7d2f0da745b85
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/05/2022
ms.locfileid: '148009503'
---
{% data variables.product.prodname_actions %} 및 환경 또는 REST API 및 타사 앱을 통해 배포를 제공할 수 있습니다. {% ifversion fpt or ghae ghes > 3.0 or ghec %}{% data variables.product.prodname_actions %}로 환경을 사용하여 배포하는 방법에 대한 자세한 내용은 "[배포에 환경 사용](/actions/deployment/using-environments-for-deployment)"을 참조하세요. {% endif %}REST API를 사용하는 배포에 대한 자세한 내용은 "[리포지토리](/rest/reference/repos#deployments)"를 참조하세요.

현재 및 이전 배포를 보려면 리포지토리의 홈페이지에서 **환경** 을 클릭합니다.
{% ifversion ghae %} ![환경](/assets/images/enterprise/2.22/environments-sidebar.png){% else %} ![환경](/assets/images/environments-sidebar.png){% endif %}

배포 페이지에는 리포지토리에 대한 각 환경의 마지막 활성 배포가 표시됩니다. 배포에 환경 URL이 포함된 경우 URL에 연결되는 **배포 보기** 단추가 배포 옆에 표시됩니다.

활동 로그에는 환경에 대한 배포 기록이 표시됩니다. 기본적으로 환경에 대한 최신 배포에만 `Active` 상태가 있으며, 이전에 활성 상태였던 모든 배포에는 `Inactive` 상태가 있습니다. 배포의 자동 비활성화에 대한 자세한 내용은 "[비활성 배포](/rest/reference/deployments#inactive-deployments)"를 참조하세요.

REST API를 사용하여 배포에 대한 정보를 가져올 수도 있습니다. 자세한 내용은 “[리포지토리](/rest/reference/repos#deployments)”를 참조하세요.
