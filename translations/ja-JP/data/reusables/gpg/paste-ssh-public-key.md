---
ms.openlocfilehash: adefefb787099214cf17f7b2276a8f44f3fe8e56
ms.sourcegitcommit: f54d01e643f994ce48f0774dbc680ad77dd6193f
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/10/2022
ms.locfileid: "148160573"
---
1. Git に SSH 署名キーを設定するには、次のテキストを貼り付けて、 **/PATH/TO/KEY.PUB** の部分を、使いたい公開キーへのパスに置き換えます。
  ```bash
  $ git config --global user.signingkey=/PATH/TO/.SSH/KEY.PUB