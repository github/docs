---
title: GitHub Pagesのクイックスタート
intro: '{% data variables.product.prodname_pages %}を使って、オープンソースプロジェクトを紹介したり、ブログをホストしたり、履歴書を共有することさえもできます。 このガイドは、次のWebサイトを作成し始めるための役に立ちます。'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: quick_start
topics:
  - Pages
shortTitle: クイックスタート
product: '{% data reusables.gated-features.pages %}'
---

## はじめに

{% data variables.product.prodname_pages %}は、{% data variables.product.product_name %}を通じてホストされ、公開されるパブリックなWebページです。 立ち上げて実行するための最速の方法は、Jekyll テーマ選択画面を使って事前作成されたテーマをロードすることです。 その後、{% data variables.product.prodname_pages %}のコンテンツやスタイルを変更できます。

このガイドは、`username.github.io`でのユーザサイトの作成をご案内します。

## Webサイトの作成

{% data reusables.repositories.create_new %}
1. リポジトリ名として`username.github.io`を入力してください。 `username`を自分の{% data variables.product.prodname_dotcom %}ユーザ名で置き換えてください。 たとえば、ユーザ名が`octocat`なら、リポジトリ名は`octocat.github.io`となります。 ![リポジトリ名フィールド](/assets/images/help/pages/create-repository-name-pages.png)
{% data reusables.repositories.sidebar-settings %}
{% data reusables.pages.sidebar-pages %}
1. **Choose a theme（テーマの選択）**をクリックしてください。 ![[Choose a theme] ボタン](/assets/images/help/pages/choose-theme.png)
2. テーマ選択画面が開きます。 利用可能なテーマをブラウズし、**Select theme（テーマの選択）**をクリックしてテーマを選択してください。 後でテーマを変更することも容易なので、はっきりしない場合はとりあえずどれか1つを選択しておいてください。 ![テーマのオプションおよび [Select theme] ボタン](/assets/images/help/pages/select-theme.png)
3. テーマとを選択すると、ファイルエディタで`README.md`ファイルが開かれます。 `README.md`ファイルは、サイトの内容を書くところです。 このファイルを編集することも、あるいはとりあえずデフォルトの内容をそのままにしておくこともできます。
4. ファイルの編集が終わったら、**Commit changes（変更をコミット）**をクリックしてください。
5. `username.github.io`にアクセスして、新しいWebサイトを見てみてください。 **メモ:** サイトに対する変更は、その変更を{% data variables.product.product_name %}にプッシュしてから公開されるまでに、最大20分かかることがあります。

## タイトルと説明の変更

デフォルトでは、サイトのタイトルは`username.github.io`です。 リポジトリ内の`_config.yml`ファイルを編集すれば、タイトルを変更できます。 サイトの説明を追加することもできます。

1. リポジトリの**Code（コード）**タブをクリックしてください。
1. ファイルリスト中で`_config.yml`をクリックしてオープンしてください。
1. {% octicon "pencil" aria-label="The edit icon" %}をクリックしてファイルを編集してください。
1. `_config.yml`には、既にサイトのテーマを指定する行が含まれています。 新しい行として`title:`の後に指定したいタイトルを続けてください。 新しい行を追加して`description:`の後に指定したい説明を続けてください。 例:

   ```yaml
   theme: jekyll-theme-minimal
   title: Octocat's homepage
   description: Bookmark this to keep an eye on my project updates!
   ```

1. ファイルの編集を終えたら、**Commit changes（変更をコミット）**をクリックしてください。

## 次のステップ

サイトへのページの追加方法に関する詳しい情報については「[Jekyllを使ったGitHub Pagesサイトへのコンテンツの追加](/pages/setting-up-a-github-pages-site-with-jekyll/adding-content-to-your-github-pages-site-using-jekyll#about-content-in-jekyll-sites)」を参照してください。

Jekyllと合わせて{% data variables.product.prodname_pages %}をセットアップすることに関する詳しい情報については「[GitHub PagesとJekyllについて](/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll)」を参照してください。
