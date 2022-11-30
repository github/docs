---
title: GitHub 문제에 대한 빠른 시작
intro: '이 간략한 대화형 가이드를 따라 {% data variables.product.prodname_github_issues %}에 대해 알아보세요.'
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: quick_start
topics:
  - Issues
  - Project management
ms.openlocfilehash: 16e52a7b75b34dc8de2f982cf6d0a0bf5d8e9574
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147423254'
---
## 소개

이 가이드에서는 {% data variables.product.prodname_github_issues %}을(를) 사용하여 작업 부분을 계획하고 추적하는 방법을 보여 줍니다. 이 가이드에서는 새 문제를 만들고 하위 작업을 추적하는 작업 목록을 추가합니다. 레이블, 마일스톤, 담당자, 프로젝트를 추가하여 문제에 대한 메타데이터를 전달하는 방법도 알아봅니다.

## 필수 조건

문제를 만들려면 리포지토리가 필요합니다. 쓰기 권한이 있는 기존 리포지토리를 사용하거나 새 리포지토리를 만들 수 있습니다. {% data reusables.enterprise-accounts.emu-permission-repo %} 리포지토리에 문제가 활성화되어 있어야 합니다. 리포지토리를 만드는 방법에 대한 자세한 내용은 “[새 리포지토리 만들기](/articles/creating-a-new-repository)”를 참조하세요. 리포지토리에서 문제를 사용하지 않도록 설정된 경우 문제를 사용하도록 설정하는 방법에 대한 자세한 내용은 “[문제 사용 안 함](/github/administering-a-repository/managing-repository-settings/disabling-issues)”을 참조하세요.

## 빈 문제 열기

먼저 문제를 만듭니다. 문제를 만드는 방법에는 여러 가지가 있습니다. 워크플로에 가장 편리한 방법을 선택할 수 있습니다. 이 예제에서는 {% data variables.product.prodname_dotcom %} UI를 사용합니다. 문제를 만드는 다른 방법에 대한 자세한 내용은 “[문제 만들기](/issues/tracking-your-work-with-issues/creating-an-issue)”를 참조하세요.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issues %} {% data reusables.repositories.new_issue %}
1. 이 예제에서는 빈 문제로 시작합니다. 리포지토리는 문제 템플릿{% ifversion fpt or ghec %}을(를) 사용하고 양식{% endif %}을(를) 발행하여 기여자가 특정 정보를 제공하도록 장려할 수 있습니다. 리포지토리에서 문제 템플릿을 사용하는 경우 {% ifversion fpt or ghes or ghec %}**빈 문제 열기** 를 클릭합니다{% else %}**일반 문제 열기** 를 클릭합니다.{% endif %}.

![빈 문제](/assets/images/help/issues/blank-issue.png)

## 정보 입력

문제를 설명하는 제목을 지정합니다. 제목은 문제가 무엇인지 한 눈에 전달해야 합니다.

문제를 해결하는 데 도움이 될 수 있는 세부 정보를 포함하여 문제의 목적을 설명하는 설명을 추가합니다. 예를 들어 버그 보고서인 경우 버그, 예상 결과, 실제 결과를 재현하는 단계를 설명합니다.

markdown을 사용하여 서식, 링크, 이모지 등을 추가할 수 있습니다. 자세한 내용은 “[GitHub에서 쓰기](/github/writing-on-github)”를 참조하세요.

![문제 제목 및 본문](/assets/images/help/issues/issue-title-body.png)

## 작업 목록 추가

큰 문제를 더 작은 작업으로 나누거나 단일 더 큰 문제에서 여러 관련 문제를 추적하는 것이 유용할 수 있습니다. 목록 항목 앞에 `[ ]`을 추가하여 문제에 작업 목록을 추가합니다. 문제 번호 또는 URL로 기존 문제를 참조합니다. 일반 텍스트를 사용하여 해당 문제가 없는 작업을 추적하고 나중에 문제로 변환할 수 있습니다. 자세한 내용은 “[작업 목록 정보](/issues/tracking-your-work-with-issues/about-task-lists)”를 참조하세요.

![작업 목록 관련 문제](/assets/images/help/issues/issue-task-list-raw.png)

## 레이블 추가

문제를 분류하는 레이블을 추가합니다. 예를 들어 `bug` 레이블과 `good first issue` 레이블을 사용하여 문제가 처음 기여자가 선택할 수 있는 버그임을 나타낼 수 있습니다. 사용자는 레이블별로 문제를 필터링하여 특정 레이블이 있는 모든 문제를 찾을 수 있습니다.

기본 레이블을 사용하거나 새 레이블을 만들 수 있습니다. 자세한 내용은 “[레이블 관리](/issues/using-labels-and-milestones-to-track-work/managing-labels)”를 참조하세요.

![레이블 관련 문제](/assets/images/help/issues/issue-with-label.png)

## 마일스톤 추가

마일스톤을 추가하여 날짜 기반 대상의 일부로 문제를 추적할 수 있습니다. 마일스톤은 대상 날짜가 다가오면서 문제의 진행률을 표시합니다. 자세한 내용은 “[마일스톤 정보](/issues/using-labels-and-milestones-to-track-work/about-milestones)”를 참조하세요.

![마일스톤 관련 문제](/assets/images/help/issues/issue-milestone.png)

## 문제 할당

책임을 전달하기 위해 조직의 구성원에게 문제를 할당할 수 있습니다. 자세한 내용은 “[다른 GitHub 사용자에게 문제 할당 및 끌어오기 요청](/issues/tracking-your-work-with-issues/assigning-issues-and-pull-requests-to-other-github-users)”을 참조하세요.

![담당자 관련 문제](/assets/images/help/issues/issue-assignees.png)

## 프로젝트에 문제 추가

기존 프로젝트{% ifversion projects-v2 %}에 문제를 추가하고 프로젝트에 대한 메타데이터를 채울 수 있습니다. {% endif %} 프로젝트에 대한 자세한 내용은 {% ifversion projects-v2 %}“[프로젝트 정보](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)”{% else %}“[프로젝트 보드로 작업 정리](/issues/organizing-your-work-with-project-boards)”를 참조하세요.{% endif %}

![프로젝트 관련 문제](/assets/images/help/issues/issue-project.png)

## 문제 제출

**새 문제 제출** 을 클릭하여 문제를 만듭니다. 문제를 만든 후 위의 필드를 편집할 수 있습니다. 문제에는 팀 구성원과 공유하거나 다른 문제 또는 끌어오기 요청에서 참조할 수 있는 고유한 URL이 있습니다.

## 대화

문제가 생성된 후 문제에 주석을 추가하여 대화를 계속합니다. 협력자 또는 팀이 주석에 관심을 갖도록 @mention할 수 있습니다. 동일한 리포지토리에서 관련 문제를 연결하려면 `#`를 입력하고 문제 제목의 일부를 입력한 다음 연결하려는 문제를 클릭할 수 있습니다. 자세한 내용은 “[GitHub에서 쓰기](/github/writing-on-github)”를 참조하세요.

![이슈 댓글](/assets/images/help/issues/issue-comment.png)

## 다음 단계

다양한 용도로 문제를 사용할 수 있습니다. 예를 들면 다음과 같습니다.

- 아이디어 추적
- 피드백 수집
- 작업 계획
- 버그 보고

다음은 {% data variables.product.prodname_github_issues %}(으)로 다음 단계를 수행하는 데 유용한 리소스입니다.

- 문제에 대한 자세한 내용은 “[문제 정보](/issues/tracking-your-work-with-issues/about-issues)”를 참조하세요.
- 프로젝트가 계획 및 추적에 도움이 되는 방법에 대한 자세한 내용은 {% ifversion projects-v2 %}“[프로젝트 정보](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)”{% else %}“[프로젝트 보드로 작업 정리](/issues/organizing-your-work-with-project-boards)”를 참조하세요.{% endif %}
- 문제 템플릿{% ifversion fpt or ghec %} 및 문제 양식{% endif %}을(를) 사용하여 기여자가 특정 정보를 제공하도록 권장하는 방법에 대한 자세한 내용은 “[템플릿을 사용하여 유용한 문제 및 끌어오기 요청 장려](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)”를 참조하세요.
