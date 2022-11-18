---
title: 태그 보호 규칙 구성
shortTitle: Tag protection rules
intro: 기여자가 태그를 만들거나 삭제하지 못하도록 리포지토리에 대한 태그 보호 규칙을 구성할 수 있습니다.
product: '{% data reusables.gated-features.tag-protection-rules %}'
versions:
  fpt: '*'
  ghae: '>= 3.5'
  ghec: '*'
  ghes: '>3.4'
ms.openlocfilehash: 3b7b84cb26d8994c89222b2e4f642592fd45b72f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147063204'
---
{% note %}

**참고:** 태그 보호 규칙은 현재 베타 상태이며 변경될 수 있습니다.

{% endnote %}

태그 보호 규칙을 추가하면 제공된 패턴과 일치하는 모든 태그가 보호됩니다. 리포지토리에서 관리자 또는 유지 관리 권한이 있는 사용자만 보호된 태그를 만들 수 있으며, 리포지토리에서 관리자 권한이 있는 사용자만 보호된 태그를 삭제할 수 있습니다. 자세한 내용은 “[조직의 리포지토리 역할](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization#permissions-for-each-role)”을 참조하세요. {% data variables.product.prodname_github_apps %}에는 보호된 태그를 수정할 수 있는 `Repository administration: write` 권한이 필요합니다.

{% ifversion custom-repository-roles %} 또한 다른 사용자 그룹이 태그 보호 규칙과 일치하는 태그를 만들거나 삭제할 수 있도록 사용자 지정 리포지토리 역할을 만들 수 있습니다. 자세한 내용은 “[조직의 사용자 지정 리포지토리 역할 관리](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)”를 참조하세요.{% endif %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. 사이드바의 “코드 및 자동화” 섹션에서 **{% octicon "tag" aria-label="The tag icon" %} 태그** 를 클릭합니다.
1. **새 규칙** 을 클릭합니다.
![새 태그 보호 규칙](/assets/images/help/repository/new-tag-protection-rule.png)
1. “태그 이름 패턴”에서 보호하려는 태그의 패턴을 입력합니다. 이 예제에서 “\*”을 입력하면 모든 태그가 보호됩니다. 
![태그 보호 패턴 설정](/assets/images/help/repository/set-tag-protection-pattern.png)
1. **규칙 추가** 를 클릭합니다.
![태그 보호 규칙 추가](/assets/images/help/repository/add-tag-protection-rule.png)
