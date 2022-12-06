---
title: GitHub.com 프로필에 엔터프라이즈 기여 보내기
intro: '기여 횟수를 {% data variables.product.prodname_dotcom_the_website %} 프로필로 보내 {% data variables.product.prodname_enterprise %}에 대한 작업을 강조 표시할 수 있습니다.'
redirect_from:
  - /articles/sending-your-github-enterprise-contributions-to-your-github-com-profile
  - /articles/sending-your-github-enterprise-server-contributions-to-your-github-com-profile
  - /articles/sending-your-github-enterprise-server-contributions-to-your-githubcom-profile
  - /github/setting-up-and-managing-your-github-profile/sending-your-github-enterprise-server-contributions-to-your-githubcom-profile
  - /github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/sending-your-github-enterprise-server-contributions-to-your-githubcom-profile
  - /account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/sending-enterprise-contributions-to-your-githubcom-profile
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Profiles
shortTitle: Send enterprise contributions
ms.openlocfilehash: 6fb1803f3a93dd03af24ce9ea3f360e579d7dbd1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147079946'
---
## {% data variables.product.prodname_dotcom_the_website %} 프로필의 엔터프라이즈 기여 정보

{% data variables.product.prodname_dotcom_the_website %} 프로필에는 지난 90일의 {% ifversion fpt or ghec %}{% data variables.product.prodname_enterprise %}{% else %}{% data variables.product.product_name %}{% endif %} 기여 횟수가 표시됩니다. {% data reusables.github-connect.sync-frequency %} {% ifversion fpt or ghec %}{% data variables.product.prodname_enterprise %}{% else %}{% data variables.product.product_name %}{% endif %}의 기여 횟수는 개인 기여로 간주됩니다. 커밋 세부 정보에는 기여 횟수만 표시되며 이러한 기여는 {% data variables.product.prodname_dotcom_the_website %} 외부의 {% data variables.product.prodname_enterprise %} 환경에서 이루어졌습니다.

프로필에 개인 기여 횟수를 표시할지 여부를 결정할 수 있습니다. 자세한 내용은 “[프로필에서 개인 기여 공개 또는 숨기기](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile/)”를 참조하세요.

기여를 계산하는 방법에 대한 자세한 내용은 “[프로필에서 기여 그래프 관리](/articles/managing-contribution-graphs-on-your-profile/)”를 참조하세요.

{% note %}

**참고:**
- 계정 간의 연결은 [GitHub 개인정보처리방침](/free-pro-team@latest/github/site-policy/github-privacy-statement/)에 따라 제어되며 해당 연결을 사용하는 사용자는 [GitHub 서비스 약관](/free-pro-team@latest/github/site-policy/github-terms-of-service)에 동의합니다.

- {% ifversion fpt or ghec %}{% data variables.product.prodname_enterprise %}{% else %}{% data variables.product.product_name %}{% endif %} 프로필을 {% data variables.product.prodname_dotcom_the_website %} 프로필에 연결하기 전에 엔터프라이즈 소유자가 {% data variables.product.prodname_github_connect %}를 사용하도록 설정하고 환경 간 기여 공유를 사용해야 합니다. 자세한 내용은 엔터프라이즈 소유자에게 문의하세요.

{% endnote %}

## {% data variables.product.prodname_dotcom_the_website %} 프로필에 엔터프라이즈 기여 보내기

{% ifversion fpt or ghec %}

- {% data variables.product.prodname_ghe_server %}의 엔터프라이즈 기여를 {% data variables.product.prodname_dotcom_the_website %} 프로필로 보내려면 {% data variables.product.prodname_ghe_server %} 문서에서 “[{% data variables.product.prodname_dotcom_the_website %} 프로필에 엔터프라이즈 기여 보내기](/enterprise-server/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/sending-enterprise-contributions-to-your-githubcom-profile)”를 참조하세요.
- {% data variables.product.prodname_ghe_managed %}의 엔터프라이즈 기여를 {% data variables.product.prodname_dotcom_the_website %} 프로필로 보내려면 {% data variables.product.prodname_ghe_managed %} 문서에서 “[{% data variables.product.prodname_dotcom_the_website %} 프로필에 엔터프라이즈 기여 보내기](/github-ae@latest/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/sending-enterprise-contributions-to-your-githubcom-profile)”를 참조하세요.

{% elsif ghes %}

1. {% data variables.product.prodname_ghe_server %} 및 {% data variables.product.prodname_dotcom_the_website %}에 로그인합니다.
1. {% data variables.product.prodname_ghe_server %}의 페이지 오른쪽 위 모서리에서 프로필 사진을 클릭한 다음 **설정** 을 클릭합니다.
   ![사용자 표시줄의 설정 아이콘](/assets/images/help/settings/userbar-account-settings.png) {% data reusables.github-connect.github-connect-tab-user-settings %} {% data reusables.github-connect.connect-dotcom-and-enterprise %}
1. {% data variables.product.prodname_ghe_server %}가 {% data variables.product.prodname_dotcom_the_website %} 계정에서 액세스하는 리소스를 검토한 다음 **권한 부여** 를 클릭합니다.
   ![GitHub Enterprise Server와 GitHub.com 간 연결에 권한 부여](/assets/images/help/settings/authorize-ghe-to-connect-to-dotcom.png) {% data reusables.github-connect.send-contribution-counts-to-githubcom %}

{% elsif ghae %}

1. {% data variables.product.prodname_ghe_managed %} 및 {% data variables.product.prodname_dotcom_the_website %}에 로그인합니다.
1. {% data variables.product.prodname_ghe_managed %}의 페이지 오른쪽 위 모서리에서 프로필 사진을 클릭한 다음 **설정** 을 클릭합니다.
   ![사용자 표시줄의 설정 아이콘](/assets/images/help/settings/userbar-account-settings.png) {% data reusables.github-connect.github-connect-tab-user-settings %} {% data reusables.github-connect.connect-dotcom-and-enterprise %} {% data reusables.github-connect.authorize-connection %} {% data reusables.github-connect.send-contribution-counts-to-githubcom %}

{% endif %}
