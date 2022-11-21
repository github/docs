---
title: 리포지토리에 대한 익명 Git 읽기 권한 사용
intro: 리포지토리 관리자는 특정 요구 사항을 충족하는 퍼블릭 리포지토리에 대해 익명 Git 읽기 액세스를 사용하거나 사용하지 않도록 설정할 수 있습니다.
redirect_from:
  - /articles/enabling-anonymous-git-read-access-for-a-repository
  - /github/administering-a-repository/enabling-anonymous-git-read-access-for-a-repository
  - /github/administering-a-repository/managing-repository-settings/enabling-anonymous-git-read-access-for-a-repository
versions:
  ghes: '*'
shortTitle: Anonymous Git read access
ms.openlocfilehash: b289f2e70096775e567be0c925675e9986424821
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145136737'
---
리포지토리 관리자는 다음과 같은 경우 특정 리포지토리에 대한 익명 Git 읽기 권한 설정을 변경할 수 있습니다.
- 사이트 관리자가 프라이빗 모드 및 익명 Git 읽기 권한을 활성화했습니다.
- 리포지토리는 엔터프라이즈에서 공용이며 포크가 아닙니다.
- 사이트 관리자가 리포지토리에 대한 익명 Git 읽기 권한을 비활성화하지 않았습니다.

{% data reusables.enterprise_user_management.exceptions-for-enabling-anonymous-git-read-access %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. “익명 Git 읽기 권한 사용” 옆에 있는 **사용** 을 클릭합니다.
!["익명 Git 읽기 권한" 아래의 "사용" 단추](/assets/images/help/repository/enable-git-read-access-for-a-repo.png)
4. 변경 내용을 검토합니다. 확인하려면 리포지토리의 이름을 입력하고 **이해합니다. 익명 Git 읽기 권한을 활성화합니다.** 를 클릭합니다.
