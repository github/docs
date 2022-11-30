---
title: Jekyll を使用して、GitHub Pages サイトの Markdown プロセッサを設定する
intro: 'Markdown プロセッサを選択して、{% data variables.product.prodname_pages %} サイトで Markdown をどのようにレンダリングするかを決めることができます。'
redirect_from:
  - /articles/migrating-your-pages-site-from-maruku
  - /articles/updating-your-markdown-processor-to-kramdown
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
shortTitle: Set Markdown processor
ms.openlocfilehash: 218877ee598afd47352d1e72a2ecb845f901c8b9
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145137859'
---
リポジトリへの書き込み権限があるユーザは、{% data variables.product.prodname_pages %} サイトに対して Markdown プロセッサを設定できます。

{% data variables.product.prodname_pages %} は 2 つの Markdown プロセッサをサポートしています。[kramdown](http://kramdown.gettalong.org/) と {% data variables.product.prodname_dotcom %} の独自の Markdown プロセッサで、後者は {% data variables.product.product_name %} を通じて [{% data variables.product.prodname_dotcom %} Flavored Markdown (GFM)](https://github.github.com/gfm/) をレンダリングする際に使用されます。 詳細については、[{% data variables.product.prodname_dotcom %} での書き込みと書式設定](/articles/about-writing-and-formatting-on-github)に関するページを参照してください。

{% data variables.product.prodname_dotcom %} Flavored Markdown はどちらのプロセッサでも使用できますが、{% data variables.product.product_name %} に表示される結果と一致するのは常に GFMプロセッサのみです。

{% data reusables.pages.navigate-site-repo %}
2. リポジトリで *_config.yml* ファイルを参照します。
{% data reusables.repositories.edit-file %}
4. `markdown:` で始まる行を見つけ、値を `kramdown` または `GFM` に変更します。
  ![config.yml の Markdown 設定](/assets/images/help/pages/config-markdown-value.png) {% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_new_file %}

## 参考資料

- [kramdown のドキュメント](https://kramdown.gettalong.org/documentation.html)
- [{% data variables.product.prodname_dotcom %} Flavored Markdown の仕様](https://github.github.com/gfm/)
