---
title: コードスニペットへのパーマリンクを作成する
intro: 特定バージョンのファイルやプルリクエストにある特定のコード行やコード行の範囲へのパーマリンクを作成できます。
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/creating-a-permanent-link-to-a-code-snippet
  - /articles/creating-a-permanent-link-to-a-code-snippet
  - /github/managing-your-work-on-github/creating-a-permanent-link-to-a-code-snippet
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Permanent links to code
---

## Linking to code

このタイプのパーマリンクは、元々作成された場所であるリポジトリでのみ、コードスニペットとして表示されます。 それ以外のリポジトリでは、パーマリンクのコードスニペットは URL として表示されます。

![コメントに表示されたコードスニペット](/assets/images/help/repository/rendered-code-snippet.png)

{% tip %}

**ヒント:** ファイル全体に対してパーマリンクを作成する方法は、「[ファイルにパーマリンクを張る](/articles/getting-permanent-links-to-files)」を参照してください。

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
2. リンクしたいコードを特定します:
    - ファイルからコードにリンクするには、対象のファイルに移動します。
    - プルリクエストからコードにリンクするには、対象のプルリクエストに移動して {% octicon "diff" aria-label="The file diff icon" %}[**Files changed**] をクリックします。 次に、コメントに含めたいコードを持っているファイルを探し、[**View**] をクリックします。
{% data reusables.repositories.choose-line-or-range %}
4. 行または行範囲の左にある {% octicon "kebab-horizontal" aria-label="The horizontal kebab octicon" %}をクリックします。 ドロップダウンメニューで [**Copy permalink**] をクリックします。 ![選択された行のパーマリンクをコピーするオプションのあるケバブメニュー](/assets/images/help/repository/copy-permalink-specific-line.png)
5. コードスニペットにリンクさせたい会話に移動します。
6. コメントにパーマリンクを貼り付け、[**Comment**] をクリックします。 ![同じリポジトリ内のコメントに貼り付けられたパーマリンク](/assets/images/help/repository/code-snippet-permalink-in-comment.png)

## Linking to Markdown

You can link to specific lines in Markdown files by loading the Markdown file without Markdown rendering. To load a Markdown file without rendering, you can use the `?plain=1` parameter at the end of the url for the file. For example, `github.com/<organization>/<repository>/blob/<branch_name>/README.md?plain=1`.

You can link to a specific line in the Markdown file the same way you can in code. Append `#L` with the line number or numbers at the end of the url. For example, `github.com/<organization>/<repository>/blob/<branch_name>/README.md?plain=1#L14` will highlight line 14 in the plain README.md file.

## 参考リンク

- "[Issue の作成](/articles/creating-an-issue/)"
- "[コードから Issue を開く](/articles/opening-an-issue-from-code/)"
- 「[プルリクエスト内の変更をレビューする](/articles/reviewing-changes-in-pull-requests/)」
