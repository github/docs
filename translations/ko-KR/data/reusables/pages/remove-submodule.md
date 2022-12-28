---
ms.openlocfilehash: bdb353e5425d7c6bbb7488c1cea8803cf72646da
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/04/2022
ms.locfileid: "148009153"
---
문제를 해결하려면 먼저 Git 프로젝트 내의 Git 프로젝트인 하위 모듈을 실제로 사용할지 결정합니다. 하위 모듈이 실수로 만들어지는 경우가 있습니다.

하위 모듈을 사용하지 않으려면 하위 모듈을 제거하고 PATH-TO-SUBMODULE을 하위 모듈의 경로로 바꿉니다.
```shell
$ git submodule deinit PATH-TO-SUBMODULE
$ git rm PATH-TO-SUBMODULE
$ git commit -m "Remove submodule"
$ rm -rf .git/modules/PATH-TO-SUBMODULE
```
