---
title: 关于在 GitHub 上编写和设置格式
intro: GitHub 结合了用于格式化文字的语法，称为 GitHub Flavored Markdown，具有一些独特的写作功能。
redirect_from:
  - /articles/about-writing-and-formatting-on-github
  - /github/writing-on-github/about-writing-and-formatting-on-github
  - /github/writing-on-github/getting-started-with-writing-and-formatting-on-github/about-writing-and-formatting-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: 在 GitHub 上编写和格式化
---

[Markdown](http://daringfireball.net/projects/markdown/) 是一种易于阅读和编写的语法，用于格式化纯文本。

我们添加了一些自定义功能来创建 {% data variables.product.prodname_dotcom %} Flavored Markdown，用于格式化网站中的散文和代码。

您也可以在拉取请求和议题中使用 [@提及](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)、[议题和 PR 参考](/articles/basic-writing-and-formatting-syntax/#referencing-issues-and-pull-requests)和[表情符号](/articles/basic-writing-and-formatting-syntax/#using-emoji)等功能与其他用户交互。

## 文本格式工具栏

{% data variables.product.product_name %} 上的每个评论字段都包含文本格式工具栏，用于格式化文本，而无需了解 Markdown 语法。 除了 Markdown 格式（如粗体和斜体样式）和创建标题、链接及列表等之外，工具栏还包括 {% data variables.product.product_name %} 特定的功能，如 @提及、任务列表以及链接到议题和拉取请求。

{% if fixed-width-font-gfm-fields %}

## 在编辑器中启用固定宽度字体

您可以在 {% data variables.product.product_name %} 的每个注释字段中启用固定宽度的字体。 固定宽度或等宽字体中的每个字符都占用相同的水平空间，这样可以更轻松地编辑高级 Markdown 结构，如表格和代码段。

![显示启用了固定宽度字体的 {% data variables.product.product_name %} 注释字段的屏幕截图](/assets/images/help/writing/fixed-width-example.png)

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.appearance-settings %}
1. 在“Markdown editor font preference（Markdown 编辑器字体首选项）”下，选择 **Use a fixed-width (monospace) font when editing Markdown（编辑 Markdown 时使用固定宽度（等宽）字体）**。 ![显示启用了固定宽度字体的 {% data variables.product.product_name %} 注释字段的屏幕截图](/assets/images/help/writing/enable-fixed-width.png)

{% endif %}

## 延伸阅读

- [{% data variables.product.prodname_dotcom %} Flavored Markdown 规格](https://github.github.com/gfm/)
- "[基本撰写和格式语法](/articles/basic-writing-and-formatting-syntax)"
- "[使用高级格式](/articles/working-with-advanced-formatting)"
- "[熟悉 Markdown](https://guides.github.com/features/mastering-markdown/)"
