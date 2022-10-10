---
title: トピックを検索する
intro: '{% data variables.product.product_name %} 上のリポジトリと関連するトピックを検索できます。'
redirect_from:
  - /articles/searching-topics
  - /github/searching-for-information-on-github/searching-topics
  - /github/searching-for-information-on-github/searching-on-github/searching-topics
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
ms.openlocfilehash: b409f8476fe4191bab22ba90e502f18470937f4d
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145118861'
---
## トピックを {% data variables.product.product_name %} で検索

{% data variables.product.product_name %} 上でトピックを検索したり、関連するトピックを調べたり、特定のトピックに関連するリポジトリがどのくらいあるのかを確認したりできます。

1. https://github.com/search に移動します。
2. トピックのキーワードを入力します。
  ![検索フィールド](/assets/images/help/search/search-field.png)
3. 左側のサイドバーで、検索をトピックに絞り込むため、 **[Topics]\(トピック\)** をクリックします。
{% ifversion fpt or ghec %} ![トピックのサイドメニュー オプションが強調表示された Jekyll リポジトリの検索結果ページ](/assets/images/help/search/topic-left-side-navigation-dotcom.png){% else %} ![トピックのサイドメニュー オプションが強調表示された dotcom の Jekyll リポジトリ検索結果ページ](/assets/images/help/search/topic-left-side-navigation.png){% endif %}

## 検索修飾子で検索を絞り込む

特定のトピックに関するリポジトリを探索したり、投稿するプロジェクトを見つけたり、{% data variables.product.product_name %} で最も人気のあるトピックを知りたい場合は、検索修飾子 `is:featured`、`is:curated`、`repositories:n`、および `created:YYYY-MM-DD` を使用してトピックを検索できます。

`is:featured` 検索修飾子は、検索結果を {% data variables.product.product_name %} 上のリポジトリが最も多いトピックに絞り込みます。 これらのトピックは、 https://github.com/topics/ でも紹介されています。

`is:curated` 検索修飾子は、検索結果を、コミュニティのメンバーが追加の情報を追加したトピックに絞り込みます。 詳細については、[リポジトリの探索](https://github.com/github/explore)に関するページを参照してください。

日付パラメーターや `created:` を使用して、いつ作成されたかに基づいて、または `repositories:n` を使用して、このトピックに関連付けられているリポジトリの数に基づいてトピックをフィルタリングすることもできます。 これらの修飾子の両方で、[範囲より大きい/範囲より小さい修飾子](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)を使用できます。

{% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| 修飾子  | 例 |
| ------------- | -------------
| `is:curated`| [**is:curated javascript**](https://github.com/search?utf8=%E2%9C%93&q=javascript+is%3Acurated&type=Topics) は、キュレーションされ、"javascript" というワードを含むトピックとマッチします。
| `is:featured` | [**is:featured javascript**](https://github.com/search?utf8=%E2%9C%93&q=javascript+is%3Afeatured&type=Topics) は、 https://github.com/topics/ で紹介され、"javascript" というワードを含むトピックとマッチします。
|  `is:not-curated` | [**is:not-curated javascript**](https://github.com/search?utf8=%E2%9C%93&q=javascript+is%3Anot-curated&type=Topics) は、説明やロゴなどの追加情報を持たず、"javascript" というワードを含むトピックとマッチします。
|  `is:not-featured`| [**is:not-featured javascript**](https://github.com/search?utf8=%E2%9C%93&q=javascript+is%3Anot-featured&type=Topics) は、 https://github.com/topics/ で紹介されていない、"javascript" というワードを含むトピックとマッチします。
| `repositories:n` | [**repositories:&gt;5000**](https://github.com/search?q=repositories%3A%3E5000) は、5,000 個を超えるリポジトリを持つトピックとマッチします。
| <code>created:<em>YYYY-MM-DD</em></code> | [**serverless created:&gt;2019-01-01**](https://github.com/search?q=Serverless+created%3A%3E2019-01-01&type=Topics) は、2018 年より後に作成された "serverless" というワードを含むトピックとマッチします。

## トピックでリポジトリを検索

`topic:` 修飾子を使って、特定のトピックに関連するすべてのリポジトリを検索できます。 詳細については、「[リポジトリを検索する](/search-github/searching-on-github/searching-for-repositories/#search-by-topic)」を参照してください。

## 参考資料
- 「[トピックでリポジトリを分類する](/articles/classifying-your-repository-with-topics)」
