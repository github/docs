---
ms.openlocfilehash: 477b5d6f7f1c0d856473991c1cc3f7cf3b52dab9
ms.sourcegitcommit: 219fb805abddaef3e5547638bd798da890020bfd
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/09/2022
ms.locfileid: "147869445"
---
1. GPG 키 목록에서 사용할 GPG 키 ID의 긴 형식을 복사합니다. 이 예제에서 GPG 키 ID는 `3AA5C34371567BD2`입니다.
    ```shell{:copy}
  $ gpg --list-secret-keys --keyid-format=long
  /Users/hubot/.gnupg/secring.gpg
  ------------------------------------
  sec   4096R/3AA5C34371567BD2 2016-03-10 [expires: 2017-03-10]
  uid                          Hubot <hubot@example.com>
  ssb   4096R/42B317FD4BA89E7A 2016-03-10
 ```
