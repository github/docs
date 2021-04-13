---
title: GitHub PagesサイトのJekyllビルドエラーについて
intro: 'ローカルで、または{% data variables.product.product_name %}上で{% data variables.product.prodname_pages %}サイトをビルド中にJekyllでエラーが発生した場合には、詳細情報を伴うエラーメッセージが示されます。'
redirect_from:
  - /articles/viewing-jekyll-build-error-messages/
  - /articles/generic-jekyll-build-failures/
  - /articles/about-jekyll-build-errors-for-github-pages-sites
  - /github/working-with-github-pages/about-jekyll-build-errors-for-github-pages-sites
product: '{% data reusables.gated-features.pages %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - pages
---

### Jekyllのビルドエラーについて

Sometimes, {% data variables.product.prodname_pages %} will not attempt to build your site after you push changes to your site's publishing source.{% if currentVersion == "free-pro-team@latest" %}
- 変更をプッシュしたユーザーがメールアドレスを検証していない。 詳しい情報については、「[メールアドレスの検証](/articles/verifying-your-email-address)」を参照してください。{% endif %}
- デプロイキーでプッシュしている。 サイトのリポジトリへのプッシュを自動化する場合は、かわりにマシンユーザーを設定できます。 詳しい情報については、「[デプロイキーを管理する](/developers/overview/managing-deploy-keys#machine-users)」を参照してください。
- 公開元をビルドするようにCIサービスを設定していない。 For example, Travis CI won't build the `gh-pages` branch unless you add the branch to a safe list. 詳細は、Travis CIまたはCIサービスのドキュメンテーションで、「[ビルドのカスタマイズ](https://docs.travis-ci.com/user/customizing-the-build/#safelisting-or-blocklisting-branches)」を参照してください。

{% note %}

**メモ:** サイトに対する変更は、その変更を{% data variables.product.product_name %}にプッシュしてから公開されるまでに、最大20分かかることがあります。

{% endnote %}

Jekyllがサイトのビルドを試行せず、エラーが発生した場合は、ビルドエラーメッセージが表示されます。 Jekyll ビルドエラーメッセージには主に 2 つのタイプがあります。
- 「Page build warning」メッセージは、ビルドは成功したものの、今後問題が生じないようにするために変更を行なう必要がある可能性が存在することを意味します。
- 「Page build failed」メッセージは、ビルドが完了できなかったことを意味します。 Jekyll が失敗の理由を検出できた場合、説明を含むエラーメッセージが表示されます。

ビルドエラーのトラブルシューティングに関する詳しい情報については、「[{% data variables.product.prodname_pages %} サイトの Jekyll ビルドエラーのトラブルシューティング](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites)」を参照してください。

### Jekyll ビルドエラーメッセージを表示する

サイトのテストをローカルで行なうことをお勧めします。それにより、ビルドエラーメッセージをコマンドラインで表示でき、変更を {% data variables.product.product_name %} にプッシュする前に、あらゆるビルドエラーに対処できます。 詳しい情報については、「[Jekyll を使用して {% data variables.product.prodname_pages %} サイトをローカルでテストする](/articles/testing-your-github-pages-site-locally-with-jekyll)」を参照してください。

{% data variables.product.product_name %} サイトの公開元を更新するためプルリクエストを作成すると、そのプルリクエストの [**Checks**] タブでビルドエラーメッセージが表示されます。 詳しい情報については[ステータスチェックについて](/articles/about-status-checks)を参照してください。

{% data variables.product.product_name %} の公開元に変更をプッシュする際、{% data variables.product.prodname_pages %} はサイトのビルドを試みます。 ビルドが失敗すると、プライマリメールアドレスにメールが送信されます。 また、ビルドの警告についてのメールも送信されます。 {% data reusables.pages.build-failure-email-server %}

{% data variables.product.product_name %} 上のビルドの失敗については、サイトのリポジトリの、[**Settings**] タブに表示されます。(ただし、ビルドの警告については表示されません。)

各コミット後にエラーメッセージを表示するように、[Travis CI](https://travis-ci.org/) などのサードパーティサービスを設定できます。

1. 公開元のルートに、以下の内容で _Gemfile_ と呼ばれるファイルをまだ追加していない場合は、追加します。
  ```ruby
  source `https://rubygems.org`
  gem `github-pages`
  ```

2. 選択したテストサービス用にサイトのリポジトリを設定します。 例えば、[Travis CI](https://travis-ci.org/) を利用するには、以下の内容の _.travis.yml_ ファイルを、公開元のルートに追加します。
  ```yaml
  language: ruby
  rvm:
    - 2.3
  script: "bundle exec jekyll build"
  ```
3. サードパーティのテストサービス内で、リポジトリを有効にする必要があるかもしれません。 詳しい情報については、お使いのテストサービスのドキュメンテーションを参照してください。
