---
ms.openlocfilehash: 9b1f61261d2e59fe30703a3bebfdaed7a25667e6
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145089273"
---
* `{owner}/{repo}/.github/workflows/{filename}@{ref}`퍼블릭 {% ifversion ghes or ghec or ghae %} 또는 내부 {% endif %} 리포지토리에서 재사용 가능한 워크플로의 경우 {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6000 %}.
* 동일한 리포지토리에서 다시 사용할 수 있는 워크플로의 경우 `./.github/workflows/{filename}`입니다.{% endif %}

`{ref}`는 SHA, 릴리스 태그 또는 분기 이름이 될 수 있습니다. 안정성과 보안을 위해서는 커밋 SHA를 사용하는 것이 가장 안전합니다. 자세한 내용은 “[GitHub Actions의 보안 강화](/actions/learn-github-actions/security-hardening-for-github-actions#reusing-third-party-workflows)”를 참조하세요. {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6000 %}두 번째 구문 옵션을 사용하는 경우(`{owner}/{repo}` 및 `@{ref}` 없음) 호출된 워크플로는 호출자 워크플로와 동일한 커밋에서 옵니다.{% endif %}
