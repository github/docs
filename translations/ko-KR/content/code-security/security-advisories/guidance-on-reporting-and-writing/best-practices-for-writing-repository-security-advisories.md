---
title: 리포지토리 보안 권고 작성 모범 사례
intro: '보안 권고를 만들거나 편집할 때 제공하는 정보는 표준 형식을 사용하여 에코시스템, 패키지 이름 및 영향을 받는 버전을 지정할 때 다른 사용자가 더 쉽게 이해할 수 있습니다.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
miniTocMaxHeadingLevel: 3
topics:
  - Security advisories
  - Vulnerabilities
shortTitle: Best practices
redirect_from:
  - /code-security/repository-security-advisories/best-practices-for-writing-repository-security-advisories
ms.openlocfilehash: af1ab76e13f44f5b319cd560e1ae0aa3081742dc
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/27/2022
ms.locfileid: '148114170'
---
리포지토리에 대한 관리자 권한이 있는 모든 사용자는 보안 공지 사항을 만들고 편집할 수 있습니다.

{% data reusables.security-advisory.security-researcher-cannot-create-advisory %}

## 리포지토리에 대한 보안 권고 정보

{% data reusables.security-advisory.security-advisory-overview %} 자세한 내용은 "[리포지토리 보안 권고 정보"를 참조하세요](/code-security/repository-security-advisories/about-github-security-advisories-for-repositories).

## 모범 사례

리포지토리 보안 공지 사항을 작성하거나 전역 보안 공지에서 커뮤니티 기여를 할 때 {% data variables.product.prodname_advisory_database %}에 사용되는 구문, 특히 버전 서식을 사용하는 것이 좋습니다.

특히 영향을 받는 버전을 정의할 때 {% data variables.product.prodname_advisory_database %}에 대한 구문을 따르는 경우:
- 리포지토리 권고를 게시할 때 추가 정보를 요청하지 않고도 {% data variables.product.prodname_advisory_database %}에 권고를 "{% data variables.product.company_short %}-reviewed" 권고로 추가할 수 있습니다.
- {% data variables.product.prodname_dependabot %}에는 영향을 받는 리포지토리를 정확하게 식별하고 {% data variables.product.prodname_dependabot_alerts %}(으)로 보내 알림을 보내는 정보가 있습니다.
- 커뮤니티 구성원은 누락되거나 잘못된 정보를 수정하기 위해 권고에 대한 편집을 제안할 가능성이 적습니다.

초안 보안 공지 양식을 사용하여 리포지토리 _공지_ 사항을 추가하거나 편집합니다. 자세한 내용은 “[리포지토리 보안 공지 만들기](/code-security/repository-security-advisories/creating-a-repository-security-advisory)”를 참조하세요. 

보안 공지 개선 양식을 사용하여 기존 글로벌 _공지_ 의 개선을 제안합니다. 자세한 내용은 “[{% data variables.product.prodname_advisory_database %}에서 보안 공지 편집](/code-security/dependabot/dependabot-alerts/editing-security-advisories-in-the-github-advisory-database)”을 참조하세요.

### 에코시스템

**에코시스템** 필드를 사용하여 지원되는 에코시스템 중 하나에 권고를 할당해야 합니다. 지원하는 에코시스템에 대한 자세한 내용은 "[{% data variables.product.prodname_advisory_database %}에서 보안 권고 검색](/code-security/dependabot/dependabot-alerts/browsing-security-advisories-in-the-github-advisory-database#github-reviewed-advisories)"을 참조하세요.

![양식의 에코시스템 필드를 강조 표시하는 스크린샷](/assets/images/help/security/security-advisory-ecosystem.png)

### 패키지 이름

**패키지 이름** 필드를 사용하여 {% data variables.product.prodname_advisory_database %}의 "{% data variables.product.company_short %}-reviewed" 권고에 패키지 정보가 필요하기 때문에 영향을 받는 패키지를 지정하는 것이 좋습니다. 패키지 정보는 리포지토리 수준 보안 권고에 선택 사항이지만 이 정보를 조기에 포함하면 보안 공지 사항을 게시할 때 검토 프로세스가 간소화됩니다.

![양식의 패키지 이름을 강조 표시하는 스크린샷](/assets/images/help/security/security-advisory-package-name.png)

### 영향을 받는 버전

이 정보는 {% data variables.product.prodname_advisory_database %}의 "{% data variables.product.company_short %}-reviewed" 권고에 필요하기 때문에 **영향을 받는 버전** 필드를 사용하여 영향을 받는 버전을 지정하는 것이 좋습니다. 버전 정보는 리포지토리 수준 보안 권고에 선택 사항이지만 이 정보를 조기에 포함하면 보안 공지 사항을 게시할 때 검토 프로세스가 간소화됩니다.

![영향을 받는 버전 필드를 강조 표시하는 스크린샷](/assets/images/help/security/security-advisory-affected-versions.png)

- 영향을 받는 유효한 버전 문자열은 다음 중 하나로 구성됩니다.
   - 하한 연산자 시퀀스입니다.
   - 상한 연산자 시퀀스입니다.
   - 상한 연산자 시퀀스와 하한 연산자 시퀀스 모두입니다.
   - 같음(`=`) 연산자를 사용하는 특정 버전 시퀀스입니다.
- 각 연산자 시퀀스를 연산자, 단일 공백 및 버전으로 지정해야 합니다.
   - 유효한 연산자는 , `<`, `<=`, `>`또는 `>=`입니다`=`.
   - 버전은 숫자와 숫자, 문자, 점, 대시 또는 밑줄(공백 또는 쉼표 이외의 항목)으로 시작해야 합니다.
   - 상한 시퀀스와 하한 시퀀스를 모두 지정하는 경우 하한이 먼저 와야 하고 그 뒤에 쉼표와 단일 공백, 상한이 와야 합니다.
   {% note %}

   **참고:** 영향을 받는 버전 문자열에는 선행 또는 후행 공백이 포함될 수 없습니다.

   {% endnote %}

- 상한 연산자는 포괄 또는 배타적일 수 있습니다(예: `<=` 또는 `<`).
- 하한 연산자는 포괄 또는 배타적일 수 있습니다(예: `>=` 또는 `>`). 그러나 리포지토리 권고를 게시하고 리포지토리 권고를 전역 권고로 졸업하는 경우 다른 규칙이 적용됩니다. 하한 문자열은 포함할 수 있습니다(예: ). `>=` 전용 하한 연산자(`>`)는 버전이 인 경우에만 허용됩니다 `0`(예 `> 0`: ).

  {% note %}

  **노트:** 하한 제한:
   - OSV(오픈 소스 취약성) 스키마와의 비호환성 때문입니다.
   - {% data variables.product.prodname_advisory_database %}의 기존 권고에 대한 제안을 할 때만 적용됩니다.

  {% endnote %}

- 와 같은 `> 2.0, < 2.3, > 3.0, < 3.2`동일한 필드에 영향을 받는 버전 범위를 여러 개 지정할 수 없습니다. 둘 이상의 범위를 지정하려면 + **영향을 받는 다른 제품** 추가 단추를 클릭하여 각 범위에 대해 영향을 **받는 새 제품** 섹션을 만들어야 합니다.

  ![영향을 받는 여러 버전 범위를 추가하는 데 사용할 단추를 강조 표시하는 스크린샷](/assets/images/help/security/security-advisory-add-another-affected-product.png)
 - 영향을 받는 버전 범위에 상한 또는 하한이 하나만 포함된 경우:
   - 암시적 값은 하한이 명시적으로 지정되지 않은 경우 항상 `> 0` 입니다.
   - 상한이 명시적으로 지정되지 않은 경우 암시적 값은 항상 무한대입니다.

{% data variables.product.prodname_advisory_database %}에 대한 자세한 내용은 를 참조하세요 [https://github.com/github/advisory-database](https://github.com/github/advisory-database).
