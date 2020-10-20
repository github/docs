---
title: GitHub Pages サイトを作成する
intro: '新規または既存のリポジトリ内に、{% data variables.product.prodname_pages %} サイトを作成できます。'
redirect_from:
  - /articles/creating-project-pages-using-the-command-line/
  - /articles/creating-a-github-pages-site
product: '{% data reusables.gated-features.pages %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### サイト用にリポジトリを作成する

{% data reusables.pages.new-or-existing-repo %}

{% data reusables.pages.private_pages_are_public_warning %}

{% data reusables.repositories.create_new %}
{% data reusables.repositories.owner-drop-down %}
{% data reusables.pages.create-repo-name %}
{% data reusables.repositories.choose-repo-visibility %}
{% data reusables.repositories.initialize-with-readme %}
{% data reusables.repositories.create-repo %}

### サイトを作成する

{% data reusables.pages.must-have-repo-first %}

{% data reusables.pages.navigate-site-repo %}
{% data reusables.pages.decide-publishing-source %}
3. 選択した公開元が既に存在する場合、公開元に移動します。 選択した公開元がまだ存在しない場合は、公開元を作成します。
4. 公開元のルートに、サイトのメインページに表示したいコンテンツを含んだ、`index.md` という名前の新しいファイルを作成します。
{% data reusables.pages.configure-publishing-source %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.pages.visit-site %}

{% data reusables.pages.admin-must-push %}

### 次のステップ

新しいファイルを追加で作成することにより、ページを追加できます。 各ファイルは、公開元と同じディレクトリ構造で、サイト上に表示されます。 For example, if the publishing source for your project site is the `gh-pages` branch, and you create a new file called `/about/contact-us.md` on the `gh-pages` branch, the file will be available at {% if currentVersion == "free-pro-team@latest" %}`https://<user>.github.io/<repository>/{% else %}`http(s)://<hostname>/pages/<username>/<repository>/{% endif %}about/contact-us.md` で表示されます。

また、サイトの見た目をカスタマイズするため、テーマを追加できます。 For more information, see {% if currentVersion == "free-pro-team@latest" %}"[Adding a theme to your {% data variables.product.prodname_pages %} site with the theme chooser](/articles/adding-a-theme-to-your-github-pages-site-with-the-theme-chooser){% else %}"[Adding a theme to your {% data variables.product.prodname_pages %} site using Jekyll](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll){% endif %}."

サイトを更にカスタマイズするには、Jekyll を使用できます。Jekyll は、{% data variables.product.prodname_pages %} に組み込まれている静的サイトジェネレータです。 詳しい情報については、「[{% data variables.product.prodname_pages %} と Jekyll](/articles/about-github-pages-and-jekyll)」を参照してください。

### 参考リンク

- [{% data variables.product.prodname_pages %} サイトの Jekyll ビルドエラーに関するトラブルシューティング](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites)
- [リポジトリ内でブランチを作成および削除する](/articles/creating-and-deleting-branches-within-your-repository)
- [新しいファイルの作成](/articles/creating-new-files)
