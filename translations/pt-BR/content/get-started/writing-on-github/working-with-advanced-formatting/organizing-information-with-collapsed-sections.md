---
title: Organizando informações com seções recolhidas
intro: Você pode simplificar seu Markdown criando uma seção colapsada com a tag '<details>'.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
redirect_from:
  - /github/writing-on-github/working-with-advanced-formatting/organizing-information-with-collapsed-sections
shortTitle: Seções colapsadas
---

## Criando uma seção recolhida

Você pode obscurecer temporariamente seções do seu Markdown criando uma seção expandida que o leitor pode optar por expandir. Por exemplo, quando você deseja incluir detalhes técnicos em um comentário do problema que pode não ser relevante ou interessante para todos os leitores, você pode colocar esses detalhes em uma seção recolhida.

Qualquer Markdown dentro do bloco `<details>` estará recolhido até que o leitor clique em {% octicon "triangle-right" aria-label="The right triange icon" %} para expandir os detalhes. Dentro do bloco `<details>`, use a tag `<summary>` para criar uma etiqueta à direita de {% octicon "triangle-right" aria-label="The right triange icon" %}.

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

O Markdown irá recolher-se por defeito.

![Renderizado recolhido](/assets/images/help/writing/collapsed-section-view.png)

Depois que um leitor clicar em {% octicon "triangle-right" aria-label="The right triange icon" %}, os detalhes serão expandidos.

![Renderizado aberto](/assets/images/help/writing/open-collapsed-section.png)

## Leia mais

- [Especificações de markdown em estilo {% data variables.product.prodname_dotcom %}](https://github.github.com/gfm/)
- "[Sintaxe básica de gravação e formatação](/articles/basic-writing-and-formatting-syntax)"
