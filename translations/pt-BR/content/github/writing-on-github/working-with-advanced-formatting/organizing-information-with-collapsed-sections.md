---
title: Organizando informações com seções recolhidas
intro: Você pode simplificar seu Markdown criando uma seção colapsada com a tag '<details>'.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Seções colapsadas
---

## Creating a collapsed section

You can temporarily obscure sections of your Markdown by creating a collapsed section that the reader can choose to expand. For example, when you want to include technical details in an issue comment that may not be relevant or interesting to every reader, you can put those details in a collapsed section.

Any Markdown within the `<details>` block will be collapsed until the reader clicks {% octicon "triangle-right" aria-label="The right triange icon" %} to expand the details. Within the `<details>` block, use the `<summary>` tag to create a label to the right of {% octicon "triangle-right" aria-label="The right triange icon" %}.

```markdown
<details><summary>CLICK ME</summary>
<p>

#### We can hide anything, even code!

    ```ruby
      puts "Hello World"
    ```

</details> ```</p>

The Markdown will be collapsed by default.

![Rendered collapsed](/assets/images/help/writing/collapsed-section-view.png)

After a reader clicks {% octicon "triangle-right" aria-label="The right triange icon" %}, the details are expanded.

![Rendered open](/assets/images/help/writing/open-collapsed-section.png)

## Leia mais

- [Especificações de markdown em estilo {% data variables.product.prodname_dotcom %}](https://github.github.com/gfm/)
- "[Sintaxe básica de gravação e formatação](/articles/basic-writing-and-formatting-syntax)"
