---
ms.openlocfilehash: ab6a2179820f4517ec815e953fa1194be97f5a31
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: "146180825"
---
{% data variables.product.prodname_actions %}를 사용하도록 설정하면 워크플로는 리포지토리 및 다른 {% ifversion fpt %}퍼블릭{% elsif ghec or ghes %} 퍼블릭 또는 내부{% elsif ghae %} 내부{% endif %} 리포지토리 내의 작업{% ifversion actions-workflow-policy %} 및 재사용 가능한 워크플로{% endif %}를 실행할 수 있습니다.
