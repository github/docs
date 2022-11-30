---
ms.openlocfilehash: 0eeab4f4dcb143add852e22c7c47c20e857cf007
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/04/2022
ms.locfileid: "148009209"
---
1. 인스턴스가 완전히 다시 시작되고 인스턴스에 연결할 수 있게 되면 SSH 관리 셸을 사용하여 새 리소스 구성이 인식되는지 확인합니다.
```shell
$ ssh -p 122 admin@HOSTNAME
$ ghe-system-info
```
