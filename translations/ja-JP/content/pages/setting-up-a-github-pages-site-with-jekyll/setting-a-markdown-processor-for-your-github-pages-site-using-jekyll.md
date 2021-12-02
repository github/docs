---
title: Jekyll を使用して、GitHub Pages サイトの Markdown プロセッサを設定する
intro: 'Markdown プロセッサを選択して、{% data variables.product.prodname_pages %} サイトで Markdown をどのようにレンダリングするかを決めることができます。'
redirect_from:
  - /articles/migrating-your-pages-site-from-maruku/
  - /articles/updating-your-markdown-processor-to-kramdown/
  - /articles/setting-a-markdown-processor-for-your-github-pages-site-using-jekyll
  - /github/working-with-github-pages/setting-a-markdown-processor-for-your-github-pages-site-using-jekyll
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Markdownプロセッサの設定
---

リポジトリへの書き込み権限があるユーザは、{% data variables.product.prodname_pages %} サイトに対して Markdown プロセッサを設定できます。

{% data variables.product.prodname_pages %} supports two Markdown processors: [kramdown](http://kramdown.gettalong.org/) and {% data variables.product.prodname_dotcom %}'s own Markdown processor, which is used to render [{% data variables.product.prodname_dotcom %} Flavored Markdown (GFM)](https://github.github.com/gfm/) throughout {% data variables.product.product_name %}. 詳しい情報については、「[{% data variables.product.prodname_dotcom %}での執筆とフォーマットについて](/articles/about-writing-and-formatting-on-github)」を参照してください。

You can use {% data variables.product.prodname_dotcom %} Flavored Markdown with either processor, but only our GFM processor will always match the results you see on {% data variables.product.product_name %}.

{% data reusables.pages.navigate-site-repo %}
2. リポジトリの *_config.yml* ファイルを開きます。
{% data reusables.repositories.edit-file %}
4. `markdown` で始まる行を見つけ、値を `kramdown` または `GFM`に変更します。 ![config.yml での Markdown 設定](/assets/images/help/pages/config-markdown-value.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_new_file %}

## 参考リンク

- [kramdown のドキュメント](https://kramdown.gettalong.org/documentation.html)
- [{% data variables.product.prodname_dotcom %} Flavored Markdown の仕様](https://github.github.com/gfm/)
