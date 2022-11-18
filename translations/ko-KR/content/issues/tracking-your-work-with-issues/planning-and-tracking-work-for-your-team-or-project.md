---
title: 팀 또는 프로젝트에 대한 작업 계획 및 추적
intro: '{% data variables.product.prodname_dotcom %}의 계획 및 추적 도구를 사용하여 팀 또는 프로젝트에서 작업을 관리하기 위한 기본 정보입니다.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Project management
  - Projects
ms.openlocfilehash: 782351c80164c90d479120996edf25329d20078c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147423614'
---
## 소개
개별 프로젝트로 작업하든, 부서 간 팀 현태로 작업하든, {% data variables.product.prodname_dotcom %} 리포지토리, 이슈, 프로젝트 보드 및 기타 도구를 사용하여 작업을 계획하고 추적할 수 있습니다.

이 가이드에서는 사용자 그룹과 공동 작업하기 위한 리포지토리를 만들고 설정하고, 이슈 템플릿{% ifversion fpt or ghec %} 및 양식{% endif %}을 만들고, 이슈를 열고, 작업 목록을 사용하여 작업을 분류하고, 이슈를 구성하고 추적하기 위한 프로젝트 보드를 설정하는 방법을 알아봅니다.

## 리포지토리 만들기
새 프로젝트, 이니셔티브 또는 기능을 시작할 때 첫 번째 단계는 리포지토리를 만드는 것입니다. 리포지토리는 프로젝트의 모든 파일을 포함하며 다른 사용자와 공동 작업하고 작업을 관리할 수 있는 장소를 제공합니다. 자세한 내용은 “[새 리포지토리 만들기](/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-new-repository)”를 참조하세요.

필요에 따라 다양한 용도로 리포지토리를 설정할 수 있습니다. 다음은 몇 가지 일반적인 사용 사례입니다.

- **제품 리포지토리**: 특정 제품에 대한 작업 및 목표를 추적하는 대규모 조직에는 코드 및 기타 파일이 포함된 리포지토리가 하나 이상 있을 수 있습니다. 이러한 리포지토리는 설명서, 제품 상태에 대한 보고 또는 제품에 대한 향후 계획에도 사용할 수 있습니다. 
- **프로젝트 리포지토리**: 작업 중인 개별 프로젝트 또는 다른 사용자와 공동 작업 중인 프로젝트에 대한 리포지토리를 만들 수 있습니다. 컨설팅 회사와 같이 단기 이니셔티브 또는 프로젝트에 대한 작업을 추적하는 조직의 경우 프로젝트의 상태를 보고하고, 기술 및 요구에 따라 다른 프로젝트 간에 사람들을 이동해야 합니다. 프로젝트에 대한 코드는 종종 단일 리포지토리에 포함됩니다.
- **팀 리포지토리**: 사용자를 팀으로 그룹화하고 개발 도구 팀 등에 프로젝트를 제공하는 조직의 경우, 추적해야 하는 다양한 작업에 대한 여러 리포지토리에 코드가 분산될 수 있습니다. 이 경우 팀별 리포지토리를 팀이 참여하는 모든 작업을 추적하는 단일 장소로 유지하는 것이 도움이 될 수 있습니다.
- **개인 리포지토리**: 개인 리포지토리를 만들어 한 곳에서 모든 작업을 추적하거나, 향후 작업을 계획하거나, 저장하려는 노트 또는 정보를 추가할 수 있습니다. 이 정보를 다른 사용자와 공유하려는 경우 공동 작업자를 추가할 수도 있습니다. 

소스 코드와 이슈 및 토론 추적에 대해 서로 다른 액세스 권한을 유지하려는 경우 별도의 여러 리포지토리를 만들 수 있습니다. 자세한 내용은 “[이슈 전용 리포지토리 만들기](/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-an-issues-only-repository)”를 참조하세요.

이 가이드의 다음 예제에서는 Project Octocat이라는 예제 리포지토리를 사용합니다.
## 리포지토리 정보 전달
리포지토리에 대한 README.md 파일을 만들어 팀 또는 프로젝트를 소개하고 이에 대한 중요한 정보를 전달할 수 있습니다. 추가 정보는 종종 리포지토리에 대한 방문자가 보게 되는 첫 번째 항목이므로 사용자 또는 기여자가 프로젝트를 시작할 수 있는 방법 및 팀에 연락하는 방법에 대한 정보를 제공할 수도 있습니다. 자세한 내용은 “[추가 정보](/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-readmes)”를 참조하세요.

또한 사용자 또는 기여자가 팀 또는 프로젝트에 기여하고 상호 작용하는 방법(예: 버그 수정 이슈를 열거나 개선 사항을 요청하는 방법)에 대한 지침을 특별히 포함하는 CONTRIBUTING.md 파일을 만들 수 있습니다. 자세한 내용은 “[리포지토리 참가자에 대한 지침 설정](/communities/setting-up-your-project-for-healthy-contributions/setting-guidelines-for-repository-contributors)”을 참조하세요.
### 추가 정보 예제
새 프로젝트인 Project Octocat을 소개하는 README.md를 만들 수 있습니다. 

![추가 정보 만들기 예제](/assets/images/help/issues/quickstart-creating-readme.png)
## 문제 템플릿 만들기

이슈를 사용하여 부서 간 팀 또는 프로젝트에서 다루는 다양한 유형의 작업을 추적하고 프로젝트 외부의 작업에서 정보를 수집할 수 있습니다. 다음은 이슈에 대한 몇 가지 일반적인 사용 사례입니다.

- 릴리스 추적: 이슈를 사용하여 릴리스 진행 상황 또는 출시일을 완료하는 단계를 추적할 수 있습니다.
- 대규모 이니셔티브: 이슈를 사용하여 대규모 이니셔티브 또는 프로젝트의 진행 상황을 추적한 다음, 더 작은 이슈와 연결할 수 있습니다.
- 기능 요청: 팀 또는 사용자가 이슈를 만들어 제품 또는 프로젝트의 개선을 요청할 수 있습니다.
- 버그: 팀 또는 사용자가 이슈를 만들어 버그를 보고할 수 있습니다. 

작업 중인 리포지토리 및 프로젝트의 유형에 따라 특정 유형의 이슈를 다른 이슈보다 우선적으로 처리할 수 있습니다. 팀의 가장 일반적인 이슈 유형을 확인한 후에는 리포지토리에 대한 이슈 템플릿 {% ifversion fpt or ghec %}및 양식{% endif %}을 만들 수 있습니다. 이슈 템플릿 {% ifversion fpt or ghec %}및 양식{% endif %}을 사용하면 기여자가 리포지토리에서 이슈를 열 때 선택할 수 있는 표준화된 템플릿 목록을 만들 수 있습니다. 자세한 내용은 “[리포지토리에 대한 문제 템플릿 구성](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository)”을 참조하세요.

### 이슈 템플릿 예제
아래에서는 Project Octocat에서 버그를 보고하기 위한 이슈 템플릿을 만듭니다.

![이슈 템플릿 만들기 예제](/assets/images/help/issues/quickstart-creating-issue-template.png)

버그 보고서 이슈 템플릿을 만들었으므로 이제 Project Octocat에서 새 이슈를 만들 때 선택할 수 있습니다.

![이슈 템플릿 선택 예제](/assets/images/help/issues/quickstart-issue-creation-menu-with-template.png)

## 이슈 열기 및 작업 목록을 사용하여 작업 추적
이슈를 만들어 작업을 구성하고 추적할 수 있습니다. 자세한 내용은 “[이슈 만들기](/issues/tracking-your-work-with-issues/creating-issues/creating-an-issue)”를 참조하세요.
### 문제 예시
다음은 Project Octocat에서 대규모 이니셔티브 프런트 엔드 작업을 위해 생성된 이슈의 예입니다.

![대규모 이니셔티브 이슈 만들기 예제](/assets/images/help/issues/quickstart-create-large-initiative-issue.png)
### 작업 목록 예제

작업 목록을 사용하여 더 큰 이슈를 더 작은 작업으로 분할하고 더 큰 목표의 일부로 이슈를 추적할 수 있습니다. {% ifversion fpt or ghec %} 작업 목록에는 이슈 본문에 추가된 추가 기능이 있습니다. 이슈의 맨 위에서 총 작업 수 중에서 완료된 작업 수를 볼 수 있으며, 누군가가 작업 목록에 연결된 이슈를 닫으면 확인란이 자동으로 완료된 것으로 표시됩니다. {% endif %} 자세한 내용은 "[작업 목록 정보](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)"를 참조하세요.

아래에서는 Project Octocat 이슈에 작업 목록을 추가하여 더 작은 이슈로 구분했습니다.

![이슈에 작업 목록 추가 예제](/assets/images/help/issues/quickstart-add-task-list-to-issue.png)

## 팀으로서 의사 결정
이슈와 토론을 사용하여 프로젝트에 대한 계획된 개선 사항 또는 우선 순위를 전달하고 팀으로서 의사 결정을 내릴 수 있습니다. 이슈는 버그 또는 성능 보고서, 다음 분기에 대한 계획 또는 새 이니셔티브 디자인과 같은 특정 세부 정보를 토론하기 위해 만들면 유용합니다. 토론은 코드베이스 외부 및 리포지토리 전체에서 개방형 브레인스토밍 또는 피드백에 유용합니다. 자세한 내용은 "[어떤 토론 도구를 사용해야 하나요?"](/github/getting-started-with-github/quickstart/communicating-on-github#which-discussion-tool-should-i-use)를 참조하세요.

팀으로서 모든 사람이 작업 상태를 알 수 있도록 이슈 내에서 일상적인 작업에 대한 업데이트를 전달할 수도 있습니다. 예를 들어 여러 사람이 작업하는 대규모 기능에 대한 이슈를 만들 수 있으며 각 팀 멤버는 해당 상태의 업데이트를 추가하거나 해당 이슈에 대해 질문을 열 수 있습니다.
### 프로젝트 협력자를 사용하는 이슈 예제
다음은 Project Octocat 이슈에 대한 작업의 상태 업데이트를 제공하는 프로젝트 협력자의 예입니다.

![이슈에 대한 공동 작업 예제](/assets/images/help/issues/quickstart-collaborating-on-issue.png)
## 레이블을 사용하여 프로젝트 목표 및 상태 강조 표시
리포지토리에 대한 레이블을 만들어 이슈, 끌어오기 요청 및 토론을 분류할 수 있습니다. {% data variables.product.prodname_dotcom %}은 편집하거나 삭제할 수 있는 모든 새 리포지토리에 대한 기본 레이블도 제공합니다. 레이블은 프로젝트 목표, 버그, 작업 유형 및 이슈의 상태를 추적하는 데 유용합니다.

자세한 내용은 “[레이블 만들기](/issues/using-labels-and-milestones-to-track-work/managing-labels#creating-a-label)”를 참조하세요.

리포지토리에서 레이블을 만든 후에는 리포지토리의 모든 이슈, 끌어오기 요청 또는 토론에 레이블을 적용할 수 있습니다. 그런 다음, 레이블을 기준으로 이슈 및 끌어오기 요청을 필터링하여 연결된 모든 작업을 찾을 수 있습니다. 예를 들어, `front-end` 및 `bug` 레이블 관련 이슈를 필터링하여 프로젝트의 모든 프런트 엔드 버그를 찾습니다. 자세한 내용은 “[이슈 및 끌어오기 요청을 필터링하고 검색하기](/issues/tracking-your-work-with-issues/filtering-and-searching-issues-and-pull-requests)”를 참조하세요.
### 레이블 예제
다음은 이슈를 만들고 추가한 `front-end` 레이블의 예입니다.

![이슈에 레이블 추가 예제](/assets/images/help/issues/quickstart-add-label-to-issue.png)

## 프로젝트 보드에 이슈 추가

{% ifversion projects-v2 %}

{% data variables.product.prodname_dotcom %}에서 {% data variables.projects.projects_v2 %}를 사용하여 팀의 작업을 계획하고 추적할 수 있습니다. 프로젝트는 {% data variables.product.prodname_dotcom %}에서 이슈 및 끌어오기 요청과 통합되어 {% data variables.product.prodname_dotcom %}에 대한 정보로 자동으로 최신 상태를 유지하는 사용자 지정 가능한 스프레드시트입니다. 이슈와 PR을 필터링, 정렬 및 그룹화하여 레이아웃을 사용자 지정할 수 있습니다. 프로젝트를 시작하려면 “[프로젝트 빠른 시작](/issues/planning-and-tracking-with-projects/learning-about-projects/quickstart-for-projects)”을 참조하세요.
### 프로젝트 예제
다음은 만든 Project Octocat 이슈로 채워진 예제 프로젝트의 테이블 레이아웃입니다.

![프로젝트 테이블 레이아웃 예제](/assets/images/help/issues/quickstart-projects-table-view.png)

보드와 동일한 프로젝트를 볼 수도 있습니다.

![프로젝트 보드 레이아웃 예제](/assets/images/help/issues/quickstart-projects-board-view.png)

{% endif %} {% ifversion projects-v1 %}

{% ifversion projects-v2 %}또한 {% data variables.product.prodname_dotcom %}에서 기존{% else %} {% data variables.product.prodname_projects_v1 %}를 사용하여{% endif %} 사용자 또는 팀의 작업을 계획하고 추적할 수 있습니다. 프로젝트 보드는 선택한 열에서 카드로 분류되는 이슈, 끌어오기 요청, 메모로 구성됩니다. 기능 작업, 상위 수준 로드맵 또는 릴리스 검사 목록을 위한 프로젝트 보드를 만들 수 있습니다. 자세한 내용은 “[프로젝트 보드 정보](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)”를 참조하세요.
### 프로젝트 보드 예제
다음은 이슈를 만든 후 좀 더 작게 분리하여 추가한 Project Octocat 예제에 대한 프로젝트 보드입니다.

![프로젝트 보드 예제](/assets/images/help/issues/quickstart-project-board.png)

{% endif %}

## 다음 단계

이제 작업 계획 및 추적을 위해 {% data variables.product.prodname_dotcom %}에서 제공하는 도구에 대해 알아보고 부서 간 팀 또는 프로젝트 리포지토리를 설정하는 작업을 시작했습니다. 리포지토리를 추가로 사용자 지정하고 작업을 구성하기 위한 몇 가지 유용한 리소스는 다음과 같습니다.

- 리포지토리 만들기에 대해 자세히 알아보기 위한 “[리포지토리 정보](/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-repositories)”
- 이슈를 만들고 관리하는 다양한 방법에 대해 자세히 알아보기 위한 "[이슈를 사용하여 작업 추적](/issues/tracking-your-work-with-issues)"
- 이슈 템플릿에 대해 자세히 알아보기 위한 "[이슈 및 끌어오기 요청 템플릿 정보](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/about-issue-and-pull-request-templates)"
- 레이블을 만들고 편집하고 삭제하는 방법을 알아보기 위한 "[레이블 관리](/issues/using-labels-and-milestones-to-track-work/managing-labels)"
- 작업 목족에 대해 자세히 알아보려면 “[작업 목록 정보](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)” {% ifversion projects-v2 %} - 프로젝트에 대해 자세히 알아보려면 “[프로젝트 정보](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)”
- 프로젝트에 대한 보기를 사용자 지정하는 방법을 자세히 알아보려면 “[보기 사용자 지정](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view)”{% endif %} {% ifversion projects-v1 %}- 프로젝트 보드를 관리하는 방법을 자세히 알아보려면 “[{% data variables.product.prodname_projects_v1 %} 정보](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)”{% endif %}
