---
ms.openlocfilehash: a7d12084e7faee6e6b5f6aaec970a9f7a7fc1f17
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145139007"
---
1. 백그라운드에서 ssh-agent를 시작합니다. 

    ```shell
    $ eval "$(ssh-agent -s)"
    > Agent pid 59566
    ```

    환경에 따라 다른 명령을 사용해야 할 수 있습니다. 예를 들어 ssh-agent를 시작하기 전에 `sudo -s -H`를 실행하여 루트 액세스를 사용해야 하거나 `exec ssh-agent bash` 또는 `exec ssh-agent zsh`를 사용하여 ssh-agent를 실행해야 할 수 있습니다.
