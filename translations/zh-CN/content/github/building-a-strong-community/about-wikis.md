---
title: 关于 wikis
intro: '您可以将仓库文档托管在 wiki 中，以便其他人使用和参与您的项目。'
redirect_from:
  - /articles/about-github-wikis/
  - /articles/about-wikis
product: '{% data reusables.gated-features.wikis %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

每个 {% data variables.product.product_name %} 仓库都有一个托管文档的部分，称为 wiki。 您可以使用仓库的 wiki 共享项目的长内容，例如如何使用项目，您是如何设计项目的，或者其核心原则是什么。 自述文件快速介绍项目的内容，而您可以使用 wiki 提供其他文档。 更多信息请参阅“[关于自述文件](/articles/about-readmes)”。

使用 wiki，可以像在 {% data variables.product.product_name %} 的任何其他位置一样编写内容。 更多信息请参阅“[在 {% data variables.product.prodname_dotcom %} 上编写和设置格式](/articles/getting-started-with-writing-and-formatting-on-github)”。 我们使用[开源标记库](https://github.com/github/markup)将不同的格式转换为 HTML，以便选择使用 Markdown 或任何其他支持的格式编写。

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}If you create a wiki in a public repository, the wiki is available to {% if enterpriseServerVersions contains currentVersion %}anyone with access to {% data variables.product.product_location %}{% else %}the public{% endif %}. {% endif %}If you create a wiki in an internal or private repository, {% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}people{% elsif currentVersion == "github-ae@latest" %}enterprise members{% endif %} with access to the repository can also access the wiki. 更多信息请参阅“[设置仓库可见性](/articles/setting-repository-visibility)”。

您可以直接在 {% data variables.product.product_name %} 上编辑 wikis，也可在本地编辑 wiki 文件。 By default, only people with write access to your repository can make changes to wikis, although you can allow everyone on {% data variables.product.product_location %} to contribute to a wiki in {% if currentVersion == "github-ae@latest" %}an internal{% else %}a public{% endif %} repository. 更多信息请参阅“[更改 wikis 的访问权限](/articles/changing-access-permissions-for-wikis)”。

### 延伸阅读

- "[添加或编辑 wiki 页面](/articles/adding-or-editing-wiki-pages)"
- "[为 wiki 创建页脚或侧栏](/articles/creating-a-footer-or-sidebar-for-your-wiki)"
- "[编辑 wiki 内容](/articles/editing-wiki-content)"
- "[查看 wiki 的更改记录](/articles/viewing-a-wiki-s-history-of-changes)"
- "[搜索 wikis](/articles/searching-wikis)"
