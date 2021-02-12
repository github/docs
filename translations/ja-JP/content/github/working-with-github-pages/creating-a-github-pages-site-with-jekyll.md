---
title: Jekyll を使用して GitHub Pages サイトを作成する
intro: '新規または既存のリポジトリ内に、{% data variables.product.prodname_pages %} Jekyll を使用してサイトを作成できます。'
product: '{% data reusables.gated-features.pages %}'
redirect_from:
  - /articles/creating-a-github-pages-site-with-jekyll
permissions: 'リポジトリの管理者権限があるユーザは、Jekyll を使用して {% data variables.product.prodname_pages %} サイトにコンテンツを作成できます。'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### 必要な環境

Jekyll を使用して {% data variables.product.prodname_pages %} サイトを作成する前に、Jekyll と Git をインストールする必要があります。 詳しい情報については、Jekyll ドキュメンテーションの [Installation](https://jekyllrb.com/docs/installation/) および「[Git のセットアップ](/articles/set-up-git)」を参照してください。

{% data reusables.pages.recommend-bundler %}

{% data reusables.pages.jekyll-install-troubleshooting %}

### サイト用にリポジトリを作成する

{% data reusables.pages.new-or-existing-repo %}

{% data reusables.pages.private_pages_are_public_warning %}

{% data reusables.repositories.create_new %}
{% data reusables.repositories.owner-drop-down %}
{% data reusables.pages.create-repo-name %}
{% data reusables.repositories.choose-repo-visibility %}

### サイトを作成する

{% data reusables.pages.must-have-repo-first %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. リポジトリのローカルコピーがまだない場合、サイトのソースファイルを保存したい場所に移動します。_PARENT-FOLDER_ は、リポジトリを保存したいフォルダの名前に置き換えてください。
  ```shell
  $ cd <em>PARENT-FOLDER</em>
  ```
3. ローカルの Git リポジトリをまだ初期化していない場合は、初期化します。 _REPOSITORY-NAME_ は、リポジトリの名前に置き換えてください。
  ```shell
  $ git init <em>REPOSITORY-NAME</em>
  > Initialized empty Git repository in /Users/octocat/my-site/.git/
  # Creates a new folder on your computer, initialized as a Git repository
  ```
  4. ディレクトリをリポジトリに変更します。
  ```shell
  $ cd <em>REPOSITORY-NAME</em>
  # Changes the working directory
  ```
{% data reusables.pages.decide-publishing-source %}
{% data reusables.pages.navigate-publishing-source %}
  For example, if you chose to publish your site from the `docs` folder on the default branch, create and change directories to the `docs` folder.
 ```shell
 $ mkdir docs
 # Creates a new folder called docs
 $ cd docs
 ```
 サイトを `gh-pages` ブランチから公開する場合には、`gh-pages` ブランチを作成してチェックアウトします。
 ```shell
 $ git checkout --orphan gh-pages
 # Creates a new branch, with no history or contents, called gh-pages and switches to the gh-pages branch
 ```
 7. 新しい Jekyll サイトを作成するには、`jekyll new` コマンドを使用します。_VERSION_ は、Jekyll の現在の依存関係バージョンに置き換えてください。 詳しい情報については、{% data variables.product.prodname_pages %} サイトで「[依存関係のバージョン](https://pages.github.com/versions/)」を参照してください。
    - Bundler をインストールしている場合、以下のコマンドを入力します。
      ```shell
      $ bundle exec jekyll <em>VERSION</em> new .
      # Creates a Jekyll site in the current directory
      ```
    - Bundler をインストールしていない場合、以下のコマンドを入力します。
     ```shell
     $ jekyll <em>VERSION</em> new .
     # Creates a Jekyll site in the current directory
     ```
8. 作成された Gemfile を開き、Gemfile のコメントに従って {% data variables.product.prodname_pages %} を使用します。 ![Gemfile の更新手順](/assets/images/help/pages/gemfile-instructions.png)
9. `gem "github-pages"` の行を以下のように更新します。_VERSION_ は、`github-pages` の現在の依存関係バージョンに置き換えてください。 詳しい情報については、{% data variables.product.prodname_pages %} サイトで「[依存関係のバージョン](https://pages.github.com/versions/)」を参照してください。
```shell
gem "github-pages", "~> <em>VERSION</em>", group: :jekyll_plugins
```
10. Gemfile を保存して閉じます。
11. 必要に応じて、サイトをローカルでテストします。 詳しい情報については、「[Jekyll を使用して {% data variables.product.prodname_pages %} サイトをローカルでテストする](/articles/testing-your-github-pages-site-locally-with-jekyll)」を参照してください。
12. Add your {% data variables.product.product_name %} repository as a remote, replacing {% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}_HOSTNAME_ with your enterprise's hostname,{% endif %} _USER_ with the account that owns the repository{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %},{% endif %} and _REPOSITORY_ with the name of the repository.
```shell
{% if currentVersion == "free-pro-team@latest" %}
$ git remote add origin https://github.com/<em>USER</em>/<em>REPOSITORY</em>.git
{% else %}
$ git remote add origin https://<em>HOSTNAME</em>/<em>USER</em>/<em>REPOSITORY</em>.git
{% endif %}
```
13. リポジトリを {% data variables.product.product_name %} にプッシュします。 _BRANCH_ は、作業を行なっているブランチの名前に置き換えてください。
   ```shell
   $ git push -u origin <em>BRANCH</em>
   ```
{% data reusables.pages.configure-publishing-source %}
{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.pages.visit-site %}

{% data reusables.pages.admin-must-push %}

### 次のステップ

サイトに新しいページを追加したり、投稿したりするには、「[Jekyll を使用して {% data variables.product.prodname_pages %} サイトにコンテンツを追加する](/articles/adding-content-to-your-github-pages-site-using-jekyll)」を参照してください。

{% data reusables.pages.add-jekyll-theme %}詳しい情報については、「[Jekyll を使用して {% data variables.product.prodname_pages %} サイトにテーマを追加する](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll)」を参照してください。
