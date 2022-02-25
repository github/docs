---
title: Criando diagramas
intro: Crie diagramas para transmitir informações sobre gráficos
versions:
  feature: mermaid
shortTitle: Crie diagramas
---

Você pode usar a sintaxe do Mermaid para criar diagramas. O Mermeid é uma ferramenta inspirada em Markdown que transforma texto em diagramas. Por exemplo, o Mermeid pode interpretar gráficos de fluxo, diagramas de sequência, gráficos de pizza e muito mais. Para obter mais informações, consulte a documentação do [Mermaid](https://mermaid-js.github.io/mermaid/#/).

Para criar um diagrama do Mermaid, adicione a sintaxe do Mermeid dentro de um bloco de código cercado com o identificador da linguagem do `mermaid`. Para obter mais informações sobre a criação de blocos de código, consulte "[Criando e destacando blocos de código](/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks)".

Por exemplo, você pode criar um fluxograma:

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

![Fluxograma interpretado do Mermeid](/assets/images/help/writing/mermaid-flow-chart.png)

{% note %}

**Observação:** Você pode observar erros se você executar um plugin de terceiros do Mermaid ao usar sintaxe do Mermaid em {% data variables.product.company_short %}.

{% endnote %}
