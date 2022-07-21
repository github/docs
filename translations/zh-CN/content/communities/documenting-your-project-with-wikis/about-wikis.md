---
title: 关于 wikis
intro: 您可以将仓库文档托管在 wiki 中，以便其他人使用和参与您的项目。
redirect_from:
  - /articles/about-github-wikis
  - /articles/about-wikis
  - /github/building-a-strong-community/about-wikis
product: '{% data reusables.gated-features.wikis %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
---

{% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} 上的每个仓库都配备了一个托管文档部分，叫做 wiki。 您可以使用仓库的 wiki 共享项目的长内容，例如如何使用项目，您是如何设计项目的，或者其核心原则是什么。 自述文件快速介绍项目的内容，而您可以使用 wiki 提供其他文档。 更多信息请参阅“[关于自述文件](/articles/about-readmes)”。

使用 wiki，可以像在 {% data variables.product.product_name %} 的任何其他位置一样编写内容。 更多信息请参阅“[在 {% data variables.product.prodname_dotcom %} 上编写和设置格式](/articles/getting-started-with-writing-and-formatting-on-github)”。 我们使用[开源标记库](https://github.com/github/markup)将不同的格式转换为 HTML，以便选择使用 Markdown 或任何其他支持的格式编写。

{% ifversion fpt or ghes or ghec %}如果您在公共仓库中创建 wiki，则该 wiki 可供{% ifversion ghes %}具有 {% data variables.product.product_location %} 访问权限的任何人{% else %}公共{% endif %}访问。 {% endif %}如果您在私有{% ifversion ghec or ghes %} 或内部{% endif %} 存储库中创建 Wiki，则仅有权访问该仓库的{% ifversion fpt or ghes or ghec %}人员{% elsif ghae %}企业成员{% endif %} 才能访问该 Wiki。 更多信息请参阅“[设置仓库可见性](/articles/setting-repository-visibility)”。

您可以直接在 {% data variables.product.product_name %} 上编辑 wikis，也可在本地编辑 wiki 文件。 默认情况下，只有能够写入仓库的人才可更改 wikis，但您可以允许 {% data variables.product.product_location %} 上的每个人参与{% ifversion ghae %}内部{% else %}公共{% endif %}仓库中的 wiki。 For more information, see "[Changing access permissions for wikis](/communities/documenting-your-project-with-wikis/changing-access-permissions-for-wikis)."

{% note %}

**注意：** 搜索引擎不会对维基的内容编制索引。 要通过搜索引擎对内容编制索引，您可以在公共仓库中使用 [{% data variables.product.prodname_pages %}](/pages) 。

{% endnote %}

## 延伸阅读

- "[添加或编辑 wiki 页面](/communities/documenting-your-project-with-wikis/adding-or-editing-wiki-pages)"
- "[为 wiki 创建页脚或侧栏](/communities/documenting-your-project-with-wikis/creating-a-footer-or-sidebar-for-your-wiki)"
- "[编辑 wiki 内容](/communities/documenting-your-project-with-wikis/editing-wiki-content)"
- "[查看 wiki 的更改记录](/articles/viewing-a-wiki-s-history-of-changes)"
- "[搜索 wikis](/search-github/searching-on-github/searching-wikis)"
