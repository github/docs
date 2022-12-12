---
title: 리포지토리 기여자에 대한 지침 설정
intro: 사람들이 프로젝트에 기여하는 방법을 전달하는 지침을 만들 수 있습니다.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
redirect_from:
  - /articles/how-do-i-set-up-guidelines-for-contributors
  - /articles/setting-guidelines-for-repository-contributors
  - /github/building-a-strong-community/setting-guidelines-for-repository-contributors
topics:
  - Community
shortTitle: Contributor guidelines
ms.openlocfilehash: 3085567f51950890c168b795aff3cac89b92a3a6
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/04/2022
ms.locfileid: '148009145'
---
## 기여 지침 링크 정보
프로젝트 기여자가 제대로 작업할 수 있도록 기여 지침이 포함된 파일을  프로젝트 리포지토리의 루트, `docs` 또는 `.github` 폴더에 추가할 수 있습니다. 끌어오기 요청을 열거나 문제를 만들면 해당 파일에 대한 링크가 표시됩니다. 기여 지침에 대한 링크도 리포지토리의 `contribute` 페이지에 표시됩니다. `contribute` 페이지에 대한 예는 [github/docs/contribute](https://github.com/github/docs/contribute)를 참조하세요. 

![기여 지침](/assets/images/help/pull_requests/contributing-guidelines.png)

리포지토리 소유자에게 기여 지침은 사용자가 기여하는 방법을 전달하는 방법입니다.

기여자의 경우 지침은 올바른 형식의 끌어오기 요청을 제출하고 유용한 문제를 여는지 확인하는 데 도움이 됩니다.

소유자와 기여자 모두에게 기여 지침은 부적절하게 생성된 끌어오기 요청 또는 거부되었거나 다시 제출해야 하는 문제로 인한 시간과 번거로움을 줄입니다.

{% ifversion fpt or ghes or ghec %}

조직{% ifversion fpt or ghes or ghec %} 또는 개인 계정{% endif %}에 대한 기본 기여 지침을 만들 수 있습니다. 자세한 내용은 “[기본 커뮤니티 상태 파일 만들기](//communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)”를 참조하세요.

{% endif %}

{% tip %}

**팁:** 리포지토리 유지 관리자는 리포지토리에 대한 문제 또는 끌어오기 요청 템플릿을 만들어 문제에 대한 특정 지침을 설정할 수 있습니다. 자세한 내용은 “[문제 및 끌어오기 요청 템플릿 정보](/articles/about-issue-and-pull-request-templates)”를 참조하세요.

{% endtip %}

## *CONTRIBUTING* 파일 추가

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. 리포지토리의 루트, `docs` 또는 `.github` 디렉터리에 기여 지침을 저장할지 여부를 결정합니다. 그런 다음, 파일 이름 필드에 템플릿의 이름 및 확장명을 입력합니다. 기여 지침 파일 이름은 대/소문자를 구분하지 않습니다. 파일 확장자가 지원되는 형식인 경우 파일은 서식 있는 텍스트 형식으로 렌더링됩니다. 자세한 내용은 “[비 코드 파일 작업](/repositories/working-with-files/using-files/working-with-non-code-files#rendering-differences-in-prose-documents)”을 참조하세요.
  ![새 파일 이름](/assets/images/help/repository/new-file-name.png)
    - 리포지토리의 루트 디렉터리에 기여 지침을 표시하려면 *CONTRIBUTING* 을 입력합니다.
    - 리포지토리의 `docs` 디렉터리에 기여 지침을 표시하려면 *docs/* 를 입력하여 새 디렉터리를 만든 다음 `docs`*CONTRIBUTING* 을 만듭니다.
    - 리포지토리에 둘 이상의 *CONTRIBUTING* 파일이 포함된 경우 링크에 표시된 파일은 `.github` 디렉터리, 리포지토리의 루트 디렉터리, 마지막으로 `docs` 디렉터리 순으로 선택됩니다.
4. 새 파일에서 기여 지침을 추가합니다. 여기에는 다음이 포함될 수 있습니다.
    - 좋은 문제 또는 끌어오기 요청을 만드는 단계입니다.
    - 외부 설명서, 우편 목록 또는 사용 규정에 대한 링크입니다.
    - 커뮤니티 및 예상되는 행동.
{% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_new_file %}

## 기여 지침의 예

도움이 필요한 경우, 기여 지침의 몇 가지 좋은 예를 살펴보세요.

- {% 데이터 variables.product.prodname_docs %} [기여 지침](https://github.com/github/docs/blob/main/CONTRIBUTING.md)입니다.
- Ruby on Rails [기여 지침](https://github.com/rails/rails/blob/main/CONTRIBUTING.md).
- Open Government [기여 지침](https://github.com/opengovernment/opengovernment/blob/master/CONTRIBUTING.md).

## 추가 참고 자료
- 오픈 소스 가이드의 “[오픈 소스 프로젝트 시작](https://opensource.guide/starting-a-project/)”{% ifversion fpt or ghec %}
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}){% endif %}{% ifversion fpt or ghes or ghec %}
- “[리포지토리에 라이선스 추가](/articles/adding-a-license-to-a-repository)”{% endif %}
