---
title: Introdução ao GraphQL
intro: Aprenda terminologia e conceitos úteis para usar a API do GraphQL do GitHub.
redirect_from:
  - /v4/guides/intro-to-graphql
  - /graphql/guides/intro-to-graphql
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Terminologia do GraphQL

A API do GraphQL do GitHub representa uma mudança estrutural e conceitual API REST do GitHub. Você provavelmente encontrará uma nova terminologia na [documentação de referência](/graphql) da API do GraphQL.

### Esquema

Um esquema define um sistema de tipos da API do GraphQL. Ele descreve o conjunto completo de dados possíveis (objetos, campos, relações, tudo) que um cliente pode acessar. As chamadas do cliente são [validadas](https://graphql.github.io/learn/validation/) e [executadas](https://graphql.github.io/learn/execution/) com base no esquema. Um cliente pode encontrar informações sobre o esquema através da [introspecção](#discovering-the-graphql-api). Um esquema reside no servidor da API do GraphQL. Para obter mais informações, consulte "[Descobrindo a API do GraphQL](#discovering-the-graphql-api)".

### Campo

Um campo é uma unidade de dados que você pode recuperar de um objeto. Conforme a [documentação oficial do GraphQL](https://graphql.github.io/learn/schema/) afirma: "A linguagem de consulta do GraphQL consiste, basicamente, em selecionar campos em objetos."

A especificação oficial do [](https://graphql.github.io/graphql-spec/June2018/#sec-Language.Fields) também afirmam sobre os campos:

> Todas as operações do GraphQL devem especificar suas seleções para os campos que retornam valores escalares a fim de garantir uma resposta de forma não ambígua.

Isso significa que se você tentar retornar um campo que não é escalar, a validação do esquema causará um erro. Você deve adicionar subcampos aninhados até que todos os campos retornam escalares.

### Argumento

Um argumento é um conjunto de pares de chave-valor anexados a um campo específico. Alguns campos exigem um argumento. As [Mutações](/graphql/guides/forming-calls-with-graphql#about-mutations) exigem um objeto de entrada como argumento.

### Implementação

Um esquema do GraphQL pode usar o termo _implementos_ para definir como um objeto herda de uma [interface](/graphql/reference/interfaces).

Aqui está um exemplo criado de um esquema que define a interface `X` e o objeto `Y`:

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

Este significa que o objeto `Y` exige os mesmos mesmos tipos de campo/argumento/retorno que a interface `X`, ao mesmo tempo que adiciona novos campos específicos para o objeto `Y`. (O sinal `!` significa que o campo é obrigatório).

Na documentação de referência, você descobrirá que:

* Cada [objeto](/graphql/reference/objects) lista a(s) interface(s) _das quais herda_ em **Implementos**.

* Cada [interface](/graphql/reference/interfaces) lista os objetos _dos quais herdam _ em **Implementações**.

### Conexão

As conexões permitem que você consulte objetos relacionados às consultas como parte da mesma chamada. Com as conexões, você pode usar uma única chamada do GraphQL quando você teria que usar várias chamadas para uma API REST. Para obter mais informações, consulte "[Migrando da REST para o GraphQL](/graphql/guides/migrating-from-rest-to-graphql)".

É útil imaginar um gráfico: pontos conectados por linhas. Os pontos são nós e as linhas são bordas. Uma conexão define uma relação entre os nós.

### Borda

As bordas representam conexões entre os nós. Quando você consulta uma conexão, você atravessa suas bordas para chegar a seus nós. Cada campo da `borda` tem um campo `nó` e um campo de `cursor`. Os cursores são usados para [paginação](https://graphql.github.io/learn/pagination/).

### Nó

_Nó_ é um termo genérico para um objeto. Você pode procurar um nó diretamente pode acessar nós relacionados através de uma conexão. Se você especificar um `nó` que não retorna um [escalar](/graphql/reference/scalars), você deverá incluir subcampos até que todos os campos retornem escalares. Para obter informações sobre acesso a IDs de nó através da API REST e usá-los em consultas do GraphQL, consulte "[Usando IDs globais de nó](/graphql/guides/using-global-node-ids)".

## Descobrindo a API do GraphQL

O GraphQL é [introspectivo](https://graphql.github.io/learn/introspection/). Isso significa que você pode consultar um esquema do GraphQL para obter informações sobre ele.

* Consulte `__schema` para listar todos os tipos definidos no esquema e obter informações sobre cada um:

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

* Consulte `__type` para obter informações sobre qualquer tipo:

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

* Você também pode executar uma _consulta de introspeção_ do esquema através de uma solicitação do `GET`:

  ```shell
  $ curl -H "Authorization: bearer <em>token</em>" {% data variables.product.graphql_url_pre %}
  ```

  Os resultados estão no JSON,. Portanto, recomendamos que sejam impressos para facilitar a leitura e pesquisa. Você pode usar uma ferramenta de linha de comando como [jq](https://stedolan.github.io/jq/) ou canalizar os resultados em `python -m json.tool` para essa finalidade.

  Como alternativa, você pode passar o tipo de mídia `idl` para retornar os resultados no formato IDL, que é uma versão condensada do esquema:

  ```shell
  $ curl -H "Authorization: bearer <em>token</em>" -H "Accept: application/vnd.github.v4.idl" \
  {% data variables.product.graphql_url_pre %}
  ```

  {% note %}

  **Observação**: A consulta de introspecção é provavelmente a única solicitação do `GET` que você irá executar no GraphQL. Se passar um texto, o método de solicitação do GraphQL é `POST`, seja uma consulta ou mutação.

  {% endnote %}

  Para obter mais informações sobre como realizar consultas, consulte "[Formando de chamadas com o GraphQL](/graphql/guides/forming-calls-with-graphql)".
