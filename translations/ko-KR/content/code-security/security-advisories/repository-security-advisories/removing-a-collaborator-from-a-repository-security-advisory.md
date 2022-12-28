---
title: 리포지토리 보안 공지에서 협력자 제거
intro: 리포지토리 보안 권고에서 협력자를 제거하면 해당 협력자는 보안 권고의 논의 및 메타데이터에 대한 읽기 및 쓰기 액세스 권한이 손실됩니다.
redirect_from:
  - /github/managing-security-vulnerabilities/removing-a-collaborator-from-a-security-advisory
  - /code-security/security-advisories/removing-a-collaborator-from-a-security-advisory
  - /code-security/repository-security-advisories/removing-a-collaborator-from-a-repository-security-advisory
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Security advisories
  - Vulnerabilities
  - Collaboration
shortTitle: Remove collaborators
ms.openlocfilehash: 77c21bea9c593935ee1b92028fc52859320f5a38
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/27/2022
ms.locfileid: '148114122'
---
보안 공지에 대한 관리자 권한이 있는 사용자는 보안 공지에서 협력자를 제거할 수 있습니다.

{% data reusables.security-advisory.repository-level-advisory-note %}

## 보안 공지에서 협력자 제거

{% data reusables.repositories.security-advisory-collaborators-public-repositories %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-advisories %}
4. "보안 공지" 목록에서 협력자를 제거할 보안 공지를 클릭합니다.
  ![목록의 보안 공지](/assets/images/help/security/security-advisory-in-list.png)
5. 페이지 오른쪽의 "협력자"에서 보안 공지에서 제거할 사용자 또는 팀의 이름을 찾습니다.
  ![보안 공지 협력자](/assets/images/help/security/security-advisory-collaborator.png)
6. 제거할 협력자 옆에 있는 **X** 아이콘을 클릭합니다.
  ![보안 공지 협력자를 제거하는 X 아이콘](/assets/images/help/security/security-advisory-remove-collaborator-x.png)

## 추가 참고 자료

- “[리포지토리 보안 공지에 대한 권한 수준](/code-security/repository-security-advisories/permission-levels-for-repository-security-advisories)”
- “[리포지토리 보안 공지에 협력자 추가](/code-security/repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory)”
