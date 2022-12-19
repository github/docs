---
title: コードの検索
intro: '{% data variables.product.product_name %} 上のコードを検索することができます。そして、これらのコードを検索する修飾子を組み合わせることで、検索結果を絞ることができます。'
redirect_from:
  - /articles/searching-code
  - /github/searching-for-information-on-github/searching-files-in-a-repository-for-exact-matches
  - /github/searching-for-information-on-github/searching-code-for-exact-matches
  - /github/searching-for-information-on-github/searching-code
  - /github/searching-for-information-on-github/searching-on-github/searching-code
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
ms.openlocfilehash: 125c17f1050cdb6d1b1d5a3d58d3e513eddce40f
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160220'
---
{% ifversion github-code-search %} {% note %}

  **注:** {% data reusables.search.classic-search-code-search-note %}

  {% endnote %} {% endif %}

{% data reusables.search.you-can-search-globally %} 詳細については、「[GitHub での検索について](/search-github/getting-started-with-searching-on-github/about-searching-on-github)」を参照してください。

これらのコード検索の修飾子を使わなければ、コードを検索できません。 リポジトリ、ユーザまたはコミットの特定の修飾子での検索は、コードを検索する場合、うまくいきません。

{% data reusables.search.syntax_tips %}

## コード検索での留意点

コードの検索は複雑なため、検索の実行には一定の制限があります。

{% ifversion fpt or ghes or ghec %}
- {% data reusables.search.required_login %}{% endif %}
- [フォーク](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)内のコードは、フォークの星の数が親リポジトリよりも多い場合にのみ検索できます。 親リポジトリより星の数が少ないフォークは、コード検索ではインデックス **されません**。 検索結果に親よりも星の数が多いフォークを含めるには、クエリに `fork:true` または `fork:only` を追加する必要があります。 詳細については、「[フォーク内を検索する](/search-github/searching-on-github/searching-in-forks)」を参照してください。
- コード検索用にインデックスが作成されるのは "_既定のブランチ_" だけです。{% ifversion fpt or ghec %}
- 384 KB より小さいファイルのみ検索可能です。{% else %}* 5 MB より小さいファイルのみ検索可能です。
- 各ファイルの最初の 500 KB のみ検索可能です。{% endif %}
- 最大 4,000 個のプライベート {% ifversion ghec or ghes or ghae %}リポジトリと内部{% endif %} リポジトリが検索可能です。 これら 4,000 個のリポジトリは、アクセス権がある最初の 10,000 個のプライベート {% ifversion ghec or ghes or ghae %}リポジトリと内部{% endif %}リポジトリのうち、最近更新されたものです。
- ファイル数が 500,000 未満のリポジトリのみ検索可能です。{% ifversion fpt or ghec %}
- 昨年アクティビティがあった、または検索結果に返されたリポジトリのみが検索可能です。{% endif %}
- [`filename`](#search-by-filename) で検索する場合を除き、ソースコードを検索する際には、必ず 1 つ以上の検索用語を含めなければなりません。 たとえば、[`language:javascript`](https://github.com/search?utf8=%E2%9C%93&q=language%3Ajavascript&type=Code&ref=searchresults) という検索は無効ですが、[`amazing language:javascript`](https://github.com/search?utf8=%E2%9C%93&q=amazing+language%3Ajavascript&type=Code&ref=searchresults) は有効です。
- 検索結果では、同一ファイルから取り出される部分は 2 つまでです。そのファイルはさらに多くの部分でヒットしている可能性があります。
- 検索クエリの一部として次のワイルドカード文字を用いることはできません: <code>. , : ; / \ ` ' " = * ! ? # $ & + ^ | ~ < > ( ) { } [ ] @</code>。 検索では、これらのシンボルは単に無視されます。

## ファイルの内容またはファイルパスで検索

`in` 修飾子によって、ソースコード ファイル、ファイル パスまたはその両方の内容に検索を限定することができます。 この修飾子を省略した場合、ファイルの内容だけが検索されます。

| 修飾子  | 例
| ------------- | -------------
| `in:file` | [**octocat in:file**](https://github.com/search?q=octocat+in%3Afile&type=Code) は、ファイルの内容に「octocat」が表示されるコードとマッチします。
| `in:path` | [**octocat in:path**](https://github.com/search?q=octocat+in%3Apath&type=Code) は、ファイル パスに「octocat」が表示されるコードとマッチします。
| | [**octocat in:file,path**](https://github.com/search?q=octocat+in%3Afile%2Cpath&type=Code) は、ファイルの内容またはパスに「octocat」が表示されるコードとマッチします。

## ユーザまたは Organization のリポジトリ内の検索

特定のユーザーまたは組織が所有するすべてのリポジトリのコードを検索するには、`user` 修飾子または `org` 修飾子を使います。 特定のリポジトリのコードを検索するには、`repo` 修飾子を使います。

| 修飾子  | 例
| ------------- | -------------
| <code>user:<em>USERNAME</em></code> | [**user:defunkt extension:rb**](https://github.com/search?q=user%3Agithub+extension%3Arb&type=Code) は、<em>.rb</em> で終わる @defunkt のコードとマッチします。
| <code>org:<em>ORGNAME</em></code> |[**org:github extension:js**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+extension%3Ajs&type=Code) は、<em>.js</em> で終わる GitHub のコードとマッチします。
| <code>repo:<em>USERNAME/REPOSITORY</em></code> | [**repo:mozilla/shumway extension:as**](https://github.com/search?q=repo%3Amozilla%2Fshumway+extension%3Aas&type=Code) は、<em>.as</em> で終わる @mozilla の shumway プロジェクトのコードとマッチします。

## ファイルの場所での検索

リポジトリの特定の場所に表示されているソースコードを探すには、`path` 修飾子を使います。 リポジトリのルート レベルにあるファイルを検索するには、`path:/` を使います。 または、ディレクトリやそのサブディレクトリ内に存在しているファイルを検索するには、ディレクトリ名もしくはディレクトリへのパスを明示してください。

| 修飾子  | 例
| ------------- | -------------
| <code>path:/</code> | [**octocat filename:readme path:/**](https://github.com/search?utf8=%E2%9C%93&q=octocat+filename%3Areadme+path%3A%2F&type=Code) は、リポジトリのルート レベルにある「octocat」という単語を含む _readme_ ファイルとマッチします。
| <code>path:<em>DIRECTORY</em></code> | [**form path:cgi-bin language:perl**](https://github.com/search?q=form+path%3Acgi-bin+language%3Aperl&type=Code) は、<em>cgi-bin</em> ディレクトリまたはそのサブディレクトリ内の「form」という単語を含む Perl ファイルとマッチします。
| <code>path:<em>PATH/TO/DIRECTORY</em></code> | [ **`console path:app/public language:javascript`**](https://github.com/search?q=console+path%3A%22app%2Fpublic%22+language%3Ajavascript&type=Code) は、<em>app/public</em> ディレクトリまたはそのサブディレクトリ (<em>app/public/js/form-validators</em> を含む) 内の「console」という単語を含む JavaScript ファイルとマッチします。

## 言語で検索

コードが書かれた言語で検索することができます。 `language` 修飾子には、言語名またはエイリアスを指定できます。 サポートされている言語とその名前とエイリアスの完全な一覧については、[github/linguist リポジトリ](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml)を参照してください。

| 修飾子  | 例
| ------------- | -------------
| <code>language:<em>LANGUAGE</em></code> | [**element language:xml size:100**](https://github.com/search?q=element+language%3Axml+size%3A100&type=Code) は、XML としてマークされ、ぴったり 100 バイトの「element」という単語を含むコードとマッチします。
| | [**display language:scss**](https://github.com/search?q=display+language%3Ascss&type=Code) は、SCSS としてマークされ、「display」という単語を含むコードとマッチします。
| | [**org:mozilla language:markdown**](https://github.com/search?utf8=%E2%9C%93&q=org%3Amozilla+language%3Amarkdown&type=Code) は、Markdown としてマークされているすべての @mozilla のリポジトリのコードとマッチします。

## ファイルサイズで検索

コードが存在するファイルのサイズによってソースコードを検索するには、`size` 修飾子を使います。 `size` 修飾子は[より大きい修飾子、より小さい修飾子、および範囲の修飾子](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)を使用して、コードが見つかったファイルのバイト サイズに基づいて結果をフィルタリングします。

| 修飾子  | 例
| ------------- | -------------
| <code>size:<em>n</em></code> | [**function size:&gt;10000 language:python**](https://github.com/search?q=function+size%3A%3E10000+language%3Apython&type=Code) は、10 KB を超えるファイル内の Python で記述された「function」という単語を含むコードとマッチします。

## ファイル名で検索

`filename` 修飾子は、特定のファイル名を持つコード ファイルとマッチします。 ファイルファインダーを使ってリポジトリにあるファイルを表示できます。 詳細については、「[GitHub でのファイルの検索](/search-github/searching-on-github/finding-files-on-github)」を参照してください。

| 修飾子  | 例
| ------------- | -------------
| <code>filename:<em>FILENAME</em></code> | [**filename:linguist**](https://github.com/search?utf8=%E2%9C%93&q=filename%3Alinguist&type=Code) は、「linguist」という名前のファイルとマッチします。
| | [**filename:.vimrc commands**](https://github.com/search?q=filename%3A.vimrc+commands&type=Code) は、「commands」という単語を含む *.vimrc* ファイルとマッチします。
| | [**filename:test_helper path:test language:ruby**](https://github.com/search?q=minitest+filename%3Atest_helper+path%3Atest+language%3Aruby&type=Code) は、*test* ディレクトリ内の *test_helper* という名前の Ruby ファイルとマッチします。

## ファイルの拡張子で検索

`extension` 修飾子は、特定のファイル拡張子を持つコード ファイルとマッチします。

| 修飾子  | 例
| ------------- | -------------
| <code>extension:<em>EXTENSION</em></code> | [**form path:cgi-bin extension:pm**](https://github.com/search?q=form+path%3Acgi-bin+extension%3Apm&type=Code) は、<em>cgi-bin</em> の下の「form」という単語を含み <em>.pm</em> というファイル拡張子を持つコードとマッチします。
| | [**icon size:>200000 extension:css**](https://github.com/search?utf8=%E2%9C%93&q=icon+size%3A%3E200000+extension%3Acss&type=Code) は、.css で終わり「icon」という単語を含む 200 KB を超えるファイルとマッチします。

## 参考資料

- 「[検索結果をソートする](/search-github/getting-started-with-searching-on-github/sorting-search-results/)」
- 「[フォーク内を検索する](/search-github/searching-on-github/searching-in-forks)」{% ifversion fpt or ghec %}
- 「[{% data variables.product.prodname_dotcom %} のナビゲーション コード](/github/managing-files-in-a-repository/navigating-code-on-github)」{% endif %}
