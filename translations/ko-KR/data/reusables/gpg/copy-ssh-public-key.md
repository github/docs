---
ms.openlocfilehash: a707921d4c8f6afa3ce5e59e2d58180ecb38d29e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147653422"
---
1. SSH 퍼블릭 키를 클립보드에 복사합니다.

  SSH 퍼블릭 키 파일에 예제 코드와 다른 이름이 있는 경우 현재 설정과 일치하도록 파일 이름을 수정합니다. 키를 복사할 때 줄 바꿈 또는 공백을 추가하지 마세요.
{% mac %}

  ```shell
  $ pbcopy &lt; ~/.ssh/id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub
  # Copies the contents of the id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub file to your clipboard
  ```

  {% tip %}

  **팁:** `pbcopy`가 작동하지 않는 경우 숨겨진 `.ssh` 폴더를 찾고, 즐겨찾는 텍스트 편집기에서 파일을 열고, 클립보드에 복사할 수 있습니다.

  {% endtip %} {% endmac %} {% windows %}

  ```shell
  $ clip &lt; ~/.ssh/id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub
  # Copies the contents of the id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub file to your clipboard
  ```

  {% tip %}

  **팁:** `clip`가 작동하지 않는 경우 숨겨진 `.ssh` 폴더를 찾고, 즐겨찾는 텍스트 편집기에서 파일을 열고, 클립보드에 복사할 수 있습니다.

  {% endtip %} {% endwindows %} {% linux %}

  ```shell
  $ cat ~/.ssh/id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub
  # Then select and copy the contents of the id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub file
  # displayed in the terminal to your clipboard
  ```

  {% tip %}

  **팁:** 또는 숨겨진 `.ssh` 폴더를 찾고, 즐겨찾는 텍스트 편집기에서 파일을 열고, 클립보드에 복사할 수 있습니다.

  {% endtip %} {% endlinux %}
