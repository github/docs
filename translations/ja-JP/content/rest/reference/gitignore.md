---
title: Gitignore
redirect_from:
  - /v3/gitignore
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - api
---

API を介して新しい {% data variables.product.product_name %} リポジトリを作成する場合、作成時にリポジトリに適用する [.gitignore テンプレート](/github/getting-started-with-github/ignoring-files)を指定できます。 .gitignore テンプレート API は、{% data variables.product.product_name %} の [.gitignore リポジトリ](https://github.com/github/gitignore)からテンプレートを一覧表示してフェッチします。

### gitignore のカスタムメディアタイプ

gitignore テンプレートを取得するときに、このカスタムメディアタイプを使用できます。

    application/vnd.github.VERSION.raw

詳しい情報については、「[メディアタイプ](/rest/overview/media-types)」を参照してください。

{% include rest_operations_at_current_path %}
