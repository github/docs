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
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Pages
shortTitle: 设置 Markdown 处理器
---

拥有仓库写入权限的人可为 {% data variables.product.prodname_pages %} 站点设置 Markdown 处理器。

{% data variables.product.prodname_pages %} supports two Markdown processors: [kramdown](http://kramdown.gettalong.org/) and {% data variables.product.prodname_dotcom %}'s own Markdown processor, which is used to render [{% data variables.product.prodname_dotcom %} Flavored Markdown (GFM)](https://github.github.com/gfm/) throughout {% data variables.product.product_name %}. 更多信息请参阅“[关于 {% data variables.product.prodname_dotcom %} 上的书写和格式化](/articles/about-writing-and-formatting-on-github)”。

You can use {% data variables.product.prodname_dotcom %} Flavored Markdown with either processor, but only our GFM processor will always match the results you see on {% data variables.product.product_name %}.

{% data reusables.pages.navigate-site-repo %}
2. 在仓库中，浏览到 *_config.yml* 文件。
{% data reusables.repositories.edit-file %}
4. 找到以 `markdown:` 开头的行，然后将值更改为 `kramdown` 或 `GFM`。 ![config.yml 中的 Markdown 设置](/assets/images/help/pages/config-markdown-value.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_new_file %}

## 延伸阅读

- [kramdown 文档](https://kramdown.gettalong.org/documentation.html)
- [{% data variables.product.prodname_dotcom %} Flavored Markdown 规格](https://github.github.com/gfm/)
