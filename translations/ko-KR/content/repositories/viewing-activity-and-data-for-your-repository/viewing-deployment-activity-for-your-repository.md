---
title: 리포지토리에 대한 배포 활동 보기
intro: 전체 리포지토리 또는 특정 끌어오기 요청의 배포 정보를 볼 수 있습니다.
redirect_from:
  - /articles/viewing-deployment-activity-for-your-repository
  - /github/administering-a-repository/viewing-deployment-activity-for-your-repository
  - /github/administering-a-repository/managing-repository-settings/viewing-deployment-activity-for-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: View deployment activity
ms.openlocfilehash: 395f25648609801ee376b3f689c11bb651c23195
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145136611'
---
{% note %}

**참고:** 배포 대시보드는 현재 베타 버전이며 변경될 수 있습니다.

{% endnote %}

리포지토리에 대한 읽기 권한이 있는 사용자는 배포 API 또는 [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace/category/deployment)의 앱을 통해 리포지토리의 배포 워크플로가 {% data variables.product.product_name %}과(와) 통합된 경우 모든 현재 배포의 개요와 과거 배포 활동의 로그를 볼 수 있습니다. 자세한 내용은 "[배포](/rest/reference/repos#deployments)"를 참조하세요.

끌어오기 요청의 "대화" 탭에서도 배포 정보를 볼 수 있습니다.

## 배포 대시보드 보기

{% data reusables.repositories.navigate-to-repo %}
2. 파일 목록 오른쪽에 있는 **환경** 을 클릭합니다.
![리포지토리 페이지 오른쪽에 있는 환경](/assets/images/help/repository/environments.png)

## 추가 참고 자료
 - “[끌어오기 요청 정보](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)”
