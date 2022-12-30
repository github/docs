---
ms.openlocfilehash: 6d101895af1ae0e202ebfb49119c83a14682de09
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145091250"
---
{% ifversion fpt or ghec %} {% note %}

**참고:**  {% data variables.product.prodname_dependabot %} 끌어오기 요청에 의해 트리거되는 워크플로 실행은 포크된 리포지토리에서 온 것처럼 실행되므로 읽기 전용 `GITHUB_TOKEN`을 사용합니다. 이러한 워크플로 실행은 비밀에 액세스할 수 없습니다. 이러한 워크플로를 안전하게 유지하기 위한 전략은 ["GitHub Actions 및 워크플로 보안 유지: pwn 요청 방지"](https://securitylab.github.com/research/github-actions-preventing-pwn-requests)를 참조하세요.

{% endnote %} {% endif %}
