---
ms.openlocfilehash: a707921d4c8f6afa3ce5e59e2d58180ecb38d29e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "147653421"
---
1. SSH 公開鍵をクリップボードにコピーします。

  SSH 公開鍵のファイル名がサンプルコードと異なる場合は、現在の設定に一致するようにファイル名を変更してください。 キーをコピーする際には、改行や空白を追加しないでください。
{% mac %}

  ```shell
  $ pbcopy &lt; ~/.ssh/id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub
  # Copies the contents of the id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub file to your clipboard
  ```

  {% tip %}

  **ヒント:** `pbcopy` が機能しない場合は、非表示の `.ssh` フォルダーを探し、お気に入りのテキスト エディターでファイルを開き、クリップボードにコピーできます。

  {% endtip %} {% endmac %} {% windows %}

  ```shell
  $ clip &lt; ~/.ssh/id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub
  # Copies the contents of the id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub file to your clipboard
  ```

  {% tip %}

  **ヒント:** `clip` が機能しない場合は、非表示の `.ssh` フォルダーを探し、お気に入りのテキスト エディターでファイルを開き、クリップボードにコピーできます。

  {% endtip %} {% endwindows %} {% linux %}

  ```shell
  $ cat ~/.ssh/id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub
  # Then select and copy the contents of the id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub file
  # displayed in the terminal to your clipboard
  ```

  {% tip %}

  **ヒント:** あるいは、非表示の `.ssh` フォルダーを探し、お気に入りのテキスト エディターでファイルを開き、クリップボードにコピーできます。

  {% endtip %} {% endlinux %}
