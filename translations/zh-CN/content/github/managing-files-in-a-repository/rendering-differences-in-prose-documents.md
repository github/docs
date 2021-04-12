---
title: 散文文档中的呈现差异
redirect_from:
  - /articles/rendering-differences-in-prose-documents
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - 仓库
---

包含散文文档的提交和拉取请求能够使用*源*视图和*呈现*视图来表示这些文档。

源视图显示已输入的原始文本，而呈现的视图显示该文本在 {% data variables.product.product_name %} 上呈现后的外观。 例如，这可能是在 Markdown 中显示 `**bold**` 和在呈现的视图中显示**粗体**之间的差异。

[github/markup](https://github.com/github/markup) 支持的呈现文档支持散文呈现：

* Markdown
* AsciiDoc
* Textile
* ReStructuredText
* Rdoc
* Org
* Creole
* MediaWiki
* Pod

![用于查看渲染的散文文档的纸张图标](/assets/images/help/repository/rendered_prose_diff.png)

您可以单击 {% octicon "file" aria-label="The paper icon" %} 查看在提交过程中对文档的更改。

![呈现的散文更改](/assets/images/help/repository/rendered_prose_changes.png)

### 可视化属性更改

我们提供一个描述属性更改的工具提示，与字词不同的是，这些更改在呈现的文档中不可见。 例如，如果链接 URL 从一个网站更改为另一个，我们将显示类似如下的工具提示：

![呈现的散文属性更改](/assets/images/help/repository/prose_diff_attributes.png)

### 对更改的评论

[提交评论](/articles/commenting-on-differences-between-files)只能逐行添加到*源*视图内的文件。

### 链接到标题

与[其他呈现的散文文档](/articles/about-readmes)一样，将鼠标悬停在文档的标题上会产生一个链接图标。 您可以将呈现散文差异的读者链接到特定部分。

### 查看复杂的差异

一些拉取请求涉及大型复杂文档的大量更改。 当更改需要太长时间来分析时，{% data variables.product.product_name %} 不能总是生成更改的渲染视图。 如果发生这种情况，当您单击渲染按钮时，将会看到错误消息。

![无法渲染视图时的消息](/assets/images/help/repository/prose_diff_rendering.png)

您仍可使用源视图来分析和评论更改。

### 查看 HTML 元素

我们不直接支持 HTML 文档提交的呈现视图。 某些格式（例如 Markdown）可让您在文档中嵌入任意 HTML。 这些文档在 {% data variables.product.product_name %} 上显示时，某些嵌入式 HTML 可以在预览中显示，而某些（例如嵌入式 YouTube 视频）则不可以。

一般来说，包含嵌入式 HTML 的文档更改的呈现视图将显示对 {% data variables.product.product_name %} 文档视图中支持元素的更改。 必须始终在呈现视图和源视图中检查对包含嵌入式 HTML 的文档的更改以确保完整性。
