When you create a new repository on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} via the API, you can specify a [.gitignore template](/github/getting-started-with-github/ignoring-files) to apply to the repository upon creation. .gitignore テンプレート API は、{% data variables.product.product_name %} の [.gitignore リポジトリ](https://github.com/github/gitignore)からテンプレートを一覧表示してフェッチします。

### gitignore のカスタムメディアタイプ

gitignore テンプレートを取得するときに、このカスタムメディアタイプを使用できます。

    application/vnd.github.VERSION.raw

詳しい情報については、「[メディアタイプ](/rest/overview/media-types)」を参照してください。