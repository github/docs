---
title: コミットビュー間の違い
intro: 選んだ表示方法に応じて、コミット履歴の違いを確認できます。
redirect_from:
  - /articles/differences-between-commit-views
  - /github/committing-changes-to-your-project/differences-between-commit-views
  - /github/committing-changes-to-your-project/viewing-and-comparing-commits/differences-between-commit-views
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Commit views
ms.openlocfilehash: 2b5d59d385f815bd09c853e398d372bb4c861650
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145132516'
---
{% data variables.product.product_name %}では、以下の方法によりリポジトリのコミット履歴を表示できます。

- リポジトリの [[コミット ページ]](https://github.com/mozilla/rust/commits/master) に直接移動する
- ファイルをクリックし、 **[履歴]** をクリックして、[特定のファイルのコミット履歴](https://github.com/mozilla/rust/commits/master/README.md)を取得します

時として、この 2 通りのコミット ビューに _異なる_ 情報が表示されることがあります。 単一ファイルの履歴では、リポジトリのコミット履歴で見つかったコミットが省略される可能性があります。

Gitにはリポジトリの履歴を表示するためにいくつかの方法が備わっています。 Git では、単一ファイルの履歴を表示する際に、ファイルの変更がなかったコミットを省略することで履歴を簡素化します。 すべてのコミットを見てそれぞれがファイルに変化を与えたか判断するのではなく、Git では、マージしたブランチがファイルの最終的な内容に影響を与えていない場合は、そのブランチ全体を省略します。 ファイルに変化を与えたそのブランチ上のいかなるコミットも表示されません。

{% data variables.product.product_name %}におけるファイル履歴は、明示的にこの方針に従っています。 最終的な結果に貢献していないコミットを削除することにより、履歴を単純化しているのです。 たとえば、サイドブランチを変更して、その変更を打ち消した場合、そのコミットはブランチ履歴に表示されません。 これにより、ブランチのレビューがより効率的になります。ファイルに影響したコミットだけが表示されるからです。

この省略されたビューに、求めている情報が必ずしもあるとは限りません。 履歴のすべてを表示する場合は、{% data variables.product.product_name %} では、リポジトリのコミット ページについてのより多くの情報をもつビューを提供しています。

Git がコミット履歴を考慮する方法の詳細については、`git log` ヘルプ記事の「[履歴の簡略化](https://git-scm.com/docs/git-log#_history_simplification)」セクションを参照してください。

## 参考資料

- 「[コミットに署名する](/articles/signing-commits)」
- 「[コミットを検索する](/search-github/searching-on-github/searching-commits)」
