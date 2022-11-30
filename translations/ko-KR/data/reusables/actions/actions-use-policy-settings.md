---
ms.openlocfilehash: d12805516bcd1d9b079acc9d1260d887bac27eed
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: "146179721"
---
{% data reusables.actions.policy-label-for-select-actions-workflows %}를 선택하면 {% ifversion ghec or ghes or ghae %}엔터프라이즈{% else %}조직{% endif %} 내의 작업{% ifversion actions-workflow-policy %} 및 재사용 가능한 워크플로{% endif %}가 허용되며 다른 특정 작업{% ifversion actions-workflow-policy %} 및 재사용 가능한 워크플로{% endif %}를 허용하는 추가 옵션이 있습니다. 자세한 내용은 “[선택 작업{% ifversion actions-workflow-policy %} 및 재사용 가능 워크플로{% endif %} 실행 허용](#allowing-select-actions{% ifversion actions-workflow-policy %}-and-reusable-workflows{% endif %}-to-run)”을 참조하세요.

{% ifversion ghec or fpt %}{% ifversion ghec or ghes or ghae %}엔터프라이즈 {% else %}조직{% endif %} {% else %}내에서만{% endif %} 작업{% ifversion actions-workflow-policy %} 및 재사용 가능한 워크플로를 허용하면 정책이 {% data variables.product.prodname_dotcom %}에서 작성한 작업에 대한 모든 액세스를 차단합니다. 예를 들어 [`actions/checkout`](https://github.com/actions/checkout) 작업에 액세스할 수 없습니다.{% endif %}
