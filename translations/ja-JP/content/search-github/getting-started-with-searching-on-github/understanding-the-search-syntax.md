---
title: 検索構文を理解する
intro: '{% data variables.product.product_name %} の検索では、特定の数字や単語にマッチするクエリを作成できます。'
redirect_from:
  - /articles/search-syntax
  - /articles/understanding-the-search-syntax
  - /github/searching-for-information-on-github/understanding-the-search-syntax
  - /github/searching-for-information-on-github/getting-started-with-searching-on-github/understanding-the-search-syntax
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
shortTitle: Understand search syntax
ms.openlocfilehash: e233c32d01c53ca5e5aa815fffe4505b14696240
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145118926'
---
## ある値より大きいまたは小さい値のクエリ

`>`、`>=`、`<`、`<=` を使用して、ある値より大きい、以上、より小さい、および以下の値を検索できます。

クエリ  | 例
------------- | -------------
<code>><em>n</em></code> | **[cats stars:>1000](https://github.com/search?utf8=%E2%9C%93&q=cats+stars%3A%3E1000&type=Repositories)** は、1,000 個を超える星を持つ "cats" というワードを持つリポジトリとマッチします。
<code>>=<em>n</em></code> | **[cats topics:>=5](https://github.com/search?utf8=%E2%9C%93&q=cats+topics%3A%3E%3D5&type=Repositories)** は、5 つ以上のトピックを持つ "cats" というワードを持つリポジトリとマッチします。
<code><<em>n</em></code> | **[cats size:<10000](https://github.com/search?utf8=%E2%9C%93&q=cats+size%3A%3C10000&type=Code)** は、10 KB 未満のファイル内の "cats" というワードを持つコードとマッチします。
<code><=<em>n</em></code> | **[cats stars:<=50](https://github.com/search?utf8=%E2%9C%93&q=cats+stars%3A%3C%3D50&type=Repositories)** は、50 個以下の星を持つ "cats" というワードを持つリポジトリとマッチします。

[範囲クエリ](#query-for-values-between-a-range)を使用して、ある値以上または以下の値を検索することもできます。

クエリ  | 例
------------- | -------------
<code><em>n</em>..*</code> | **[cats stars:10..*](https://github.com/search?utf8=%E2%9C%93&q=cats+stars%3A10..*&type=Repositories)** は、`stars:>=10` に相当し、10 個以上の星を持つ "cats" というワードを持つリポジトリとマッチします。
<code>*..<em>n</em></code> | **[cats stars:*..10](https://github.com/search?utf8=%E2%9C%93&q=cats+stars%3A%22*..10%22&type=Repositories)** は、`stars:<=10` に相当し、10 個以下の星を持つ "cats" というワードを持つリポジトリとマッチします。

## 一定範囲にある値のクエリ

範囲構文 <code><em>n</em>..<em>n</em></code> を使用して範囲内の値を検索できます。最初の数値 _n_ は最小値、2 番目の数値は最大値です。

クエリ  | 例
------------- | -------------
<code><em>n</em>..<em>n</em></code>  | **[cats stars:10..50](https://github.com/search?utf8=%E2%9C%93&q=cats+stars%3A10..50&type=Repositories)** は、10 から 50 個の星を持つ "cats" というワードを持つリポジトリとマッチします。

## 日付のクエリ

`>`、`>=`、`<`、`<=` と[範囲クエリ](#query-for-values-between-a-range)を使用して、ある日付より前または後の日付、または日付の範囲内にある日付を検索できます。 {% data reusables.time_date.date_format %}

クエリ  | 例
------------- | -------------
<code>><em>YYYY</em>-<em>MM</em>-<em>DD</em></code> | **[cats created:>2016-04-29](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A%3E2016-04-29&type=Issues)** は、2016 年 4 月 29 日より後に作成された "cats" というワードを含む issue とマッチします。
<code>>=<em>YYYY</em>-<em>MM</em>-<em>DD</em></code> | **[cats created:>=2017-04-01](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A%3E%3D2017-04-01&type=Issues)** は、2017 年 4 月 1 日以降に作成された "cats" というワードを含む issue とマッチします。
<code><<em>YYYY</em>-<em>MM</em>-<em>DD</em></code> | **[cats pushed:<2012-07-05](https://github.com/search?q=cats+pushed%3A%3C2012-07-05&type=Code&utf8=%E2%9C%93)** は、2012 年 7 月 5 日より前にプッシュされたリポジトリ内の "cats" というワードを含むコードとマッチします。
<code><=<em>YYYY</em>-<em>MM</em>-<em>DD</em></code> | **[cats created:<=2012-07-04](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A%3C%3D2012-07-04&type=Issues)** は、2012 年 7 月 4 日以前に作成された "cats" というワードを含む issue とマッチします。
<code><em>YYYY</em>-<em>MM</em>-<em>DD</em>..<em>YYYY</em>-<em>MM</em>-<em>DD</em></code> | **[cats pushed:2016-04-30..2016-07-04](https://github.com/search?utf8=%E2%9C%93&q=cats+pushed%3A2016-04-30..2016-07-04&type=Repositories)** は、2016 年 4 月末から 7 月の間にプッシュされた "cats" というワードを含むリポジトリとマッチします。
<code><em>YYYY</em>-<em>MM</em>-<em>DD</em>..*</code> | **[cats created:2012-04-30..*](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A2012-04-30..*&type=Issues)** は、2012 年 4 月 30 日以降に作成された "cats" というワードを含む issue とマッチします。
<code>*..<em>YYYY</em>-<em>MM</em>-<em>DD</em></code> | **[cats created:*..2012-07-04](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A*..2012-07-04&type=Issues)** は、2012 年 7 月 4 日以前に作成された "cats" というワードを含む issue とマッチします。

{% data reusables.time_date.time_format %}

クエリ  | 例
------------- | -------------
<code><em>YYYY</em>-<em>MM</em>-<em>DD</em>T<em>HH</em>:<em>MM</em>:<em>SS</em>+<em>00</em>:<em>00</em></code> | **[cats created:2017-01-01T01:00:00+07:00..2017-03-01T15:30:15+07:00](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A2017-01-01T01%3A00%3A00%2B07%3A00..2017-03-01T15%3A30%3A15%2B07%3A00&type=Issues)** は、UTC オフセットが `07:00` の 2017 年 1 月 1 日午前 1 時から UTC オフセットが `07:00` の 2017 年 3 月 1 日午後 3 時の間に作成された issue とマッチします。
<code><em>YYYY</em>-<em>MM</em>-<em>DD</em>T<em>HH</em>:<em>MM</em>:<em>SS</em>Z</code>  | **[cats created:2016-03-21T14:11:00Z..2016-04-07T20:45:00Z](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A2016-03-21T14%3A11%3A00Z..2016-04-07T20%3A45%3A00Z&type=Issues)** は、2016 年 3 月 21 日午後 2 時 11 分から 2016 年 4 月 7 日午後 8 時 45 分の間に作成された issue とマッチします。

## 一定の検索結果の除外

`NOT` 構文を使用して、特定のワードを含む結果を除外できます。 `NOT` 演算子は、文字列キーワードにのみ使用できます。 数や日付では機能しません。

クエリ  | 例
------------- | -------------
`NOT`  | **[hello NOT world](https://github.com/search?q=hello+NOT+world&type=Repositories)** は、"hello" というワードを持ち、"world" というワードを持たないリポジトリとマッチします。

検索結果を絞り込む他の方法としては、一定のサブセットを除外することです。 `-` のプレフィックスを検索修飾子の前に付けることで、その修飾子にマッチするすべての結果を除外できます。

クエリ  | 例
------------- | -------------
<code>-<em>QUALIFIER</em></code>  | **[`cats stars:>10 -language:javascript`](https://github.com/search?q=cats+stars%3A>10+-language%3Ajavascript&type=Repositories)** は、10 個を超える星を持つが、JavaScript では記述されていない "cats" というワードを持つリポジトリとマッチします。
 | **[`mentions:defunkt -org:github`](https://github.com/search?utf8=%E2%9C%93&q=mentions%3Adefunkt+-org%3Agithub&type=Issues)** は、GitHub 組織のリポジトリにない @defunkt をメンションしている issue とマッチします

## 空白のあるクエリに引用符を使う

検索クエリに空白がある場合は引用府で囲む必要があります。 次に例を示します。

* [cats NOT "hello world"](https://github.com/search?utf8=✓&q=cats+NOT+"hello+world"&type=Repositories) は、"cats" というワードを持ち、"hello world" というワードを持たないリポジトリとマッチします。
* [build label:"bug fix"](https://github.com/search?utf8=%E2%9C%93&q=build+label%3A%22bug+fix%22&type=Issues) は、"bug fix" というラベルを持つ "build" というワードを含む issue とマッチします。

スペースなど、いくつかの英数字以外の記号は、引用符で囲ったコード検索クエリから省かれるので、結果が予想外のものになる場合があります。

## ユーザ名によるクエリ

検索クエリに `user`、`actor`、`assignee` のようなユーザー名を必要とする修飾子が含まれている場合、{% data variables.product.product_name %} ユーザー名を使用して特定の個人を指定したり、`@me` を使用して現在のユーザーを指定したりすることができます。

クエリ  | 例
------------- | -------------
`QUALIFIER:USERNAME` | [`author:nat`](https://github.com/search?q=author%3Anat&type=Commits) は @nat が作成したコミットとマッチします
`QUALIFIER:@me` | [`is:issue assignee:@me`](https://github.com/search?q=is%3Aissue+assignee%3A%40me&type=Issues) は、結果を閲覧しているユーザーに割り当てられた issue とマッチします

`@me` は修飾子と一緒にのみ使用でき、`@me main.workflow` のように検索用語として使用することはできません。
