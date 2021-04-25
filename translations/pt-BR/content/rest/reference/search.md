---
title: Pesquisar
redirect_from:
  - /v3/search
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - api
---

A API de pesquisa ajuda a pesquisar o item específico que você deseja encontrar. Por exemplo, você pode encontrar um usuário ou um arquivo específico em um repositório. Pense nisso da mesma forma que você pensa em realizar uma pesquisa no Google. Ele é projetado para ajudá-lo a encontrar o resultado que você está procurando (ou talvez os poucos resultados que você está procurando). Assim como pesquisar no Google, às vezes, você quer ver algumas páginas com resultados de pesquisa para que você possa encontrar o item que melhor atenda às suas necessidades. Para atender a essa necessidade, a API de pesquisa do {% data variables.product.product_name %} fornece **até 1.000 resultados para cada pesquisa**.

Você pode restringir sua pesquisa usando as consultas. Para saber mais sobre a sintaxe de consultas de pesquisa, consulte "[Criar uma consulta de pesquisa](/rest/reference/search#constructing-a-search-query)".

### Resultados da pesquisa de classificação

A menos que outra opção de ordenamento seja fornecida como um parâmetro de consulta, os resultados são ordenados pela melhor correspondência e em ordem decrescente. Vários fatores são combinados para impulsionar o item mais relevante para a parte superior da lista de resultados.

### Limite de taxa

A API de pesquisa tem um limite de taxa personalizado. Para solicitações que usam a [Autenticação Básica](/rest#authentication)[OAuth ](/rest#authentication) ou [ID e segredo do cliente e](/rest#increasing-the-unauthenticated-rate-limit-for-oauth-applications), você pode fazer até 30 solicitações por minuto. Para solicitações não autenticadas, o limite de taxa permite que você faça até 10 solicitações por minuto.

{% data reusables.enterprise.rate_limit %}

Veja a [documentação do limite de taxa](/rest/reference/rate-limit) para obter informações sobre a determinação do seu status atual de limite de taxa.

### Criar uma consulta de pesquisa

Cada ponto de extremidade na API de Pesquisa usa [parâmetros de consulta](https://en.wikipedia.org/wiki/Query_string) para realizar pesquisas no {% data variables.product.product_name %}. Veja o ponto de extremidade individual na API de pesquisa para obter um exemplo que inclui o ponto de extremidade de parâmetros de consulta.

Uma consulta pode conter qualquer combinação de qualificadores de pesquisa compatíveis em {% data variables.product.product_name %}. O formato da consulta de pesquisa é:

```
SEARCH_KEYWORD_1 SEARCH_KEYWORD_N QUALIFIER_1 QUALIFIER_N
```

Por exemplo, se você quisesse pesquisar todos os _repositórios_ de propriedade de `defunkt` que continham a palavra `GitHub` e `Octocat` no arquivo README, você usaria a consulta seguinte com o ponto de extremidade _pesquisar repositórios_:

```
GitHub Octocat in:readme user:defunkt
```

**Observação:** Certifique-se de usar o codificador HTML preferido do seu idioma para construir suas strings de consulta. Por exemplo:
```javascript
// JavaScript
const queryString = 'q=' + encodeURIComponent('GitHub Octocat in:readme user:defunkt');
```

Veja "[Pesquisar no GitHub](/articles/searching-on-github/)" para obter uma lista completa de qualificadores disponíveis, seu formato e um exemplo de como usá-los. Para obter informações sobre como usar operadores para corresponder a quantidades e datas específicas ou para excluir resultados, consulte "[Entender a sintaxe de pesquisa](/articles/understanding-the-search-syntax/)".

### Limitações no tamanho da consulta

A API de pesquisa não é compatível com consultas que:
- têm tamanho superior a 256 caracteres (não incluindo operadores ou qualificadores).
- têm mais de cinco operadores de `E`, `OU` ou `NÃO` operadores.

Estas consultas de pesquisa irão retornar uma mensagem de erro "Ocorreu uma falha na validação".

### Tempo esgotado e resultados incompletos

Para manter a API de pesquisa rápida para todos, limitamos quanto tempo todas as consulta individual podem ser executadas. Para consultas que [excedem o tempo limite](https://developer.github.com/changes/2014-04-07-understanding-search-results-and-potential-timeouts/), a API retorna as correspondências que já foram encontradas antes do tempo limite, e a resposta tem a propriedade `incomplete_results` definida como `verdadeiro`.

Atingir um tempo limite não significa necessariamente que os resultados da pesquisa estão incompletos. É possível que mais resultados tenham sido, mas também é possível que não.

### Erros de acesso ou resultados de pesquisa ausentes

Você precisa efetuar a autenticação com sucesso e ter acesso aos repositórios nas consultas de pesquisa. Caso contrário, você verá um erro </code>422 Unprocessible Entry` com uma mensagem "Falha na validação". Por exemplo, sua pesquisa irá falhar se sua consulta incluir qualificadores <code>repo:`, `user:` ou `org:` que solicitam recursos aos quais você não tem acesso ao efetuar login em {% data variables.product.prodname_dotcom %}.

Quando sua consulta de pesquisa solicitar vários recursos, a resposta só conterá os recursos aos quais você tem acesso e **não** fornecerá uma mensagem de erro listando os recursos que não foram retornados.

Por exemplo, se sua consulta de pesquisa pesquisar os repositórios `octocat/test` e `codertocat/test`, mas você só tem acesso a `octocat/test`, a sua resposta mostrará resultados de pesquisa para `octocat/test` e nenhum resultado para `codertocat/teste`. Este comportamento imita como a pesquisa que funciona no {% data variables.product.prodname_dotcom %}.

{% include rest_operations_at_current_path %}


### Metadados da correspondência de texto

No GitHub, você pode usar o contexto fornecido por trechos de código e destaques nos resultados de pesquisa. A API de pesquisa oferece metadados adicionais que permitem que você destaque os termos de pesquisa correspondentes ao exibir resultados de busca.

![code-snippet-highlighting](/assets/images/text-match-search-api.png)

As solicitações podem optar por receber esses fragmentos de texto na resposta, e cada fragmento é acompanhado de ajustes numéricos que identificam a localização exata de cada termo de pesquisa correspondente.

Para obter esses metadados nos resultados da sua pesquisa, especifique o tipo de mídia de `text-match` no seu cabeçalho `Aceitar`.

```shell
application/vnd.github.v3.text-match+json
```

Ao fornecer o tipo de mídia `text-match`, você receberá uma chave extra na carga do JSON denominada `text_matches`, que fornece informações sobre a posição dos seus termos de pesquisa dentro do texto e da `propriedade` que inclui o termo de pesquisa. Dentro do array `text_match`, cada objeto inclui os atributos a seguir:

| Nome          | Descrição                                                                                                                                                                                                                                                                  |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `object_url`  | A URL para o recurso que contém uma propriedade de string que corresponde a um dos termos de pesquisa.                                                                                                                                                                     |
| `object_type` | O nome para o tipo de recurso que existe em determinado `object_url`.                                                                                                                                                                                                      |
| `propriedade` | O nome de uma propriedade do recurso que existe em `object_url`. Esta propriedade é uma string que corresponde a um dos termos de pesquisa. (No JSON retornado a partir de `object_url`, o conteúdo completo do `fragmento` será encontrado na propriedade com este nome.) |
| `fragmento`   | Um subconjunto do valor de `propriedade`. Este é o fragmento de texto que corresponde a um ou mais dos termos de pesquisa.                                                                                                                                                 |
| `matches`     | Um array de um ou mais termos de pesquisa que estão presentes no `fragmento`. Os índices (ou seja, "ajustes") são relativos ao fragmento. (Eles não são relativos ao conteúdo _completo_ de `propriedade`.)                                                                |

#### Exemplo

Se usarmos cURL e o [exemplo de pesquisa de problemas](#search-issues-and-pull-requests) acima, nossa solicitação de API seria da seguinte forma:

``` shell
curl -H 'Accept: application/vnd.github.v3.text-match+json' \
'{% data variables.product.api_url_pre %}/search/issues?q=windows+label:bug+language:python+state:open&sort=created&order=asc'
```

A resposta incluirá um array `text_matches` para cada resultado de pesquisa. No JSON abaixo, temos dois objetos no array `text_matches`.

A primeira correspondência de texto ocorreu na propriedade do `texto` do problema. Vemos um fragmento de texto a partir do texto do problema. O termo da pesquisa (`windows`) aparece duas vezes dentro desse fragmento, e temos os índices para cada ocorrência.

A segunda correspondência de texto ocorreu na propriedade do `texto` de um dos comentários do problema. Nós temos a URL do comentário do problema. E, evidentemente, vemos um fragmento de texto do comentário. O termo de pesquisa (`windows`) aparece uma vez dentro desse fragmento.

```json
{
  "text_matches": [
    {
      "object_url": "https://api.github.com/repositories/215335/issues/132",
      "object_type": "Issue",
      "property": "body",
      "fragment": "comprehensive windows font I know of).\n\nIf we can find a commonly distributed windows font that supports them then no problem (we can use html font tags) but otherwise the '(21)' style is probably better.\n",
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
      "fragment": " right after that are a bit broken IMHO :). I suppose we could have some hack that maxes out at whatever the font does...\n\nI'll check what the state of play is on Windows.\n",
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
