---
ms.openlocfilehash: 4e8c79051e378c800568f0fcf36c783a1bdd8811
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109077"
---
구성 스크립트를 사용하여 그룹에 새 실행기를 자동으로 추가할 수 있습니다. 예를 들어 이 명령은 새 실행기를 등록하고 `--runnergroup` 매개 변수를 사용하여 `rg-runnergroup`이라고 명명된 그룹에 추가합니다.

```sh
./config.sh --url $org_or_enterprise_url --token $token --runnergroup rg-runnergroup
```

실행기 그룹이 없으면 명령이 실패합니다.

```
Could not find any self-hosted runner group named "rg-runnergroup".
```
