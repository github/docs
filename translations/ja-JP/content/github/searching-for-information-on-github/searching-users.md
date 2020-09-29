---
title: ユーザを検索する
intro: '{% data variables.product.product_name %} 上のユーザを検索できます。また、これらのユーザの検索修飾子の組み合わせを使って、結果を絞り込むことができます。'
redirect_from:
  - /articles/searching-users
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% data variables.product.product_name %} のユーザを幅広くグローバルに検索できます。 詳細は「[{% data variables.product.company_short %} での検索について](/articles/about-searching-on-github)」を参照してください。

{% data reusables.search.syntax_tips %}

### ユーザまたは Organization に限られた検索

初期設定では、ユーザ検索は、個人および Organization の両方を表示します。 ですが、`type` 修飾子を使って、個人アカウントまたは Organization に限定して検索できます。

| 修飾子         | サンプル                                                                                                                                                                                             |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type:user` | [**mike in:name created:&lt;2011-01-01 type:user**](https://github.com/search?q=mike+in:name+created%3A%3C2011-01-01+type%3Auser&type=Users) は、2011 年より前に作成された、「mike」という名前の個人アカウントにマッチします。 |
| `type:org`  | [**data in:email type:org**](https://github.com/search?q=data+in%3Aemail+type%3Aorg&type=Users) は、e-mail に「data」という単語がある Organization にマッチします。                                                   |

### アカウント名、フルネームやパブリックメールで検索

`user` や `org` 修飾子を使って、個人ユーザや Organization のアカウント名で検索をフィルタリングできます。

`in` 修飾子によって、ユーザ名 (`login`)、フルネーム、パブリックメールやこれらの組み合わせに限定した検索ができます。 この修飾子を削除した場合、ユーザ名およびメールアドレスのみが検索されます。 プライバシー保護のため、メールアドレスのドメイン名では検索できないようになっています。

| 修飾子                           | サンプル                                                                                                                                                         |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `user:name`                   | [**user:octocat**](https://github.com/search?q=user%3Aoctocat&type=Users) は、ユーザ名「octocat」にマッチします。                                                            |
| `org:name`                    | [**org:electron type:users**](https://github.com/search?q=org%3Aelectron+type%3Ausers&type=Users) は、Electron Organization のアカウント名にマッチします。                    |
| `in:login`                    | [**kenya in:login**](https://github.com/search?q=kenya+in%3Alogin&type=Users) は、ユーザ名に「kenya」という単語があるユーザにマッチします。                                              |
| `in:name`                     | [**bolton in:name**](https://github.com/search?q=bolton+in%3Afullname&type=Users) は、本名に「bolton」という単語を含むユーザにマッチします。                                           |
| `fullname:firstname lastname` | [**fullname:nat friedman**](https://github.com/search?q=fullname%3Anat+friedman&type=Users) は、フルネームが「Nat Friedman」であるユーザにマッチします。 メモ: この修飾子は、スペース文字の有無を区別します。 |
| `in:email`                    | [**data in:email**](https://github.com/search?q=data+in%3Aemail&type=Users&utf8=%E2%9C%93) は、メールに「data」という単語があるユーザにマッチします。                                   |

### ユーザが保有するリポジトリの数で検索

`repos` 修飾子および[不等号や範囲の修飾子](/articles/understanding-the-search-syntax)を使って、ユーザが保有するリポジトリの数でユーザをフィルタリングできます。

| 修飾子                       | サンプル                                                                                                                                               |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>repos:<em>n</em></code> | [**repos:>9000**](https://github.com/search?q=repos%3A%3E%3D9000&type=Users) は、9,000 を超えるレポジトリ数のユーザにマッチします。                                        |
|                           | [**bert repos:10..30**](https://github.com/search?q=bert+repos%3A10..30&type=Users) は、10 以上 30 以下のリポジトリを保有しており、ユーザ名または本名に「bert」という単語があるユーザにマッチします。 |

### 場所で検索

プロフィールに表示されている場所でユーザを検索できます。

| 修飾子                       | サンプル                                                                                                                                             |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| <code>location:<em>LOCATION</em></code> | [**repos:1 location:iceland**](https://github.com/search?q=repos%3A1+location%3Aiceland&type=Users) は、アイスランドに住んでいる、リポジトリをちょうど 1 つ保有するユーザにマッチします。 |

### リポジトリの言語で検索

`language` 修飾子を使って、ユーザが保有するリポジトリの言語でユーザを検索できます。

| 修飾子                       | サンプル                                                                                                                                                                                    |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>language:<em>LANGUAGE</em></code> | [**language:javascript location:russia**](https://github.com/search?q=language%3Ajavascript+location%3Arussia&type=Users) は、リポジトリを主に JavaScript で記述している、ロシアに住んでいるユーザにマッチします。            |
|                           | [**jenny language:javascript in:fullname**](https://github.com/search?q=jenny+language%3Ajavascript+in%3Afullname&type=Users) は、「jenny」という単語がフルネームに含まれる、JavaScript のリポジトリのあるユーザにマッチします。 |

### ユーザアカウントの作成時期で検索

`created` 修飾子を使って、{% data variables.product.product_name %} に参加した時期でユーザをフィルタリングできます。 パラメータとして日付を採用しています。 {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| 修飾子                       | サンプル                                                                                                                                                                                                   |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <code>created:<em>YYYY-MM-DD</em></code> | [**created:<2011-01-01**](https://github.com/search?q=created%3A%3C2011-01-01&type=Users) は、2011 年より前に参加したユーザにマッチします。                                                                                  |
|                           | [**created:>=2013-05-11**](https://github.com/search?q=created%3A%3E%3D2013-05-11&type=Users) は、2013 年 5 月 11 日以降に参加したユーザにマッチします。                                                                      |
|                           | [**created:2013-03-06 location:london**](https://github.com/search?q=created%3A2013-03-06+location%3Alondon&type=Users) は、場所をロンドンとして登録している、2013 年 3 月 6 日に参加したユーザにマッチします。                              |
|                           | [**created:2010-01-01..2011-01-01 john in:login**](https://github.com/search?q=created%3A2010-01-01..2011-01-01+john+in%3Ausername&type=Users) は、ユーザ名に「john」という単語がある、2010 年から 2011 年の間に参加したユーザにマッチします。 |

### フォロワーの数の検索

`followers` 修飾子を [不等号や範囲の修飾子](/articles/understanding-the-search-syntax)とともに使うことで、ユーザのフォロワーの数でユーザをフィルタリングできます。

| 修飾子                       | サンプル                                                                                                                                                   |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <code>followers:<em>n</em></code> | [**followers:>=1000**](https://github.com/search?q=followers%3A%3E%3D1000&type=Users) は、1,000 以上のフォロワーがいるユーザにマッチします。                                   |
|                           | [**sparkle followers:1..10**](https://github.com/search?q=sparkle+followers%3A1..10&type=Users) は、「sparkle」という単語がある名前のフォロワーが 1 名から 10 名までいるユーザにマッチします。 |

### 参考リンク

- 「[検索結果をソートする](/articles/sorting-search-results/)」
