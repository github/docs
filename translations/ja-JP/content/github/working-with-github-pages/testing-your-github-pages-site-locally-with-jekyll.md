---
title: Jekyll を使用して GitHub Pages サイトをローカルでテストする
intro: '{% data variables.product.prodname_pages %} サイトをローカルでビルドすると、サイトに対する変更のプレビューとテストを行うことができます。'
redirect_from:
  - /articles/setting-up-your-pages-site-locally-with-jekyll/
  - /articles/setting-up-your-github-pages-site-locally-with-jekyll/
  - /articles/testing-your-github-pages-site-locally-with-jekyll
product: '{% data reusables.gated-features.pages %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

リポジトリへの書き込み権限があるユーザは、{% data variables.product.prodname_pages %} サイトをローカルでテストできます。

### 必要な環境

Jekyll を使用してサイトをテストする前に、以下の操作が必要です。
  - [Jekyll](https://jekyllrb.com/docs/installation/) をインストールする。
  - Jekyll サイトを作成する。 詳しい情報については、「[Jekyll を使用して {% data variables.product.prodname_pages %} サイトを作成する](/articles/creating-a-github-pages-site-with-jekyll)」を参照してください。

{% data reusables.pages.recommend-bundler %}

{% data reusables.pages.jekyll-install-troubleshooting %}

### サイトをローカルでビルドする

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.pages.navigate-publishing-source %}
3. ローカルで Jekyll サイトを実行します.
  ```shell
  $ bundle exec jekyll serve
  > Configuration file: /Users/octocat/my-site/_config.yml
  >            Source: /Users/octocat/my-site
  >       Destination: /Users/octocat/my-site/_site
  > Incremental build: disabled. Enable with --incremental
  >      Generating...
  >                    done in 0.309 seconds.
  > Auto-regeneration: enabled for '/Users/octocat/my-site'
  > Configuration file: /Users/octocat/my-site/_config.yml
  >    Server address: http://127.0.0.1:4000/
  >  Server running... press ctrl-c to stop.
  ```
3. サイトをプレビューするには、ウェブブラウザで `http://localhost:4000` を開きます。

### {% data variables.product.prodname_pages %} gem の更新

Jekyll は、頻繁に更新されているアクティブなオープンソースプロジェクトです。 お使いのコンピュータ上の `github-pages` gem が {% data variables.product.prodname_pages %} サーバー上の `github-pages` gem と比較して古くなっている場合は、ローカルでビルドしたときと {% data variables.product.product_name %} に公開したときで、サイトの見え方が異なることがあります。 こうならないように、お使いのコンピュータ上の `github-pages` gem は常にアップデートしておきましょう。

{% data reusables.command_line.open_the_multi_os_terminal %}
2. `github-pages` gem をアップデートします。
    - Bundler をインストールしている場合は、`bundle update github-pages` を実行します。
    - Bundler をインストールしていない場合は、`gem update github-pages` を実行します。

### 参考リンク

- Jekyll ドキュメンテーションの [{% data variables.product.prodname_pages %}](http://jekyllrb.com/docs/github-pages/)
