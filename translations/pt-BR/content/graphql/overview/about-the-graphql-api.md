---
title: Sobre a API do GraphQL
intro: 'A API do GraphQL de {% data variables.product.prodname_dotcom %} oferece flexibilidade e a capacidade de definir precisamente os dados que você deseja buscar.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
ms.openlocfilehash: 9b447925609425157d5d965370c09fdd12d30b56
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145065492'
---
## Visão geral

Aqui estão alguns links rápidos para ajudar você a colocar em funcionamento a API do GraphQL:

* [Autenticação](/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql)
* [Ponto de extremidade raiz](/graphql/guides/forming-calls-with-graphql#the-graphql-endpoint)
* [Introspecção de esquema](/graphql/guides/introduction-to-graphql#discovering-the-graphql-api)
* [Limites de taxa](/graphql/overview/resource-limitations)
* [Migração da REST](/graphql/guides/migrating-from-rest-to-graphql)

## Sobre o GraphQL

A linguagem de consulta de dados [GraphQL](https://graphql.github.io/) é:

* **Uma [especificação](https://graphql.github.io/graphql-spec/June2018/).** A especificação determina a validade do [esquema](/graphql/guides/introduction-to-graphql#schema) no servidor de API. O esquema determina a validade das chamadas dos clientes.

* **[Fortemente tipada](#about-the-graphql-schema-reference).** O esquema define o sistema de tipos e todas as relações de objeto de uma API.

* **[Introspectiva](/graphql/guides/introduction-to-graphql#discovering-the-graphql-api).** Um cliente pode consultar o esquema para ver detalhes sobre o esquema.

* **[Hierárquica](/graphql/guides/forming-calls-with-graphql).** A forma de uma chamada do GraphQL espelha a forma dos dados JSON retornados. Os [campos aninhados](/graphql/guides/migrating-from-rest-to-graphql#example-nesting) permitem consultar e receber apenas os dados especificados em uma só ida e volta.

* **Uma camada de aplicativo.** O GraphQL não é um modelo de armazenamento nem uma linguagem de consulta de banco de dados. O _grafo_ refere-se a estruturas de grafo definidas no esquema, em que [nós](/graphql/guides/introduction-to-graphql#node) definem os objetos e [bordas](/graphql/guides/introduction-to-graphql#edge) definem as relações entre objetos. A API percorre e retorna dados do aplicativo com base nas definições do esquema, independentemente de como os dados são armazenados.

## Por que o GitHub está usando GraphQL

O GitHub escolheu o GraphQL, porque oferece muito mais flexibilidade para os nossos integradores. A capacidade de definir com precisão os dados desejados (e _apenas_ os dados desejados) são uma excelente vantagem em relação aos pontos de extremidade tradicionais da API REST. O GraphQL permite que você substitua várias solicitações da REST por _uma só chamada_ para buscar os dados especificados.

Para obter mais detalhes sobre por que o GitHub investiu no GraphQL, confira a [postagem no blog do comunicado](https://github.blog/2016-09-14-the-github-graphql-api/) original.

## Sobre a referência do esquema do GraphQL

A documentação na barra lateral é gerada com base no [esquema](/graphql/guides/introduction-to-graphql#discovering-the-graphql-api) do GraphQL do {% data variables.product.prodname_dotcom %}. Todas as chamadas são validadas e executadas contra o esquema. Use estes documentos para descobrir quais dados você pode chamar:

* Operações permitidas: [consultas](/graphql/reference/queries) e [mutações](/graphql/reference/mutations).

* Tipos definidos por esquema: [escalares](/graphql/reference/scalars), [objetos](/graphql/reference/objects), [enumerações](/graphql/reference/enums), [interfaces](/graphql/reference/interfaces), [uniões](/graphql/reference/unions) e [objetos de entrada](/graphql/reference/input-objects).

Acesse esse mesmo conteúdo por meio da [barra lateral do Explorer Docs](/graphql/guides/using-the-explorer#accessing-the-sidebar-docs). Observe que você pode precisar confiar tanto na documentação quanto na validação do esquema para chamar com sucesso a API do GraphQL.

Para obter outras informações, como detalhes de autenticação e limite de taxa, confira os [guias](/graphql/guides).

## Solicitar suporte

{% data reusables.support.help_resources %}
