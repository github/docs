---
title: GitHub Pages でサブモジュールを使用する
intro: '{% data variables.product.prodname_pages %} でサブモジュールを使用すると、他のサイトのコードで他のプロジェクトを含めることができます。'
redirect_from:
  - /articles/using-submodules-with-pages/
  - /articles/using-submodules-with-github-pages
  - /github/working-with-github-pages/using-submodules-with-github-pages
product: '{% data reusables.gated-features.pages %}'
versions:
  free-pro-team: '*'
topics:
  - pages
---

{% data variables.product.prodname_pages %} サイトのリポジトリにサブモジュールが含まれている場合、その内容はサイトをビルドする際に自動的にプルされます。

使用できるのは、パブリックリポジトリをポイントするサブモジュールだけです。{% data variables.product.prodname_pages %} サーバーはプライベートリポジトリにはアクセスできないためです。

ネストされたサブモジュールも含めて、サブモジュールには `https://` 読み取り専用 URL を使用してください。 この変更は _.gitmodules_ ファイルで行うことができます。

### 参考リンク

- _Pro Git_ ブックの「[Git Tools - Submodules](https://git-scm.com/book/en/Git-Tools-Submodules)」
- [{% data variables.product.prodname_pages %} サイトの Jekyll ビルドエラーに関するトラブルシューティング](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites)
