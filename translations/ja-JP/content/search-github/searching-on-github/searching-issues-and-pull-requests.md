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
ms.openlocfilehash: 8565d2d31c66291114da8ab4a95312a568d39ae3
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106462'
---
{% data variables.product.product_name %} 全体にわたってグローバルに Issue およびプルリクエストを検索できます。あるいは、特定の Organization の Issue およびプルリクエストに限った検索もできます。 詳細については、「[{% data variables.product.company_short %} での検索について](/search-github/getting-started-with-searching-on-github/about-searching-on-github)」を参照してください。

{% tip %}

**ヒント:** {% ifversion ghes or ghae %}
  - この記事には、{% data variables.product.prodname_dotcom %}.com の Web サイトでの検索例が含まれていますが、同じ検索フィルターを {% data variables.location.product_location %} で使えます。{% endif %}
  - 検索結果をさらに改善する検索修飾子を追加する検索構文のリストについては、「[Understanding the search syntax](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)」 (検索構文の理解) を参照してください。
  - 複数単語の検索用語は引用符で囲みます。 たとえば "In progress" というラベルの問題を検索したい場合は、`label:"in progress"` と検索します。 検索では、大文字と小文字は区別されません。
  - {% data reusables.search.search_issues_and_pull_requests_shortcut %}

  {% endtip %}

## Issue またはプルリクエストに限定した検索

デフォルトでは、{% data variables.product.product_name %} の検索は、Issueとプルリクエストの両方を結果表示します。 ただし、`type` または `is` の修飾子を使うことで、issue または pull request に限った検索ができます。

| 修飾子  | 例
| ------------- | -------------
| `type:pr` | [**cat type:pr**](https://github.com/search?q=cat+type%3Apr&type=Issues) は、"cat" という単語を含む pull request と一致します。
| `type:issue` | [**github commenter:defunkt type:issue**](https://github.com/search?q=github+commenter%3Adefunkt+type%3Aissue&type=Issues) は、"github" という単語を含み、@defunkt によるコメントがある issue と一致します。
| `is:pr` | [**event is:pr**](https://github.com/search?utf8=%E2%9C%93&q=event+is%3Apr&type=) は、"event" という単語を含む pull request と一致します。
| `is:issue` | [**is:issue label:bug is:closed**](https://github.com/search?utf8=%E2%9C%93&q=is%3Aissue+label%3Abug+is%3Aclosed&type=) は、"bug" というラベルを持つクローズした issue と一致します。

## タイトル、本文、またはコメントで検索

`in` 修飾子によって、タイトル、本文、コメントやその組み合わせに限定した検索ができます。 この修飾子を省略した場合、タイトル、本文、そしてコメントがすべて検索されます。

| 修飾子     | 例
| ------------- | -------------
| `in:title` | [**warning in:title**](https://github.com/search?q=warning+in%3Atitle&type=Issues) は、タイトルに "warning" を含む issue と一致します。
| `in:body` | [**error in:title,body**](https://github.com/search?q=error+in%3Atitle%2Cbody&type=Issues) は、タイトルまたは本文に "error" を含む issue と一致します。
| `in:comments` | [**shipit in:comments**](https://github.com/search?q=shipit+in%3Acomment&type=Issues) は、コメントで "shipit" とメンションされている issue と一致します。

## ユーザまたは Organization のリポジトリ内の検索

特定のユーザーや Organization が所有する、すべてのリポジトリ内の issue と pull request を検索するには、`user` または `org` の修飾子を使います。 特定のリポジトリの issue や pull request を検索するには、`repo` 修飾子を使います。

{% data reusables.pull_requests.large-search-workaround %}

| 修飾子        | 例
| ------------- | -------------
| <code>user:<em>USERNAME</em></code> | [**user:defunkt ubuntu**](https://github.com/search?q=user%3Adefunkt+ubuntu&type=Issues) は、@defunkt が所有するリポジトリの "ubuntu" という単語を含む issue と一致します。
| <code>org:<em>ORGNAME</em></code> | [**org:github**](https://github.com/search?q=org%3Agithub&type=Issues&utf8=%E2%9C%93) は、GitHub Organization が所有するリポジトリの issue と一致します。
| <code>repo:<em>USERNAME/REPOSITORY</em></code> | [**repo:mozilla/shumway created:<2012-03-01**](https://github.com/search?q=repo%3Amozilla%2Fshumway+created%3A%3C2012-03-01&type=Issues) は 2012 年 3 月より前に作成された @mozilla の shumway プロジェクトの issue と一致します。

## オープンかクローズかで検索

`state` または `is` 修飾子を使って、オープンかクローズかで、issue と pull request をフィルタリングできます。

| 修飾子        | 例
| ------------- | -------------
| `state:open` | [**libraries state:open mentions:vmg**](https://github.com/search?utf8=%E2%9C%93&q=libraries+state%3Aopen+mentions%3Avmg&type=Issues) は、"libraries" という単語を含む @vmg をメンションするオープンの issue と一致します。
| `state:closed` | [**design state:closed in:body**](https://github.com/search?utf8=%E2%9C%93&q=design+state%3Aclosed+in%3Abody&type=Issues) は、本文で "design" という単語を含むクローズした issue と一致します。
| `is:open` | [**performance is:open is:issue**](https://github.com/search?q=performance+is%3Aopen+is%3Aissue&type=Issues) は、"performance" という単語を含むオープンの issue と一致します。
| `is:closed` | [**android is:closed**](https://github.com/search?utf8=%E2%9C%93&q=android+is%3Aclosed&type=) は、"android" という単語を含む、クローズした issue や pull request と一致します。

{% ifversion issue-close-reasons %}
## Issue がクローズされた理由で検索する

`reason` 修飾子を使うと、issue がクローズされたときの設定された理由に基づいて、issue をフィルター処理することができます。

| 修飾子        | 例
| ------------- | -------------
| `reason:completed` | [**libraries is:closed reason:completed**](https://github.com/search?q=libraries+is%3Aclosed+reason%3Acompleted&type=Issues) は、"completed" としてクローズされた、"libraries" という単語を含む issue に一致します。
| `reason:"not planned"` | [**libraries is:closed reason:"not planned"**](https://github.com/search?q=libraries+is%3Aclosed+reason%3A%22not+planned%22&type=Issues) は、"not planned" としてクローズされた、"libraries" という単語を含む issue に一致します。
 
{% endif %}

## リポジトリの可視性によるフィルタ

`is` 修飾子を使って、Issue と pull request を含むリポジトリの可視性でフィルタリングできます。 詳細については、[リポジトリ](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)に関する説明を参照してください。

| 修飾子  | 例 | ------------- | ------------- |{% ifversion fpt or ghes or ghec %} | `is:public` | [**is:public**](https://github.com/search?q=is%3Apublic&type=Issues) は、パブリック リポジトリの issue や pull request と一致します。{% endif %}{% ifversion ghes or ghec or ghae %} | `is:internal` | [**is:internal**](https://github.com/search?q=is%3Ainternal&type=Issues) は、内部リポジトリの issue や pull request と一致します。{% endif %} | `is:private` | [**is:private cupcake**](https://github.com/search?q=is%3Aprivate+cupcake&type=Issues) は、アクセスできるプライベート リポジトリの "cupcake" という単語を含む issue や pull request と一致します。

## 作者で検索

`author` 修飾子は、特定のユーザーまたは統合アカウントが作成した issue と pull request を検索します。

| 修飾子     | 例
| ------------- | -------------
| <code>author:<em>USERNAME</em></code> | [**cool author:gjtorikian**](https://github.com/search?q=cool+author%3Agjtorikian&type=Issues) は、@gjtorikian が作成した "cool" という単語を含む issue や pull request と一致します。
| | [**bootstrap in:body author:mdo**](https://github.com/search?q=bootstrap+in%3Abody+author%3Amdo&type=Issues) は、本文に "bootstrap" という単語を含む、@mdo が作成した issue と一致します。
| <code>author:app/<em>USERNAME</em></code> | [**author:app/robot**](https://github.com/search?q=author%3Aapp%2Frobot&type=Issues) は、"robot" という名前の統合アカウントが作成した issue と一致します。

## アサインされた人で検索

`assignee` 修飾子は、特定のユーザーにアサインされた Issue と pull request を検索します。 割り当て先が _存在_ する問題とプル要求は検索できませんが、担当者 [がいない問題とプル要求を](#search-by-missing-metadata)検索できます。

| 修飾子     | 例
| ------------- | -------------
| <code>assignee:<em>USERNAME</em></code> | [**assignee:vmg repo:libgit2/libgit2**](https://github.com/search?utf8=%E2%9C%93&q=assignee%3Avmg+repo%3Alibgit2%2Flibgit2&type=Issues) は、@vmg に割り当てられている libgit2 のプロジェクト libgit2 の issue や pull request と一致します。

## メンションで検索

`mentions` 修飾子は、特定のユーザーをメンションしている issue を検索します。 詳しくは、「[人や Team のメンション](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)」を参照してください。

| 修飾子     | 例
| ------------- | -------------
| <code>mentions:<em>USERNAME</em></code> | [ **`resque mentions:defunkt`**](https://github.com/search?q=resque+mentions%3Adefunkt&type=Issues) は、@defunkt をメンションしている "resque" という単語を含む issue と一致します。

## Team メンションで検索

あなたが属する Organization や Team の場合は、`team` 修飾子を使って、Organization 内の特定の Team を @mention している issue または pull request を検索できます。 検索を行うには、これらのサンプルの名前をあなたの Organization および Team の名前に置き換えてください。

| 修飾子        | 例
| ------------- | -------------
| <code>team:<em>ORGNAME/TEAMNAME</em></code> | **`team:jekyll/owners`** は、`@jekyll/owners` Team がメンションされている issue と一致します。
| | **team:myorg/ops is:open is:pr** は、`@myorg/ops` Team がメンションされているオープンの pull request と一致します。

## コメントした人で検索

`commenter` 修飾子は、特定のユーザーからのコメントが含まれる issue を検索します。

| 修飾子        | 例
| ------------- | -------------
| <code>commenter:<em>USERNAME</em></code> | [**github commenter:defunkt org:github**](https://github.com/search?utf8=%E2%9C%93&q=github+commenter%3Adefunkt+org%3Agithub&type=Issues) は、"github" という単語が含まれ、@defunkt によるコメントがある、GitHub が所有するリポジトリ内の issue と一致します。

## Issue やプルリクエストに関係したユーザで検索

`involves` 修飾子は、特定のユーザーが何らかの方法で関与する Issue を検索します。 `involves` 修飾子は、1 人のユーザーを対象とした、`author`、`assignee`、`mentions`、`commenter` の修飾子の間の論理 OR です。 言い換えれば、この修飾子は、特定のユーザが作成した、当該ユーザにアサインされた、当該ユーザをメンションした、または、当該ユーザがコメントした、Issue およびプルリクエストを表示します。

| 修飾子        | 例
| ------------- | -------------
| <code>involves:<em>USERNAME</em></code> | **[involves:defunkt involves:jlord](https://github.com/search?q=involves%3Adefunkt+involves%3Ajlord&type=Issues)** は、@defunkt または @jlord が関与している issue と一致します。
| | [**NOT bootstrap in:body involves:mdo**](https://github.com/search?q=NOT+bootstrap+in%3Abody+involves%3Amdo&type=Issues) は@mdo が関与している、本文に "bootstrap" という単語を含まない issue と一致します。

## リンクされた Issue とプルリクエストを検索する
結果を絞り込んで、クローズしているリファレンスによってプルリクエストにリンクされている、またはプルリクエストによってクローズされる可能性がある Issue にリンクされている Issue のみを表示することができます。

| 修飾子 | 例 |
| ------------- | ------------- |
| `linked:pr` | [**repo:desktop/desktop is:open linked:pr**](https://github.com/search?q=repo%3Adesktop%2Fdesktop+is%3Aopen+linked%3Apr) は、クローズしているリファレンスによって pull request にリンクされている `desktop/desktop` リポジトリ内のオープンの issue と一致します。 |
| `linked:issue` | [**repo:desktop/desktop is:closed linked:issue**](https://github.com/search?q=repo%3Adesktop%2Fdesktop+is%3Aclosed+linked%3Aissue) は、pull request でクローズされた可能性がある issue にリンクされた、`desktop/desktop` リポジトリ内のクローズした pull request と一致します。 |
| `-linked:pr` | [**repo:desktop/desktop is:open linked:pr**](https://github.com/search?q=repo%3Adesktop%2Fdesktop+is%3Aopen+-linked%3Apr) は、クローズしているリファレンスによって pull request にリンクされていない、`desktop/desktop` リポジトリ内のオープンの issue と一致します。 |
| `-linked:issue` | [**repo:desktop/desktop is:open -linked:issue**](https://github.com/search?q=repo%3Adesktop%2Fdesktop+is%3Aopen+-linked%3Aissue) は、pull request でクローズする可能性がある issue にリンクされていない、`desktop/desktop` リポジトリ内のオープンの pull request と一致します。 |

## ラベルで検索

`label` 修飾子を使って、ラベルで検索結果を絞り込むことができます。 Issue は複数のラベルがある可能性があることから、各 Issue について異なる修飾子を記載できます。

| 修飾子        | 例
| ------------- | -------------
| <code>label:<em>LABEL</em></code> | [**label:"help wanted" language:ruby**](https://github.com/search?utf8=%E2%9C%93&q=label%3A%22help+wanted%22+language%3Aruby&type=Issues) は、Ruby リポジトリにあるラベル "help wanted" を含む issue と一致します。
|  | [**broken in:body -label:bug label:priority**](https://github.com/search?q=broken+in%3Abody+-label%3Abug+label%3Apriority&type=Issues) は、本文に "broken" という単語を含み、"bug" というラベルはないが、"priority" というラベルは *ある* issue と一致します。
| | [**label:bug label:resolved**](https://github.com/search?l=&q=label%3Abug+label%3Aresolved&type=Issues) は、ラベル "bug" と "resolved" を含む issue と一致します。
| | [**label:bug,resolved**](https://github.com/search?q=label%3Abug%2Cresolved&type=Issues) は、ラベル "bug" またはラベル "resolved" を含む issue と一致します。

## マイルストーンで検索

`milestone` 修飾子は、リポジトリ内の[マイルストーン](/articles/about-milestones)の一部である issue または pull request を検索します。

| 修飾子        | 例
| ------------- | -------------
| <code>milestone:<em>MILESTONE</em></code> | [**milestone:"overhaul"**](https://github.com/search?utf8=%E2%9C%93&q=milestone%3A%22overhaul%22&type=Issues) は、"overhaul" という名前のマイルストーンにある issue と一致します。
| | [**milestone:"bug fix"**](https://github.com/search?utf8=%E2%9C%93&q=milestone%3A%22bug+fix%22&type=Issues) は、"bug fix" という名前のマイルストーンにある issue と一致します。

## プロジェクトボードで検索

`project` 修飾子を使って、リポジトリまたは Organization の特定の[プロジェクト ボード](/articles/about-project-boards/)に関連付けられている issue を検索することができます。 プロジェクトボードはプロジェクトボード番号で検索する必要があります。 プロジェクトボードの URL の末尾に、プロジェクトボード番号が表示されています。

| 修飾子        | 例
| ------------- | -------------
| <code>project:<em>PROJECT_BOARD</em></code> | **project:github/57** は、Organization のプロジェクト ボード 57 に関連付けられている、GitHub が所有する issue と一致します。
| <code>project:<em>REPOSITORY/PROJECT_BOARD</em></code> | **project:github/linguist/1** は、@github の linguist リポジトリのプロジェクト ボード 1 に関連付けられている issue と一致します。

## コミットステータスで検索

コミットのステータスでプルリクエストをフィルタリングできます。 これは、[状態 API](/rest/reference/commits#commit-statuses) または CI サービスを使っている場合に特に便利です。

| 修飾子        | 例
| ------------- | -------------
| `status:pending` | [**language:go status:pending**](https://github.com/search?utf8=%E2%9C%93&q=language%3Ago+status%3Apending) は、状態が保留中の Go リポジトリでオープンになっている pull request と一致します。
| `status:success` | [**is:open status:success finally in:body**](https://github.com/search?utf8=%E2%9C%93&q=is%3Aopen+status%3Asuccess+finally+in%3Abody&type=Issues) は、正常な状態の、本文に "finally" という単語を含むオープンの pull request と一致します。
| `status:failure` | [**created:2015-05-01..2015-05-30 status:failure**](https://github.com/search?utf8=%E2%9C%93&q=created%3A2015-05-01..2015-05-30+status%3Afailure&type=Issues) は、失敗した状態の、2015 年 5 月にオープンされた pull request と一致します。

## コミット SHA で検索

コミットの特定の SHA ハッシュを知っている場合、その SHA を含むプルリクエストを検索するために使えます。 SHA の構文は、7 字以上であることが必要です。

| 修飾子        | 例
| ------------- | -------------
| <code><em>SHA</em></code> | [**e1109ab**](https://github.com/search?q=e1109ab&type=Issues) は、`e1109ab` で始まるコミット SHA の pull request と一致します。
| | [**0eff326d6213c is:merged**](https://github.com/search?q=0eff326d+is%3Amerged&type=Issues) は、`0eff326d6213c` で始まるコミット SHA のマージされた pull request と一致します。

## ブランチ名で検索

元のブランチ (「head」ブランチ) またはマージされるブランチ (「base」ブランチ) でプルリクエストをフィルタリングできます。

| 修飾子        | 例
| ------------- | -------------
| <code>head:<em>HEAD_BRANCH</em></code> | [**head:change is:closed is:unmerged**](https://github.com/search?utf8=%E2%9C%93&q=head%3Achange+is%3Aclosed+is%3Aunmerged) は、クローズしている単語 "change" で始まるブランチ名からオープンした pull request と一致します。
| <code>base:<em>BASE_BRANCH</em></code> | [**base:gh-pages**](https://github.com/search?utf8=%E2%9C%93&q=base%3Agh-pages) は、`gh-pages` ブランチにマージされている pull request と一致します。

## 言語で検索

`language` 修飾子により、特定の言語で記述されたリポジトリ内の issue や pull request を検索できます。

| 修飾子        | 例
| ------------- | -------------
| <code>language:<em>LANGUAGE</em></code> | [**language:ruby state:open**](https://github.com/search?q=language%3Aruby+state%3Aopen&type=Issues) は、Ruby リポジトリにあるオープンの issue と一致します。

## コメントの数で検索

[不等号や範囲の修飾子](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)と一緒に `comments` 修飾子を使うと、コメントの数で検索できます。

| 修飾子        | 例
| ------------- | -------------
| <code>comments:<em>n</em></code> | [**state:closed comments:&gt;100**](https://github.com/search?q=state%3Aclosed+comments%3A%3E100&type=Issues) は、100 を超えるコメントを含む、クローズした issue と一致します。
| | [**comments:500..1000**](https://github.com/search?q=comments%3A500..1000&type=Issues) は、コメントの数が 500 から 1,000 の issue と一致します。

## インタラクションの数で検索

`interactions` 修飾子と[不等号や範囲の修飾子](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)を使って、インタラクションの数で issue と pull request をフィルタリングできます。 インタラクションの数とは、1 つの Issue またはプルリクエストにあるリアクションおよびコメントの数のことです。

| 修飾子        | 例
| ------------- | -------------
| <code>interactions:<em>n</em></code> | [** interactions:&gt;2000** ](https://github.com/search?q=interactions%3A%3E2000) は、インタラクションの数が 2000 を超える pull request や issue と一致します。
| | [**interactions:500...1000**](https://github.com/search?q=interactions%3A500..1000) は、インタラクションの数が 500 から 1,000 の pull requst や issue と一致します。

## リアクションの数で検索

`reactions` 修飾子と[不等号や範囲の修飾子](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)を使って、リアクションの数で issue と pull request をフィルタリングできます。

| 修飾子        | 例
| ------------- | -------------
| <code>reactions:<em>n</em></code> | [** reactions:&gt;1000**](https://github.com/search?q=reactions%3A%3E1000&type=Issues) は、リアクションの数が 1000 を超える issue と一致します。
| | [**reactions:500...1000**](https://github.com/search?q=reactions%3A500..1000) は、リアクションの数が 500 から 1,000 の issue と一致します。

## ドラフトプルリクエストを検索
ドラフトプルリクエストをフィルタリングすることができます。 詳細については、「[pull request について](/articles/about-pull-requests#draft-pull-requests)」を参照してください。

| 修飾子        | 例
| ------------- | -------------
| `draft:true` | [**draft:true**](https://github.com/search?q=draft%3Atrue) は、下書きの pull request と一致します。
| `draft:false` | [**draft:false**](https://github.com/search?q=draft%3Afalse) は、レビューの準備ができている pull request と一致します。

## プルリクエストレビューのステータスおよびレビュー担当者で検索

[レビューの状態](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews) (_なし_、_必須_、承認、または要求 _された_ 変更) に基づいて、レビュー担当者、および _要求された_ レビュー担当者によってプル要求をフィルター処理できます。

| 修飾子        | 例
| ------------- | -------------
| `review:none` | [**type:pr review:none**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+review%3Anone&type=Issues) は、レビューされていない pull requst と一致します。
| `review:required` | [**type:pr review:required**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+review%3Arequired&type=Issues) は、マージする前にレビューを必要とする pull reruest と一致します。
| `review:approved` | [**type:pr review:approved**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+review%3Aapproved&type=Issues) は、レビュー担当者が承認した pull request と一致します。
| `review:changes_requested` | [**type:pr review:changes_requested**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+review%3Achanges_requested&type=Issues) は、レビュー担当者が変更をリクエストした pull request と一致します。
| <code>reviewed-by:<em>USERNAME</em></code> | [**type:pr reviewed-by:gjtorikian**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+reviewed-by%3Agjtorikian&type=Issues) は、特定のユーザーによってレビューされた pull request と一致します。
| <code>review-requested:<em>USERNAME</em></code> | [**type:pr review-requested:benbalter**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+review-requested%3Abenbalter&type=Issues) は、特定のユーザーにレビューがリクエストされている pull request と一致します。 リクエストを受けたレビュー担当者は、プルリクエストのレビュー後は検索結果に表示されなくなります。 要求されたユーザーがレビューを要求されている Team にいる場合、その Team のレビュー要求も検索結果に表示されます。
| <code>user-review-requested:@me</code> | [**type:pr user-review-requested:@me** ](https://github.com/search?q=is%3Apr+user-review-requested%3A%40me+) は、そのユーザーが直接レビューを求められている pull request と一致します。
| <code>team-review-requested:<em>TEAMNAME</em></code> | [**type:pr team-review-requested:github/docs**](https://github.com/search?q=type%3Apr+team-review-requested%3Agithub%2Fdocs&type=pullrequests) は、Team `github/docs` からのレビュー要求がある pull request と一致します。 リクエストを受けたレビュー担当者は、プルリクエストのレビュー後は検索結果に表示されなくなります。

## Issue やプルリクエストの作成時期や最終更新時期で検索

作成時期または最終更新時期で Issue をフィルタリングできます。 issue を作成する場合は、`created` 修飾子を使います。issue の最終更新時期を確認するには、`updated` 修飾子を使います。

どちらの修飾子も、パラメータとして日付を使います。 {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| 修飾子        | 例
| ------------- | -------------
| <code>created:<em>YYYY-MM-DD</em></code> | [**language:c# created:<2011-01-01 state:open**](https://github.com/search?q=language%3Ac%23+created%3A%3C2011-01-01+state%3Aopen&type=Issues) は、C# で記述されたリポジトリで 2011 年より前に作成されたオープンの issue と一致します。
| <code>updated:<em>YYYY-MM-DD</em></code> | [**weird in:body updated:>=2013-02-01**](https://github.com/search?q=weird+in%3Abody+updated%3A%3E%3D2013-02-01&type=Issues) は、本文に "weird" という単語を含む、2013 年 2 月より後に更新された issue と一致します。

## Issue やプルリクエストがクローズされた時期で検索

`closed` 修飾子を使って、issue や pull request を、クローズされた時期でフィルタリングできます。

この修飾子は、パラメータとして日付を使います。 {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| 修飾子        | 例
| ------------- | -------------
| <code>closed:<em>YYYY-MM-DD</em></code> | [**language:swift closed:>2014-06-11**](https://github.com/search?q=language%3Aswift+closed%3A%3E2014-06-11&type=Issues) は、2014 年 6 月 11 日以降にクローズした Swift の issue や pull request と一致します。
| | [**data in:body closed:<2012-10-01**](https://github.com/search?utf8=%E2%9C%93&q=data+in%3Abody+closed%3A%3C2012-10-01+&type=Issues) は、本文に "data" という単語を含む、2012 年 10 月より前にクローズした issue や pull request と一致します。

## プルリクエストがマージされた時期で検索

`merged` 修飾子を使って、マージされた時期で pull request をフィルタリングできます。

この修飾子は、パラメータとして日付を使います。 {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| 修飾子        | 例
| ------------- | -------------
| <code>merged:<em>YYYY-MM-DD</em></code> | [ **`language:javascript merged:<2011-01-01`**](https://github.com/search?q=language%3Ajavascript+merged%3A%3C2011-01-01+&type=Issues) は、2011 年より前にマージされた JavaScript リポジトリの pull request と一致します。
| | [**fast in:title language:ruby merged:>=2014-05-01**](https://github.com/search?q=fast+in%3Atitle+language%3Aruby+merged%3A%3E%3D2014-05-01+&type=Issues) は、2014 年 5 月以降にマージされ、タイトルに "fast" という単語を含む Ruby の pull request と一致します。

## プルリクエストがマージされているかどうかで検索

`is` 修飾子を使って、マージされているかどうかで pull request をフィルタリングできます。

| 修飾子        | 例
| ------------- | -------------
| `is:merged` | [**bug is:pr is:merged**](https://github.com/search?utf8=%E2%9C%93&q=bugfix+is%3Apr+is%3Amerged&type=) は、"bug" という単語を含むマージされた pull request と一致します。
| `is:unmerged` | [**error is:unmerged**](https://github.com/search?utf8=%E2%9C%93&q=error+is%3Aunmerged&type=) は、オープンになっているか、マージされずにクローズした "error" という単語を含む pull request と一致します。

## リポジトリがアーカイブされているかどうかで検索

`archived` 修飾子は、issue または pull request がアーカイブされたリポジトリにあるかどうかで結果をフィルタリングします。

| 修飾子     | 例
| ------------- | -------------
| `archived:true` | [**archived:true GNOME**](https://github.com/search?q=archived%3Atrue+GNOME&type=) は、アクセスできるアーカイブされたリポジトリ内の "GNOME" という単語を含む issue や pull request と一致します。
| `archived:false` | [**archived:false GNOME**](https://github.com/search?q=archived%3Afalse+GNOME&type=) は、アクセスできるアーカイブされていないリポジトリ内の "GNOME" という単語を含む issue や pull request と一致します。

## 会話がロックされているかどうかで検索

`is` 修飾子を使って、ロックされている会話がある issue または pull request を検索することができます。 詳細については、[会話のロック](/communities/moderating-comments-and-conversations/locking-conversations)に関するページを参照してください。

| 修飾子        | 例
| ------------- | -------------
| `is:locked` | [**code of conduct is:locked is:issue archived:false**](https://github.com/search?q=code+of+conduct+is%3Alocked+is%3Aissue+archived%3Afalse) は、アーカイブされていないリポジトリ内にロックされた会話がある "code of conduct" という単語を含む issue や pull request と一致します。
| `is:unlocked` | [**code of conduct is:unlocked is:issue archived:false**](https://github.com/search?q=code+of+conduct+is%3Aunlocked+archived%3Afalse) は、アーカイブされていないリポジトリ内にロックされていない会話がある "code of conduct" という単語を含む issue や pull request と一致します。

## 欠損しているメタデータで検索

`no` 修飾子を使って、特定のメタデータがない issue や pull request に検索を絞り込むことができます。 こうしたメタデータには、以下のようなものがあります:

* ラベル
* マイルストーン
* アサインされた人
* プロジェクト

| 修飾子        | 例
| ------------- | -------------
| `no:label` | [**priority no:label**](https://github.com/search?q=priority+no%3Alabel&type=Issues) は、ラベルを持たない "priority" という単語を含む issue や pull request と一致します。
| `no:milestone` | [**sprint no:milestone type:issue**](https://github.com/search?q=sprint+no%3Amilestone+type%3Aissue&type=Issues) は、"sprint" という単語を含むマイルストーンに関連付けられていない issue と一致します。
| `no:assignee` | [**important no:assignee language:java type:issue**](https://github.com/search?q=important+no%3Aassignee+language%3Ajava+type%3Aissue&type=Issues) は、"important" という単語を含む、担当者に関連付けられていない issue を Java リポジトリで一致します。
| `no:project` | [**build no:project**](https://github.com/search?utf8=%E2%9C%93&q=build+no%3Aproject&type=Issues) は、"build" という単語を含む、プロジェクト ボードに関連付けられていない issue と一致します。

## 参考資料

- 「[検索結果をソートする](/search-github/getting-started-with-searching-on-github/sorting-search-results/)」
