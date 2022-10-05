---
title: 使用折叠部分组织信息
intro: 可创建带 `<details>` 标记的折叠部分来简化 Markdown。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
redirect_from:
  - /github/writing-on-github/working-with-advanced-formatting/organizing-information-with-collapsed-sections
shortTitle: Collapsed sections
ms.openlocfilehash: 1a1f0669ce401946f4a7a08dd1fd41893078e3d0
ms.sourcegitcommit: 76b840f45ba85fb79a7f0c1eb43bc663b3eadf2b
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/12/2022
ms.locfileid: '146273096'
---
## 创建折叠部分

可以通过创建读者可以选择展开的折叠部分来暂时隐藏 Markdown 的分区。 例如，当想在问题评论中包含可能不是每个读者都相关或感兴趣的技术细节时，可以将这些细节放在折叠部分中。

`<details>` 块中的任何 Markdown 都将被折叠，直到读者单击 {% octicon "triangle-right" aria-label="The right triange icon" %} 展开详细信息。 在 `<details>` 块中，使用 `<summary>` 标记在 {% octicon "triangle-right" aria-label="The right triange icon" %} 的右侧创建一个标签。

````markdown
<details><summary>CLICK ME</summary>
<p>

#### We can hide anything, even code!

```ruby
   puts "Hello World"
```

</p>
</details>
````

Markdown 是默认折叠的。

![呈现的折叠](/assets/images/help/writing/collapsed-section-view.png)

读者单击 {% octicon "triangle-right" aria-label="The right triange icon" %} 后，将展开详细信息。

![呈现的打开](/assets/images/help/writing/open-collapsed-section.png)

## 延伸阅读

- [{% data variables.product.prodname_dotcom %} 样式的 Markdown 规范](https://github.github.com/gfm/)
- [基本撰写和格式设置语法](/articles/basic-writing-and-formatting-syntax)
