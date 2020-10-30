---
title: コミットを比較する
redirect_from:
  - /articles/comparing-commits-across-time
  - /github/committing-changes-to-your-project/comparing-commits-across-time
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

ブランチ、タグ、コミット、日付にわたってリポジトリの状態を比較できます。 リポジトリの異なるバージョンを比較するには、リポジトリのパスに `/compare` を追加します。

比較がいかに強力か、[https://github.com/octocat/linguist/compare/master...octocat:master](https://github.com/octocat/linguist/compare/master...octocat:master) にある [Linguist リポジトリのフォーク](https://github.com/octocat/linguist)の比較ページを見ればわかります。

どのリポジトリの比較ビューにも、`base` と `compare` という 2 つのドロップダウンメニューがあります。

`base` は比較元、`compare` は比較先と考えてください。 比較中、[**Edit**] をクリックすることにより、`base` および `compare` の内容をいつでも変更できます。

### ブランチを比較する

compare の最も一般的な使い方は、新しいプルリクエストを開始するときなどに、ブランチを比較することです。 [新しいプルリクエスト](/articles/creating-a-pull-request)を開始するときは常に、ブランチ比較ビューに移動します。

ブランチを比較するには、ページ上部の `compare` ドロップダウンメニューで、ブランチの名前を選択してください。

2 つのブランチ間を比較した例については、[こちらをクリック](https://github.com/octocat/linguist/compare/master...octocat:an-example-comparison-for-docs)してください。

### タグを比較する

リリースタグを比較すると、前回のリリース以降のリポジトリへの変更が表示されます。 {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %} For more information, see "[Comparing releases](/github/administering-a-repository/comparing-releases)."{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}To compare tags, you can select a tag name from the `compare` drop-down menu at the top of the page.{% else %} Instead of typing a branch name, type the name of your tag in the `compare` drop down menu.{% endif %}

2 つのタグ間を比較する例については、[こちらをクリック](https://github.com/octocat/linguist/compare/v2.2.0...octocat:v2.3.3)してください。

### コミットを比較する

リポジトリやそのフォークの、2 つの任意のコミットを、 {% data variables.product.prodname_dotcom %}のツードット diff 比較によって比較することも可能です。

{% data variables.product.prodname_dotcom %} のツードット diff 比較で、2 つのコミット間または Git Object ID (OID) 間を素早く直接比較するには、リポジトリの [Comparing changes] ページの URL を編集してください。

{% data reusables.repositories.two-dot-diff-comparison-example-urls %}

他の比較方法に関する詳しい情報については、「[スリードットおよびツードット diff 比較](/articles/about-comparing-branches-in-pull-requests#three-dot-and-two-dot-git-diff-comparisons)」を参照してください。

### フォークを比較する

ベースリポジトリと、フォークした任意のリポジトリを比較できます。 これは、ユーザがプロジェクトにプルリクエストを実行したときに表示されるビューです。

別のリポジトリにあるブランチを比較するには、ブランチの名前の前にユーザ名を付けてください。 For example, by specifying `octocat:main` for `base` and `octo-org:main` for `compare`, you can compare the `main` branch of the repositories respectively owned by `octocat` and `octo-org`.

2 つのリポジトリ間を比較した例については、[こちらをクリック](https://github.com/octocat/linguist/compare/master...octo-org:master)してください。

### コミットを比較する

Git では、「1 つ前のコミット」を意味するショートカットとして、"`^`" を使います。

この記号を使って、1 つのコミットやブランチを、すぐ前のものと比較できます。 たとえば、`96d29b7^^^^^` は、5 つの `^` マークが付いているので、`96d29b7` の 5 つ前のコミットを示します。 `base` ブランチに `96d29b7^^^^^` と入力し、`compare` ブランチに `96d29b7` と入力すると、`96d29b7` の 5 つ前のコミットと `96d29b7` を比較します。

`^` 記号を使った比較の例については、[こちらをクリック](https://github.com/octocat/linguist/compare/octocat:96d29b7%5E%5E%5E%5E%5E...octocat:96d29b7)してください。

### 参考リンク

- [プルリクエストのベースブランチを変更する](/articles/changing-the-base-branch-of-a-pull-request)
