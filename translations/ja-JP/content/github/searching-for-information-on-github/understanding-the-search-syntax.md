---
title: 検索構文を理解する
intro: '{% data variables.product.product_name %} の検索では、特定の数字や単語にマッチするクエリを作成できます。'
redirect_from:
  - /articles/search-syntax/
  - /articles/understanding-the-search-syntax
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### ある値より大きいまたは小さい値のクエリ

`>`、`>=`、`<`、`<=` などを使って、他の値に対する値の大なり、大なりイコール、小なり、または、小なりイコールでの検索を行えます。

| クエリ                       | サンプル                                                                                                                                                       |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>><em>n</em></code> | **[cats stars:>1000](https://github.com/search?utf8=%E2%9C%93&q=cats+stars%3A%3E1000&type=Repositories)** は、1000 を超える Star のある、「cats」という単語があるリポジトリにマッチします。 |
| <code>>=<em>n</em></code> | **[cats topics:>=5](https://github.com/search?utf8=%E2%9C%93&q=cats+topics%3A%3E%3D5&type=Repositories)** は、トピックが 5 つ以上ある、「cats」という単語のあるリポジトリにマッチします。      |
| <code><<em>n</em></code> | **[cats size:<10000](https://github.com/search?utf8=%E2%9C%93&q=cats+size%3A%3C10000&type=Code)** は、10 KB より小さいファイルで、「cats」という単語があるコードにマッチします。             |
| <code><=<em>n</em></code> | **[cats stars:<=50](https://github.com/search?utf8=%E2%9C%93&q=cats+stars%3A%3C%3D50&type=Repositories)** は、50 以下の Star があり、「cats」という単語のあるリポジトリにマッチします。    |

他の値に対する値の大なり、大なりイコール、小なり、または、小なりイコールでの検索は、[range queries](#query-for-values-between-a-range) を使って実行することもできます。

| クエリ                       | サンプル                                                                                                                                                                           |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <code><em>n</em>..*</code> | **[cats stars:10..*](https://github.com/search?utf8=%E2%9C%93&q=cats+stars%3A10..*&type=Repositories)** は、`stars:>=10` と同様に、10 以上の Star のある、「cats」という単語のあるリポジトリにマッチします。     |
| <code>*..<em>n</em></code> | **[cats stars:*..10](https://github.com/search?utf8=%E2%9C%93&q=cats+stars%3A%22*..10%22&type=Repositories) は、**`stars:<=10` と同様に、Star が 10 以下で、「cats」という単語のあるリポジトリにマッチします。 |

### 一定範囲にある値のクエリ

<code><em>n</em>..<em>n</em></code> という範囲構文を使って、範囲内の値を検索できます。最初の番号 _n_ が最小値で、二番目が最大値です。

| クエリ                       | サンプル                                                                                                                                                            |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code><em>n</em>..<em>n</em></code> | **[cats stars:10..50](https://github.com/search?utf8=%E2%9C%93&q=cats+stars%3A10..50&type=Repositories)** は、Star が 10 から 50 までの間の数の、「cats」という単語のあるリポジトリにマッチします。 |

### 日付のクエリ

`>` 、`>=` 、`<` 、`<=` や [range queries](#query-for-values-between-a-range) を使って、他の日より前または後の日付や、一定の範囲内の日付を検索できます。 {% data reusables.time_date.date_format %}

| クエリ                        | サンプル                                                                                                                                                                                                             |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>><em>YYYY</em>-<em>MM</em>-<em>DD</em></code>  | **[cats created:>2016-04-29](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A%3E2016-04-29&type=Issues)** は、2016 年 4 月 29 日より後に作成された、「cats」という単語のある Issue にマッチします。                                     |
| <code>>=<em>YYYY</em>-<em>MM</em>-<em>DD</em></code>  | **[cats created:>=2017-04-01](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A%3E%3D2017-04-01&type=Issues)** は、2017 年 4 月 1 日以降に作成された、「cats」という単語を含む Issue にマッチします。                                   |
| <code><<em>YYYY</em>-<em>MM</em>-<em>DD</em></code> | **[cats pushed:<2012-07-05](https://github.com/search?q=cats+pushed%3A%3C2012-07-05&type=Code&utf8=%E2%9C%93)** は、2012 年 7 月 5 日より前にプッシュされた、リポジトリに「cats」という単語のあるコードにマッチします。                                      |
| <code><=<em>YYYY</em>-<em>MM</em>-<em>DD</em></code> | **[cats created:<=2012-07-04](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A%3C%3D2012-07-04&type=Issues)** は、2012 年 7 月 4 日以前に作成された、「cats」という単語のある Issue にマッチします。                                   |
| <code><em>YYYY</em>-<em>MM</em>-<em>DD</em>..<em>YYYY</em>-<em>MM</em>-<em>DD</em></code> | **[cats pushed:2016-04-30..2016-07-04](https://github.com/search?utf8=%E2%9C%93&q=cats+pushed%3A2016-04-30..2016-07-04&type=Repositories)** は、2016 年 4 月末から 2017 年 7 月 4 日の間にプッシュされた、「cats」という単語のあるリポジトリにマッチします。 |
| <code><em>YYYY</em>-<em>MM</em>-<em>DD</em>..*</code> | **[cats created:2012-04-30..*](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A2012-04-30..*&type=Issues)** は、「cats」という単語を含む、2012 年 4 月 30 日より後に作成された Issue にマッチします。                                   |
| <code>*..<em>YYYY</em>-<em>MM</em>-<em>DD</em></code> | **[cats created:*..2012-04-30](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A*..2012-07-04&type=Issues)** は、「cats」という単語のある、2012 年 7 月 4 日より前に作成された Issue にマッチします。                                    |

{% data reusables.time_date.time_format %}

| クエリ                        | サンプル                                                                                                                                                                                                                                                                                                                                                                                       |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <code><em>YYYY</em>-<em>MM</em>-<em>DD</em>T<em>HH</em>:<em>MM</em>:<em>SS</em>+<em>00</em>:<em>00</em></code> | **[cats created:2017-01-01T01:00:00+07:00..2017-03-01T15:30:15+07:00](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A2017-01-01T01%3A00%3A00%2B07%3A00..2017-03-01T15%3A30%3A15%2B07%3A00&type=Issues)** 2017 年 1 月 1 日午前 1 時（世界協定時`+7時間`）と 2017 年 3 月 1 日午後 3 時（世界協定時 `+7時間`）の間に作成された Issue にマッチします。 （世界協定時`+7時間`）と 2017 年 3 月 1 日午後 3 時 （世界協定時 `+7時間`）の間に作成された Issue にマッチします。 |
| <code><em>YYYY</em>-<em>MM</em>-<em>DD</em>T<em>HH</em>:<em>MM</em>:<em>SS</em>Z</code> | **[cats created:2016-03-21T14:11:00Z..2016-04-07T20:45:00Z](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A2016-03-21T14%3A11%3A00Z..2016-04-07T20%3A45%3A00Z&type=Issues)** は、2016 年 3 月 21 日午後 2 時 11 分と 2016 年 4 月 7 日 8 時 45 分の間に作成された Issue にマッチします。                                                                                                                       |

### 一定の検索結果の除外

`NOT` 構文を使うことで、一定の単語を含む検索結果を除外できます。 `NOT` 演算子は、文字列型キーワードに限って使うことができます。 数や日付では機能しません。

| クエリ   | サンプル                                                                                                                                |
| ----- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `NOT` | **[hello NOT world](https://github.com/search?q=hello+NOT+world&type=Repositories)** は、「world」という単語がなく、「hello」という単語のあるリポジトリにマッチします。 |

検索結果を絞り込む他の方法としては、一定のサブセットを除外することです。 `-` のプリフィックスを修飾子に付けることで、その修飾子にマッチする全ての結果を除外できます。

| クエリ                        | サンプル                                                                                                                                                                                             |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <code>-<em>QUALIFIER</em></code> | **[cats stars:>10 -language:javascript](https://github.com/search?q=cats+stars%3A>10+-language%3Ajavascript&type=Repositories)** は、JavaScriptで書かれていない、Star が 10 を上回る、「cats」という単語のあるリポジトリにマッチします。 |
|                            | **[mentions:defunkt -org:github](https://github.com/search?utf8=%E2%9C%93&q=mentions%3Adefunkt+-org%3Agithub&type=Issues)** は、GitHub の Organization のリポジトリにはない、@defunkt をメンションする Issue にマッチします。  |

### 空白のあるクエリに引用符を使う

検索クエリに空白がある場合は引用府で囲む必要があります。 例:

* [cats NOT "hello world"](https://github.com/search?utf8=✓&q=cats+NOT+"hello+world"&type=Repositories) は、「hello world」という単語がなく、「cats」という単語のあるリポジトリにマッチします。
* [build label:"bug fix"](https://github.com/search?utf8=%E2%9C%93&q=build+label%3A%22bug+fix%22&type=Issues) は、「bug fix」というラベルがある、「build」という単語のある Issue にマッチします。

スペースなど、いくつかの英数字以外の記号は、引用符で囲ったコード検索クエリから省かれるので、結果が予想外のものになる場合があります。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
### ユーザ名によるクエリ

検索クエリに、`user`、`actor`、`assignee`などユーザ名を必要とする修飾子が含まれる場合は、任意の {% data variables.product.product_name %} ユーザ名を使用して特定の個人を指定するか、`@me`を使用して現在のユーザを指定することができます。

| クエリ                  | サンプル                                                                                                                               |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `QUALIFIER:USERNAME` | [`author:nat`](https://github.com/search?q=author%3Anat&type=Commits) は、@nat が書いたコミットにマッチします。                                      |
| `QUALIFIER:@me`      | [`is:issue assignee:@me`](https://github.com/search?q=is%3Aissue+assignee%3A%40me&type=Issues) は、結果を表示している個人に割り当てられた Issue に一致します。 |

`@me` は必ず修飾子とともに使用し、`@me main.workflow` のように検索用語としては使用できません。
{% endif %}
