---
title: Automatizando projetos (beta)
intro: 'Você pode usar fluxos de trabalho integrados ou a API e {% data variables.product.prodname_actions %} para gerenciar seus projetos.'
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: tutorial
topics:
  - Projects
  - Workflows
  - Project management
---

{% data reusables.projects.projects-beta %}

{% data reusables.projects.graphql-deprecation %}

## Introdução

Você pode adicionar a automação para ajudar a gerenciar seu projeto. Os projetos (beta) incluem fluxos de trabalho internos que você pode configurar por meio da interface do usuário. Além disso, você pode escrever fluxos de trabalho personalizados com a API do GraphQL e {% data variables.product.prodname_actions %}.

## Fluxos de trabalho integrados

{% data reusables.projects.about-workflows %}

Você pode habilitar ou desabilitar os fluxos de trabalho internos para o seu projeto.

{% data reusables.projects.enable-basic-workflow %}

## Fluxos de trabalho {% data variables.product.prodname_actions %}

Esta seção demonstra como usar a API do GraphQL e {% data variables.product.prodname_actions %} para adicionar um pull request a um projeto da organização. No exemplo de fluxos de trabalho, quando o pull request é marcado como "pronto para revisão", uma nova tarefa é adicionada ao projeto com um campo "Status" definido como "Todo", e a data atual é adicionada a um campo personalizado "Data de postagem".

Você pode copiar um dos fluxos de trabalho abaixo e modificá-lo conforme descrito na tabela abaixo para atender às suas necessidades.

Um projeto pode incluir vários repositórios, mas um fluxo de trabalho é específico para um repositório. Adicione o fluxo de trabalho a cada repositório que você deseja que seu projeto monitore. Para obter mais informações sobre como criar arquivos de fluxo de trabalho, consulte "[Início rápido para {% data variables.product.prodname_actions %}](/actions/quickstart)".

Este artigo pressupõe que você tem um entendimento básico de {% data variables.product.prodname_actions %}. Para obter mais informações sobre {% data variables.product.prodname_actions %}, consulte "[{% data variables.product.prodname_actions %}](/actions).

Para obter mais informações sobre outras alterações que você pode fazer no seu projeto por meio da API, consulte "[Usando a API para gerenciar projetos](/issues/trying-out-the-new-projects-experience/using-the-api-to-manage-projects)".

{% note %}

**Observação:** `GITHUB_TOKEN` tem o escopo para o nível de repositório e não pode acessar projetos (beta). Para acessar projetos (beta) você pode criar um {% data variables.product.prodname_github_app %} (recomendado para projetos organizacionais) ou um token de acesso pessoal (recomendado para projetos de usuários). Exemplos de fluxo de trabalho para ambas as abordagens são mostrados abaixo.

{% endnote %}

### Exemplo de fluxo de trabalho que efetua a autenticação com um {% data variables.product.prodname_github_app %}

1. Crie um {% data variables.product.prodname_github_app %} ou escolha um {% data variables.product.prodname_github_app %} existente pertencente à sua organização. Para obter mais informações, consulte "[Criando um {% data variables.product.prodname_github_app %}](/developers/apps/building-github-apps/creating-a-github-app)."
2. Dê as suas permissões de leitura e gravação de {% data variables.product.prodname_github_app %} para projetos de organização. Para obter mais informações, consulte "[Editando as permissões de {% data variables.product.prodname_github_app %}de](/developers/apps/managing-github-apps/editing-a-github-apps-permissions)."

   {% note %}

   **Observação:** Você pode controlar a permissão do seu aplicativo para projetos de organização e projetos de repositório. Você deve dar permissão de leitura e gravação de projetos de organização; a permissão de leitura e gravação para projetos de repositório não será suficiente.

   {% endnote %}

3. Instale o {% data variables.product.prodname_github_app %} na sua organização. Instale-o em todos os repositórios que o seu projeto precisa acessar. Para obter mais informações, consulte "[Instalando {% data variables.product.prodname_github_apps %}](/developers/apps/managing-github-apps/installing-github-apps#installing-your-private-github-app-on-your-repository)."
4. Armazene o ID do seu {% data variables.product.prodname_github_app %} como um segredo no seu repositório ou organização. No fluxo de trabalho a seguir, substitua `APP_ID` pelo nome do segredo. Você pode encontrar o ID do seu aplicativo na página de configurações do seu aplicativo ou por meio da API do aplicativo. Para obter mais informações, consulte "[Aplicativos](/rest/reference/apps#get-an-app)".
5. Gerar uma chave privada para o seu aplicativo. Armazene o conteúdo do arquivo resultante como um segredo no seu repositório ou organização. (Armazene todo o conteúdo do arquivo, incluindo `-----BEGIN RSA PRIVATE KEY-----` e `-----END RSA PRIVATE KEY-----`.) No fluxo de trabalho a seguir, substitua `APP_PEM` pelo nome do segredo. Para obter mais informações, consulte "[Efetuando a autenticação com o {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps/authenticating-with-github-apps#generating-a-private-key)".
6. No fluxo de trabalho a seguir, substitua `YOUR_ORGANIZATION` pelo nome da sua organização. Por exemplo, `octo-org`. Substitua `YOUR_PROJECT_NUMBER` pelo número do seu projeto. Para encontrar o número do projeto, consulte a URL do projeto. Por exemplo, `https://github.com/orgs/octo-org/projects/5` tem um número de projeto de 5.

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

name: Add PR to project
on:
  pull_request:
    types:
      - ready_for_review
jobs:
  track_pr:
    runs-on: ubuntu-latest
    steps:
      - name: Generate token
        id: generate_token
        uses: tibdex/github-app-token@36464acb844fc53b9b8b2401da68844f6b05ebb0
        with:
          app_id: {% raw %}${{ secrets.APP_ID }}{% endraw %}
          private_key: {% raw %}${{ secrets.APP_PEM }}{% endraw %}

      - name: Get project data
        env:
          GITHUB_TOKEN: {% raw %}${{ steps.generate_token.outputs.token }}{% endraw %}
          ORGANIZATION: YOUR_ORGANIZATION
          PROJECT_NUMBER: YOUR_PROJECT_NUMBER
        run: |
          gh api graphql -f query='
            query($org: String!, $number: Int!) {
              organization(login: $org){
                projectV2(number: $number) {
                  id
                  fields(first:20) {
                    nodes {
                      ... on ProjectV2Field {
                        id
                        name
                      }
                      ... on ProjectV2SingleSelectField {
                        id
                        name
                        options {
                          id
                          name
                        }
                      }
                    }
                  }
                }
              }
            }' -f org=$ORGANIZATION -F number=$PROJECT_NUMBER > project_data.json

          echo 'PROJECT_ID='$(jq '.data.organization.projectV2.id' project_data.json) >> $GITHUB_ENV
          echo 'DATE_FIELD_ID='$(jq '.data.organization.projectV2.fields.nodes[] | select(.name== "Date posted") | .id' project_data.json) >> $GITHUB_ENV
          echo 'STATUS_FIELD_ID='$(jq '.data.organization.projectV2.fields.nodes[] | select(.name== "Status") | .id' project_data.json) >> $GITHUB_ENV
          echo 'TODO_OPTION_ID='$(jq '.data.organization.projectV2.fields.nodes[] | select(.name== "Status") | .options[] | select(.name=="Todo") |.id' project_data.json) >> $GITHUB_ENV

      - name: Add PR to project
        env:
          GITHUB_TOKEN: {% raw %}${{ steps.generate_token.outputs.token }}{% endraw %}
          PR_ID: {% raw %}${{ github.event.pull_request.node_id }}{% endraw %}
        run: |
          item_id="$( gh api graphql -f query='
            mutation($project:ID!, $pr:ID!) {
              addProjectV2ItemById(input: {projectId: $project, contentId: $pr}) {
                item {
                  id
                }
              }
            }' -f project=$PROJECT_ID -f pr=$PR_ID --jq '.data.addProjectV2ItemById.item.id')"

            echo 'ITEM_ID='$item_id >> $GITHUB_ENV

      - name: Get date
        run: echo "DATE=$(date +"%Y-%m-%d")" >> $GITHUB_ENV

      - name: Set fields
        env:
          GITHUB_TOKEN: {% raw %}${{ steps.generate_token.outputs.token }}{% endraw %}
        run: |
          gh api graphql -f query='
            mutation (
              $project: ID!
              $item: ID!
              $status_field: ID!
              $status_value: String!
              $date_field: ID!
              $date_value: Date!
            ) {
              set_status: updateProjectV2ItemFieldValue(input: {
                projectId: $project
                itemId: $item
                fieldId: $status_field
                value: { 
                  singleSelectOptionId: $status_value
                  }
              }) {
                projectV2Item {
                  id
                  }
              }
              set_date_posted: updateProjectV2ItemFieldValue(input: {
                projectId: $project
                itemId: $item
                fieldId: $date_field
                value: { 
                  date: $date_value
                }
              }) {
                projectV2Item {
                  id
                }
              }
            }' -f project=$PROJECT_ID -f item=$ITEM_ID -f status_field=$STATUS_FIELD_ID -f status_value={% raw %}${{ env.TODO_OPTION_ID }}{% endraw %} -f date_field=$DATE_FIELD_ID -f date_value=$DATE --silent

```

### Exemplo de fluxo de trabalho que efetua a autenticação com um token de acesso pessoal

1. Crie um token de acesso pessoal com os escopos `projeto` e `repositório`. Para obter mais informações, consulte "[Criando um token de acesso pessoal](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)."
2. Salve o token de acesso pessoal como um segredo no seu repositório ou organização.
3. No fluxo de trabalho a seguir, substitua `YOUR_TOKEN` pelo nome do segredo. Substitua `YOUR_ORGANIZATION` pelo nome da sua organização. Por exemplo, `octo-org`. Substitua `YOUR_PROJECT_NUMBER` pelo número do seu projeto. Para encontrar o número do projeto, consulte a URL do projeto. Por exemplo, `https://github.com/orgs/octo-org/projects/5` tem um número de projeto de 5.

```yaml{:copy}
name: Add PR to project
on:
  pull_request:
    types:
      - ready_for_review
jobs:
  track_pr:
    runs-on: ubuntu-latest
    steps:
      - name: Get project data
        env:
          GITHUB_TOKEN: {% raw %}${{ secrets.YOUR_TOKEN }}{% endraw %}
          ORGANIZATION: YOUR_ORGANIZATION
          PROJECT_NUMBER: YOUR_PROJECT_NUMBER
        run: |
          gh api graphql -f query='
            query($org: String!, $number: Int!) {
              organization(login: $org){
                projectV2(number: $number) {
                  id
                  fields(first:20) {
                    nodes {
                      ... on ProjectV2Field {
                        id
                        name
                      }
                      ... on ProjectV2SingleSelectField {
                        id
                        name
                        options {
                          id
                          name
                        }
                      }
                    }
                  }
                }
              }
            }' -f org=$ORGANIZATION -F number=$PROJECT_NUMBER > project_data.json

          echo 'PROJECT_ID='$(jq '.data.organization.projectV2.id' project_data.json) >> $GITHUB_ENV
          echo 'DATE_FIELD_ID='$(jq '.data.organization.projectV2.fields.nodes[] | select(.name== "Date posted") | .id' project_data.json) >> $GITHUB_ENV
          echo 'STATUS_FIELD_ID='$(jq '.data.organization.projectV2.fields.nodes[] | select(.name== "Status") | .id' project_data.json) >> $GITHUB_ENV
          echo 'TODO_OPTION_ID='$(jq '.data.organization.projectV2.fields.nodes[] | select(.name== "Status") | .options[] | select(.name=="Todo") |.id' project_data.json) >> $GITHUB_ENV

      - name: Add PR to project
        env:
          GITHUB_TOKEN: {% raw %}${{ secrets.YOUR_TOKEN }}{% endraw %}
          PR_ID: {% raw %}${{ github.event.pull_request.node_id }}{% endraw %}
        run: |
          item_id="$( gh api graphql -f query='
            mutation($project:ID!, $pr:ID!) {
              addProjectV2ItemById(input: {projectId: $project, contentId: $pr}) {
                item {
                  id
                }
              }
            }' -f project=$PROJECT_ID -f pr=$PR_ID --jq '.data.addProjectV2ItemById.item.id')"

            echo 'ITEM_ID='$item_id >> $GITHUB_ENV

      - name: Get date
        run: echo "DATE=$(date +"%Y-%m-%d")" >> $GITHUB_ENV

      - name: Set fields
        env:
          GITHUB_TOKEN: {% raw %}${{ secrets.YOUR_TOKEN }}{% endraw %}
        run: |
          gh api graphql -f query='
            mutation (
              $project: ID!
              $item: ID!
              $status_field: ID!
              $status_value: String!
              $date_field: ID!
              $date_value: Date!
            ) {
              set_status: updateProjectV2ItemFieldValue(input: {
                projectId: $project
                itemId: $item
                fieldId: $status_field
                value: { 
                  singleSelectOptionId: $status_value
                  }
              }) {
                projectV2Item {
                  id
                  }
              }
              set_date_posted: updateProjectV2ItemFieldValue(input: {
                projectId: $project
                itemId: $item
                fieldId: $date_field
                value: { 
                  date: $date_value
                }
              }) {
                projectV2Item {
                  id
                }
              }
            }' -f project=$PROJECT_ID -f item=$ITEM_ID -f status_field=$STATUS_FIELD_ID -f status_value={% raw %}${{ env.TODO_OPTION_ID }}{% endraw %} -f date_field=$DATE_FIELD_ID -f date_value=$DATE --silent

```

### Explicação do fluxo de trabalho

A tabela a seguir explica as seções dos fluxos de trabalho de exemplo e mostra como adaptar os fluxos de trabalho para seu próprio uso.

<table class="table-fixed">

<tr>
<td>

```yaml
on:
  pull_request:
    types:
      - ready_for_review
```

</td>
<td>
Este fluxo de trabalho é executado sempre que um pull request no repositório for marcado como "pronto para revisão".
</td>
</tr>

<tr>
<td>

{% data variables.product.prodname_github_app %} only:

```yaml
- name: Generate token
  id: generate_token
  uses: tibdex/github-app-token@36464acb844fc53b9b8b2401da68844f6b05ebb0
  with:
    app_id: {% raw %}${{ secrets.APP_ID }}{% endraw %}
    private_key: {% raw %}${{ secrets.APP_PEM }}{% endraw %}
```

</td>
<td>
Usa a ação <a href="https://github.com/tibdex/github-app-token">tibdex/github-app-token</a> para gerar um token de acesso da instalação para o seu aplicativo no ID do aplicativo e chave privada. O token de acesso da instalação é acessado mais adiante no fluxo de trabalho como <code>{% raw %}${{ steps.generate_token.outputs.token }}{% endraw %}</code>.
<br>
<br>
Substitua <code>APP_ID</code> pelo nome do segredo que contém o ID do seu aplicativo.
<br>
<br>
Substita <code>APP_PEM</code> pelo nome do segredo que contém a chave privada do seu aplicativo.
</td>
</tr>

<tr>
<td>

{% data variables.product.prodname_github_app %}:

```yaml
env:
  GITHUB_TOKEN: {% raw %}${{ steps.generate_token.outputs.token }}{% endraw %}
  ORGANIZATION: YOUR_ORGANIZATION
  PROJECT_NUMBER: YOUR_PROJECT_NUMBER
```

Personal access token:

```yaml
env:
  GITHUB_TOKEN: {% raw %}${{ secrets.YOUR_TOKEN }}{% endraw %}
  ORGANIZATION: YOUR_ORGANIZATION
  PROJECT_NUMBER: YOUR_PROJECT_NUMBER
```

</td>
<td>
Define variáveis de ambiente para esta etapa.
<br>
<br>
Se você estiver usando um token de acesso pessoal, substitua <code>YOUR_TOKEN</code> pelo nome do segredo que contém o seu token de acesso pessoal.
<br>
<br>
Substitua <code>YOUR_ORGANIZATION</code> pelo nome da sua organização. Por exemplo, <code>octo-org</code>.
<br>
<br>
Substitua <code>YOUR_PROJECT_NUMBER</code> pelo número do seu projeto. Para encontrar o número do projeto, consulte a URL do projeto. Por exemplo, <code>https://github.com/orgs/octo-org/projects/5</code> tem um número de projeto de 5.
</td>
</tr>

<tr>
<td>

```yaml
gh api graphql -f query='
  query($org: String!, $number: Int!) {
    organization(login: $org){
      projectV2(number: $number) {
        id
        fields(first:20) {
          nodes {
            ... on ProjectV2Field {
              id
              name
            }
            ... on ProjectV2SingleSelectField {
              id
              name
              options {
                id
                name
              }
            }
          }
        }
      }
    }
  }'  -f org=$ORGANIZATION -F number=$PROJECT_NUMBER > project_data.json
```

</td>
<td>
<p>Usa <a href="https://cli.github.com/manual/">{% data variables.product.prodname_cli %}</a> para consultar a API para o ID do projeto e devolver o nome e o ID dos primeiros 20 campos do projeto. <code>campos</code> retorna uma união e a consulta usa fragmentos inline (<code>... on</code>) para retornar informações sobre os campos <code>ProjectV2Field</code> e <code>ProjectV2SingleSelectField</code>.</p>

<p>A resposta é armazenada em um arquivo denominado <code>project_data.json</code>.</p>
</td>
</tr>

<tr>
<td>

```yaml
echo 'PROJECT_ID='$(jq '.data.organization.projectV2.id' project_data.json) >> $GITHUB_ENV
echo 'DATE_FIELD_ID='$(jq '.data.organization.projectV2.fields.nodes[] | select(.name== "Date posted") | .id' project_data.json) >> $GITHUB_ENV
echo 'STATUS_FIELD_ID='$(jq '.data.organization.projectV2.fields.nodes[] | select(.name== "Status") | .id' project_data.json) >> $GITHUB_ENV
echo 'TODO_OPTION_ID='$(jq '.data.organization.projectV2.fields.nodes[] | select(.name== "Status") | .options[] | select(.name=="Todo") |.id' project_data.json) >> $GITHUB_ENV
```

</td>
<td>
Analisa a resposta da consulta da API e armazena os IDs relevantes como variáveis de ambiente. Modifique este ID para obter o ID para diferentes campos ou opções. Por exemplo:
<ul>
<li>Para obter o ID de um campo denominado <code>Team</code>, adicione <code>echo 'TEAM_FIELD_ID='$(jq '.data.organization.projectV2.fields.nodes[] | select(.name== "Team") | .id' project_data.json) >> $GITHUB_ENV</code>.</li>
<li>Para obter o ID de uma opção denominada <code>Octoteam</code> para <code>Team</code> selecione o campo, adicione <code>echo 'OCTOTEAM_OPTION_ID='$(jq '.data.organization.projectV2.fields.nodes[] | select(.name== "Team") |.options[] | select(.name=="Octoteam") |.id' project_data.json) >> $GITHUB_ENV</code></li>
</ul>
<strong>Observação: </strong>Este fluxo de trabalho pressupõe que você tem um projeto com um único campo selecionado denominado "Status" que inclui uma opção denominada "Todo" e um campo de data denominado "Date posted". Você deve modificar esta seção para corresponder aos campos presentes na sua tabela.
</td>
</tr>

<tr>
<td>

{% data variables.product.prodname_github_app %}:

```yaml
env:
  GITHUB_TOKEN: {% raw %}${{ steps.generate_token.outputs.token }}{% endraw %}
  PR_ID: {% raw %}${{ github.event.pull_request.node_id }}{% endraw %}
```

Personal access token:

```yaml
env:
  GITHUB_TOKEN: {% raw %}${{ secrets.YOUR_TOKEN }}{% endraw %}
  PR_ID: {% raw %}${{ github.event.pull_request.node_id }}{% endraw %}
```

</td>
<td>
Define variáveis de ambiente para esta etapa. <code>GITHUB_TOKEN</code> está descrito acima. <code>PR_ID</code> é o ID do pull request que acionou este fluxo de trabalho.

</td>
</tr>

<tr>
<td>

```yaml
item_id="$( gh api graphql -f query='
  mutation($project:ID!, $pr:ID!) {
    addProjectV2ItemById(input: {projectId: $project, contentId: $pr}) {
      item {
        id
      }
    }
  }' -f project=$PROJECT_ID -f pr=$PR_ID --jq '.data.addProjectV2ItemById.item.id')"
```

</td>
<td>
Usa <a href="https://cli.github.com/manual/">{% data variables.product.prodname_cli %}</a> e a API para adicionar o pull request que acionou este fluxo de trabalho ao projeto. O <code>jq</code> analisa a resposta para obter o ID do item criado.
</td>
</tr>

<tr>
<td>

```yaml
echo 'ITEM_ID='$item_id >> $GITHUB_ENV
```

</td>
<td>
Armazena o ID do item criado como uma variável de ambiente.
</td>
</tr>

<tr>
<td>

```yaml
echo "DATE=$(date +"%Y-%m-%d")" >> $GITHUB_ENV
```

</td>
<td>
Salva a data atual como uma variável de ambiente no formato <code>yyyy-mm-dd</code>.
</td>
</tr>

<tr>
<td>

{% data variables.product.prodname_github_app %}:

```yaml
env:
  GITHUB_TOKEN: {% raw %}${{ steps.generate_token.outputs.token }}{% endraw %}
```

Personal access token:

```yaml
env:
  GITHUB_TOKEN: {% raw %}${{ secrets.YOUR_TOKEN }}{% endraw %}
```

</td>
<td>
Define variáveis de ambiente para esta etapa. <code>GITHUB_TOKEN</code> está descrito acima.

</td>
</tr>

<tr>
<td>

```yaml
gh api graphql -f query='
  mutation (
    $project: ID!
    $item: ID!
    $status_field: ID!
    $status_value: String!
    $date_field: ID!
    $date_value: Date!
  ) {
    set_status: updateProjectV2ItemFieldValue(input: {
      projectId: $project
      itemId: $item
      fieldId: $status_field
      value: { 
        singleSelectOptionId: $status_value
        }
    }) {
      projectV2Item {
        id
        }
    }
    set_date_posted: updateProjectV2ItemFieldValue(input: {
      projectId: $project
      itemId: $item
      fieldId: $date_field
      value: { 
        date: $date_value
      }
    }) {
      projectV2Item {
        id
      }
    }
  }' -f project=$PROJECT_ID -f item=$ITEM_ID -f status_field=$STATUS_FIELD_ID -f status_value={% raw %}${{ env.TODO_OPTION_ID }}{% endraw %} -f date_field=$DATE_FIELD_ID -f date_value=$DATE --silent
```

</td>
<td>
Define o valor do campo <code>Status</code> como <code>Todo</code>. Define o valor do campo <code>Date posted</code>.
</td>
</tr>

</table>
