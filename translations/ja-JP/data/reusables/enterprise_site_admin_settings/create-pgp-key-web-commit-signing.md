---
ms.openlocfilehash: 8918ea0f8f1e80fdae507aa6a1824cfecf057e0b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "147062707"
---
1. 管理シェルで、PGP キーを作成します。 メール アドレスとキー ID をメモしておきます。

    ```bash{:copy}
    gpg --full-generate-key --pinentry-mode=loopback
    ```
    
    - 既定のキーの種類と、有効期限のない少なくとも `4096` ビットを使用します。 
    - ユーザー名として `web-flow` を使用します。 
