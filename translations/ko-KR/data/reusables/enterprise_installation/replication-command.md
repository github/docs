---
ms.openlocfilehash: 0ee285efb8b386c47d2782151fdf6a2bb24589fc
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: "147879009"
---
1. 데이터 저장소의 복제를 시작하려면 `ghe-repl-start` 명령을 사용합니다.
  ```shell
  $ ghe-repl-start
  ```
    {% warning %}

    **경고:** `ghe-repl-start`는 사용자가 내부 서버 오류를 보는 동안 주 서버에서 잠시 중단됩니다. 친숙한 메시지를 제공하려면 복제본 노드에서 `ghe-repl-start`를 실행하기 전에 주 노드에서 `ghe-maintenance -s`를 실행하여 어플라이언스 유지 관리 모드로 전환합니다. 복제가 시작되면 `ghe-maintenance -u`로 유지 관리 모드를 사용하지 않도록 설정합니다. 주 노드가 유지 관리 모드에 있는 동안에는 Git 복제가 진행되지 않습니다.

    {% endwarning %}
