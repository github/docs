---
title: 타사 애플리케이션과 연결
intro: 'OAuth를 사용하여 {% data variables.product.product_name %} ID를 타사 애플리케이션에 연결할 수 있습니다. 이러한 애플리케이션 중 하나에 권한을 부여하는 경우 애플리케이션을 신뢰하는지 확인하고 애플리케이션 개발자와 애플리케이션에서 액세스하려는 정보 종류를 검토해야 합니다.'
redirect_from:
  - /articles/connecting-with-third-party-applications
  - /github/authenticating-to-github/connecting-with-third-party-applications
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/connecting-with-third-party-applications
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Third-party applications
ms.openlocfilehash: b8cd20d36926c373116061e211be62701b1bd2f6
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145115052'
---
타사 애플리케이션이 {% data variables.product.product_name %} 로그인으로 사용자를 식별하려는 경우 개발자 연락처 정보가 포함된 페이지와 요청되는 특정 데이터 목록이 표시됩니다.

## 애플리케이션 개발자에게 문의

애플리케이션은 {% data variables.product.product_name %}가 아닌 타사에서 개발했으므로 애플리케이션이 액세스를 요청하는 데이터를 사용하는 방법을 정확히 알 수 없습니다. 페이지 맨 위에 있는 개발자 정보를 사용하여 애플리케이션에 대한 질문이나 문제가 있는 경우 애플리케이션 관리자에게 문의할 수 있습니다.

![{% data variables.product.prodname_oauth_app %} 소유자 정보](/assets/images/help/platform/oauth_owner_bar.png)

개발자가 제공하기로 선택한 경우 페이지의 오른쪽에 애플리케이션 및 관련 웹 사이트에 대한 자세한 설명이 제공됩니다.

![OAuth 애플리케이션 정보 및 웹 사이트](/assets/images/help/platform/oauth_app_info.png)

## 애플리케이션 액세스 및 데이터 유형

애플리케이션은 {% data variables.product.product_name %} 데이터에 대한 읽기 또는 쓰기 권한을 가질 수 있습니다. 

- **읽기 권한** 은 애플리케이션이 데이터를 ‘보는’ 것만 허용합니다.
- **쓰기 권한** 은 애플리케이션이 데이터를 ‘변경’하는 것을 허용합니다.

### OAuth 범위 정보

범위는 애플리케이션이 공용 데이터와 비공용 데이터에 모두 액세스하도록 요청할 수 있는 명명된 권한 그룹입니다.

{% data variables.product.product_name %}와 통합되는 타사 애플리케이션을 사용하려는 경우 해당 애플리케이션을 통해 데이터에 어떤 액세스 유형이 필요한지 알 수 있습니다. 애플리케이션에 액세스 권한을 부여하는 경우 애플리케이션은 데이터를 읽거나 수정하는 등의 작업을 대신 수행할 수 있습니다. 예를 들어 `user:email` 범위를 요청하는 앱을 사용하려는 경우 앱은 개인 메일 주소에 대한 읽기 전용 액세스 권한을 갖습니다. 자세한 내용은 “[{% data variables.product.prodname_oauth_apps %}의 범위 정보](/apps/building-integrations/setting-up-and-registering-oauth-apps/about-scopes-for-oauth-apps)”를 참조하세요.

{% tip %}

**참고:** 현재 소스 코드 액세스 범위를 읽기 전용으로 지정할 수는 없습니다.

{% endtip %}

### 요청된 데이터 형식

애플리케이션에서 요청할 수 있는 데이터 형식은 여러 가지가 있습니다.

![OAuth 액세스 세부 정보](/assets/images/help/platform/oauth_access_types.png)

{% tip %}

**팁:** {% data reusables.user-settings.review_oauth_tokens_tip %}

{% endtip %}

| 데이터 형식 | 설명 |
| --- | --- |
| 커밋 상태 | 커밋 상태를 보고하는 타사 애플리케이션에 대한 액세스 권한을 부여할 수 있습니다. 커밋 상태 액세스를 통해 애플리케이션은 특정 커밋에 대해 빌드가 성공했는지 확인할 수 있습니다. 애플리케이션은 코드에 액세스할 수 없지만 특정 커밋에 대한 상태 정보를 읽고 쓸 수 있습니다. |
| 배포 | 배포 상태 액세스를 통해 애플리케이션은 리포지토리의 특정 커밋에 대해 배포가 성공했는지 확인할 수 있습니다. 애플리케이션은 코드에 액세스할 수 없습니다. |
| Gists | [Gist](https://gist.github.com) 액세스를 통해 애플리케이션은 {% ifversion not ghae %}퍼블릭 Gist와{% else %}내부 Gist와{% endif %} 비밀 Gist를 모두 읽거나 쓸 수 있습니다. |
| 후크 | [웹후크](/webhooks) 액세스를 통해 애플리케이션은 관리하는 리포지토리에서 후크 구성을 읽거나 쓸 수 있습니다. |
| 알림 | 알림 액세스를 통해 애플리케이션은 문제에 대한 의견 및 끌어오기 요청과 같은 {% data variables.product.product_name %} 알림을 읽을 수 있습니다. 그러나 애플리케이션은 리포지토리의 모든 항목에 액세스할 수 없습니다. |
| 조직 및 팀 | 조직 및 팀 액세스를 통해 앱은 조직 및 팀 멤버 자격에 액세스하고 관리할 수 있습니다. |
| 개인 사용자 데이터 | 사용자 데이터에는 사용자 프로필에 있는 정보(예: 이름, 메일 주소, 위치)가 포함됩니다. |
| 리포지토리 | 리포지토리 정보에는 기여자의 이름, 만든 분기 및 리포지토리 내의 실제 파일이 포함됩니다. 애플리케이션은 모든 가시성 수준의 모든 리포지토리에 대한 액세스를 요청할 수 있습니다. 자세한 내용은 “[리포지토리 정보](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)”를 참조하세요. |
| 리포지토리 삭제 | 애플리케이션은 관리하는 리포지토리 삭제를 요청할 수 있지만 코드에 액세스할 수는 없습니다. |

## 업데이트된 권한 요청

애플리케이션은 새 액세스 권한을 요청할 수 있습니다. 업데이트된 권한을 요청할 때 애플리케이션에서 차이점을 알립니다.

![타사 애플리케이션 액세스 변경](/assets/images/help/platform/oauth_existing_access_pane.png)
