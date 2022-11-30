---
title: JetBrains 用の GitHub Codespaces プラグインの使用
shortTitle: Plugin for JetBrains
intro: 'JetBrains クライアント アプリケーションの {% data variables.product.prodname_github_codespaces %} プラグインを使用して、codespace について調べたり、作業が完了したら codespace を停止したりできます。'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
ms.openlocfilehash: 8ffd48856a2653f3db3c871122d3acd23c246d7a
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159936'
---
{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

## {% data variables.product.prodname_github_codespaces %} プラグインについて

JetBrains Gateway アプリケーションから codespace に接続すると、JetBrains クライアント アプリケーションが起動します。 お気に入りの JetBrains IDE で {% data variables.product.prodname_github_codespaces %} を使用できます。 詳細については、「[JetBrains IDE での {% data variables.product.prodname_github_codespaces %} の使用](/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide)」を参照してください。

JetBrains Gateway から codespace に接続すると、{% data variables.product.prodname_github_codespaces %} プラグインは JetBrains クライアントに既にインストールされています。 プラグインによって、{% data variables.product.prodname_github_codespaces %} ツール ウィンドウがユーザー インターフェイスに追加されます。

JetBrains クライアントのアプリケーション ウィンドウの左下にある **[{% data variables.product.prodname_github_codespaces %}]** をクリックして、{% data variables.product.prodname_github_codespaces %} ツール ウィンドウを開きます。

![{% data variables.product.prodname_github_codespaces %} ツール ウィンドウのスクリーンショット](/assets/images/help/codespaces/jetbrains-codespaces-tool-window.png)

## {% data variables.product.prodname_github_codespaces %} ツール ウィンドウの使用

{% data variables.product.prodname_github_codespaces %} ツール ウィンドウによって次が表示されます。
* この codespace を作成したリポジトリ。
* codespace の表示名。
* 現在のブランチ。
* マシンの仕様。
* この codespace がアイドル状態を維持できる時間。これを過ぎると、自動的に停止されます。
* codespace の経過時間。
* 停止した codespace が保持される期間。これを過ぎると、自動的に削除されます。

{% data variables.product.prodname_github_codespaces %} ツール ウィンドウの上部にあるアイコンには、次の機能があります。

* **アクティブな codespace を更新する**

  ![更新ボタンのスクリーンショット](/assets/images/help/codespaces/jetbrains-plugin-icon-refresh-BAK.png)

  {% data variables.product.prodname_github_codespaces %} ツール ウィンドウで詳細を更新します。 たとえば、{% data variables.product.prodname_cli %} を使用して表示名を変更した場合、このボタンをクリックして新しい名前を表示できます。

* **切断と停止**

  ![停止ボタンのスクリーンショット](/assets/images/help/codespaces/jetbrains-plugin-icon-stop.png)

  codespace を停止し、リモート マシンでバックエンド IDE を停止し、ローカル JetBrains クライアントを閉じます。

* **Web から codespaces を管理する**

  ![一覧ボタンのスクリーンショット](/assets/images/help/codespaces/jetbrains-plugin-icon-index.png)

  https://github.com/codespaces で codespaces の一覧を開きます。

* **codespace 作成ログを表示する**

  ![ログ ボタンのスクリーンショット](/assets/images/help/codespaces/jetbrains-plugin-icon-log.png)

  エディター ウィンドウで codespace 作成ログを開きます。 詳しい情報については、「[{% data variables.product.prodname_github_codespaces %} のログ](/codespaces/troubleshooting/github-codespaces-logs)」を参照してください。

* **dev container をリビルドする**

  ![リビルド ボタンのスクリーンショット](/assets/images/help/codespaces/jetbrains-plugin-icon-rebuild.png)

  codespace をリビルドして、加えた変更を dev container 構成に適用します。 JetBrains クライアントが閉じられ、codespace をもう一度開く必要があります。 詳細については、「[codespace のライフサイクル](/codespaces/developing-in-codespaces/the-codespace-lifecycle#rebuilding-a-codespace)」を参照してください。

