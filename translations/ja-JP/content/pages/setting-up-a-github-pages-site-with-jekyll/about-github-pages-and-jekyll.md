---
title: GitHub PagesとJekyllについて
intro: 'Jekyllは、{% data variables.product.prodname_pages %}のサポートが組み込まれている静的サイトジェネレータです。'
redirect_from:
  - /articles/about-jekyll-themes-on-github
  - /articles/configuring-jekyll
  - /articles/configuring-jekyll-plugins
  - /articles/using-syntax-highlighting-on-github-pages
  - /articles/files-that-start-with-an-underscore-are-missing
  - /articles/sitemaps-for-github-pages
  - /articles/search-engine-optimization-for-github-pages
  - /articles/repository-metadata-on-github-pages
  - /articles/atom-rss-feeds-for-github-pages
  - /articles/redirects-on-github-pages
  - /articles/emoji-on-github-pages
  - /articles/mentions-on-github-pages
  - /articles/using-jekyll-plugins-with-github-pages
  - /articles/adding-jekyll-plugins-to-a-github-pages-site
  - /articles/about-github-pages-and-jekyll
  - /github/working-with-github-pages/about-github-pages-and-jekyll
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: GitHub Pages & Jekyll
ms.openlocfilehash: b0f97750f7fb4999e3b33c768ad2495f4c0b6719
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147648208'
---
## Jekyllについて

Jekyllは、{% data variables.product.prodname_pages %}に組み込まれている静的サイトジェネレータで、ビルドプロセスを容易化できます。 JekyllはMarkdownおよびHTMLファイルを取り込み、選択したレイアウトに基づいて、完成された静的ウェブサイトを作成します。 Jekyllは、Markdownと、サイトに動的コンテンツを読み込むテンプレート言語のLiquidをサポートします。 詳細については、「[Jekyll](https://jekyllrb.com/)」を参照してください。

Windows は、Jekyll を公式にはサポートしていません。 詳細については、Jekyll ドキュメントの「[Jekyll on Windows](http://jekyllrb.com/docs/windows/#installation)」を参照してください。

{% data variables.product.prodname_pages %} ではJekyllを使用することをおすすめします。 お好みに応じて、別の静的サイトジェネレータを使用することも、ローカルまたは別のサーバーにおけるビルドプロセスをカスタマイズすることもできます。 詳細については、「[{% data variables.product.prodname_pages %} について](/articles/about-github-pages#static-site-generators)」を参照してください。

## {% data variables.product.prodname_pages %}サイトでJekyllを設定する

*_config.yml* ファイルを編集することにより、サイトのテーマやプラグインなど、Jekyll の設定のほとんどを構成できます。 詳細については、Jekyll ドキュメントの「[Configuration](https://jekyllrb.com/docs/configuration/)」を参照してください。

一部の設定は、{% data variables.product.prodname_pages %}サイトで変更できません。

```yaml
lsi: false
safe: true
source: [your repo's top level directory]
incremental: false
highlighter: rouge
gist:
  noscript: false
kramdown:
  math_engine: mathjax
  syntax_highlighter: rouge
```

デフォルトでは、Jekyllでは以下に当てはまるファイルやフォルダをビルドしません。
- `/node_modules` または `/vendor` フォルダーに配置されている
- `_`、`.`、または `#` で始まる
- `~` で終わる
- 構成ファイルの `exclude` 設定によって除外される

これらのファイルの中に Jekyll で処理したいものがある場合、構成ファイルの `include` 設定を利用できます。

## フロントマター

{% data reusables.pages.about-front-matter %}

投稿またはページに `site.github` を追加して、あらゆるリポジトリ参照メタデータをサイトに追加できます。 詳細については、Jekyll メタデータのドキュメントの「[Using `site.github`](https://jekyll.github.io/github-metadata/site.github/)」を参照してください。

## テーマ

{% data reusables.pages.add-jekyll-theme %} 詳細については、Jekyll ドキュメントの「[Themes](https://jekyllrb.com/docs/themes/)」を参照してください。

{% ifversion fpt or ghec %} {% data variables.product.prodname_dotcom %} で、サポートされているテーマをサイトに追加できます。 詳しくは、{% data variables.product.prodname_pages %} サイトの「[サポートされているテーマ](https://pages.github.com/themes/)」と、「[Jekyll を使用して {% data variables.product.prodname_pages %} サイトにテーマを追加する](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll)」をご覧ください。

{% data variables.product.prodname_dotcom %} でホストされている他のオープンソースの Jekyll テーマを使うには、テーマを手動で追加できます。{% else %}テーマを手動でサイトに追加できます。{% endif %}詳しくは、{% ifversion fpt or ghec %}[{% data variables.product.prodname_dotcom %} でホストされているテーマ](https://github.com/topics/jekyll-theme)に関するページと、{% else %}{% data variables.product.prodname_pages %} サイトの「[サポートされているテーマ](https://pages.github.com/themes/)」と、{% endif %}「[Jekyll を使用して {% data variables.product.prodname_pages %} サイトにテーマを追加する](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll)」をご覧ください。

テーマのファイルを編集することで、テーマのデフォルトを上書きできます。 詳しい情報については、テーマのドキュメンテーションおよび Jekyll ドキュメンテーションの「[Overriding your theme's defaults](https://jekyllrb.com/docs/themes/#overriding-theme-defaults)」を参照してください。

## プラグイン

Jekyllプラグインをダウンロードまたは作成すると、サイトでJekyllの機能を拡張できます。 たとえば、[jemoji](https://github.com/jekyll/jemoji) プラグインを使うと、{% data variables.product.prodname_dotcom %} っぽい絵文字を、{% data variables.product.prodname_dotcom %} で使うのと同じように、サイトの任意のページで使用できます。 詳細については、Jekyll のドキュメントの「[Plugins](https://jekyllrb.com/docs/plugins/)」\(プラグイン\) を参照してください。

{% data variables.product.prodname_pages %}で使用されるプラグインはデフォルトで有効になっており、無効にすることはできません。
- [`jekyll-coffeescript`](https://github.com/jekyll/jekyll-coffeescript)
- [`jekyll-default-layout`](https://github.com/benbalter/jekyll-default-layout)
- [`jekyll-gist`](https://github.com/jekyll/jekyll-gist)
- [`jekyll-github-metadata`](https://github.com/jekyll/github-metadata)
- [`jekyll-optional-front-matter`](https://github.com/benbalter/jekyll-optional-front-matter)
- [`jekyll-paginate`](https://github.com/jekyll/jekyll-paginate)
- [`jekyll-readme-index`](https://github.com/benbalter/jekyll-readme-index)
- [`jekyll-titles-from-headings`](https://github.com/benbalter/jekyll-titles-from-headings)
- [`jekyll-relative-links`](https://github.com/benbalter/jekyll-relative-links)

追加のプラグインは、 *_config.yml* ファイルでそのプラグインの gem を `plugins` 設定に追加すると有効にできます。 詳細については、Jekyll ドキュメントの「[Configuration](https://jekyllrb.com/docs/configuration/)」を参照してください。

サポートされているプラグインのリストについては、{% data variables.product.prodname_pages %} サイトで「[依存関係のバージョン](https://pages.github.com/versions/)」を参照してください。  特定のプラグインの使い方については、そのプラグインのドキュメンテーションを参照してください。

{% tip %}

**ヒント:** {% data variables.product.prodname_pages %} gem を更新していれば、確実に最新のバージョンを使用できます。 詳細については、{% data variables.product.prodname_pages %} サイトの「[Jekyll を使用して GitHub Pages サイトをローカルでテストする](/articles/testing-your-github-pages-site-locally-with-jekyll#updating-the-github-pages-gem)」と「[依存関係のバージョン](https://pages.github.com/versions/)」を参照してください。

{% endtip %}

{% data variables.product.prodname_pages %}は、サポートされていないプラグインを使用してサイトをビルドすることはできません。 サポートされていないプラグインを使用するには、ローカルでサイトを生成してから、サイトの静的ファイルを{% data variables.product.product_name %}にプッシュできます。

## 構文の強調表示

サイトを読みやすくするには、{% data variables.product.product_name %}で強調表示されるのと同じように、{% data variables.product.prodname_pages %}サイトでコードスニペットを強調表示します。 {% data variables.product.product_name %} における構文の強調表示については、「[コードブロックの作成と強調表示](/articles/creating-and-highlighting-code-blocks)」を参照してください。

デフォルトでは、サイトのコードブロックはJekyllによって強調表示されます。 Jekyll は、[Rouge](https://github.com/jneen/rouge) ハイライターを使用します。これは [Pygments](http://pygments.org/) と互換性があります。 Pygmentsは非推奨になっており、Jekyll 4ではサポートされていません。 *_config.yml* ファイルで Pygments を指定している場合、代わりにフォールバックとして Rouge が使われます。 Jekyll はこれ以外の構文ハイライターを使用できないため、 *_config.yml* ファイルで他の構文ハイライターを指定すると、ページ ビルド警告が発生します。 詳細については、「[{% data variables.product.prodname_pages %} サイトの Jekyll ビルド エラーについて](/articles/about-jekyll-build-errors-for-github-pages-sites)」を参照してください。

`highlight.js` など、他のハイライターを使用したい場合は、プロジェクトの *_config.yml* ファイルを更新して、Jekyll の構文強調表示を無効にする必要があります。

```yaml
kramdown:
  syntax_highlighter_opts:
    disable : true
```

お使いテーマに構文強調表示の CSS が含まれていない場合は、{% data variables.product.prodname_dotcom %} の構文強調表示 CSS を生成し、プロジェクトの `style.css` ファイルに追加することができます。

```shell
$ rougify style github > style.css
```

## サイトをローカルでビルドする

{% data reusables.pages.test-locally %}
