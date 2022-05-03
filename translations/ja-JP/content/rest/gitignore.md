---
title: Gitignore
intro: Gitignore APIは、ファイルやディレクトリを無視するために利用できる`.gitignore`テンプレートをフェッチします。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/gitignore
---

## About the Gitignore API

{% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}上に新しいリポジトリをAPIを介して作成する場合、作成時にリポジトリに適用する[.gitignoreテンプレート](/github/getting-started-with-github/ignoring-files)を指定できます。 .gitignore テンプレート API は、{% data variables.product.product_name %} の [.gitignore リポジトリ](https://github.com/github/gitignore)からテンプレートを一覧表示してフェッチします。

### gitignore のカスタムメディアタイプ

gitignore テンプレートを取得するときに、このカスタムメディアタイプを使用できます。

    application/vnd.github.VERSION.raw

詳しい情報については、「[メディアタイプ](/rest/overview/media-types)」を参照してください。
