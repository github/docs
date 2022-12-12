---
ms.openlocfilehash: 8df8afeba066cc59aca94e54e8b198794feb5f40
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147763638"
---
{%- ifversion ghec or ghes > 3.3 or ghae-issue-5091 %} {% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %} {% data reusables.enterprise-accounts.actions-runners-tab %} {% ifversion actions-hosted-runners %}1. **새 실행기** 를 클릭한 다음 **자체 호스팅 실행기 새로 만들기** 를 클릭합니다.{% else %}1. **새 실행기** 를 클릭합니다.{% endif %} {% data reusables.actions.self-hosted-runner-configure %} {%- elsif ghae or ghes < 3.4 %} 엔터프라이즈에 자체 호스팅 실행기를 추가하려면 엔터프라이즈 소유자여야 합니다.
{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %} {% data reusables.enterprise-accounts.actions-runners-tab %}
1. **Add new**(새로 추가)를 클릭한 다음 **New runner**(새 실행기)를 클릭합니다.
{% data reusables.actions.self-hosted-runner-configure %} {%- endif %}
