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
shortTitle: Quickstart
product: '{% data reusables.gated-features.pages %}'
ms.openlocfilehash: a6cf4a2f00237206a3c15083797aa12c832cf32c
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 07/13/2022
ms.locfileid: '145140267'
---
## <a name="introduction"></a>はじめに

{% data variables.product.prodname_pages %}は、{% data variables.product.product_name %}を通じてホストされ、公開されるパブリックなWebページです。 立ち上げて実行するための最速の方法は、Jekyll テーマ選択画面を使って事前作成されたテーマをロードすることです。 その後、{% data variables.product.prodname_pages %}のコンテンツやスタイルを変更できます。

このガイドでは、`username.github.io` でのユーザー サイトの作成手順について説明します。

## <a name="creating-your-website"></a>Webサイトの作成

{% data reusables.repositories.create_new %}
1. リポジトリ名として `username.github.io` を入力します。 `username` を {% data variables.product.prodname_dotcom %} のユーザー名に置き換えます。 たとえば、ユーザー名が `octocat` の場合、リポジトリ名を `octocat.github.io` とする必要があります。
   ![リポジトリ名フィールド](/assets/images/help/pages/create-repository-name-pages.png) {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %}
1. **[Choose a theme]\(テーマを選択する\)** をクリックします。
   ![[Choose a theme]\(テーマを選択する\) ボタン](/assets/images/help/pages/choose-theme.png)
2. テーマ選択画面が開きます。 使用可能なテーマを参照し、 **[Select theme]\(テーマの選択\)** をクリックしてテーマを選択します。 後でテーマを変更することも容易なので、はっきりしない場合はとりあえずどれか1つを選択しておいてください。
   ![テーマのオプションおよび [Select theme]\(テーマの選択\) ボタン](/assets/images/help/pages/select-theme.png)
3. テーマを選択すると、リポジトリの `README.md` ファイルがファイル エディターで開きます。 `README.md` ファイルは、サイトのコンテンツを記述する場所です。 このファイルを編集することも、あるいはとりあえずデフォルトの内容をそのままにしておくこともできます。
4. ファイルの編集が完了したら、 **[Commit changes]\(変更のコミット\)** をクリックします。
5. `username.github.io` にアクセスして新しい Web サイトをご覧ください。 **注:** サイトに対する変更は、その変更を {% data variables.product.product_name %} にプッシュしてから公開されるまでに、最大 20 分かかることがあります。

## <a name="changing-the-title-and-description"></a>タイトルと説明の変更

既定では、サイトのタイトルは `username.github.io` になります。 リポジトリ内の `_config.yml` ファイルを編集することで、タイトルを変更できます。 サイトの説明を追加することもできます。

1. リポジトリの **[Code]\(コード\)** タブをクリックします。
1. ファイルの一覧で、`_config.yml` をクリックしてファイルを開きます。
1. {% octicon "pencil" aria-label="The edit icon" %}をクリックしてファイルを編集してください。
1. `_config.yml` ファイルには、サイトのテーマを指定する行が既に含まれています。 新しい行を追加し、`title:` に続けて必要なタイトルを記載します。 新しい行を追加し、`description:` に続けて必要な説明を記載します。 次に例を示します。

   ```yaml
   theme: jekyll-theme-minimal
   title: Octocat's homepage
   description: Bookmark this to keep an eye on my project updates!
   ```

1. ファイルの編集が完了したら、 **[Commit changes]\(変更のコミット\)** をクリックします。

## <a name="next-steps"></a>次の手順

サイトにページを追加する方法の詳細については、「[Jekyll を使用して GitHub Pages サイトにコンテンツを追加する](/pages/setting-up-a-github-pages-site-with-jekyll/adding-content-to-your-github-pages-site-using-jekyll#about-content-in-jekyll-sites)」を参照してください。

Jekyll で {% data variables.product.prodname_pages %} サイトを設定する方法の詳細については、「[GitHub ページと Jekyll について](/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll)」を参照してください。
