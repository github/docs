---
title: GitHub Pages サイトを作成する
intro: '新規または既存のリポジトリ内に、{{ site.data.variables.product.prodname_pages }} サイトを作成できます。'
redirect_from:
  - /articles/creating-project-pages-using-the-command-line/
  - /articles/creating-a-github-pages-site
product: '{{ site.data.reusables.gated-features.pages }}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### サイト用にリポジトリを作成する

{{ site.data.reusables.pages.new-or-existing-repo }}

{{ site.data.reusables.pages.private_pages_are_public_warning }}

{{ site.data.reusables.repositories.create_new }}
{{ site.data.reusables.repositories.owner-drop-down }}
{{ site.data.reusables.pages.create-repo-name }}
{{ site.data.reusables.repositories.choose-repo-visibility }}
{{ site.data.reusables.repositories.initialize-with-readme }}
{{ site.data.reusables.repositories.create-repo }}

### サイトを作成する

{{ site.data.reusables.pages.must-have-repo-first }}

{{ site.data.reusables.pages.navigate-site-repo }}
{{ site.data.reusables.pages.decide-publishing-source }}
3. 選択した公開元が既に存在する場合、公開元に移動します。 選択した公開元がまだ存在しない場合は、公開元を作成します。
4. 公開元のルートに、サイトのメインページに表示したいコンテンツを含んだ、`index.md` という名前の新しいファイルを作成します。
{{ site.data.reusables.pages.configure-publishing-source }}
{{ site.data.reusables.repositories.sidebar-settings }}
{{ site.data.reusables.pages.visit-site }}

{{ site.data.reusables.pages.admin-must-push }}

### 次のステップ

新しいファイルを追加で作成することにより、ページを追加できます。 各ファイルは、公開元と同じディレクトリ構造で、サイト上に表示されます。 たとえば、プロジェクトサイトの公開元が `gh-pages` ブランチで、新しいファイル `/about/contact-us.md` を `gh-pages` ブランチに作成した場合、ファイルは {% if currentVersion == "free-pro-team@latest" %}`https://<user>.github.io/<repository>/{% else %}`http(s)://<hostname>/pages/<username>/<repository>/{% endif %}about/contact-us.md` で表示されます。

また、サイトの見た目をカスタマイズするため、テーマを追加できます。 詳しい情報については、{% if currentVersion == "free-pro-team@latest" %}「[テーマ選択画面で {{ site.data.variables.product.prodname_pages }} サイトにテーマを追加する](/articles/adding-a-theme-to-your-github-pages-site-with-the-theme-chooser){% else %}「[Jekyll テーマ選択画面で {{ site.data.variables.product.prodname_pages }} サイトにテーマを追加する](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll){% endif %}」を参照してください。

サイトを更にカスタマイズするには、Jekyll を使用できます。Jekyll は、{{ site.data.variables.product.prodname_pages }} に組み込まれている静的サイトジェネレータです。 詳しい情報については、「[{{ site.data.variables.product.prodname_pages }} と Jekyll](/articles/about-github-pages-and-jekyll)」を参照してください。

### 参考リンク

- [{{ site.data.variables.product.prodname_pages }} サイトの Jekyll ビルドエラーに関するトラブルシューティング](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites)
- [リポジトリ内でブランチを作成および削除する](/articles/creating-and-deleting-branches-within-your-repository)
- [新しいファイルの作成](/articles/creating-new-files)
