---
title: Organizando informações com seções recolhidas
intro: Você pode simplificar o Markdown criando uma seção recolhida com a tag `<details>`.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
redirect_from:
  - /github/writing-on-github/working-with-advanced-formatting/organizing-information-with-collapsed-sections
shortTitle: Collapsed sections
ms.openlocfilehash: 1a1f0669ce401946f4a7a08dd1fd41893078e3d0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146273095'
---
## Criando uma seção recolhida

Você pode obscurecer temporariamente seções do seu Markdown criando uma seção expandida que o leitor pode optar por expandir. Por exemplo, quando você deseja incluir detalhes técnicos em um comentário do problema que pode não ser relevante ou interessante para todos os leitores, você pode colocar esses detalhes em uma seção recolhida.

Qualquer Markdown dentro do bloco `<details>` estará recolhido até que o leitor clique em {% octicon "triangle-right" aria-label="The right triange icon" %} para expandir os detalhes. No bloco `<details>`, use a tag `<summary>` para criar um rótulo à direita de {% octicon "triangle-right" aria-label="The right triange icon" %}.

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

## Leitura adicional

- [Especificações do {% data variables.product.prodname_dotcom %} Flavored Markdown](https://github.github.com/gfm/)
- "[Sintaxe básica de escrita e formatação](/articles/basic-writing-and-formatting-syntax)"
