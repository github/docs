---
title: GitHub AE에서 작업 사용
intro: '{% data variables.product.prodname_ghe_managed %}에는 {% data variables.product.prodname_dotcom %}에서 작성한 대부분의 작업이 포함됩니다.'
versions:
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
redirect_from:
  - /admin/github-actions/using-actions-in-github-ae
shortTitle: Use actions
ms.openlocfilehash: a8439a08f73667b7d048b31e2c9eb3968ba2e957
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145120372'
---
{% data variables.product.prodname_actions %} 워크플로는 작업을 만들고 워크플로를 사용자 지정하기 위해 결합할 수 있는 개별 작업인 _작업_ 을 사용할 수 있습니다. 사용자 고유의 작업을 만들거나 {% data variables.product.prodname_dotcom %} 커뮤니티에서 공유하는 작업을 사용 및 사용자 지정할 수 있습니다.

## {% data variables.product.prodname_ghe_managed %}와 함께 번들로 제공되는 공식 작업

대부분의 공식 {% data variables.product.prodname_dotcom %} 인증 작업은 에서 작성한 작업은 {% data variables.product.prodname_ghe_managed %}와 함께 자동으로 번들로 제공되며 {% data variables.product.prodname_marketplace %}에서 특정 시점에 캡처됩니다. {% data variables.product.prodname_ghe_managed %} 인스턴스가 업데이트되면 번들로 제공되는 공식 작업도 업데이트됩니다.

번들로 제공되는 공식 작업에는 `actions/checkout`, `actions/upload-artifact`, `actions/download-artifact`, `actions/labeler` 및 다양한 `actions/setup-` 작업 등이 포함됩니다. 어떤 공식 작업이 포함되는지 확인하려면 인스턴스에서 다음 조직을 찾습니다. 
- <code>https://<em>HOSTNAME</em>/actions</code>
- <code>https://<em>HOSTNAME</em>/github</code>

각 작업의 파일은 `actions` 및 `github` 조직의 리포지토리에 보관됩니다. 각 작업 리포지토리에는 워크플로에서 작업을 참조하는 데 사용할 수 있는 필요한 태그, 분기 및 커밋 SHA가 포함됩니다.
