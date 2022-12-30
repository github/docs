---
title: ディスカッションを検索する
intro: '{% data variables.product.product_name %} 上のディスカッションを検索し、検索修飾子を使用して検索結果を絞り込むことができます。'
versions:
  feature: discussions
topics:
  - GitHub search
redirect_from:
  - /github/searching-for-information-on-github/searching-discussions
  - /github/searching-for-information-on-github/searching-on-github/searching-discussions
ms.openlocfilehash: 4a1224d05cd78a0b701e7bc2a9e93a1c5a837bcd
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '147410452'
---
## ディスカッションの検索について

{% data variables.product.product_name %} 全体にわたってグローバルにディスカッションを検索できます。あるいは、特定の Organization のみのディスカッションの検索もできます。 詳細については、「[{% data variables.product.prodname_dotcom %} での検索について](/github/searching-for-information-on-github/about-searching-on-github)」を参照してください。

{% data reusables.search.syntax_tips %}

## タイトル、本文、またはコメントで検索

`in` 修飾子を使うと、ディスカッションの検索を、タイトル、本文、コメントに制限できます。 修飾子を組み合わせて、タイトル、本文、またはコメントの組み合わせを検索することもできます。 `in` 修飾子を省略すると、{% data variables.product.product_name %} がタイトル、本文、コメントを検索します。

| 修飾子 | 例 |
| :- | :- |
| `in:title` | [**welcome in:title**](https://github.com/search?q=welcome+in%3Atitle&type=Discussions) は、タイトルに "welcome" が含まれるディスカッションが一致します。 |
| `in:body` | [**onboard in:title,body**](https://github.com/search?q=onboard+in%3Atitle%2Cbody&type=Discussions) は、タイトルまたは本文に "onboard" が含まれるディスカッションが一致します。 |
| `in:comments` | [**thanks in:comments**](https://github.com/search?q=thanks+in%3Acomment&type=Discussions) は、ディスカッションのコメントに "thanks" が含まれるディスカッションが一致します。 |

## ユーザまたは Organization のリポジトリ内の検索

特定のユーザーや Organization が所有する、すべてのリポジトリ内のディスカッションを検索するには、`user` 修飾子か `org` 修飾子を使います。 特定のリポジトリ内のディスカッションを検索するには、`repo` 修飾子を使います。

| 修飾子 | 例 |
| :- | :- |
| <code>user:<em>USERNAME</em></code> | [**user:octocat feedback**](https://github.com/search?q=user%3Aoctocat+feedback&type=Discussions) は、"feedback" という単語が含まれる、@octocat が所有するリポジトリからのディスカッションが一致します。 |
| <code>org:<em>ORGNAME</em></code> | [**org:github**](https://github.com/search?q=org%3Agithub&type=Discussions&utf8=%E2%9C%93) は、GitHub Organization が所有する、リポジトリ内のディスカッションが一致します。 |
| <code>repo:<em>USERNAME/REPOSITORY</em></code> | [**repo:nodejs/node created:<2021-01-01**](https://github.com/search?q=repo%3Anodejs%2Fnode+created%3A%3C2020-01-01&type=Discussions) は、2021 年 1 月より前に作成された @nodejs' Node.js ランタイム プロジェクトからのディスカッションが一致します。 |

## リポジトリの可視性によるフィルタ

`is` 修飾子を使用して、ディスカッションが含まれるリポジトリの可視性でフィルター処理できます。 詳細については、[リポジトリ](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)に関する説明を参照してください。

| 修飾子  | 例 | :- | :- |{% ifversion fpt or ghes or ghec %} | `is:public` | [**is:public**](https://github.com/search?q=is%3Apublic&type=Discussions) は、パブリック リポジトリ内のディスカッションが一致します。{% endif %}{% ifversion ghec %} | `is:internal` | [**is:internal**](https://github.com/search?q=is%3Ainternal&type=Discussions) は、内部リポジトリ内のディスカッションが一致します。{% endif %} | `is:private` | [**is:private tiramisu**](https://github.com/search?q=is%3Aprivate+tiramisu&type=Discussions) は、"tiramisu" という単語が含まれる、アクセス可能なプライベート リポジトリ内のディスカッションが一致します。

## 作者で検索

`author` 修飾子を使うと、特定のユーザーが作成したディスカッションが見つかります。

| 修飾子 | 例 |
| :- | :- |
| <code>author:<em>USERNAME</em></code> | [**cool author:octocat**](https://github.com/search?q=cool+author%3Aoctocat&type=Discussions) は、"cool" という単語が含まれる、@octocat が作成したディスカッションが一致します。 |
| | [**bootstrap in:body author:octocat**](https://github.com/search?q=bootstrap+in%3Abody+author%3Aoctocat&type=Discussions) は、本文に "bootstrap" という単語が含まれる、@octocat が作成したディスカッションが一致します。 |

## コメントした人で検索

`commenter` 修飾子を使うと、特定のユーザーからのコメントが含まれるディスカッションが見つかります。

| 修飾子 | 例 |
| :- | :- |
| <code>commenter:<em>USERNAME</em></code> | [**github commenter:becca org:github**](https://github.com/search?utf8=%E2%9C%93&q=github+commenter%3Abecca+org%3Agithub&type=Discussions) は、"github" という単語が含まれ、@becca によるコメントがある、GitHub が所有するリポジトリ内のディスカッションが一致します。

## ディスカッションに関与しているユーザで検索

`involves` 修飾子を使うと、特定のユーザーに関連するディスカッションを見つけることができます。 修飾子は、特定のユーザが作成したディスカッション、特定のユーザをメンションしたディスカッション、特定のユーザによるコメントを含むディスカッションを返します。 `involves` 修飾子は、1 人のユーザーを対象とした、`author` 修飾子、`mentions` 修飾子、`commenter` 修飾子の間の論理 OR です。

| 修飾子 | 例 |
| :- | :- |
| <code>involves:<em>USERNAME</em></code> | **[involves:becca involves:octocat](https://github.com/search?q=involves%3Abecca+involves%3Aoctocat&type=Discussions)** は、@becca または @octocat のいずれかに関連するディスカッションが一致します。
| | [**NOT beta in:body involves:becca**](https://github.com/search?q=NOT+beta+in%3Abody+involves%3Abecca&type=Discussions) は、本文に "beta" という単語が含まれていない、@becca が関連するディスカッションが一致します。

## コメントの数で検索

不等号や範囲の修飾子と一緒に `comments` 修飾子を使うと、コメントの数で検索できます。 詳細については、「[Understanding the search syntax](/github/searching-for-information-on-github/understanding-the-search-syntax)」 (検索構文の理解) を参照してください。

| 修飾子 | 例 |
| :- | :- |
| <code>comments:<em>n</em></code> | [**comments:&gt;100**](https://github.com/search?q=comments%3A%3E100&type=Discussions) は、コメントの数が 100 を超えるディスカッションが一致します。
| | [**comments:500..1000**](https://github.com/search?q=comments%3A500..1000&type=Discussions) は、コメントの数が 500 から 1,000 のディスカッションが一致します。

## ディスカッションの作成時期または最終更新時期で検索

作成時期または最終更新時期でディスカッションをフィルタできます。 ディスカッションの作成日については、`created` 修飾子を使います。ディスカッションの最終更新日を確認するには、`updated` 修飾子を使います。

両方の修飾子は、パラメータとして日付を使います。 {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| 修飾子 | 例 |
| :- | :- |
| <code>created:<em>YYYY-MM-DD</em></code> | [**created:>2020-11-15**](https://github.com/search?q=created%3A%3E%3D2020-11-15&type=discussions) は、2020 年 11 月 15 日より後に作成されたディスカッションが一致します。
| <code>updated:<em>YYYY-MM-DD</em></code> | [**weird in:body updated:>=2020-02-01**](https://github.com/search?q=weird+in%3Abody+updated%3A%3E%3D2020-12-01&type=Discussions) は、本文に "weird" という単語が含まれる、2020 年 12 月より後に更新されたディスカッションが一致します。

## 参考資料

- 「[検索結果をソートする](/search-github/getting-started-with-searching-on-github/sorting-search-results/)」
