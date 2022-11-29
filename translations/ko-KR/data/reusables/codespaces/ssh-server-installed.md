---
ms.openlocfilehash: 8c155db26d97e1f845638c790dd3cf1114eac47a
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: "148160218"
---
연결하는 codespace는 SSH 서버를 실행해야 합니다. 기본 컨테이너 이미지에는 자동으로 시작되는 SSH 서버가 포함됩니다. codespaces가 기본 이미지에서 만들어지지 않은 경우 파일의 개체에 다음 `features` 을 추가하여 SSH 서버를 설치하고 시작할 수 있습니다 `devcontainer.json` .

```json
"features": {
    ...
    "ghcr.io/devcontainers/features/sshd:1": {
        "version": "latest"
    },
    ...
}
```