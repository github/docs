---
title: Usar o Explorador
intro: 'Você pode executar consultas em dados reais do {% data variables.product.prodname_dotcom %} ao usar o explorador do GraphQL, um ambiente integrado de desenvolvimento no seu navegador que inclui documentação, destaque de sintaxe e erros de validação.'
redirect_from:
  - /v4/guides/using-the-explorer
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
ms.openlocfilehash: 19c534dd0cdcacdfd0d96bb93d055ff3fca8690b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146749486'
---
## Sobre o explorador do GraphQL

{% ifversion fpt or ghec %}

O [GraphQL Explorer](/graphql/overview/explorer) é uma instância do [GraphiQL](https://github.com/graphql/graphiql), um "IDE gráfico interativo do GraphQL no navegador".

{% else %}

O [GraphiQL](https://github.com/graphql/graphiql), também conhecido como GraphQL Explorer nesta documentação, é um "IDE gráfico interativo do GraphQL no navegador".

{% endif %}

## Usar GraphiQL

Para usar o aplicativo do GraphiQL, baixe-o e instale-o em https://github.com/skevy/graphiql-app.

### Configurar GraphiQL

1. Obtenha um [token OAuth](/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql).
1. Iniciar o GraphiQL.
1. No canto superior direito do GraphiQL, clique em **Editar Cabeçalhos HTTP**.
1. No campo **Chave**, insira `Authorization`. No campo **Valor**, insira `Bearer <token>`, em que `<token>` é o seu token OAuth gerado.
![cabeçalhos do GraphiQL](/assets/images/developer/graphiql-headers.png)
1. Clique na marca de seleção à direita do token para salvá-lo.
1. Para voltar ao editor, clique fora da caixa de diálogo modal **Editar Cabeçalhos HTTP**.
1. No campo **Ponto de Extremidade do GraphQL**, insira `{% data variables.product.graphql_url_pre %}`.
1. No menu suspenso **Método**, selecione **POST**.

{% note %}

**Observação**: para obter mais informações sobre o motivo de o `POST` ser o método, confira "[Comunicação com o GraphQL](/graphql/guides/forming-calls-with-graphql#communicating-with-graphql)".

{% endnote %}

Você pode testar seu acesso consultando você mesmo:

```graphql
query {
  viewer {
    login
  }
}
```

Se tudo funcionou corretamente, isto irá mostrar seu login. Você está pronto para começar a fazer consultas.

## Acessar a documentação da barra lateral

Todos os tipos em um esquema do GraphQL incluem um campo `description` compilado na documentação. O painel recolhível **Documentação** no lado direito da página do Explorer permite que você navegue pela documentação sobre o sistema de tipos. A documentação é atualizada automaticamente e eliminará os campos obsoletos.

{% note %}

A barra lateral da **Documentação** contém o mesmo conteúdo gerado automaticamente com base no esquema em "[Referência](/graphql)", embora seja formatado de maneira diferente nos lugares.

{% endnote %}

## Usar o painel de variáveis

Alguns exemplos de chamadas incluem [variáveis](/graphql/guides/forming-calls-with-graphql#working-with-variables) escritas assim:

```graphql
query($number_of_repos:Int!){
  viewer {
    name
     repositories(last: $number_of_repos) {
       nodes {
         name
       }
     }
   }
}
variables {
   "number_of_repos": 3
}
```

Esse é o formato correto para enviar a chamada por meio de um cURL `POST` (desde que você [faça o escape das novas linhas](/graphql/guides/forming-calls-with-graphql#communicating-with-graphql)).

Caso deseje executar a chamada no Explorer, insira o segmento `query` no painel principal e as variáveis no painel **Variáveis de Consulta** abaixo dela. Omita a palavra `variables` do Explorer:

```graphql
{
   "number_of_repos": 3
}
```

## Solicitar suporte

{% data reusables.support.help_resources %}

## Solucionando erros

Como o GraphQL é [introspectivo](/graphql/guides/introduction-to-graphql#discovering-the-graphql-api), o Explorer dá suporte a:

* Preenchimento automático inteligente do esquema atual
* Pré-visualizações de erros durante a digitação

Se você inserir uma consulta que não esteja bem formada ou não seja aprovada na [validação de esquema](/graphql/guides/introduction-to-graphql#schema), um pop-up avisará sobre um erro. Se você executar a consulta, o erro será retornado no painel de resposta.

Uma resposta do GraphQL contém várias chaves: um hash `data` e uma matriz `errors`.

```json
{
  "data": null,
  "errors": [
    {
      "message": "Objects must have selections (field 'nodes' returns Repository but has no selections)",
      "locations": [
        {
          "line": 5,
          "column": 8
        }
      ]
    }
  ]
}
```

É possível que você possa encontrar um erro inesperado que não esteja relacionado com o esquema. Se isso acontecer, a mensagem incluirá um código de referência que você poderá usar ao relatar o problema:

```json
{
  "data": null,
  "errors": [
    {
      "message": "Something went wrong while executing your query. This is most likely a GitHub bug. Please include \"7571:3FF6:552G94B:69F45B7:5913BBEQ\" when reporting this issue."
    }
  ]
}
```

{% note %}

**Observação:** o {% data variables.product.prodname_dotcom %} recomenda verificar se há erros antes de usar dados em um ambiente de produção. No GraphQL, a falha não é total: algumas partes de consultas do GraphQL podem ser bem-sucedidas enquanto outras falham.

{% endnote %}
