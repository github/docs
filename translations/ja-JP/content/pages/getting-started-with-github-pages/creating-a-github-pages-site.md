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
shortTitle: GitHub Pagesのサイトの作成
---

{% data reusables.pages.org-owners-can-restrict-pages-creation %}

## サイト用にリポジトリを作成する

{% data reusables.pages.new-or-existing-repo %}

{% data reusables.repositories.create_new %}
{% data reusables.repositories.owner-drop-down %}
{% indented_data_reference reusables.pages.emu-org-only spaces=3 %}
{% data reusables.pages.create-repo-name %}
{% data reusables.repositories.choose-repo-visibility %}
{% data reusables.repositories.initialize-with-readme %}
{% data reusables.repositories.create-repo %}

## サイトを作成する

{% data reusables.pages.must-have-repo-first %}

{% data reusables.pages.private_pages_are_public_warning %}

{% data reusables.pages.navigate-site-repo %}
{% data reusables.pages.decide-publishing-source %}
1. Create the entry file for your site. {% data variables.product.prodname_pages %} will look for an `index.html`, `index.md`, or `README.md` file as the entry file for your site.

   {% ifversion pages-custom-workflow %}If your publishing source is a branch and folder, the entry file must be at the top level of the source folder on the source branch. For example, if your publishing source is the `/docs` folder on the `main` branch, your entry file must be located in the `/docs` folder on a branch called `main`.

   If your publishing source is a {% data variables.product.prodname_actions %} workflow, the artifact that you deploy must include the entry file at the top level of the artifact. Instead of adding the entry file to your repository, you may choose to have your {% data variables.product.prodname_actions %} workflow generate your entry file when the workflow runs.{% else %} The entry file must be at the top level of your chosen publishing source. For example, if your publishing source is the `/docs` folder on the `main` branch, your entry file must be located in the `/docs` folder on a branch called `main`.{% endif %}
{% data reusables.pages.configure-publishing-source %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.pages.sidebar-pages %}
{% data reusables.pages.choose-visibility %}
{% data reusables.pages.visit-site %}
{% data reusables.pages.check-workflow-run %}

{% data reusables.pages.admin-must-push %}

## 次のステップ

新しいファイルを追加で作成することにより、ページを追加できます。 各ファイルは、公開元と同じディレクトリ構造で、サイト上に表示されます。 たとえば、プロジェクトサイトの公開元が `gh-pages` ブランチで、新しいファイル `/about/contact-us.md` を `gh-pages` ブランチに作成した場合、ファイルは {% ifversion fpt or ghec %}`https://<user>.github.io/<repository>/{% else %}`http(s)://<hostname>/pages/<username>/<repository>/{% endif %}about/contact-us.html` で表示されます。

また、サイトの見た目をカスタマイズするため、テーマを追加できます。 詳しい情報については、{% ifversion fpt or ghec %}「[テーマ選択画面で {% data variables.product.prodname_pages %} サイトにテーマを追加する](/articles/adding-a-theme-to-your-github-pages-site-with-the-theme-chooser){% else %}「[Jekyll テーマ選択画面で {% data variables.product.prodname_pages %} サイトにテーマを追加する](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll){% endif %}」を参照してください。

サイトを更にカスタマイズするには、Jekyll を使用できます。Jekyll は、{% data variables.product.prodname_pages %} に組み込まれている静的サイトジェネレータです。 詳しい情報については、「[{% data variables.product.prodname_pages %} と Jekyll](/articles/about-github-pages-and-jekyll)」を参照してください。

## 参考リンク

- [{% data variables.product.prodname_pages %} サイトの Jekyll ビルドエラーに関するトラブルシューティング](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites)
- [リポジトリ内でブランチを作成および削除する](/articles/creating-and-deleting-branches-within-your-repository)
- [新しいファイルの作成](/articles/creating-new-files)
