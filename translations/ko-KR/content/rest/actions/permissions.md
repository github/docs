---
title: GitHub Actions 사용 권한
allowTitleToDifferFromFilename: true
shortTitle: Permissions
intro: '{% data variables.product.prodname_actions %} 사용 권한 API를 사용하면 {% data variables.product.prodname_actions %}를 실행할 수 있는 엔터프라이즈, 조직 및 리포지토리에 대한 사용 권한을 설정할 수 있으며, 어떤 작업{% ifversion actions-workflow-policy %} 및 재사용 가능한 워크플로{% endif %}를 실행할 수 있는지 설정할 수 있습니다.'
topics:
  - API
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 33dce77111812ba9cf5b05a170bc713c3506c00e
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/12/2022
ms.locfileid: '147888600'
---
## 사용 권한 API 정보

{% data variables.product.prodname_actions %} 사용 권한 API를 사용하면 {% data variables.product.prodname_actions %}를 실행할 수 있는 엔터프라이즈, 조직 및 리포지토리에 대한 사용 권한을 설정할 수 있으며, 어떤 작업{% ifversion actions-workflow-policy %} 및 재사용 가능한 워크플로{% endif %}를 실행할 수 있는지 설정할 수 있습니다. {% ifversion fpt or ghec or ghes %} 자세한 내용은 “[사용량 제한, 청구 및 관리](/actions/reference/usage-limits-billing-and-administration#disabling-or-limiting-github-actions-for-your-repository-or-organization)”를 참조하세요.{% endif %}
