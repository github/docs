---
ms.openlocfilehash: 9523f75cde4298a6e1cd4335127a1dfb5bb342b5
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: "148160095"
---
codespace 内で実行されているアプリケーションが、localhost URL (`http://localhost:PORT` や `http://127.0.0.1:PORT` など) を含むターミナルに出力すると、ポートが自動的に転送されます。 ブラウザーまたは {% data variables.product.prodname_vscode %} で {% data variables.product.prodname_github_codespaces %} を使用している場合、ターミナルの URL 文字列はリンクに変換され、それをクリックするとローカル コンピューターで Web ページを表示できます。 既定では、{% data variables.product.prodname_github_codespaces %} は HTTP を使ってポートを転送します。

![自動ポート転送](/assets/images/help/codespaces/automatic-port-forwarding.png)

また、ポートの手動転送、転送されるポートへのラベル付け、Organization のメンバーとの転送されるポートの共有、転送されるポートのパブリックな共有、codespace の構成への転送されるポートの追加などを行うこともできます。

{% note %}

**注**: {% data reusables.codespaces.restrict-port-visibility %}

{% endnote %}

## ポートの転送

自動的に転送されなかったポートを手動で転送できます。