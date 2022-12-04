---
ms.openlocfilehash: 1b3e7f64c7507fde4a126cddaca3c4a97247d967
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109482"
---
필수 커밋 승인은 웹 인터페이스를 통해 수행된 커밋에만 적용됩니다. Git 명령줄 인터페이스를 통해 수행한 커밋의 경우 커밋 작성자는 `--signoff` 옵션을 사용하여 커밋을 승인해야 합니다. 자세한 내용은 [Git 설명서](https://git-scm.com/docs/git-commit)를 조하세요.


편집 중인 파일 맨 아래에 있는 커밋 양식의 헤더를 확인하여 사용자가 기여하는 리포지토리에 필수 커밋 승인이 사용하도록 설정되어 있는지 여부를 확인할 수 있습니다. 필수 커밋 승인을 사용하도록 설정하면 헤더에 “승인 및 변경 내용 커밋”이 표시됩니다.

![필수 승인이 사용하도록 설정된 커밋 양식 스크린샷](/assets/images/help/commits/commit-form-with-signoff-enabled.png)

커밋을 확인하기 전에 커밋이 커밋하려는 리포지토리를 제어하는 규칙 및 라이선스를 준수하는지 확인해야 합니다. 리포지토리는 Linux Foundation의 개발자 원본 인증서와 같은 승인 계약을 사용할 수 있습니다. 자세한 내용은 [개발자 원본 인증서](https://developercertificate.org/)를 참조하세요.

커밋 승인은 커밋 서명과 다릅니다. 커밋 서명에 대한 자세한 내용은 “[커밋 서명 확인 정보](/authentication/managing-commit-signature-verification/about-commit-signature-verification)”를 참조하세요.
