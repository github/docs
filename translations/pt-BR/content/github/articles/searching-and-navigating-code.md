---
title: Pesquisar e navegar no código
intro: 'Pesquisar e navegar no código são partes críticas do fluxo de trabalho de desenvolvimento, e o GitHub está aprimorando essas áreas. Se você fizer parte de uma organização que está participando da versão beta privada de pesquisa e navegação, terá acesso a novas ferramentas avançadas de pesquisa e navegação. Para dúvidas adicionais sobre esta versão beta privada, envie um e-mail para beta@github.com.'
hidden: true
redirect_from:
  - /articles/searching-and-navigating-code
versions:
  free-pro-team: '*'
---


### Neste guia

- [Pesquisa literal no código](#literal-code-search)
- [Relevância](#relevancy)
- [Navegação com acesso direto](#jump-to-navigation)

### Pesquisa literal no código

Antes dessa versão beta privada, muito símbolos eram retirados dos índices de pesquisa, e expressões comuns como `>>` não eram pesquisadas. Por exemplo, ao pesquisar `>>` em um repositório, nenhum resultado era retornado. Com a versão beta privada, você pode colocar o símbolo entre aspas duplas e ver os resultados corretos. Esse recurso vai além dos símbolos e permite pesquisar frases inteiras entre aspas, como `"return [] unless"`. Esse recurso se aplica à pesquisa de código em todas as linguagens.

### Relevância

Para um subconjunto de linguagens (Go, JavaScript, Python, Ruby e TypeScript), a pesquisa no código agora modula a relevância das declarações. A declaração de um método, função, classe ou outra entidade será retornada antes das chamadas ou comentários que incluem o mesmo termo.

### Navegação com acesso direto

Para um subconjunto de idiomas (Go, JavaScript, Python, Ruby e TypeScript), o GitHub agora oferece suporte a informações adicionais e navegação ao clicar em um símbolo. Essa navegação inclui a navegação de acesso à definição para recursos no repositório, o que aumenta a velocidade da navegação e melhora o insight.

### Feedback

Os usuários que estão usando a versão beta privada de pesquisa e navegação podem fornecer feedback por meio [desta pesquisa](https://www.research.net/r/CodeSearch-Navigation). Para feedback e dúvidas adicionais, envie um e-mail para search-beta@github.com.

### Leia mais
- [Sobre a pesquisa no GitHub](/articles/about-searching-on-github/)
- [Localizar métodos e funções modificados em uma pull request](/articles/finding-changed-methods-and-functions-in-a-pull-request/)
