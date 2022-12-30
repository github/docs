---
title: 서비스 후크 문제 해결
intro: 페이로드가 배달되지 않는 경우 이러한 일반적인 문제를 확인합니다.
redirect_from:
  - /enterprise/admin/articles/troubleshooting-service-hooks
  - /enterprise/admin/developer-workflow/troubleshooting-service-hooks
  - /enterprise/admin/user-management/troubleshooting-service-hooks
  - /admin/user-management/troubleshooting-service-hooks
versions:
  ghes: '*'
  ghae: '*'
topics:
  - Enterprise
shortTitle: Troubleshoot service hooks
ms.openlocfilehash: 224a0071d87407f9f6bb15ababbdb0c7171f8799
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145116279'
---
## 배달에 대한 정보 가져오기

모든 리포지토리에서 모든 서비스 후크 배달의 마지막 응답에 대한 정보를 찾을 수 있습니다.

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. 조사 중인 리포지토리를 찾습니다.
3. 탐색 사이드바에서 **후크** 링크를 클릭합니다.
  ![후크 사이드바](/assets/images/enterprise/settings/Enterprise-Hooks-Sidebar.png)
4. 문제가 있는 서비스 후크 아래에서 **최신 배달** 링크를 클릭합니다.
  ![후크 세부 정보](/assets/images/enterprise/settings/Enterprise-Hooks-Details.png)
5. **원격 호출** 아래에 원격 서버가 설치로 다시 보낸 응답과 함께 원격 서버에 POSTing할 때 사용된 헤더가 표시됩니다.

## 페이로드 보기

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. 조사 중인 리포지토리를 찾습니다.
3. 탐색 사이드바에서 **후크** 링크를 클릭합니다.
  ![후크 사이드바](/assets/images/enterprise/settings/Enterprise-Hooks-Sidebar.png)
4. 문제가 있는 서비스 후크 아래에서 **최신 배달** 링크를 클릭합니다.
5. **배달** 을 클릭합니다.
  ![페이로드 보기](/assets/images/enterprise/settings/Enterprise-Hooks-Payload.png)

## 과거 배달 보기

배달은 15일 동안 저장됩니다.

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. 조사 중인 리포지토리를 찾습니다.
3. 탐색 사이드바에서 **후크** 링크를 클릭합니다.
  ![후크 사이드바](/assets/images/enterprise/settings/Enterprise-Hooks-Sidebar.png)
4. 문제가 있는 서비스 후크 아래에서 **최신 배달** 링크를 클릭합니다.
5. 해당 특정 후크에 대한 다른 배달을 보려면 **이 후크 ID에 대해 자세히** 를 클릭합니다. ![더 많은 배달 보기](/assets/images/enterprise/settings/Enterprise-Hooks-More-Deliveries.png)
