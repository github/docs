---
title: github.dev Web ベース エディター
intro: 'リポジトリから github.dev {% data variables.codespaces.serverless %}を使うか、pull request を使って、変更を作成およびコミットします。'
versions:
  feature: githubdev-editor
type: how_to
miniTocMaxHeadingLevel: 3
topics:
  - Codespaces
  - Visual Studio Code
  - Developer
shortTitle: Web-based editor
redirect_from:
  - /codespaces/developing-in-codespaces/web-based-editor
ms.openlocfilehash: adc5622d666f6a32e698a29ceedfc24217b27df9
ms.sourcegitcommit: 57bef7d45acfa987d82e320c7581c87df320a28a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/18/2022
ms.locfileid: '148172180'
---
{% note %}

**注:** 現在、github.dev {% data variables.codespaces.serverless %}はベータ プレビュー段階です。 ユーザーは[ディスカッションで](https://github.com/community/community/discussions/categories/general)フィードバックを提供できます。

{% endnote %}

## {% data variables.codespaces.serverless %}について

{% data variables.codespaces.serverless %}では、完全にブラウザー内で実行される軽量の編集エクスペリエンスが導入されています。 {% data variables.codespaces.serverless %}を使うと、{% data variables.product.prodname_dotcom %} からファイルとソース コード リポジトリに移動し、コードの変更を行ってコミットできます。 ユーザーは任意のリポジトリ、フォーク、または pull request をエディターで開くことができます。

{% data variables.codespaces.serverless %}は、{% data variables.product.prodname_dotcom_the_website %} から誰でも無料で入手できます。

{% data variables.codespaces.serverless %}では、検索、構文の強調表示、ソース管理ビューなど、{% data variables.product.prodname_vscode %} の多くの利点が提供されます。 Settings Sync を使用して、独自の {% data variables.product.prodname_vscode_shortname %} 設定をエディターと共有することもできます。 詳しい情報については、{% data variables.product.prodname_vscode_shortname %} ドキュメントの「[Settings Sync](https://code.visualstudio.com/docs/editor/settings-sync)」を参照してください。

{% data variables.codespaces.serverless %}は、完全にブラウザーのサンドボックス内で実行されます。 エディターではリポジトリは複製されず、代わりに [GitHub Repositories 拡張機能](https://code.visualstudio.com/docs/editor/github#_github-repositories-extension)を使用して、ユーザーが使用するほとんどの機能が実行されます。 作業内容は、コミットするまでブラウザーのローカル ストレージに保存されます。 変更内容に常にアクセスできるようにするために、変更を定期的にコミットするようにしてください。

Web ベースのエディターを使用するには、サインインする必要があります。

## {% data variables.codespaces.serverless %}を開く

{% data variables.codespaces.serverless %}で {% data variables.product.prodname_dotcom %} リポジトリを開くには、次のいずれかの方法を使用できます。

- 同じブラウザー タブでリポジトリを開くには、<kbd>.</kbd> キーを押します ({% data variables.product.prodname_dotcom %} のリポジトリまたは pull request を参照しているとき)。
 
  新しいブラウザー タブでリポジトリを開くには、<kbd>></kbd> キーを押します。

- URL を "github.com" から "github.dev" に変更します。
- ファイルを表示する場合は、{% octicon "pencil" aria-label="The edit icon" %} の横にあるドロップダウン メニューを使用し、 **[github.dev で開く]** を選びます。

  ![ファイルの編集ボタンのドロップダウン メニュー](/assets/images/help/repository/edit-file-edit-dropdown.png)

## {% data variables.product.prodname_codespaces %} と {% data variables.codespaces.serverless %}

{% data variables.codespaces.serverless %}と {% data variables.product.prodname_github_codespaces %} のどちらでも、リポジトリから直接コードを編集できます。 ただし、ユース ケースによって、それぞれの利点が若干異なります。

|| {% data variables.codespaces.serverless %} | {% data variables.product.prodname_github_codespaces %}|
|-|----------------|---------|
| **コスト** | フリー。      | 個人用アカウントでの 1 か月あたりの使用量の Free クォータ。 詳しくは、「[{% data variables.product.prodname_github_codespaces %} の課金について](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#github-codespaces-pricing)」を参照してください。|
| **可用性** | GitHub.com のすべてのユーザーが利用できます。 | GitHub.com のすべてのユーザーが利用できます。 |
| **起動** | {% data variables.codespaces.serverless %}は、キーを押すとすぐに開き、追加の構成やインストールを待たずに、すぐに使い始めることができます。 | codespace を作成または再開すると、codespace に VM が割り当てられ、`devcontainer.json` ファイルの内容に基づいてコンテナーが構成されます。 この設定では、環境の作成に数分かかる場合があります。 詳しくは、「[リポジトリの codespace を作成する](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository)」を参照してください。 |
| **Compute**  | 関連付けられたコンピューティングがないので、コードをビルドして実行したり、統合ターミナルを使用したりすることはできません。 | {%  data variables.product.prodname_github_codespaces %} を使うと、専用の VM を通じてアプリケーションを実行およびデバッグできます。|
| **ターミナル アクセス** | [なし] : | {% data variables.product.prodname_github_codespaces %} には、既定で共通のツール セットが用意されています。つまり、ローカル環境の場合とまったく同じようにターミナルを使用できます。|
| **拡張機能**  | Web で実行できる拡張機能のサブセットのみが拡張機能ビューに表示され、それらをインストールできます。 詳細については、「[拡張機能の使用](#using-extensions)」を参照してください。| {% data variables.product.prodname_github_codespaces %} では、{% data variables.product.prodname_vscode_marketplace %} のほとんどの拡張機能を使用できます。|

### 引き続き {% data variables.product.prodname_codespaces %} で作業する

{% data variables.codespaces.serverless %}でワークフローを始めて、codespace で作業を続けることができます。 実行およびデバッグ ビューまたはターミナルにアクセスしようとすると、{% data variables.codespaces.serverless %}では使えないことが通知されます。

codespace で作業を続行するには、 **[Continue Working on…]\(作業の続行...\)** をクリックし、 **[Create New Codespace]\(新しい codespace の作成\)** を選択して、現在のブランチに codespace を作成します。 このオプションを選択する前に、変更をコミットする必要があります。

![UI の [Continue Working on]\(作業の続行\) ボタンを示すスクリーンショット](/assets/images/help/codespaces/codespaces-continue-working.png)

## ソース管理の使用

{% data variables.codespaces.serverless %}を使うときは、左側のアクティビティ バーにあるソース管理ビューですべてのアクションが管理されます。 ソース管理ビューの詳細については、{% data variables.product.prodname_vscode_shortname %} ドキュメントの「[バージョン管理](https://code.visualstudio.com/docs/editor/versioncontrol)」を参照してください。

Web ベース エディターでは GitHub Repositories 拡張機能を使用して機能が強化されるため、変更を一時退避することなくブランチを切り替えることができます。 詳しい情報については、{% data variables.product.prodname_vscode_shortname %} ドキュメントの「[GitHub Repositories](https://code.visualstudio.com/docs/editor/github#_github-repositories-extension)」を参照してください。

### 新しいブランチを作成する

{% data reusables.codespaces.create-or-switch-branch %} 古いブランチで行った変更のうち、コミットされていないものは新しいブランチで使用できます。

### 変更をコミットする

{% data reusables.codespaces.source-control-commit-changes %} 
5. 変更をコミットすると、{% data variables.product.prodname_dotcom %} のブランチに自動的にプッシュされます。
### pull request を作成する

{% data reusables.codespaces.source-control-pull-request %}

### 既存の pull request の操作

{% data variables.codespaces.serverless %}を使って、既存の pull request を操作できます。

1. {% data variables.codespaces.serverless %}で開きたい pull request を参照します。
2. `.` キーを押して、{% data variables.codespaces.serverless %}で pull request を開きます。
3. 変更を行ったら、「[変更をコミットする](#commit-your-changes)」の手順を使用して変更をコミットします。 変更はブランチに直接コミットされます。変更をプッシュする必要はありません。

## 拡張機能の使用

{% data variables.codespaces.serverless %}では、Web で実行するように特に作成または更新された {% data variables.product.prodname_vscode_shortname %} 拡張機能がサポートされています。 これらの拡張機能は、"Web 拡張機能" と呼ばれます。 Web 拡張機能を作成する方法、または Web で動作するように既存の拡張機能を更新する方法については、{% data variables.product.prodname_vscode_shortname %} ドキュメントの「[Web 拡張機能](https://code.visualstudio.com/api/extension-guides/web-extensions)」を参照してください。

{% data variables.codespaces.serverless %}で実行できる拡張機能は、拡張機能ビューに表示され、インストールできます。 Settings Sync を使用すると、互換性のある拡張機能も自動的にインストールされます。 詳細については、{% data variables.product.prodname_vscode_shortname %} ドキュメントの「[Settings Sync](https://code.visualstudio.com/docs/editor/settings-sync)」を参照してください。


## トラブルシューティング

{% data variables.codespaces.serverless %}を開くときに問題が発生する場合は、次の手順を試してください。

- {% data variables.product.prodname_dotcom %} にサインインしていることを確認します。
- 広告ブロッカーを無効にします。
- ブラウザーで incognito 以外のウィンドウを使って、{% data variables.codespaces.serverless %}を開きます。

### 既知の制限事項

- 現在、{% data variables.codespaces.serverless %}は、Chrome (およびその他の各種 Chromium ベース ブラウザー)、Edge、Firefox、Safari でサポートされています。 最新バージョンの SDK を使用することをお勧めします。
- 使用しているブラウザーによっては、一部のキー バインドが機能しない場合があります。 これらのキー バインドの制限事項は、{% data variables.product.prodname_vscode_shortname %} ドキュメントの[既知の制限事項と対応](https://code.visualstudio.com/docs/remote/codespaces#_known-limitations-and-adaptations)に関するセクションに記載されています。
- 使っているローカル キーボード レイアウトによっては、`.` キーで {% data variables.codespaces.serverless %}を開けない場合があります。 その場合は、URL を `github.com` から `github.dev` に変えることで、{% data variables.product.prodname_dotcom %} リポジトリを {% data variables.codespaces.serverless %}で開くことができます。
