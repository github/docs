---
title: Jira를 조직 프로젝트 보드와 통합
intro: 조직 계정과 Jira Cloud를 통합하여 커밋 및 끌어오기 요청을 검사하고 언급된 Jira 이슈에 관련 메타데이터 및 하이퍼링크를 만들 수 있습니다.
redirect_from:
  - /articles/integrating-jira-with-your-organization-project-board
  - /github/setting-up-and-managing-organizations-and-teams/integrating-jira-with-your-organization-project-board
versions:
  ghes: '*'
  ghae: '*'
shortTitle: Integrate Jira
ms.openlocfilehash: 0b773dc865373ab006f7c596b50ac81af5d6636a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145125732'
---
{% ifversion ghes > 3.4 or ghae-issue-5658 %} {% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. 왼쪽 사이드바에서 **{% octicon "code" aria-label="The code icon" %} 개발자 설정** 을 선택한 다음, **OAuth 앱** 을 클릭합니다.
  ![왼쪽 사이드바의 OAuth 애플리케이션 탭](/assets/images/help/organizations/org-oauth-applications-ghe.png)
1. **새 OAuth 앱** 을 클릭합니다.
{% else %} {% data reusables.user-settings.access_settings %}
1. **조직 설정** 아래 왼쪽 사이드바에서 조직의 이름을 클릭합니다.
![사이드바 조직 이름](/assets/images/help/settings/organization-settings-from-sidebar.png)
1. **개발자 설정** 아래 왼쪽 사이드바에서 **OAuth 애플리케이션** 을 클릭합니다.
  ![왼쪽 사이드바의 OAuth 애플리케이션 탭](/assets/images/help/organizations/org-oauth-applications-ghe.png)
1. **새 애플리케이션 등록** 을 클릭합니다.
{% endif %}
1. **애플리케이션 이름** 에서 “Jira”를 입력합니다.
2. **홈페이지 URL** 에서 Jira 인스턴스에 대한 전체 URL을 입력합니다.
3. **권한 부여 콜백 URL** 에서 Jira 인스턴스에 대한 전체 URL을 입력합니다.
4. **Register application(응용 프로그램 등록)** 을 클릭합니다.
![애플리케이션 등록 단추](/assets/images/help/oauth/register-application-button.png)
9. **조직 소유 애플리케이션** 에서 “클라이언트 ID” 및 “클라이언트 암호” 값을 기록해 둡니다.
![클라이언트 ID 및 클라이언트 암호](/assets/images/help/oauth/client-id-and-secret.png) {% data reusables.user-settings.jira_help_docs %}

## 추가 참고 자료

- [“Jira를 개인 프로젝트와 통합”](/articles/integrating-jira-with-your-personal-projects)
- <a href="https://confluence.atlassian.com/adminjiracloud/connect-jira-cloud-to-github-814188429.html" data-proofer-ignore>Jira Cloud를 GitHub에 연결</a>(Atlassian 설명서)
