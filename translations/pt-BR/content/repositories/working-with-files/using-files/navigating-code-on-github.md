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

<!-- If you make changes to this feature, update /getting-started-with-github/github-language-support to reflect any changes to supported languages. -->

## Sobre a navegação do código no {% data variables.product.prodname_dotcom %}

A navegação por código ajuda você a ler, navegar e compreender o código mostrando e vinculando definições de uma entidade nomeada correspondente a uma referência a essa entidade, além das referências correspondentes à definição de uma entidade.

![Exibição da navegação de código](/assets/images/help/repository/code-navigation-popover.png)

A navegação pelo código usa a biblioteca de código aberto [`tree-sitter`](https://github.com/tree-sitter/tree-sitter). As estratégias de linguagem e navegação a seguir são compatíveis:

| Linguagem  | navegação de código baseado em pesquisa | navegação de código precisa |
|:----------:|:---------------------------------------:|:---------------------------:|
|     C#     |                    ✅                    |                             |
|   CodeQL   |                    ✅                    |                             |
|     Go     |                    ✅                    |                             |
|    Java    |                    ✅                    |                             |
| JavaScript |                    ✅                    |                             |
|    PHP     |                    ✅                    |                             |
|   Python   |                    ✅                    |              ✅              |
|    Ruby    |                    ✅                    |                             |
| TypeScript |                    ✅                    |                             |


Você não precisa configurar nada no seu repositório para habilitar a navegação do código. Nós iremos extrair automaticamente informações de navegação de código precisas e baseadas em pesquisa para essas linguagens compatíveis em todos os repositórios e você pode alternar entre as duas abordagens de navegação de código compatíveis se sua linguagem de programação for compatível com ambos.

{% data variables.product.prodname_dotcom %} has developed two code navigation approaches based on the open source [`tree-sitter`](https://github.com/tree-sitter/tree-sitter) and [`stack-graphs`](https://github.com/github/stack-graphs) library:
 - baseado em pesquisa - busca todas as definições e referências em um repositório para encontrar entidades com um determinado nome
 - preciso - resolve definições e referências baseadas no conjunto de classes, funções, e definições importadas em um determinado ponto do seu código

Para aprender mais sobre essas abordagens, consulte "[Navegação precisa e baseada em pesquisa](#precise-and-search-based-navigation)".

As versões futuras adicionarão *Código exato de navegação* para mais linguagens, que é uma abordagem de navegação de código que pode dar resultados mais precisos.

## Pular para a definição de uma função ou método

Você pode pular para uma definição de uma função ou método dentro do mesmo repositório, clicando na chamada dessa função ou método em um arquivo.

![Aba Jump-to-definition (Pular para a definição)](/assets/images/help/repository/jump-to-definition-tab.png)

## Localizar todas as referências de uma função ou método

Você pode encontrar todas as referências para uma função ou método dentro do mesmo repositório clicando na chamada da função ou método e, em seguida, clicando na aba **Referências**.

![Aba Find all references (Localizar todas as referências)](/assets/images/help/repository/find-all-references-tab.png)

## Navegação precisa e baseada em pesquisa

Certain languages supported by {% data variables.product.prodname_dotcom %} have access to *precise code navigation*, which uses an algorithm (based on the open source [`stack-graphs`](https://github.com/github/stack-graphs) library) that resolves definitions and references based on the set of classes, functions, and imported definitions that are visible at any given point in your code. Other languages use *search-based code navigation*, which searches all definitions and references across a repository to find entities with a given name. Both strategies are effective at finding results and both make sure to avoid inappropriate results such as comments, but precise code navigation can give more accurate results, especially when a repository contains multiple methods or functions with the same name.

If you don't see the results you expect from a precise code navigation query, you can click on the "search-based" link in the displayed popover to perform search-based navigation.

![Search-based code navigation link](/assets/images/help/repository/search-based-code-navigation-link.png)

If your precise results appear inaccurate, you can file a support request.

## Troubleshooting code navigation

If code navigation is enabled for you but you don't see links to the definitions of functions and methods:
- Code navigation only works for active branches. Push to the branch and try again.
- Code navigation only works for repositories with fewer than 100,000 files.

## Leia mais
- "[Pesquisar código](/github/searching-for-information-on-github/searching-code)"
