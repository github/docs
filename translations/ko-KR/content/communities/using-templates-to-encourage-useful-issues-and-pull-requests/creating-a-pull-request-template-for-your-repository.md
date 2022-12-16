---
title: 리포지토리에 대한 끌어오기 요청 템플릿 만들기
intro: 리포지토리에 끌어오기 요청 템플릿을 추가하면 프로젝트 참가자는 끌어오기 요청 본문에 템플릿의 콘텐츠를 자동으로 볼 수 있습니다.
redirect_from:
  - /articles/creating-a-pull-request-template-for-your-repository
  - /github/building-a-strong-community/creating-a-pull-request-template-for-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Create a PR template
ms.openlocfilehash: fa4d3cf78b63af147c85b8f6d77d7cca74e3853a
ms.sourcegitcommit: 4daa156856e651cb3854ead40e35bd918e481ad6
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/02/2022
ms.locfileid: '148190410'
---
자세한 내용은 “[문제 및 끌어오기 요청 템플릿 정보](/articles/about-issue-and-pull-request-templates)”를 참조하세요.

여러 끌어오기 요청 템플릿을 포함하도록 지원되는 폴더에 *PULL_REQUEST_TEMPLATE/* 하위 디렉터리를 만들고 쿼리 매개 변수를 사용하여 `template` 끌어오기 요청 본문을 채울 템플릿을 지정할 수 있습니다. 자세한 내용은 “[쿼리 매개 변수를 사용하여 끌어오기 요청 만들기](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/using-query-parameters-to-create-a-pull-request)”를 참조하세요.

{% ifversion fpt or ghes or ghec %}

조직{% ifversion fpt or ghes or ghec %} 또는 개인 계정{% endif %}에 대한 기본 끌어오기 요청 템플릿을 만들 수 있습니다. 자세한 내용은 “[기본 커뮤니티 상태 파일 만들기](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)”를 참조하세요.

{% endif %}

## 끌어오기 요청 템플릿 추가

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. 파일 이름 필드에서 다음을 수행합니다.
    -  끌어오기 요청 템플릿을 리포지토리의 루트 디렉터리에 표시하려면 끌어오기 요청 템플릿의 이름을 `pull_request_template.md`로 지정합니다.
  ![루트 디렉터리의 새 끌어오기 요청 템플릿 이름](/assets/images/help/repository/pr-template-file-name.png)
    - 끌어오기 요청 템플릿을 리포지토리의 `docs` 디렉터리에 표시하려면 끌어오기 요청 템플릿의 이름을 `docs/pull_request_template.md`로 지정합니다.
  ![docs 디렉터리의 새 끌어오기 요청 템플릿](/assets/images/help/repository/pr-template-file-name-docs.png)
    - 파일을 숨겨진 디렉터리에 저장하려면 끌어오기 요청 템플릿의 이름을 `.github/pull_request_template.md`로 지정합니다.
  ![숨겨진 디렉터리의 새 끌어오기 요청 템플릿](/assets/images/help/repository/pr-template-hidden-directory.png)
    - 여러 끌어오기 요청 템플릿을 만들고 쿼리 매개 변수를 사용하여 `template` 끌어오기 요청 본문을 채울 템플릿을 지정하려면 *.github/PULL_REQUEST_TEMPLATE/* 를 입력한 다음 끌어오기 요청 템플릿의 이름을 입력합니다. 예: `.github/PULL_REQUEST_TEMPLATE/pull_request_template.md`. 루트 또는 `docs/` 디렉터리 내의 `PULL_REQUEST_TEMPLATE` 하위 디렉터리에 여러 끌어오기 요청 템플릿을 저장할 수도 있습니다. 자세한 내용은 “[쿼리 매개 변수를 사용하여 끌어오기 요청 만들기](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/using-query-parameters-to-create-a-pull-request)”를 참조하세요.
  ![끌어오기](/assets/images/help/repository/pr-template-multiple-hidden-directory.png)
4. 새 파일의 본문에 끌어오기 요청 템플릿을 추가합니다. 여기에는 다음이 포함될 수 있습니다.
    - 리포지토리의 [관련 문제에 대한 참조](/articles/basic-writing-and-formatting-syntax/#referencing-issues-and-pull-requests)입니다.
    - 끌어오기 요청에 제안된 변경 내용에 대한 설명입니다.
    - 제안된 변경 사항을 검토할 책임이 있는 사람 또는 팀의 [@mentions](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)입니다.
{% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} 템플릿은 리포지토리의 기본 분기에 병합되면 협력자가 사용할 수 있습니다.
{% data reusables.files.propose_new_file %}

## 추가 참고 자료

- “[문제 및 끌어오기 요청 템플릿 정보](/articles/about-issue-and-pull-request-templates)”
- “[쿼리 매개 변수를 사용하여 문제 및 끌어오기 요청에 대한 자동화 정보](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters)”
- “[끌어오기 요청 만들기](/articles/creating-a-pull-request)”
