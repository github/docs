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
---

{% data reusables.search.you-can-search-globally %} 詳細については、「[GitHub での検索](/search-github/getting-started-with-searching-on-github/about-searching-on-github)」を参照してください。

これらのコード検索の修飾子を使わなければ、コードを検索できません。 リポジトリ、ユーザまたはコミットの特定の修飾子での検索は、コードを検索する場合、うまくいきません。

{% data reusables.search.syntax_tips %}

## コード検索での留意点

コードの検索は複雑なため、検索の実行には一定の制限があります。

{% ifversion fpt or ghes or ghec %}
- {% data reusables.search.required_login %}{% endif %}
- [フォーク](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)のコードは、親リポジトリより Star が多い場合に限って検索可能です。 親リポジトリより Star が少ないフォークは、コード検索ではインデックス**されません。** 親リポジトリより Star が多いフォークを検索結果に含めるためには、クエリに `fork:true` または `fork:only` を追加する必要があります。 詳細は「[フォーク内で検索する](/search-github/searching-on-github/searching-in-forks)」を参照してください。
- コード検索では、_デフォルトブランチ_のみインデックスされます。{% ifversion fpt or ghec %}
- 384 KB より小さいファイルのみ検索可能です。{% else %}* 5 MB より小さいファイルのみ検索可能です。
- 各ファイルの最初の 500 KB のみ検索可能です。{% endif %}
- Up to 4,000 private{% ifversion ghec or ghes or ghae %} and internal{% endif %} repositories are searchable. These 4,000 repositories will be the most recently updated of the first 10,000 private{% ifversion ghec or ghes or ghae %} and internal{% endif %} repositories that you have access to.
- 500,000 ファイル未満のリポジトリのみが検索可能です。{% ifversion fpt or ghec %}
- 昨年アクティビティがあった、または検索結果に返されたリポジトリのみが検索可能です。{% endif %}
- [`filename`](#search-by-filename) の検索を除き、ソースコードを検索する場合、常に少なくとも検索単語を 1 つ含める必要があります。 たとえば[`language:javascript`](https://github.com/search?utf8=%E2%9C%93&q=language%3Ajavascript&type=Code&ref=searchresults) は有効な検索ではありませんが、[`amazing language:javascript`](https://github.com/search?utf8=%E2%9C%93&q=amazing+language%3Ajavascript&type=Code&ref=searchresults) は有効な検索です。
- 検索結果では、同一ファイルから取り出される部分は 2 つまでです。そのファイルはさらに多くの部分でヒットしている可能性があります。
- クエリの一部として次のワイルドカード文字を用いることはできません: <code>. , : ; / \ ` ' " = * ! ? # $ & + ^ | ~ < > ( ) { } [ ] @</code>. 検索では、これらのシンボルは単に無視されます。

## ファイルの内容またはファイルパスで検索

`in` 修飾子によって、ソースコードファイル、ファイルパスまたはその両方の内容に検索を限定することができます。 この修飾子を省略した場合、ファイルの内容だけが検索されます。

| 修飾子       | サンプル                                                                                                                                      |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `in:file` | [**octocat in:file**](https://github.com/search?q=octocat+in%3Afile&type=Code) は、ファイルの内容に「octocat」が出現するコードにマッチします。                        |
| `in:path` | [**octocat in:path**](https://github.com/search?q=octocat+in%3Apath&type=Code) は、ファイルパスに「octocat」が含まれているコードにマッチします。                       |
|           | [**octocat in:file,path**](https://github.com/search?q=octocat+in%3Afile%2Cpath&type=Code) は、ファイルの内容またはファイルパスに「octocat」が含まれているコードにマッチします。 |

## ユーザまたは Organization のリポジトリ内の検索

特定のユーザまたは Organization のすべてのリポジトリのコードを検索するには、`user` 修飾子または `org` 修飾子を使います。 特定のリポジトリのコードを検索するには、`repo` 修飾子を使います。

| 修飾子                       | サンプル                                                                                                                                                                                             |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <code>user:<em>USERNAME</em></code> | [**user:defunkt extension:rb**](https://github.com/search?q=user%3Agithub+extension%3Arb&type=Code) は、末尾が <em>.rb</em> の @defunkt からのコードにマッチします。                                      |
| <code>org:<em>ORGNAME</em></code> | [**org:github extension:js**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+extension%3Ajs&type=Code) は、末尾が <em>.js</em> の GitHub からのコードにマッチします。                            |
| <code>repo:<em>USERNAME/REPOSITORY</em></code> | [**repo:mozilla/shumway extension:as**](https://github.com/search?q=repo%3Amozilla%2Fshumway+extension%3Aas&type=Code) は、末尾が <em>.as</em> の @mozilla の shumway project からのコードにマッチします。 |

## ファイルの場所での検索

リポジトリの特定の場所に表示されているソースコードを探すには、`path` 修飾子を使います。 リポジトリの root レベルにあるファイルを検索するには、`path:/` を使います。 または、ディレクトリやそのサブディレクトリ内に存在しているファイルを検索するには、ディレクトリ名もしくはディレクトリへのパスを明示してください。

| 修飾子                        | サンプル                                                                                                                                                                                                                                                                                                                               |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>path:/</code>  | [**octocat filename:readme path:/**](https://github.com/search?utf8=%E2%9C%93&q=octocat+filename%3Areadme+path%3A%2F&type=Code) は、リポジトリの root レベルに存在する 「octocat」という単語がある _readme_ ファイルにマッチします。                                                                                                                                     |
| <code>path:<em>DIRECTORY</em></code>  | [**form path:cgi-bin language:perl**](https://github.com/search?q=form+path%3Acgi-bin+language%3Aperl&type=Code) matches Perl files with the word "form" in the <em>cgi-bin</em> directory, or in any of its subdirectories.                                                                                                |
| <code>path:<em>PATH/TO/DIRECTORY</em></code> | [**`console path:app/public language:javascript`**](https://github.com/search?q=console+path%3A%22app%2Fpublic%22+language%3Ajavascript&type=Code) matches JavaScript files with the word "console" in the <em>app/public</em> directory, or in any of its subdirectories (even if they reside in <em>app/public/js/form-validators</em>). |

## 言語で検索

コードが書かれた言語で検索することができます。 The `language` qualifier can be the language name or alias. For a full list of supported languages with their names and aliases, see the [github/linguist repository](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml).

| 修飾子                        | サンプル                                                                                                                                                                         |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>language:<em>LANGUAGE</em></code> | [**element language:xml size:100**](https://github.com/search?q=element+language%3Axml+size%3A100&type=Code) は、XML 形式でちょうど 100 バイトであり「element」という単語があるコードにマッチします。            |
|                            | [**display language:scss**](https://github.com/search?q=display+language%3Ascss&type=Code) は、SCSS 形式の「display」という単語があるコードにマッチします。                                            |
|                            | [**org:mozilla language:markdown**](https://github.com/search?utf8=%E2%9C%93&q=org%3Amozilla+language%3Amarkdown&type=Code) は、Markdown 形式の @mozilla のすべてのリポジトリからのコードにマッチします。 |

## ファイルサイズで検索

コードが存在するファイルのサイズによってソースコードを検索するには、`size` 修飾子を使います。 `size` 修飾子は、ファイルのバイトサイズによって検索結果を仕分けするために、[不等号や範囲の修飾子](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)を使います。

| 修飾子                        | サンプル                                                                                                                                                                                                  |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>size:<em>n</em></code> | [**function size:&gt;10000 language:python**](https://github.com/search?q=function+size%3A%3E10000+language%3Apython&type=Code) は、10 KB より大きいファイルにある Python で記述された「function」という単語があるコードにマッチします。 |

## ファイル名で検索

`filename` 修飾子は、特定のファイル名を持つコードファイルにマッチします。 ファイルファインダーを使ってリポジトリにあるファイルを表示できます。 詳細は「[GitHub でファイルを検索する](/search-github/searching-on-github/finding-files-on-github)」を参照してください。

| 修飾子                        | サンプル                                                                                                                                                                                                             |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>filename:<em>FILENAME</em></code> | [**filename:linguist**](https://github.com/search?utf8=%E2%9C%93&q=filename%3Alinguist&type=Code) は、「linguist」と名付けられたファイルにマッチします。                                                                                |
|                            | [**filename:.vimrc commands**](https://github.com/search?q=filename%3A.vimrc+commands&type=Code) は、「commands」という単語がある *.vimrc* ファイルにマッチします。                                                                      |
|                            | [**filename:test_helper path:test language:ruby**](https://github.com/search?q=minitest+filename%3Atest_helper+path%3Atest+language%3Aruby&type=Code) は、*test* ディレクトリ内の *test_helper* と名付けられた Ruby のファイルにマッチします。 |

## ファイルの拡張子で検索

`extension` 修飾子は、特定のファイル拡張子のあるファイルにマッチします。

| 修飾子                        | サンプル                                                                                                                                                                                                             |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>extension:<em>EXTENSION</em></code> | [**form path:cgi-bin extension:pm**](https://github.com/search?q=form+path%3Acgi-bin+extension%3Apm&type=Code) は、<em>cgi-bin</em> にあって <em>.pm</em> というファイル拡張子を持ち 「form」という単語があるコードにマッチします。 |
|                            | [**icon size:>200000 extension:css**](https://github.com/search?utf8=%E2%9C%93&q=icon+size%3A%3E200000+extension%3Acss&type=Code) は、200 KB より大きく「icon」という単語を含み、末尾が .css のファイルにマッチします。                            |

## 参考リンク

- 「[検索結果をソートする](/search-github/getting-started-with-searching-on-github/sorting-search-results/)」
- "[フォーク内を検索する](/search-github/searching-on-github/searching-in-forks)"{% ifversion fpt or ghec %}
- "[ {% data variables.product.prodname_dotcom %} 上のコード間を移動する](/github/managing-files-in-a-repository/navigating-code-on-github)"{% endif %}
