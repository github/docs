---
ms.openlocfilehash: 55348a01f34b4eb85873a075b637bdff802fcef3
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: "148159985"
---
기능은 다양한 기본 컨테이너 이미지에서 작동하도록 설계된 자체 포함된 설치 코드 및 개발 컨테이너 구성 단위입니다. 기능을 사용하여 codespace 이미지에 도구, 런타임 또는 라이브러리를 빠르게 추가할 수 있습니다. 자세한 내용은 containers.dev [사용 가능한 기능](https://containers.dev/features) 및 [기능 사양](https://containers.dev/implementors/features/) 을 참조하세요.

{% data variables.product.prodname_vscode_shortname %} 또는 {% data variables.product.prodname_dotcom_the_website %}의 리포지토리에서 파일에 기능을 `devcontainer.json` 추가할 수 있습니다.