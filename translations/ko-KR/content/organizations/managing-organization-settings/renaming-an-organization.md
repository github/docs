---
title: 조직 이름 바꾸기
intro: 프로젝트 또는 회사가 이름을 변경한 경우 일치하도록 조직의 이름을 업데이트할 수 있습니다.
redirect_from:
  - /articles/what-happens-when-i-change-my-organization-s-name
  - /articles/renaming-an-organization
  - /github/setting-up-and-managing-organizations-and-teams/renaming-an-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
ms.openlocfilehash: 088094a03e2416b4da0e3011978ab5e9edd316b2
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145119252'
---
{% tip %}

**팁:** 조직 소유자만 조직의 이름을 바꿀 수 있습니다. {% data reusables.organizations.new-org-permissions-more-info %}

{% endtip %}

## 조직 이름을 변경하면 어떻게 되나요?

조직의 이름을 변경하면 다른 사용자가 이전 조직 이름을 클레임할 수 있게 됩니다. 조직의 이름을 변경하면 이전 조직 이름 아래의 리포지토리에 대한 대부분의 참조가 자동으로 새 이름으로 변경됩니다. 그러나 프로필에 대한 일부 링크는 자동으로 리디렉션되지 않습니다.

### 자동으로 발생하는 변경 내용

- {% data variables.product.prodname_dotcom %}는 참조를 리포지토리로 자동으로 리디렉션합니다.  조직의 기존 **리포지토리** 에 대한 웹 링크는 계속 작동합니다. 변경을 시작한 후 완료하는 데 몇 분 정도 걸릴 수 있습니다.
- 업데이트하지 않고 로컬 리포지토리를 이전 원격 추적 URL로 계속 푸시할 수 있습니다. 그러나 조직 이름을 변경한 후 기존 원격 리포지토리 URL을 모두 업데이트하는 것이 좋습니다. 이전 조직 이름을 변경한 후 다른 사용자가 사용할 수 있으므로 새 조직 소유자는 리포지토리에 대한 리디렉션 항목을 재정의하는 리포지토리를 만들 수 있습니다. 자세한 내용은 “[원격 리포지토리 관리](/github/getting-started-with-github/managing-remote-repositories)”를 참조하세요.
- 이전 Git 커밋 또한 조직 내 사용자가 영향을 미칩니다.

### 자동이 아닌 변경 내용

조직의 이름을 변경한 후:
- 이전 조직 프로필 페이지(예: `https://{% data variables.command_line.backticks %}/previousorgname`)에 대한 링크는 404 오류를 반환합니다. 다른 사이트{% ifversion fpt or ghec %}(예: LinkedIn 또는 Twitter 프로필{% endif %})에서 조직으로의 링크를 업데이트하는 것이 좋습니다.
- 이전 조직의 이름을 사용하는 API 요청은 404 오류를 반환합니다. API 요청에서 이전 조직 이름을 업데이트하는 것이 좋습니다.
- 이전 조직의 이름을 사용하는 팀에 대한 자동 [@mention](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams) 리디렉션은 없습니다.{% ifversion ghec %}
- 조직에 대해 SAML SSO(Single Sign-On)를 사용하도록 설정한 경우 IdP(ID 공급자)의 {% data variables.product.prodname_ghe_cloud %}에서 애플리케이션의 조직 이름을 업데이트해야 합니다. IdP에서 조직 이름을 업데이트하지 않으면 조직의 멤버는 더 이상 조직의 리소스에 액세스하기 위해 IdP로 인증을 받을 수 없습니다. 자세한 내용은 "[조직에 ID 공급자 연결](/github/setting-up-and-managing-organizations-and-teams/connecting-your-identity-provider-to-your-organization)"을 참조하세요.{% endif %}

## 조직의 이름 변경

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
4. 설정 페이지 아래쪽의 "조직 이름 바꾸기"에서 **조직 이름 바꾸기** 를 클릭합니다.
  ![조직 이름 바꾸기 단추](/assets/images/help/settings/settings-rename-organization.png)

## 추가 참고 자료

* "[내 커밋이 잘못된 사용자에게 연결된 이유는 무엇인가요?](/pull-requests/committing-changes-to-your-project/troubleshooting-commits/why-are-my-commits-linked-to-the-wrong-user)"
