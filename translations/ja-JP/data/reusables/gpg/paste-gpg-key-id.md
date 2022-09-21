---
ms.openlocfilehash: 36346b397ec99040cea0b0ebd45a65d22352c865
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "147614200"
---
1. Git でプライマリ GPG 署名キーを設定するには、以下のテキストを貼り付けて、使いたいプライマリ GPG キー ID に置き換えます。 この例では、GPG キー ID は `3AA5C34371567BD2` です。
   ```shell
   $ git config --global user.signingkey <em>3AA5C34371567BD2</em>
   ```
   
   または、サブキーを設定するときは、`!` サフィックスを含めます。 この例の GPG サブキー ID は `4BB6D45482678BE3` です。
   ```shell
   $ git config --global user.signingkey <em>4BB6D45482678BE3</em>!
   ```
