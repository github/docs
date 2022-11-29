---
title: 리포지토리 보안 공지 만들기
intro: 오픈 소스 프로젝트에서 보안 취약성을 비공개로 논의하고 수정하기 위한 보안 권고 초안을 만들 수 있습니다.
redirect_from:
  - /articles/creating-a-maintainer-security-advisory
  - /github/managing-security-vulnerabilities/creating-a-maintainer-security-advisory
  - /github/managing-security-vulnerabilities/creating-a-security-advisory
  - /code-security/security-advisories/creating-a-security-advisory
  - /code-security/repository-security-advisories/creating-a-repository-security-advisory
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Security advisories
  - Vulnerabilities
shortTitle: Create repository advisories
ms.openlocfilehash: de22432173f6bf909d001a3f780b0f9943769ec0
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/27/2022
ms.locfileid: '148114113'
---
리포지토리에 대한 관리자 권한이 있는 모든 사용자가 보안 공지를 만들 수 있습니다.

{% data reusables.security-advisory.security-researcher-cannot-create-advisory %}

## Creating a security advisory(보안 공지 만들기)

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-advisories %}
4. **새 초안 보안 공지 를** 클릭하여 초안 권고 양식을 엽니다.
  ![초안 공지 열기 단추](/assets/images/help/security/security-advisory-new-draft-security-advisory-button.png)
5. 보안 공지의 제목을 입력합니다.
{% data reusables.repositories.security-advisory-edit-details %} {% data reusables.repositories.security-advisory-edit-severity %} {% data reusables.repositories.security-advisory-edit-cwe-cve %} {% data reusables.repositories.security-advisory-edit-description %}
11. **보안 공지 초안 만들기** 를 클릭합니다.
  ![보안 공지 만들기 단추](/assets/images/help/security/security-advisory-create-security-advisory-button.png)

## 다음 단계

- 보안 공지 초안에 주석을 달고 팀과 취약성에 대해 논의합니다.
- 보안 공지에 협력자를 추가합니다. 자세한 내용은 “[리포지토리 보안 공지에 협력자 추가](/code-security/repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory)”를 참조하세요.
- 프라이빗 협업을 통해 임시 프라이빗 포크의 취약성을 해결합니다. 자세한 내용은 “[리포지토리 보안 취약성을 해결하기 위해 임시 프라이빗 포크에서 협업](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)”을 참조하세요.
- 보안 공지에 기여해서 기여를 인정받아야 하는 개인을 추가합니다. 자세한 내용은 “[리포지토리 보안 공지 편집](/code-security/repository-security-advisories/editing-a-repository-security-advisory#about-credits-for-security-advisories)”을 참조하세요.
- 보안 공지를 게시하여 커뮤니티에 보안 취약성을 알립니다. 자세한 내용은 “[리포지토리 보안 공지 게시](/code-security/repository-security-advisories/publishing-a-repository-security-advisory)”를 참조하세요.
