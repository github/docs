---
ms.openlocfilehash: 8918ea0f8f1e80fdae507aa6a1824cfecf057e0b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147062708"
---
1. 관리 셸에서 PGP 키를 만듭니다. 메일 주소와 키 ID를 기록해 둡니다.

    ```bash{:copy}
    gpg --full-generate-key --pinentry-mode=loopback
    ```
    
    - 만료 없이 기본 키 유형과 `4096`비트 이상을 사용합니다. 
    - 사용자 이름으로 `web-flow`를 사용합니다. 
