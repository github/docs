---
title: Jira를 사용하여 프로젝트 관리
intro: '프로젝트 관리를 위해 {% data variables.product.product_name %}와 Jira를 통합할 수 있습니다.'
redirect_from:
  - /enterprise/admin/guides/installation/project-management-using-jira
  - /enterprise/admin/articles/project-management-using-jira
  - /enterprise/admin/developer-workflow/managing-projects-using-jira
  - /enterprise/admin/developer-workflow/customizing-your-instance-with-integrations
  - /enterprise/admin/user-management/managing-projects-using-jira
  - /admin/user-management/managing-projects-using-jira
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Project management
shortTitle: Project management with Jira
ms.openlocfilehash: da1a02894bf8c916089de94a8642396ba7ceabe4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145115143'
---
## {% data variables.product.prodname_enterprise %} 조직에 Jira 연결

1. http[s]://[hostname]/login에서 {% data variables.product.prodname_enterprise %} 계정에 로그인합니다. 이미 로그인한 경우 왼쪽 위에 있는 {% data variables.product.prodname_dotcom %} 로고를 클릭합니다.
2. {% data variables.product.prodname_dotcom %} 로고 아래에 있는 프로필 아이콘을 클릭하고 Jira와 연결할 조직을 선택합니다.

  ![조직 선택](/assets/images/enterprise/orgs-and-teams/profile-select-organization.png)

3. **‘조직 이름’ 설정 편집** 링크를 클릭합니다.

  ![조직 설정 편집](/assets/images/enterprise/orgs-and-teams/edit-organization-settings.png)

4. 왼쪽 사이드바의 **개발자 설정** 에서 **OAuth 앱** 을 클릭합니다.

  ![OAuth 앱 선택](/assets/images/enterprise/orgs-and-teams/organization-dev-settings-oauth-apps.png)

5. **새 애플리케이션 등록** 단추를 클릭합니다.

  ![새 애플리케이션 등록 단추](/assets/images/enterprise/orgs-and-teams/register-oauth-application-button.png)

6. 애플리케이션 설정을 채웁니다.
    - **애플리케이션 이름** 필드에 “Jira” 또는 Jira 인스턴스를 식별하는 데 사용할 이름을 입력합니다.
    - **홈페이지 URL** 필드에 Jira 인스턴스의 전체 URL을 입력합니다.
    - **권한 부여 콜백 URL** 필드에 Jira 인스턴스의 전체 URL을 입력합니다.
7. **Register application(응용 프로그램 등록)** 을 클릭합니다.
8. 페이지 맨 위에 있는 **클라이언트 ID** 및 **클라이언트 암호** 를 기록해 둡니다. Jira 인스턴스를 구성하려면 이 정보가 필요합니다.

## Jira 인스턴스 구성

1. Jira 인스턴스에서 관리 액세스 권한이 있는 계정에 로그인합니다.
2. 페이지 맨 위에 있는 설정(기어) 아이콘을 클릭하고 **애플리케이션** 을 선택합니다.

  ![Jira 설정에서 애플리케이션 선택](/assets/images/enterprise/orgs-and-teams/jira/jira-applications.png)

3. 왼쪽 사이드바의 **통합** 에서 **DVCS 계정** 을 클릭합니다.

  ![Jira 통합 메뉴 - DVCS 계정](/assets/images/enterprise/orgs-and-teams/jira/jira-integrations-dvcs.png)

4. **Bitbucket Cloud 또는 {% data variables.product.prodname_dotcom %} 계정 연결** 을 클릭합니다.

  ![Jira에 GitHub 계정 연결](/assets/images/enterprise/orgs-and-teams/jira/jira-link-github-account.png)

5. **새 계정 추가** 모달에서 {% data variables.product.prodname_enterprise %} 설정을 채웁니다.
    - **호스트** 드롭다운 메뉴에서 **{% data variables.product.prodname_enterprise %}** 를 선택합니다.
    - **팀 또는 사용자 계정** 필드에 {% data variables.product.prodname_enterprise %} 조직 또는 사용자 계정의 이름을 입력합니다.
    - **OAuth 키** 필드에 {% data variables.product.prodname_enterprise %} 개발자 애플리케이션의 클라이언트 ID를 입력합니다.
    - **OAuth 비밀** 필드에 {% data variables.product.prodname_enterprise %} 개발자 애플리케이션의 클라이언트 암호를 입력합니다.
    - {% data variables.product.prodname_enterprise %} 조직 또는 사용자 계정이 소유한 새 리포지토리를 연결하지 않으려면 **새 리포지토리 자동 연결** 을 선택 취소합니다.
    - 스마트 커밋을 사용하도록 설정하지 않으려면 **스마트 커밋 사용** 을 선택 취소합니다.
    - **추가** 를 클릭합니다.
6. {% data variables.product.prodname_enterprise %} 계정에 부여하는 권한을 검토하고 **애플리케이션 권한 부여** 를 클릭합니다.
7. 필요한 경우 암호를 입력하여 계속 진행합니다.
