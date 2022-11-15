---
ms.openlocfilehash: 6dfaad4dc9dc813104183b2c9db41e480c9b27fb
ms.sourcegitcommit: 0a6e3eee6eea9b1e445aea1e4461d64cf6b63218
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/14/2022
ms.locfileid: "148163578"
---
1. Git に SSH 署名キーを設定するには、次のテキストを貼り付けて、 **/PATH/TO/KEY.PUB** の部分を、使いたい公開キーへのパスに置き換えます。
  ```bash
  $ git config --global user.signingkey /PATH/TO/.SSH/KEY.PUB
