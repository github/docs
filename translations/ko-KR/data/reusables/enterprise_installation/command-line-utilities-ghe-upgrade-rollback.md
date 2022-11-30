---
ms.openlocfilehash: fbdfcfcaaa18bfc373cbb256c0b22b2111784a13
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/04/2022
ms.locfileid: "148009320"
---
업그레이드를 롤백할 때 확장명이 *.pkg* 인 업그레이드 패키지 파일을 사용해야 합니다. 확장명이 *.hpkg* 인 핫패치 패키지 파일은 지원되지 않습니다.

```shell
ghe-upgrade --allow-patch-rollback EARLIER-RELEASE-UPGRADE-PACKAGE.pkg
```

명령을 실행한 후 다시 부팅해야 합니다. 마이그레이션은 패치 릴리스에서 실행되지 않으므로 롤백은 데이터 파티션에 영향을 주지 않습니다.
