---
ms.openlocfilehash: a7d12084e7faee6e6b5f6aaec970a9f7a7fc1f17
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "145133609"
---
1. Starte den SSH-Agenten im Hintergrund. 

    ```shell
    $ eval "$(ssh-agent -s)"
    > Agent pid 59566
    ```

    Je nach Umgebung musst du möglicherweise einen anderen Befehl verwenden. So musst du möglicherweise z. B. root-Zugriff verwenden, indem du vor dem Starten des SSH-Agent `sudo -s -H` ausführst, oder du musst zum Ausführen des SSH-Agent `exec ssh-agent bash` oder `exec ssh-agent zsh` verwenden.
