---
ms.openlocfilehash: 85c4e104344284797c4fc047569b99657a08d342
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: "147694225"
---
1. 公開キーと秘密キーの両方がある GPG キーを長い形式で一覧表示するには、`gpg --list-secret-keys --keyid-format=long` コマンドを使用します。 コミットやタグに署名するには秘密鍵が必要です。

   ```shell{:copy}
   $ gpg --list-secret-keys --keyid-format=long
   ```
   
   {% note %}

   **注:** Linux での一部の GPG インストールには、代わりに既存のキーの一覧を表示するには、`gpg2 --list-keys --keyid-format LONG` の使用が必要となる場合があります。 この場合、`git config --global gpg.program gpg2` を実行して `gpg2` を使用するには、Git を構成する必要もあります。

   {% endnote %}
