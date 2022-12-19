---
title: Introdução ao GraphQL
intro: Aprenda terminologia e conceitos úteis para usar a API do GraphQL do GitHub.
redirect_from:
  - /v4/guides/intro-to-graphql
  - /graphql/guides/intro-to-graphql
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
ms.openlocfilehash: abc74dfd4aa65035405fd956c6438a487381284b
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145065509'
---
## Terminologia do GraphQL

A API do GraphQL do GitHub representa uma mudança estrutural e conceitual API REST do GitHub. Provavelmente, você encontrará uma nova terminologia na [documentação de referência](/graphql) da API do GraphQL.

## Esquema

Um esquema define um sistema de tipos da API do GraphQL. Ele descreve o conjunto completo de dados possíveis (objetos, campos, relações, tudo) que um cliente pode acessar. As chamadas do cliente são [validadas](https://graphql.github.io/learn/validation/) e [executadas](https://graphql.github.io/learn/execution/) no esquema. Um cliente pode encontrar informações sobre o esquema por meio da [introspecção](#discovering-the-graphql-api). Um esquema reside no servidor da API do GraphQL. Para obter mais informações, confira "[Como descobrir a API do GraphQL](#discovering-the-graphql-api)".

## Campo

Um campo é uma unidade de dados que você pode recuperar de um objeto. Como indica a [documentação oficial do GraphQL](https://graphql.github.io/learn/schema/): "A linguagem de consulta GraphQL trata basicamente da seleção de campos em objetos".

A [especificação oficial](https://graphql.github.io/graphql-spec/June2018/#sec-Language.Fields) também traz informações sobre os campos:

> Todas as operações do GraphQL devem especificar suas seleções para os campos que retornam valores escalares a fim de garantir uma resposta de forma não ambígua.

Isso significa que se você tentar retornar um campo que não é escalar, a validação do esquema causará um erro. Você deve adicionar subcampos aninhados até que todos os campos retornam escalares.

## Argumento

Um argumento é um conjunto de pares de chave-valor anexados a um campo específico. Alguns campos exigem um argumento. As [mutações](/graphql/guides/forming-calls-with-graphql#about-mutations) exigem um objeto de entrada como argumento.

## Implementação

Um esquema do GraphQL pode usar o termo _implementos_ para definir como um objeto herda de uma [interface](/graphql/reference/interfaces).

Veja um exemplo inventado de um esquema que define a interface `X` e o objeto `Y`:

```
interface X {
  some_field: String!
  other_field: String!
}

type Y implements X {
  some_field: String!
  other_field: String!
  new_field: String!
}
```

Isso significa que o objeto `Y` exige os mesmos campos/argumentos/tipos de retorno da interface `X`, adicionando novos campos específicos ao objeto `Y`. (O `!` significa que o campo é obrigatório).

Na documentação de referência, você descobrirá que:

* Cada [objeto](/graphql/reference/objects) lista as interfaces _das quais ela herda_ em **Implementos**.

* Cada [interface](/graphql/reference/interfaces) lista os objetos _que herdam dele_ em **Implementações**.

## Conexão

As conexões permitem que você consulte objetos relacionados às consultas como parte da mesma chamada. Com as conexões, você pode usar uma única chamada do GraphQL quando você teria que usar várias chamadas para uma API REST. Para obter mais informações, confira "[Como migrar da REST para o GraphQL](/graphql/guides/migrating-from-rest-to-graphql)".

É útil imaginar um gráfico: pontos conectados por linhas. Os pontos são nós e as linhas são bordas. Uma conexão define uma relação entre os nós.

## Microsoft Edge

As bordas representam conexões entre os nós. Quando você consulta uma conexão, você atravessa suas bordas para chegar a seus nós. Cada campo `edges` tem um campo `node` e um campo `cursor`. Os cursores são usados para [paginação](https://graphql.github.io/learn/pagination/).

## Nó

_Nó_ é um termo genérico para um objeto. Você pode procurar um nó diretamente pode acessar nós relacionados através de uma conexão. Se você especificar um `node` que não retorna um [escalar](/graphql/reference/scalars), precisará incluir subcampos até que todos os campos retornem escalares. Para obter informações sobre como acessar IDs de nó por meio da API REST e usá-las em consultas GraphQL, confira "[Como usar IDs de nó global](/graphql/guides/using-global-node-ids)".

## Descobrindo a API do GraphQL

O GraphQL é [introspectivo](https://graphql.github.io/learn/introspection/). Isso significa que você pode consultar um esquema do GraphQL para obter informações sobre ele.

* Consulte `__schema` para listar todos os tipos definidos no esquema e obter detalhes sobre cada um:

  ```graphql
  query {
    __schema {
      types {
        name
        kind
        description
        fields {
          name
        }
      }
    }
  }
  ```

* Consulte `__type` para obter detalhes sobre qualquer tipo:

  ```graphql
  query {
    __type(name: "Repository") {
      name
      kind
      description
      fields {
        name
      }
    }
  }
  ```

* Você também pode executar uma _consulta de introspecção_ do esquema por meio de uma solicitação `GET`:

  ```shell
  $ curl -H "Authorization: bearer <em>token</em>" {% data variables.product.graphql_url_pre %}
  ```
  
  {% note %}

  **Observação**: se você receber a resposta `"message": "Bad credentials"` ou `401 Unauthorized`, verifique se está usando um token válido. Para obter mais informações, confira "[Como criar um token de acesso pessoal](/github/authenticating-to-github/creating-a-personal-access-token)". 

  {% endnote %}
  
  Os resultados estão no JSON,. Portanto, recomendamos que sejam impressos para facilitar a leitura e pesquisa. Use uma ferramenta de linha de comando como o [jq](https://stedolan.github.io/jq/) ou encaminhe os resultados a `python -m json.tool` para essa finalidade.
  
  Como alternativa, você pode transmitir o tipo de mídia `idl` para retornar os resultados no formato IDL, que é uma versão condensada do esquema:

  ```shell
  $ curl -H "Authorization: bearer <em>token</em>" -H "Accept: application/vnd.github.v4.idl" \
  {% data variables.product.graphql_url_pre %}
  ```

  {% note %}

  **Observação**: a consulta de introspecção é provavelmente a única solicitação `GET` que você executará no GraphQL. Se você estiver transmitindo um corpo, o método de solicitação do GraphQL será `POST`, seja uma consulta ou uma mutação.

  {% endnote %}

  Para obter mais informações sobre como executar consultas, confira "[Como formar chamadas com o GraphQL](/graphql/guides/forming-calls-with-graphql)".
