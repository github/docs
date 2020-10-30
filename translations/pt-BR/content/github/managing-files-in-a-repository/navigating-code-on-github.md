---
title: Navegar por códigos no GitHub
intro: 'Você pode entender as relações de dentro e entre os repositórios navegando por códigos diretamente no {% data variables.product.product_name %}.'
redirect_from:
  - /articles/navigating-code-on-github
versions:
  free-pro-team: '*'
---

### Sobre a navegação do código no {% data variables.product.prodname_dotcom %}

As funções de navegar por código usam a biblioteca de código aberto [`semântica`](https://github.com/github/semantic). As linguagens a seguir são compatíveis:
- CodeQL
- Go
- Java
- JavaScript
- PHP
- Python
- Ruby
- TypeScript

{% note %}

**Observação**: A navegação do código funciona para ramos ativos. Se o recurso estiver habilitado, mas você não conseguir ver os links para as definições de funções e métodos, faça push para o branch e tente novamente.

{% endnote %}

### Pular para a definição de uma função ou método

Você pode pular para uma definição de uma função ou método dentro do mesmo repositório, clicando na chamada dessa função ou método em um arquivo.

![Aba Jump-to-definition (Pular para a definição)](/assets/images/help/repository/jump-to-definition-tab.png)

### Localizar todas as referências de uma função ou método

Você pode encontrar todas as referências para uma função ou método dentro do mesmo repositório clicando na chamada da função ou método e, em seguida, clicando na aba **Referências**.

![Aba Find all references (Localizar todas as referências)](/assets/images/help/repository/find-all-references-tab.png)

### Leia mais
- "[Pesquisar código](/github/searching-for-information-on-github/searching-code)"
