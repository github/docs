---
title: 为 GitHub Pages 站点创建自定义 404 页面
intro: 您可以自定义在人们尝试访问您站点上不存在的页面时显示的 404 错误页面。
redirect_from:
  - /articles/custom-404-pages/
  - /articles/creating-a-custom-404-page-for-your-github-pages-site
  - /github/working-with-github-pages/creating-a-custom-404-page-for-your-github-pages-site
product: '{% data reusables.gated-features.pages %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - 页面
---
{% data reusables.pages.navigate-site-repo %}
{% data reusables.pages.navigate-publishing-source %}
{% data reusables.files.add-file %}
3. 在文件名字段中，键入 `404.html` 或 `404.md`。 ![文件名字段](/assets/images/help/pages/404-file-name.png)
4. 如果将文件命名为 `404.md`，请将以下 YAML 前页添加到文件的开头：
  ```yaml
  ---
  permalink: /404.html
  ---
  ```
5. 在 YAML 前页（如果存在）下方添加要在 404 页面上显示的内容。
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_new_file %}

### 延伸阅读

- Jekyll 文档中的[前页](http://jekyllrb.com/docs/frontmatter)
