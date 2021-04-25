---
title: 使用 Jekyll 为 GitHub Pages 站点设置 Markdown 处理器
intro: '您可以选择一个 Markdown 处理器来确定 Markdown 在 {% data variables.product.prodname_pages %} 站点上的呈现方式。'
redirect_from:
  - /articles/migrating-your-pages-site-from-maruku/
  - /articles/updating-your-markdown-processor-to-kramdown/
  - /articles/setting-a-markdown-processor-for-your-github-pages-site-using-jekyll
  - /github/working-with-github-pages/setting-a-markdown-processor-for-your-github-pages-site-using-jekyll
product: '{% data reusables.gated-features.pages %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - 页面
---

拥有仓库写入权限的人可为 {% data variables.product.prodname_pages %} 站点设置 Markdown 处理器。

{% data variables.product.prodname_pages %} 支持两种 Markdown 处理器：[kramdown](http://kramdown.gettalong.org/) 和 {% data variables.product.prodname_dotcom %} 自己的扩展 [CommonMark](https://commonmark.org/) 处理器，后者用于在整个 {% data variables.product.product_name %} 中呈现 {% data variables.product.prodname_dotcom %} 风格的 Markdown。 更多信息请参阅“[关于 {% data variables.product.prodname_dotcom %} 上的书写和格式化](/articles/about-writing-and-formatting-on-github)”。

您可以在任一处理器上使用 {% data variables.product.prodname_dotcom %} 风格的 Markdown，但只有我们的 CommonMark 处理器始终与您在 {% data variables.product.product_name %} 上看到的结果相匹配。

{% data reusables.pages.navigate-site-repo %}
2. 在仓库中，浏览到 *_config.yml* 文件。
{% data reusables.repositories.edit-file %}
4. 找到以 `markdown:` 开头的行，然后将值更改为 `kramdown` 或 `GFM`。 ![config.yml 中的 Markdown 设置](/assets/images/help/pages/config-markdown-value.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_new_file %}

### 延伸阅读

- [kramdown 文档](https://kramdown.gettalong.org/documentation.html)
- [{% data variables.product.prodname_dotcom %} Flavored Markdown 规格](https://github.github.com/gfm/)
