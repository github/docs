---
title: Jira를 개인 프로젝트와 통합
intro: You can integrate Jira Cloud with your personal account to scan commits and pull requests, creating relevant metadata and hyperlinks in any mentioned Jira issues.
redirect_from:
- /articles/integrating-jira-with-your-personal-projects
- /github/setting-up-and-managing-your-github-user-account/integrating-jira-with-your-personal-projects
- /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/integrating-jira-with-your-personal-projects
versions:
  ghes: '*'
  ghae: '*'
shortTitle: Integrate Jira with projects
ms.openlocfilehash: a9106d979aa0f219bd20fc5b27042dfe8e81fc8c
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145088894"
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

## <a name="further-reading"></a>추가 참고 자료

- [“Jira를 조직 프로젝트 보드와 통합”](/articles/integrating-jira-with-your-organization-project-board)
- <a href="https://confluence.atlassian.com/adminjiracloud/connect-jira-cloud-to-github-814188429.html" data-proofer-ignore>Jira Cloud를 GitHub에 연결</a>(Atlassian 설명서)
