---
title: codespace で開発する
intro: 'codespace の作業は、ブラウザー、{% data variables.product.prodname_vscode %}、JetBrains IDE を使うか、コマンド シェルで行うことができます。'
redirect_from:
  - /github/developing-online-with-github-codespaces/developing-in-a-codespace
  - /github/developing-online-with-codespaces/developing-in-a-codespace
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Develop in a codespace
ms.openlocfilehash: e941373ade8c2f8365e7b654733b7ee029a6a7dd
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159070'
---
{% jetbrains %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains %}

## {% data variables.product.prodname_github_codespaces %} での開発について

codespace のコード開発には、お好みのツールを使うことができます。 

* {% data variables.product.prodname_cli %} を使って開始され、SSH 接続を介したコマンド シェル。
* JetBrains Gateway を介した、JetBrains IDE のいずれか。
* {% data variables.product.prodname_vscode %} デスクトップ アプリケーション。
* {% data variables.product.prodname_vscode %} のブラウザーベース バージョン。

{% webui %}

これらの作業方法についてはそれぞれ、この記事のタブを使って情報を切り替えることができます。 現在は、{% data variables.product.prodname_vscode %} の Web ブラウザー バージョンのタブが表示されています。

## ブラウザー内の codespace で作業する

ブラウザー内で {% data variables.product.prodname_codespaces %} を使うと、フル機能の開発エクスペリエンスを利用できます。 コードの編集、デバッグ、Git コマンドの使用、アプリケーションの実行を利用できます。

![ブラウザー内の codespace の注釈付きのスクリーンショット](/assets/images/help/codespaces/codespace-overview-annotated.png)

{% data reusables.codespaces.vscode-interface-annotation %} {% data reusables.codespaces.use-chrome %} 詳しくは、「[{% data variables.product.prodname_github_codespaces %} クライアントのトラブルシューティング](/codespaces/troubleshooting/troubleshooting-github-codespaces-clients)」を参照してください。
{% data reusables.codespaces.developing-in-vscode %} {% data reusables.codespaces.navigating-to-a-codespace %}

{% endwebui %}

{% vscode %}

これらの作業方法についてはそれぞれ、この記事のタブを使って情報を切り替えることができます。 現在は、{% data variables.product.prodname_vscode %} のタブが表示されています。

## {% data variables.product.prodname_vscode_shortname %} 内の codespace で作業する

{% data variables.product.prodname_github_codespaces %} は、{% data variables.product.prodname_vscode %} の完全な開発体験を提供します。 {% data reusables.codespaces.use-visual-studio-features %}

![VS Code 内の codespace の注釈付きのスクリーンショット](/assets/images/help/codespaces/codespace-annotated-vscode.png)

{% data reusables.codespaces.vscode-interface-annotation %}

{% data variables.product.prodname_vscode_shortname %} の使用方法の詳しい情報については、{% data variables.product.prodname_vscode_shortname %} ドキュメントで[ユーザー インターフェイス ガイド](https://code.visualstudio.com/docs/getstarted/userinterface)を参照してください。

{% data reusables.codespaces.connect-to-codespace-from-vscode %} 

トラブルシューティングの情報については、「[Codespaces クライアントのトラブルシューティング](/codespaces/troubleshooting/troubleshooting-github-codespaces-clients)」を参照してください。
{% data reusables.codespaces.developing-in-vscode %} {% data reusables.codespaces.navigating-to-a-codespace %}

{% endvscode %}

{% jetbrains %}

これらの作業方法についてはそれぞれ、この記事のタブを使って情報を切り替えることができます。 現在は、JetBrains IDE のタブが表示されています。

## JetBrains IDE 内の codespace で作業する

JetBrains IDE で {% data variables.product.prodname_github_codespaces %} を使うには、JetBrains Gateway が既にインストールされている必要があります。 JetBrains Gateway のインストールの詳しい情報については、[JetBrains Web サイト](https://www.jetbrains.com/remote-development/gateway/)を参照してください。

お好みの JetBrains IDE を使って、codespace で作業できます。 codespace を作成したら、JetBrains Gateway アプリケーションを使って、お好みの IDE で codespace を開くことができます。

JetBrains IDE を使って codespace で開発する際は、コードの編集、デバッグ、Git コマンドの使用ができます。 さまざまな JetBrains IDE について詳しくは、[JetBrains ドキュメント](https://www.jetbrains.com/help/)を参照してください。

### IntelliJ IDEA ユーザー インターフェイス

{% data variables.product.prodname_github_codespaces %} ドキュメントでは、代表的な JetBrains IDE として IntelliJ IDEA を使っています。 JetBrains IDE が異なると、レイアウトが異なる場合があります。

![JetBrains IntelliJ IDEA 内の codespace の注釈付きのスクリーンショット](/assets/images/help/codespaces/jetbrains-gui-with-callouts.png)

1. **ナビゲーション バー** - 現在選ばれているファイルまたはディレクトリへのパスが表示されています。 ナビゲーション バーの右側にあるボタンを使って、プロジェクトのビルド、実行、デバッグ、Git コマンドの実行など、さまざまなアクションを実行して、変更をコミットおよびプッシュします。
2. **プロジェクト ツール ウィンドウ** - プロジェクトの構造が表示され、エディターでファイルを開くことができます。
3. **{% data variables.product.prodname_github_codespaces %} ツール ウィンドウ** - ツール ウィンドウの左側にあるバーで {% data variables.product.prodname_github_codespaces %} プラグインをクリックすると表示されます。 表示名やコンピューターの種類など、codespace に関する情報が表示されます。 このツール ウィンドウの上部にあるボタンを使用すると、次の操作を実行できます。
   * codespace を停止して切断する
   * "自分の codespace" Web ページを表示する
   * codespace 作成ログを表示する
   * 開発コンテナーを再構築する
4. **エディター** - ここでファイルを編集します。 ファイルのタブを右クリックすると、タブを新しいウィンドウに移動するなどのオプションにアクセスできます。
5. **ターミナル** - これは、メイン ウィンドウの下部にあるツール ウィンドウ バー (ステータス バーのすぐ上) で **[ターミナル]** をクリックすると表示されます。 統合ターミナルを使うと、専用のターミナル アプリケーションに切り替えることなく、コマンド ライン タスクを実行できます。
6. **ステータス バー** - ステータス バーの左側にあるアイコンにカーソルを合わせると、ツールの一覧が表示されます。 アイコンをクリックして、ツール ウィンドウ バーを非表示または表示します。 ステータス バーの右側には、現在の Git ブランチなど、プロジェクトに関する情報が表示されます。

IntelliJ IDEA ユーザー インターフェイスについて詳しくは、[IntelliJ IDEA の JetBrains ドキュメント](https://www.jetbrains.com/help/idea/guided-tour-around-the-user-interface.html)を参照してください。

### リポジトリの codespace をカスタマイズする

リポジトリ用に作成された codespace は、リポジトリの開発コンテナー構成を作成または更新してカスタマイズできます。 これは、codespace 内から行うことができます。 開発コンテナー構成を変更した後、codespace の Docker コンテナーを再構築することで、変更を現在の codespace に適用できます。 詳細については、[開発コンテナーの概要](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)に関するページをご覧ください。

### Codespace をパーソナライズする

[ドットファイル](https://dotfiles.github.io/tutorials/) リポジトリを使って、作成する codespace に対して codespace の環境面をパーソナライズできます。 詳しくは、「[アカウントの {% data variables.product.prodname_github_codespaces %} をパーソナライズする](/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account#dotfiles)」をご覧ください。

### 変更をコミットする

codespace に変更を加えたら、新しいコードであっても、構成の変更であっても、変更内容をコミットしてプッシュします。 リポジトリに変更をプッシュすることで、このリポジトリから codespace を作成する他の人の構成が同じになるように保証できます。 これは、リポジトリ用に作成された codespace の構成を変更するために行うカスタマイズが、そのリポジトリを使うすべての人に利用可能になるということでもあります。

詳細については、「[Codespace でソース コントロールを使用する](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace#committing-your-changes)」を参照してください

## 参考資料

* [JetBrains IDE で {% data variables.product.prodname_github_codespaces %} を使う](/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide)
* [JetBrains に {% data variables.product.prodname_github_codespaces %} プラグインを使う](/codespaces/codespaces-reference/using-the-github-codespaces-plugin-for-jetbrains)
* [{% data variables.product.prodname_github_codespaces %} クライアントのトラブルシューティング](/codespaces/troubleshooting/troubleshooting-github-codespaces-clients)

{% endjetbrains %}

{% cli %}

これらの作業方法についてはそれぞれ、この記事のタブを使って情報を切り替えることができます。 現在は、{% data variables.product.prodname_cli %} のタブが表示されています。

## コマンド シェルの codespace で作業する

{% data reusables.cli.cli-learn-more %}

{% data variables.product.prodname_cli %} を使って新しい codespace を作成するか、既存の codespace を開始して、それに SSH 接続できます。 接続したら、お好みのコマンドライン ツールを使ってコマンド ラインで作業できます。

{% data variables.product.prodname_cli %} をインストールし、{% data variables.product.prodname_dotcom %} アカウントで認証したら、コマンド `gh codespace [<SUBCOMMAND>...] --help` を使ってヘルプ情報を参照できます。 または、[https://cli.github.com/manual/gh_codespace](https://cli.github.com/manual/gh_codespace) で同じ参照情報を表示することもできます。

詳しくは、「[GitHub CLI で{% data variables.product.prodname_github_codespaces %} を使う](/codespaces/developing-in-codespaces/using-github-codespaces-with-github-cli)」を参照してください。

{% endcli %}
