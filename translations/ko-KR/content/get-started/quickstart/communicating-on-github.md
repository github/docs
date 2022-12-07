---
title: GitHub에서 통신
intro: '{% data variables.product.product_name %}에서 다양한 유형의 토론을 사용하여 특정 프로젝트 및 변경 사항뿐만 아니라 광범위한 아이디어 또는 팀 목표에 대해 논의할 수 있습니다.'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/getting-started/quickstart-for-communicating-on-github
  - /articles/about-discussions-in-issues-and-pull-requests
  - /github/collaborating-with-issues-and-pull-requests/about-conversations-on-github
  - /github/collaborating-with-issues-and-pull-requests/quickstart-for-communicating-on-github
  - /github/getting-started-with-github/quickstart/communicating-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
  - Discussions
  - Fundamentals
ms.openlocfilehash: 18321069abd4fb48956f4d61653b8bbe592c648b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106791'
---
## 소개

{% data variables.product.product_name %}은 커뮤니티와 긴밀하게 상호 작용할 수 있는 기본 제공 협업 통신 도구를 제공합니다. 이 빠른 시작 가이드에서는 요구 사항에 맞는 도구를 선택하는 방법을 보여 줍니다.

{% ifversion discussions %} 원하는 대화 유형에 따라 문제, 끌어오기 요청, {% data variables.product.prodname_discussions %} 및 팀 토론을 만들고 참여할 수 있습니다.
{% else %} 원하는 대화 유형에 따라 문서, 끌어오기 요청 및 팀 토론을 만들고 참여할 수 있습니다.
{% endif %}

### {% data variables.product.prodname_github_issues %}
- 버그 보고서, 계획된 개선 사항 및 피드백과 같은 프로젝트의 특정 세부 정보를 설명하는 데 유용합니다. 
- 리포지토리와 관련이 있으며, 일반적으로 명확한 소유자가 있습니다. 
- {% data variables.product.prodname_dotcom %}의 버그 추적 시스템이라고 하는 경우가 많습니다.
  
### 끌어오기 요청
- 특정 변경 내용을 제안할 수 있습니다.
- 다른 사용자가 제안한 변경 내용에 대한 댓글을 직접 제시할 수 있습니다. 
- 리포지토리와 관련이 있습니다. 
 
{% ifversion fpt or ghec %}
### {% data variables.product.prodname_discussions %}
-  포럼과 같으며, 협업이 중요한 개방형 아이디어와 토론에 가장 적합합니다. 
-  여러 리포지토리에 걸쳐 있을 수 있습니다. 
-  코드베이스 외부에서 협업 환경을 제공하여 아이디어를 브레인스토밍하고 커뮤니티 기술 자료를 만들 수 있습니다.
-  명확한 소유자가 없는 경우가 많습니다.
-  실행 가능한 작업이 수행되지 않는 경우가 많습니다.
{% endif %}

### 팀 토론
- 여러 프로젝트에 걸쳐 있고 특정 문서 또는 끌어오기 요청에 속하지 않는 대화를 위해 팀 페이지에서 시작할 수 있습니다. 아이디어를 논의하기 위해 리포지토리에서 문제를 여는 대신 팀 토론에서의 대화를 통해 전체 팀이 참여하도록 할 수 있습니다.
- 한 곳에서 계획, 분석, 디자인, 사용자 연구 및 일반 프로젝트 의사 결정에 대해 팀과 논의할 수 있습니다.{% ifversion ghes or ghae %} 
- 코드베이스 외부에서 협업 환경을 제공하여 아이디어를 브레인스토밍할 수 있습니다.
- 명확한 소유자가 없는 경우가 많습니다.
- 실행 가능한 작업이 수행되지 않는 경우가 많습니다.{% endif %}

## 어떤 토론 도구를 사용해야 하나요?

### 문제 시나리오

- 작업, 향상된 기능 및 버그를 추적하려고 합니다.
- 버그 보고서를 제출하려고 합니다.
- 특정 기능에 대한 피드백을 공유하려고 합니다.
- 리포지토리에 있는 파일에 대해 질문하려고 합니다.

#### 문제 예시

이 예에서는 {% data variables.product.prodname_dotcom %} 사용자가 설명서 오픈 소스 리포지토리에서 문제를 만들어 버그를 알리고 수정에 대해 논의한 방법을 보여 줍니다. 

![문제의 예](/assets/images/help/issues/issue-example.png)

- 한 사용자는 중국어 버전의 {% data variables.product.prodname_dotcom %} 문서에서 페이지 위쪽에 있는 배너의 파란색으로 인해 배너의 텍스트를 읽을 수 없다는 것을 알게 되었습니다. 
- 사용자가 리포지토리에서 문제를 만들고, 문제를 설명하고, 수정(즉, 다른 배경색을 배너에 사용)을 제안했습니다.
- 토론이 계속되고, 결국에는 적용할 수정에 대한 합의에 도달합니다.
- 그런 다음, 기여자가 수정을 사용하여 끌어오기 요청을 만들 수 있습니다.

### 끌어오기 요청 시나리오

- 리포지토리에서 오타를 수정하려고 합니다.
- 리포지토리를 변경하려고 합니다.
- 문제를 해결하기 위해 변경하려고 합니다.
- 다른 사용자가 제안한 변경 내용에 대해 댓글을 제시하려고 합니다.

#### 풀 요청 예제

이 예에서는 {% data variables.product.prodname_dotcom %} 사용자가 설명서 오픈 소스 리포지토리에서 오타를 수정하기 위해 끌어오기 요청을 만든 방법을 보여 줍니다. 

끌어오기 요청의 **대화** 탭에서 작성자가 끌어오기 요청을 만든 이유를 설명합니다.

![끌어오기 요청의 예 - 대화 탭](/assets/images/help/pull_requests/pr-conversation-example.png)

끌어오기 요청의 **파일이 변경됨** 탭에 구현된 수정이 표시됩니다.

![끌어오기 요청의 예 - 파일이 변경됨 탭](/assets/images/help/pull_requests/pr-files-changed-example.png)

- 이 기여자는 리포지토리에서 오타를 발견했습니다.
- 사용자가 수정을 사용하여 끌어오기 요청을 만듭니다.
- 리포지토리 유지 관리자가 끌어오기 요청을 검토하고, 이에 대한 댓글을 제시하고, 병합합니다.

{% ifversion discussions %}
### {% data variables.product.prodname_discussions %} 시나리오

- 리포지토리의 특정 파일과 반드시 ​​관련되지 않는 질문이 있습니다.
- 뉴스를 협력자 또는 팀과 공유하려고 합니다.
- 개방형 대화를 시작하거나 참여하려고 합니다.
- 커뮤니티에 공지하려고 합니다.

#### {% data variables.product.prodname_discussions %} 예

이 예에서는 {% data variables.product.prodname_dotcom %} 설명서 오픈 소스 리포지토리에 대한 {% data variables.product.prodname_discussions %} 시작 게시물을 보여 주고 팀에서 커뮤니티와 협업하려는 방법을 보여 줍니다.

![{% data variables.product.prodname_discussions %}의 예](/assets/images/help/discussions/github-discussions-example.png)

이 커뮤니티 유지 관리자는 커뮤니티를 환영하고 멤버에게 자신을 소개하도록 요청하는 토론을 시작했습니다. 이 게시물은 방문자와 기여자를 위한 매력적인 분위기를 조성합니다. 또한 이 게시물은 팀에서 리포지토리에 대한 기여를 위해 기꺼이 지원한다고 명확히 하고 있습니다.

{% endif %}
### 팀 토론 시나리오

- 리포지토리의 특정 파일과 반드시 ​​관련되지 않는 질문이 있습니다.
- 뉴스를 협력자 또는 팀과 공유하려고 합니다.
- 개방형 대화를 시작하거나 참여하려고 합니다.
- 팀에 공지하려고 합니다.

{% ifversion fpt or ghec %} 보시다시피 팀 토론은 {% data variables.product.prodname_discussions %}와 매우 비슷합니다. {% data variables.product.prodname_dotcom_the_website %}의 경우 {% data variables.product.prodname_discussions %}를 대화의 시작점으로 사용하는 것이 좋습니다. {% data variables.product.prodname_discussions %}를 사용하여 {% data variables.product.prodname_dotcom %}의 커뮤니티와 협업할 수 있습니다. 조직의 일부이고 조직 내에서 또는 해당 조직 내의 팀에서 대화를 시작하려면 팀 토론을 사용해야 합니다.
{% endif %}

#### 팀 토론 예

이 예에서는 `octo-team` 팀의 팀 게시물을 보여 줍니다.

![팀 토론의 예](/assets/images/help/projects/team-discussions-example.png)

`octocat` 팀 멤버가 팀 토론을 게시하여 다음과 같은 다양한 사항을 팀에 알렸습니다.
- Mona라는 팀 멤버가 원격 게임 이벤트를 시작했습니다.
- 팀에서 {% data variables.product.prodname_actions %}를 사용하여 문서를 생성하는 방법을 설명하는 블로그 게시물이 있습니다.
- 이제 모든 팀 멤버가 April All Hands에 대한 자료를 볼 수 있습니다.

## 다음 단계

이러한 예에서는 {% data variables.product.product_name %}에서 가장 적합한 대화 도구를 결정하는 방법을 보여 주었습니다. 그러나 이는 시작에 불과합니다. 이러한 도구를 요구 사항에 맞게 조정하기 위해 수행할 수 있는 작업이 훨씬 더 많습니다.

예를 들어 문제의 경우 더 빠른 검색을 위해 레이블을 사용하여 태그를 문제에 지정하고, 기여자가 의미 있는 문제를 열 수 있도록 문제 템플릿을 만들 수 있습니다. 자세한 내용은 "[문제 정보](/github/managing-your-work-on-github/about-issues#working-with-issues)" 및 "[문제 및 끌어오기 요청 템플릿 정보](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/about-issue-and-pull-request-templates)"를 참조하세요.

끌어오기 요청의 경우 제안된 변경 내용이 아직 진행 중인 경우 초안 끌어오기 요청을 만들 수 있습니다. 초안 끌어오기 요청은 검토할 준비가 된 것으로 표시된 후에만 병합할 수 있습니다. 자세한 내용은 “[끌어오기 요청 정보](/github/collaborating-with-issues-and-pull-requests/about-pull-requests#draft-pull-requests)”를 참조하세요.

{% ifversion discussions %} {% data variables.product.prodname_discussions %}의 경우 {% ifversion fpt or ghec %}사용 규정을 설정하고,{% endif %} 커뮤니티에 중요한 정보가 포함된 토론을 고정할 수 있습니다. 자세한 내용은 “[토론 정보](/discussions/collaborating-with-your-community-using-discussions/about-discussions)”를 참조하세요.
{% endif %}

팀 토론의 경우 팀 페이지에서 토론을 편집하거나 삭제할 수 있으며, 팀 토론에 대한 알림을 구성할 수 있습니다. 자세한 내용은 “[팀 토론 정보](/organizations/collaborating-with-your-team/about-team-discussions)”를 참조하세요.

통신하는 데 도움이 되는 몇 가지 고급 서식 지정 기능을 알아보려면 "[{% data variables.product.prodname_dotcom %}에 쓰기 위한 빠른 시작](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/quickstart-for-writing-on-github)"을 참조하세요.
