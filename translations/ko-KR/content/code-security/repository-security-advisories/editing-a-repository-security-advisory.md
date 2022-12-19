---
title: 리포지토리 보안 공지 편집
intro: 세부 정보를 업데이트하거나 오류를 수정해야 하는 경우 리포지토리 보안 권고에 대한 메타데이터 및 설명을 편집할 수 있습니다.
redirect_from:
- /github/managing-security-vulnerabilities/editing-a-security-advisory
- /code-security/security-advisories/editing-a-security-advisory
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
- Security advisories
- Vulnerabilities
shortTitle: Edit repository advisories
ms.openlocfilehash: 28a81c6f439af54e86358cb8e4b7aa0bbe1da2a8
ms.sourcegitcommit: bafb4fe4c8c086a510eafee6e54a2d172fd3a01b
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/16/2022
ms.locfileid: "148046565"
---
리포지토리 보안 공지에 대한 관리자 권한이 있는 사용자는 보안 공지를 편집할 수 있습니다.

{% data reusables.security-advisory.repository-level-advisory-note %}

## 보안 공지에 대한 기여 인정 정보

보안 취약성을 발견하고 보고하거나 수정하는 데 도움을 준 사람의 기여를 인정할 수 있습니다. 누군가의 기여를 인정하는 경우 상대는 이를 수락하거나 거절할 수 있습니다.

누군가가 기여에 대한 인정을 수락하면 해당 사용자의 사용자 이름이 보안 공지의 “기여 인정” 섹션에 표시됩니다. 리포지토리에 대한 읽기 권한이 있는 사람은 누구나 공지와 기여 인정을 수락한 사람을 볼 수 있습니다.

보안 공지에 대한 기여를 인정받아야 한다고 생각되는 경우 공지를 만든 사람에게 연락하여 공지를 편집하고 기여를 인정하도록 요청하세요. 공지 작성자만 기여를 인정할 수 있으므로 보안 공지 기여 인정에 대해서는 GitHub 지원에 문의하지 마세요.

## 보안 공지 편집

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-advisories %}
4. “보안 공지” 목록에서 편집할 보안 공지를 클릭합니다.
5. 보안 공지에 대한 세부 정보의 오른쪽 위 모서리에서 {% octicon "pencil" aria-label="The edit icon" %}을 클릭합니다. 그러면 편집 모드에서 보안 권고 양식이 열립니다.
  ![보안 공지에 대한 편집 단추](/assets/images/help/security/security-advisory-edit-button.png) {% data reusables.repositories.security-advisory-edit-details %} {% data reusables.repositories.security-advisory-edit-severity %} {% data reusables.repositories.security-advisory-edit-cwe-cve %} {% data reusables.repositories.security-advisory-edit-description %}
11. 필요에 따라 보안 공지에 대한 “기여 인정”을 편집합니다.
  ![보안 공지에 대한 기여 인정](/assets/images/help/security/security-advisory-credits.png)
12. **보안 공지 업데이트** 를 클릭합니다.
  ![“보안 공지 업데이트” 단추](/assets/images/help/security/update-advisory-button.png)
13. “기여 인정” 섹션에 나열되어 있는 사용자는 기여 인정을 수락하도록 요청하는 메일 또는 웹 알림을 받게 됩니다. 사용자가 수락하면 보안 공지가 게시될 때 사용자 이름이 공개적으로 표시됩니다.

## 추가 참고 자료

- “[리포지토리 보안 공지 철회](/code-security/repository-security-advisories/withdrawing-a-repository-security-advisory)”
