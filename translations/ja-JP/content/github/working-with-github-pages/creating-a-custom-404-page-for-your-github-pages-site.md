---
title: GitHub Pages サイトのカスタム 404 ページを作成する
intro: サイト上の存在しないページにアクセスしようとした際に表示される、404 エラーページをカスタマイズできます。
redirect_from:
  - /articles/custom-404-pages/
  - /articles/creating-a-custom-404-page-for-your-github-pages-site
product: '{{ site.data.reusables.gated-features.pages }}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{{ site.data.reusables.pages.navigate-site-repo }}
{{ site.data.reusables.pages.navigate-publishing-source }}
{{ site.data.reusables.files.add-file }}
3. ファイル名のフィールドに、`404.html` または `404.md` と入力します。 ![ファイル名フィールド](/assets/images/help/pages/404-file-name.png)
4. ファイル名を `404.md` とした場合、ファイルの先頭に以下の YAML front matter を追加します。
  ```
  ---
  permalink: /404.html
  ---
  ```
5. YAML front matter の下に、404 ページに表示したいコンテンツがある場合には、それを追加します。
{{ site.data.reusables.files.write_commit_message }}
{{ site.data.reusables.files.choose-commit-email }}
{{ site.data.reusables.files.choose_commit_branch }}
{{ site.data.reusables.files.propose_new_file }}

### 参考リンク

- Jekyll ドキュメンテーションの [Front matter](http://jekyllrb.com/docs/frontmatter)
