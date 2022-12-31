---
title: 외부 리소스를 참조하도록 자동 링크 구성
intro: 'JIRA 이슈, Zendesk 티켓 등의 외부 리소스에 대한 자동 링크를 추가하여 워크플로를 간소화할 수 있습니다.'
product: '{% data reusables.gated-features.autolinks %}'
redirect_from:
  - /articles/configuring-autolinks-to-reference-external-resources
  - /github/administering-a-repository/configuring-autolinks-to-reference-external-resources
  - /github/administering-a-repository/managing-repository-settings/configuring-autolinks-to-reference-external-resources
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Configure autolinks
ms.openlocfilehash: ae6e10f55a880a4fa389149ad137300ef3a81514
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146748591'
---
## 자동 링크 정보

리포지토리에 대한 관리자 권한이 있는 사람이라면 누구나 문제를 연결하고, 요청을 끌어오고, 메시지를 커밋하고, 설명을 외부 타사 서비스에 릴리스하도록 자동 링크 참조를 구성할 수 있습니다.

{% ifversion autolink-reference-alphanumeric %} 이제 자동 링크 참조에 영숫자 문자를 사용할 수 있습니다. 원래 도입되었을 때 사용자 지정 자동 링크는 숫자 식별자를 사용하는 외부 리소스로 제한되었습니다. 이제 사용자 지정 자동 링크가 영숫자 식별자에서 작동합니다. 숫자 식별자만 인식하는 레거시 자동 링크 참조는 더 이상 사용되지 않으며 "레거시" 레이블로 표시됩니다.

참조 접두사 및 대상 URL을 지정하여 사용자 지정 자동 링크를 정의합니다.
- 참조 접두사는 겹치는 이름을 가질 수 없습니다. 예를 들어 리포지토리에는 `TICKET` 및 `TICK`과 같은 접두사를 사용한 두 개의 사용자 지정 자동 링크가 있을 수 없습니다. 두 접두사 모두 `TICKET123a` 문자열과 일치하기 때문입니다.
- 대상 URL에는 다음 문자를 지원하는 `<num>` 변수가 포함됩니다. `a-z`(대/소문자를 구분하지 않음), `0-9` 및 `-`.
{% endif %}

## 외부 리소스를 참조하도록 자동 링크 구성

이 절차에서는 외부 리소스를 참조하도록 자동 링크를 구성하는 방법을 보여 줍니다. 예를 들어 사용자가 보고한 티켓을 Zendesk를 사용하여 추적하는 경우, 자신이 연 끌어오기 요청에 있는 티켓 번호를 참조하여 문제를 해결할 수 있습니다.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
1. 사이드바의 "통합" 섹션에서 **{% octicon "cross-reference" aria-label="The cross-reference icon" %} 자동 링크 참조** 를 클릭합니다.
{% else %}
1. 왼쪽 사이드바에서 **자동 링크 참조** 를 클릭합니다.
![왼쪽 사이드바에 있는 자동 링크 참조](/assets/images/help/repository/autolink-references-tab.png) {% endif %}
1. **자동 링크 참조 추가** 를 클릭합니다.
![자동 링크 참조 정보를 입력하는 단추](/assets/images/help/repository/add-autolink-reference-details.png)
5. "참조 접두사"에서 협력자가 외부 리소스에 대한 자동 링크를 생성하는 데 사용할 짧고 유의미한 접두사를 입력합니다.
{% ifversion autolink-reference-alphanumeric %}![외부 시스템의 약어를 입력할 필드](/assets/images/help/repository/add-reference-prefix-field-alphanumeric.png){% else %}![외부 시스템의 약어를 입력할 필드](/assets/images/help/repository/add-reference-prefix-field.png){% endif %}
6. 연결할 외부 시스템에 대한 링크를 "대상 URL"에 입력합니다. `<num>`을 참조 번호의 변수로 유지해야 합니다.
{% ifversion autolink-reference-alphanumeric %}![외부 시스템 URL을 입력할 필드](/assets/images/help/repository/add-target-url-field-alphanumeric.png){% else %}![외부 시스템 URL을 입력할 필드](/assets/images/help/repository/add-target-url-field.png){% endif %}
7. **자동 링크 참조 추가** 를 클릭합니다.
{% ifversion autolink-reference-alphanumeric %}{% else %}![자동 링크 참조를 추가하는 단추](/assets/images/help/repository/add-autolink-reference.png){% endif %}
