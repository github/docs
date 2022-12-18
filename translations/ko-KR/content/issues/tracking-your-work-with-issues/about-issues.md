---
title: 문제 정보
intro: '{% data variables.product.prodname_github_issues %}를 사용하여 {% data variables.product.company_short %}에서 아이디어, 피드백, 작업 또는 작업에 대한 버그를 추적합니다.'
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/about-issues
  - /articles/creating-issues
  - /articles/about-issues
  - /github/managing-your-work-on-github/about-issues
  - /issues/tracking-your-work-with-issues/creating-issues/about-issues
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
  - Project management
ms.openlocfilehash: e3352dbbc88da85680885b728dcb393d5ae3579f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147422734'
---
## GitHub 통합

문제가 발생하면 {% data variables.product.company_short %}에서 작업을 추적할 수 있으며, 여기에서 개발이 이루어집니다. 다른 문제 또는 끌어오기 요청에서 문제를 언급하면 관련 작업을 추적할 수 있도록 문제의 타임라인에 상호 참조가 반영됩니다. 작업이 진행 중임을 나타내기 위해 문제를 끌어오기 요청에 연결할 수 있습니다. 끌어오기 요청이 병합되면 연결된 문제가 자동으로 종료됩니다.

키워드에 대한 자세한 내용은 “[이슈에 끌어오기 요청 연결](/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword)”을 참조하세요.

## 신속하게 문제 만들기

문제는 다양한 방법으로 만들 수 있으므로 워크플로에 가장 편리한 방법을 선택하면 됩니다. 예를 들어 리포지토리에서 문제를,{% ifversion fpt or ghec %} 작업 목록에서 항목을,{% endif %} 프로젝트에서 참고를, 문제 또는 가져오기 요청에서 댓글을 만들 수 있으며, 특정 코드 줄 또는 URL 쿼리도 만들 수 있습니다. 웹 UI, {% data variables.product.prodname_desktop %}, {% data variables.product.prodname_cli %}, GraphQL 및 REST API 또는 {% data variables.product.prodname_mobile %}을 통해 선택한 플랫폼에서 문제를 만들 수도 있습니다. 자세한 내용은 “[어셈블리 만들기](/issues/tracking-your-work-with-issues/creating-issues/creating-an-issue)”를 참조하세요.

## 작업 추적

프로젝트에서 문제를 구성하고 우선 순위를 지정할 수 있습니다. {% ifversion fpt or ghec %}더 큰 문제의 일부로 문제를 추적하기 위해 작업 목록을 사용할 수 있습니다.{% endif %} 관련 문제를 범주화하기 위해 레이블과 마일스톤을 사용할 수 있습니다.

프로젝트에 대한 자세한 내용은 {% ifversion projects-v2 %}”[프로젝트 정보](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)”를 참조하세요. {% else %}”[프로젝트 보드를 사용하여 작업 구성](/issues/organizing-your-work-with-project-boards)”.{% endif %} {% ifversion fpt or ghec %}작업 목록에 대한 자세한 내용은 “[작업 목록 정보](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)”를 참조하세요. {% endif %} 레이블 및 마일스톤에 대한 자세한 내용은 “[레이블 및 마일스톤을 사용하여 작업 추적](/issues/using-labels-and-milestones-to-track-work)”을 참조하세요.

## 최신 소식을 받아보세요.

문제의 최신 댓글에 대한 업데이트를 받아보려면 문제를 구독하여 최신 메모에 대한 알림을 받으면 됩니다. 구독한 최근 업데이트된 문제에 대한 링크를 빠르게 찾으려면 대시보드를 방문하세요. 자세한 내용은 "[알림 정보](/github/managing-subscriptions-and-notifications-on-github/about-notifications)" 및 "[개인 대시보드 정보](/articles/about-your-personal-dashboard)"를 참조하세요.

## 커뮤니티 관리

참가자가 필요한 정보를 제공하는 의미 있는 문제를 열 수 있도록 {% ifversion fpt or ghec %}문제 양식 및 {% endif %}문제 템플릿을 사용할 수 있습니다. 자세한 내용은 “[템플릿을 사용하여 유용한 이슈 및 끌어오기 요청 권장](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)”을 참조하세요.

{% ifversion fpt or ghec %}건전한 커뮤니티를 유지할 수 있도록 {% data variables.product.prodname_dotcom %}의 [커뮤니티 가이드라인](/free-pro-team@latest/github/site-policy/github-community-guidelines)을 위반하는 댓글을 보고할 수 있습니다. 자세한 내용은 “[남용 또는 스팸 보고](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)”를 참조하세요. {% endif %}

## 효율적인 커뮤니케이션

문제의 리포지토리에 액세스할 수 있는 협업자가 댓글에 주의를 기울이도록 @mention할 수 있습니다. 동일한 리포지토리에서 관련 문제를 연결하려면 `#`를 입력하고 문제 제목의 일부를 입력한 다음 연결하려는 문제를 클릭할 수 있습니다. 책임을 전달하기 위해 문제를 할당할 수 있습니다. 동일한 댓글을 자주 입력하는 경우 저장된 회신을 사용할 수 있습니다.
{% ifversion fpt or ghec %} 자세한 내용은 “[기본 쓰기 및 서식 지정 구문](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)” 및 “[다른 GitHub 사용자에게 문제 및 끌어오기 요청 할당](/issues/tracking-your-work-with-issues/assigning-issues-and-pull-requests-to-other-github-users)”을 참조하세요.
{% endif %} {% ifversion discussions %}
## 문제 및 토론 비교

일부 대화는 {% data variables.product.prodname_discussions %}에 더 적합합니다. {% data reusables.discussions.you-can-use-discussions %} 문제 또는 토론을 사용하는 경우에 대한 지침은 “[GitHub의 커뮤니케이션](/github/getting-started-with-github/quickstart/communicating-on-github)”을 참조하세요.

문제의 대화가 토론에 더 적합한 경우 문제를 토론으로 변환할 수 있습니다.
{% endif %}
