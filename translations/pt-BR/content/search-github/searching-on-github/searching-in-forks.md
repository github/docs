---
title: Pesquisar em bifurcações
intro: 'Por padrão, [forks](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks) não são exibidas nos resultados de pesquisas. Você poderá optar por incluí-las nas pesquisas de repositórios e nas pesquisas de códigos se elas atenderem a determinados critérios.'
redirect_from:
  - /articles/searching-in-forks
  - /github/searching-for-information-on-github/searching-in-forks
  - /github/searching-for-information-on-github/searching-on-github/searching-in-forks
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
---

Para exibir bifurcações nos resultados da [pesquisa no repositório](/search-github/searching-on-github/searching-for-repositories), adicione `fork:true` ou `fork:only` à sua consulta.

As bifurcações somente são indexadas para [pesquisas de códigos](/search-github/searching-on-github/searching-code) quando têm mais estrelas do que o repositório principal. Não é possível pesquisar códigos em uma bifurcação que tem menos estrelas do que seu principal. Para exibir bifurcações com mais estrelas que o repositório principal nos resultados da pesquisa de código, adicione `fork:true` ou `fork:only` à sua consulta.

O qualificador `fork:true` localiza todos os resultados que correspondem à sua pesquisa, inclusive bifurcações. O qualificador `fork:only` localiza _somente_ bifurcações que correspondem à consulta de pesquisa.

| Qualifier   | Exemplo                                                                                                                                                                                                                  |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `fork:true` | [**github fork:true**](https://github.com/search?q=github+fork%3Atrue&type=Repositories) identifica todos os repositórios que contém a palavra "github", inclusive as bifurcações.                                       |
|             | [**android language:java fork:true**](https://github.com/search?q=android+language%3Ajava+fork%3Atrue&type=Code) identifica o código com a palavra "android", escrita em Java, nas bifurcações e repositórios regulares. |
| `fork:only` | [**github fork:only**](https://github.com/search?q=github+fork%3Aonly&type=Repositories) identifica todas as bifurcações que contêm a palavra "github".                                                                  |
|             | [**forks:>500 fork:only**](https://github.com/search?q=forks%3A%3E500+fork%3Aonly&type=Repositories) corresponde a repositórios com mais de 500 bifurcações e retorna apenas aqueles que são bifurcações.                |

## Leia mais

- "[Sobre bifurcações](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)"
- "[Sobre a pesquisa no GitHub](/search-github/getting-started-with-searching-on-github/about-searching-on-github)"
