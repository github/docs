---
title: GitHub 上での執筆とフォーマットについて
intro: GitHubは、GitHub Flavored Markdown と呼ばれるテキストフォーマットの構文を、いくつかのユニークな執筆用の機能と組み合わせています。
redirect_from:
  - /articles/about-writing-and-formatting-on-github
  - /github/writing-on-github/about-writing-and-formatting-on-github
  - /github/writing-on-github/getting-started-with-writing-and-formatting-on-github/about-writing-and-formatting-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Write & format on GitHub
---

[Markdown](http://daringfireball.net/projects/markdown/) は、プレーンテキストをフォーマットするための読みやすく書きやすい構文です。

サイトで文章とコードをフォーマットするのに使われる {% data variables.product.prodname_dotcom %}Flavored Markdown を作り出すために、弊社ではカスタムの機能をいくつか追加しました。

また、[@メンション](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)、[Issue や PR の参照](/articles/basic-writing-and-formatting-syntax/#referencing-issues-and-pull-requests)、[絵文字](/articles/basic-writing-and-formatting-syntax/#using-emoji)などの機能を使って、プルリクエストや Issue で他のユーザーとやりとりできます。

## テキストフォーマット用のツールバー

{% data variables.product.product_name %}のすべてのコメントフィールドには、テキストフォーマット用のツールバーが含まれており、Markdown の構文を学ばなくてもテキストをフォーマットできます。 太字や斜体といったスタイルなどの Markdown のフォーマットやヘッダ、リンク、リストの作成といったことに加えて、このツールバーには @メンション、タスクリスト、Issue およびプルリクエストへのリンクといった {% data variables.product.product_name %}固有の機能があります。

{% ifversion fixed-width-font-gfm-fields %}

## Enabling fixed-width fonts in the editor

You can enable a fixed-width font in every comment field on {% data variables.product.product_name %}. Each character in a fixed-width, or monospace, font occupies the same horizontal space which can make it easier to edit advanced Markdown structures such as tables and code snippets.

![Screenshot showing the {% data variables.product.product_name %} comment field with fixed-width fonts enabled](/assets/images/help/writing/fixed-width-example.png)

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.appearance-settings %}
1. Under "Markdown editor font preference", select **Use a fixed-width (monospace) font when editing Markdown**. ![Screenshot showing the {% data variables.product.product_name %} comment field with fixed width fonts enabled](/assets/images/help/writing/enable-fixed-width.png)

{% endif %}

## 参考リンク

- [{% data variables.product.prodname_dotcom %} Flavored Markdown の仕様](https://github.github.com/gfm/)
- [基本的な書き方とフォーマットの構文](/articles/basic-writing-and-formatting-syntax)
- [高度なフォーマットを使用して作業する](/articles/working-with-advanced-formatting)
- [Markdown をマスターする](https://guides.github.com/features/mastering-markdown/)
