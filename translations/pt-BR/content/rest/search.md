---
title: Search
intro: 'A API de Pesquisa permite pesquisar itens específicos no {% data variables.product.product_name %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/search
ms.openlocfilehash: 71f21fc712f7c2121b780d79d20eb9615ad82c90
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147110358'
---
## Sobre a API de Pesquisa

A API de pesquisa ajuda a pesquisar o item específico que você deseja encontrar. Por exemplo, você pode encontrar um usuário ou um arquivo específico em um repositório. Pense nisso da mesma forma que você pensa em realizar uma pesquisa no Google. Ele é projetado para ajudá-lo a encontrar o resultado que você está procurando (ou talvez os poucos resultados que você está procurando). Assim como pesquisar no Google, às vezes, você quer ver algumas páginas com resultados de pesquisa para que você possa encontrar o item que melhor atenda às suas necessidades. Para atender a essa necessidade, a API de Pesquisa do {% data variables.product.product_name %} fornece **até mil resultados para cada pesquisa**.

Você pode restringir sua pesquisa usando as consultas. Para saber mais sobre a sintaxe de consulta de pesquisa, confira "[Como construir uma consulta de pesquisa](/rest/reference/search#constructing-a-search-query)".

### Resultados da pesquisa de classificação

A menos que outra opção de ordenamento seja fornecida como um parâmetro de consulta, os resultados são ordenados pela melhor correspondência e em ordem decrescente. Vários fatores são combinados para impulsionar o item mais relevante para a parte superior da lista de resultados.

### Limite de taxa

{% data reusables.enterprise.rate_limit %}

A API de pesquisa tem um limite de taxa personalizado. Para solicitações que usam a [Autenticação Básica](/rest#authentication), o [OAuth](/rest#authentication) ou a [ID do cliente e o segredo](/rest#increasing-the-unauthenticated-rate-limit-for-oauth-applications), é possível fazer até 30 solicitações por minuto. Para solicitações não autenticadas, o limite de taxa permite que você faça até dez solicitações por minuto.

Confira a [documentação do limite de taxa](/rest/reference/rate-limit) para obter detalhes sobre como determinar o status do limite de taxa atual.

### Criar uma consulta de pesquisa

Cada ponto de extremidade na API de Pesquisa usa [parâmetros de consulta](https://en.wikipedia.org/wiki/Query_string) para executar pesquisas no {% data variables.product.product_name %}. Veja o ponto de extremidade individual na API de pesquisa para obter um exemplo que inclui o ponto de extremidade de parâmetros de consulta.

Uma consulta pode conter qualquer combinação de qualificadores de pesquisa compatíveis em {% data variables.product.product_name %}. O formato da consulta de pesquisa é:

```
SEARCH_KEYWORD_1 SEARCH_KEYWORD_N QUALIFIER_1 QUALIFIER_N
```

Por exemplo, se você quiser pesquisar todos os _repositórios_ pertencentes a `defunkt` que contêm a palavra `GitHub` e `Octocat` no arquivo README, usará a seguinte consulta com o ponto de extremidade dos _repositórios de pesquisa_:

```
GitHub Octocat in:readme user:defunkt
```

**Observação:** lembre-se de usar o codificador de HTML preferencial da sua linguagem para construir cadeias de consulta. Por exemplo:
```javascript
// JavaScript
const queryString = 'q=' + encodeURIComponent('GitHub Octocat in:readme user:defunkt');
```

Confira "[Como fazer pesquisas no GitHub](/search-github/searching-on-github)" para ver uma lista completa de qualificadores disponíveis, o formato deles e um exemplo de como usá-los. Para obter informações sobre como usar operadores para corresponder a quantidades e datas específicas ou excluir resultados específicos, confira "[Noções básicas sobre a sintaxe de pesquisa](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax/)".

### Limitações no tamanho da consulta

A API de pesquisa não é compatível com consultas que:
- têm tamanho superior a 256 caracteres (não incluindo operadores ou qualificadores).
- têm mais de cinco operadores `AND`, `OR` ou `NOT`.

Estas consultas de pesquisa irão retornar uma mensagem de erro "Ocorreu uma falha na validação".

### Tempo esgotado e resultados incompletos

Para manter a API de Pesquisa rápida para todos, limitamos o tempo em que as consultas individuais podem ser executadas. Para consultas que [excedem o limite de tempo](https://developer.github.com/changes/2014-04-07-understanding-search-results-and-potential-timeouts/), a API retorna as correspondências que já foram encontradas antes do tempo limite, e a resposta tem a propriedade `incomplete_results` definida como `true`.

Atingir um tempo limite não significa necessariamente que os resultados da pesquisa estão incompletos.
É possível que mais resultados tenham sido, mas também é possível que não.

### Erros de acesso ou resultados de pesquisa ausentes

Você precisará se autenticar com sucesso e ter acesso aos repositórios nas consultas de pesquisa, caso contrário, verá um erro `422 Unprocessable Entry` com uma mensagem "Falha na validação". Por exemplo, a pesquisa falhará se a consulta incluir qualificadores `repo:`, `user:` ou `org:` que solicitam recursos aos quais você não tem acesso quando entra no {% data variables.product.prodname_dotcom %}.

Quando a consulta de pesquisa solicitar vários recursos, a resposta conterá apenas os recursos aos quais você tem acesso e **não** fornecerá uma mensagem de erro listando os recursos que não foram retornados.

Por exemplo, se a consulta de pesquisa pesquisar os repositórios `octocat/test` e `codertocat/test`, mas você só tiver acesso ao `octocat/test`, a resposta mostrará os resultados da pesquisa para o `octocat/test` e nada para o `codertocat/test`. Este comportamento imita como a pesquisa que funciona no {% data variables.product.prodname_dotcom %}.

### Metadados da correspondência de texto

No GitHub, você pode usar o contexto fornecido por trechos de código e destaques nos resultados de pesquisa. A API de pesquisa oferece metadados adicionais que permitem que você destaque os termos de pesquisa correspondentes ao exibir resultados de busca.

![code-snippet-highlighting](/assets/images/text-match-search-api.png)

As solicitações podem optar por receber esses fragmentos de texto na resposta, e cada fragmento é acompanhado de ajustes numéricos que identificam a localização exata de cada termo de pesquisa correspondente.

Para inserir esses metadados nos resultados da pesquisa, especifique o tipo de mídia `text-match` no cabeçalho `Accept`.

```shell
application/vnd.github.text-match+json
```

Ao fornecer o tipo de mídia `text-match`, você receberá uma chave extra no conteúdo JSON chamado `text_matches` que fornece informações sobre a posição dos termos de pesquisa no texto e a `property` que inclui o termo de pesquisa. Dentro da matriz `text_matches`, cada objeto inclui os seguintes atributos:

Nome | Descrição
-----|-----------|
`object_url` | A URL para o recurso que contém uma propriedade de string que corresponde a um dos termos de pesquisa.
`object_type` | O nome do tipo de recurso que existe na `object_url` especificada.
`property` | O nome de uma propriedade do recurso que existe em `object_url`. Esta propriedade é uma string que corresponde a um dos termos de pesquisa. (No JSON retornado da `object_url`, o conteúdo completo de `fragment` será encontrado na propriedade com esse nome).
`fragment` | Um subconjunto do valor de `property`. Este é o fragmento de texto que corresponde a um ou mais dos termos de pesquisa.
`matches` | Uma matriz de um ou mais termos de pesquisa que estão presentes em `fragment`. Os índices (ou seja, "ajustes") são relativos ao fragmento. (Eles não são relativos ao conteúdo _completo_ de `property`).

#### Exemplo

Usando o cURL e o [exemplo de pesquisa de problemas](#search-issues-and-pull-requests) acima, nossa solicitação de API será semelhante a esta:

``` shell
curl -H 'Accept: application/vnd.github.text-match+json' \
'{% data variables.product.api_url_pre %}/search/issues?q=windows+label:bug \
+language:python+state:open&sort=created&order=asc'
```

A resposta incluirá uma matriz `text_matches` para cada resultado da pesquisa. No JSON abaixo, temos dois objetos na matriz `text_matches`.

A primeira correspondência de texto ocorreu na propriedade `body` do problema. Vemos um fragmento de texto a partir do texto do problema. O termo de pesquisa (`windows`) aparece duas vezes nesse fragmento, e temos os índices de cada ocorrência.

A segunda correspondência de texto ocorreu na propriedade `body` de um dos comentários do problema. Nós temos a URL do comentário do problema. E, evidentemente, vemos um fragmento de texto do comentário. O termo de pesquisa (`windows`) aparece uma vez nesse fragmento.

```json
{
  "text_matches": [
    {
      "object_url": "https://api.github.com/repositories/215335/issues/132",
      "object_type": "Issue",
      "property": "body",
      "fragment": "comprehensive windows font I know of).\n\nIf we can find a commonly
      distributed windows font that supports them then no problem (we can use html
      font tags) but otherwise the '(21)' style is probably better.\n",
      "matches": [
        {
          "text": "windows",
          "indices": [
            14,
            21
          ]
        },
        {
          "text": "windows",
          "indices": [
            78,
            85
          ]
        }
      ]
    },
    {
      "object_url": "https://api.github.com/repositories/215335/issues/comments/25688",
      "object_type": "IssueComment",
      "property": "body",
      "fragment": " right after that are a bit broken IMHO :). I suppose we could
      have some hack that maxes out at whatever the font does...\n\nI'll check
      what the state of play is on Windows.\n",
      "matches": [
        {
          "text": "Windows",
          "indices": [
            163,
            170
          ]
        }
      ]
    }
  ]
}
```
