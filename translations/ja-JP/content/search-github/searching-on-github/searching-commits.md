---
title: コミットを検索する
intro: '{% data variables.product.product_name %} 上のコミットを検索することができます。そして、これらのコミットを検索する修飾子を組み合わせることで、検索結果を絞ることができます。'
redirect_from:
  - /articles/searching-commits
  - /github/searching-for-information-on-github/searching-commits
  - /github/searching-for-information-on-github/searching-on-github/searching-commits
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
ms.openlocfilehash: 2dc35c96805e175bef1ed1ec1898d48e50de6042
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145118902'
---
{% data variables.product.product_name %} 全体にわたってグローバルにコミットを検索できます。あるいは、特定のリポジトリや Organization のコミットに限った検索もできます。 詳細については、「[{% data variables.product.company_short %} での検索について](/search-github/getting-started-with-searching-on-github/about-searching-on-github)」を参照してください。

コミットを検索すると、リポジトリの[既定のブランチ](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)のみが検索されます。

{% data reusables.search.syntax_tips %}

## コミットメッセージ内を検索

メッセージに特定の単語を含むコミットを検索できます。 たとえば、[**fix typo**](https://github.com/search?q=fix+typo&type=Commits) は、「fix」と「typo」という単語を含むコミットにマッチします。

## オーサーやコミッターで検索

`author` や `committer` の修飾子を使用すると、特定のユーザーによるコミットを発見できます。

| 修飾子  | 例
| ------------- | -------------
| <code>author:<em>USERNAME</em></code> | [**author:defunkt**](https://github.com/search?q=author%3Adefunkt&type=Commits) は、@defunkt が作成したコミットとマッチします。
| <code>committer:<em>USERNAME</em></code> | [**committer:defunkt**](https://github.com/search?q=committer%3Adefunkt&type=Commits) は、@defunkt がコミットしたコミットとマッチします。

`author-name` と `committer-name` の修飾子は、作成者またはコミッターの名前によるコミットとマッチします。

| 修飾子  | 例
| ------------- | -------------
| <code>author-name:<em>NAME</em></code> | [**author-name:wanstrath**](https://github.com/search?q=author-name%3Awanstrath&type=Commits) は、作成者名に「wanstrath」を含むコミットとマッチします。
| <code>committer-name:<em>NAME</em></code> | [**committer-name:wanstrath**](https://github.com/search?q=committer-name%3Awanstrath&type=Commits) は、コミッター名に「wanstrath」を含むコミットとマッチします。

`author-email` と `committer-email` の修飾子は、作成者またはコミッターの完全なメール アドレスによるコミットとマッチします。

| 修飾子  | 例
| ------------- | -------------
| <code>author-email:<em>EMAIL</em></code> | [ **author-email:chris@github.com**](https://github.com/search?q=author-email%3Achris%40github.com&type=Commits) は chris@github.com が作成したコミットとマッチします。
| <code>committer-email:<em>EMAIL</em></code> | [ **committer-email:chris@github.com**](https://github.com/search?q=committer-email%3Achris%40github.com&type=Commits) は chris@github.com がコミットしたコミットとマッチします。

## オーサー日付やコミット日付で検索

`author-date` と `committer-date` の修飾子を使用すると、指定した日付範囲内で作成またはコミットされたコミットとマッチできます。

{% data reusables.search.date_gt_lt %}

| 修飾子  | 例
| ------------- | -------------
| <code>author-date:<em>YYYY-MM-DD</em></code> | [**author-date:&lt;2016-01-01**](https://github.com/search?q=author-date%3A<2016-01-01&type=Commits) は、2016-01-01 より前に作成されたコミットとマッチします。
| <code>committer-date:<em>YYYY-MM-DD</em></code> | [**committer-date:&gt;2016-01-01**](https://github.com/search?q=committer-date%3A>2016-01-01&type=Commits) は、2016-01-01 より後にコミットされたコミットとマッチします。

## マージコミットのフィルタリング

`merge` 修飾子はマージ コミットをフィルタリングします。

| 修飾子  | 例
| ------------- | -------------
| `merge:true` | [**merge:true**](https://github.com/search?q=merge%3Atrue&type=Commits) はマージ コミットとマッチします。
| `merge:false` | [**merge:false**](https://github.com/search?q=merge%3Afalse&type=Commits) はマージ以外のコミットとマッチします。

## ハッシュで検索

`hash` 修飾子は、指定された SHA-1 ハッシュを含むコミットとマッチします。

| 修飾子  | 例
| ------------- | -------------
| <code>hash:<em>HASH</em></code> | [**hash:124a9a0ee1d8f1e15e833aff432fbb3b02632105**](https://github.com/github/gitignore/search?q=hash%3A124a9a0ee1d8f1e15e833aff432fbb3b02632105&type=Commits) は、ハッシュ `124a9a0ee1d8f1e15e833aff432fbb3b02632105` を含むコミットとマッチします。

## 親で検索

`parent` 修飾子は、親が指定された SHA-1 ハッシュを持つコミットとマッチします。

| 修飾子  | 例
| ------------- | -------------
| <code>parent:<em>HASH</em></code> | [**parent:124a9a0ee1d8f1e15e833aff432fbb3b02632105**](https://github.com/github/gitignore/search?q=parent%3A124a9a0ee1d8f1e15e833aff432fbb3b02632105&type=Commits&utf8=%E2%9C%93) は、ハッシュ `124a9a0ee1d8f1e15e833aff432fbb3b02632105` を含むコミットの子とマッチします。

## ツリーで検索

`tree` 修飾子は、指定された SHA-1 Git ツリー ハッシュを含むコミットとマッチします。

| 修飾子  | 例
| ------------- | -------------
| <code>tree:<em>HASH</em></code> | [**tree:99ca967**](https://github.com/github/gitignore/search?q=tree%3A99ca967&type=Commits) は、ツリー ハッシュ `99ca967` を参照するコミットとマッチします。

## ユーザまたは Organization のリポジトリ内の検索

特定のユーザーまたは組織が所有するすべてのリポジトリでコミットを検索するには、`user` または `org` 修飾子を使用します。 特定のリポジトリ内のコミットを検索するには、`repo` 修飾子を使用します。

| 修飾子  | 例
| ------------- | -------------
| <code>user:<em>USERNAME</em></code> | [**gibberish user:defunkt**](https://github.com/search?q=gibberish+user%3Adefunkt&type=Commits&utf8=%E2%9C%93) は、@defunkt が所有するリポジトリ内で「gibberish」という単語を含むコミット メッセージとマッチします。
| <code>org:<em>ORGNAME</em></code> | [**test org:github**](https://github.com/search?utf8=%E2%9C%93&q=test+org%3Agithub&type=Commits) は、@github が所有するリポジトリ内で「test」という単語を含むコミット メッセージとマッチします。
| <code>repo:<em>USERNAME/REPO</em></code> | [**language repo:defunkt/gibberish**](https://github.com/search?utf8=%E2%9C%93&q=language+repo%3Adefunkt%2Fgibberish&type=Commits) は、@defunkt の「gibberish」リポジトリ内で「language」という単語を含むコミット メッセージとマッチします。

## リポジトリの可視性によるフィルタ

`is` 修飾子は、指定した可視性を持つリポジトリからのコミットとマッチします。 詳細については、[リポジトリ](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)に関する説明を参照してください。

| 修飾子  | 例
| ------------- | ------------- |
{%- ifversion fpt or ghes or ghec %} | `is:public` | [**is:public**](https://github.com/search?q=is%3Apublic&type=Commits) はパブリック リポジトリへのコミットとマッチします。
{%- endif %} {%- ifversion ghes or ghec or ghae %} | `is:internal` | [**is:internal**](https://github.com/search?q=is%3Ainternal&type=Commits) は内部リポジトリへのコミットとマッチします。
{%- endif %} | `is:private` | [**is:private**](https://github.com/search?q=is%3Aprivate&type=Commits) はプライベート リポジトリへのコミットとマッチします。

## 参考資料

- 「[検索結果をソートする](/search-github/getting-started-with-searching-on-github/sorting-search-results/)」
