---
title: Navegar por códigos no GitHub
intro: 'Você pode entender as relações de dentro e entre os repositórios navegando por códigos diretamente no {% data variables.product.product_name %}.'
redirect_from:
  - /articles/navigating-code-on-github
  - /github/managing-files-in-a-repository/navigating-code-on-github
  - /github/managing-files-in-a-repository/managing-files-on-github/navigating-code-on-github
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 89fc5092468d50484cfcad71824870b6456d9ac7
ms.sourcegitcommit: 1529de77bfcbe45519131b5f5fb3ab319758c2d2
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/14/2022
ms.locfileid: '148164160'
---
<!-- If you make changes to this feature, check whether any of the changes affect languages listed in /get-started/learning-about-github/github-language-support. If so, please update the article accordingly. -->

## Sobre a navegação do código no {% data variables.product.prodname_dotcom %}

A navegação por código ajuda você a ler, navegar e compreender o código mostrando e vinculando definições de uma entidade nomeada correspondente a uma referência a essa entidade, além das referências correspondentes à definição de uma entidade.

![Exibição da navegação de código](/assets/images/help/repository/code-navigation-popover.png)

A navegação no código usa a biblioteca de código aberto [`tree-sitter`](https://github.com/tree-sitter/tree-sitter). As estratégias de linguagem e navegação a seguir são compatíveis:

| Idioma   | Navegação de código baseada em pesquisa | Navegação de código precisa |
|:----------:|:----------------------------:|:-----------------------:|
| C#         | ✅                           |                         |
| CodeQL     | ✅                           |                         |
| Elixir     | ✅                           |                         |
| Go         | ✅                           |                         |
| Java       | ✅                           |                         |
| JavaScript | ✅                           |                         |
| PHP        | ✅                           |                         |
| Python     | ✅                           | ✅                      |
| Ruby       | ✅                           |                         |
| Rust       | ✅                           |                         |
| TypeScript | ✅                           |                         |


Você não precisa configurar nada no seu repositório para habilitar a navegação do código. Nós iremos extrair automaticamente informações de navegação de código precisas e baseadas em pesquisa para essas linguagens compatíveis em todos os repositórios e você pode alternar entre as duas abordagens de navegação de código compatíveis se sua linguagem de programação for compatível com ambos.

O {% data variables.product.prodname_dotcom %} desenvolveu duas abordagens de navegação pelo código com base na biblioteca [`tree-sitter`](https://github.com/tree-sitter/tree-sitter) e [`stack-graphs`](https://github.com/github/stack-graphs) de código aberto:
 - Baseado em pesquisa – busca todas as definições e referências em um repositório para encontrar entidades com um determinado nome
 - Preciso – resolve definições e referências baseadas no conjunto de classes, funções, e definições importadas em um determinado ponto do seu código

Para saber mais sobre essas abordagens, confira "[Navegação precisa e baseada em pesquisa](#precise-and-search-based-navigation)".

As versões futuras adicionarão a *navegação de código precisa* para mais linguagens, que é uma abordagem de navegação de código que pode fornecer resultados mais precisos.

## Pular para a definição de uma função ou método

Você pode pular para uma definição de uma função ou método dentro do mesmo repositório, clicando na chamada dessa função ou método em um arquivo.

![Aba Jump-to-definition (Pular para a definição)](/assets/images/help/repository/jump-to-definition-tab.png)

## Localizar todas as referências de uma função ou método

Encontre todas as referências para uma função ou para um método dentro do mesmo repositório clicando na chamada de método ou na função e clicando na guia **Referências**.

![Aba Find all references (Localizar todas as referências)](/assets/images/help/repository/find-all-references-tab.png)

## Navegação precisa e baseada em pesquisa

Algumas linguagens compatíveis com o {% data variables.product.prodname_dotcom %} têm acesso à *navegação de código precisa*, que usa um algoritmo (com base na biblioteca de código aberto [`stack-graphs`](https://github.com/github/stack-graphs)) que resolve definições e referências baseado no conjunto de classes, nas funções e nas definições importadas que são visíveis em qualquer ponto específico do código. As outras linguagens usam a *navegação de código baseada em pesquisa*, que pesquisa todas as definições e referências em um repositório para encontrar entidades com um nome especificado. Ambas as estratégias são eficazes na busca de resultados e ambas evitam resultados inadequados como, por exemplo, comentários mas uma navegação de código precisa pode dar resultados mais precisos, especialmente quando um repositório contém vários métodos ou funções com o mesmo nome.

Se você não vir os resultados que você espera de uma consulta precisa de código de navegação, você poderá clicar no link "baseado em pesquisa" na janela exibida para realizar uma navegação baseada na pesquisa.

![Link de navegação de código baseado em pesquisa](/assets/images/help/repository/search-based-code-navigation-link.png)

Se seus resultados precisos estiverem incorretos, você poderá enviar uma solicitação de suporte.

## Navegação de código precisa entre repositórios

A navegação de código entre repositórios está disponível para linguagens compatíveis com a navegação de código precisa e o grafo de dependência. Para obter mais informações, confira "[Sobre o grafo de dependência](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)". Com a navegação de código entre repositórios, é possível avançar para a definição de funções ou variáveis definidas nas dependências importadas pelo projeto, caso essas dependências sejam repositórios hospedados pelo {% data variables.product.prodname_dotcom %}. No momento, a navegação de código entre repositórios não dá suporte a solicitações de localização de todas as referências.

![Captura de tela da navegação de código entre repositórios](/assets/images/help/repository/cross-repository-code-navigation.png)

## Solução de problemas na navegação de código

Se a navegação de código estiver habilitada para você, mas você não vir links para as definições de funções e métodos:
- A navegação de código só funciona para branches ativos. Faça um push no branch e tente novamente.
- O código de navegação só funciona para repositórios com menos de 100.000 arquivos.

## Leitura adicional
- "[Pesquisa no código](/github/searching-for-information-on-github/searching-code)"
