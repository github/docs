---
title: コミットビュー間の違い
redirect_from:
  - /articles/differences-between-commit-views
  - /github/committing-changes-to-your-project/differences-between-commit-views
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% data variables.product.product_name %}では、以下の方法によりリポジトリのコミット履歴を表示できます。

- リポジトリの[コミットページ](https://github.com/mozilla/rust/commits/master)に直接移動する
- ファイルをクリックし、[**History**]を選択して、[特定のファイルのコミット履歴](https://github.com/mozilla/rust/commits/master/README.md)に移動する

時として、この2通りのコミットビューに_異なる_情報が表示されることに気づくことがあるかもしれません。 単一ファイルの履歴では、リポジトリのコミット履歴で見つかったコミットが省略される可能性があります。

Gitにはリポジトリの履歴を表示するためにいくつかの方法が備わっています。 単一ファイルの履歴を表示するとき、Gitはファイルを変更しなかったコミットを省略することで履歴を簡素化します すべてのコミットを見てそれぞれがファイルに変化を与えたか判断するのではなく、Gitはマージしたブランチがファイルの最終コンテンツに影響を与えていない場合は、そのブランチ全体を省略します。 ファイルに変化を与えたそのブランチ上のいかなるコミットも表示されません。

{% data variables.product.product_name %}におけるファイル履歴は、明示的にこの方針に従っています。 最終的な結果に貢献していないコミットを削除することにより、履歴を単純化しているのです。 たとえば、サイドブランチを変更して、その変更を打ち消した場合、そのコミットはブランチ履歴に表示されません。 これにより、ブランチのレビューがより効率的になります。ファイルに影響したコミットだけが表示されるからです。

この省略されたビューに、求めている情報が必ずしもあるとは限りません。 履歴のすべてを表示したい場合、{% data variables.product.product_name %}は、リポジトリのコミットページについてのより豊富な情報を表示できるビューを提供しています。

Gitのコミット履歴に対する考え方に関する詳しい情報については、`git log`ヘルプの記事[「History Simplification」](https://git-scm.com/docs/git-log#_history_simplification)のセクションを参照してください。

### 参考リンク

- 「[コミットに署名する](/articles/signing-commits)」
- "[コミットの検索](/articles/searching-commits)"
