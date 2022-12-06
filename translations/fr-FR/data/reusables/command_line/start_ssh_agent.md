---
ms.openlocfilehash: a7d12084e7faee6e6b5f6aaec970a9f7a7fc1f17
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145133608"
---
1. Démarrez l’agent SSH en arrière-plan. 

    ```shell
    $ eval "$(ssh-agent -s)"
    > Agent pid 59566
    ```

    Selon votre environnement, vous serez peut-être amené à utiliser une commande différente. Par exemple, vous devrez peut-être utiliser l’accès racine en exécutant `sudo -s -H` avant de démarrer l’agent SSH, ou `exec ssh-agent bash` ou `exec ssh-agent zsh` pour exécuter l’agent SSH.
