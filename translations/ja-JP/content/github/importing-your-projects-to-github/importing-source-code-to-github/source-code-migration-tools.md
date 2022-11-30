---
title: ソースコード移行ツール
intro: 外部ツールを使って、プロジェクトを GitHub に移動できます。
redirect_from:
  - /articles/importing-from-subversion/
  - /articles/source-code-migration-tools
  - /github/importing-your-projects-to-github/source-code-migration-tools
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---
{% if currentVersion == "free-pro-team@latest" %}

We recommend using [GitHub Importer](/articles/about-github-importer) to import projects from Subversion, Mercurial, Team Foundation Version Control (TFVC), or another Git repository. これらの外部ツールを使って、プロジェクトを Git に変換することもできます。

{% endif %}

### Subversion からインポートする

一般的な Subversion の環境では、複数のプロジェクトが単一のルートリポジトリに保管されます。 GitHub 上では、一般的に、それぞれのプロジェクトはユーザアカウントや Organization の別々の Git リポジトリにマップします。 次の場合、Subversion リポジトリのそれぞれの部分を別々の GitHub リポジトリにインポートすることをおすすめします。

* コラボレーターが、他の部分とは別のプロジェクトの部分をチェックアウトまたはコミットする必要がある場合
* それぞれの部分にアクセス許可を設定したい場合

Subversion リポジトリを Git にコンバートするには、これらのツールをおすすめします:

- [`git-svn`](https://git-scm.com/docs/git-svn)
- [svn2git](https://github.com/nirvdrum/svn2git)

### Mercurial からインポートする

Mercurial リポジトリを Git にコンバートするには、 [hg-fast-export](https://github.com/frej/fast-export) をおすすめします。

### Importing from TFVC

We recommend [git-tfs](https://github.com/git-tfs/git-tfs) for moving changes between TFVC and Git.

{% tip %}

**参考:** Git へのプロジェクトの変換が完了した後、[{% data variables.product.prodname_dotcom %} にプッシュできます。](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/)

{% endtip %}

{% if currentVersion == "free-pro-team@latest" %}

### 参考リンク

- 「[GitHub Importer について](/articles/about-github-importer)」
- [GitHub Importerでのリポジトリのインポート](/articles/importing-a-repository-with-github-importer)
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %})

{% endif %}
