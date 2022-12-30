---
ms.openlocfilehash: bca045d426382da6dd8b62890b5c2d0ef1658858
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/04/2022
ms.locfileid: "148008924"
---
1. `ghe-migrator unlock` 명령을 사용하여 가져온 모든 리포지토리의 잠금을 해제합니다. 마이그레이션 GUID가 필요합니다.
```shell
$ ghe-migrator unlock -g MIGRATION-GUID
> Unlocked octo-org/octo-project
```
