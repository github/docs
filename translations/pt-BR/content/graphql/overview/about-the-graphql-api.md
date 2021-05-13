---
title: Sobre a API do GraphQL
intro: 'A API do GraphQL de {% data variables.product.prodname_dotcom %} oferece flexibilidade e a capacidade de definir precisamente os dados que você deseja buscar.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - API
---

### Visão Geral

Aqui estão alguns links rápidos para ajudá-lo colocar em funcionamento a API v4 do GraphQL:

* [Autenticação](/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql)
* [Ponto de extremidade raiz](/graphql/guides/forming-calls-with-graphql#the-graphql-endpoint)
* [Inspeção do esquema](/graphql/guides/introduction-to-graphql#discovering-the-graphql-api)
* [Limites de taxa](/graphql/overview/resource-limitations)
* [Fazer a migração de REST](/graphql/guides/migrating-from-rest-to-graphql)

### Sobre o GraphQL

A linguagem de consulta de dados do [GraphQL](https://graphql.github.io/) é:

* **Uma [especificação](https://graphql.github.io/graphql-spec/June2018/).** A especificação determina a validade do esquema [](/graphql/guides/introduction-to-graphql#schema) no servidor da API. O esquema determina a validade das chamadas dos clientes.

* **[Linguagem inflexível](#about-the-graphql-schema-reference).** O esquema define o sistema de tipos de uma API e todas as relações de objetos.

* **[Introspectivo](/graphql/guides/introduction-to-graphql#discovering-the-graphql-api).** Um cliente pode consultar o esquema para obter informações sobre o esquema.

* **[Hierárquico](/graphql/guides/forming-calls-with-graphql).** A forma de uma chamada do GraphQL espelha a forma dos dados do JSON que ela retorna. Os [Campos aninhados](/graphql/guides/migrating-from-rest-to-graphql#example-nesting) permitem que você consulte e receba apenas os dados que você especificar em uma única transação.

* **Uma camada do aplicativo** O GraphQL não é um modelo de armazenamento ou um linguagem de consulta de banco de dados. O _gráfico_ refere-se a estruturas gráficas definidas no esquema, em que [nós](/graphql/guides/introduction-to-graphql#node) definem os objetos e [bordas](/graphql/guides/introduction-to-graphql#edge) definem as relações entre os objetos. A API percorre e retorna dados do aplicativo com base nas definições do esquema, independentemente de como os dados são armazenados.

### Por que o GitHub está usando GraphQL

O GitHub escolheu o GraphQL para a nossa API v4 porque ele oferece muito mais flexibilidade para os nossos integradores. A capacidade de definir precisamente os dados que você deseja&mdash;e _apenas_ os dados que você quer&mdash;é uma vantagem poderosa dos pontos de extremidades da API REST v3. O GraphQL permite que você substitua várias solicitações de REST por _uma única chamada_ para buscar os dados que você especificar.

Para obter mais informações sobre por que o GitHub fez a migração para o GraphQL, consulte o [post de anúncio do blogue](https://githubengineering.com/the-github-graphql-api/) original.

### Sobre a referência do esquema do GraphQL

A documentação na barra lateral é gerada a partir do [esquema](/graphql/guides/introduction-to-graphql#discovering-the-graphql-api) de do GraphQL de {% data variables.product.prodname_dotcom %}. Todas as chamadas são validadas e executadas contra o esquema. Use estes documentos para descobrir quais dados você pode chamar:

* Operações permitidas: [consultas](/graphql/reference/queries) e [mutações](/graphql/reference/mutations).

* Esquema dos tipos: [escalares](/graphql/reference/scalars), [objetos](/graphql/reference/objects), [enumeradores](/graphql/reference/enums), [interfaces](/graphql/reference/interfaces), [união](/graphql/reference/unions) e [objetos de entrada](/graphql/reference/input-objects).

Você pode acessar esse mesmo conteúdo através da [Barra lateral de documentos do Explorador](/graphql/guides/using-the-explorer#accessing-the-sidebar-docs). Observe que você pode precisar confiar tanto na documentação quanto na validação do esquema para chamar com sucesso a API do GraphQL.

Para obter outras informações, como detalhes de autenticação e limite de taxa, confira os [guias](/graphql/guides).

### Solicitar suporte

{% data reusables.support.help_resources %}
