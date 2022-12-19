---
title: Gerenciar contas corporativas
intro: Você pode gerenciar sua conta corporativa e as organizações detêm com a API do GraphQL.
redirect_from:
  - /v4/guides/managing-enterprise-accounts
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
shortTitle: Manage enterprise accounts
ms.openlocfilehash: c55a2b23ff88214739402f78f00c2682c97df93b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106778'
---
## Sobre o gerenciamento de contas corporativas com o GraphQL

Para ajudá-lo a monitorar e fazer alterações nas suas organizações e manter a conformidade, você pode usar a API de Contas corporativas e a API de log de auditoria, que estão disponíveis apenas como APIs do GraphQL.

Os pontos finais da conta corporativa funcionam tanto para o GitHub Enterprise Cloud quanto para o GitHub Enterprise Server.

O GraphQL permite que você solicite e retorne apenas os dados especificados. Por exemplo, você pode criar uma consulta GraphQL ou solicitar informações para ver todos os novos membros da organização adicionados à sua organização. Ou você pode fazer uma mutação ou alteração para convidar um administrador para sua conta corporativa.

Com a API do Log de Auditoria, você pode monitorar quando alguém:
- Acessa as configurações de sua organização ou repositório.
- Altera as permissões.
- Adiciona ou remove usuários em uma organização, repositório ou equipe.
- Promove os usuários a administrador.
- Altera as permissões de um aplicativo GitHub.

A API do Log de Auditoria permite que você mantenha cópias dos dados do log de auditoria. Para consultas feitas com a API do Log de Auditoria, a resposta do GraphQL pode incluir dados de 90 a 120 dias. Para ver uma lista dos campos disponíveis na API de Log de Auditoria, confira a "[interface do AuditEntry](/graphql/reference/interfaces#auditentry/)".

Com a API de Contas corporativas, você pode:
- Listar e revisar todas as organizações e repositórios que pertencem à conta corporativa.
- Alterar configurações da conta empresarial.
- Configurar políticas para configurações na conta corporativa e em suas organizações.
- Convidar os administradores para a sua conta corporativa.
- Criar novas organizações na sua conta corporativa.

Para ver uma lista dos campos disponíveis na API de Contas Enterprise, confira "[Campos e tipos do GraphQL para a API de Contas Enterprise](/graphql/guides/managing-enterprise-accounts#graphql-fields-and-types-for-the-enterprise-accounts-api)".

## Primeiros passos usando o GraphQL para contas corporativas

Siga estes passos para começar a usar o GraphQL para gerenciar as suas contas corporativas:
 - Autenticação com um {% data variables.product.pat_generic %}
 - Escolher um cliente do GraphQL ou usar o Explorador do GraphQL
 - Configurar a o Insomnia para usar a API do GraphQL

Para ver alguns exemplos de consultas, confira "[Um exemplo de consulta que usa a API de Contas Enterprise](#an-example-query-using-the-enterprise-accounts-api)".

### 1. Autenticar com o {% data variables.product.pat_generic %}

{% data reusables.user-settings.graphql-classic-pat-only %}

1. Para fazer a autenticação com o GraphQL, você precisa gerar um {% data variables.product.pat_generic %} por meio das configurações do desenvolvedor. Para obter mais informações, confira "[Como criar um {% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token)".

2. Conceda permissões de administrador e controle completo ao {% data variables.product.pat_generic %} para as áreas do GHES que você quer acessar. Para obter a permissão completa a repositórios privados, organizações, equipes, dados de usuário e acesso aos dados de cobrança e de perfil da empresa, recomendamos que você selecione estes escopos para o {% data variables.product.pat_generic %}:
    - `repo`
    - `admin:org`
    - `user`
    - `admin:enterprise`

  Os escopos específicos da conta corporativa são:
    - `admin:enterprise`: fornece controle completo das empresas (inclui `manage_runners:enterprise`, `manage_billing:enterprise` e `read:enterprise`)
    - `manage_billing:enterprise`: lê e grava dados de cobrança da empresa.{% ifversion ghes or ghae %}
    - `manage_runners:enterprise`: acesso para gerenciar executores da empresa e grupos de executores do GitHub Actions.{% endif %}
    - `read:enterprise`: lê os dados de perfil da empresa.

3. Copie o {% data variables.product.pat_generic %} e cole-o em um lugar seguro até adicioná-lo ao cliente do GraphQL.

### 2. Escolher um cliente do GraphQL

Recomendamos que você use o GraphiQL ou outro cliente autônomo do GraphQL que permite configurar a URL de base.

Você também pode considerar o uso destes clientes do GraphQL:
  - [Insomnia](https://support.insomnia.rest/article/176-graphql-queries)
  - [GraphiQL](https://www.gatsbyjs.org/docs/running-queries-with-graphiql/)
  - [Postman](https://learning.getpostman.com/docs/postman/sending_api_requests/graphql/)

As próximas etapas usarão o Insomnia.

### 3. Como configurar o Insomnia para usar a API do GraphQL no GitHub com as contas corporativas

1. Adicione a URL base e `POST` o método ao cliente do GraphQL. Ao usar o GraphQL para solicitar informações (consultas), alterar informações (mutações) ou transferir dados usando a API do GitHub, o método HTTP padrão é `POST` e a URL base segue esta sintaxe:
    - Para sua instância corporativa: `https://<HOST>/api/graphql`
    - Para o GitHub Enterprise Cloud: `https://api.github.com/graphql`

2. Para se autenticar, abra o menu de opções de autenticação e selecione **Token de portador**. Depois, adicione o {% data variables.product.pat_generic %} que você copiou anteriormente.

 ![Opções de permissões para o {% data variables.product.pat_generic %}](/assets/images/developer/graphql/insomnia-base-url-and-pat.png)

 ![Opções de permissões para o {% data variables.product.pat_generic %}](/assets/images/developer/graphql/insomnia-bearer-token-option.png)

3. Incluir informações do header.
   - Adicione `Content-Type` como o cabeçalho e `application/json` como o valor.
   ![Cabeçalho padrão](/assets/images/developer/graphql/json-content-type-header.png)
   ![Cabeçalho com valor de visualização para a API de Log de Auditoria](/assets/images/developer/graphql/preview-header-for-2.18.png)

Agora você está pronto para começar a fazer consultas.

## Um exemplo e consulta usando a API de Contas corporativas

Esta consulta do GraphQL solicita o número total de repositórios {% ifversion not ghae %}`public`{% else %}`private`{% endif %} em cada uma das organizações do seu dispositivo usando a API de Contas Enterprise. Para personalizar essa consulta, substitua `<enterprise-account-name>` pelo identificador da sua conta corporativa. Por exemplo, se a sua conta corporativa estiver localizada em `https://github.com/enterprises/octo-enterprise`, substitua `<enterprise-account-name>` por `octo-enterprise`.

{% ifversion not ghae %}

```graphql
query publicRepositoriesByOrganization($slug: String!) {
  enterprise(slug: $slug) {
    ...enterpriseFragment
  }
}

fragment enterpriseFragment on Enterprise {
  ... on Enterprise{
    name
    organizations(first: 100){
      nodes{
        name
        ... on Organization{
          name
          repositories(privacy: PUBLIC){
            totalCount
          }
        }
      }
    }
  }
}

# Passing our Enterprise Account as a variable
variables {
  "slug": "<enterprise-account-name>"
}
```

{% else %}

```graphql
query privateRepositoriesByOrganization($slug: String!) {
  enterprise(slug: $slug) {
    ...enterpriseFragment
  }
}

fragment enterpriseFragment on Enterprise {
  ... on Enterprise{
    name
    organizations(first: 100){
      nodes{
        name
        ... on Organization{
          name
          repositories(privacy: PRIVATE){
            totalCount
          }
        }
      }
    }
  }
}

# Passing our Enterprise Account as a variable
variables {
  "slug": "<enterprise-account-name>"
}
```
{% endif %}

O próximo exemplo de consulta GraphQL mostra como é complexo recuperar o número de repositórios {% ifversion not ghae %}`public`{% else %}`private`{% endif %} em cada organização sem usar a API de Contas Enterprise.  Observe que a API de Contas corporativas do GraphQL simplificou esta tarefa para empresas, pois você só precisa personalizar uma única variável. Para personalizar essa consulta, substitua `<name-of-organization-one>` e `<name-of-organization-two>` etc. pelos nomes da organização na sua instância.

{% ifversion not ghae %}
```graphql
# Each organization is queried separately
{
  organizationOneAlias: organization(login: "nameOfOrganizationOne") {
    # How to use a fragment
    ...repositories
  }
  organizationTwoAlias: organization(login: "nameOfOrganizationTwo") {
    ...repositories
  }
  # organizationThreeAlias ... and so on up-to lets say 100
}

## How to define a fragment
fragment repositories on Organization {
  name
  repositories(privacy: PUBLIC){
    totalCount
  }
}
```
{% else %}
```graphql
# Each organization is queried separately
{
  organizationOneAlias: organization(login: "name-of-organization-one") {
    # How to use a fragment
    ...repositories
  }
  organizationTwoAlias: organization(login: "name-of-organization-two") {
    ...repositories
  }
  # organizationThreeAlias ... and so on up-to lets say 100
}

## How to define a fragment
fragment repositories on Organization {
  name
  repositories(privacy: PRIVATE){
    totalCount
  }
}
```
{% endif %}

## Consulte cada organização separadamente

{% ifversion not ghae %}

```graphql
query publicRepositoriesByOrganization {
  organizationOneAlias: organization(login: "<name-of-organization-one>") {
    # How to use a fragment
    ...repositories
  }
  organizationTwoAlias: organization(login: "<name-of-organization-two>") {
    ...repositories
  }
  # organizationThreeAlias ... and so on up-to lets say 100
}
# How to define a fragment
fragment repositories on Organization {
  name
  repositories(privacy: PUBLIC){
    totalCount
  }
}
```

{% else %}

```graphql
query privateRepositoriesByOrganization {
  organizationOneAlias: organization(login: "<name-of-organization-one>") {
    # How to use a fragment
    ...repositories
  }
  organizationTwoAlias: organization(login: "<name-of-organization-two>") {
    ...repositories
  }
  # organizationThreeAlias ... and so on up-to lets say 100
}
# How to define a fragment
fragment repositories on Organization {
  name
  repositories(privacy: PRIVATE){
    totalCount
  }
}
```

{% endif %}

Esta consulta do GraphQL solicita as últimas 5 entradas de registro para uma organização corporativa. Para personalizar essa consulta, substitua `<org-name>` e `<user-name>`.

```graphql
{
  organization(login: "<org-name>") {
    auditLog(last: 5, query: "actor:<user-name>") {
      edges {
        node {
          ... on AuditEntry {
# Get Audit Log Entry by 'Action'
            action
            actorLogin
            createdAt
# User 'Action' was performed on
           user{
              name
                email
            }
          }
        }
      }
    }
  }
}
```

Para obter mais informações sobre como começar a usar o GraphQL, confira "[Introdução ao GraphQL](/graphql/guides/introduction-to-graphql)" e "[Como formar chamadas com o GraphQL](/graphql/guides/forming-calls-with-graphql)".

## Campos e tipos do GraphQL para a API de Contas corporativas

Aqui está uma visão geral das novas consultas, mutações e tipos definidos por esquema disponíveis para uso com a API de Contas corporativas.

Para obter mais detalhes sobre as novas consultas, as mutações e os tipos definidos por esquema disponíveis para uso na API de Contas Enterprise, confira a barra lateral com definições detalhadas do GraphQL de qualquer [página de referência do GraphQL](/graphql).

Você pode acessar a documentação de referência de no explorador do GraphQL no GitHub. Para obter mais informações, confira "[Como usar o Explorer](/graphql/guides/using-the-explorer#accessing-the-sidebar-docs)".
Para obter outras informações, como detalhes de autenticação e limite de taxa, confira os [guias](/graphql/guides).
