---
title: Jekyll を使用して GitHub Pages サイトを作成する
intro: '新規または既存のリポジトリ内に、{% data variables.product.prodname_pages %} Jekyll を使用してサイトを作成できます。'
product: '{% data reusables.gated-features.pages %}'
redirect_from:
  - /articles/creating-a-github-pages-site-with-jekyll
  - /github/working-with-github-pages/creating-a-github-pages-site-with-jekyll
permissions: 'People with admin permissions for a repository can create a {% data variables.product.prodname_pages %} site with Jekyll.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Create site with Jekyll
ms.openlocfilehash: 409b2d1e21f89471e7ad92f790bc7ac67e903a62
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145137900'
---
{% data reusables.pages.org-owners-can-restrict-pages-creation %}

## 前提条件

Jekyll を使用して {% data variables.product.prodname_pages %} サイトを作成する前に、Jekyll と Git をインストールする必要があります。 詳細については、Jekyll ドキュメントの「[インストール](https://jekyllrb.com/docs/installation/)」と「[Git の設定](/articles/set-up-git)」を参照してください。

{% data reusables.pages.recommend-bundler %}

{% data reusables.pages.jekyll-install-troubleshooting %}

## サイト用にリポジトリを作成する

{% data reusables.pages.new-or-existing-repo %}

{% data reusables.repositories.create_new %} {% data reusables.repositories.owner-drop-down %} {% indented_data_reference reusables.pages.emu-org-only spaces=3 %} {% data reusables.pages.create-repo-name %} {% data reusables.repositories.choose-repo-visibility %}

## サイトを作成する

{% data reusables.pages.must-have-repo-first %}

{% data reusables.pages.private_pages_are_public_warning %}

{% data reusables.command_line.open_the_multi_os_terminal %}
1. リポジトリのローカル コピーがまだない場合は、サイトのソース ファイルを保存したい場所に移動して、_PARENT-FOLDER_ を、リポジトリのフォルダーを含めるフォルダーで置き換えます。
  ```shell
  $ cd <em>PARENT-FOLDER</em>
  ```
1. ローカルの Git リポジトリをまだ初期化していない場合は、_REPOSITORY-NAME_ をリポジトリの名前で置き換えて初期化します。
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
{% data reusables.pages.decide-publishing-source %} {% data reusables.pages.navigate-publishing-source %} たとえば、既定ブランチの `docs` フォルダーからサイトを公開することを選択した場合は、`docs` フォルダーを作成して、そこに移動します。
 ```shell
 $ mkdir docs
 # Creates a new folder called docs
 $ cd docs
 ```
 `gh-pages` ブランチからサイトを公開することを選択した場合は、`gh-pages` ブランチをチェックアウトします。
 ```shell
 $ git checkout --orphan gh-pages
 # Creates a new branch, with no history or contents, called gh-pages, and switches to the gh-pages branch
 $ git rm -rf 
 # Removes the contents from your default branch from the working directory
 ```
1. 新しい Jekyll サイトを作成するには、`jekyll new` コマンドを使用します。
   ```shell
   $ jekyll new --skip-bundle .
   # Creates a Jekyll site in the current directory
   ```
1. Jekyll が作成した Gemfile を開きます。
1. `gem "jekyll"` で始まる行の先頭に「#」を追加して行をコメントアウトします。
1. `# gem "github-pages"` で始まる行を編集して、`github-pages` gem を追加します。 行を次のように変更します。

   ```shell
   gem "github-pages", "~> GITHUB-PAGES-VERSION", group: :jekyll_plugins
   ```

   _GITHUB-PAGES-VERSION_ を、サポートされる最新バージョンの `github-pages` gem で置き換えます。 このバージョンは、「[依存関係のバージョン](https://pages.github.com/versions/)」にあります。

   正しいバージョンの Jekyll が、`github-pages` gem の依存関係としてインストールされます。
1. Gemfile を保存して閉じます。
1. コマンド ラインから `bundle install` を実行します。
1. 必要に応じて、`_config.yml` ファイルに対して必要な編集を行います。 これは、リポジトリがサブディレクトリでホストされている場合に相対パスに対して必要です。  詳細については、「[サブフォルダーを新規リポジトリに分割する](/github/getting-started-with-github/using-git/splitting-a-subfolder-out-into-a-new-repository)」を参照してください。
   ```yml
   domain: my-site.github.io       # if you want to force HTTPS, specify the domain without the http at the start, e.g. example.com
   url: https://my-site.github.io  # the base hostname and protocol for your site, e.g. http://example.com
   baseurl: /REPOSITORY-NAME/      # place folder name if the site is served in a subfolder
  ```
1. 必要に応じて、サイトをローカルでテストします。 詳細については、「[Jekyll を使用して {% data variables.product.prodname_pages %} サイトをローカルでテストする](/articles/testing-your-github-pages-site-locally-with-jekyll)」を参照してください。
1. 作業内容を追加してコミットしてください。
```shell
git add .
git commit -m 'Initial GitHub pages site with Jekyll'
```
1. リポジトリを {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} にリモートとして追加します。{% ifversion ghes or ghae %}_HOSTNAME_ をエンタープライズのホスト名で、{% endif %}_USER_ をリポジトリを所有するアカウントで{% ifversion ghes or ghae %}、{% endif %}さらに _REPOSITORY_ をリポジトリの名前で置き換えます。
```shell
{% ifversion fpt or ghec %}
$ git remote add origin https://github.com/<em>USER</em>/<em>REPOSITORY</em>.git
{% else %}
$ git remote add origin https://<em>HOSTNAME</em>/<em>USER</em>/<em>REPOSITORY</em>.git
{% endif %}
```
1. リポジトリを {% data variables.product.product_name %} にプッシュします。_BRANCH_ を作業対象のブランチの名前で置き換えます。
   ```shell
   $ git push -u origin <em>BRANCH</em>
   ```
{% data reusables.pages.configure-publishing-source %} {% data reusables.pages.navigate-site-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %} {% data reusables.pages.choose-visibility %} {% data reusables.pages.visit-site %} {% data reusables.pages.check-workflow-run %}

{% data reusables.pages.admin-must-push %}

## 次の手順

サイトに新しいページを追加または投稿するには、「[Jekyll を使用して {% data variables.product.prodname_pages %} サイトにコンテンツを追加する](/articles/adding-content-to-your-github-pages-site-using-jekyll)」を参照してください。

{% data reusables.pages.add-jekyll-theme %} 詳細については、「[Jekyll を使って {% data variables.product.prodname_pages %} サイトにテーマを追加する](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll)」を参照してください。
