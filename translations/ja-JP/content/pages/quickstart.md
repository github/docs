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
ms.openlocfilehash: d82ba5899bb3b98efbd5b69672472ef0d39e2353
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147643862'
---
## はじめに

{% data variables.product.prodname_pages %}は、{% data variables.product.product_name %}を通じてホストされ、公開されるパブリックなWebページです。 立ち上げて実行するための最速の方法は、Jekyll テーマ選択画面を使って事前作成されたテーマをロードすることです。 その後、{% data variables.product.prodname_pages %}のコンテンツやスタイルを変更できます。

このガイドでは、`username.github.io` でのユーザー サイトの作成手順について説明します。

## Webサイトの作成

{% data reusables.repositories.create_new %}
1. リポジトリ名として `username.github.io` を入力します。 `username` を {% data variables.product.prodname_dotcom %} のユーザー名に置き換えます。 たとえば、ユーザー名が `octocat` の場合、リポジトリ名を `octocat.github.io` とする必要があります。
   ![リポジトリ名フィールド](/assets/images/help/pages/create-repository-name-pages.png) {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %}
1. [ビルドとデプロイ] の [ソース] で、 **[ソースからのデプロイ]** を選択します。
1. [ビルドとデプロイ] の [ブランチ] で、 **[なし]** または **[ブランチ]** ドロップダウン メニューを使用し、公開元を選択します。

   ![公開ソースを選択するドロップダウン メニュー](/assets/images/help/pages/publishing-source-drop-down.png)
1. 必要に応じて、リポジトリの `README.md` ファイルを開きます。 `README.md` ファイルは、サイトのコンテンツを記述する場所です。 このファイルを編集することも、あるいはとりあえずデフォルトの内容をそのままにしておくこともできます。
1. `username.github.io` にアクセスして新しい Web サイトをご覧ください。 **注:** サイトに対する変更は、その変更を {% data variables.product.product_name %} にプッシュしてから公開されるまでに、最大 10 分かかることがあります。

## タイトルと説明の変更

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

## 次の手順

サイトにページを追加する方法の詳細については、「[Jekyll を使用して GitHub Pages サイトにコンテンツを追加する](/pages/setting-up-a-github-pages-site-with-jekyll/adding-content-to-your-github-pages-site-using-jekyll#about-content-in-jekyll-sites)」を参照してください。

Jekyll で {% data variables.product.prodname_pages %} サイトを設定する方法の詳細については、「[GitHub ページと Jekyll について](/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll)」を参照してください。
