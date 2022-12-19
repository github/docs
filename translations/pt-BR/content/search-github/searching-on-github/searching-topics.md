---
title: Pesquisar tópicos
intro: 'Você pode pesquisar tópicos associados a repositórios no {% data variables.product.product_name %}.'
redirect_from:
  - /articles/searching-topics
  - /github/searching-for-information-on-github/searching-topics
  - /github/searching-for-information-on-github/searching-on-github/searching-topics
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
ms.openlocfilehash: b409f8476fe4191bab22ba90e502f18470937f4d
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145095513'
---
## Pesquisar tópicos no {% data variables.product.product_name %}

Você pode pesquisar tópicos no {% data variables.product.product_name %}, explorar tópicos relacionados e ver quantos repositórios estão associados a um tópico específico.

1. Navegue até https://github.com/search.
2. Insira uma palavra-chave de tópico.
  ![campo de pesquisa](/assets/images/help/search/search-field.png)
3. Na barra lateral esquerda, para restringir a pesquisa aos tópicos, clique em **Tópicos**.
{% ifversion fpt or ghec %} ![Página de resultados da pesquisa do repositório do Jekyll com a opção de menu lateral Tópicos realçada](/assets/images/help/search/topic-left-side-navigation-dotcom.png){% else %} ![Página de resultados da pesquisa do repositório do Jekyll no dotcom com a opção de menu lateral Tópicos realçada](/assets/images/help/search/topic-left-side-navigation.png){% endif %}

## Limitar a pesquisa com qualificadores de pesquisa

Caso deseje explorar repositórios sobre determinado tópico, encontrar projetos para contribuir com eles ou saber quais tópicos são mais populares no {% data variables.product.product_name %}, pesquise os tópicos com os qualificadores `is:featured`, `is:curated`, `repositories:n` e `created:YYYY-MM-DD`.

O qualificador de pesquisa `is:featured` restringirá os resultados da pesquisa aos tópicos com o maior número de repositórios no {% data variables.product.product_name %}. Esses tópicos também são apresentados em https://github.com/topics/.

O qualificador de pesquisa `is:curated` restringirá os resultados da pesquisa aos tópicos aos quais os membros da comunidade adicionaram informações extras. Para obter mais informações, confira o [repositório explore](https://github.com/github/explore).

Você pode filtrar tópicos com base na data de criação usando o parâmetro de data e `created:` ou com base no número de repositórios que estão associados a este tópico usando `repositories:n`. Os dois qualificadores podem usar os [qualificadores maior que, menor que e intervalo](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax).

{% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Qualificador  | Exemplo |
| ------------- | -------------
| `is:curated`| [**is:curated javascript**](https://github.com/search?utf8=%E2%9C%93&q=javascript+is%3Acurated&type=Topics) corresponde aos tópicos que são coletados e contêm a palavra "javascript".
| `is:featured` | [**is:featured javascript**](https://github.com/search?utf8=%E2%9C%93&q=javascript+is%3Afeatured&type=Topics) corresponde aos tópicos que são apresentados em https://github.com/topics/ e contêm a palavra "javascript".
|  `is:not-curated` | [**is:not-curated javascript**](https://github.com/search?utf8=%E2%9C%93&q=javascript+is%3Anot-curated&type=Topics) corresponde aos tópicos que não têm informações extras, como uma descrição ou um logotipo, e contêm a palavra "javascript".
|  `is:not-featured`| [**is:not-featured javascript**](https://github.com/search?utf8=%E2%9C%93&q=javascript+is%3Anot-featured&type=Topics) corresponde aos tópicos que não são apresentados em https://github.com/topics/ e contêm a palavra "javascript".
| `repositories:n` | [**repositories:&gt;5000**](https://github.com/search?q=repositories%3A%3E5000) corresponde aos tópicos que têm mais de cinco mil repositórios.
| <code>created:<em>YYYY-MM-DD</em></code> | [**Serverless created:&gt;2019-01-01**](https://github.com/search?q=Serverless+created%3A%3E2019-01-01&type=Topics) corresponde aos tópicos com a palavra "serverless" que foram criados após 2018.

## Pesquisar repositórios por tópico

Use o qualificador `topic:` para localizar todos os repositórios conectados a um tópico específico. Para obter mais informações, confira "[Pesquisa em repositórios](/search-github/searching-on-github/searching-for-repositories/#search-by-topic)".

## Leitura adicional
- "[Como classificar seu repositório com tópicos](/articles/classifying-your-repository-with-topics)"
