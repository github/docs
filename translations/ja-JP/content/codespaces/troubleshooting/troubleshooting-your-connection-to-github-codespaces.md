---
title: GitHub Codespaces に接続できない問題を解決する
intro: '{% data variables.product.prodname_github_codespaces %} への接続に関するトラブルシューティングのヘルプ。'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Connection
redirect_from:
  - /codespaces/troubleshooting/troubleshooting-your-connection-to-codespaces
ms.openlocfilehash: 75632e73b689ed7fe1df95027f6e5170136c7935
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160071'
---
## 503 codespace サービスを使用できない

codespace は、30 分間アクティビティがないと停止するように設定されています。 停止した後で codespace を操作しようとすると、`503 service unavailable` エラーが表示されることがあります。 

- **[開始]** ボタンが {% data variables.product.prodname_vscode %} またはブラウザー ウィンドウに表示されている場合は、 **[開始]** をクリックして codespace に再接続します。
- ウィンドウを再度読み込んで、codespace をリセットします。 {% data variables.product.prodname_vscode %} の [コマンド パレット](/codespaces/codespaces-reference/using-the-command-palette-in-codespaces#accessing-the-command-palette)で、 **[開発者: ウィンドウの再読み込み]** をクリックします。

## ブラウザーが接続できない

ブラウザーから codespace にアクセスできないことがあります。 その場合は、 https://github.com/codespaces にアクセスし、そのページから codespace に接続してみてください。

  - そのページに codespace が表示されない場合は、自分が接続しようとしている codespace の所有者であることを確認します。 開くことができるのは、自分で作成した codespace だけです。 codespace の URL には、常に {% data variables.product.company_short %} のハンドルが含まれます。
  - codespace は表示されるのに、そのページから接続できない場合は、別のブラウザーを使って接続できるかどうかを調べます。

会社のネットワークが接続をブロックしている可能性があります。 可能であれば、デバイスで拒否された接続をログで確認します。

それでも接続できない場合は、{% data reusables.codespaces.contact-support %}

## JupyterLab で codespace に接続できない

JupyterLab で codespace を使用できるようにするには、codespace にそれがインストールされていることを確認する必要があります。 {% data variables.product.prodname_github_codespaces %} で使用される既定のコンテナー イメージには JupyterLab が含まれていますが、開発コンテナー構成をカスタマイズした場合は、JupyterLab を手動でインストールする必要があります。

codespace で Debian ベースのイメージが使用されている場合は、`installJupyterlab` オプションを `true` に設定して `python` 機能を `devcontainer.json` ファイルに追加することで、開発コンテナーに JupyterLab をインストールできます。 それ以外の場合は、Dockerfile に直接インストールします。 インストール手順については、JupyterLab ドキュメントの「[インストール](https://jupyterlab.readthedocs.io/en/stable/getting_started/installation.html)」を参照してください。

`python` 機能の詳細については、[`devcontainers/features` リポジトリ](https://github.com/devcontainers/features/tree/main/src/python)の README ページを参照してください。 `devcontainer.json` ファイルと Dockerfile の詳細については、「[開発コンテナーの概要](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#devcontainerjson)」をご覧ください。

それでも接続できない場合は、{% data reusables.codespaces.contact-support %}

## {% data variables.product.prodname_vscode %} 用の {% data variables.product.prodname_github_codespaces %} 拡張機能が接続できない

{% data variables.product.prodname_vscode %} デスクトップから codespace に接続できない場合は、次のトラブルシューティング手順を使います。

1. インストールされている {% data variables.product.prodname_github_codespaces %} 拡張機能が最新バージョンであることを確認します。 拡張機能はプレビュー リリースであり、頻繁に更新プログラムがリリースされます。
   1. {% data variables.product.prodname_vscode %} で、[拡張機能] タブを表示します。
   2. {% data variables.product.prodname_github_codespaces %} 拡張機能を選択して、拡張機能の概要ページを表示します。
   3. 更新プログラムが利用可能な場合は、ボタンが表示されたら、 **[X.X.X に更新する]** をクリックして最新バージョンにアップグレードします。
2. {% data variables.product.prodname_vscode %} の安定したビルドまたは [{% data variables.product.prodname_vscode %} Insiders](https://code.visualstudio.com/insiders/) リリース (夜間更新) のどちらを使用しているかを確認します。 Insiders リリースを使っている場合は、[安定したビルド](https://code.visualstudio.com/)をインストールしてみます。
3. 会社のネットワークが接続をブロックしている可能性があります。 可能であれば、デバイスで拒否された接続をログで確認します。

それでも接続できない場合は、{% data reusables.codespaces.contact-support %}

### codespace に待ち時間の問題がある

codespace が特に遅いと思われる場合、または待ち時間の問題がある場合は、遠いリージョンに作成されている可能性があります。 これを解決するには、[{% data variables.product.prodname_github_codespaces %} のリージョンを手動で設定する](/codespaces/managing-your-codespaces/setting-your-default-region-for-codespaces)ことができます。
