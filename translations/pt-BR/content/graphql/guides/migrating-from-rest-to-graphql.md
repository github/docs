---
title: Fazer a migração de REST para o GraphQL
intro: 'Aprenda as melhores práticas e considerações para fazer a migração da API REST do {% data variables.product.prodname_dotcom %} para a API do GraphQL do {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /v4/guides/migrating-from-rest
  - /graphql/guides/migrating-from-rest
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Diferenças na lógica da API

Fazer a migração da REST para o GraphQL representa uma mudança significativa na lógica da API. As diferenças entre a REST como um estilo e o GraphQL como uma especificação tornam difícil &mdash;e, muitas vezes indesejável&mdash;substituir as chamadas da API REST por consultas da API do GraphQL individualmente. Incluímos abaixo exemplos específicos de migração.

Para fazer a migração do seu código da [API REST](/v3) para a API do GraphQL:

- Revise a [especificação do GraphQL](https://graphql.github.io/graphql-spec/June2018/)
- Revise o [esquema do GraphQL](/v4/reference/) do GitHub
- Considere como qualquer código existente que você tem atualmente interage com a API REST do GitHub
- Use [IDs dos nó global](/v4/guides/using-global-node-ids) para fazer referência a objetos entre as versões da API

As vantagens significativas do GraphQL incluem:

- [Obter os dados de que você precisa e somente isso](#example-getting-the-data-you-need-and-nothing-more)
- [Campos aninhados](#example-nesting)
- [Digitação não flexível](#example-strong-typing)

Aqui estão exemplos de cada um.

## Exemplo: Obter os dados de que você precisa e somente isso

Uma única chamada da REST API recupera uma lista dos membros da sua organização:
```shell
curl -v {% data variables.product.api_url_pre %}/orgs/:org/membros
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

Considere outro exemplo: recuperar uma lista de pull requests e verificar se cada um é mesclável. Uma chamada para a API REST recupera uma lista de pull requests e suas [representações resumidas](/v3/#summary-representations):
```shell
curl -v {% data variables.product.api_url_pre %}/repos/:owner/:repo/pulls
```

Determinar se um pull request pode ser mesclado demanda recuperar cada pull request individualmente para sua [representação detalhada](/v3/#detailed-representations) (uma grande carga), bem como verificar seu atributo `mesclável` é verdadeiro ou falso:
```shell
curl -v {% data variables.product.api_url_pre %}/repos/:owner/:repo/pulls/:number
```

Com o GraphQL, você pode recuperar apenas os atributos `número` e `mesclável` para cada pull request:

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

Fazer consulta com campos aninhados permite substituir várias chamadas de REST por menos consultas do GraphQL. Por exemplo, recuperar um pull request junto com seus commits, comentários que não são de revisão e revisões usando a **API REST** exige quatro chamadas separadas:
```shell
curl -v {% data variables.product.api_url_pre %}/repos/:owner/:repo/pulls/:number
curl -v {% data variables.product.api_url_pre %}/repos/:owner/:repo/pulls/:number/commits
curl -v {% data variables.product.api_url_pre %}/repos/:owner/:repo/issues/:number/comments
curl -v {% data variables.product.api_url_pre %}/repos/:owner/:repo/pulls/:number/reviews
```

Ao usar a **API do GraphQL**, você pode recuperar os dados com uma única consulta usando campos aninhados:

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

Você também pode estender o poder dessa consulta se [substitui uma variável](/v4/guides/forming-calls/#working-with-variables) para o número do pull request.

## Exemplo: Digitação não flexível

Os esquemas do GraphQL são digitados de modo rígido, o que torna o gerenciamento dos dados mais seguro.

Considere um exemplo de adição de um comentário a um problema ou pull request usando uma [mutação ](/v4/mutation) do GraphQL e especificando por engano um número inteiro em vez de uma string para o valor de [`clientMutationId`](/v4/mutation/addcomment/):

```graphql
mutation {
  addComment(input:{clientMutationId: 1234, subjectId: "MDA6SXNzdWUyMjcyMDA2MTT=", body: "Looks good to me!"}) "Looks good to me!"}) {
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

Colocar `1234` entre aspas transforma o valor de um inteiro em uma string, o tipo esperado:

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
