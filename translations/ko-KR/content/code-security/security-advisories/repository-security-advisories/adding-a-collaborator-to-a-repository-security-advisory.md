---
title: 리포지토리 보안 공지에 협력자 추가
intro: 다른 사용자 또는 팀을 추가하여 보안 권고에 관해 공동 작업할 수 있습니다.
redirect_from:
  - /articles/adding-a-collaborator-to-a-maintainer-security-advisory
  - /github/managing-security-vulnerabilities/adding-a-collaborator-to-a-maintainer-security-advisory
  - /github/managing-security-vulnerabilities/adding-a-collaborator-to-a-security-advisory
  - /code-security/security-advisories/adding-a-collaborator-to-a-security-advisory
  - /code-security/repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Security advisories
  - Vulnerabilities
  - Collaboration
shortTitle: Add collaborators
ms.openlocfilehash: d080fa5d7b66d9ce89b7985f689133e52ec69cc3
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/27/2022
ms.locfileid: '148114138'
---
보안 공지에 대한 관리자 권한이 있는 사용자는 보안 공지에 협력자를 추가할 수 있습니다.

{% data reusables.security-advisory.repository-level-advisory-note %}

## 보안 공지에 협력자 추가

협력자는 보안 공지에 대한 쓰기 권한이 있습니다. 자세한 내용은 “[리포지토리 보안 공지에 대한 권한 수준](/code-security/repository-security-advisories/permission-levels-for-repository-security-advisories)”을 참조하세요.

{% note %}

{% data reusables.repositories.security-advisory-collaborators-public-repositories %} 보안 공지에서 협력자 제거에 대한 자세한 내용은 “[리포지토리 보안 공지에서 협력자 제거](/code-security/repository-security-advisories/removing-a-collaborator-from-a-repository-security-advisory)”를 참조하세요.

{% endnote %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-advisories %}
4. “보안 공지” 목록에서 협력자를 추가할 보안 공지를 클릭합니다.
5. 페이지 오른쪽의 “협력자”에서 보안 공지에 추가할 사용자 또는 팀의 이름을 입력합니다.
  ![사용자 또는 팀 이름을 입력할 필드](/assets/images/help/security/add-collaborator-field.png)
6. **추가** 를 클릭합니다.
  ![추가 단추](/assets/images/help/security/security-advisory-add-collaborator-button.png)

## 추가 참고 자료

- “[리포지토리 보안 공지에 대한 권한 수준](/code-security/repository-security-advisories/permission-levels-for-repository-security-advisories)”
- “[리포지토리 보안 취약성을 해결하기 위해 임시 프라이빗 포크에서 협업](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)”
- “[리포지토리 보안 공지에서 협력자 제거](/code-security/repository-security-advisories/removing-a-collaborator-from-a-repository-security-advisory).”
