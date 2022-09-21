---
title: Pesquisar em bifurcações
intro: 'Por padrão, os [forks](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks) não são mostrados nos resultados da pesquisa. Você poderá optar por incluí-las nas pesquisas de repositórios e nas pesquisas de códigos se elas atenderem a determinados critérios.'
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
ms.openlocfilehash: 6375fdecd7dba47447b37207467e008f0e7b3fc0
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147785787'
---
Para mostrar os forks nos resultados da [pesquisa do repositório](/search-github/searching-on-github/searching-for-repositories), adicione `fork:true` ou `fork:only` à consulta.

Os forks só são indexados para [pesquisa de código](/search-github/searching-on-github/searching-code) quando têm mais estrelas do que o repositório pai. Não é possível pesquisar códigos em uma bifurcação que tem menos estrelas do que seu principal. Para mostrar os forks com mais estrelas do que o repositório pai nos resultados da pesquisa de código, adicione `fork:true` ou `fork:only` à consulta.

O qualificador `fork:true` localiza todos os resultados que correspondem à consulta de pesquisa, incluindo forks. O qualificador `fork:only` localiza _apenas_ os forks que correspondem à consulta de pesquisa.

| Qualificador  | Exemplo
| ------------- | -------------
| `fork:true` | [**github fork:true**](https://github.com/search?q=github+fork%3Atrue&type=Repositories) corresponde a todos os repositórios que contêm a palavra "github", incluindo forks.
| | [**android language:java fork:true**](https://github.com/search?q=android+language%3Ajava+fork%3Atrue&type=Code) corresponde ao código com a palavra "android" que foi escrito em Java, em forks e em repositórios comuns.
| `fork:only` | [**github fork:only**](https://github.com/search?q=github+fork%3Aonly&type=Repositories) corresponde a todos os repositórios de fork que contêm a palavra "github".
| | [**forks:>500 fork:only**](https://github.com/search?q=forks%3A%3E500+fork%3Aonly&type=Repositories) corresponde aos repositórios com mais de 500 forks e retorna apenas aqueles que são forks.

## Leitura adicional

- "[Sobre os forks](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)"
- "[Sobre a pesquisa no GitHub](/search-github/getting-started-with-searching-on-github/about-searching-on-github)"
