---
title: Gerenciar contas corporativas
intro: Você pode gerenciar sua conta corporativa e as organizações detêm com a API do GraphQL.
redirect_from:
  - /v4/guides/managing-enterprise-accounts
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - API
---

### Sobre o gerenciamento de contas corporativas com o GraphQL

Para ajudá-lo a monitorar e fazer alterações nas suas organizações e manter a conformidade, você pode usar a API de Contas corporativas e a API de log de auditoria, que estão disponíveis apenas como APIs do GraphQL.

Os pontos finais da conta corporativa funcionam tanto para o GitHub Enterprise Cloud quanto para o GitHub Enterprise Server.

O GraphQL permite que você solicite e retorne apenas os dados especificados. Por exemplo, você pode criar uma consulta GraphQL ou uma solicitação de informações para ver todos os novos integrantes da organização adicionados à sua organização. Ou você pode fazer uma mutação ou alteração para convidar um administrador para a sua conta corporativa.

Com a API de Log de Auditoria, você pode monitorar quando alguém:
- Acessa as configurações da sua organização ou repositório.
- Altera permissões.
- Adiciona ou remove usuários em uma organização, repositório ou equipe.
- Promove usuários a admininistradores.
- Altera as permissões de um aplicativo GitHub.

A API de Log de Auditoria permite que você mantenha cópias dos seus dados do log de auditoria. Para consultas feitas com a API do Log de Auditoria, a resposta do GraphQL pode incluir dados de 90 a 120 dias. Para obter uma lista dos campos disponíveis na API do Log de Auditoria, consulte a "[interface AuditEntry](/graphql/reference/interfaces#auditentry/)".

Com a API de Contas corporativas, você pode:
- Listar e revisar todas as organizações e repositórios que pertencem à conta corporativa.
- Alterar configurações da conta empresarial.
- Configurar políticas para configurações na conta corporativa e em suas organizações.
- Convidar os administradores para a sua conta corporativa.
- Criar novas organizações na sua conta corporativa.

Para obter uma lista dos campos disponíveis da API de Contas corprativas, consulte "[campos e tipos do GraphQL para a API de Conta corporativa](/graphql/guides/managing-enterprise-accounts#graphql-fields-and-types-for-the-enterprise-accounts-api)".

### Primeiros passos usando o GraphQL para contas corporativas

Siga estes passos para começar a usar o GraphQL para gerenciar as suas contas corporativas:
 - Efetuando a autenticação com um token de acesso pessoal
 - Escolher um cliente do GraphQL ou usar o Explorador do GraphQL
 - Configurar a o Insomnia para usar a API do GraphQL

Para alguns exemplos de consulta, veja "[Exemplo de consulta usando a API de Contas corporativas](#an-example-query-using-the-enterprise-accounts-api)".

#### 1. Efetuando a autenticação com seu token de acesso pessoal

1. Para efetuar a autenticação com o GraphQL, você precisa gerar um token de acesso pessoal (PAT) a partir das configurações do desenvolvedor. Para mais informação, consulte "[Criando um token de acesso pessoal](/github/authenticating-to-github/creating-a-personal-access-token)."

2. Conceda permissões de administrador e controle total ao seu token de acesso pessoal para as áreas do GHES que você gostaria de acessar. Para obter a permissão total para repositórios privados, organizações, equipes, dados de usuário e acesso aos dados de cobrança da empresa e de perfil, recomendamos que você selecione estes escopos para o seu token de acesso pessoal:
    - `repo`
    - `admin:org`
    - `usuário`
    - `admin:enterprise`

  Os escopos específicos da conta corporativa são:
    - `admin:enterprise`: Fornece controle total de empresas (inclui `manage_billing:enterprise` e `read:enterprise`)
    - `manage_billing:enterprise`: Lê e grava dados de cobrança da empresa.
    - `read:enterprise`: Lê dados do perfil empresarial.

4. Copie seu token de acesso pessoal e guarde-o em um lugar seguro até adicioná-lo ao seu cliente do GraphQL.

#### 2. Escolha um cliente do GraphQL

Recomendamos que você use o GraphiQL ou outro cliente autônomo do GraphQL que permite configurar a URL de base.

Você também pode considerar o uso destes clientes do GraphQL:
  - [Insomnia](https://support.insomnia.rest/article/176-graphql-queries)
  - [GraphiQL](https://www.gatsbyjs.org/docs/running-queries-with-graphiql/)
  - [Postman](https://learning.getpostman.com/docs/postman/sending_api_requests/graphql/)

As próximas etapas usarão o Insomnia.

#### 3. Configurando o Insomnia para usar a API do GraphQL do GitHub com contas corporativas

1. Adicione a URL de base e o método `POST` ao seu cliente do GraphQL. Ao usar o GraphQL para solicitar informações (consultas), alterar informações (mutações) ou transferir dados usando a API do GitHub, o método HTTP padrão é `POST` e a URL de base segue esta sintaxe:
    - Para a instância de sua empresa: `https://<HOST>/api/graphql`
    - Para o GitHub Enterprise Cloud: `https://api.github.com/graphql`

2. Para efetuar a autenticação, abra o menu de opções de autenticação e selecione **Token portador**. Em seguida, adicione seu token de acesso pessoal que você copiou anteriormente.

 ![Opções de permissão para o token de acesso pessoal](/assets/images/developer/graphql/insomnia-base-url-and-pat.png)

 ![Opções de permissão para o token de acesso pessoal](/assets/images/developer/graphql/insomnia-bearer-token-option.png)

3. Incluir informações do header.
   - Adicione `Content-Type` como header e `application/json` como valor. ![Header padrão](/assets/images/developer/graphql/json-content-type-header.png) ![Header com valor de pré-visualização para a API do Log de Auditoria](/assets/images/developer/graphql/preview-header-for-2.18.png)

Agora você está pronto para começar a fazer consultas.

### Um exemplo e consulta usando a API de Contas corporativas

Essa consulta do GraphQL solicita o número total de repositórios {% if currentVersion != "github-ae@latest" %}`públicos`{% else %}`privados`{% endif %} em cada uma das organizações dos seus aplicativos usando a API de contas corporativas. Para personalizar esta consulta, substitua `<enterprise-account-name>` pelo slug do slug de instância da sua empresa.

{% if currentVersion != "github-ae@latest" %}

```graphql
query publicRepositoriesByOrganization {
  organizationOneAlias: organization(login: "<name-of-organization-one>") {
    # Como usar um fragmento
    ...repositories
  }
  organizationTwoAlias: organization(login: "<name-of-organization-two>") {
    ...repositories
  }
  # organizationThreeAlias ... e assim por diante até, digamos, 100
}
# Como definir um fragmento
fragment repositories on Organization {
  name
  repositories(privacy: PUBLIC){
    totalCount
  }
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

O próximo exemplo de consulta GraphQL mostra como é desafiante recuperar o número de repositórios {% if currentVersion != "github-ae@latest" %}`públicos`{% else %}`privados`{% endif %} em cada organização sem usar a API da conta corporativa.  Observe que a API de Contas corporativas do GraphQL simplificou esta tarefa para empresas, pois você só precisa personalizar uma única variável. Para personalizar esta consulta, substitua `<name-of-organization-one>` e `<name-of-organization-two>`, etc. pelos nomes de organização na sua instância.

{% if currentVersion != "github-ae@latest" %}
```graphql
# Cada organização é consultada separadamente
{
  organizationOneAlias: organization(login: "nameOfOrganizationOne") {
    # How to use a fragment
    ...repositories
  }
  organizationTwoAlias: organization(login: "nameOfOrganizationTwo") {
    ...repositories
  }
  # organizationThreeAlias ... e assim por diante até, digamos, 100
}

## Como definir um fragmento
repositórios do fragmento na organização {
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

### Consulte cada organização separadamente

{% if currentVersion != "github-ae@latest" %}

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

Esta consulta do GraphQL solicita as últimas 5 entradas de registro para uma organização corporativa. Para personalizar esta consulta, substitua `<org-name>` e `<user-name>`.

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

Para obter mais informações sobre como começar com GraphQL, consulte "[Introdução ao GraphQL](/graphql/guides/introduction-to-graphql)" e "[Formando chamadas com o GraphQL](/graphql/guides/forming-calls-with-graphql)".

### Campos e tipos do GraphQL para a API de Contas corporativas

Aqui está uma visão geral das novas consultas, mutações e tipos definidos por esquema disponíveis para uso com a API de Contas corporativas.

Para obter mais detalhes sobre as novas consultas, mutações e tipos definidos por esquema disponíveis para uso com a API de Contas corporativas, consulte a barra lateral com definições detalhadas do GraphQL a partir de qualquer [Página de referência do GraphQL](/graphql).

Você pode acessar a documentação de referência de no explorador do GraphQL no GitHub. Para obter mais informações, consulte "[Usando o explorador](/graphql/guides/using-the-explorer#accessing-the-sidebar-docs). Para obter outras informações, como detalhes de autenticação e limite de taxa, confira os [guias](/graphql/guides).
