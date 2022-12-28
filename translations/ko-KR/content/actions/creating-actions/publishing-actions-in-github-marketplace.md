---
title: GitHub Marketplace에서 작업 게시
intro: '{% data variables.product.prodname_marketplace %}에 작업을 게시하고 만들었던 작업을 {% data variables.product.prodname_dotcom %} 커뮤니티에 공유할 수 있습니다.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/publishing-actions-in-github-marketplace
  - /actions/automating-your-workflow-with-github-actions/publishing-actions-in-github-marketplace
  - /actions/building-actions/publishing-actions-in-github-marketplace
versions:
  fpt: '*'
  ghec: '*'
type: how_to
shortTitle: Publish in GitHub Marketplace
ms.openlocfilehash: e16f65116d7aa7c327e937dc2eba8964195e547d
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884303'
---
{% data variables.product.prodname_marketplace %}에 작업을 게시하려면 서비스 약관에 동의해야 합니다.

## 게시 작업 정보

작업을 게시하려면 리포지토리에서 작업을 만들어야 합니다. 자세한 내용은 “[작업 만들기](/actions/creating-actions)”를 참조하세요.

{% data variables.product.prodname_marketplace %}에 작업을 게시하려는 경우 리포지토리에 작업에 필요한 메타데이터 파일, 코드, 파일만 포함해야 합니다. 작업에 대한 단일 리포지토리를 만들면 코드를 단일 단위로 태그, 릴리스, 패키지할 수 있습니다. {% data variables.product.prodname_dotcom %}는 {% data variables.product.prodname_marketplace %} 페이지에서 작업의 메타데이터도 사용합니다.

작업은 {% data variables.product.prodname_marketplace %}에 즉시 게시되며 다음 요구 사항을 충족하는 한 {% data variables.product.prodname_dotcom %}에서 검토하지 않습니다.

- 작업은 퍼블릭 리포지토리에 있어야 합니다.
- 각 리포지토리에는 단일 작업이 포함되어야 합니다.
- 작업의 메타데이터 파일(`action.yml` 또는 `action.yaml`)이 리포지토리의 루트 디렉터리에 있어야 합니다.
- 작업의 메타데이터 파일에 있는 `name`은 고유해야 합니다.
  - `name`은 {% data variables.product.prodname_marketplace %}에 게시된 기존 작업 이름과 일치할 수 없습니다.
  - 사용자 또는 조직 소유자가 작업을 게시하지 않는 한 `name`은 {% data variables.product.prodname_dotcom %}의 사용자 또는 조직과 일치할 수 없습니다. 예를 들어 {% data variables.product.prodname_dotcom %} 조직만 `github`라는 작업을 게시할 수 있습니다.
  - `name`은 기존 {% data variables.product.prodname_marketplace %} 범주와 일치할 수 없습니다.
  - {% data variables.product.prodname_dotcom %}는 {% data variables.product.prodname_dotcom %} 기능의 이름을 예약합니다.

## 작업 게시

만든 작업을 새 릴리스로 태그를 지정하고 게시하여 {% data variables.product.prodname_marketplace %}에 추가할 수 있습니다.

새 릴리스 초안을 작성하고 {% data variables.product.prodname_marketplace %}에 작업을 게시하려면 다음 지침을 따르세요.

{% data reusables.repositories.navigate-to-repo %}
1. 리포지토리의 작업 메타데이터 파일(`action.yml` 또는 `action.yaml`)로 이동하면 {% data variables.product.prodname_marketplace %}에 작업을 게시하는 배너가 표시됩니다. **릴리스 초안 작성** 을 클릭합니다.

   ![마켓플레이스에 이 작업 게시 단추](/assets/images/help/repository/publish-github-action-to-marketplace-button.png)
1. {% data variables.product.prodname_marketplace %}에 작업을 게시하려면 “릴리스 작업”에서 이 확인란을 선택합니다. 확인란을 선택할 수 없는 경우 먼저 링크를 클릭하여 {% data variables.product.prodname_marketplace %} 개발자 계약을 읽고 동의해야 합니다.
![Marketplace에 게시 선택](/assets/images/help/repository/marketplace_actions_publish.png)
1. 메타데이터 파일의 레이블에 문제가 있는 경우 오류 메시지가 표시됩니다.
![알림 확인](/assets/images/help/repository/marketplace_actions_fixerrors.png)
1. 화면에 제안 사항이 표시되면 메타데이터 파일을 업데이트하여 해결합니다. 완료되면 “모두 정상인 것 같습니다”가 표시됩니다. 메시지로 응답합니다.
![오류 수정](/assets/images/help/repository/marketplace_actions_looksgood.png)
1. “기본 범주”를 선택하고 필요에 따라 사용자가 {% data variables.product.prodname_marketplace %}에서 작업을 찾는 데 도움이 되는 “다른 범주”를 선택합니다.
![범주 선택](/assets/images/help/repository/marketplace_actions_categories.png)
1. 버전으로 작업에 태그를 지정하고 릴리스 제목을 추가합니다. 이렇게 하면 릴리스에 포함된 변경 내용이나 기능을 알 수 있습니다. 작업의 전용 {% data variables.product.prodname_marketplace %} 페이지에 버전이 표시됩니다.
![버전 태그 지정](/assets/images/help/repository/marketplace_actions_version.png)
1. 다른 모든 필드를 완료하고 **릴리스 게시** 를 클릭합니다. 게시하려면 2단계 인증을 사용해야 합니다. 자세한 내용은 “[2단계 인증 구성](/articles/configuring-two-factor-authentication/)”을 참조하세요.
![릴리스 게시](/assets/images/help/repository/marketplace_actions_publishrelease.png)

## {% data variables.product.prodname_marketplace %}에서 작업 제거

{% data variables.product.prodname_marketplace %}에서 게시한 작업을 제거하려면 게시된 각 릴리스를 업데이트해야 합니다. {% data variables.product.prodname_marketplace %}에 게시한 작업의 각 릴리스에 대해 다음 단계를 수행합니다.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %}
3. 릴리스 페이지에서 편집할 릴리스의 오른쪽에서 **편집** 을 클릭합니다.
![릴리스 편집 단추](/assets/images/help/releases/release-edit-btn.png)
4. **{% data variables.product.prodname_marketplace %}에 이 작업 게시** 를 선택하여 확인란에서 확인 표시를 제거합니다.
![이 작업 게시 단추](/assets/images/help/repository/actions-marketplace-unpublish.png)
5. 페이지 아래에서 **릴리스 업데이트** 를 클릭합니다.
![릴리스 업데이트 단추](/assets/images/help/repository/actions-marketplace-update-release.png)
