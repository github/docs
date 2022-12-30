---
ms.openlocfilehash: a7d12084e7faee6e6b5f6aaec970a9f7a7fc1f17
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145127895"
---
1. Inicie o ssh-agent em segundo plano. 

    ```shell
    $ eval "$(ssh-agent -s)"
    > Agent pid 59566
    ```

    Dependendo do seu ambiente, talvez seja necessário usar um comando diferente. Por exemplo, talvez seja necessário usar o acesso raiz executando `sudo -s -H` antes de iniciar o ssh-agent ou usar `exec ssh-agent bash` ou `exec ssh-agent zsh` para executar o ssh-agent.
