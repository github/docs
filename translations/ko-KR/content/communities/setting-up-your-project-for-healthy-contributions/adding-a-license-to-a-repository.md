---
title: 리포지토리에 라이선스 추가
intro: 다른 사용자가 더 쉽게 기여할 수 있도록 리포지토리에 오픈 소스 라이선스를 포함할 수 있습니다.
redirect_from:
  - /articles/adding-a-license-to-a-repository
  - /github/building-a-strong-community/adding-a-license-to-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Add a license to a repo
ms.openlocfilehash: 7961f690678d2bfe53726a33d02a54e95b9cfe78
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145117639'
---
리포지토리에 검색 가능한 라이선스가 포함된 경우 리포지토리를 방문하는 사용자는 리포지토리 페이지의 맨 위에서 라이선스를 확인할 수 있습니다. 전체 라이선스 파일을 읽으려면 라이선스 이름을 클릭합니다.

![MIT 라이선스가 있는 리포지토리 헤더](/assets/images/help/repository/repo-license-indicator.png)

오픈 소스 라이선스를 사용하면 다른 사용자가 리포지토리에서 프로젝트를 자유롭게 사용, 변경 및 배포할 수 있습니다. 리포지토리 라이선스에 대한 자세한 내용은 “[리포지토리 라이선스](/articles/licensing-a-repository)”를 참조하세요.

## 리포지토리에 오픈 소스 라이선스 포함

<!--Dotcom version uses the license tool-->
{% ifversion fpt or ghec %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. 파일 이름 필드에 *LICENSE* 또는 *LICENSE.md*(모두 대문자)를 입력합니다.
4. 파일 이름 필드 오른쪽에서 **라이선스 템플릿 선택** 을 클릭합니다.
  ![라이선스 템플릿 선택 단추](/assets/images/help/repository/license-tool.png)
5. 페이지 왼쪽의 “프로젝트에 라이선스 추가”에서 사용 가능한 라이선스를 검토한 다음, 목록에서 라이선스를 선택합니다.
  ![사용 가능한 라이선스 목록](/assets/images/help/repository/license-tool-picker.png)
6. **검토 후 제출** 을 클릭합니다.
  ![검토 후 제출 단추](/assets/images/help/repository/license-review-tool.png) {% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.choose-commit-email %}
10. **새 파일 커밋** 을 클릭합니다.
  ![분기에 라이선스 커밋](/assets/images/help/repository/license-submit-tool.png)

{% endif %}

<!--GHE version just adds a file named LICENSE or LICENSE.md-->
{% ifversion ghes %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. 파일 이름 필드에 *LICENSE* 또는 *LICENSE.md*(모두 대문자)를 입력합니다.
4. **새 파일 편집** 탭에서 사용하려는 라이선스의 전체 텍스트를 붙여넣습니다.
{% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %}
7. 커밋 메시지 필드 아래에서 현재 분기 또는 새 분기에 커밋을 추가할지 여부를 결정합니다. 현재 분기가 `main`인 경우 커밋에 대한 새 분기를 만든 다음 끌어오기 요청을 만들도록 선택해야 합니다. 자세한 내용은 “[끌어오기 요청 만들기](/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)”를 참조하세요.
![분기 커밋 옵션](/assets/images/help/repository/choose-commit-branch.png)
8. **새 파일 커밋** 을 클릭합니다.
  ![분기에 라이선스 커밋](/assets/images/help/repository/license-submit-tool.png)

{% endif %}

## 추가 참고 자료

- “[리포지토리 기여자에 대한 지침 설정](/articles/setting-guidelines-for-repository-contributors)”
