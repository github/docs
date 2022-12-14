---
title: ファイルへのパーマリンクを取得する
intro: '{% data variables.product.product_location %} でファイルを表示する際に y キーを押すと、URL を、表示されているファイルと完全に同じバージョンへのパーマリンクへと更新できます。'
redirect_from:
  - /articles/getting-a-permanent-link-to-a-file
  - /articles/how-do-i-get-a-permanent-link-from-file-view-to-permanent-blob-url
  - /articles/getting-permanent-links-to-files
  - /github/managing-files-in-a-repository/getting-permanent-links-to-files
  - /github/managing-files-in-a-repository/managing-files-on-github/getting-permanent-links-to-files
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Permanent links to files
ms.openlocfilehash: 4e3d5ec282f7f7ba820094240698c88e298cdb69
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145131886'
---
{% tip %}

**ヒント**: {% data variables.product.product_name %} の任意のページで [?] を押すと、使用可能なキーボードのショートカットをすべて確認できます。

{% endtip %}

## ファイルのビューにはブランチの最新バージョンが表示されます

{% data variables.product.product_location %} でファイルを表示する際、通常はブランチの現在の head でのバージョンが表示されます。  たとえば次のような点です。

* [https://github.com/github/codeql/blob/**main**/README.md](https://github.com/github/codeql/blob/main/README.md)

これは、GitHub の `codeql` リポジトリであり、`main` ブランチの現在のバージョンの `README.md` ファイルを示しています。

ブランチのヘッドにあるファイルのバージョンは、新たなコミットが行われるたびに変更される場合があるため、通常の URL をコピーすると、後で他のユーザが見るときはファイルのコンテンツが同一ではない場合があります。

## <kbd>Y</kbd> を押して特定のコミット内のファイルへのパーマリンクを取得する

表示されるファイルの特定のバージョンへの永続的なリンクに、URL でブランチ名 (つまり、上記の例の `main` 部分) を使う代わりに、コミット ID を入力します。これにより、そのコミット内のファイルの正確なバージョンに永続的にリンクされます。  たとえば次のような点です。

* [https://github.com/github/codeql/blob/**b212af08a6cffbb434f3c8a2795a579e092792fd**/README.md](https://github.com/github/codeql/blob/b212af08a6cffbb434f3c8a2795a579e092792fd/README.md)

これでは、特定のコミット ID を `main` に置き換えています。ファイルの内容は変わりません。

コミット SHA を手作業で探すのは不便ですが、ショートカットとして <kbd>y</kbd> を押すと、URL がパーマリンクのバージョンに自動で更新されます。  その後、URL をコピーし、共有すると、自分が表示したのとまったく同じものが表示されます。

{% tip %}

**ヒント**: ブランチ名、特定のコミット SHA、タグなど、URL 内のコミットに解決できる任意の識別子を配置できます。

{% endtip %}

## コードスニペットへのパーマリンクを作成する

特定バージョンのファイルやプルリクエストにある特定のコード行やコード行の範囲へのパーマリンクを作成できます。 詳しい情報については、「[コード スニペットへのパーマリンクを作成する](/articles/creating-a-permanent-link-to-a-code-snippet/)」を参照してください。

## 参考資料

- 「[GitHub リポジトリのアーカイブ](/articles/archiving-a-github-repository)」
