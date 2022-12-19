---
ms.openlocfilehash: f46fcf5de23b55285d402b93bd89b0155e1224e7
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109158"
---
{% ifversion pages-custom-workflow %}

변경 내용이 특정 분기로 푸시될 때 사이트를 게시하거나 {% data variables.product.prodname_actions %} 워크플로를 작성하여 사이트를 게시할 수 있습니다. {% data reusables.actions.settings-ui.settings-actions-pages-custom-workflow %}

사이트의 빌드 프로세스를 제어할 필요가 없는 경우 변경 내용이 특정 분기로 푸시될 때 사이트를 게시하는 것이 좋습니다. {% data reusables.pages.pages-about-branch-source %}

Jekyll 이외의 빌드 프로세스를 사용하거나 전용 분기에서 컴파일된 정적 파일을 보관하지 않으려면 {% data variables.product.prodname_actions %} 워크플로를 작성하여 사이트를 게시하는 것이 좋습니다. {% data variables.product.product_name %}은(는) 워크플로를 작성하는 데 도움이 되는 일반적인 게시 시나리오를 위한 시작 워크플로를 제공합니다.

{% else %}

{% data variables.product.prodname_pages %} 사이트는 변경 내용이 특정 분기로 푸시될 때마다 게시됩니다. {% data reusables.pages.pages-about-branch-source %}

{% endif %}