---
title: ファイルへのパーマリンクを取得する
intro: '{% data variables.product.product_location %} でファイルを表示する際に y キーを押すと、URL を、表示されているファイルと完全に同じバージョンへのパーマリンクへと更新できます。'
redirect_from:
  - /articles/getting-a-permanent-link-to-a-file/
  - /articles/how-do-i-get-a-permanent-link-from-file-view-to-permanent-blob-url/
  - /articles/getting-permanent-links-to-files
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% tip %}

**参考**: {% data variables.product.product_name %} のすべてのページで [?] を押すと、使用可能なキーボードのショートカットすべてを確認できます。

{% endtip %}

### ファイルのビューにはブランチの最新バージョンが表示されます

{% data variables.product.product_location %} でファイルを表示する際、通常はブランチの現在の head でのバージョンが表示されます。  例:

* [https://github.com/github/hubot/blob/**master**/README.md](https://github.com/github/hubot/blob/master/README.md)

GitHub の `hubot` リポジトリを参照し、`master` ブランチの `README.md` ファイルの最新バージョンが表示されます。

ブランチのヘッドにあるファイルのバージョンは、新たなコミットが行われるたびに変更される場合があるため、通常の URL をコピーすると、後で他のユーザが見るときはファイルのコンテンツが同一ではない場合があります。

### <kbd>y</kbd> を押して特定のコミット内のファイルへのパーマリンクを取得

表示しているファイルの特定のバージョンへのパーマリンクについては、URL 内のブランチ名 (前述の例の `master` 部など) を使用する代わりに、コミット ID を配置します。  これにより、そのコミットの完全に同じバージョンに永続的にリンクされます。  例:

* [https://github.com/github/hubot/blob/**ed25584f5ac2520a6c28547ffd0961c7abd7ea49**/README.md](https://github.com/github/hubot/blob/ed25584f5ac2520a6c28547ffd0961c7abd7ea49/README.md)

`master` を特定のコミット ID で置き換えると、ファイルのコンテンツは変更されません。

コミット SHA を手作業で探すのは不便ですが、ショートカットとして <kbd>y</kbd> を押すと、URL がパーマリンクのバージョンに自動で更新されます。  その後、URL をコピーし、共有すると、自分が表示したのとまったく同じものが表示されます。

{% tip %}

**参考**: ブランチ名、特定のコミット SHA、タグなど、URL 内のコミットへと解決できる任意の識別子を配置できます。

{% endtip %}

### コードスニペットへのパーマリンクを作成する

特定バージョンのファイルやプルリクエストにある特定のコード行やコード行の範囲へのパーマリンクを作成できます。 詳細は「[コードスニペットへのパーマリンクを作成する](/articles/creating-a-permanent-link-to-a-code-snippet/)」を参照してください。

### 参考リンク

- 「[GitHub リポジトリをアーカイブする](/articles/archiving-a-github-repository)」
