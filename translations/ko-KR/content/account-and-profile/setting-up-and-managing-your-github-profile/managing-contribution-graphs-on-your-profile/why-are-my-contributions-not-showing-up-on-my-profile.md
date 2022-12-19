---
title: 내 기여가 내 프로필에 표시되지 않는 이유는 무엇인가요?
intro: Learn common reasons that contributions may be missing from your contributions graph.
redirect_from:
- /articles/why-are-my-contributions-not-showing-up-on-my-profile
- /github/setting-up-and-managing-your-github-profile/why-are-my-contributions-not-showing-up-on-my-profile
- /github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Profiles
shortTitle: Missing contributions
ms.openlocfilehash: c3921897284e16c979542c5f7629690ded2b841e
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145119404"
---
## <a name="about-your-contribution-graph"></a>기여 그래프 정보

프로필 기여 그래프는 {% data variables.product.product_location %}에서 {% ifversion ghae %}소유한{% else %}{% endif %} 리포지토리에 기여한 내용의 기록입니다. 기여는 현지 표준 시간대가 아닌 UTC(협정 세계시)에 따라 타임스탬프가 지정됩니다. 기여는 특정 기준을 충족하는 경우에만 계산됩니다. 경우에 따라 기여를 표시하려면 그래프를 다시 작성해야 할 수 있습니다.

SAML SSO(Single Sign-On)를 사용하는 조직의 구성원인 경우 활성 SSO 세션이 없으면 프로필에서 조직의 기여 활동을 볼 수 없습니다. 조직 외부에서 프로필을 보는 사람에게는 조직을 위한 기여 활동 중 익명화된 기여 활동이 표시됩니다.

## <a name="contributions-that-are-counted"></a>계산되는 기여

### <a name="issues-pull-requests-and-discussions"></a>이슈, 끌어오기 요청 및 토론

포크가 아닌 독립 실행형 리포지토리에서 열린 경우 이슈, 끌어오기 요청 및 토론이 기여 그래프에 표시됩니다.

### <a name="commits"></a>커밋
커밋은 다음 조건을 **모두** 충족하는 경우 기여 그래프에 표시됩니다.
- 커밋에 사용되는 메일 주소가 {% data variables.product.product_location %}의 계정과 연결되어 있습니다.
- 커밋은 포크가 아닌 독립 실행형 리포지토리에서 수행되었습니다.
- 커밋이 다음 위치에서 수행되었습니다.
  - 리포지토리의 기본 분기
  - `gh-pages` 분기(프로젝트 사이트가 있는 리포지토리의 경우)

프로젝트 사이트에 대한 자세한 내용은 “[{% data variables.product.prodname_pages %} 정보](/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites)”를 참조하세요.

다음 중 **하나 이상** 이 참이어야 합니다.
- 리포지토리의 협력자이거나 리포지토리를 소유한 조직의 구성원입니다.
- 리포지토리를 포크했습니다.
- 리포지토리에서 끌어오기 요청 또는 이슈를 시작했습니다.
- 리포지토리에 별을 지정했습니다.

## <a name="common-reasons-that-contributions-are-not-counted"></a>기여가 계산되지 않는 일반적인 이유

{% data reusables.pull_requests.pull_request_merges_and_contributions %}

### <a name="commit-was-made-less-than-24-hours-ago"></a>커밋된지 24시간이 지나지 않음

기여로 계산하기 위한 요구 사항을 충족하는 커밋을 수행한 후 기여 그래프에 해당 기여가 표시되는 것을 확인하려면 최대 24시간까지 기다려야 할 수 있습니다.

### <a name="your-local-git-commit-email-isnt-connected-to-your-account"></a>로컬 Git 커밋 메일이 계정에 연결되지 않음

{% endif %}기여 그래프에 나타나도로 하려면 {% data variables.product.product_location %}{% ifversion fpt or ghec %}의 계정에 연결된 메일 주소 또는 {% data variables.product.prodname_dotcom %}에서 제공한 `noreply` 메일 주소를 사용하여 커밋해야 합니다.{% ifversion fpt or ghec %} `noreply` 메일 주소에 대한 자세한 내용은 “[커밋 메일 주소 설정](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#about-commit-email-addresses)"을 참조하세요.{% endif %}

커밋 URL의 끝에 `.patch`를 추가하여 커밋에 사용되는 메일 주소를 확인할 수 있습니다(예: <a href="https://github.com/octocat/octocat.github.io/commit/67c0afc1da354d8571f51b6f0af8f2794117fd10.patch" data-proofer-ignore>https://github.com/octocat/octocat.github.io/commit/67c0afc1da354d8571f51b6f0af8f2794117fd10.patch</a>).

```
From 67c0afc1da354d8571f51b6f0af8f2794117fd10 Mon Sep 17 00:00:00 2001
From: The Octocat <octocat@nowhere.com>
Date: Sun, 27 Apr 2014 15:36:39 +0530
Subject: [PATCH] updated index for better welcome message
```

`From:` 필드의 메일 주소는 [로컬 git 구성 설정](/articles/set-up-git)에서 설정한 주소입니다. 이 예제에서 커밋에 사용되는 메일 주소는 `octocat@nowhere.com`입니다.

커밋에 사용된 메일 주소가 {% data variables.product.product_location %}의 계정에 연결되지 않은 경우 {% ifversion ghae %}Git에서 커밋을 작성하는 데 사용되는 메일 주소를 변경합니다. 자세한 내용은 “[커밋 메일 주소 설정](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#setting-your-commit-email-address-in-git)"을 참조하세요.{% else %}{% data variables.product.product_location %}의 계정에 [메일 주소를 추가](/articles/adding-an-email-address-to-your-github-account)해야 합니다. 새 주소를 추가하면 기여 그래프가 자동으로 다시 작성됩니다.{% endif %}

{% warning %}

**경고**: 일반 메일 주소(예: `jane@computer.local`)는 {% data variables.product.prodname_dotcom %} 계정에 추가할 수 없습니다. 커밋에 이러한 메일을 사용하는 경우 커밋은 {% data variables.product.prodname_dotcom %} 프로필에 연결되지 않으며 기여 그래프에 표시되지 않습니다.

{% endwarning %}

### <a name="commit-was-not-made-in-the-default-or-gh-pages-branch"></a>기본 또는 `gh-pages` 분기에서 커밋되지 않았음

기본 분기 또는 `gh-pages` 분기에서 커밋된 경우에만 커밋이 계산됩니다(프로젝트 사이트가 있는 리포지토리의 경우). 자세한 내용은 “[{% data variables.product.prodname_pages %} 정보](/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites)”를 참조하세요.

커밋이 기본 분기가 아닌 분기 또는 `gh-pages` 분기가 아닌 분기에 있는데 해당 커밋이 기여에 계산되도록 하려면 다음 중 하나를 수행해야 합니다.
- [끌어오기 요청을 시작](/articles/creating-a-pull-request)하여 변경 내용을 기본 분기 또는 `gh-pages` 분기에 병합합니다.
- 리포지토리의 [기본 분기를 변경](/github/administering-a-repository/changing-the-default-branch)합니다.

{% warning %}

**경고**: 리포지토리의 기본 분기를 변경하면 모든 리포지토리 협력자에 대해서도 기본 분기가 변경됩니다. 새 분기가 향후 모든 끌어오기 요청 및 커밋이 수행될 기준이 되도록 하려는 경우에만 이 작업을 수행하세요.

{% endwarning %}

### <a name="commit-was-made-in-a-fork"></a>포크에서 커밋되었습니다.

포크에서 수행된 커밋은 기여에 포함되지 않습니다. 이러한 커밋을 계산에 포함하려면 다음 중 하나를 수행해야 합니다.
- [끌어오기 요청을 열어](/articles/creating-a-pull-request) 변경 내용을 부모 리포지토리에 병합합니다.
- 포크를 분리하고 {% data variables.product.product_location %}에서 독립 실행형 리포지토리로 전환하려면 {% data variables.contact.contact_support %}에 문의하세요. 포크에 자체 포크가 있는 경우 {% data variables.contact.contact_support %}에게 포크가 리포지토리와 함께 새 네트워크로 이동해야 하는지 아니면 현재 네트워크에 남아 있어야 하는지 알려주세요. 자세한 내용은 “[포크 정보](/articles/about-forks/)”를 참조하세요.

## <a name="further-reading"></a>추가 참고 자료

- “[프로필에서 프라이빗 기여 공개 또는 숨기기](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile)”
- “[프로필 페이지에서 기여 보기](/articles/viewing-contributions-on-your-profile-page)”
