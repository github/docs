---
title: 리포지토리에 대한 단일 문제 템플릿 수동으로 만들기
intro: 리포지토리에 수동으로 만든 문제 템플릿을 추가하면 프로젝트 참가자는 문제 본문에 템플릿의 콘텐츠를 자동으로 볼 수 있습니다.
redirect_from:
  - /articles/creating-an-issue-template-for-your-repository
  - /articles/manually-creating-a-single-issue-template-for-your-repository
  - /github/building-a-strong-community/manually-creating-a-single-issue-template-for-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Create an issue template
ms.openlocfilehash: 0d10da9cc3be128744a7b0465c016d1c6346b6f3
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145090179'
---
{% data reusables.repositories.legacy-issue-template-tip %}

여러 문제 템플릿을 포함하도록 지원되는 폴더에 *ISSUE_TEMPLATE/* 하위 디렉터리를 만들고 쿼리 매개 변수를 사용하여 `template` 문제 본문을 채울 템플릿을 지정할 수 있습니다. 자세한 내용은 “[쿼리 매개 변수를 사용하여 문제 및 끌어오기 요청에 대한 자동화 정보](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters)”를 참조하세요.

각 문제 템플릿에 YAML frontmatter를 추가하여 문제 제목을 미리 채우고, 레이블 및 담당자를 자동으로 추가하고, 리포지토리에서 새 문제를 만들 때 사용자가 볼 수 있는 템플릿 선택기에서 표시되는 이름과 설명을 템플릿에 제공할 수 있습니다.

다음은 YAML Frontmatter의 예제입니다.

```yaml
---
name: Tracking issue
about: Use this template for tracking new features.
title: "[DATE]: [FEATURE NAME]"
labels: tracking issue, needs triage
assignees: octocat
---
```
{% note %}

**참고:** 앞의 문제 값에 YAML 예약 문자(예: `:` )가 포함된 경우 전체 값을 따옴표로 넣어야 합니다. 예를 들어 `":bug: Bug"` 또는 `":new: triage needed, :bug: bug"`입니다.

{% endnote %}

{% ifversion fpt or ghec %}

{% data reusables.repositories.valid-community-issues %}

{% endif %}

{% ifversion fpt or ghes or ghec %}

{% data reusables.repositories.default-issue-templates %}

{% endif %}

## 문제 템플릿 추가

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. 파일 이름 필드에서 다음을 수행합니다.
    -  리포지토리의 루트 디렉터리에 문제 템플릿을 표시하려면 *issue_template* 이름을 입력합니다. 예: `issue_template.md`.
  ![루트 디렉터리의 새 문제 템플릿 이름](/assets/images/help/repository/issue-template-file-name.png)
    - 리포지토리의 `docs` 디렉터리에 문제 템플릿을 표시하려면 *docs/* 다음에 *issue_template* 이름을 입력합니다. 예를 들어 `docs/issue_template.md`, ![문서 디렉터리의 새 문제 템플릿](/assets/images/help/repository/issue-template-file-name-docs.png)입니다.
    - 파일을 숨겨진 디렉터리에 저장하려면 *.github/* 다음에 *issue_template* 이름을 입력하세요. 예: `.github/issue_template.md`.
  ![숨겨진 디렉터리의 새 문제 템플릿](/assets/images/help/repository/issue-template-hidden-directory.png)
    - 여러 문제 템플릿을 만들고 `template` 쿼리 매개 변수를 사용하여 문제 본문을 채울 템플릿을 지정하려면 *.github/ISSUE_TEMPLATE/* 을 입력한 다음 문제 템플릿의 이름을 입력합니다. 예: `.github/ISSUE_TEMPLATE/issue_template.md`. 루트 또는 `docs/` 디렉터리 내의 `ISSUE_TEMPLATE` 하위 디렉터리에 여러 문제 템플릿을 저장할 수도 있습니다. 자세한 내용은 “[쿼리 매개 변수를 사용하여 문제 및 끌어오기 요청에 대한 자동화 정보](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters)”를 참조하세요.
  ![숨겨진 디렉터리의 새 여러 문제 템플릿](/assets/images/help/repository/issue-template-multiple-hidden-directory.png)
4. 새 파일의 본문에 문제 템플릿을 추가합니다. 여기에는 다음이 포함될 수 있습니다.
    - YAML Frontmatter
    - 예상 동작 및 실제 동작
    - 문제를 재현하기 위한 단계
    - 프로젝트 버전, 운영 체제 또는 하드웨어 {% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} 템플릿과 같은 사양은 협력자가 리포지토리의 기본 분기에 병합할 때 사용할 수 있습니다.
{% data reusables.files.propose_new_file %}

## 추가 참고 자료

- “[문제 및 끌어오기 요청 템플릿 정보](/articles/about-issue-and-pull-request-templates)”
- “[리포지토리에 대한 문제 템플릿 구성](/articles/configuring-issue-templates-for-your-repository)”
- “[쿼리 매개 변수를 사용하여 문제 및 끌어오기 요청에 대한 자동화 정보](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters)”
- “[문제 만들기](/articles/creating-an-issue)”
