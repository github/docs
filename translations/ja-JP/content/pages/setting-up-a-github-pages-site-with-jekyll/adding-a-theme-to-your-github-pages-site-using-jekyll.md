---
title: Jekyll を使用して GitHub Pages サイトにテーマを追加する
intro: テーマを追加およびカスタマイズすることにより、Jekyll サイトをパーソナライズできます。
redirect_from:
  - /articles/customizing-css-and-html-in-your-jekyll-theme/
  - /articles/adding-a-jekyll-theme-to-your-github-pages-site/
  - /articles/adding-a-theme-to-your-github-pages-site-using-jekyll
  - /github/working-with-github-pages/adding-a-theme-to-your-github-pages-site-using-jekyll
product: '{% data reusables.gated-features.pages %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - pages
---

リポジトリへの書き込み権限があるユーザは、Jekyll を使用して {% data variables.product.prodname_pages %} サイトにテーマを追加できます。

{% data reusables.pages.test-locally %}

### テーマを追加する

{% data reusables.pages.navigate-site-repo %}
{% data reusables.pages.navigate-publishing-source %}
2. *_config.yml* に移動します。
{% data reusables.repositories.edit-file %}
4. テーマ名のために、ファイルに新しい行を追加します。
   - To use a supported theme, type `theme: THEME-NAME`, replacing _THEME-NAME_ with the name of the theme as shown in the README of the theme's repository. サポートされているテーマのリストについては、{% data variables.product.prodname_pages %} サイトで「[サポートされているテーマ](https://pages.github.com/themes/)」を参照してください。 ![Supported theme in config file](/assets/images/help/pages/add-theme-to-config-file.png)
   - {% data variables.product.prodname_dotcom %} にホストされているその他の任意の Jekyll テーマを使うには、`remote_theme: THEME-NAME` と入力します。THEME-NAME の部分は、テーマのリポジトリの README に表示されている名前に置き換えます。 ![Unsupported theme in config file](/assets/images/help/pages/add-remote-theme-to-config-file.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}

### テーマの CSS をカスタマイズする

{% data reusables.pages.best-with-supported-themes %}

{% data reusables.pages.theme-customization-help %}

{% data reusables.pages.navigate-site-repo %}
{% data reusables.pages.navigate-publishing-source %}
1. _/assets/css/style.scss_ という新しいファイルを作成します。
2. ファイルの先頭に、以下の内容を追加します。
  ```scss
  ---
  ---

  @import "{{ site.theme }}";
  ```
3. カスタム CSS または Sass (インポートファイルも含む) があれば `@import` 行の直後に追加します。

### テーマの HTML レイアウトをカスタマイズする

{% data reusables.pages.best-with-supported-themes %}

{% data reusables.pages.theme-customization-help %}

1. {% data variables.product.prodname_dotcom %} 上で、テーマのソースリポジトリにアクセスします。 たとえば、Minima のソースリポジトリは https://github.com/jekyll/minima です。
2. *_layouts* フォルダ内で、テーマの _default.html_ ファイルに移動します。
3. ファイルのコンテンツをコピーします。
{% data reusables.pages.navigate-site-repo %}
{% data reusables.pages.navigate-publishing-source %}
6. *_layouts/default.html* というファイルを作成します。
7. 先ほどコピーしたデフォルトのレイアウトコンテンツを貼り付けます。
8. 必要に応じてレイアウトをカスタマイズします。

### 参考リンク

- [新しいファイルの作成](/articles/creating-new-files)
