---
ms.openlocfilehash: a7d12084e7faee6e6b5f6aaec970a9f7a7fc1f17
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: "145139006"
---
1. Запустите агент SSH в фоновом режиме. 

    ```shell
    $ eval "$(ssh-agent -s)"
    > Agent pid 59566
    ```

    В зависимости от среды может потребоваться использовать другую команду. Например, вам может потребоваться доступ с правами root, для чего необходимо выполнить `sudo -s -H` перед запуском агента SSH. Может также потребоваться использовать `exec ssh-agent bash`или `exec ssh-agent zsh` для запуска агента SSH.
