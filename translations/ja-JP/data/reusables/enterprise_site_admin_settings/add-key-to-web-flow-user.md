---
ms.openlocfilehash: 632a3ac2c6b2d5d074ef3b1db598ed57a89195c5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "147369250"
---
1. KEY-ID を PGP キー ID に置き換えて、次のコマンドを実行します。

   ```bash{:copy}
   gpg --armor --export KEY-ID
   ```
1. `-----BEGIN PGP PUBLIC KEY BLOCK-----` で始まり、`-----END PGP PUBLIC KEY BLOCK-----` で終わる PGP キーをコピーします。
1. `web-flow` ユーザーとして {% data variables.product.prodname_ghe_server %} にサインインします。
1. ユーザーのプロファイルに公開 PGP キーを追加します。 詳しい情報については、「[{% data variables.product.prodname_dotcom %} アカウントに GPG キーを追加する](/authentication/managing-commit-signature-verification/adding-a-gpg-key-to-your-github-account)」を参照してください。

   {% note %}

   **注:** GPG キーのリストから他の公開キーを削除しないでください。 公開キーが削除されると、対応する秘密キーで署名されたコミットは検証済みとしてマークされなくなります。

   {% endnote %}
