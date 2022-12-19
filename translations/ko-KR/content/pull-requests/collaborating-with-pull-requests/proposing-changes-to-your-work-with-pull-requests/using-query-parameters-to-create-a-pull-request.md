---
title: 쿼리 매개 변수를 사용하여 끌어오기 요청 만들기
intro: 쿼리 매개 변수를 사용하여 사용자 지정 URL을 만들어 미리 채워진 필드가 있는 끌어오기 요청을 엽니다.
redirect_from:
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/using-query-parameters-to-create-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: 89ca4b13ff6291f7b4449d25b3daa911734a22b9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145139591'
---
쿼리 매개 변수를 사용하여 끌어오기 요청을 열 수 있습니다. 쿼리 매개 변수는 검색 필터 결과 또는 {% data variables.product.prodname_dotcom %}의 끌어오기 요청 템플릿과 같은 특정 웹 페이지 보기를 공유하도록 사용자 지정할 수 있는 URL의 선택적 부분입니다. 사용자 고유의 쿼리 매개 변수를 만들려면 키 및 값 쌍과 일치해야 합니다.

{% tip %}

**팁:** 기본 레이블, 담당자 및 끌어오기 요청 제목으로 열리는 끌어오기 요청 템플릿을 만들 수도 있습니다. 자세한 내용은 “[템플릿을 사용하여 유용한 이슈 및 끌어오기 요청 권장](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)”을 참조하세요.

{% endtip %}

해당하는 쿼리 매개 변수를 사용하려면 모든 작업에 대한 적절한 사용 권한이 있어야 합니다. 예를 들어 `labels` 쿼리 매개 변수를 사용하려면 끌어오기 요청에 레이블을 추가할 수 있는 사용 권한이 있어야 합니다. 자세한 내용은 “[조직의 리포지토리 역할](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)”을 참조하세요.

쿼리 매개 변수를 사용하여 잘못된 URL을 만들거나 적절한 사용 권한이 없는 경우 URL은 `404 Not Found` 오류 페이지를 반환합니다. 서버 한도를 초과하는 URL을 만들면 URL이 `414 URI Too Long` 오류 페이지를 반환합니다.

쿼리 매개 변수 | 예제
---  | ---
`quick_pull` | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1`은 베이스 분기 `main`과 헤드 분기 `my-branch`를 비교하는 끌어오기 요청을 만듭니다. `quick_pull=1` 쿼리를 사용하면 “Open a pull request”(끌어오기 요청 열기) 페이지로 직접 이동합니다.
`title` | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&labels=bug&title=Bug+fix+report`는 레이블이 “bug”(버그)이고 제목이 “Bug fix”(버그 수정)인 끌어오기 요청을 만듭니다.
`body` | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&title=Bug+fix&body=Describe+the+fix.`는 끌어오기 요청 본문에 제목이 "버그 수정"이고 주석이 "픽스 설명"인 끌어오기 요청을 만듭니다.
`labels` | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&labels=help+wanted,bug`는 레이블이 “help wanted”(도움말 필요) 및 “bug”(버그)인 끌어오기 요청을 만듭니다.
`milestone` | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&milestone=testing+milestones`는 마일스톤이 “testing milestones”(마일스톤 테스트)인 끌어오기 요청을 만듭니다.
`assignees` | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&assignees=octocat`는 끌어오기 요청을 만들고 @octocat에 할당합니다.
`projects` | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&title=Bug+fix&projects=octo-org/1`은 제목이 “Bug fix”(버그 수정)인 끌어오기 요청을 만들고 조직의 프로젝트 보드 1에 추가합니다.
`template` | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&template=issue_template.md`는 끌어오기 요청 본문에 템플릿이 있는 끌어오기 요청을 만듭니다. `template` 쿼리 매개 변수는 루트 내 `PULL_REQUEST_TEMPLATE` 하위 디렉터리에 저장된 템플릿, `docs/` 또는 리포지토리의 `.github/` 디렉터리에서 작동합니다. 자세한 내용은 “[템플릿을 사용하여 유용한 이슈 및 끌어오기 요청 권장](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)”을 참조하세요.
