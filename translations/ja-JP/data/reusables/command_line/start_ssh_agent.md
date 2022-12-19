---
ms.openlocfilehash: a7d12084e7faee6e6b5f6aaec970a9f7a7fc1f17
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145139004"
---
1. バックグラウンドでssh-agentを開始します。 

    ```shell
    $ eval "$(ssh-agent -s)"
    > Agent pid 59566
    ```

    環境によっては、異なるコマンドを使う必要があるかもしれません。 たとえば、ssh-agent を開始する前に `sudo -s -H` を実行してルート アクセスを使用したり、`exec ssh-agent bash` や `exec ssh-agent zsh` を使用して ssh-agent を実行したりする必要がある場合があります。
