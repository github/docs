---
title: 여러 개인 계정 병합
intro: 회사 및 개인용으로 별도의 계정이 있는 경우 계정을 병합할 수 있습니다.
redirect_from:
  - /articles/can-i-merge-two-accounts
  - /articles/keeping-work-and-personal-repositories-separate
  - /articles/merging-multiple-user-accounts
  - /github/setting-up-and-managing-your-github-user-account/merging-multiple-user-accounts
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/merging-multiple-user-accounts
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/merging-multiple-user-accounts
  - /account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/merging-multiple-personal-accounts
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Merge multiple accounts
ms.openlocfilehash: 39198c8fdd0078321774eac4180f84a2b039d25e
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147687241'
---
{% tip %}

{% ifversion ghec %}

**팁:** {% data variables.product.prodname_emus %}를 사용하면 엔터프라이즈에서 IdP(ID 공급자)를 통해 멤버에 대한 고유한 개인 계정을 프로비저닝할 수 있습니다. 자세한 내용은 “[Enterprise Managed Users 정보](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/about-enterprise-managed-users)”를 참조하세요. 다른 사용 사례의 경우 하나의 개인 계정만 사용하여 개인 및 업무 리포지토리를 모두 관리하는 것이 좋습니다.

{% else %}

**팁:** 하나의 개인 계정만 사용하여 개인 및 업무 리포지토리를 모두 관리하는 것이 좋습니다. 

{% endif %}

{% endtip %}

{% warning %}

**경고:** 
- 조직 및 리포지토리 액세스 권한은 계정 간에 양도할 수 없습니다. 삭제하려는 계정에 기존 액세스 권한이 있는 경우 조직 소유자 또는 리포지토리 관리자가 유지하려는 계정을 초대해야 합니다.
- GitHub에서 제공한 `noreply` 메일 주소로 작성된 커밋은 한 계정에서 다른 계정으로 전송할 수 없습니다. 삭제하려는 계정이 **내 메일 주소를 프라이빗으로 유지** 옵션을 사용하는 경우 삭제하려는 계정에서 작성한 커밋을 유지하려는 계정으로 전송할 수 없습니다.

{% endwarning %}

1. 삭제하려는 계정에서 유지하려는 계정으로 [모든 리포지토리를 전송](/articles/how-to-transfer-a-repository)합니다. 문제, 끌어오기 요청, Wiki도 전송됩니다. 유지하려는 계정에 리포지토리가 있는지 확인합니다.
2. 이동된 리포지토리의 로컬 복제본에서 [원격 URL을 업데이트](/github/getting-started-with-github/managing-remote-repositories)합니다.
3. 더 이상 사용하지 않으려는 [계정을 삭제](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/deleting-your-personal-account)합니다.
4. 새 계정에 이전 커밋의 특성을 지정하려면 유지 중인 계정에 커밋을 작성하는 데 사용한 메일 주소를 추가합니다. 자세한 내용은 “[내 기여가 내 프로필에 표시되지 않는 이유는 무엇인가요?](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile#your-local-git-commit-email-isnt-connected-to-your-account)”를 참조하세요.

## 추가 참고 자료

- “[{% data variables.product.prodname_dotcom %} 계정 유형](/articles/types-of-github-accounts)”
