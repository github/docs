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
ms.openlocfilehash: 7819ebc6bbf3ffa8696c87f82745a19c103c8134
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: '147860835'
---
[Markdown](http://daringfireball.net/projects/markdown/) は、プレーンテキストを書式設定するための読みやすく、書きやすい構文です。

サイトで文章とコードをフォーマットするのに使われる {% data variables.product.prodname_dotcom %}Flavored Markdown を作り出すために、弊社ではカスタムの機能をいくつか追加しました。

また、pull request や issue では、[@mentions](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)、[issue と PR の参照](/articles/basic-writing-and-formatting-syntax/#referencing-issues-and-pull-requests)、[絵文字](/articles/basic-writing-and-formatting-syntax/#using-emoji)などの機能を使って他のユーザーとやり取りすることもできます。

## テキストフォーマット用のツールバー

{% data variables.product.product_name %}のすべてのコメントフィールドには、テキストフォーマット用のツールバーが含まれており、Markdown の構文を学ばなくてもテキストをフォーマットできます。 太字や斜体といったスタイルなどの Markdown の書式、ヘッダー、リンク、リストの作成といったことに加えて、このツールバーには @mentions、タスクリスト、issue と pull request へのリンクといった {% data variables.product.product_name %} 固有の機能があります。

{% ifversion fixed-width-font-gfm-fields %}

## エディターで固定幅フォントを有効にする

{% data variables.product.product_name %} のすべてのコメント フィールドで固定幅フォントを有効にすることができます。 固定幅 (等幅) フォントの各文字は同じ水平方向の間隔を占めるため、テーブルやコード スニペットなどの高度な Markdown 構造の編集が簡単にできます。

![固定幅フォントを有効にした {% data variables.product.product_name %} のコメント フィールドを示すスクリーンショット](/assets/images/help/writing/fixed-width-example.png)

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.appearance-settings %}
1. [Markdown editor font preference]\(Markdown エディターのフォント設定\) で **[Use a fixed-width (monospace) font when editing Markdown]\(Markdown の編集時に固定幅 (等幅) フォントを使用する\)** を選びます。
  ![{% data variables.product.product_name %} のコメント フィールドで固定幅フォントを有効にしているスクリーンショット](/assets/images/help/writing/enable-fixed-width.png)

{% endif %}

## 参考資料

- [{% data variables.product.prodname_dotcom %} Flavored Markdown の仕様](https://github.github.com/gfm/)
- [Basic writing and formatting syntax (基本的な書き方とフォーマットの構文)](/articles/basic-writing-and-formatting-syntax)
- [Working with advanced formatting (高度な書式設定を使った作業)](/articles/working-with-advanced-formatting)
