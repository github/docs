---
title: コードスニペットへのパーマリンクを作成する
intro: 特定バージョンのファイルやプルリクエストにある特定のコード行やコード行の範囲へのパーマリンクを作成できます。
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/creating-a-permanent-link-to-a-code-snippet
  - /articles/creating-a-permanent-link-to-a-code-snippet
  - /github/managing-your-work-on-github/creating-a-permanent-link-to-a-code-snippet
  - /github/writing-on-github/working-with-advanced-formatting/creating-a-permanent-link-to-a-code-snippet
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Permanent links to code
ms.openlocfilehash: d1c363eba2a45558f3fdc9b55025309544ef677b
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145068627'
---
## コードへのリンク

このタイプのパーマリンクは、元々作成された場所であるリポジトリでのみ、コードスニペットとして表示されます。 それ以外のリポジトリでは、パーマリンクのコードスニペットは URL として表示されます。

![コメントに表示されたコードスニペット](/assets/images/help/repository/rendered-code-snippet.png)

{% tip %}

**ヒント:** ファイル全体のパーマリンクを作成するには、「[Getting permanent links to files (ファイルへの永続的リンクを取得する)](/articles/getting-permanent-links-to-files)」を参照してください。

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
2. リンクしたいコードを特定します:
    - ファイルからコードにリンクするには、対象のファイルに移動します。
    - pull request からコードにリンクするには、対象の pull request に移動して {% octicon "diff" aria-label="The file diff icon" %} **[Files changed]\(変更されたファイル\)** をクリックします。 次に、コメントに取り込むコードが含まれているファイルを参照し、 **[View]\(表示\)** をクリックします。
{% data reusables.repositories.choose-line-or-range %}
4. 行または行範囲の左にある {% octicon "kebab-horizontal" aria-label="The horizontal kebab octicon" %} をクリックします。 ドロップダウン メニューの **[Copy permalink]/(パーマリンクのコピー/)** をクリックします。
  ![選択された行のパーマリンクをコピーするオプションのあるケバブメニュー](/assets/images/help/repository/copy-permalink-specific-line.png)
5. コードスニペットにリンクさせたい会話に移動します。
6. パーマリンクをコメントに貼り付け、 **[Comment]\(コメント\)** をクリックします。
  ![同じリポジトリ内のコメントに貼り付けられたパーマリンク](/assets/images/help/repository/code-snippet-permalink-in-comment.png)

## Markdown へのリンク

Markdown のレンダリングなしで Markdown ファイルを読み込むことにより、Markdown ファイルの特定の行にリンクすることができます。 レンダリングなしで Markdown ファイルを読み込むには、ファイルの URL の最後で `?plain=1` パラメーターを使います。 たとえば、「 `github.com/<organization>/<repository>/blob/<branch_name>/README.md?plain=1` 」のように入力します。

コード内で行うのと同じ方法で、Markdown ファイルの特定の行にリンクすることができます。 URL の最後に、行番号 (複数可) と一緒に `#L` を追加します。 たとえば、`github.com/<organization>/<repository>/blob/<branch_name>/README.md?plain=1#L14` はプレーンな README.md ファイルの 14 行目を強調表示します。

## 参考資料

- [Creating an issue (issue の作成)](/articles/creating-an-issue/)
- [コードから issue を開く](/articles/opening-an-issue-from-code/)
- [Reviewing changes in pull requests (pull request での変更をレビューする)](/articles/reviewing-changes-in-pull-requests/)
