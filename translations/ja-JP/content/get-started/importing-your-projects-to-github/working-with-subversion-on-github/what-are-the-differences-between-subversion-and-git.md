---
title: Subversion と Git の違い
intro: Subversion (SVN) リポジトリは、Git リポジトリに似ています。ですが、プロジェクトのアーキテクチャの点からいくつかの違いがあります。
redirect_from:
  - /articles/what-are-the-differences-between-svn-and-git
  - /articles/what-are-the-differences-between-subversion-and-git
  - /github/importing-your-projects-to-github/what-are-the-differences-between-subversion-and-git
  - /github/importing-your-projects-to-github/working-with-subversion-on-github/what-are-the-differences-between-subversion-and-git
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Subversion & Git differences
---

## ディレクトリ構造

プロジェクトのそれぞれの *reference* やコミットのラベルスナップショットは、`trunk`、`branches`、`tags` などの特定のサブディレクトリにまとめられます。 たとえば、2 つの feature のある開発中の SVN プロジェクトは、このようになるでしょう:

      sample_project/trunk/README.md
      sample_project/trunk/lib/widget.rb
      sample_project/branches/new_feature/README.md
      sample_project/branches/new_feature/lib/widget.rb
      sample_project/branches/another_new_feature/README.md
      sample_project/branches/another_new_feature/lib/widget.rb

SVN のワークフローは以下のようになります:

* `trunk` ディレクトリは、プロジェクトの最新の安定したリリースを表します。
* アクティブな feature は、 `branches` の下のサブディレクトリで開発されます。
* feature が完了した時、feature ディレクトリは `trunk` にマージされ消去されます。

Git プロジェクトも、単一のディレクトリに保管されます。 ですが、Gitは、reference を特別な *.git* ディレクトリに保管するため、その詳細は隠れています。 たとえば、2 つの feature のある開発中の Git プロジェクトは、このようになるでしょう:

      sample_project/.git
      sample_project/README.md
      sample_project/lib/widget.rb

Git のワークフローは以下のようになります:

* Git リポジトリは、ブランチおよびタグのすべての履歴を、*.git* ディレクトリ内に保管します。
* 最新の安定したリリースは、デフォルトブランチに含まれています。
* アクティブな feature は、別のブランチで開発されます。
* feature が完了すると、フィーチャブランチはデフォルトブランチにマージされ、消去されます。

Git はディレクトリ構造は同じままですが、SVN とは違い、ファイルの変更内容はブランチベースです。

## サブプロジェクトを含める

*サブプロジェクト*は、メインプロジェクト外で開発され管理されるプロジェクトです。 一般的に、自分でコードを管理する必要なく、プロジェクトに何らかの機能を加えるためにサブプロジェクトをインポートします。 サブプロジェクトがアップデートされる度、すべてを最新にするためにプロジェクトと同期できます。

SVN では、サブプロジェクトは、*SVN external* と呼ばれます。 Git では、*Git サブモジュール*と呼ばれます。 コンセプトは似ていますが、Git サブモジュールは自動では最新状態のままにはなりません。プロジェクトに新しいバージョンを取り込むためには、明示的に要求する必要があります。

For more information, see "[Git Tools Submodules](https://git-scm.com/book/en/Git-Tools-Submodules)" in the Git documentation.

## 履歴を保存する

SVN は、プロジェクトの履歴は変更されないものとして設定されています。 Git は、[`git rebase`](/github/getting-started-with-github/about-git-rebase) のようなツールを使って、過去のコミットや変更を修正できます。

{% tip %}

[GitHub は Subversion クライアントをサポートしていますが、](/articles/support-for-subversion-clients)同じプロジェクトで Git と SVN の両方を使っている場合、予期しない結果となる可能性があります。 Git のコミット履歴を操作した場合、常に同じコミットが SVN の履歴に残ります。 機密データを誤ってコミットした場合、[Git の履歴から削除するために役立つ記事があります](/articles/removing-sensitive-data-from-a-repository).

{% endtip %}

## 参考リンク

- [GitHub がサポートする Subversion プロパティ](/articles/subversion-properties-supported-by-github)
- [_Git SCM_ ブックの「ブランチおよびマージ」](https://git-scm.com/book/en/Git-Branching-Basic-Branching-and-Merging)
- 「[GitHub にソースコードをインポートする](/articles/importing-source-code-to-github)」
- [ソースコードの移行ツール](/articles/source-code-migration-tools)
