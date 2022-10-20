---
ms.openlocfilehash: dc6bad5b656bb5d755196146b017213b66d1730e
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: "147884721"
---
1. Git で SSH 署名キーを設定するには、以下のテキストを貼り付けて、使いたいキーにクリップボードの内容を置き換えます。 キーにはスペースが含まれるため、引用符で囲む必要があります。
  ```bash
  $ git config --global user.signingkey 'ssh-ed25519 AAAAC3(...) user@example.com'
  ```