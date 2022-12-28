---
title: GitHub 上のコード間を移動する
intro: '{% data variables.product.product_name %} で直接コードを移動することにより、リポジトリ内およびリポジトリ間の関係について理解できます。'
redirect_from:
  - /articles/navigating-code-on-github
  - /github/managing-files-in-a-repository/navigating-code-on-github
  - /github/managing-files-in-a-repository/managing-files-on-github/navigating-code-on-github
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 89fc5092468d50484cfcad71824870b6456d9ac7
ms.sourcegitcommit: 1529de77bfcbe45519131b5f5fb3ab319758c2d2
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/14/2022
ms.locfileid: '148164164'
---
<!-- If you make changes to this feature, check whether any of the changes affect languages listed in /get-started/learning-about-github/github-language-support. If so, please update the article accordingly. -->

## {% data variables.product.prodname_dotcom %} のナビゲーションコードについて

コード ナビゲーションは、そのエンティティへの参照に対応する名前付きエンティティの定義と、エンティティの定義に対応する参照を表示しリンクすることで、コードの読み取り、ナビゲーション、理解に役立ちます。

![コード ナビゲーションの表示](/assets/images/help/repository/code-navigation-popover.png)

コード ナビゲーションでは、オープン ソースの [`tree-sitter`](https://github.com/tree-sitter/tree-sitter) ライブラリを使用します。 次の言語とナビゲーション戦略がサポートされています。

| 言語   | 検索ベースのコード ナビゲーション | 正確なコード ナビゲーション |
|:----------:|:----------------------------:|:-----------------------:|
| C#         | ✅                           |                         |
| CodeQL     | ✅                           |                         |
| Elixir     | ✅                           |                         |
| Go         | ✅                           |                         |
| Java       | ✅                           |                         |
| JavaScript | ✅                           |                         |
| PHP        | ✅                           |                         |
| Python     | ✅                           | ✅                      |
| Ruby       | ✅                           |                         |
| Rust       | ✅                           |                         |
| TypeScript | ✅                           |                         |


コード ナビゲーションを有効にするために、リポジトリで何かを構成する必要はありません。 サポートされているこれらの言語の検索ベースのナビゲーション情報と正確なコード ナビゲーション情報をすべてのリポジトリで自動的に抽出し、プログラミング言語が両方でサポートされている場合は、サポートされている 2 つのコード ナビゲーション アプローチを切り替えることができます。

{% data variables.product.prodname_dotcom %} では、オープン ソースの [`tree-sitter`](https://github.com/tree-sitter/tree-sitter) と [`stack-graphs`](https://github.com/github/stack-graphs) ライブラリに基づいて 2 つのコード ナビゲーション アプローチが開発されました。
 - 検索ベース - リポジトリ全体のすべての定義と参照を検索して、特定の名前のエンティティを見つける
 - 正確 - コード内の特定のポイントにあるクラス、関数、インポートされた定義のセットに基づいて定義と参照を解決する

これらのアプローチの詳細については、「[正確なナビゲーションと検索ベースのナビゲーション](#precise-and-search-based-navigation)」を参照してください。

将来のリリースでは、より正確な結果を得ることができるコード ナビゲーション アプローチである、*正確なコード ナビゲーション* が、より多くの言語について追加されます。

## 関数やメソッドの定義にジャンプする

ファイル内の関数またはメソッドの呼び出しをクリックすることで、同じリポジトリ内の関数またはメソッドの定義にジャンプできます。

![[Jump-to-definition] タブ](/assets/images/help/repository/jump-to-definition-tab.png)

## 関数とメソッドの全リファレンスを検索する

ファイル内の関数またはメソッドの呼び出しをクリックして **[参照]** タブをクリックすることで、同じリポジトリ内の関数またはメソッドのすべての参照を検索できます。

![[Find all references] タブ](/assets/images/help/repository/find-all-references-tab.png)

## 正確なナビゲーションと検索ベースのナビゲーション

{% data variables.product.prodname_dotcom %} でサポートされている一部の言語では、コード内の任意の時点で表示されるクラス、関数、インポートされた定義のセットに基づいて定義と参照を解決するアルゴリズム (オープン ソース [`stack-graphs`](https://github.com/github/stack-graphs) ライブラリに基づく) を使用する *正確なコード ナビゲーション* にアクセスできます。 *検索ベースのコード ナビゲーション* を使用する言語もあります。この場合は、リポジトリ全体のすべての定義と参照を検索して、特定の名前のエンティティを見つけます。 どちらの方法も結果を見つけるのに効果的であり、どちらもコメントなどの不適切な結果を避けるようにしますが、特にリポジトリに同じ名前の複数のメソッドや関数が含まれている場合は、正確なコード ナビゲーションを使用すると、より正確な結果が得られます。

正確なコード ナビゲーション クエリで想定される結果が得られない場合は、表示されるポップオーバーの [検索ベース] リンクをクリックして、検索ベースのナビゲーションを実行できます。

![検索ベースのコード ナビゲーション リンク](/assets/images/help/repository/search-based-code-navigation-link.png)

正確なコード ナビゲーションの結果が不正確と思われる場合は、サポート要求を提出できます。

## リポジトリ間の正確なコード ナビゲーション

リポジトリ間のコード ナビゲーションは、正確なコード ナビゲーションと依存関係グラフによってサポートされている言語で使用できます。 詳細については、「[依存関係グラフについて](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)」を参照してください。 リポジトリ間のコード ナビゲーションを使用すると、プロジェクトによってインポートされた依存関係で定義されている関数や変数の定義にジャンプできます (その依存関係が {% data variables.product.prodname_dotcom %} によってホストされるリポジトリである場合)。 現時点では、リポジトリ間のコード ナビゲーションでは、すべての参照を検索する要求はサポートされていません。

![リポジトリ間コード ナビゲーションのスクリーンショット](/assets/images/help/repository/cross-repository-code-navigation.png)

## コード ナビゲーションのトラブルシューティング

コード ナビゲーションが有効になっているにもかかわらず、関数とメソッドの定義へのリンクが表示されない場合:
- コード ナビゲーションは、アクティブなブランチに対してのみ機能します。 ブランチにプッシュして、もう一度やり直してください。
- コード ナビゲーションが動作するのは、100,000 個未満のファイルをもつリポジトリのみです。

## 参考資料
- 「[コードの検索](/github/searching-for-information-on-github/searching-code)」
