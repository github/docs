---
title: 新しいコード ビューを使用したファイルの移動 (ベータ版)
intro: 新しいコード ビュー (ベータ版) を使用すると、簡単に移動が可能なファイル ツリーと統合シンボル検索を使用して、コンテキストでコードを表示できます。
allowTitleToDifferFromFilename: true
versions:
  feature: file-tree-view
topics:
  - Repositories
shortTitle: New code view (beta)
ms.openlocfilehash: 0c0fe588c92f67c92d7f3ffaa09716da39ac4551
ms.sourcegitcommit: 57bef7d45acfa987d82e320c7581c87df320a28a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/18/2022
ms.locfileid: '148172188'
---
{% note %}

**注**: {% data reusables.search.code-search-code-view-beta-note %} 

{% data reusables.search.code-search-link %}

{% endnote %}

## 新しいコード ビュー (ベータ版) について
新しいコード ビューのベータ版では、ファイル ツリー ビューによりナビゲーションが改善され、ファイル編集が簡略化され、シンボルの検索と移動用のシンボル ペインが導入され、ファイル コンテキストを維持するように blame ビューが更新されます。 新しいコード ビューは、{% data variables.product.prodname_dotcom_the_website %} の制限付きパブリック ベータ版の新しいコード検索エンジンおよび検索インターフェイスと統合されています。 {% data reusables.search.code-search-link %}

新しいコード ビュー (ベータ版) と新しいコード検索にアクセスするには、[Waitlist](https://github.com/features/code-search-code-view/signup) にサインアップします。

新しいコード ビューのベータ版に関するフィードバックを提供するには、[ディスカッション フォーラム](https://github.com/orgs/community/discussions/categories/repositories)を参照してください。

## 新しいコード検索とコード ビューの有効化と無効化 (ベータ版)

{% data reusables.search.enabling-and-disabling-code-search-and-view-beta %}

## ファイル ツリー ビューの使用
新しいファイル ツリー ビューは、簡単に移動が可能なツリー内にリポジトリのディレクトリとファイルを表示するパネルです。 ディレクトリとファイルの間をすばやく移動して、表示する各項目のコンテキストを理解できます。

1. リポジトリを選び、そのリポジトリ内のディレクトリまたはファイルをクリックして、ファイル ツリー ビューを開きます。

  ![ファイル ツリー ビューを強調した "github/docs" リポジトリのスクリーンショット](/assets/images/help/repository/file-tree-view-directory-selected.png)

1. 特定のディレクトリまたはファイルを検索するには、{% octicon "filter" aria-label="The filter icon" %} **[ファイルに移動]** 検索バーをクリックし、ディレクトリまたはファイルの名前を入力し、結果からディレクトリまたはファイルを選びます。 各検索結果の下にあるディレクトリまたはファイルのファイル パスを表示できます。

  ![[ファイルに移動] 検索バーを強調したファイル ツリー ビューのスクリーンショット](/assets/images/help/repository/file-tree-view-jump-to-file.png)

     - {% data variables.product.prodname_dotcom %} 検索バーを使用してリポジトリ内を検索するには、{% octicon "search" aria-label="The search icon" %} をクリックします。

        ![検索アイコンを強調したファイル ツリー ビューのスクリーンショット](/assets/images/help/repository/file-tree-view-search-icon.png)

1. ブランチを切り替えるには、{% octicon "git-branch" aria-label="The branch icon" %} ブランチ ドロップダウン メニューを選び、結果から目的のブランチをクリックします。 リポジトリのすべてのブランチを表示するには、 **[すべてのブランチを表示]** をクリックします。

  ![ブランチ ドロップダウン メニューの [ブランチ] タブを強調したファイル ツリー ビューのスクリーンショット](/assets/images/help/repository/file-tree-view-branch-dropdown.png)

1. タグを切り替えるには、{% octicon "git-branch" aria-label="The branch icon" %} ブランチ ドロップダウン メニューを選び、 **[タグ]** タブをクリックし、結果から目的のタグをクリックします。 リポジトリのすべてのタグを表示するには、 **[すべてのタグを表示]** をクリックします。

  ![ブランチ ドロップダウン メニューの [タグ] タブを強調したファイル ツリー ビューのスクリーンショット](/assets/images/help/repository/file-tree-view-branch-dropdown-tags.png)

## ファイルの処理
新しいコード ビューには、ファイルの操作方法の更新も含まれています。 ファイルの編集、ファイルの作成またはアップロード、ファイルまたはディレクトリの削除などの既存の機能が合理化されました。 これで、github.dev または {% data variables.product.prodname_desktop %} 内のファイルの編集と、統合されたファイル内検索機能にすばやくアクセスできるようになりました。 

1. リポジトリを選び、そのリポジトリ内のファイルをクリックして新しいコード ビューを開きます。

  ![ファイル ツリー ビューで選んだファイルを強調した "github/docs" リポジトリのスクリーンショット](/assets/images/help/repository/file-tree-view-file-selected.png)

1. 統合ファイル エディターでファイルを編集するには、{% octicon "pencil" aria-label="The pencil icon" %} をクリックします。

  ![編集アイコンを強調した新しいコード ビューのファイル エディターのスクリーンショット](/assets/images/help/repository/code-view-edit-icon.png)

1. github.dev の {% data variables.codespaces.serverless %} または {% data variables.product.prodname_desktop %} のファイルを編集するには、{% octicon "pencil" aria-label="The pencil icon" %} の横にある {% octicon "triangle-down" aria-label="The downwards-facing triangle icon" %} を選び、**github.dev** または **{% data variables.product.prodname_desktop %}** をクリックします。

  {% note %}

  **注:** 現在、github.dev {% data variables.codespaces.serverless %}はベータ プレビュー段階です。 ユーザーは[ディスカッションで](https://github.com/community/community/discussions/categories/general)フィードバックを提供できます。

  {% endnote %}

  ![編集ドロップダウン メニューを強調した新しいコード ビューのファイル エディターのスクリーンショット](/assets/images/help/repository/code-view-edit-dropdown.png)

1. ファイル内の特定の文字を検索するには、 **[コード]** ボタンをクリックしてファイルの生コードを表示します。 次に、<kbd>Command</kbd>+<kbd>F</kbd> (Mac) または <kbd>Ctrl</kbd>+<kbd>F</kbd> (Windows または Linux) を押し、検索する文字を入力します。 結果間を移動するには、<kbd>Return</kbd> (Mac) または <kbd>Enter</kbd> (Windows または Linux) を押すか、{% octicon "chevron-down" aria-label="The downwards-facing chevron icon" %} と {% octicon "chevron-up" aria-label="The upwards-facing chevron icon" %} をクリックします。

  {% note %}

  **メモ:** ブラウザーの既定の検索機能を使用するには、<kbd>Command</kbd>+<kbd>F</kbd> (Mac) または <kbd>Ctrl</kbd>+<kbd>F</kbd> (Windows または Linux) を 2 回押します。 ブラウザーの既定の検索機能では、大きなファイル全体を検索することはできませんが、新しいコード ビューに統合された検索ではできます。

  {% endnote %}

  ![新しいコード ビューの "ファイル内を検索する" 機能のスクリーンショット](/assets/images/help/repository/code-view-find-in-file.png)

1. 特定のディレクトリに新しいファイルを追加するには、そのディレクトリをクリックし、{% octicon "plus" aria-label="The plus sign icon" %} **[新しいファイル]** をクリックするか、ファイル ツリー ビューで {% octicon "plus" aria-label="The plus sign icon" %} をクリックします。

  ![検索アイコンを強調したファイル ツリー ビューのスクリーンショット](/assets/images/help/repository/file-tree-view-new-file-icon.png)

1. ディレクトリまたはファイルを削除するには、そのディレクトリまたはファイルに移動し、{% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} をクリックします。 次に、 **[ディレクトリの削除]** または **[ファイルの削除]** をクリックします。

  ![[ディレクトリの削除] オプションを強調した新しいコード ビューのオプション メニューのスクリーンショット](/assets/images/help/repository/code-view-delete-directory.png)

1. ファイルをアップロードするには、選んだディレクトリに移動し、{% octicon "upload" aria-label="The upload icon" %} **[ファイルのアップロード]** をクリックするか、ファイルをブラウザーにドラッグ アンド ドロップします。

  ![新しいコード ビューの [ファイルのアップロード] ボタンのスクリーンショット](/assets/images/help/repository/code-view-upload-files.png)

## シンボル ペインの使用
シンボル ペインを使用して、コード内の関数やクラスなどのシンボルをすばやく表示したり移動したりできるようになりました。 1 つのファイル、リポジトリ内のすべてのファイル、さらには {% data variables.product.prodname_dotcom %} 上のすべてのパブリック リポジトリのシンボルを検索できます。

シンボル検索は、新しいコード検索 (ベータ版) の機能です。 詳しくは、「[GitHub Code Search (ベータ版) 構文について](/search-github/github-code-search/understanding-github-code-search-syntax#symbol-qualifier)」を参照してください。

1. リポジトリを選び、シンボルを含むファイルに移動します。
2. シンボル ペインを表示するには、{% octicon "code-square" aria-label="The code square icon" %} をクリックします。

  ![新しいコード ビューのシンボル ペイン アイコンのスクリーンショット](/assets/images/help/repository/code-view-symbols-pane-icon.png)

  または、ファイル内の対象シンボルをクリックしてシンボル ペインを開くこともできます。 クリック可能なシンボルは、マウスを合わせると黄色で強調表示されます。

  ![クリック可能なシンボルを強調した新しいコード ビューのファイルのスクリーンショット](/assets/images/help/repository/code-view-clickable-symbol.png)

1. シンボル ペインまたはファイル自体から検索するシンボルをクリックします。

  ![自動入力されたシンボルを強調したシンボル ペインのスクリーンショット](/assets/images/help/repository/code-view-symbols-pane-symbol.png)

   - リポジトリ全体でシンボルを検索するには、 **[このリポジトリでこのシンボルを検索する]** をクリックします。 {% data variables.product.prodname_dotcom %} のすべてのリポジトリでシンボルを検索するには、 **[すべてのリポジトリ]** をクリックします。

      ![シンボル検索の範囲を広げるオプションを強調したシンボル ペインのスクリーンショット](/assets/images/help/repository/code-view-symbols-pane-expand-search.png)

1. シンボルへの参照間を移動するには、{% octicon "chevron-down" aria-label="The downwards-facing chevron icon" %} または {% octicon "chevron-up" aria-label="The upwards-facing chevron icon" %} をクリックします。

  ![検索ナビゲーションのシェブロンを強調したシンボル ペインのスクリーンショット](/assets/images/help/repository/code-view-symbol-result-navigation.png)

1. シンボルへの特定の参照に移動するには、{% octicon "chevron-down" aria-label="The downwards-facing chevron icon" %} **[このファイル内]** の下にあるシンボル検索の結果をクリックします。

  ![シンボル検索の結果を強調したシンボル ペインのスクリーンショット](/assets/images/help/repository/code-view-symbol-search-result.png)

1. 特定のシンボルの検索を終了するには、{% octicon "arrow-left" aria-label="The left arrow icon" %} **[すべてのシンボル]** をクリックします。

  ![[すべてのシンボル] ボタンを強調したシンボル ペインのスクリーンショット](/assets/images/help/repository/code-view-symbols-pane-all-symbols.png)

## blame ビューの使用
新しいコード ビューを使用すると、blame ビューに入ったときのファイル コンテキストを失わずに、blame ビュー、生コード ビュー、およびファイルのプレビューをすばやく切り替えることができます (ファイルの種類によって異なります)。

1. リポジトリを選び、そのリポジトリ内のファイルをクリックして新しいコード ビューを開きます。

  ![ファイル ツリー ビューで選んだファイルを強調した "github/docs" リポジトリのスクリーンショット](/assets/images/help/repository/file-tree-view-file-selected.png)

1. ファイルのリビジョン履歴を表示するには、 **[blame]** をクリックします。 このビューには、1 行ずつのリビジョン履歴とコミットごとに区切られたファイル内のコードが表示されます。 各コミットには、作成者、コミットの説明、コミット日が一覧表示されます。

  ![[blame] ボタンを強調した新しいコード ビューのスクリーンショット](/assets/images/help/repository/code-view-blame-button.png)

   - 特定のコミットの前のファイルのバージョンを表示するには、{% octicon "versions" aria-label="The versions icon" %} をクリックします。

      ![バージョン アイコンを強調した blame ビューのコミットのスクリーンショット](/assets/images/help/repository/code-view-blame-hide-commit.png)

   - 特定のコミットの詳細を表示するには、コミットの説明をクリックします。

      ![コミットの説明を強調した blame ビューのコミットのスクリーンショット](/assets/images/help/repository/code-view-blame-commit-description.png)

1. 生コードのビューに戻すには、 **[コード]** をクリックします。

  ![コード ビュー ボタンを強調したコード ビュー ツール バーのスクリーンショット](/assets/images/help/repository/code-view-button.png)

   - Markdown ファイルを表示している場合は、 **[プレビュー]** をクリックして、Markdown の書式設定が適用されたビューに戻ることもできます。

      ![Markdown のプレビュー ボタンを強調したコード ビュー ツール バーのスクリーンショット](/assets/images/help/repository/code-view-preview-button.png)

## 参考資料

- "[ファイルを新しい場所に移動する](/repositories/working-with-files/managing-files/moving-a-file-to-a-new-location)"
- "[GitHub Code Search (ベータ版) について](/search-github/github-code-search/about-github-code-search)"
