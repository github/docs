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
---

<!-- If you make changes to this feature, check whether any of the changes affect languages listed in /get-started/learning-about-github/github-language-support. If so, please update the article accordingly. -->

## {% data variables.product.prodname_dotcom %} のナビゲーションコードについて

Code navigation helps you to read, navigate, and understand code by showing and linking definitions of a named entity corresponding to a reference to that entity, as well as references corresponding to an entity's definition.

![Code navigation display](/assets/images/help/repository/code-navigation-popover.png)

Code navigation uses the open source [`tree-sitter`](https://github.com/tree-sitter/tree-sitter) library. The following languages and navigation strategies are supported:

|     言語     | Search-based code navigation | Precise code navigation |
|:----------:|:----------------------------:|:-----------------------:|
|     C#     |              ✅               |                         |
|   CodeQL   |              ✅               |                         |
|   Elixir   |              ✅               |                         |
|     Go     |              ✅               |                         |
|    Java    |              ✅               |                         |
| JavaScript |              ✅               |                         |
|    PHP     |              ✅               |                         |
|   Python   |              ✅               |            ✅            |
|    Ruby    |              ✅               |                         |
| TypeScript |              ✅               |                         |


You do not need to configure anything in your repository to enable code navigation. We will automatically extract search-based and precise code navigation information for these supported languages in all repositories and you can switch between the two supported code navigation approaches if your programming language is supported by both.

{% data variables.product.prodname_dotcom %} has developed two code navigation approaches based on the open source [`tree-sitter`](https://github.com/tree-sitter/tree-sitter) and [`stack-graphs`](https://github.com/github/stack-graphs) library:
 - Search-based - searches all definitions and references across a repository to find entities with a given name
 - Precise - resolves definitions and references based on the set of classes, functions, and imported definitions at a given point in your code

To learn more about these approaches, see "[Precise and search-based navigation](#precise-and-search-based-navigation)."

Future releases will add *precise code navigation* for more languages, which is a code navigation approach that can give more accurate results.

## 関数やメソッドの定義にジャンプする

ファイル内の関数またはメソッドの呼び出しをクリックすることで、同じリポジトリ内の関数またはメソッドの定義にジャンプできます。

![[Jump-to-definition] タブ](/assets/images/help/repository/jump-to-definition-tab.png)

## 関数とメソッドの全リファレンスを検索する

ファイル内の関数またはメソッドの呼び出しをクリックして [**References**] タブをクリックすることで、同じリポジトリ内の関数またはメソッドの全リファレンスを検索することができます。

![[Find all references] タブ](/assets/images/help/repository/find-all-references-tab.png)

## Precise and search-based navigation

Certain languages supported by {% data variables.product.prodname_dotcom %} have access to *precise code navigation*, which uses an algorithm (based on the open source [`stack-graphs`](https://github.com/github/stack-graphs) library) that resolves definitions and references based on the set of classes, functions, and imported definitions that are visible at any given point in your code. Other languages use *search-based code navigation*, which searches all definitions and references across a repository to find entities with a given name. Both strategies are effective at finding results and both make sure to avoid inappropriate results such as comments, but precise code navigation can give more accurate results, especially when a repository contains multiple methods or functions with the same name.

If you don't see the results you expect from a precise code navigation query, you can click on the "search-based" link in the displayed popover to perform search-based navigation.

![Search-based code navigation link](/assets/images/help/repository/search-based-code-navigation-link.png)

If your precise results appear inaccurate, you can file a support request.

## Troubleshooting code navigation

If code navigation is enabled for you but you don't see links to the definitions of functions and methods:
- Code navigation only works for active branches. Push to the branch and try again.
- Code navigation only works for repositories with fewer than 100,000 files.

## 参考リンク
- 「[コード検索](/github/searching-for-information-on-github/searching-code)」
