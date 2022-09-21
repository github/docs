---
title: Jekyll を使用して GitHub Pages サイトをローカルでテストする
intro: '{% data variables.product.prodname_pages %} サイトをローカルでビルドすると、サイトに対する変更のプレビューとテストを行うことができます。'
redirect_from:
  - /articles/setting-up-your-pages-site-locally-with-jekyll
  - /articles/setting-up-your-github-pages-site-locally-with-jekyll
  - /articles/testing-your-github-pages-site-locally-with-jekyll
  - /github/working-with-github-pages/testing-your-github-pages-site-locally-with-jekyll
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Test site locally with Jekyll
ms.openlocfilehash: 68123d7bc2849881fc60fdd89dc4177e6701f5d4
ms.sourcegitcommit: ac00e2afa6160341c5b258d73539869720b395a4
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: '147878576'
---
リポジトリへの書き込み権限があるユーザは、{% data variables.product.prodname_pages %} サイトをローカルでテストできます。

## 前提条件

Jekyll を使用してサイトをテストする前に、以下の操作が必要です。
  - [Jekyll](https://jekyllrb.com/docs/installation/) をインストールする。
  - Jekyll サイトを作成する。 詳細については、[Jekyll で {% data variables.product.prodname_pages %} サイトを作成する](/articles/creating-a-github-pages-site-with-jekyll)方法に関するページを参照してください。

{% data reusables.pages.recommend-bundler %}

{% data reusables.pages.jekyll-install-troubleshooting %}

## サイトをローカルでビルドする

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.pages.navigate-publishing-source %}
3. `bundle install` を実行します。
3. ローカルで Jekyll サイトを実行します。
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
3. サイトをプレビューするには、Web ブラウザーで `http://localhost:4000` に移動します。

{% note %}

**注釈:** Ruby 3.0 と Jekyll 4.2.x 以前を使用している場合、`bundle install` を実行する前にプロジェクトの Gemfile に `webrick` gem を追加する必要があります。

{% endnote %}

## {% data variables.product.prodname_pages %} gem の更新

Jekyll は、頻繁に更新されているアクティブなオープンソースプロジェクトです。 お使いのコンピューター上の `github-pages` gem が {% data variables.product.prodname_pages %} サーバー上の `github-pages` gem と比較して古くなっている場合は、ローカルでビルドしたときと {% data variables.product.product_name %} に公開したときで、サイトの見え方が異なることがあります。 これを回避するには、お使いのコンピューターで `github-pages` gem を定期的に更新します。

{% data reusables.command_line.open_the_multi_os_terminal %}
2. `github-pages` gem を更新します。
    - Bundler をインストールしている場合、`bundle update github-pages` を実行します。
    - Bundler をインストールしていない場合、`gem update github-pages` を実行します。

## 参考資料

- [Jekyll ドキュメントの {% data variables.product.prodname_pages %}](http://jekyllrb.com/docs/github-pages/)
