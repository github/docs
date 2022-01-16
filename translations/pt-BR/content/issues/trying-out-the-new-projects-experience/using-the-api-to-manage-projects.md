---
title: Usando a API para gerenciar projetos (beta)
intro: Você pode usar a API do GraphQL para encontrar informações sobre projetos e atualizar projetos.
versions:
  fpt: '*'
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
type: how_to
topics:
  - Projects
---

Este artigo demonstra como usar a API do GraphQL para gerenciar um projeto.

{% data reusables.projects.projects-beta %}

{% data reusables.projects.api-beta %}

## Autenticação

{% include tool-switcher %}

{% curl %}

Em todos os exemplos cURL a seguir, substitua `TOKEN` por um token que tem o escopo `read:org` (para consultas) ou `write:org` (para consultas e mutações). Para obter mais informações sobre como criar um token, consulte "[Criar um token de acesso pessoal](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)."

{% endcurl %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Antes de executar os comandos de {% data variables.product.prodname_cli %}, você devrá efetuar a autenticação executando o escopo `gh auth login` e fornecendo um token de autenticação que tem o escopo `read:org` (para consultas) ou o escopo `write:org` (para consultas e mutações). Durante o beta, você não será capaz de efetuar a autenticação usando um navegador web. Para obter mais informações sobre a autenticação de linha de comando, consulte "[gh auth login](https://cli.github.com/manual/gh_auth_login)". Para obter mais informações sobre como criar um token, consulte "[Criar um token de acesso pessoal](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)."

{% endcli %}

{% cli %}

## Usando variáveis

Em todos os exemplos a seguir, você pode usar variáveis para simplificar seus scripts. Use `-F` para passar uma variável que é um número, booleano ou nulo. Use `-f` para outras variáveis. Por exemplo,

```shell
my_org="octo-org"
my_num=5
gh api graphql --header 'GraphQL-Features: projects_next_graphql' -f query='
  query($organization: String! $number: Int!){
    organization(login: $organization){
      projectNext(number: $number) {
        id
      }
    }
  }' -f organization=$my_org -F number=$my_num
```

Para obter mais informações, consulte "[Formando chamadas com o GraphQL](/graphql/guides/forming-calls-with-graphql#working-with-variables)".

{% endcli %}

## Encontrando informações sobre os projetos

Use consultas para obter dados sobre projetos. Para obter mais informações, consulte "[Sobre consultas](/graphql/guides/forming-calls-with-graphql#about-queries)".

### Encontrando o ID do nó de um projeto

Para atualizar seu projeto por meio da API, você precisará conhecer o nó de ID do projeto.

Você pode encontrar o nó do projeto se você souber o nome da organização e o número do projeto. Substitua `ORGANIZATION` pelo nome da sua organização. Por exemplo, `octo-org`. Substitua `NUMBER` pelo número do seu projeto. Para encontrar o número do projeto, consulte a URL do projeto. Por exemplo, `https://github.com/orgs/octo-org/projects/5` tem um número de projeto de 5.

{% include tool-switcher %}

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --header 'GraphQL-Features: projects_next_graphql' \
  --data '{"query":"query{organization(login: \"<em>ORGANIZATION</em>\") {projectNext(number: <em>NUMBER</em>){id}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql --header 'GraphQL-Features: projects_next_graphql' -f query='
  query{
    organization(login: "<em>ORGANIZATION</em>"){
      projectNext(number: <em>NUMBER</em>) {
        id
      }
    }
  }'
```
{% endcli %}

Você também pode encontrar o ID do nó de todos os projetos na sua organização. O exemplo a seguir retornará o ID do nó e o título dos primeiros 20 projetos em uma organização. Substitua `ORGANIZATION` pelo nome da sua organização. Por exemplo, `octo-org`.

{% include tool-switcher %}

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --header 'GraphQL-Features: projects_next_graphql' \
  --data '{"query":"{organization(login: \"<em>ORGANIZATION</em>\") {projectsNext(first: 20) {nodes {id title}}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql --header 'GraphQL-Features: projects_next_graphql' -f query='
  query{
    organization(login: "<em>ORGANIZATION</em>") {
      projectsNext(first: 20) {
        nodes {
          id
          title
        }
      }
    }
  }'
```
{% endcli %}

### Encontrando o ID do nó de um campo

Para atualizar o valor de um campo, você precisará saber o ID do nó do campo. Além disso, para campos de seleção única, você precisará saber o ID das opções.

O exemplo a seguir retornará o ID, o nome e as configurações para os primeiros 20 campos de um projeto. Substitua `PROJECT_ID` pelo ID do nó do seu projeto.

{% include tool-switcher %}

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --header 'GraphQL-Features: projects_next_graphql' \
  --data '{"query":"query{node(id: \"<em>PROJECT_ID</em>\") {... on ProjectNext {fields(first: 20) {nodes {id name settings}}}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql --header 'GraphQL-Features: projects_next_graphql' -f query='
  query{
    node(id: "<em>PROJECT_ID</em>") {
      ... on ProjectNext {
        fields(first: 20) {
          nodes {
            id
            name
            settings
          }
        }
      }
    }
  }'
```
{% endcli %}

A resposta ficará semelhante ao seguinte exemplo:

```json
{
  "data": {
    "node": {
      "fields": {
        "nodes": [
          {
            "id": "MDE2OlByb2plY3ROZXh0RmllbGQxMzE1OQ==",
            "name": "Title",
            "settings": "null"
          },
          {
            "id": "MDE2OlByb2plY3ROZXh0RmllbGQxMzE2MA==",
            "name": "Assignees",
            "settings": "null"
          },
          {
            "id": "MDE2OlByb2plY3ROZXh0RmllbGQxMzE2MQ==",
            "name": "Status",
            "settings": "{\"options\":[{\"id\":\"f75ad846\",\"name\":\"Todo\",\"name_html\":\"Todo\"},{\"id\":\"47fc9ee4\",\"name\":\"In Progress\",\"name_html\":\"In Progress\"},{\"id\":\"98236657\",\"name\":\"Done\",\"name_html\":\"Done\"}]}"
          }
        ]
      }
    }
  }
}
```

Cada campo tem um ID. Além disso, cada opção em um campo de seleção único tem um ID.

### Encontrando informações sobre os itens de um projeto

Você pode consultar a API para encontrar informações sobre itens no seu projeto.

O exemplo a seguir retornará o título e ID dos primeiros 20 itens em um projeto. Para cada item, ela também retornará o valor e nome para os primeiros 8 campos do projeto. Se o item for um problema ou um pull request, ele retornará o login dos primeiros 10 responsáveis. Substitua `PROJECT_ID` pelo ID do nó do seu projeto.

{% include tool-switcher %}

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --header 'GraphQL-Features: projects_next_graphql' \
  --data '{"query":"query{node(id: \"<em>PROJECT_ID</em>\") {... on ProjectNext {items(first: 20) {nodes{title id fieldValues(first: 8) {nodes{value projectField{name}}} content{...on Issue {assignees(first: 10) {nodes{login}}} ...on PullRequest {assignees(first: 10) {nodes{login}}}}}}}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql --header 'GraphQL-Features: projects_next_graphql' -f query='
  query{
    node(id: "<em>PROJECT_ID</em>") {
      ... on ProjectNext {
        items(first: 20) {
          nodes{
            title
            id
            fieldValues(first: 8) {
              nodes{
                value
                projectField{
                  name
                }
              }
            }
            content{
              ...on Issue {
                assignees(first: 10) {
                  nodes{
                    login
                  }
                }
              }
              ...on PullRequest {
                assignees(first: 10) {
                  nodes{
                    login
                  }
                }
              }
            }
          }
        }
      }
    }
  }'
```
{% endcli %}

Um projeto pode conter itens que um usuário não tem permissão para visualizar. Neste caso, a resposta incluirá o item redatado.

```shell
{
  "node": {
  "title": "You can't see this item",
  ...
  }
}
```

## Atualizando projetos

Use mutações para atualizar projetos. Para obter mais informações, consulte "[Sobre mutações](/graphql/guides/forming-calls-with-graphql#about-mutations)".

{% note %}

**Observação:** Você não pode adicionar e atualizar um item na mesma chamada. Você deve usar `addProjectNextItem` para adicionar o item e, em seguida, usar `updateProjectNextItemField` para atualizar o item.

{% endnote %}

### Adicionando um item a um projeto

O exemplo a seguir adicionará um problema ou pull request ao seu projeto. Substitua `PROJECT_ID` pelo ID do nó do seu projeto. Substitua `CONTENT_ID` pelo ID do n[o do problema ou pull request que você deseja adicionar.

{% include tool-switcher %}

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --header 'GraphQL-Features: projects_next_graphql' \
  --data '{"query":"mutation {addProjectNextItem(input: {projectId: \"<em>PROJECT_ID</em>\" contentId: \"<em>CONTENT_ID</em>\"}) {projectNextItem {id}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql --header 'GraphQL-Features: projects_next_graphql' -f query='
  mutation {
    addProjectNextItem(input: {projectId: "<em>PROJECT_ID</em>" contentId: "<em>CONTENT_ID</em>"}) {
      projectNextItem {
        id
      }
    }
  }'
```
{% endcli %}

A resposta conterá o ID do nó do item recém-criado.

```json
{
  "data": {
    "addProjectNextItem": {
      "projectNextItem": {
        "id": "MDE1OlByb2plY3ROZXh0SXRlbTM0MjEz"
      }
    }
  }
}
```

Se você tentar adicionar um item que já existe, o ID do item existente será retornado.

### Atualizando um campo personalizado, sem seleção única

O exemplo a seguir atualizará um campo de data. Substitua `PROJECT_ID` pelo ID do nó do seu projeto. Substitua `ITEM_ID` pelo ID do nó do item que você deseja atualizar. Substitua `FIELD_ID` pelo ID do campo que você deseja atualizar.

{% include tool-switcher %}

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --header 'GraphQL-Features: projects_next_graphql' \
  --data '{"query":"mutation {updateProjectNextItemField(input: {projectId: \"<em>PROJECT_ID</em>\" itemId: \"<em>ITEM_ID</em>\" fieldId: \"<em>FIELD_ID</em>\" value: \"2021-5-11\"}) {projectNextItem {id}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql --header 'GraphQL-Features: projects_next_graphql' -f query='
  mutation {
    updateProjectNextItemField(
      input: {
        projectId: "<em>PROJECT_ID</em>"
        itemId: "<em>ITEM_ID</em>"
        fieldId: "<em>FIELD_ID</em>"
        value: "2021-5-11"
      }
    ) {
      projectNextItem {
        id
      }
    }
  }'
```
{% endcli %}

{% note %}

**Observação:** Você não pode usar `updateProjectNextItemField` para alterar `Assignees`, `Labels`, `Milestone` ou `Repository` porque esses campos são propriedades de pull requests e problemas, não de itens do projeto. Você deve usar [addAssigneesToAssignable](/graphql/reference/mutations#addassigneestoassignable), [removeAssigneesFromAssignable](/graphql/reference/mutations#removeassigneesfromassignable), [addLabelsToLabelable](/graphql/reference/mutations#addlabelstolabelable), [removeLabelsFromLabelable](/graphql/reference/mutations#removelabelsfromlabelable), [updateIssue](/graphql/reference/mutations#updateissue), [updatePullRequest](/graphql/reference/mutations#updatepullrequest) ou mutações de [transferIssue](/graphql/reference/mutations#transferissue).

{% endnote %}

### Atualizando campo de seleção única

O exemplo a seguir atualizará um campo de data.
- `PROJET_ID` - Substituir isso pelo ID do nó do seu projeto.
- `ITEM_ID` - Substituir isso pelo ID do nó do item que você deseja atualizar.
- `FIELD_ID` - Substitua-o pelo ID do campo que você deseja atualizar.
- `OPTION_ID` - Substitua-o pelo ID do valor desejado.

{% include tool-switcher %}

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --header 'GraphQL-Features: projects_next_graphql' \
  --data '{"query":"mutation {updateProjectNextItemField(input: {projectId: \"<em>PROJECT_ID</em>\" itemId: \"<em>ITEM_ID</em>\" fieldId: \"<em>FIELD_ID</em>\" value: \"<em>OPTION_ID</em>\"}) {projectNextItem {id}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql --header 'GraphQL-Features: projects_next_graphql' -f query='
  mutation {
    updateProjectNextItemField(
      input: {
        projectId: "<em>PROJECT_ID</em>"
        itemId: "<em>ITEM_ID</em>"
        fieldId: "<em>FIELD_ID</em>"
        value: "<em>OPTION_ID</em>"
      }
    ) {
      projectNextItem {
        id
      }
    }
  }'
```
{% endcli %}

### Excluir um item de um projeto

O exemplo a seguir excluirá um item de um projeto. Substitua `PROJECT_ID` pelo ID do nó do seu projeto. Substitua `ITEM_ID` pelo Id do nó do item que você deseja excluir.

{% include tool-switcher %}

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --header 'GraphQL-Features: projects_next_graphql' \
  --data '{"query":"mutation {deleteProjectNextItem(input: {projectId: \"<em>PROJECT_ID</em>\" itemId: \"<em>ITEM_ID</em>\"}) {deletedItemId}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql --header 'GraphQL-Features: projects_next_graphql' -f query='
  mutation {
    deleteProjectNextItem(
      input: {
        projectId: "<em>PROJECT_ID</em>"
        itemId: "<em>ITEM_ID</em>"
      }
    ) {
      deletedItemId
    }
  }'
```
{% endcli %}

## Referência

### Objetos

#### ProjectNext

- [Closable](/graphql/reference/interfaces#closable)
- [Nó](/graphql/reference/interfaces#node)
- [Updatable](/graphql/reference/interfaces#updatable)

**Campos**

| Nome                             | Descrição                                                                                                                                                                                                                                                                                                                                                                                                         |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `closed` (`Boolean!`)            | `true` se o projeto estiver fechado.                                                                                                                                                                                                                                                                                                                                                                              |
| `closedAt` (`DataTime!`)         | Identifica a data e a hora em que o objeto foi fechado.                                                                                                                                                                                                                                                                                                                                                           |
| `createdAt` (`DateTime!`)        | Identifica a data e hora em que o objeto foi criado.                                                                                                                                                                                                                                                                                                                                                              |
| `creator` (`Actor`)              | O ator que originalmente criou o projeto.                                                                                                                                                                                                                                                                                                                                                                         |
| `databaseId` (`Int`)             | Identifica a chave primária do banco de dados.                                                                                                                                                                                                                                                                                                                                                                    |
| `description` (`String`)         | A descrição do projeto.                                                                                                                                                                                                                                                                                                                                                                                           |
| `fields` (`[ProjectNextField]!`) | Lista de campos no projeto.<br><br>**Argumentos**<br>`após` (`String`): Retorna os elementos da lista que vêm após o cursor especificado.<br>`antes de` (`String`): Retorna os elementos da lista que vêm antes do cursor especificado.<br>`primeiros` (`Int`): Retorna os primeiros *n* elementos da lista.<br>`últimos` (`Int`): Retorna os últimos elementos *n* da lista. |
| `items` (`[ProjectNextItem]`)    | Lista de itens no projeto.<br><br>**Argumentos**<br>`após` (`String`): Retorna os elementos da lista que vêm após o cursor especificado.<br>`antes de` (`String`): Retorna os elementos da lista que vêm antes do cursor especificado.<br>`primeiros` (`Int`): Retorna os primeiros *n* elementos da lista.<br>`últimos` (`Int`): Retorna os últimos elementos *n* da lista.  |
| `number` (`Int!`)                | O número do projeto.                                                                                                                                                                                                                                                                                                                                                                                              |
| `owner` (`ProjectNextOwner!`)    | O proprietário do projeto. Atualmente, limitado a organizações.                                                                                                                                                                                                                                                                                                                                                   |
| `title` (`String!`)              | O nome do projeto.                                                                                                                                                                                                                                                                                                                                                                                                |
| `updatedAt` (`DateTime!`)        | Identifica a data e hora em que o objeto foi atualizado pela última vez.                                                                                                                                                                                                                                                                                                                                          |
| `viewerCanUpdate` (`Boolean!`)   | Verificar se o visualizador atual pode atualizar este objeto.                                                                                                                                                                                                                                                                                                                                                     |

#### ProjectNextConnection

O tipo de conexão para ProjectNext.

| Nome                        | Descrição                                        |
| --------------------------- | ------------------------------------------------ |
| `edges` ([ProjectNextEdge]) | Uma lista de bordas.                             |
| `nodes` ([ProjectNext])     | Uma lista de nós.                                |
| `pageInfo` (PageInfo!)      | Informações para ajudar na paginação.            |
| `totalCount` (Int!)         | Identifica a contagem total de itens na conexão. |

#### ProjectNextEdge

| Nome                 | Descrição                        |
| -------------------- | -------------------------------- |
| `cursor` (String!)   | Um cursor para uso na paginação. |
| `node` (ProjectCard) | O item no final da borda.        |

#### ProjectNextField

Um campo dentro de um projeto.

| Nome                       | Descrição                                                                |
| -------------------------- | ------------------------------------------------------------------------ |
| `createdAt` (`DateTime!`)  | Identifica a data e hora em que o objeto foi criado.                     |
| `name` (`String!`)         | O nome do campo do projeto.                                              |
| `project` (`ProjectNext!`) | O projeto que contém este campo.                                         |
| `settings` (`String`)      | Representação de string das configurações de campo do projeto.           |
| `updatedAt` (`DateTime!`)  | Identifica a data e hora em que o objeto foi atualizado pela última vez. |

#### ProjectNextFieldConnection

O tipo de conexão para ProjectNextField.

| Nome                             | Descrição                                        |
| -------------------------------- | ------------------------------------------------ |
| `edges` ([ProjectNextFieldEdge]) | Uma lista de bordas.                             |
| `nodes` ([ProjectNextField])     | Uma lista de nós.                                |
| `pageInfo` (PageInfo!)           | Informações para ajudar na paginação.            |
| `totalCount` (Int!)              | Identifica a contagem total de itens na conexão. |

#### ProjectNextFieldEdge

| Nome                 | Descrição                        |
| -------------------- | -------------------------------- |
| `cursor` (String!)   | Um cursor para uso na paginação. |
| `node` (ProjectCard) | O item no final da borda.        |

#### ProjectNextItem

- [Nó](/graphql/reference/interfaces#node)

Um item em um `ProjectNext`.

| Nome                                           | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `content` (`ProjectNextItemContent`)           | O conteúdo do problema ou pull request referenciado.                                                                                                                                                                                                                                                                                                                                                                         |
| `createdAt` (DateTime!)                        | Identifica a data e hora em que o objeto foi criado.                                                                                                                                                                                                                                                                                                                                                                         |
| `creator` (`Actor`)                            | O ator que criou este item.                                                                                                                                                                                                                                                                                                                                                                                                  |
| `databaseId` (`Int`)                           | Identifica a chave primária do banco de dados.                                                                                                                                                                                                                                                                                                                                                                               |
| `fieldValues` (`[ProjectNextItemFieldValue]!`) | Lista de valores de campo para o item.<br><br>**Argumentos**<br>`após` (`String`): Retorna os elementos da lista que vêm após o cursor especificado.<br>`antes de` (`String`): Retorna os elementos da lista que vêm antes do cursor especificado.<br>`primeiros` (`Int`): Retorna os primeiros *n* elementos da lista.<br>`últimos` (`Int`): Retorna os últimos elementos *n* da lista. |
| `project` (`ProjectNext!`)                     | O projeto que contém este item.                                                                                                                                                                                                                                                                                                                                                                                              |
| `title` (`String!`)                            | Título do item.                                                                                                                                                                                                                                                                                                                                                                                                              |
| `updatedAt` (DateTime!)                        | Identifica a data e hora em que o objeto foi atualizado pela última vez.                                                                                                                                                                                                                                                                                                                                                     |

#### ProjectNextItemContent

Conteúdo associado a um `ProjectNextItem`.

**Tipos:**

- `issue` - Referência a um problema
- `pull request` - Referência a um pull request.

#### ProjectNextItemConnection

O tipo de conexão para ProjectNextItem.

| Nome                              | Descrição                                        |
| --------------------------------- | ------------------------------------------------ |
| `edges` ([`ProjectNextItemEdge`]) | Uma lista de bordas.                             |
| `nodes` ([`ProjectNextItem`])     | Uma lista de nós.                                |
| `pageInfo` (`PageInfo!`)          | Informações para ajudar na paginação.            |
| `totalCount` (`Int!`)             | Identifica a contagem total de itens na conexão. |

#### ProjectNextItemEdge

| Nome                   | Descrição                        |
| ---------------------- | -------------------------------- |
| `cursor` (`String!`)   | Um cursor para uso na paginação. |
| `node` (`ProjectCard`) | O item no final da borda.        |

#### ProjectNextItemFieldValue

- [Nó](/graphql/reference/interfaces#node)

Um valor de um campo em um item em um `ProjectNext`.

| Nome                                 | Descrição                                                                |
| ------------------------------------ | ------------------------------------------------------------------------ |
| `createdAt` (`DateTime!`)            | Identifica a data e hora em que o objeto foi criado.                     |
| `creator` (`Actor`)                  | O ator que criou este item.                                              |
| `databaseId` (`Int`)                 | Identifica a chave primária do banco de dados.                           |
| `projectField` (`ProjectNextField!`) | O campo do projeto que contém este valor.                                |
| `projectItem` (`ProjectNextItem!`)   | O item do projeto que contém este valor.                                 |
| `updatedAt` (`DateTime!`)            | Identifica a data e hora em que o objeto foi atualizado pela última vez. |
| `valor`                              | Valor do campo.                                                          |

#### ProjectNextItemFieldValueConnection

O tipo de conexão para ProjectNextItemFieldValue.

| Nome                                        | Descrição                                        |
| ------------------------------------------- | ------------------------------------------------ |
| `edges` ([`ProjectNextItemFieldValueEdge`]) | Uma lista de bordas.                             |
| `nodes` ([`ProjectNextItemFieldValue`])     | Uma lista de nós.                                |
| `pageInfo` (`PageInfo!`)                    | Informações para ajudar na paginação.            |
| `totalCount` (`Int!`)                       | Identifica a contagem total de itens na conexão. |

#### ProjectNextItemEdge

Uma vantagem em uma conexão.

| Nome                   | Descrição                        |
| ---------------------- | -------------------------------- |
| `cursor` (`String!`)   | Um cursor para uso na paginação. |
| `node` (`ProjectCard`) | O item no final da borda.        |

### Interfaces

#### ProjectNextOwner

Representa o proprietário de um projeto.

**Implementado por**

- `organização`

**Campos**

| Nome                                      | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `projectNext` (`ProjectNext`)             | Localizar projeto por número.<br><br>**Argumentos**<br>`número` (`Int!`): O número do projeto a ser encontrado.                                                                                                                                                                                                                                                                                                            |
| `projectsNext` (`ProjectNextConnection!`) | Uma lista de projeto após os projetos do proprietário.<br><br>**Argumentos**<br>`após` (`String`): Retorna os elementos da lista que vêm após o cursor especificado.<br>`antes de` (`String`): Retorna os elementos da lista que vêm antes do cursor especificado.<br>`primeiros` (`Int`): Retorna os primeiros *n* elementos da lista.<br>`últimos` (`Int`): Retorna os últimos elementos *n* da lista. |

### Mutações

#### addProjectNextItem

Adiciona um item existente (Problema ou PullRequest) a um projeto.

**Campos de entrada**

- `input`(`AddProjectNextItemInput!`)

**Campos de retorno**

| Nome                                  | Descrição                                                        |
| ------------------------------------- | ---------------------------------------------------------------- |
| `clientMutationId` (`String`)         | Um identificador exclusivo para o cliente que realiza a mutação. |
| `projectNextItem` (`ProjectNextItem`) | O item adicionado ao projeto.                                    |

#### updateProjectNextItemField

Atualiza um campo de um item de um projeto.

**Campos de entrada**

- `input`(`UpdateProjectNextItemFieldInput!`)

**Campos de retorno**

| Nome                                  | Descrição                                                        |
| ------------------------------------- | ---------------------------------------------------------------- |
| `clientMutationId` (`String`)         | Um identificador exclusivo para o cliente que realiza a mutação. |
| `projectNextItem` (`ProjectNextItem`) | O item adicionado ao projeto.                                    |

#### deleteProjectNextItem

Exclui um item de um projeto.

**Campos de entrada**

- `input`(`DeleteProjectNextItemInput!`)

**Campos de retorno**

| Nome                          | Descrição                                                        |
| ----------------------------- | ---------------------------------------------------------------- |
| `clientMutationId` (`String`) | Um identificador exclusivo para o cliente que realiza a mutação. |
| `deletedItemId` (`ID`)        | O ID do item excluído.                                           |

### Objetos de entrada

#### DeleteProjectNextItemInput

Tipo de entrada gerado automaticamente no AddProjectNextItem.

**Campos de entrada**

| Nome                          | Descrição                                                        |
| ----------------------------- | ---------------------------------------------------------------- |
| `clientMutationId` (`String`) | Um identificador exclusivo para o cliente que realiza a mutação. |
| `contentId` (`ID!`)           | O ID do item (Problema ou PullRequest) a ser adicionado.         |
| `projectId` (`ID!`)           | O ID do Projeto ao qual adicionar o item.                        |

#### UpdateProjectNextItemFieldInput

Tipo de entrada gerado automaticamente para UpdateProjectNextItemField.

**Campos de entrada**

| Nome                          | Descrição                                                                           |
| ----------------------------- | ----------------------------------------------------------------------------------- |
| `clientMutationId` (`String`) | Um identificador exclusivo para o cliente que realiza a mutação.                    |
| `fieldId` (`ID!`)             | O ID do campo a ser atualizado. Atualmente, suporta campos e status personalizados. |
| `itemId` (`ID!`)              | O ID do item a ser atualizado.                                                      |
| `projectId` (`ID!`)           | O ID do Projeto.                                                                    |
| `value` (`String!`)           | O valor que será definido no campo.                                                 |

#### DeleteProjectNextItemInput

Tipo de entrada gerado automaticamente de DeleteProjectNextItem.

**Campos de entrada**

| Nome                          | Descrição                                                        |
| ----------------------------- | ---------------------------------------------------------------- |
| `clientMutationId` (`String`) | Um identificador exclusivo para o cliente que realiza a mutação. |
| `itemId` (`ID!`)              | O ID do item a ser removido.                                     |
| `projectId` (`ID!`)           | O ID do Projeto do qual o item deve ser removido.                |
