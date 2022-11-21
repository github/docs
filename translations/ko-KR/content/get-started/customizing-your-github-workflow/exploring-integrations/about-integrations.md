---
title: 통합 정보
intro: '통합은 워크플로를 보완하고 확장하기 위해 {% data variables.product.product_name %}와 연결하는 도구 및 서비스입니다.'
redirect_from:
  - /articles/about-integrations
  - /github/customizing-your-github-workflow/about-integrations
  - /github/customizing-your-github-workflow/exploring-integrations/about-integrations
versions:
  fpt: '*'
  ghec: '*'
ms.openlocfilehash: a976ad099b80297d0d1e006a020b77b6406989eb
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145119495'
---
소유한 개인 계정 또는 조직 계정에 통합을 설치할 수 있습니다. 관리자 권한이 있거나 조직에서 소유한 특정 리포지토리에 타사의 {% data variables.product.prodname_github_apps %}를 설치할 수도 있습니다.

## {% data variables.product.prodname_github_apps %}와 {% data variables.product.prodname_oauth_apps %}의 차이점

통합은 {% data variables.product.prodname_github_apps %}, {% data variables.product.prodname_oauth_apps %}, 또는 {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API 또는 웹후크를 활용하는 모든 항목일 수 있습니다.

{% data variables.product.prodname_github_apps %}는 세분화된 사용 권한을 제공하고 앱에 필요한 사용 권한에 대해서만 액세스 권한을 요청합니다. 또한 {% data variables.product.prodname_github_apps %}는 앱을 설치하거나 통합업체가 앱에서 요청한 사용 권한을 변경할 때 각 사용자가 개별적으로 권한을 부여해야 하는 특정 사용자 수준 권한을 제공합니다.

자세한 내용은 다음을 참조하세요.
- “[{% data variables.product.prodname_github_apps %}와 {% data variables.product.prodname_oauth_apps %}의 차이점](/apps/differences-between-apps/)”
- “[앱 정보](/apps/about-apps/)”
- “[사용자 수준 권한](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#user-level-permissions)”
- “[{% data variables.product.prodname_oauth_apps %} 권한 부여](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-oauth-apps)”
- “[{% data variables.product.prodname_github_apps %} 권한 부여](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-github-apps)”
- “[권한 있는 통합 검토](/articles/reviewing-your-authorized-integrations/)”

통합업체 또는 앱 작성자가 {% data variables.product.prodname_github_app %} 매니페스트 흐름을 사용하여 앱을 만든 경우 미리 구성된 {% data variables.product.prodname_github_app %}을 설치할 수 있습니다. 자동화된 구성으로 {% data variables.product.prodname_github_app %}을 실행하는 방법에 대한 자세한 내용은 통합업체 또는 앱 작성자에게 문의하세요.

Probot을 사용하여 앱을 빌드하는 경우 간소화된 구성으로 {% data variables.product.prodname_github_app %}을 만들 수 있습니다. 자세한 내용은 [Probot 문서](https://probot.github.io/docs/) 사이트를 참조하세요.

## {% data variables.product.prodname_marketplace %}에서 통합 검색

{% data variables.product.prodname_marketplace %}에서 사용자 고유의 통합을 설치하거나 게시하는 통합을 찾을 수 있습니다.

[{% data variables.product.prodname_marketplace %}](https://github.com/marketplace)에는 {% data variables.product.prodname_github_apps %} 및 {% data variables.product.prodname_oauth_apps %}가 포함되어 있습니다. 통합을 찾거나 사용자 고유의 통합을 만드는 방법에 대한 자세한 내용은 “[{% data variables.product.prodname_marketplace %} 정보](/articles/about-github-marketplace)”를 참조하세요.

## 통합업체에서 직접 구매한 통합

일부 통합은 통합업체에서 직접 구매할 수도 있습니다. 조직 구성원으로서 사용하려는 {% data variables.product.prodname_github_app %}을 찾으면 조직에서 해당 조직에 대한 앱을 승인하고 설치하도록 요청할 수 있습니다.

앱이 설치된 모든 조직 소유 리포지토리에 대한 관리자 권한이 있는 경우 조직 소유자에게 앱을 승인하도록 요청하지 않고도 리포지토리 수준 사용 권한으로 {% data variables.product.prodname_github_apps %}를 설치할 수 있습니다. 통합업체가 앱의 사용 권한을 변경하는 경우 사용 권한이 리포지토리 전용이면 조직 소유자와 해당 앱이 설치된 리포지토리에 대한 관리자 권한이 있는 사람이 새 사용 권한을 검토하고 수락할 수 있습니다.
