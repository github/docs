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
---

<!-- If you make changes to this feature, check whether any of the changes affect languages listed in /get-started/learning-about-github/github-language-support. If so, please update the article accordingly. -->

## Sobre a navegação do código no {% data variables.product.prodname_dotcom %}

A navegação por código ajuda você a ler, navegar e compreender o código mostrando e vinculando definições de uma entidade nomeada correspondente a uma referência a essa entidade, além das referências correspondentes à definição de uma entidade.

![Exibição da navegação de código](/assets/images/help/repository/code-navigation-popover.png)

A navegação pelo código usa a biblioteca de código aberto [`tree-sitter`](https://github.com/tree-sitter/tree-sitter). As estratégias de linguagem e navegação a seguir são compatíveis:

| Linguagem  | Navegação de código baseado em pesquisa | Navegação de código precisa |
|:----------:|:---------------------------------------:|:---------------------------:|
|     C#     |                    ✅                    |                             |
|   CodeQL   |                    ✅                    |                             |
|   Elixir   |                    ✅                    |                             |
|     Go     |                    ✅                    |                             |
|    Java    |                    ✅                    |                             |
| JavaScript |                    ✅                    |                             |
|    PHP     |                    ✅                    |                             |
|   Python   |                    ✅                    |              ✅              |
|    Ruby    |                    ✅                    |                             |
| TypeScript |                    ✅                    |                             |


Você não precisa configurar nada no seu repositório para habilitar a navegação do código. Nós iremos extrair automaticamente informações de navegação de código precisas e baseadas em pesquisa para essas linguagens compatíveis em todos os repositórios e você pode alternar entre as duas abordagens de navegação de código compatíveis se sua linguagem de programação for compatível com ambos.

{% data variables.product.prodname_dotcom %} desenvolveu duas abordagens de código de navegação com base no código aberto [`tree-sitter`](https://github.com/tree-sitter/tree-sitter) e [`stack-graphs`](https://github.com/github/stack-graphs) library:
 - Baseado em pesquisa - Pesquisa todas as definições e referências em um repositório para encontrar entidades com um determinado nome
 - Preciso - resolve definições e referências baseadas no conjunto de classes, funções, e definições importadas em um determinado ponto do seu código

Para aprender mais sobre essas abordagens, consulte "[Navegação precisa e baseada em pesquisa](#precise-and-search-based-navigation)".

As versões futuras adicionarão *Código exato de navegação* para mais linguagens, que é uma abordagem de navegação de código que pode dar resultados mais precisos.

## Pular para a definição de uma função ou método

Você pode pular para uma definição de uma função ou método dentro do mesmo repositório, clicando na chamada dessa função ou método em um arquivo.

![Aba Jump-to-definition (Pular para a definição)](/assets/images/help/repository/jump-to-definition-tab.png)

## Localizar todas as referências de uma função ou método

Você pode encontrar todas as referências para uma função ou método dentro do mesmo repositório clicando na chamada da função ou método e, em seguida, clicando na aba **Referências**.

![Aba Find all references (Localizar todas as referências)](/assets/images/help/repository/find-all-references-tab.png)

## Navegação precisa e baseada em pesquisa

Algumas linguagens compatíveis com {% data variables.product.prodname_dotcom %} têm acesso ao *código preciso de navegação*, que usa um algoritmo (com base na biblioteca do código aberto [`stack-graphs`](https://github.com/github/stack-graphs)) que resolve as definições e referências com baes no conjunto de classes, funções e definições importadas visíveis em um determinado ponto do seu código. As outras linguagens usam o *Código de navegação baseado em pesquisa*, que pesquisa todas as definições e referências em um repositório para encontrar entidades com um determinado nome. Ambas as estratégias são eficazes na busca de resultados e ambas evitam resultados inadequados como, por exemplo, comentários mas uma navegação de código precisa pode dar resultados mais precisos, especialmente quando um repositório contém vários métodos ou funções com o mesmo nome.

Se você não vir os resultados que você espera de uma consulta precisa de código de navegação, você poderá clicar no link "baseado em pesquisa" na janela exibida para realizar uma navegação baseada na pesquisa.

![Link de navegação de código baseado em pesquisa](/assets/images/help/repository/search-based-code-navigation-link.png)

Se seus resultados precisos estiverem incorretos, você poderá enviar uma solicitação de suporte.

## Solução de problemas na navegação de código

Se a navegação de código estiver habilitada para você, mas você não vir links para as definições de funções e métodos:
- A navegação de código só funciona para branches ativos. Faça um push no branch e tente novamente.
- O código de navegação só funciona para repositórios com menos de 100.000 arquivos.

## Leia mais
- "[Pesquisar código](/github/searching-for-information-on-github/searching-code)"
