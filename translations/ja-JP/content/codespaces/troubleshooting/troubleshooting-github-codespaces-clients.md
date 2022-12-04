---
title: GitHub Codespaces クライアントのトラブルシューティング
shortTitle: Codespaces clients
intro: 'この記事では、{% data variables.product.prodname_github_codespaces %} に使用するクライアントで発生する可能性がある issue のトラブルシューティング情報を提供します。'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
redirect_from:
  - /codespaces/troubleshooting/troubleshooting-codespaces-clients
ms.openlocfilehash: 35bd9dd859612307c1f9e49ea8ed9771e4f5efcd
ms.sourcegitcommit: bf4e3590ab71b0a1bfa8d74b00183f63193acbbf
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/30/2022
ms.locfileid: '148186172'
---
{% jetbrains %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains %}

{% webui %}

## {% data variables.product.prodname_vscode %} Web クライアントのトラブルシューティング

Chromium ベース以外のブラウザーで {% data variables.product.prodname_github_codespaces %} を使用しているときに issue が発生した場合は、Google Chrome や Microsoft Edge などの Chromium ベースのブラウザーに切り替えてみてください。 また、[`firefox`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+label%3Afirefox) や [`safari`](https://github.com/Microsoft/vscode/issues?q=is%3Aopen+is%3Aissue+label%3Asafari) など、お使いのブラウザー名のラベルが付いた issue を検索して、[`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen) リポジトリで、お使いのブラウザーに関する既知の issue を確認してください。

Chromium ベースのブラウザーで {% data variables.product.prodname_github_codespaces %} を使用しているときに issue が発生した場合は、[`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen) リポジトリで、{% data variables.product.prodname_vscode_shortname %} に関する別の既知の issue が発生しているかどうかを確認できます。

### ローカルでの {% data variables.product.prodname_vscode_shortname %} 内の作業との相違

ブラウザーで {% data variables.product.prodname_vscode_shortname %} Web クライアントを使用して codespace を開くと、{% data variables.product.prodname_vscode_shortname %} デスクトップ アプリケーションのローカル ワークスペースで作業する場合といくつか違いがあることに気付くでしょう。 たとえば、一部のキー バインドは異なるか、見つからないか、一部の拡張機能の動作が異なる場合があります。 概要については、{% data variables.product.prodname_vscode_shortname %} ドキュメントの「[既知の制限事項と対応](https://code.visualstudio.com/docs/remote/codespaces#_known-limitations-and-adaptations)」を参照してください。

[`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+codespaces) リポジトリの {% data variables.product.prodname_vscode_shortname %} エクスペリエンスを使用して、既知の issue を確認し、新しい issue をログすることができます。

### {% data variables.product.prodname_vscode %} Insiders

{% data variables.product.prodname_vscode %} Insiders は、最も頻繁にリリースが行われる {% data variables.product.prodname_vscode_shortname %} です。 最新の機能とバグ修正がすべて含まれていますが、ビルドが壊れる原因になる新しい問題が含まれる場合もあります。

Insiders ビルドを使用していて正しくない動作に気づいた場合は、{% data variables.product.prodname_vscode %} Stable に切り替えてもう一度やり直してみることをお勧めします。

エディターの左下隅にある {% octicon "gear" aria-label="The manage icon" %} をクリックし、 **[安定バージョンへの切り替え...]** を選択します。{% data variables.product.prodname_vscode_shortname %} Web クライアントが読み込まれないか、{% octicon "gear" aria-label="The manage icon" %} アイコンが利用できない場合、`?vscodeChannel=stable` を codespace URL に追加し、その URL の codespace を読み込むことで、{% data variables.product.prodname_vscode %} Stable 版に強制的に切り替えることができます。

{% data variables.product.prodname_vscode %} Stable で問題が修正されない場合、既知の issue を確認し、必要に応じて、{% data variables.product.prodname_vscode_shortname %} エクスペリエンスに関する新しい issue を[`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+codespaces) リポジトリにログします。

{% endwebui %}

{% vscode %}

## {% data variables.product.prodname_vscode_shortname %} のトラブルシューティング

{% data variables.product.prodname_vscode_shortname %} デスクトップ アプリケーションで codespace を開くと、ローカル ワークスペースでの作業と比べていくつかの違いに気付くかもしれませんが、エクスペリエンスは似ているはずです。

問題が発生した場合、[`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+codespaces) リポジトリの {% data variables.product.prodname_vscode_shortname %} エクスペリエンスを使用して、既知の issue を確認し、新しい issue をログすることができます。

### {% data variables.product.prodname_vscode %} Insiders

{% data variables.product.prodname_vscode %} Insiders は、最も頻繁にリリースが行われる {% data variables.product.prodname_vscode_shortname %} です。 最新の機能とバグ修正がすべて含まれていますが、ビルドが壊れる原因になる新しい問題が含まれる場合もあります。

Insiders ビルドを使用していて正しくない動作に気づいた場合は、{% data variables.product.prodname_vscode %} Stable に切り替えてもう一度やり直してみることをお勧めします。

{% data variables.product.prodname_vscode %} Stable に切り替えるには、{% data variables.product.prodname_vscode %} Insiders アプリケーションを閉じて、{% data variables.product.prodname_vscode %} Stable アプリケーションを開き、codespace をもう一度開きます。

{% data variables.product.prodname_vscode %} Stable で問題が修正されない場合、既知の issue を確認し、必要に応じて、{% data variables.product.prodname_vscode_shortname %} エクスペリエンスに関する新しい issue を[`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+codespaces) リポジトリにログします。

{% endvscode %}

{% jetbrains %}

## JetBrains IDE のトラブルシューティング

### パフォーマンスの問題

JetBrains IDE を実行する場合は、少なくとも 4 コアを搭載した {% data variables.product.prodname_github_codespaces %} マシンの種類をお勧めします。 詳細については、「[codespace に合わせたコンピューターの種類の変更](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace)」を参照してください。

4 つ以上のコアを搭載したマシンを使用しており、JetBrains でパフォーマンスが多少低下していると思われる場合は、Java ヒープの最大サイズを増やすことが必要な可能性があります。 

最大ヒープ サイズを、2862 MiB (3 GB) からリモート ホストの RAM の 60% の間に設定することをお勧めします。

開始点としていくつかのガイダンスを次に示します。これらは、codebase のサイズとアプリケーションの実行に必要なメモリに基づいて調整できます。 たとえば、大規模または複雑な codebase がある場合は、ヒープ サイズをさらに増やすことが必要な可能性があります。 規模の大きいアプリケーションの場合、ヒープ サイズを小さく設定して、アプリケーションのメモリを増やすことができます。

| マシンの種類   | 最大ヒープ サイズ |
| -------------- | ----------------- |
| 4 コア         | 3 GB              |
| 8 コア         | 4 GB              |
| 16 または 32 コア | 8 GB              |

1. アプリケーション ウィンドウの上部のナビゲーション バーの左側にある codespace の名前をクリックします。

   ![JetBrains の [リソース] ボタンのスクリーンショット](/assets/images/help/codespaces/jetbrains-resources-button.png)

1. [パフォーマンス] タブにある [CPU 負荷] と [メモリ] の詳細に注目してください。 これらは、マシンがオーバーロードされているかどうかを示します。
 
   ![JetBrains の [localhost] ボタンのスクリーンショット](/assets/images/help/codespaces/jetbrains-performance.png)

1. [設定] タブをクリックし、ヒープ サイズを編集して、codespace に使用可能なメモリの 60% を超えないサイズまで増やします。

   ![最大ヒープ サイズ設定のスクリーンショット](/assets/images/help/codespaces/jetbrains-heap-setting.png)

1. **[保存して再起動]** をクリックします。

### MacOS Ventura でクライアントを開くことができない 

MacOS Ventura では、JetBrains Gateway から初めて codespace に接続しようとすると、JetBrains クライアント アプリケーションが "破損しており、開くことができない" ことを示すメッセージが表示されることがあります。

<img src="/assets/images/help/codespaces/jetbrains-ventura-error1.png" alt="Screenshot of the 'cannot be opened' error message" style="width:230px;"/>

その場合は、次のようにしてください。

1. **[キャンセル]** をクリックして、このメッセージを閉じます。
1. 画面の左上にある Apple アイコンをクリックし、 **[システム設定]** をクリックします。 
1. **[プライバシーとセキュリティ]** をクリックし、"セキュリティ" セクションまで下にスクロールします。

   ![[プライバシーとセキュリティ] ダイアログのスクリーンショット](/assets/images/help/codespaces/jetbrains-privacy-and-security.png)

   JetBrains クライアントの使用がブロックされたことを示すメッセージが表示されます。 

1. **[このまま開く]** をクリックして、認識されたアプリケーションに JetBrains クライアントを追加します。 
   メッセージが再び表示されますが、今度は **[開く]** ボタンが表示されます。

   <img src="/assets/images/help/codespaces/jetbrains-ventura-error2.png" alt="Screenshot of the error message with an 'Open' button" style="width:230px;"/>

1. **[キャンセル]** をもう一度クリックします。
1. JetBrains Gateway アプリケーションに戻り、目的の codespace にもう一度接続します。
   これで、JetBrains クライアントが正常に開きます。 Mac でクライアント アプリケーションを実行することを承認したので、今後 codespace に接続してもメッセージは表示されません。

### SSH 接続に関する issue

codespace で実行されている SSH サーバー経由で接続するには、{% data variables.product.prodname_dotcom %} アカウントに既に追加されている `~/.ssh` ディレクトリ (MacOS and Linux) または `%HOMEPATH%\.ssh` ディレクトリ (Windows) に SSH キーが必要です。 このディレクトリにキーがない場合、{% data variables.product.prodname_cli %} によってキーが自動的に作成されます。 詳しくは、「[{% data variables.product.prodname_dotcom %} アカウントへの新しい SSH キーの追加](/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account?platform=windows&tool=webui)」をご覧ください。

キーの検証で問題が発生した場合、{% data variables.product.prodname_cli %} のバージョンをアップグレードしてみてください。 詳しい情報については、{% data variables.product.prodname_cli %} の README にある[アップグレード手順](https://github.com/cli/cli#installation)を参照してください。

### JetBrains IDE に関する issue

使用している JetBrains IDE または JetBrains Gateway アプリケーションに固有の issue に関するサポートについては、JetBrains Web サイトの「[製品サポート](https://www.jetbrains.com/support/)」を参照してください。

{% endjetbrains %}
