---
title: Creating diagrams
intro: Create diagrams to convey information through charts and graphs
versions:
  feature: mermaid
shortTitle: Create diagrams
---

You can use Mermaid syntax to create diagrams. Mermaid is a Markdown-inspired tool that renders text into diagrams. For example, Mermaid can render flow charts, sequence diagrams, pie charts and more. For more information, see the [Mermaid documentation](https://mermaid-js.github.io/mermaid/#/).

To create a Mermaid diagram, add Mermaid syntax inside a fenced code block with the `mermaid` language identifier. For more information about creating code blocks, see "[Creating and highlighting code blocks](/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks)."

For example, you can create a flow chart:

<pre>
Here is a simple flow chart:

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```
</pre>

![Rendered Mermaid flow chart](/assets/images/help/writing/mermaid-flow-chart.png)

{% note %}

**Note:** You may observe errors if you run a third-party Mermaid plugin when using Mermaid syntax on {% data variables.product.company_short %}.

{% endnote %}
