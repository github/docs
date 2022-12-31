---
title: Jira를 개인 프로젝트와 통합
intro: 개인 계정과 Jira Cloud를 통합하여 커밋 및 끌어오기 요청을 검사하고 언급된 Jira 이슈에 관련 메타데이터 및 하이퍼링크를 만들 수 있습니다.
redirect_from:
  - /articles/integrating-jira-with-your-personal-projects
  - /github/setting-up-and-managing-your-github-user-account/integrating-jira-with-your-personal-projects
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/integrating-jira-with-your-personal-projects
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/integrating-jira-with-your-personal-projects
versions:
  ghes: '*'
  ghae: '*'
shortTitle: Integrate Jira with projects
ms.openlocfilehash: bc88d865cd9c1c88caf5498eab330b6f11cd2ec0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145165167'
---
{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.oauth_apps %}
1. **새 애플리케이션 등록** 을 클릭합니다.
2. **애플리케이션 이름** 에서 “Jira”를 입력합니다.
3. **홈페이지 URL** 에서 Jira 인스턴스에 대한 전체 URL을 입력합니다.
4. **권한 부여 콜백 URL** 에서 Jira 인스턴스에 대한 전체 URL을 입력합니다.
5. **Register application(응용 프로그램 등록)** 을 클릭합니다.
![애플리케이션 등록 단추](/assets/images/help/oauth/register-application-button.png)
8. **개발자 애플리케이션** 에서 “클라이언트 ID” 및 “클라이언트 암호” 값을 확인합니다.
![클라이언트 ID 및 클라이언트 암호](/assets/images/help/oauth/client-id-and-secret.png) {% data reusables.user-settings.jira_help_docs %}

## 추가 참고 자료

- [“Jira를 조직 프로젝트 보드와 통합”](/articles/integrating-jira-with-your-organization-project-board)
- <a href="https://confluence.atlassian.com/adminjiracloud/connect-jira-cloud-to-github-814188429.html" data-proofer-ignore>Jira Cloud를 GitHub에 연결</a>(Atlassian 설명서)
