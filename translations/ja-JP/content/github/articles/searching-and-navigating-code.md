---
title: 検索およびナビゲーションコード
intro: 検索およびナビゲーションコードは、開発ワークフローにおいてクリティカルな部分であり、GitHub はこの分野で改良を続けています。 Code Search and Navigation Private Beta を選択した Organization にいる場合、強力な新しい検索およびナビゲーションツールにアクセスできます。 この Private Beta についての追加のお問い合わせは、search-beta@github.com にメールをお送りください。
hidden: true
redirect_from:
  - /articles/searching-and-navigating-code
versions:
  free-pro-team: '*'
---


### このガイドの内容

- [文字通りのコード検索](#literal-code-search)
- [関連性](#relevancy)
- [ナビゲーションにジャンプ](#jump-to-navigation)

### 文字通りのコード検索

この Private Beta 以前は、検索インデックスから多くのシンボルが抜けていました。つまり、`>>` のようなよくある決まり文句が検索できなかったのです。 例えば、リポジトリで `>>` を検索した場合、検索結果は 0 件でした。 Private Beta では、ダブルクオテーションでシンボルを囲むと、正しい検索結果を表示できます。 この能力によって、シンボルを超えて、`"return [] unless"` のような引用フレーズ全体を検索できます。 この機能は、すべての言語でのコード検索で使用できます。

### 関連性

言語 (Go、JavaScript、Python、Ruby、および TypeScript) のサブセットで、コード検索は宣言の関連性を調整するようになりました。 方法、機能、クラスまたはその他のエンティティは、同じ用語を含むコールまたはコメントの前に表示されます。

### ナビゲーションにジャンプ

言語 (Go、JavaScript、Python、Ruby、および TypeScript) のサブセットで、GitHubは、シンボルをクリックした場合の追加情報とナビゲーションをサポートするようになりました。 このナビゲーションは、素早いナビゲーションと理解を深められるリポジトリ内のリソースへの用語ナビゲーションへのジャンプを含みます。

### フィードバック

Code Search and Navigation Private Beta を現在選択しているすべてのユーザは、[このサーベイ](https://www.research.net/r/CodeSearch-Navigation)に参加することによってフィードバックができます。 追加のフィードバックおよびお問い合わせは、search-beta@github.com にメールをお送りください。

### 参考リンク
- [GitHub での検索について](/articles/about-searching-on-github/)
- [プルリクエストで変更されたメソッドや機能を見つける](/articles/finding-changed-methods-and-functions-in-a-pull-request/)
