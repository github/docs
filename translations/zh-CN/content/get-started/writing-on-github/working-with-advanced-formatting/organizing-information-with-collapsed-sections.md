---
title: 使用折叠的部分组织信息
intro: 您可以使用 `<details>` 标记创建折叠部分来简化 Markdown。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
  redirect_from:
    - /github/writing-on-github/working-with-advanced-formatting/organizing-information-with-collapsed-sections
shortTitle: 折叠部分
---

## 创建折叠部分

您可以创建读者可以选择展开的折叠部分来暂时遮挡 Markdown 的部分。 例如，当您想要在问题评论中包含技术细节时，这些细节可能与每个读者都不相关或不感兴趣，您可以将这些细节放在折叠部分中。

`<details>` 块中的任何 Markdown 都将折叠，直到读者单击 {% octicon "triangle-right" aria-label="The right triange icon" %} 以展开详细信息。 在 `<details>` 块中，使用 `<summary>` 标记在 {% octicon "triangle-right" aria-label="The right triange icon" %} 右侧创建一个标签。

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

默认情况下，Markdown 将折叠。

![呈现为折叠状态](/assets/images/help/writing/collapsed-section-view.png)

读者点击 {% octicon "triangle-right" aria-label="The right triange icon" %} 后，细节就会展开。

![呈现为打开状态](/assets/images/help/writing/open-collapsed-section.png)

## 延伸阅读

- [{% data variables.product.prodname_dotcom %} Flavored Markdown 规格](https://github.github.com/gfm/)
- "[基本撰写和格式语法](/articles/basic-writing-and-formatting-syntax)"
