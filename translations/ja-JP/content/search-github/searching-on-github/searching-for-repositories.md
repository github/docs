---
title: リポジトリを検索する
intro: '{% data variables.product.product_name %} 上のリポジトリを検索することができます。そして、これらのリポジトリを検索する修飾子を組み合わせることで、検索結果を絞ることができます。'
redirect_from:
  - /articles/searching-repositories
  - /articles/searching-for-repositories
  - /github/searching-for-information-on-github/searching-for-repositories
  - /github/searching-for-information-on-github/searching-on-github/searching-for-repositories
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
shortTitle: Search for repositories
ms.openlocfilehash: 9a464fbb327809b8af970c9a62c3a70d81c2c6b9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147527935'
---
{% data variables.product.product_location %} 全体でグローバルにリポジトリを検索できます。あるいは、特定の組織のみのリポジトリの検索もできます。 詳細については、「[{% data variables.product.prodname_dotcom %} での検索について](/search-github/getting-started-with-searching-on-github/about-searching-on-github)」を参照してください。

検索結果にフォークを含めるには、クエリに `fork:true` または `fork:only` を追加する必要があります。 詳細については、「[フォーク内を検索する](/search-github/searching-on-github/searching-in-forks)」を参照してください。

{% data reusables.search.syntax_tips %}

## リポジトリ名、説明、または README ファイルの内容で検索

`in` 修飾子によって、リポジトリ名、リポジトリの説明、リポジトリのトピック、README ファイルの内容や、これらの組み合わせに限定した検索ができます。 この修飾子を省略した場合は、リポジトリの名前、説明、トピックだけが検索されます。

| 修飾子  | 例
| ------------- | -------------
| `in:name` | [**jquery in:name**](https://github.com/search?q=jquery+in%3Aname&type=Repositories) は、リポジトリ名に「jquery」を含むリポジトリとマッチします。
| `in:description`  | [**jquery in:name,description**](https://github.com/search?q=jquery+in%3Aname%2Cdescription&type=Repositories) は、リポジトリ名または説明に「jquery」を含むリポジトリとマッチします。
| `in:topics`  | [**jquery in:topics**](https://github.com/search?q=jquery+in%3Atopics&type=Repositories) は、トピックとして "jquery" というラベルが付いているリポジトリとマッチします。
| `in:readme` | [**jquery in:readme**](https://github.com/search?q=jquery+in%3Areadme&type=Repositories) は、リポジトリの README ファイル内で「jquery」について言及するリポジトリとマッチします。
| `repo:owner/name` | [**repo:octocat/hello-world**](https://github.com/search?q=repo%3Aoctocat%2Fhello-world) は、特定のリポジトリ名とマッチします。

## リポジトリの内容で検索

`in:readme` 修飾子を使用すると、リポジトリの README ファイルの内容に基づいてリポジトリを検索できます。 詳細については、「[README について](/github/creating-cloning-and-archiving-repositories/about-readmes)」を参照してください。

`in:readme` は、リポジトリ内の特定の内容に基づいてリポジトリを検索する唯一の方法です。 リポジトリ内の特定のファイルや内容を検索するには、ファイルファインダー、またはコード固有の検索修飾子を使います。 詳細については、「[{% data variables.product.prodname_dotcom %} でのファイルの検索](/search-github/searching-on-github/finding-files-on-github)」および「[コードの検索](/search-github/searching-on-github/searching-code)」を参照してください。

| 修飾子  | 例
| ------------- | -------------
| `in:readme` | [**octocat in:readme**](https://github.com/search?q=octocat+in%3Areadme&type=Repositories) は、リポジトリの README ファイル内で「octocat」について言及するリポジトリとマッチします。

## ユーザまたは Organization のリポジトリ内の検索

特定のユーザーまたは組織が所有するすべてのリポジトリを検索するには、`user` 修飾子または `org` 修飾子を使います。

| 修飾子  | 例
| ------------- | -------------
| <code>user:<em>USERNAME</em></code> | [**user:defunkt forks:&gt;100**](https://github.com/search?q=user%3Adefunkt+forks%3A%3E%3D100&type=Repositories) は、フォークの数が 100 個を超える @defunkt のリポジトリとマッチします。
| <code>org:<em>ORGNAME</em></code> | [**org:github**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub&type=Repositories) は、GitHub のリポジトリとマッチします。

## リポジトリのサイズで検索

`size` 修飾子は、より大きい修飾子、より小さい修飾子、範囲の修飾子を使うことで、特定のサイズ (キロバイト) に合致するリポジトリを検索します。 詳細については、「[Understanding the search syntax](/github/searching-for-information-on-github/understanding-the-search-syntax)」 (検索構文の理解) を参照してください。

| 修飾子  | 例
| ------------- | -------------
| <code>size:<em>n</em></code> | [**size:1000**](https://github.com/search?q=size%3A1000&type=Repositories) は、ぴったり 1 MB のリポジトリとマッチします。
| | [**size:&gt;=30000**](https://github.com/search?q=size%3A%3E%3D30000&type=Repositories) は、30 MB 以上のリポジトリとマッチします。
| | [**size:&lt;50**](https://github.com/search?q=size%3A%3C50&type=Repositories) は、50 KB 未満のリポジトリとマッチします。
| | [**size:50...120**](https://github.com/search?q=size%3A50..120&type=Repositories) は、50 KB から 120 KB のリポジトリとマッチします。

## フォロワーの数の検索

より大きい修飾子、より小さい修飾子、範囲の修飾子とともに `followers` 修飾子を使用すると、リポジトリをフォローしているユーザーの数に基づいてリポジトリをフィルタリングできます。 詳細については、「[Understanding the search syntax](/github/searching-for-information-on-github/understanding-the-search-syntax)」 (検索構文の理解) を参照してください。

| 修飾子        | 例
| ------------- | -------------
| <code>followers:<em>n</em></code> | [**node followers:>=10000**](https://github.com/search?q=node+followers%3A%3E%3D10000) は、「node」という単語について言及する、10,000 人以上のフォロワーを持つリポジトリとマッチ一致します。
| | [**styleguide linter followers:1..10**](https://github.com/search?q=styleguide+linter+followers%3A1..10&type=Repositories) は、「styleguide linter」という単語について言及する、1 人から 10 人のフォロワーを持つリポジトリとマッチします。

## フォークの数で検索

`forks` 修飾子はより大きい修飾子、より小さい修飾子、範囲の修飾子を使って、リポジトリが持つべきフォークの数を指定します。 詳細については、「[Understanding the search syntax](/github/searching-for-information-on-github/understanding-the-search-syntax)」 (検索構文の理解) を参照してください。

| 修飾子  | 例
| ------------- | -------------
| <code>forks:<em>n</em></code> | [**forks:5**](https://github.com/search?q=forks%3A5&type=Repositories) は、フォークの数が 5 個のみのリポジトリとマッチします。
| | [**forks:&gt;=205**](https://github.com/search?q=forks%3A%3E%3D205&type=Repositories) は、フォークの数が 205 個以上のリポジトリとマッチします。
| | [**forks:&lt;=90**](https://github.com/search?q=forks%3A%3C90&type=Repositories) は、フォークの数が 90 個未満のリポジトリとマッチします。
| | [**forks:10..20**](https://github.com/search?q=forks%3A10..20&type=Repositories) は、フォークの数が 10 個から 20 個のリポジトリとマッチします。

## Star の数で検索

不等号や範囲の修飾子を使って、リポジトリの Star の数でリポジトリを検索できます。 詳細については、「[星を使用してリポジトリを保存する](/github/getting-started-with-github/saving-repositories-with-stars)」と「[検索構文について](/github/searching-for-information-on-github/understanding-the-search-syntax)」を参照してください。

| 修飾子  | 例
| ------------- | -------------
| <code>stars:<em>n</em></code> | [**stars:500**](https://github.com/search?utf8=%E2%9C%93&q=stars%3A500&type=Repositories) は、星の数がぴったり 500 個のリポジトリとマッチします。
| | [**stars:10..20 size:<1000**](https://github.com/search?q=stars%3A10..20+size%3A%3C1000&type=Repositories) は、星の数が 10 個から 20 個でサイズが 1000 KB 未満のリポジトリとマッチします。
| | [**stars:&gt;=500 fork:true language:php**](https://github.com/search?q=stars%3A%3E%3D500+fork%3Atrue+language%3Aphp&type=Repositories) は、PHP で記述された星の数が 500 個以上 (フォークの星を含む) のリポジトリとマッチします。

## リポジトリの作成時期や最終更新時期で検索

作成時期や最終更新時期でリポジトリをフィルタリングできます。 リポジトリの作成時期については、`created` 修飾子を使います。リポジトリの最終更新時期を確認するには、`pushed` 修飾子を使います。 `pushed` 修飾子は、リポジトリのいずれかのブランチに対する最近のコミット順でソートされた、リポジトリのリストを表示します。

どちらの修飾子も、パラメータとして日付を使います。 {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| 修飾子  | 例
| ------------- | -------------
| <code>created:<em>YYYY-MM-DD</em></code> | [**webos created:&lt;2011-01-01**](https://github.com/search?q=webos+created%3A%3C2011-01-01&type=Repositories) は、2011 年より前に作成された「webos」という単語を含むリポジトリとマッチします。
| <code>pushed:<em>YYYY-MM-DD</em></code> | [**css pushed:&gt;2013-02-01**](https://github.com/search?utf8=%E2%9C%93&q=css+pushed%3A%3E2013-02-01&type=Repositories) は、2013 年 1 月より後にプッシュされた「css」という単語を含むリポジトリとマッチします。
| | [**case pushed:&gt;=2013-03-06 fork:only**](https://github.com/search?q=case+pushed%3A%3E%3D2013-03-06+fork%3Aonly&type=Repositories) は、2013 年 3 月 6 日以降にプッシュされ「case」という単語を含む、フォークであるリポジトリとマッチします。

## 言語で検索

リポジトリのコードの言語に基づいてリポジトリを検索できます。

| 修飾子  | 例
| ------------- | -------------
| <code>language:<em>LANGUAGE</em></code> | [ **`rails language:javascript`**](https://github.com/search?q=rails+language%3Ajavascript&type=Repositories) は、JavaScript で記述された「rails」という単語を含むリポジトリとマッチします。

## Topics で検索

特定の Topics で分類されたすべてのリポジトリを見つけることができます。 詳細については、「[トピックを使用したリポジトリの分類](/github/administering-a-repository/classifying-your-repository-with-topics)」を参照してください。

| 修飾子  | 例
| ------------- | -------------
| <code>topic:<em>TOPIC</em></code> | [ **`topic:jekyll`**](https://github.com/search?utf8=%E2%9C%93&q=topic%3Ajekyll&type=Repositories&ref=searchresults) は、「Jekyll」というトピックで分類されたリポジトリとマッチします。

## Topics の数で検索

より大きい修飾子、より小さい修飾子、範囲の修飾子とともに `topics` 修飾子を使用すると、リポジトリに適用されたトピックの数でリポジトリを検索できます。 詳細については、「[トピックを使用したリポジトリの分類](/github/administering-a-repository/classifying-your-repository-with-topics)」および「[検索構文について](/github/searching-for-information-on-github/understanding-the-search-syntax)」を参照してください。

| 修飾子  | 例
| ------------- | -------------
| <code>topics:<em>n</em></code> | [**topics:5**](https://github.com/search?utf8=%E2%9C%93&q=topics%3A5&type=Repositories&ref=searchresults) は、トピックの数が 5 つのリポジトリとマッチします。
| | [**topics:>3**](https://github.com/search?utf8=%E2%9C%93&q=topics%3A%3E3&type=Repositories&ref=searchresults) は、トピックの数が 3 つを超えるリポジトリとマッチします。

{% ifversion fpt or ghes or ghec %}

## ライセンスで検索

リポジトリのライセンスの種類に基づいてリポジトリを検索できます。 特定のライセンスまたはライセンスファミリーによってリポジトリをフィルタリングするには、ライセンスキーワードを使う必要があります。 詳細については、「[リポジトリのライセンス](/github/creating-cloning-and-archiving-repositories/licensing-a-repository)」を参照してください。

| 修飾子  | 例
| ------------- | -------------
| <code>license:<em>LICENSE_KEYWORD</em></code> | [**license:apache-2.0**](https://github.com/search?utf8=%E2%9C%93&q=license%3Aapache-2.0&type=Repositories&ref=searchresults) は、Apache License 2.0 でライセンスされているリポジトリとマッチします。

{% endif %}

## リポジトリの可視性で検索

リポジトリの可視性に基づいて検索を絞り込むことができます。 詳細については、[リポジトリ](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)に関する説明を参照してください。

|修飾子| |例 | ------------- | -------------|{% ifversion fpt or ghes or ghec %} | `is:public` | [**is:public org:github**](https://github.com/search?q=is%3Apublic+org%3Agithub&type=Repositories) は、{% data variables.product.company_short %} が所有するパブリック リポジトリとマッチします。{% endif %}{% ifversion ghes or ghec or ghae %} | `is:internal` | [**is:internal test**](https://github.com/search?q=is%3Ainternal+test&type=Repositories) は、「test」という単語を含むアクセス可能な内部リポジトリとマッチします。{% endif %} | `is:private` | [**is:private pages**](https://github.com/search?q=is%3Aprivate+pages&type=Repositories) は、「pages」という単語を含むアクセス可能なプライベート リポジトリとマッチします。

{% ifversion fpt or ghec %}

## リポジトリがミラーかどうかで検索

リポジトリがミラーか、それ以外にホストされているかに基づいてリポジトリを検索できます。 詳細については、「[{% data variables.product.prodname_dotcom %} でオープンソースに貢献する方法を見つける](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github)」を参照してください。

| 修飾子  | 例
| ------------- | -------------
| `mirror:true` | [**mirror:true GNOME**](https://github.com/search?utf8=%E2%9C%93&q=mirror%3Atrue+GNOME&type=) は、ミラーであり、「GNOME」という単語を含むリポジトリとマッチします。
|  `mirror:false` | [**mirror:false GNOME**](https://github.com/search?utf8=%E2%9C%93&q=mirror%3Afalse+GNOME&type=) は、ミラーではなく、「GNOME」という単語を含むリポジトリとマッチします。

{% endif %}

## リポジトリがアーカイブされているかどうかで検索

アーカイブされているかどうかでリポジトリを検索できます。 詳細については、「[リポジトリのアーカイブ](/repositories/archiving-a-github-repository/archiving-repositories)」を参照してください。

| 修飾子  | 例
| ------------- | -------------
| `archived:true` | [**archived:true GNOME**](https://github.com/search?utf8=%E2%9C%93&q=archived%3Atrue+GNOME&type=) は、アーカイブされ、「GNOME」という単語を含むリポジトリとマッチします。
|  `archived:false` | [**archived:false GNOME**](https://github.com/search?utf8=%E2%9C%93&q=archived%3Afalse+GNOME&type=)は、アーカイブされず、「GNOME」という単語を含むリポジトリとマッチします。

{% ifversion fpt or ghec %}

## `good first issue` ラベルまたは `help wanted` ラベルに基づきイシューの数を検索する

`help-wanted-issues:>n` と `good-first-issues:>n`の修飾子を使用すると、`help-wanted` または `good-first-issue` のラベルが付いている最小限の数のイシューを含むリポジトリを検索できます。 詳細については、「[ラベルを使用してプロジェクトに役立つ貢献を促す](/communities/setting-up-your-project-for-healthy-contributions/encouraging-helpful-contributions-to-your-project-with-labels)」を参照してください。

| 修飾子  | 例
| ------------- | -------------
| `good-first-issues:>n` | [ **`good-first-issues:&gt;2 javascript`**](https://github.com/search?utf8=%E2%9C%93&q=javascript+good-first-issues%3A%3E2&type=) は、`good-first-issue` のラベルが付いたイシューの数が 2 つを超え、「javascript」という単語を含むリポジトリとマッチします。
| `help-wanted-issues:>n`|[**help-wanted-issues:&gt;4 react**](https://github.com/search?utf8=%E2%9C%93&q=react+help-wanted-issues%3A%3E4&type=) は、`help-wanted` のラベルが付いたイシューの数が 4 つを超え、「React」という単語を含むリポジトリとマッチします。

## スポンサーの能力に基づいて検索する

`is:sponsorable` 修飾子を使用すると、{% data variables.product.prodname_sponsors %} で所有者がスポンサーされるリポジトリを検索できます。 詳細については、「[{% data variables.product.prodname_sponsors %} について](/sponsors/getting-started-with-github-sponsors/about-github-sponsors)」を参照してください。

`has:funding-file` 修飾子を使用すると、FUNDING ファイルを含むリポジトリを検索できます。 詳細については、「[FUNDING ファイルについて](/github/administering-a-repository/managing-repository-settings/displaying-a-sponsor-button-in-your-repository#about-funding-files)」を参照してください。

| 修飾子  | 例
| ------------- | -------------
| `is:sponsorable` | [**is:sponsorable**](https://github.com/search?q=is%3Asponsorable&type=Repositories) は、所有者が {% data variables.product.prodname_sponsors %} プロファイルを持つリポジトリとマッチします。
| `has:funding-file` | [**has:funding-file**](https://github.com/search?q=has%3Afunding-file&type=Repositories) は、FUNDING.yml ファイルを含むリポジトリとマッチします。

{% endif %}

## 参考資料

- 「[検索結果をソートする](/search-github/getting-started-with-searching-on-github/sorting-search-results/)」
- 「[フォーク内を検索する](/search-github/searching-on-github/searching-in-forks)」
