---
title: Organizing information with collapsed sections
intro: You can streamline your Markdown by creating a collapsed section with the `<details>` tag.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
redirect_from:
  - /github/writing-on-github/working-with-advanced-formatting/organizing-information-with-collapsed-sections
shortTitle: Collapsed sections
---

## Creating a collapsed section

You can temporarily obscure sections of your Markdown by creating a collapsed section that the reader can choose to expand. For example, when you want to include technical details in an issue comment that may not be relevant or interesting to every reader, you can put those details in a collapsed section.

Any Markdown within the `<details>` block will be collapsed until the reader clicks {% octicon "triangle-right" aria-label="The right triange icon" %} to expand the details. Within the `<details>` block, use the `<summary>` tag to create a label to the right of {% octicon "triangle-right" aria-label="The right triange icon" %}.

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

The Markdown will be collapsed by default.

![Rendered collapsed](/assets/images/help/writing/collapsed-section-view.png)

After a reader clicks {% octicon "triangle-right" aria-label="The right triange icon" %}, the details are expanded.

![Rendered open](/assets/images/help/writing/open-collapsed-section.png)

## 参考リンク

- [{% data variables.product.prodname_dotcom %} Flavored Markdown の仕様](https://github.github.com/gfm/)
- [基本的な書き方とフォーマットの構文](/articles/basic-writing-and-formatting-syntax)
