---
ms.openlocfilehash: a7d12084e7faee6e6b5f6aaec970a9f7a7fc1f17
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145139005"
---
1. Inicia el agente SSH en segundo plano. 

    ```shell
    $ eval "$(ssh-agent -s)"
    > Agent pid 59566
    ```

    Dependiendo de tu ambiente, puede que necesites utilizar un comando diferente. Por ejemplo, es posible que tenga que usar el acceso raíz mediante la ejecución de `sudo -s -H` antes de iniciar ssh-agent, o bien que tenga que usar `exec ssh-agent bash` o `exec ssh-agent zsh` ejecutar ssh-agent.
