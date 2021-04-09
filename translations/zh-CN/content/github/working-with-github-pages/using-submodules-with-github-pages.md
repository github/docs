---
title: 将子模块用于 GitHub Pages
intro: '您可以将子模块用于 {% data variables.product.prodname_pages %} 以在站点代码中包含其他项目。'
redirect_from:
  - /articles/using-submodules-with-pages/
  - /articles/using-submodules-with-github-pages
product: '{% data reusables.gated-features.pages %}'
versions:
  free-pro-team: '*'
topics:
  - 页面
---

如果 {% data variables.product.prodname_pages %} 站点的仓库包含子模块，则在构建站点时会自动拉取其内容。

只能使用指向公共仓库的子模块，因为 {% data variables.product.prodname_pages %} 服务器无法访问私有仓库。

对子模块（包括嵌套子模块）使用 `https://` 只读 URL。 您可以在 _.gitmodules_ 文件中进行此更改。

### 延伸阅读

- _Pro Git_ 手册中的“[Git 工具 - 子模块](https://git-scm.com/book/en/Git-Tools-Submodules)”。
- "[排查 {% data variables.product.prodname_pages %} 站点的 Jekyll 构建错误](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites)"
