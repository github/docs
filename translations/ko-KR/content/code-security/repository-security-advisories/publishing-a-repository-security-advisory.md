---
title: 리포지토리 보안 공지 게시
intro: 보안 권고를 게시하여 프로젝트의 보안 취약성에 대해 커뮤니티에 알릴 수 있습니다.
redirect_from:
- /articles/publishing-a-maintainer-security-advisory
- /github/managing-security-vulnerabilities/publishing-a-maintainer-security-advisory
- /github/managing-security-vulnerabilities/publishing-a-security-advisory
- /code-security/security-advisories/publishing-a-security-advisory
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
- Security advisories
- Vulnerabilities
- CVEs
- Repositories
shortTitle: Publish repository advisories
ms.openlocfilehash: f3e3bfdb6b44ec1c86bb903c66271b854f4fb041
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145119380"
---
<!--Marketing-LINK: From /features/security/software-supply-chain page "Publishing a security advisory".-->

보안 공지에 대한 관리자 권한이 있는 사람은 누구나 보안 공지를 게시할 수 있습니다.

{% data reusables.security-advisory.repository-level-advisory-note %}

## 필수 조건

보안 공지를 게시하거나 CVE ID 번호를 요청하려면 먼저 보안 공지 초안을 만들고 보안 취약성의 영향을 받는 프로젝트 버전에 대한 정보를 제공해야 합니다. 자세한 내용은 “[리포지토리 보안 공지 만들기](/code-security/repository-security-advisories/creating-a-repository-security-advisory)”를 참조하세요.

보안 공지를 만들었지만 아직 보안 취약성이 영향을 미치는 프로젝트 버전에 대한 세부 정보를 제공하지 않은 경우 보안 공지를 편집할 수 있습니다. 자세한 내용은 “[리포지토리 보안 공지 편집](/code-security/repository-security-advisories/editing-a-repository-security-advisory)”을 참조하세요.

## 보안 공지 게시 정보

보안 공지를 게시할 때 보안 공지가 다루는 보안 취약성에 대해 커뮤니티에 알립니다. 보안 공지를 게시하면 커뮤니티에서 패키지 종속성을 쉽게 업데이트하고 보안 취약성의 영향을 연구할 수 있습니다.

{% data reusables.repositories.security-advisories-republishing %}

보안 공지를 게시하기 전에 비공개로 협업하여 임시 프라이빗 포크의 취약성을 수정할 수 있습니다. 자세한 내용은 “[리포지토리 보안 취약성을 해결하기 위해 임시 프라이빗 포크에서 협업](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)”을 참조하세요.

{% warning %}

**경고**: 가능하다면 항상 공지를 게시하기 전에 보안 공지에 수정 버전을 추가해야 합니다. 그렇지 않은 경우 권고는 고정 버전 없이 게시되며 {% data variables.product.prodname_dependabot %}은 업데이트할 안전한 버전을 제공하지 않고 사용자에게 이 문제에 대해 경고합니다.

이러한 다양한 상황에서는 다음 단계 수행을 권장합니다.

- 수정 버전을 곧 사용할 수 있고 수정할 수 있는 경우 기다렸다가 수정 사항이 준비되면 문제를 공개합니다.
- 수정 버전을 개발하고 있지만 아직 사용할 수 없는 경우 공지에서 이를 언급하고 게시한 다음 나중에 공지를 편집합니다.
- 문제를 해결할 계획이 없는 경우 사용자가 언제 수정되는지 질문하기 위해 연락하지 않도록 공지에서 이 문제에 대해 명확히 언급해야 합니다. 이 경우 사용자가 문제를 완화하기 위해 수행할 수 있는 단계를 포함하는 것이 유용합니다.

{% endwarning %}

퍼블릭 리포지토리에서 초안 공지를 게시하면 모든 사용자가 다음을 볼 수 있습니다.

- 공지 데이터의 현재 버전.
- 기여를 인정받은 사용자가 수락한 모든 공지 기여 인정.
  
{% note %}

**참고**: 일반 대중은 공지의 편집 기록에 액세스할 수 없으며 게시된 버전만 볼 수 있습니다.

{% endnote %}

보안 공지를 게시한 후 보안 공지에 대한 URL은 보안 공지를 게시하기 전과 동일하게 유지됩니다. 리포지토리에 대한 읽기 권한이 있는 사용자는 누구나 보안 공지를 볼 수 있습니다. 보안 공지의 협력자는 관리자 권한이 있는 사람이 보안 공지에서 협력자를 제거하지 않는 한 보안 공지에서 전체 주석 스트림을 포함한 과거 대화를 계속 볼 수 있습니다. 

게시한 보안 공지에서 정보를 업데이트하거나 수정해야 하는 경우 보안 공지를 편집할 수 있습니다. 자세한 내용은 “[리포지토리 보안 공지 편집](/code-security/repository-security-advisories/editing-a-repository-security-advisory)”을 참조하세요.

## 보안 공지 게시

보안 공지를 게시하면 보안 공지에 대한 임시 프라이빗 포크가 삭제됩니다.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-advisories %}
4. “보안 공지” 목록에서 게시하려는 보안 공지를 클릭합니다.
  ![목록의 보안 공지](/assets/images/help/security/security-advisory-in-list.png)
5. 페이지 아래쪽의 **공지 게시** 를 클릭합니다.
  ![공지 게시 단추](/assets/images/help/security/publish-advisory-button.png)
  
## 게시된 보안 공지에 대한 {% data variables.product.prodname_dependabot_alerts %}

{% data reusables.repositories.github-reviews-security-advisories %}

## CVE ID 번호 요청(선택 사항)

{% data reusables.repositories.request-security-advisory-cve-id %} 자세한 내용은 “[리포지토리에 대한 {% data variables.product.prodname_security_advisories %} 정보](/code-security/repository-security-advisories/about-github-security-advisories-for-repositories#cve-identification-numbers)”를 참조하세요.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-advisories %}
4. “보안 공지” 목록에서 CVE 식별 번호를 요청하려는 보안 공지를 클릭합니다.
  ![목록의 보안 공지](/assets/images/help/security/security-advisory-in-list.png)
5. **공지 게시** 드롭다운 메뉴를 사용하고 **CVE 요청** 을 클릭합니다.
  ![드롭다운 시 CVE 요청](/assets/images/help/security/security-advisory-drop-down-request-cve.png)
6. **CVE 요청** 을 클릭합니다.
  ![CVE 요청 단추](/assets/images/help/security/security-advisory-request-cve-button.png)

## 추가 참고 자료

- “[리포지토리 보안 공지 철회](/code-security/repository-security-advisories/withdrawing-a-repository-security-advisory)”
