---
title: Issue およびプルリクエストを検索する
intro: '{% data variables.product.product_name %} 上の Issue およびプルリクエストを検索することができます。そして、これらの検索用修飾子を組み合わせることで、検索結果を絞ることができます。'
redirect_from:
  - /articles/searching-issues
  - /articles/searching-issues-and-pull-requests
  - /github/searching-for-information-on-github/searching-issues-and-pull-requests
  - /github/searching-for-information-on-github/searching-on-github/searching-issues-and-pull-requests
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
shortTitle: Search issues & PRs
---

{% data variables.product.product_name %} 全体にわたってグローバルに Issue およびプルリクエストを検索できます。あるいは、特定の Organization の Issue およびプルリクエストに限った検索もできます。 詳細は「[{% data variables.product.company_short %} での検索について](/search-github/getting-started-with-searching-on-github/about-searching-on-github)」を参照してください。

{% tip %}

**ヒント:**{% ifversion ghes or ghae %}
  - この記事には、{% data variables.product.prodname_dotcom %}.com のウェブサイトでの検索例が含まれています。ですが、同じ検索フィルターを {% data variables.product.product_location %} で使えます。{% endif %}
  - 検索結果を改良する検索修飾子を追加できる検索構文のリストについては、「[検索構文を理解する](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)」を参照してください。
  - 複数単語の検索用語は引用符で囲みます。 たとえば "In progress" というラベルを持つ Issue を検索したい場合は、`label:"in progress"` とします。 検索では、大文字と小文字は区別されません。
  - {% data reusables.search.search_issues_and_pull_requests_shortcut %}

  {% endtip %}

## Issue またはプルリクエストに限定した検索

デフォルトでは、{% data variables.product.product_name %} の検索は、Issueとプルリクエストの両方を結果表示します。 ですが、`type` 修飾子または `is` 修飾子を使うことで、Issue またはプルリクエストに限った検索ができます。

| 修飾子          | サンプル                                                                                                                                                                                |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type:pr`    | [**cat type:pr**](https://github.com/search?q=cat+type%3Apr&type=Issues) は、「cat」という単語があるプルリクエストにマッチします。                                                                             |
| `type:issue` | [**github commenter:defunkt type:issue**](https://github.com/search?q=github+commenter%3Adefunkt+type%3Aissue&type=Issues) は、「github」という単語を含み、かつ、@defunkt によるコメントがある Issue にマッチします。 |
| `is:pr`      | [**event is:pr**](https://github.com/search?utf8=%E2%9C%93&q=event+is%3Apr&type=) は、「event」という単語があるプルリクエストにマッチします。                                                                  |
| `is:issue`   | [**is:issue label:bug is:closed**](https://github.com/search?utf8=%E2%9C%93&q=is%3Aissue+label%3Abug+is%3Aclosed&type=) は、「bug」のラベルが付いたクローズされた Issue にマッチします。                       |

## タイトル、本文、またはコメントで検索

`in` 修飾子によって、タイトル、本文、コメントやその組み合わせに限定した検索ができます。 この修飾子を省略した場合、タイトル、本文、そしてコメントがすべて検索されます。

| 修飾子           | サンプル                                                                                                                           |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `in:title`    | [**warning in:title**](https://github.com/search?q=warning+in%3Atitle&type=Issues) は、タイトルに「warning」を含む Issue にマッチします。          |
| `in:body`     | [**error in:title,body**](https://github.com/search?q=error+in%3Atitle%2Cbody&type=Issues) は、タイトルか本文に「error」を含む Issue にマッチします。 |
| `in:comments` | [**shipit in:comments**](https://github.com/search?q=shipit+in%3Acomment&type=Issues) は、コメントで「shipit」にメンションしている Issue にマッチします。 |

## ユーザまたは Organization のリポジトリ内の検索

特定のユーザーや Organization が保有するすべてのリポジトリの Issue とプルリクエストを検索するには、 `user` 修飾子または `org` 修飾子を使います。 特定のリポジトリの Issue やプルリクエストを検索するには、`repo` 修飾子を使います。

{% data reusables.pull_requests.large-search-workaround %}

| 修飾子                       | サンプル                                                                                                                                                                                                       |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>user:<em>USERNAME</em></code> | [**user:defunkt ubuntu**](https://github.com/search?q=user%3Adefunkt+ubuntu&type=Issues) は、@defunkt が保有するリポジトリからの「ubuntu」という単語がある Issue にマッチします。                                                           |
| <code>org:<em>ORGNAME</em></code> | [**org:github**](https://github.com/search?q=org%3Agithub&type=Issues&utf8=%E2%9C%93) は、GitHub Organization が保有するリポジトリの Issue にマッチします。                                                                     |
| <code>repo:<em>USERNAME/REPOSITORY</em></code> | [**repo:mozilla/shumway created:<2012-03-01**](https://github.com/search?q=repo%3Amozilla%2Fshumway+created%3A%3C2012-03-01&type=Issues) は、2012 年 3 月より前に作成された @mozilla の shumway プロジェクトからの Issue にマッチします。 |

## オープンかクローズかで検索

`state` 修飾子または `is` 修飾子を使って、オープンかクローズかで、Issue およびプルリクエストをフィルタリングできます。

| 修飾子            | サンプル                                                                                                                                                                                           |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `state:open`   | [**libraries state:open mentions:vmg**](https://github.com/search?utf8=%E2%9C%93&q=libraries+state%3Aopen+mentions%3Avmg&type=Issues) は、「libraries」という単語がある @vmg にメンションしているオープン Issue にマッチします。 |
| `state:closed` | [**design state:closed in:body**](https://github.com/search?utf8=%E2%9C%93&q=design+state%3Aclosed+in%3Abody&type=Issues) は、本文に「design」という単語がある、クローズされた Issue にマッチします。                         |
| `is:open`      | [**performance is:open is:issue**](https://github.com/search?q=performance+is%3Aopen+is%3Aissue&type=Issues) は、「performance」という単語があるオープン Issue にマッチします。                                        |
| `is:closed`    | [**android is:closed**](https://github.com/search?utf8=%E2%9C%93&q=android+is%3Aclosed&type=) は、「android」という単語があるクローズされた Issue とプルリクエストにマッチします。                                                |

{% ifversion issue-close-reasons %}
## Search by the reason an issue was closed

You can filter issues based on the reason given when the issue was closed, using the `reason` qualifier.

| 修飾子                    | サンプル                                                                                                                                                                                                                 |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `reason:complete`      | [**libraries is:closed reason:complete**](https://github.com/search?q=libraries+is%3Aclosed+reason%3Acompleted&type=Issues) matches issues with the word "libraries" that were closed as "completed."                |
| `reason:"not planned"` | [**libraries is:closed reason:"not planned"**](https://github.com/search?q=libraries+is%3Aclosed+reason%3A%22not+planned%22&type=Issues) matches issues with the word "libraries" that were closed as "not planned." |

{% endif %}

## リポジトリの可視性によるフィルタ

`is` 修飾子を使用して、Issue とプルリクエストを含むリポジトリの可視性でフィルタできます。 For more information, see "[About repositories](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)."

| Qualifier  | Example | ------------- | ------------- |{% ifversion fpt or ghes or ghec %} | `is:public` | [**is:public**](https://github.com/search?q=is%3Apublic&type=Issues) matches issues and pull requests in public repositories.{% endif %}{% ifversion ghes or ghec or ghae %} | `is:internal` | [**is:internal**](https://github.com/search?q=is%3Ainternal&type=Issues) matches issues and pull requests in internal repositories.{% endif %} | `is:private` | [**is:private cupcake**](https://github.com/search?q=is%3Aprivate+cupcake&type=Issues) matches issues and pull requests that contain the word "cupcake" in private repositories you can access.

## 作者で検索

`author` 修飾子によって、特定のユーザまたはインテグレーションアカウントが作成した Issue およびプルリクエストを検索できます。

| 修飾子                       | サンプル                                                                                                                                                            |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>author:<em>USERNAME</em></code> | [**cool author:gjtorikian**](https://github.com/search?q=cool+author%3Agjtorikian&type=Issues) は、@gjtorikian が作成した「cool」という単語がある Issue とプルリクエストにマッチします。         |
|                           | [**bootstrap in:body author:mdo**](https://github.com/search?q=bootstrap+in%3Abody+author%3Amdo&type=Issues) は、本文に「bootstrap」という単語を含む @mdo が作成した Issue にマッチします。 |
| <code>author:app/<em>USERNAME</em></code> | [**author:app/robot**](https://github.com/search?q=author%3Aapp%2Frobot&type=Issues) は、「robot」というインテグレーションアカウントが作成した Issue にマッチします。                             |

## アサインされた人で検索

`assignee` 修飾子は、特定のユーザにアサインされた Issue およびプルリクエストを表示します。 アサインされた人がいる Issue およびプルリクエストは、_一切_検索できません。 [アサインされた人がいない Issue およびプルリクエスト](#search-by-missing-metadata)は検索できます。

| 修飾子                       | サンプル                                                                                                                                                                                                       |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>assignee:<em>USERNAME</em></code> | [**assignee:vmg repo:libgit2/libgit2**](https://github.com/search?utf8=%E2%9C%93&q=assignee%3Avmg+repo%3Alibgit2%2Flibgit2&type=Issues) は、@vmg にアサインされた libgit2 のプロジェクト libgit2 の Issue およびプルリクエストにマッチします。 |

## メンションで検索

`mentions` 修飾子は、特定のユーザーにメンションしている Issue を表示します。 詳細は「[人およびチームにメンションする](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)」を参照してください。

| 修飾子                       | サンプル                                                                                                                                                            |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>mentions:<em>USERNAME</em></code> | [**`resque mentions:defunkt`**](https://github.com/search?q=resque+mentions%3Adefunkt&type=Issues) matches issues with the word "resque" that mention @defunkt. |

## Team メンションで検索

あなたが属する Organization および Team について、 `team` 修飾子により、Organization 内の一定の Team に @メンションしている Issue またはプルリクエストを表示します。 検索を行うには、これらのサンプルの名前をあなたの Organization および Team の名前に置き換えてください。

| 修飾子                       | サンプル                                                                                  |
| ------------------------- | ------------------------------------------------------------------------------------- |
| <code>team:<em>ORGNAME/TEAMNAME</em></code> | **`team:jekyll/owners`** matches issues where the `@jekyll/owners` team is mentioned. |
|                           | **team:myorg/ops is:open is:pr** は、`@myorg/ops` Team がメンションされているオープンなプルリクエストにマッチします。  |

## コメントした人で検索

`commenter` 修飾子は、特定のユーザからのコメントを含む Issue を検索します。

| 修飾子                       | サンプル                                                                                                                                                                                                             |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>commenter:<em>USERNAME</em></code> | [**github commenter:defunkt org:github**](https://github.com/search?utf8=%E2%9C%93&q=github+commenter%3Adefunkt+org%3Agithub&type=Issues) は、@defunkt のコメントがあり、「github」という単語がある、GitHub が所有するリポジトリの Issue にマッチします。 |

## Issue やプルリクエストに関係したユーザで検索

`involves` 修飾子は、特定のユーザが何らかの方法で関与する Issue を表示します。 `involves` 修飾子は、単一ユーザについて、`author`、`assignee`、`mentions`、および `commenter` を論理 OR でつなげます。 言い換えれば、この修飾子は、特定のユーザが作成した、当該ユーザにアサインされた、当該ユーザをメンションした、または、当該ユーザがコメントした、Issue およびプルリクエストを表示します。

| 修飾子                       | サンプル                                                                                                                                                                                                              |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>involves:<em>USERNAME</em></code> | **[involves:defunkt involves:jlord](https://github.com/search?q=involves%3Adefunkt+involves%3Ajlord&type=Issues)** は、@defunkt または @jlord が関与している Issue にマッチします。                                                   |
|                           | [**NOT bootstrap in:body involves:mdo**](https://github.com/search?q=NOT+bootstrap+in%3Abody+involves%3Amdo&type=Issues) matches issues @mdo is involved in that do not contain the word "bootstrap" in the body. |

## リンクされた Issue とプルリクエストを検索する
結果を絞り込んで、クローズしているリファレンスによってプルリクエストにリンクされている、またはプルリクエストによってクローズされる可能性がある Issue にリンクされている Issue のみを表示することができます。

| 修飾子             | サンプル                                                                                                                                                                                                                            |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `linked:pr`     | [**repo:desktop/desktop is:open linked:pr**](https://github.com/search?q=repo%3Adesktop%2Fdesktop+is%3Aopen+linked%3Apr) は、`desktop/desktop` リポジトリの中で、クローズしているリファレンスによってプルリクエストにリンクされている Issue に一致します。                          |
| `linked:issue`  | [**repo:desktop/desktop is:closed linked:issue**](https://github.com/search?q=repo%3Adesktop%2Fdesktop+is%3Aclosed+linked%3Aissue) は、 `desktop/desktop` リポジトリの中で、プルリクエストによってクローズされた可能性がある Issue にリンクされていた、クローズされたプルリクエストに一致します。 |
| `-linked:pr`    | [**repo:desktop/desktop is:open linked:pr**](https://github.com/search?q=repo%3Adesktop%2Fdesktop+is%3Aopen+-linked%3Apr) は、`desktop/desktop` リポジトリの中で、クローズしているリファレンスによってプルリクエストにリンクされていない Issue に一致します。                        |
| `-linked:issue` | [**repo:desktop/desktop is:open -linked:issue**](https://github.com/search?q=repo%3Adesktop%2Fdesktop+is%3Aopen+-linked%3Aissue) は、 `desktop/desktop` リポジトリの中で、プルリクエストによってクローズされる可能性がある Issue にリンクされていないオープンのプルリクエストに一致します。     |

## ラベルで検索

`label` 修飾子を使って、ラベルで検索結果を絞り込むことができます。 Issue は複数のラベルがある可能性があることから、各 Issue について異なる修飾子を記載できます。

| 修飾子                        | サンプル                                                                                                                                                                                                                                                     |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>label:<em>LABEL</em></code> | [**label:"help wanted" language:ruby**](https://github.com/search?utf8=%E2%9C%93&q=label%3A%22help+wanted%22+language%3Aruby&type=Issues) matches issues with the label "help wanted" that are in Ruby repositories.                                     |
|                            | [**broken in:body -label:bug label:priority**](https://github.com/search?q=broken+in%3Abody+-label%3Abug+label%3Apriority&type=Issues) matches issues with the word "broken" in the body, that lack the label "bug", but *do* have the label "priority." |
|                            | [**label:bug label:resolved**](https://github.com/search?l=&q=label%3Abug+label%3Aresolved&type=Issues) matches issues with the labels "bug" and "resolved."{% ifversion fpt or ghes > 3.2 or ghae or ghec %}
|                            | [**label:bug,resolved**](https://github.com/search?q=label%3Abug%2Cresolved&type=Issues) matches issues with the label "bug" or the label "resolved."{% endif %}

## マイルストーンで検索

`milestone` 修飾子は、リポジトリ内の[マイルストーン](/articles/about-milestones)の一部である Issue またはプルリクエストを表示します。

| 修飾子                        | サンプル                                                                                                                                                                   |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>milestone:<em>MILESTONE</em></code> | [**milestone:"overhaul"**](https://github.com/search?utf8=%E2%9C%93&q=milestone%3A%22overhaul%22&type=Issues) matches issues that are in a milestone named "overhaul." |
|                            | [**milestone:"bug fix"**](https://github.com/search?utf8=%E2%9C%93&q=milestone%3A%22bug+fix%22&type=Issues) matches issues that are in a milestone named "bug fix."    |

## プロジェクトボードで検索

リポジトリまたは Organization にある特定の[プロジェクトボード](/articles/about-project-boards/)と関連する Issue を表示するには、`project` 修飾子を使います。 プロジェクトボードはプロジェクトボード番号で検索する必要があります。 プロジェクトボードの URL の末尾に、プロジェクトボード番号が表示されています。

| 修飾子                        | サンプル                                                                                                                    |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| <code>project:<em>PROJECT_BOARD</em></code> | **project:github/57** matches issues owned by GitHub that are associated with the organization's project board 57.      |
| <code>project:<em>REPOSITORY/PROJECT_BOARD</em></code> | **project:github/linguist/1** matches issues that are associated with project board 1 in @github's linguist repository. |

## コミットステータスで検索

コミットのステータスでプルリクエストをフィルタリングできます。 This is especially useful if you are using [the Status API](/rest/reference/commits#commit-statuses) or a CI service.

| 修飾子              | サンプル                                                                                                                                                                                                                                       |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `status:pending` | [**language:go status:pending**](https://github.com/search?utf8=%E2%9C%93&q=language%3Ago+status%3Apending) matches pull requests opened into Go repositories where the status is pending.                                                 |
| `status:success` | [**is:open status:success finally in:body**](https://github.com/search?utf8=%E2%9C%93&q=is%3Aopen+status%3Asuccess+finally+in%3Abody&type=Issues) matches open pull requests with the word "finally" in the body with a successful status. |
| `status:failure` | [**created:2015-05-01..2015-05-30 status:failure**](https://github.com/search?utf8=%E2%9C%93&q=created%3A2015-05-01..2015-05-30+status%3Afailure&type=Issues) matches pull requests opened on May 2015 with a failed status.               |

## コミット SHA で検索

コミットの特定の SHA ハッシュを知っている場合、その SHA を含むプルリクエストを検索するために使えます。 SHA の構文は、7 字以上であることが必要です。

| 修飾子                        | サンプル                                                                                                                                                                         |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code><em>SHA</em></code> | [**e1109ab**](https://github.com/search?q=e1109ab&type=Issues) matches pull requests with a commit SHA that starts with `e1109ab`.                                           |
|                            | [**0eff326d6213c is:merged**](https://github.com/search?q=0eff326d+is%3Amerged&type=Issues) matches merged pull requests with a commit SHA that starts with `0eff326d6213c`. |

## ブランチ名で検索

元のブランチ (「head」ブランチ) またはマージされるブランチ (「base」ブランチ) でプルリクエストをフィルタリングできます。

| 修飾子                        | サンプル                                                                                                                                                                                                                         |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>head:<em>HEAD_BRANCH</em></code> | [**head:change is:closed is:unmerged**](https://github.com/search?utf8=%E2%9C%93&q=head%3Achange+is%3Aclosed+is%3Aunmerged) matches pull requests opened from branch names beginning with the word "change" that are closed. |
| <code>base:<em>BASE_BRANCH</em></code> | [**base:gh-pages**](https://github.com/search?utf8=%E2%9C%93&q=base%3Agh-pages) matches pull requests that are being merged into the `gh-pages` branch.                                                                      |

## 言語で検索

`language` 修飾子により、特定の言語で記述されたリポジトリ内の Issue およびプルリクエストを検索できます。

| 修飾子                        | サンプル                                                                                                                                                    |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>language:<em>LANGUAGE</em></code> | [**language:ruby state:open**](https://github.com/search?q=language%3Aruby+state%3Aopen&type=Issues) matches open issues that are in Ruby repositories. |

## コメントの数で検索

You can use the `comments` qualifier along with [greater than, less than, and range qualifiers](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax) to search by the number of comments.

| 修飾子                        | サンプル                                                                                                                                                                   |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>comments:<em>n</em></code> | [**state:closed comments:&gt;100**](https://github.com/search?q=state%3Aclosed+comments%3A%3E100&type=Issues) matches closed issues with more than 100 comments. |
|                            | [**comments:500..1000**](https://github.com/search?q=comments%3A500..1000&type=Issues) matches issues with comments ranging from 500 to 1,000.                         |

## インタラクションの数で検索

You can filter issues and pull requests by the number of interactions with the `interactions` qualifier along with [greater than, less than, and range qualifiers](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax). インタラクションの数とは、1 つの Issue またはプルリクエストにあるリアクションおよびコメントの数のことです。

| 修飾子                        | サンプル                                                                                                                                                            |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>interactions:<em>n</em></code> | [** interactions:&gt;2000**](https://github.com/search?q=interactions%3A%3E2000) は、インタラクションの数が 2,000 を超えるプルリクエストまたは Issue にマッチします。                    |
|                            | [**interactions:500..1000**](https://github.com/search?q=interactions%3A500..1000) matches pull requests or issues with interactions ranging from 500 to 1,000. |

## リアクションの数で検索

You can filter issues and pull requests by the number of reactions using the `reactions` qualifier along with [greater than, less than, and range qualifiers](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax).

| 修飾子                        | サンプル                                                                                                                                   |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| <code>reactions:<em>n</em></code> | [** reactions:&gt;1000**](https://github.com/search?q=reactions%3A%3E1000&type=Issues) は、リアクションの数が 1,000 を超える Issue にマッチします。 |
|                            | [**reactions:500..1000**](https://github.com/search?q=reactions%3A500..1000) matches issues with reactions ranging from 500 to 1,000.  |

## ドラフトプルリクエストを検索
ドラフトプルリクエストをフィルタリングすることができます。 For more information, see "[About pull requests](/articles/about-pull-requests#draft-pull-requests)."

| 修飾子           | サンプル                                                                                                          |
| ------------- | ------------------------------------------------------------------------------------------------------------- |
| `draft:true`  | [**draft:true**](https://github.com/search?q=draft%3Atrue) matches draft pull requests.                       |
| `draft:false` | [**draft:false**](https://github.com/search?q=draft%3Afalse) matches pull requests that are ready for review. |

## プルリクエストレビューのステータスおよびレビュー担当者で検索

You can filter pull requests based on their [review status](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews) (_none_, _required_, _approved_, or _changes requested_), by reviewer, and by requested reviewer.

| 修飾子                        | サンプル                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `review:none`              | [**type:pr review:none**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+review%3Anone&type=Issues) matches pull requests that have not been reviewed.                                                                                                                                                                                                                                                                                                              |
| `review:required`          | [**type:pr review:required**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+review%3Arequired&type=Issues) matches pull requests that require a review before they can be merged.                                                                                                                                                                                                                                                                                  |
| `review:approved`          | [**type:pr review:approved**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+review%3Aapproved&type=Issues) matches pull requests that a reviewer has approved.                                                                                                                                                                                                                                                                                                     |
| `review:changes_requested` | [**type:pr review:changes_requested**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+review%3Achanges_requested&type=Issues) matches pull requests in which a reviewer has asked for changes.                                                                                                                                                                                                                                                                      |
| <code>reviewed-by:<em>USERNAME</em></code> | [**type:pr reviewed-by:gjtorikian**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+reviewed-by%3Agjtorikian&type=Issues) matches pull requests reviewed by a particular person.                                                                                                                                                                                                                                                                                    |
| <code>review-requested:<em>USERNAME</em></code> | [**type:pr review-requested:benbalter**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+review-requested%3Abenbalter&type=Issues) matches pull requests where a specific person is requested for review. リクエストを受けたレビュー担当者は、プルリクエストのレビュー後は検索結果に表示されなくなります。 If the requested person is on a team that is requested for review, then review requests for that team will also appear in the search results.{% ifversion fpt or ghae-issue-5181 or ghes > 3.2 or ghec %}
| <code>user-review-requested:@me</code> | [**type:pr user-review-requested:@me**](https://github.com/search?q=is%3Apr+user-review-requested%3A%40me+) matches pull requests that you have directly been asked to review.{% endif %}
| <code>team-review-requested:<em>TEAMNAME</em></code> | [**type:pr team-review-requested:atom/design**](https://github.com/search?q=type%3Apr+team-review-requested%3Aatom%2Fdesign&type=Issues) matches pull requests that have review requests from the team `atom/design`. リクエストを受けたレビュー担当者は、プルリクエストのレビュー後は検索結果に表示されなくなります。                                                                                                                                                                                                    |

## Issue やプルリクエストの作成時期や最終更新時期で検索

作成時期または最終更新時期で Issue をフィルタリングできます。 Issue の作成時期については、`created` の修飾子を使います。Issue の最終更新時期で表示するには、`updated` の修飾子を使います。

どちらの修飾子も、パラメータとして日付を使います。 {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| 修飾子                        | サンプル                                                                                                                                                                                                 |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>created:<em>YYYY-MM-DD</em></code> | [**language:c# created:<2011-01-01 state:open**](https://github.com/search?q=language%3Ac%23+created%3A%3C2011-01-01+state%3Aopen&type=Issues) は、C# で記述されたリポジトリの 2011 年より前に作成されたオープンな Issue にマッチします。 |
| <code>updated:<em>YYYY-MM-DD</em></code> | [**weird in:body updated:>=2013-02-01**](https://github.com/search?q=weird+in%3Abody+updated%3A%3E%3D2013-02-01&type=Issues) は、2013 年 2 月以降に更新された、本文に「weird」という単語を含む Issue にマッチします。                  |

## Issue やプルリクエストがクローズされた時期で検索

`closed` 修飾子を使って、Issue およびプルリクエストを、クローズされているかどうかでフィルタリングできます。

この修飾子は、パラメータとして日付を使います。 {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| 修飾子                        | サンプル                                                                                                                                                                                                        |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>closed:<em>YYYY-MM-DD</em></code> | [**language:swift closed:>2014-06-11**](https://github.com/search?q=language%3Aswift+closed%3A%3E2014-06-11&type=Issues) は、2014 年 6 月 11 日より後にクローズした Swift の Issue およびプルリクエストにマッチします。                       |
|                            | [**data in:body closed:<2012-10-01**](https://github.com/search?utf8=%E2%9C%93&q=data+in%3Abody+closed%3A%3C2012-10-01+&type=Issues) は、2012 年 10 月より前にクローズされた、body に「data」という単語がある Issue およびプルリクエストにマッチします。 |

## プルリクエストがマージされた時期で検索

`merged` 修飾子を使って、マージされているかどうかでプルリクエストをフィルタリングできます。

この修飾子は、パラメータとして日付を使います。 {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| 修飾子                        | サンプル                                                                                                                                                                                                                     |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <code>merged:<em>YYYY-MM-DD</em></code> | [**`language:javascript merged:<2011-01-01`**](https://github.com/search?q=language%3Ajavascript+merged%3A%3C2011-01-01+&type=Issues) matches pull requests in JavaScript repositories that were merged before 2011.  |
|                            | [**fast in:title language:ruby merged:>=2014-05-01**](https://github.com/search?q=fast+in%3Atitle+language%3Aruby+merged%3A%3E%3D2014-05-01+&type=Issues)は、2014 年 5 月以降にマージされた、タイトルに「fast」という単語がある Ruby のプルリクエストにマッチします。 |

## プルリクエストがマージされているかどうかで検索

`is` 修飾子を使って、マージされたかどうかでプルリクエストをフィルタリングできます。

| 修飾子           | サンプル                                                                                                                                                                                                |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `is:merged`   | [**bug is:pr is:merged**](https://github.com/search?utf8=%E2%9C%93&q=bugfix+is%3Apr+is%3Amerged&type=) matches merged pull requests with the word "bug."                                            |
| `is:unmerged` | [**error is:unmerged**](https://github.com/search?utf8=%E2%9C%93&q=error+is%3Aunmerged&type=) matches pull requests with the word "error" that are either open or were closed without being merged. |

## リポジトリがアーカイブされているかどうかで検索

`archived` 修飾子は、Issue またはプルリクエストがアーカイブされたリポジトリにあるかどうかでフィルタリングできます。

| 修飾子              | サンプル                                                                                                                                                     |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `archived:true`  | [**archived:true GNOME**](https://github.com/search?q=archived%3Atrue+GNOME&type=) は、アクセスできるアーカイブされたリポジトリの、「GNOME」という単語を含む Issue およびプルリクエストにマッチします。      |
| `archived:false` | [**archived:false GNOME**](https://github.com/search?q=archived%3Afalse+GNOME&type=) は、アクセスできるアーカイブされていないリポジトリの、「GNOME」という単語を含む Issue およびプルリクエストにマッチします。 |

## 会話がロックされているかどうかで検索

`is` 修飾子を使用して、ロックされている会話がある Issue またはプルリクエストを検索することができます。 詳細は「[会話をロックする](/communities/moderating-comments-and-conversations/locking-conversations)」を参照してください。

| 修飾子           | サンプル                                                                                                                                                                                                                             |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `is:locked`   | [**code of conduct is:locked is:issue archived:false**](https://github.com/search?q=code+of+conduct+is%3Alocked+is%3Aissue+archived%3Afalse) は、アーカイブされていないリポジトリにロックされている会話がある、「code of conduct」という言葉を含む Issue またはプルリクエストにマッチします。 |
| `is:unlocked` | [**code of conduct is:unlocked is:issue archived:false**](https://github.com/search?q=code+of+conduct+is%3Aunlocked+archived%3Afalse) は、アーカイブされていないリポジトリにアンロックされている会話がある、「code of conduct」という言葉を含む Issue またはプルリクエストにマッチします。      |

## 欠損しているメタデータで検索

`no` 修飾子を使って、一定のメタデータがない Issue およびプルリクエストに検索を絞り込むことができます。 こうしたメタデータには、以下のようなものがあります:

* ラベル
* マイルストーン
* アサインされた人
* プロジェクト

| 修飾子            | サンプル                                                                                                                                                                                                                        |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `no:label`     | [**priority no:label**](https://github.com/search?q=priority+no%3Alabel&type=Issues) は、ラベルのない、「priority」という単語がある Issue およびプルリクエストにマッチします。                                                                                   |
| `no:milestone` | [**sprint no:milestone type:issue**](https://github.com/search?q=sprint+no%3Amilestone+type%3Aissue&type=Issues) は、「sprint」という単語を含む、マイルストーンと関連のない Issue にマッチします。                                                            |
| `no:assignee`  | [**important no:assignee language:java type:issue**](https://github.com/search?q=important+no%3Aassignee+language%3Ajava+type%3Aissue&type=Issues) は、Java のリポジトリにある、「important」という単語を含む、アサインされた人とは関連付けられていない Issue にマッチします。 |
| `no:project`   | [**build no:project**](https://github.com/search?utf8=%E2%9C%93&q=build+no%3Aproject&type=Issues) は、「build」という単語を含む、プロジェクトボードとは関連付けられていない Issue にマッチします。                                                                    |

## 参考リンク

- 「[検索結果をソートする](/search-github/getting-started-with-searching-on-github/sorting-search-results/)」
