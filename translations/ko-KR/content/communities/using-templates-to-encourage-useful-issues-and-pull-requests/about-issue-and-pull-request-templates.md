---
title: 문제 및 끌어오기 요청 템플릿 사용
intro: 문제 및 끌어오기 요청 템플릿을 사용하면 기여자가 리포지토리에서 문제를 공개하고 요청을 끌어올 때 포함시키도록 하고 싶은 정보를 사용자 지정하고 표준화할 수 있습니다.
redirect_from:
  - /articles/about-issue-and-pull-request-templates
  - /github/building-a-strong-community/about-issue-and-pull-request-templates
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: About templates
ms.openlocfilehash: b95b31ae4171a54d9261fab6cbe93c43361296ab
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145117591'
---
리포지토리에서 문제를 만들고 요청 템플릿을 끌어오면 기여자는 템플릿을 사용하여 문제를 열거나 리포지토리의 기여 지침에 따라 끌어오기 요청에서 제안된 변경 내용을 설명할 수 있습니다. 리포지토리에 기여 지침을 추가하는 방법에 대한 자세한 내용은 “[리포지토리 참가자에 대한 지침 설정](/articles/setting-guidelines-for-repository-contributors)”을 참조하세요.

{% ifversion fpt or ghes or ghec %}

조직 또는 개인 계정에 대한 기본 문제 및 끌어오기 요청 템플릿을 만들 수 있습니다. 자세한 내용은 “[기본 커뮤니티 상태 파일 만들기](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)”를 참조하세요.

{% endif %}

## 문제 템플릿

문제 템플릿 빌더{% ifversion fpt or ghec %} 또는 문제 양식{% endif %}을 사용하여 리포지토리에 대한 문제 템플릿을 만드는 경우 기여자는 리포지토리에서 새 문제를 열 때 적절한 템플릿을 선택할 수 있습니다.

![문제 템플릿 선택 항목을 보여 주는 새 문제 페이지](/assets/images/help/issues/new-issue-page-with-multiple-templates.png)

문제 템플릿은 참가자가 문제의 내용을 지정할 수 있도록 하면서 문제를 열기 위한 지침을 제공하려는 경우에 유용합니다. {% ifversion fpt or ghec %} 참가자가 문제를 열 때 특정하고 구조화된 정보를 제공하려는 경우 문제 양식을 통해 원하는 정보를 받을 수 있습니다. {% endif %}

템플릿 작성기를 사용하여 각 템플릿에 대한 제목과 설명을 지정하고, 템플릿 콘텐츠를 추가하고, 템플릿을 기본 분기에 커밋하거나 리포지토리에서 끌어오기 요청을 열 수 있습니다. 템플릿 작성기는 템플릿이 새 문제 페이지에 표시되는 데 필요한 YAML 전면 문제 태그를 자동으로 추가합니다. 자세한 내용은 “[리포지토리에 대한 문제 템플릿 구성](/articles/configuring-issue-templates-for-your-repository)”을 참조하세요.

{% ifversion fpt or ghec %} 문제 양식을 사용하면 {% data variables.product.prodname_dotcom %} 양식 스키마를 사용하여 웹 양식 필드가 있는 템플릿을 만들 수 있습니다. 기여자가 문제 양식을 사용하여 문제를 열면 양식 입력이 표준 Markdown 문제 주석으로 변환됩니다. 참가자가 리포지토리에서 실행 가능한 문제를 열 수 있도록 다양한 입력 유형을 지정하고 필요에 따라 입력을 설정할 수 있습니다. 자세한 내용은 “[리포지토리에 대한 문제 템플릿 구성](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository#creating-issue-forms)” 및 “[문제 양식 구문](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms)”을 참조하세요.
{% endif %}

{% data reusables.repositories.issue-template-config %} 자세한 내용은 “[리포지토리에 대한 문제 템플릿 구성](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository#configuring-the-template-chooser)”을 참조하세요.

문제 템플릿은 숨겨진 `.github/ISSUE_TEMPLATE` 디렉터리에 있는 리포지토리의 기본 분기에 저장됩니다. 다른 분기에서 템플릿을 만드는 경우 협력자가 사용할 수 없습니다. 문제 템플릿 파일 이름은 대/소문자를 구분하지 않으며 *.md* 확장이 필요합니다. {% ifversion fpt or ghec %} 문제 양식으로 만든 문제 템플릿에는 *.yml* 확장이 필요합니다. {% endif %} {% data reusables.repositories.valid-community-issues %}

레거시 문제 템플릿 워크플로를 사용하여 Markdown에서 단일 문제 템플릿을 수동으로 만들 수 있으며 프로젝트 참가자는 문제 본문에 템플릿의 콘텐츠를 자동으로 볼 수 있습니다. 그러나 업그레이드된 여러 문제 템플릿 작성기{% ifversion fpt or ghec %} 또는 발급 양식{% endif %}을 사용하여 문제 템플릿을 만드는 것이 좋습니다. 레거시 워크플로에 대한 자세한 내용은 “[리포지토리에 대한 단일 문제 템플릿을 수동으로 만들기](/articles/manually-creating-a-single-issue-template-for-your-repository)”를 참조하세요.

{% data reusables.repositories.security-guidelines %}

## 끌어오기 요청 템플릿

리포지토리에 끌어오기 요청 템플릿을 추가하면 프로젝트 참가자는 끌어오기 요청 본문에 템플릿의 콘텐츠를 자동으로 볼 수 있습니다.

![샘플 끌어오기 요청 템플릿](/assets/images/help/pull_requests/pr-template-sample.png)

리포지토리의 기본 분기에 템플릿을 만들어야 합니다. 다른 분기에서 만든 템플릿은 협력자가 사용할 수 없습니다. 끌어오기 요청 템플릿을 리포지토리의 표시되는 루트 디렉터리, `docs` 폴더 또는 숨겨진 `.github` 디렉터리에 저장할 수 있습니다. 끌어오기 요청 템플릿 파일 이름은 대/소문자를 구분하지 않으며 확장명(예: *.md* 또는 *.txt*)을 가질 수 있습니다.

자세한 내용은 “[리포지토리에 대한 끌어오기 요청 템플릿 만들기](/articles/creating-a-pull-request-template-for-your-repository)”를 참조하세요.
