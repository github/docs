---
title: Codespaces クライアントのトラブルシューティング
intro: '{% data variables.product.prodname_codespaces %} は、ブラウザーで使用することも、{% data variables.product.prodname_vscode %} を介して使用することもできます。 この記事では、一般的なクライアントの問題のトラブルシューティング手順を示します。'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
- Codespaces
shortTitle: Codespaces clients
ms.openlocfilehash: 9b8a04083665a1f2d555d568f855e3ebdf57fb56
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: "145115038"
---
## {% data variables.product.prodname_vscode %} のトラブルシューティング

デスクトップ バージョンの {% data variables.product.prodname_vscode %} を codespace に接続すると、通常のワークスペースでの作業と比較していくつかの違いが見られますが、エクスペリエンスはかなり似ています。 

Web で {% data variables.product.prodname_vscode %} を使用してブラウザーで codespace を開くと、より多くの違いに気付くでしょう。 たとえば、一部のキー バインドは異なるか、見つからないか、一部の拡張機能の動作が異なる場合があります。 概要については、{% data variables.product.prodname_vscode %} ドキュメントの「[既知の制限事項と適応](https://code.visualstudio.com/docs/remote/codespaces#_known-limitations-and-adaptations)」を参照してください。

[`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+codespaces) リポジトリの {% data variables.product.prodname_vscode %} エクスペリエンスを使用して、既知の問題を確認し、新しい問題をログすることができます。

### {% data variables.product.prodname_vscode %} Insiders

{% data variables.product.prodname_vscode %} Insiders は、{% data variables.product.prodname_vscode %} の最も頻繁なリリースです。 最新の機能とバグ修正がすべて含まれていますが、ビルドが壊れる原因になる新しい問題が含まれる場合もあります。

Insiders ビルドを使用していて正しくない動作に気づいた場合は、{% data variables.product.prodname_vscode %} Stable に切り替えてもう一度やり直してみることをお勧めします。

デスクトップ バージョンの {% data variables.product.prodname_vscode %} で、Stable に切り替えるには、{% data variables.product.prodname_vscode %} Insiders アプリケーションを閉じて、{% data variables.product.prodname_vscode %} Stable アプリケーションを開き、再び codespace を開きます。

{% data variables.product.prodname_vscode %} の Web バージョンでは、エディターの左下隅にある {% octicon "gear" aria-label="The manage icon" %} をクリックし、 **[Switch to Stable Version...]** を選択します。Web バージョンが読み込まれないか、{% octicon "gear" aria-label="The manage icon" %} アイコンが利用できない場合に、{% data variables.product.prodname_vscode %} Stable への切り替えを適用するには、`?vscodeChannel=stable` を codespace URL にアペンドし、その URL の codespace を読み込みます。

{% data variables.product.prodname_vscode %} で問題が修正されない場合は、上記のトラブルシューティングの手順に従ってください。

## ブラウザのトラブルシューティング

Chromium ベースではないブラウザーで codespace の使用に関する問題が発生した場合は、Chromium ベースのブラウザーに切り替えるか、お使いのブラウザーの名前 ([`firefox`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+label%3Afirefox) や [`safari`](https://github.com/Microsoft/vscode/issues?q=is%3Aopen+is%3Aissue+label%3Asafari) など) でラベル付けされた問題を検索して、`microsoft/vscode` リポジトリ内のブラウザーに関する既知の問題を確認します。

Chromium ベースのブラウザーで codespace を使用して問題が発生した場合は、[`microsoft/vscode`](https://github.com/microsoft/vscode/issues) リポジトリ内の {% data variables.product.prodname_vscode %} で別の既知の問題が発生しているかどうかを確認できます。
