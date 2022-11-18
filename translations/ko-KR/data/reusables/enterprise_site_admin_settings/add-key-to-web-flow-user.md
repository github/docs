---
ms.openlocfilehash: 632a3ac2c6b2d5d074ef3b1db598ed57a89195c5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147369251"
---
1. 다음 명령을 실행하여 KEY-ID를 PGP 키 ID로 바꿉니다.

   ```bash{:copy}
   gpg --armor --export KEY-ID
   ```
1. `-----BEGIN PGP PUBLIC KEY BLOCK-----`으로 시작하고 `-----END PGP PUBLIC KEY BLOCK-----`으로 끝나는 PGP 키를 복사합니다.
1. `web-flow` 사용자로 {% data variables.product.prodname_ghe_server %}에 로그인합니다.
1. 사용자 프로필에 공용 PGP 키를 추가합니다. 자세한 내용은 “[{% data variables.product.prodname_dotcom %} 계정에 GPG 키 추가](/authentication/managing-commit-signature-verification/adding-a-gpg-key-to-your-github-account)”를 참조하세요.

   {% note %}

   **참고:** GPG 키 목록에서 다른 공개 키를 제거하지 마세요. 공개 키가 삭제되면 해당 프라이빗 키로 서명된 모든 커밋은 더 이상 확인된 것으로 표시되지 않습니다.

   {% endnote %}
