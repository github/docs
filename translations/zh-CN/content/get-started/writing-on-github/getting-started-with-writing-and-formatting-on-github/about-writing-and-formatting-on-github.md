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
shortTitle: Write & format on GitHub
ms.openlocfilehash: fbdb89a9a39e9ba10e813067a52a4a265e299f5b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '146179517'
---
[Markdown](http://daringfireball.net/projects/markdown/) 是一种易于读取和编写的语法，用于设置纯文本格式。

我们添加了一些自定义功能来创建 {% data variables.product.prodname_dotcom %} Flavored Markdown，用于格式化网站中的散文和代码。

还可以使用 [@mentions](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)、[问题和 PR 参考](/articles/basic-writing-and-formatting-syntax/#referencing-issues-and-pull-requests)和[表情包](/articles/basic-writing-and-formatting-syntax/#using-emoji)等功能在拉取请求和问题中与其他用户互动。

## 文本格式工具栏

{% data variables.product.product_name %} 上的每个评论字段都包含文本格式工具栏，用于格式化文本，而无需了解 Markdown 语法。 除了 Markdown 格式设置（如粗体和斜体样式）和创建标题、链接及列表等之外，工具栏还包括 {% data variables.product.product_name %} 特定的功能，如 @mentions、任务列表和指向问题和拉取请求的链接。

{% ifversion fixed-width-font-gfm-fields %}

## 在编辑器中启用定宽字体

可以在 {% data variables.product.product_name %} 的每个注释字段中启用定宽字体。 定宽（也称固定宽度）字体中的每个字符占据相同的水平空间，这可以更容易地编辑高级 Markdown 结构，例如表和代码片段。

![显示 {% data variables.product.product_name %} 注释字段的屏幕截图，其中启用了定宽字体](/assets/images/help/writing/fixed-width-example.png)

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.appearance-settings %}
1. 在“Markdown 编辑器字体首选项”下，选择“编辑 Markdown 时使用定宽(固定宽度)字体”。
  ![显示 {% data variables.product.product_name %} 注释字段的屏幕截图，其中启用了定宽字体](/assets/images/help/writing/enable-fixed-width.png)

{% endif %}

## 延伸阅读

- [{% data variables.product.prodname_dotcom %} 样式的 Markdown 规范](https://github.github.com/gfm/)
- “[基本撰写和格式设置语法](/articles/basic-writing-and-formatting-syntax)”
- “[使用高级格式设置](/articles/working-with-advanced-formatting)”
- “[熟练使用 Markdown](https://guides.github.com/features/mastering-markdown/)”
