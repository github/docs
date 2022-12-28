---
title: GitHub 사용자 이름 변경
intro: You can change the username for your account on {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.product.product_location %} if your instance uses built-in authentication{% endif %}.
redirect_from:
- /articles/how-to-change-your-username
- /articles/changing-your-github-user-name
- /articles/renaming-a-user
- /articles/what-happens-when-i-change-my-username
- /articles/changing-your-github-username
- /github/setting-up-and-managing-your-github-user-account/changing-your-github-username
- /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/changing-your-github-username
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
- Accounts
shortTitle: Change your username
ms.openlocfilehash: 30139a0dab508f1e8db0f33174d6e25ec28afef4
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145090065"
---
{% ifversion ghec or ghes %}

{% note %}

{% ifversion ghec %}

**참고**: {% data variables.product.prodname_emu_enterprise %}의 멤버는 사용자 이름을 변경할 수 없습니다. 엔터프라이즈의 IdP 관리자가 {% data variables.product.product_name %}에 대한 사용자 이름을 제어합니다. 자세한 내용은 “[{% data variables.product.prodname_emus %} 정보](/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)”를 참조하세요.

{% elsif ghes %}

**참고**: LDAP 자격 증명 또는 SSO(Single Sign-On)를 사용하여 {% data variables.product.product_location %}에 로그인하는 경우 로컬 관리자만 사용자 이름을 변경할 수 있습니다. {% data variables.product.product_name %}에 대한 인증 방법에 대한 자세한 내용은 “[{% data variables.product.product_location %}에 대한 사용자 인증](/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance)”을 참조하세요.

{% endif %}

{% endnote %}

{% endif %}

## <a name="about-username-changes"></a>사용자 이름 변경 정보

현재 사용하지 않는 다른 사용자 이름으로 사용자 이름을 변경할 수 있습니다.{% ifversion fpt or ghec %} 원하는 사용자 이름을 사용할 수 없는 경우 다른 이름이나 고유한 변형을 고려합니다. 숫자, 하이픈 또는 대체 맞춤법을 사용하면 여전히 사용할 수 있는 비슷한 사용자 이름을 찾는 데 도움이 될 수 있습니다.

사용자 이름에 대한 상표를 보유하는 경우 [상표 정책](/free-pro-team@latest/github/site-policy/github-trademark-policy) 페이지에서 상표 불만을 제기하는 방법에 대한 자세한 정보를 찾을 수 있습니다. 

이름에 대한 상표를 보유하지 않는 경우 다른 사용자 이름을 선택하거나 현재 사용자 이름을 유지할 수 있습니다. {% data variables.contact.github_support %}에서는 사용할 수 없는 사용자 이름을 릴리스할 수 없습니다. 자세한 내용은 “[사용자 이름 변경](#changing-your-username)”을 참조하세요.{% endif %}

사용자 이름을 변경하면 이전 사용자 이름을 다른 사용자가 클레임할 수 있게 됩니다. 이전 사용자 이름의 리포지토리에 대한 대부분의 참조는 자동으로 새 사용자 이름으로 변경됩니다. 그러나 프로필에 대한 일부 링크는 자동으로 리디렉션되지 않습니다.

{% data variables.product.product_name %}는 다음에 대한 리디렉션을 설정할 수 없습니다.
- 이전 사용자 이름을 사용하는 [@mentions](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)
- 이전 사용자 이름을 포함하는 [gist](/articles/creating-gists)에 대한 링크

{% ifversion fpt or ghec %} 

{% data variables.product.prodname_emu_enterprise %}의 멤버인 경우 사용자 이름을 변경할 수 없습니다. {% data reusables.enterprise-accounts.emu-more-info-account %}

{% endif %}

## <a name="repository-references"></a>리포지토리 참조

사용자 이름을 변경한 후 {% data variables.product.product_name %}는 자동으로 참조를 리포지토리로 리디렉션합니다.
- 기존 리포지토리에 대한 웹 링크는 계속 작동합니다. 변경 후 완료하는 데 몇 분 정도 걸릴 수 있습니다.
- 로컬 리포지토리 복제본에서 이전 원격 추적 URL로의 명령줄 푸시는 계속 작동합니다.

이전 사용자 이름의 새 소유자가 리포지토리와 동일한 이름의 리포지토리를 만드는 경우 리디렉션 항목을 재정의하고 리디렉션 작동이 중지됩니다. 이러한 가능성 때문에 사용자 이름을 변경한 후 기존의 모든 원격 리포지토리 URL을 업데이트하는 것이 좋습니다. 자세한 내용은 “[원격 리포지토리 관리](/github/getting-started-with-github/managing-remote-repositories)”를 참조하세요.

## <a name="links-to-your-previous-profile-page"></a>이전 프로필 페이지에 대한 링크

사용자 이름을 변경한 후 `https://{% data variables.command_line.backticks %}/previoususername`과 같은 이전 프로필 페이지로 연결되는 링크는 404 오류를 반환합니다. LinkedIn 또는 Twitter 프로필{% endif %}과 같은 다른 곳{% ifversion fpt or ghec %}에서 {% data variables.product.product_location %}의 계정에 대한 링크를 업데이트하는 것이 좋습니다.

## <a name="your-git-commits"></a>Git 커밋

{% ifversion fpt or ghec %}{% data variables.product.product_name %}에서 제공한 `noreply` 메일 주소와 연결된 Git 커밋은 새 사용자 이름으로 표시되지 않으며 기여 그래프에 표시되지 않습니다.{% endif %} Git 커밋이 {% ifversion fpt or ghec %}ID 기반 {% data variables.product.product_name %}에서 제공한 `noreply` 메일 주소를 포함하여 [GitHub 계정에 추가](/articles/adding-an-email-address-to-your-github-account)한 다른 메일과 관련이 있는 경우 {% endif %}사용자 이름을 변경한 후에도 계속해서 사용자에게 귀속되며 기여 그래프에 나타납니다. 메일 주소를 설정하는 방법에 대한 자세한 내용은 “[커밋 메일 주소 설정](/articles/setting-your-commit-email-address)”을 참조하세요.

## <a name="changing-your-username"></a>사용자 이름 변경

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.account_settings %}
3. “사용자 이름 변경” 섹션에서 **사용자 이름 변경** 을 클릭합니다.
   ![사용자 이름 변경 단추](/assets/images/help/settings/settings-change-username.png){% ifversion fpt or ghec %}
4. 사용자 이름 변경에 대한 경고를 읽습니다. 그래도 사용자 이름을 변경하려면 **알겠습니다. 사용자 이름을 변경하겠습니다** 를 클릭합니다.
   ![사용자 이름 변경 경고 단추](/assets/images/help/settings/settings-change-username-warning-button.png)
5. 새 사용자 이름을 입력합니다.
   ![새 사용자 이름 필드](/assets/images/help/settings/settings-change-username-enter-new-username.png)
6. 선택한 사용자 이름을 사용할 수 있는 경우 **내 사용자 이름 변경** 을 클릭합니다. 선택한 사용자 이름을 사용할 수 없는 경우 다른 사용자 이름이나 표시되는 제안 중 하나를 시도할 수 있습니다.
   ![사용자 이름 변경 경고 단추](/assets/images/help/settings/settings-change-my-username-button.png){% endif %}

## <a name="further-reading"></a>추가 참고 자료

- “[내 커밋이 잘못된 사용자에 연결된 이유는 무엇인가요?](/pull-requests/committing-changes-to-your-project/troubleshooting-commits/why-are-my-commits-linked-to-the-wrong-user)”{% ifversion fpt or ghec %}
- “[{% data variables.product.prodname_dotcom %} 사용자 이름 정책](/free-pro-team@latest/github/site-policy/github-username-policy)”{% endif %}
