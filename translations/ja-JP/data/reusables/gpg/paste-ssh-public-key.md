---
ms.openlocfilehash: dc6bad5b656bb5d755196146b017213b66d1730e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "147653397"
---
1. Git で SSH 署名キーを設定するには、以下のテキストを貼り付けて、使いたいキーにクリップボードの内容を置き換えます。 キーにはスペースが含まれるため、引用符で囲む必要があります。
  ```bash
  $ git config --global user.signingkey 'ssh-ed25519 AAAAC3(...) user@example.com'
  ```