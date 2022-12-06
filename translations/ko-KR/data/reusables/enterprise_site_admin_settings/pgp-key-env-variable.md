---
ms.openlocfilehash: 6cff9129bc98844ebcbcf3449cd5b5621559242c
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/09/2022
ms.locfileid: "147710197"
---
1. 키를 {% data variables.product.product_name %}에 대한 환경 변수로 정의하고 `<YOUR-KEY-ID>`를 GPG 키 ID로 바꿉니다.

    ```bash{:copy}
    ghe-config "secrets.gpgverify.web-signing-key" "$(gpg --export-secret-keys -a <YOUR-KEY-ID> | awk '{printf "%s\\n", $0}')"
    ```
