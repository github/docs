---
title: 웹후크 정보
redirect_from:
  - /post-receive-hooks
  - /articles/post-receive-hooks
  - /articles/creating-webhooks
  - /articles/about-webhooks
  - /github/extending-github/about-webhooks
intro: 웹후크는 리포지토리 또는 조직에서 특정 작업이 발생할 때마다 외부 웹 서버에 알림을 제공할 수 있는 방법을 제공합니다.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 30232a560237d473f17ec01d6451cb25195521fc
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880615'
---
{% tip %}

**팁:** {% data reusables.organizations.owners-and-admins-can %}은 조직의 웹후크를 관리합니다. {% data reusables.organizations.new-org-permissions-more-info %}

{% endtip %}

리포지토리 또는 조직에서 다양한 작업을 수행할 때마다 웹후크를 트리거할 수 있습니다. 예를 들어 다음과 같은 경우에 실행되도록 웹후크를 구성할 수 있습니다.

* 리포지토리가 다음으로 푸시됩니다.
* 끌어오기 요청이 열림
* {% data variables.product.prodname_pages %} 사이트가 빌드됨
* 새 구성원이 팀에 추가됨

{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API를 사용하여 해당 웹후크를 통해 외부 이슈 추적기를 업데이트하거나, CI 빌드를 트리거하거나, 백업 미러를 업데이트하거나, 프로덕션 서버에 배포할 수 있습니다.

새 웹후크를 설정하려면 외부 서버에 액세스하고 관련 기술 절차에 대해 잘 알고 있어야 합니다. 연결할 수 있는 작업의 전체 목록을 포함하여 웹후크 빌드에 대한 도움말은 “[웹후크](/webhooks)”를 참조하세요.
