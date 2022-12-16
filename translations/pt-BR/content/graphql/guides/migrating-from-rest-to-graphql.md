---
title: Fazer a migração de REST para o GraphQL
intro: 'Aprenda as melhores práticas e considerações para fazer a migração da API REST do {% data variables.product.prodname_dotcom %} para a API do GraphQL do {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /v4/guides/migrating-from-rest
  - /graphql/guides/migrating-from-rest
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
shortTitle: Migrate from REST to GraphQL
ms.openlocfilehash: dbafde83c8acac664b6a0f712927af82c646d397
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145065502'
---
## Diferenças na lógica da API

Fazer a migração da REST para o GraphQL representa uma mudança significativa na lógica da API. As diferenças entre a REST como um estilo e o GraphQL como uma especificação dificultam, e muitas vezes tornam indesejável, substituir chamadas à API REST por consultas de API do GraphQL individualmente. Incluímos abaixo exemplos específicos de migração.

Para migrar seu código da [API REST](/rest) para a API do GraphQL:

- Revise a [especificação do GraphQL](https://graphql.github.io/graphql-spec/June2018/)
- Revise o [esquema do GraphQL](/graphql/reference) do GitHub
- Considere como qualquer código existente que você tem atualmente interage com a API REST do GitHub
- Use [IDs de nó globais](/graphql/guides/using-global-node-ids) para referenciar objetos entre versões da API

As vantagens significativas do GraphQL incluem:

- [Obter os dados de que você precisa e somente isso](#example-getting-the-data-you-need-and-nothing-more)
- [Campos aninhados](#example-nesting)
- [Tipagem forte](#example-strong-typing)

Aqui estão exemplos de cada um.

## Exemplo: Obter os dados de que você precisa e somente isso

Uma única chamada da REST API recupera uma lista dos membros da sua organização:
```shell
curl -v {% data variables.product.api_url_pre %}/orgs/:org/members
```

A carga da REST contém dados excessivos se seu objetivo é recuperar apenas nomes de integrantes e links para avatares. No entanto, uma consulta do GraphQL retorna apenas o que você especifica:

```graphql
query {
    organization(login:"github") {
    membersWithRole(first: 100) {
      edges {
        node {
          name
          avatarUrl
        }
      }
    }
  }
}
```

Considere outro exemplo: recuperar uma lista de pull requests e verificar se cada um é mesclável. Uma chamada à API REST recupera uma lista de solicitações de pull e as respectivas [representações de resumo](/rest#summary-representations):
```shell
curl -v {% data variables.product.api_url_pre %}/repos/:owner/:repo/pulls
```

Determinar se uma solicitação de pull pode ser mesclada exige a recuperação de cada solicitação de pull individualmente para a [representação detalhada](/rest#detailed-representations) (um conteúdo grande) e a verificação do atributo `mergeable` ser verdadeiro ou falso:
```shell
curl -v {% data variables.product.api_url_pre %}/repos/:owner/:repo/pulls/:number
```

Com o GraphQL, você pode recuperar somente os atributos `number` e `mergeable` de cada solicitação de pull:

```graphql
query {
    repository(owner:"octocat", name:"Hello-World") {
    pullRequests(last: 10) {
      edges {
        node {
          number
          mergeable
        }
      }
    }
  }
}
```

## Exemplo: Aninhamento

Fazer consulta com campos aninhados permite substituir várias chamadas de REST por menos consultas do GraphQL. Por exemplo, a recuperação de uma solicitação de pull com os commits, comentários sem revisão e revisões usando a **API REST** exige quatro chamadas separadas:
```shell
curl -v {% data variables.product.api_url_pre %}/repos/:owner/:repo/pulls/:number
curl -v {% data variables.product.api_url_pre %}/repos/:owner/:repo/pulls/:number/commits
curl -v {% data variables.product.api_url_pre %}/repos/:owner/:repo/issues/:number/comments
curl -v {% data variables.product.api_url_pre %}/repos/:owner/:repo/pulls/:number/reviews
```

Usando a **API do GraphQL**, você pode recuperar os dados com uma só consulta usando campos aninhados:

```graphql
{
  repository(owner: "octocat", name: "Hello-World") {
    pullRequest(number: 1) {
      commits(first: 10) {
        edges {
          node {
            commit {
              oid
              message
            }
          }
        }
      }
      comments(first: 10) {
        edges {
          node {
            body
            author {
              login
            }
          }
        }
      }
      reviews(first: 10) {
        edges {
          node {
            state
          }
        }
      }
    }
  }
}
```

Você também pode estender o poder dessa consulta [substituindo uma variável](/graphql/guides/forming-calls-with-graphql#working-with-variables) pelo número da solicitação de pull.

## Exemplo: Digitação não flexível

Os esquemas do GraphQL são digitados de modo rígido, o que torna o gerenciamento dos dados mais seguro.

Considere um exemplo de adição de um comentário a uma solicitação de pull ou um problema usando uma [mutação](/graphql/reference/mutations) do GraphQL e da especificação incorreta de um inteiro em vez de uma cadeia de caracteres para o valor de [`clientMutationId`](/graphql/reference/mutations#addcomment):

```graphql
mutation {
  addComment(input:{clientMutationId: 1234, subjectId: "MDA6SXNzdWUyMjcyMDA2MTT=", body: "Looks good to me!"}) {
    clientMutationId
    commentEdge {
      node {
        body
        repository {
          id
          name
          nameWithOwner
        }
        issue {
          number
        }
      }
    }
  }
}
```

Executar esta consulta retorna erros especificando os tipos esperados para a operação:

```json
{
  "data": null,
  "errors": [
    {
      "message": "Argument 'input' on Field 'addComment' has an invalid value. Expected type 'AddCommentInput!'.",
      "locations": [
        {
          "line": 3,
          "column": 3
        }
      ]
    },
    {
      "message": "Argument 'clientMutationId' on InputObject 'AddCommentInput' has an invalid value. Expected type 'String'.",
      "locations": [
        {
          "line": 3,
          "column": 20
        }
      ]
    }
  ]
}
```

A colocação de `1234` entre aspas transforma o valor de um inteiro em uma cadeia de caracteres, o tipo esperado:

```graphql
mutation {
  addComment(input:{clientMutationId: "1234", subjectId: "MDA6SXNzdWUyMjcyMDA2MTT=", body: "Looks good to me!"}) {
    clientMutationId
    commentEdge {
      node {
        body
        repository {
          id
          name
          nameWithOwner
        }
        issue {
          number
        }
      }
    }
  }
}
```
