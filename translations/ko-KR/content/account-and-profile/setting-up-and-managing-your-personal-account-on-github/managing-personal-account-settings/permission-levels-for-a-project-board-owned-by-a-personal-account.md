---
title: 개인 계정이 소유한 프로젝트 보드의 권한 수준
intro: 개인 계정이 소유한 프로젝트 보드에는 프로젝트 보드 소유자와 협력자라는 두 가지 권한 수준이 있습니다.
redirect_from:
  - /articles/permission-levels-for-user-owned-project-boards
  - /github/setting-up-and-managing-your-github-user-account/permission-levels-for-user-owned-project-boards
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/permission-levels-for-user-owned-project-boards
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/permission-levels-for-user-owned-project-boards
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Project board permissions
ms.openlocfilehash: 353b9ac497abc7110437aafdf691ca48a3ff6cec
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145165346'
---
## 권한 개요

사용자 소유 프로젝트 보드의 소유자는 한 명뿐입니다. 이 권한은 다른 개인 계정과 공유할 수 없습니다. 소유자 외에도 다른 사용자가 프로젝트 보드에서 협업할 수 있습니다.

프로젝트 보드 협력자를 위한 세 가지 수준의 사용 권한이 있습니다.

{% data reusables.project-management.project-board-permissions %}

## 사용자 소유 프로젝트 보드에 대한 소유자 및 관리자 권한

관리자 액세스 권한이 있는 프로젝트 보드 소유자 및 협력자는 프로젝트 보드를 완전히 제어할 수 있습니다. 프로젝트 보드 협력자가 허용하는 모든 권한 외에도 프로젝트 보드 소유자 및 관리자 액세스 권한이 있는 협력자는 다음을 수행할 수 있습니다.

- [협력자 관리, 보기, 추가](/articles/managing-access-to-your-user-account-s-project-boards)
- [프로젝트 보드를 {% ifversion ghae %}내부{% else %}퍼블릭{% endif %} 또는 프라이빗으로 구성](/articles/changing-project-board-visibility)
- [프로젝트 보드 삭제](/articles/deleting-a-project-board/)
- [프로젝트 보드 닫기](/articles/closing-a-project-board/)
- [닫힌 프로젝트 보드 다시 열기](/articles/reopening-a-closed-project-board)

## 사용자 소유 프로젝트 보드에 대한 읽기 및 쓰기 권한

사용자 소유 프로젝트 보드에 대한 읽기 권한이 있는 협력자는 다음을 수행할 수 있습니다.

- 프로젝트 보드 보기
- 프로젝트 보드 복사
- 프로젝트 보드에서 카드 필터링

사용자 소유 프로젝트 보드에 대한 쓰기 권한이 있는 협력자는 다음을 수행할 수 있습니다.

- 프로젝트 보드 보기
- 프로젝트 보드 복사
- 프로젝트 보드에서 카드 필터링
- 프로젝트 보드 편집
- 리포지토리를 프로젝트 보드에 연결
- 프로젝트 보드에 대한 자동화 구성
- 프로젝트 보드 복사
- 프로젝트 보드에 문제 및 끌어오기 요청 추가
- 프로젝트 보드에 메모 추가
- 프로젝트 보드에서 진행 상황 추적
- 프로젝트 보드에서 카드 보관

## 프로젝트 보드 표시 여부

프로젝트 보드의 표시 여부를 프라이빗에서 {% ifversion ghae %}내부{% else %}퍼블릭{% endif %}으로 변경하고 다시 되돌릴 수 있습니다. 기본값으로 사용자 소유 프로젝트 보드는 프라이빗입니다. 자세한 내용은 “[프로젝트 보드 표시 여부 변경](/articles/changing-project-board-visibility)”을 참조하세요.

## 추가 참고 자료

  - “[개인 계정의 프로젝트 보드에 대한 액세스 관리](/articles/managing-access-to-your-user-account-s-project-boards)”
