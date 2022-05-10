---
title: ソースコード移行ツール
intro: 外部ツールを使って、プロジェクトを GitHub に移動できます。
redirect_from:
  - /articles/importing-from-subversion
  - /articles/source-code-migration-tools
  - /github/importing-your-projects-to-github/source-code-migration-tools
  - /github/importing-your-projects-to-github/importing-source-code-to-github/source-code-migration-tools
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Code migration tools
---

{% ifversion fpt or ghec %}

We recommend using [GitHub Importer](/articles/about-github-importer) to import projects from Subversion, Mercurial, Team Foundation Version Control (TFVC), or another Git repository. これらの外部ツールを使って、プロジェクトを Git に変換することもできます。

{% endif %}

## Subversion からインポートする

一般的な Subversion の環境では、複数のプロジェクトが単一のルートリポジトリに保管されます。 On GitHub, each of these projects will usually map to a separate Git repository for a personal account or organization. 次の場合、Subversion リポジトリのそれぞれの部分を別々の GitHub リポジトリにインポートすることをおすすめします。

* コラボレーターが、他の部分とは別のプロジェクトの部分をチェックアウトまたはコミットする必要がある場合
* それぞれの部分にアクセス許可を設定したい場合

Subversion リポジトリを Git にコンバートするには、これらのツールをおすすめします:

- [`git-svn`](https://git-scm.com/docs/git-svn)
- [svn2git](https://github.com/nirvdrum/svn2git)

## Mercurial からインポートする

Mercurial リポジトリを Git にコンバートするには、 [hg-fast-export](https://github.com/frej/fast-export) をおすすめします。

## Importing from TFVC

We recommend [git-tfs](https://github.com/git-tfs/git-tfs) for moving changes between TFVC and Git.

For more information about moving from TFVC (a centralized version control system) to Git, see "[Plan your Migration to Git](https://docs.microsoft.com/devops/develop/git/centralized-to-git)" from the Microsoft docs site.

{% tip %}

**ヒント:** Git へのプロジェクトの変換が完了した後、[{% data variables.product.prodname_dotcom %} にプッシュできます。](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/)

{% endtip %}

{% ifversion fpt or ghec %}

## 参考リンク

- 「[GitHub Importer について](/articles/about-github-importer)」
- [GitHub Importerでのリポジトリのインポート](/articles/importing-a-repository-with-github-importer)
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %})

{% endif %}
