---
title: GitHub 上のコード間を移動する
intro: '{% data variables.product.product_name %} で直接コードを移動することにより、リポジトリ内およびリポジトリ間の関係について理解できます。'
redirect_from:
  - /articles/navigating-code-on-github
  - /github/managing-files-in-a-repository/navigating-code-on-github
versions:
  free-pro-team: '*'
topics:
  - Repositories
---

<!-- If you make changes to this feature, update /getting-started-with-github/github-language-support to reflect any changes to supported languages. -->

### {% data variables.product.prodname_dotcom %} のナビゲーションコードについて

コードナビゲーションでは、オープンソースライブラリの [`tree-sitter`](https://github.com/tree-sitter/tree-sitter) を使用します。 以下の言語がサポートされています:
- C#
- CodeQL
- Go
- Java
- JavaScript
- PHP
- Python
- Ruby
- TypeScript

{% note %}

**注釈**: コードナビゲーションは、アクティブなブランチで機能します。 この機能があなたに対して有効化されていて、関数やメソッドの定義へのリンクが表示されていない場合は、ブランチにプッシュしてから再試行してください。

{% endnote %}

### 関数やメソッドの定義にジャンプする

ファイル内の関数またはメソッドの呼び出しをクリックすることで、同じリポジトリ内の関数またはメソッドの定義にジャンプできます。

![[Jump-to-definition] タブ](/assets/images/help/repository/jump-to-definition-tab.png)

### 関数とメソッドの全リファレンスを検索する

ファイル内の関数またはメソッドの呼び出しをクリックして [**References**] タブをクリックすることで、同じリポジトリ内の関数またはメソッドの全リファレンスを検索することができます。

![[Find all references] タブ](/assets/images/help/repository/find-all-references-tab.png)

### 参考リンク
- 「[コード検索](/github/searching-for-information-on-github/searching-code)」
