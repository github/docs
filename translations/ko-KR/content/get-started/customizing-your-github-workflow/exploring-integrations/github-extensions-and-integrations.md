---
title: GitHub 확장 및 통합
intro: '{% data variables.product.product_name %} 확장을 사용하여 타사 애플리케이션 내의 {% data variables.product.product_name %} 리포지토리에서 원활하게 작업합니다.'
redirect_from:
  - /articles/about-github-extensions-for-third-party-applications
  - /articles/github-extensions-and-integrations
  - /github/customizing-your-github-workflow/github-extensions-and-integrations
  - /github/customizing-your-github-workflow/exploring-integrations/github-extensions-and-integrations
versions:
  fpt: '*'
  ghec: '*'
shortTitle: Extensions & integrations
ms.openlocfilehash: 84fae00e80bd772146339bcd38f9634a31462523
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094587'
---
## 편집기 도구

Unity 및 {% 데이터 variables.product.prodname_vs %}과 같은 타사 편집기 도구 내에서 {% 데이터 variables.product.product_name %} 리포지토리에 연결할 수 있습니다.

### Unity용 {% data variables.product.product_name %}

Unity용 {% data variables.product.product_name %} 편집기 확장을 사용하면 오픈 소스 게임 개발 플랫폼인 Unity에서 개발하고 {% data variables.product.product_name %}에서 작업을 확인할 수 있습니다. 자세한 내용은 공식 Unity 편집기 확장 [사이트](https://unity.github.com/) 또는 [설명서](https://github.com/github-for-unity/Unity/tree/master/docs)를 참조하세요.

### {% data variables.product.prodname_vs %}에 대한 {% data variables.product.product_name %}

{% data variables.product.prodname_vs %} 확장에 대한 {% data variables.product.product_name %}를 사용하면 {% data variables.product.prodname_vs %}를 떠나지 않고 {% data variables.product.product_name %} 리포지토리에서 작업할 수 있습니다. 자세한 내용은 공식 {% data variables.product.prodname_vs %} 확장 [사이트](https://visualstudio.github.com/) 또는 [설명서](https://github.com/github/VisualStudio/tree/master/docs)를 참조하세요.

### {% data variables.product.prodname_vscode %}에 대한 {% data variables.product.prodname_dotcom %}

{% data variables.product.prodname_vscode %} 확장에 대한 {% data variables.product.prodname_dotcom %}를 사용하여 {% data variables.product.prodname_vscode_shortname %}에서 {% data variables.product.product_name %} 끌어오기 요청을 검토하고 관리할 수 있습니다. 자세한 내용은 공식 {% data variables.product.prodname_vscode_shortname %} 확장 [사이트](https://vscode.github.com/) 또는 [설명서](https://github.com/Microsoft/vscode-pull-request-github)를 참조하세요.

## 프로젝트 관리 도구

{% 데이터 variables.location.product_location %}의 개인 또는 조직 계정을 Jira와 같은 타사 프로젝트 관리 도구와 통합할 수 있습니다.

### Jira Cloud 및 {% data variables.product.product_name %}.com 통합

개인 또는 조직 계정과 Jira Cloud를 통합하여 커밋 및 끌어오기 요청을 검사하고 언급된 Jira 이슈에 관련 메타데이터 및 하이퍼링크를 만들 수 있습니다. 자세한 내용은 마켓플레이스의 [Jira 통합 앱](https://github.com/marketplace/jira-software-github)을 참조하세요.

## 팀 커뮤니케이션 도구

{% 데이터 variables.location.product_location %}의 개인 또는 조직 계정을 Slack 또는 Microsoft Teams와 같은 타사 팀 커뮤니케이션 도구와 통합할 수 있습니다.

### Slack 및 {% data variables.product.product_name %} 통합

Slack + {% data variables.product.prodname_dotcom %} 앱을 사용하면 리포지토리 또는 조직을 구독하고 이슈, 끌어오기 요청, 커밋, 토론, 릴리스, 배포 검토, 배포 상태에 대한 실시간 업데이트를 가져올 수 있습니다. 이슈 열기 및 닫기와 같은 작업을 수행할 수도 있으며 Slack을 나가지 않고도 이슈 및 끌어오기 요청에 대한 자세한 참조를 볼 수 있습니다. 또한 채널 또는 개인 채팅에서 수신하는 {% data variables.product.prodname_dotcom %} 알림의 일부로 언급된 경우 앱이 Slack에서 개인적으로 ping합니다.

Slack + {% data variables.product.prodname_dotcom %} 앱은 [Slack Enterprise Grid](https://slack.com/intl/en-in/help/articles/360000281563-Manage-apps-on-Enterprise-Grid)와도 호환됩니다. 자세한 내용은 마켓플레이스의 [Slack + {% data variables.product.prodname_dotcom %} 앱](https://github.com/marketplace/slack-github)을 참조하세요.

### Microsoft Teams 및 {% data variables.product.product_name %} 통합

Teams용 {% data variables.product.prodname_dotcom %} 앱을 사용하면 리포지토리 또는 조직을 구독하고 이슈, 끌어오기 요청, 커밋, 토론, 릴리스, 배포 검토, 배포 상태에 대한 실시간 업데이트를 가져올 수 있습니다. 이슈 열기 및 닫기, 이슈 및 끌어오기 요청에 주석 달기와 같은 작업도 수행할 수 있으며, Microsoft Teams를 나가지 않고도 이슈 및 끌어오기 요청에 대한 자세한 참조를 볼 수 있습니다. 또한 채널 또는 개인 채팅에서 수신하는 {% data variables.product.prodname_dotcom %} 알림의 일부로 언급된 경우 앱이 Teams에서 개인적으로 ping합니다.

자세한 내용은 Microsoft AppSource의 [Teams용 {% data variables.product.prodname_dotcom %} 앱](https://appsource.microsoft.com/en-us/product/office/WA200002077)을 참조하세요.
