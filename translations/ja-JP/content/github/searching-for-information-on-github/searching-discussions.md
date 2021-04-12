---
title: ディスカッションを検索する
intro: '{% data variables.product.product_name %} 上のディスカッションを検索し、検索修飾子を使用して検索結果を絞り込むことができます。'
versions:
  free-pro-team: '*'
topics:
  - github search
---

{% data reusables.discussions.beta %}

### ディスカッションの検索について

{% data variables.product.product_name %} 全体にわたってグローバルにディスカッションを検索できます。あるいは、特定の Organization のみのディスカッションの検索もできます。 詳細は「[{% data variables.product.prodname_dotcom %} での検索について](/github/searching-for-information-on-github/about-searching-on-github)」を参照してください。

{% data reusables.search.syntax_tips %}

### タイトル、本文、またはコメントで検索

`in` 修飾子を使用すると、ディスカッションの検索をタイトル、本文、またはコメントに制限できます。 修飾子を組み合わせて、タイトル、本文、またはコメントの組み合わせを検索することもできます。 `in` 修飾子を省略すると、{% data variables.product.product_name %} はタイトル、本文、およびコメントを検索します。

| 修飾子           | サンプル                                                                                                                                     |
|:------------- |:---------------------------------------------------------------------------------------------------------------------------------------- |
| `in:title`    | [**welcome in:title**](https://github.com/search?q=welcome+in%3Atitle&type=Discussions) は、タイトルに「welcome」を含むディスカッションにマッチします。              |
| `in:body`     | [**error in:title,body**](https://github.com/search?q=onboard+in%3Atitle%2Cbody&type=Discussions) は、タイトルか本文に「onboard」を含むディスカッションにマッチします。 |
| `in:comments` | [**welcome in:title**](https://github.com/search?q=thanks+in%3Acomment&type=Discussions) は、ディスカッションのコメントに「thanks」を含むディスカッションにマッチします。     |

### ユーザまたは Organization のリポジトリ内の検索

特定のユーザまたは Organization のすべてのリポジトリのディスカッションを検索するには、`user` 修飾子または `org` 修飾子を使います。 特定のリポジトリのディスカッションを検索するには、`repo` 修飾子を使います。

| 修飾子                       | サンプル                                                                                                                                                                                                    |
|:------------------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>user:<em>USERNAME</em></code> | [**user:octocat feedback**](https://github.com/search?q=user%3Aoctocat+feedback&type=Discussions) @octocat が所有するリポジトリからの「feedback」という単語を含むディスカッションにマッチします。                                              |
| <code>org:<em>ORGNAME</em></code> | [**org:github**](https://github.com/search?q=org%3Agithub&type=Discussions&utf8=%E2%9C%93) は、GitHub Organization が保有するリポジトリのディスカッションにマッチします。                                                            |
| <code>repo:<em>USERNAME/REPOSITORY</em></code> | [**repo:nodejs/node created:<2021-01-01**](https://github.com/search?q=repo%3Anodejs%2Fnode+created%3A%3C2020-01-01&type=Discussions) は、2021年1月以前に作成された@nodejs の Node.js ランタイムプロジェクトからのディスカッションにマッチします。 |

### リポジトリの可視性によるフィルタ

`is` 修飾子を使用して、ディスカッションを含むリポジトリの可視性でフィルタできます。 詳細は「[リポジトリの可視性について](/github/creating-cloning-and-archiving-repositories/about-repository-visibility)」を参照してください。

| 修飾子  | 例 | :- | :- |{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %} | `is:public` | [**is:public**](https://github.com/search?q=is%3Apublic&type=Discussions) はパブリックリポジトリへのディスカッションにマッチします。{% endif %} | `is:internal` | [**is:internal**](https://github.com/search?q=is%3Ainternal&type=Discussions) は内部リポジトリへのディスカッションにマッチします。 | `is:private` | [**is:private tiramisu**](https://github.com/search?q=is%3Aprivate+tiramisu&type=Discussions) は、アクセス可能なプライベートリポジトリに「tiramisu」という単語を含むディスカッションにマッチします。

### 作者で検索

`author` 修飾子は、特定のユーザが作成したディスカッションを表示します。

| 修飾子                       | サンプル                                                                                                                                                                          |
|:------------------------- |:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>author:<em>USERNAME</em></code> | [**cool author:gjtorikian**](https://github.com/search?q=cool+author%3Aoctocat&type=Discussions) は、@octocat が作成した「cool」という単語を含むディスカッションにマッチします。                               |
|                           | [**bootstrap in:body author:octocat**](https://github.com/search?q=bootstrap+in%3Abody+author%3Aoctocat&type=Discussions) は、@octocat が作成した「bootstrap」という単語を含むディスカッションにマッチします。 |

### コメントした人で検索

`commenter` 修飾子は、特定のユーザからのコメントを含むディスカッションを検索します。

| 修飾子                       | サンプル                                                                                                                                                                                                            |
|:------------------------- |:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>commenter:<em>USERNAME</em></code> | [**github commenter:becca org:github**](https://github.com/search?utf8=%E2%9C%93&q=github+commenter%3Abecca+org%3Agithub&type=Discussions) は、@beccaのコメントがあり、「github」という単語がある、GitHub が所有するリポジトリのディスカッションにマッチします。 |

### ディスカッションに関与しているユーザで検索

`involves` 修飾子では、特定のユーザが関与するディスカッションを表示します。 修飾子は、特定のユーザが作成したディスカッション、特定のユーザをメンションしたディスカッション、特定のユーザによるコメントを含むディスカッションを返します。 `involves` 修飾子は、単一ユーザについて、`author`、`mentions`、および `commenter` を論理 OR でつなげます。

| 修飾子                       | サンプル                                                                                                                                                                                                               |
|:------------------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <code>involves:<em>USERNAME</em></code> | **[involves:becca involves:octocat](https://github.com/search?q=involves%3Abecca+involves%3Aoctocat&type=Discussions)** matches discussions either @becca or @octocat are involved in.                             |
|                           | [**NOT beta in:body involves:becca**](https://github.com/search?q=NOT+beta+in%3Abody+involves%3Abecca&type=Discussions) matches discussions @becca is involved in that do not contain the word "beta" in the body. |

### コメントの数で検索

You can use the `comments` qualifier along with greater than, less than, and range qualifiers to search by the number of comments. 詳しい情報については、「[検索構文を理解する](/github/searching-for-information-on-github/understanding-the-search-syntax)」を参照してください。

| 修飾子                       | サンプル                                                                                                                                                     |
|:------------------------- |:-------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>comments:<em>n</em></code> | [**comments:&gt;100**](https://github.com/search?q=comments%3A%3E100&type=Discussions) matches discussions with more than 100 comments.            |
|                           | [**comments:500..1000**](https://github.com/search?q=comments%3A500..1000&type=Discussions) matches discussions with comments ranging from 500 to 1,000. |

### インタラクションの数で検索

You can filter discussions by the number of interactions with the `interactions` qualifier along with greater than, less than, and range qualifiers. The interactions count is the number of reactions and comments on a discussion. 詳しい情報については、「[検索構文を理解する](/github/searching-for-information-on-github/understanding-the-search-syntax)」を参照してください。

| 修飾子                       | サンプル                                                                                                                                                |
|:------------------------- |:--------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>interactions:<em>n</em></code> | [** interactions:&gt;2000**](https://github.com/search?q=interactions%3A%3E2000) matches discussions with more than 2,000 interactions.   |
|                           | [**interactions:500..1000**](https://github.com/search?q=interactions%3A500..1000) matches discussions with interactions ranging from 500 to 1,000. |

### リアクションの数で検索

You can filter discussions by the number of reactions using the `reactions` qualifier along with greater than, less than, and range qualifiers. 詳しい情報については、「[検索構文を理解する](/github/searching-for-information-on-github/understanding-the-search-syntax)」を参照してください。

| 修飾子                       | サンプル                                                                                                                                       |
|:------------------------- |:------------------------------------------------------------------------------------------------------------------------------------------ |
| <code>reactions:<em>n</em></code> | [** reactions:&gt;1000**](https://github.com/search?q=reactions%3A%3E500) matches discussions with more than 500 reactions.      |
|                           | [**reactions:500..1000**](https://github.com/search?q=reactions%3A500..1000) matches discussions with reactions ranging from 500 to 1,000. |

### Search by when a discussion was created or last updated

You can filter discussions based on times of creation, or when the discussion was last updated. For discussion creation, you can use the `created` qualifier; to find out when an discussion was last updated, use the `updated` qualifier.

Both qualifiers take a date as a parameter. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| 修飾子                        | サンプル                                                                                                                                                                                                                           |
|:-------------------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <code>created:<em>YYYY-MM-DD</em></code>  | [**created:>2020-11-15**](https://github.com/search?q=created%3A%3E%3D2020-11-15&type=discussions) matches discussions that were created after November 15, 2020.                                                              |
| <code>updated:<em>YYYY-MM-DD</em></code> | [**weird in:body updated:>=2020-02-01**](https://github.com/search?q=weird+in%3Abody+updated%3A%3E%3D2020-12-01&type=Discussions) matches discussions with the word "weird" in the body that were updated after December 2020. |

### 参考リンク

- 「[検索結果をソートする](/articles/sorting-search-results/)」
