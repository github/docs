---
ms.openlocfilehash: 9523f75cde4298a6e1cd4335127a1dfb5bb342b5
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: "148160094"
---
codespace 내에서 실행 중인 애플리케이션이 localhost URL(예: `http://localhost:PORT` 또는 `http://127.0.0.1:PORT`)이 포함된 터미널로 출력을 인쇄하면 포트가 자동으로 전달됩니다. 브라우저 또는 {% data variables.product.prodname_vscode %}에서 {% data variables.product.prodname_github_codespaces %}를 사용하는 경우 터미널의 URL 문자열은 로컬 컴퓨터에서 웹 페이지를 보기 위해 클릭할 수 있는 링크로 변환됩니다. 기본적으로 {% data variables.product.prodname_github_codespaces %}는 HTTP를 사용하여 포트를 전달합니다.

![자동 포트 전달](/assets/images/help/codespaces/automatic-port-forwarding.png)

또한 포트를 수동으로 전달하고, 전달된 포트에 레이블을 지정하고, 전달된 포트를 조직의 구성원과 공유하고, 전달된 포트를 공개적으로 공유하고, 전달된 포트를 codespace 구성에 추가할 수도 있습니다.

{% note %}

**참고**: {% data reusables.codespaces.restrict-port-visibility %}

{% endnote %}

## 포트 전달

자동으로 전달되지 않은 포트는 수동으로 전달할 수 있습니다.