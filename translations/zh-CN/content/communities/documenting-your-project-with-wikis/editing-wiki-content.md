---
title: 编辑 wiki 内容
intro: 您可以将图片和内容链接添加到您的 wiki，并使用某些受支持的 MediaWiki 格式。
redirect_from:
  - /articles/adding-links-to-wikis
  - /articles/how-do-i-add-links-to-my-wiki
  - /articles/how-do-i-add-or-upload-images-to-the-wiki
  - /articles/needs-writing-review-how-do-i-add-or-upload-images-to-the-wiki
  - /articles/how-do-i-add-images-to-my-wiki
  - /articles/adding-images-to-wikis
  - /articles/supported-mediawiki-formats
  - /articles/editing-wiki-content
  - /github/building-a-strong-community/editing-wiki-content
product: '{% data reusables.gated-features.wikis %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
---

## 添加链接

您可以使用页面支持的标准标记或使用 MediaWiki 语法在 wiki 中创建链接。 例如：

- 如果您的页面使用 Markdown 渲染，则链接语法为 `[链接文本](wiki 页面的完整 URL)`。
- 使用 MediaWiki 语法，链接语法为 `[[链接文本|wiki 页面的名称]]`。

## 添加图像

Wikis 可显示 PNG、JPEG 和 GIF 图片。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-wiki %}
3. 使用 wiki 边栏，导航至要更改的页面，然后单击 **Edit（编辑）**。
4. 在 wiki 工具栏上，单击 **Image（图像）**。 ![Wiki 添加图像按钮](/assets/images/help/wiki/wiki_add_image.png)
5. 在“Insert Image”（插入图像）对话框，输入 URL 和 alt 文本（由搜索引擎和屏幕阅读器使用）。
6. 单击 **OK（确定）**。

### 链接到仓库中的图片

您可以通过在浏览器中复制链接并将其用作图像路径，链接到 {% data variables.product.product_name %} 上仓库中的图像。 例如，使用 Markdown 在 wiki 中嵌入图像可能如下所示：

    [[https://github.com/USERNAME/REPOSITORY/blob/main/img/octocat.png|alt=octocat]]

{% ifversion fpt or ghec or ghes > 3.6 or ghae-issue-7647 %}
## Adding mathematical expressions and diagrams{% endif %}

{% data reusables.getting-started.math-and-diagrams %}

## 受支持的 MediaWiki 格式

无论您的 wiki 页面以哪种标记语言编写，始终可使用某些 MediaWiki 语法。
- 链接（[AsciiDoc 除外](https://github.com/gollum/gollum/commit/d1cf698b456cd6a35a54c6a8e7b41d3068acec3b)）
- 水平规则通过 `---`
- 简明符号实体（例如 `&delta;` 或 `&euro;`）

出于安全和性能原因，某些语法不受支持。
- [嵌入包含](https://www.mediawiki.org/wiki/Transclusion)
- 定义列表
- 首行缩进
- 目录
