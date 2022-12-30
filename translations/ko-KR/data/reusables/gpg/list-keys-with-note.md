---
ms.openlocfilehash: 85c4e104344284797c4fc047569b99657a08d342
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/09/2022
ms.locfileid: "147694226"
---
1. `gpg --list-secret-keys --keyid-format=long` 명령을 사용하여 퍼블릭 키와 프라이빗 키가 모두 있는 긴 형식의 GPG 키를 나열합니다. 커밋 또는 태그에 서명하려면 프라이빗 키가 필요합니다.

   ```shell{:copy}
   $ gpg --list-secret-keys --keyid-format=long
   ```
   
   {% note %}

   **참고:** Linux에서 일부 GPG를 설치하려면 기존 키 목록을 대신 보는 데 `gpg2 --list-keys --keyid-format LONG`을 사용해야 할 수 있습니다. 이 경우 `git config --global gpg.program gpg2`를 실행하여 `gpg2`를 사용할 Git도 구성해야 합니다.

   {% endnote %}
