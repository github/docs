---
title: GitHub Pages サイトを作成する
intro: '新規または既存のリポジトリ内に、{% data variables.product.prodname_pages %} サイトを作成できます。'
redirect_from:
  - /articles/creating-pages-manually
  - /articles/creating-project-pages-manually
  - /articles/creating-project-pages-from-the-command-line
  - /articles/creating-project-pages-using-the-command-line
  - /articles/creating-a-github-pages-site
  - /github/working-with-github-pages/creating-a-github-pages-site
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Create a GitHub Pages site
ms.openlocfilehash: 45e7dead10f3f54b5c18d63352a037d04d49cb98
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147643950'
---
{% data reusables.pages.org-owners-can-restrict-pages-creation %}

## サイト用にリポジトリを作成する

{% data reusables.pages.new-or-existing-repo %}

{% data reusables.repositories.create_new %} {% data reusables.repositories.owner-drop-down %} {% indented_data_reference reusables.pages.emu-org-only spaces=3 %} {% data reusables.pages.create-repo-name %} {% data reusables.repositories.choose-repo-visibility %} {% data reusables.repositories.initialize-with-readme %} {% data reusables.repositories.create-repo %}

## サイトを作成する

{% data reusables.pages.must-have-repo-first %}

{% data reusables.pages.private_pages_are_public_warning %}

{% data reusables.pages.navigate-site-repo %} {% data reusables.pages.decide-publishing-source %}
1. サイト用のエントリ ファイルを作成します。 {% data variables.product.prodname_pages %} では、サイト用のエントリ ファイルとして `index.html`、`index.md`、または `README.md` ファイルを検索します。

   {% ifversion pages-custom-workflow %}公開元がブランチおよびフォルダーである場合、エントリ ファイルは、ソース ブランチ上のソース フォルダーの最上位レベルに配置する必要があります。 たとえば、公開元が `main` ブランチ上の `/docs` フォルダーである場合、エントリ ファイルは、`main` という名前のブランチ上の `/docs` フォルダー内に配置する必要があります。

   公開元が {% data variables.product.prodname_actions %} ワークフローである場合、デプロイする成果物には、成果物の最上位レベルにあるエントリ ファイルが含まれている必要があります。 エントリ ファイルをリポジトリに追加する代わりに、ワークフローの実行時に {% data variables.product.prodname_actions %} ワークフローでエントリ ファイルを生成するように選択することもできます。{% else %} エントリ ファイルは、選択した公開元の最上位レベルに配置する必要があります。 たとえば、公開元が `main` ブランチ上の `/docs` フォルダーである場合、エントリ ファイルは、`main` という名前のブランチ上の `/docs` フォルダー内に配置する必要があります。{% endif %} {% data reusables.pages.configure-publishing-source %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %} {% data reusables.pages.choose-visibility %} {% data reusables.pages.visit-site %} {% data reusables.pages.check-workflow-run %}

{% data reusables.pages.admin-must-push %}

## 次の手順

新しいファイルを追加で作成することにより、ページを追加できます。 各ファイルは、公開元と同じディレクトリ構造で、サイト上に表示されます。 たとえば、プロジェクト サイトの公開元が `gh-pages` ブランチであり、`gh-pages` ブランチで `/about/contact-us.md` という名前の新しいファイルを作成した場合、ファイルは {% ifversion fpt or ghec %}`https://<user>.github.io/<repository>/{% else %}`http(s):///<hostname>pages/<username>/<repository>/{% endif %}about/contact-us.html` で使用できます。

また、サイトの見た目をカスタマイズするため、テーマを追加できます。 詳しくは、「[Jekyll を使用して {% data variables.product.prodname_pages %} サイトにテーマを追加する](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll)」をご覧ください。

サイトを更にカスタマイズするには、Jekyll を使用できます。Jekyll は、{% data variables.product.prodname_pages %} に組み込まれている静的サイトジェネレータです。 詳しくは、「[{% data variables.product.prodname_pages %} と Jekyll について](/articles/about-github-pages-and-jekyll)」をご覧ください。

## 参考資料

- 「[{% data variables.product.prodname_pages %} サイトの Jekyll ビルド エラーのトラブルシューティング](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites)」
- 「[リポジトリ内でブランチを作成および削除する](/articles/creating-and-deleting-branches-within-your-repository)」
- 「[新しいファイルの作成](/articles/creating-new-files)」
